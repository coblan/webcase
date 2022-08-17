export default  {
    videoScreenShot(url,option={currentTime:3,upload_path:'/d/upload?path=general_upload/images&split=month'}){
        /*self是废弃的一个参数，是vue的组件
        @url: 可以由一个file对象转换而来， url = URL.createObjectURL(file)
        */
        var pro = new ex.FreePromise()
        var scale =1
        const videoElement = document.createElement('video');
        // var videoElement = self.$el.querySelector('.myvideo')
        videoElement.src =url
        videoElement.currentTime = option.currentTime
        videoElement.crossorigin="anonymous"
        cfg.show_load('获取截图...')
        videoElement.addEventListener("canplay",()=>{
          var canvas = document.createElement("canvas");
          // var canvas = self.$el.querySelector('.myCanvas')
          canvas.width = videoElement.videoWidth * scale;
          canvas.height = videoElement.videoHeight * scale;
          canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          var imgDataUrl = canvas.toDataURL("image/png");
          const blob = this.dataURItoBlob(imgDataUrl);
          cfg.hide_load()
          var formData = new FormData();
      
         // formData.append('auth', state.token.auth); 可以选择性的加入一些鉴权
      
          formData.append('file', blob);
          cfg.show_load("上传截图...")
           ex.uploadFormData(formData.fd,option.upload_path).then(resp=>{
             cfg.hide_load()
             pro.resolve(resp)
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
      }
}