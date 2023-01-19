class LocalVideo {
    // 从本地读取视频文件，并且生成截图，meta信息等。
  constructor(file){
    var url = URL.createObjectURL(file)
    this. videoElement = document.createElement('video');
    this.videoElement.src =url
    this.meta = new ex.FreePromise()
    this.videoElement.addEventListener('loadedmetadata', ()=> {
      this.meta.resolve({
        duration: this.videoElement.duration,
        width: this.videoElement.videoWidth,
        height: this.videoElement.videoHeight
      })
    });
    this.canplay = new ex.FreePromise()
    this.videoElement.addEventListener("canplay",()=>{
      this.canplay.resolve()
    })

  }
  async getMeta(){
    var resp = await this.meta.promise
    return resp
  }
  async screenShot(option={currentTime:3,upload_path:'/d/upload?path=general_upload/images&split=month',maxspan:1000}){
   
    var videoElement = this.videoElement
        videoElement.currentTime = option.currentTime
        videoElement.crossorigin="anonymous"
        cfg.show_load('获取截图...')
        await this.canplay.promise
       
        var canvas = document.createElement("canvas");
        // var canvas = self.$el.querySelector('.myCanvas')
        var max = Math.max(videoElement.videoWidth,videoElement.videoHeight)
        if(max >option. maxspan){
          var scale = option.maxspan / max
        }else{
          var scale = 1
        }
        canvas.width = videoElement.videoWidth * scale;
        canvas.height = videoElement.videoHeight * scale;
        canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        var imgDataUrl = canvas.toDataURL("image/jpeg",0.9);
        const blob = file_tool.dataURItoBlob(imgDataUrl);
        cfg.hide_load()
        var formData = new FormData();
    
        // formData.append('auth', state.token.auth); 可以选择性的加入一些鉴权
    
        formData.append('file', blob);
        cfg.show_load("上传截图...")
        if(formData.fd){
          var real = formData.fd
        }else{
          var real = formData
        }
        var resp = await  ex.uploadFormData(real,option.upload_path)
        cfg.hide_load()
        return resp.data[0]

  }
}

var file_tool =   {
    LocalVideo,
    videoScreenShot(url,option={currentTime:3,upload_path:'/d/upload?path=general_upload/images&split=month',maxspan:1000}){
        /*self是废弃的一个参数，是vue的组件
        @url: 可以由一个file对象转换而来， url = URL.createObjectURL(file)
        */
        var pro = new ex.FreePromise()
     
        const videoElement = document.createElement('video');
        // var videoElement = self.$el.querySelector('.myvideo')
        videoElement.src =url
        videoElement.currentTime = option.currentTime
        videoElement.crossorigin="anonymous"
        cfg.show_load('获取截图...')
        videoElement.addEventListener("canplay",()=>{
          var canvas = document.createElement("canvas");
          // var canvas = self.$el.querySelector('.myCanvas')
          var max = Math.max(videoElement.videoWidth,videoElement.videoHeight)
          if(max >option. maxspan){
            var scale = option.maxspan / max
          }else{
            var scale = 1
          }
          canvas.width = videoElement.videoWidth * scale;
          canvas.height = videoElement.videoHeight * scale;
          canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          var imgDataUrl = canvas.toDataURL("image/jpeg",0.9);
          const blob = this.dataURItoBlob(imgDataUrl);
          cfg.hide_load()
          var formData = new FormData();
      
         // formData.append('auth', state.token.auth); 可以选择性的加入一些鉴权
      
          formData.append('file', blob);
          cfg.show_load("上传截图...")
          if(formData.fd){
            var real = formData.fd
          }else{
            var real = formData
          }
         
           ex.uploadFormData(real,option.upload_path).then(resp=>{
             cfg.hide_load()
             pro.resolve(resp.data[0])
           })
      
          // var img=new Image();
          // img.crossOrigin="anonymous"
          // var img = self.$el.querySelector('.myimg')
          // var img = document.createElement("img");
          // var src = canvas.toDataURL("image/png");
          // img.src = canvas.toDataURL("image/png");
          // img.width = 400;
          // img.height = 300;
          // var dom = self.$el.querySelector('.myctn')
          // dom.appendChild(img)
        })
        return pro.promise
      },
      dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        // 转换出来的东西，可以用formData上传后台
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
          byteString = atob(dataURI.split(',')[1]);
        } else byteString = unescape(dataURI.split(',')[1]);
      
        // separate out the mime component
        const mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
      
        // write the bytes of the string to a typed array
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
      },
      read_file(file,option){
        /**
         * option={start=0,end=5*1024*1024} 文件的起始和终止
         * file是input选择的文件
         *
         * 返回arrayBuffer类型
         */

        return new Promise((resolve,reject)=>{
            var reader = new FileReader()
            if (option.end){
                var start = option.start || 0
              reader.readAsArrayBuffer(file.slice(start,option.end));
            }else{
              reader.readAsArrayBuffer(file);
            }
            reader.onload = () => {
              var data = reader.result
              resolve(data)
            }
          })
      },
      async file_md5(data){
        /**
         * var data = await file_tool.read_file(file)
         */
        await ex.load_js('https://lib.baomitu.com/md5-wasm/1.2.0/md5-wasm.min.js')
        return await window.md5WASM(data)
    },
    async sliceUpload(upload_url, file,{slice_size=20*1024*1024,process_handler,file_name,thread=3}={}){
        var file_length = file.size
        var slice_list =[]
        var _current_index = 0
        var count = 0
        while (true){
            var this_last_index= Math.min( _current_index + slice_size ,file_length)
            slice_list.push({start:_current_index,end:this_last_index,index:count})
            count +=1
            if(this_last_index >= file_length){
                break
            }
            _current_index = this_last_index
        }
        var total_length = slice_list.length
        var loaded = 0
        var _upload =async (item) =>{
            var dd = await this.read_file(file,{start:item.start,end:item.end})
            var name =  await this.file_md5(dd)
            var file_blob = new Blob([dd]);
            var resp = await ex.uploadFile(upload_url,file_blob,{file_name:name})
            loaded += 1
            process_handler({loaded:loaded,total:total_length})
            var out_list = []
            out_list.push( {index:item.index, url : resp.data[0] } )
            if(slice_list.length >0){
                var url_list = await _upload(slice_list.pop())
                out_list =  out_list.concat(url_list)
                return  out_list
            }else{
                return out_list
            }
        }

        var promis_list = []
        var thread_count =0
        while ( thread_count <= thread){
            if(slice_list.length >0){
                var item = slice_list.pop()
                var pp  = _upload(item)
                promis_list.push(pp)
            }else{
                break
            }
        }

        // for(var i=0;i<=3;i++){
        //     var item = slice_list.pop()
        //      var pp  = _upload(item)
        //     promis_list.push(pp)
        // }
        var uploaded_list  =  await  Promise.all(promis_list)
        var all_file_dict =[]
        ex.each(uploaded_list,item_list =>{
            all_file_dict = all_file_dict.concat(item_list)
        })
        all_file_dict = all_file_dict.sort( (a,b) =>   a.index -b.index )
        var all_file = ex.map(all_file_dict,ii => ii.url)

        // process_handler({loaded:})

        return all_file



        // var _current_thread = 0
        // ex.each( slice_list,item=>{
        //     if(_current_thread <=3){
        //         var dd = this.read_file(file,{start:})
        //         ex.uploadFile(upload_url,file,{process_handler:process_handler,file_name:file_name}).then((resp)=>{
        //             _current_thread -=1
        //         })
        //     }
        //
        // } )
        //
        //
        // var resp = await ex.uploadFile(upload_url,file,{process_handler:process_handler,file_name:file_name})

    }

}

export default file_tool