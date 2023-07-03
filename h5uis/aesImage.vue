<template>
    <img :src="real_src" alt="">
</template>
<script>
export default{
    props:{
        src:''
    },
    data(){
        return {
            real_src:''
        }
    },
    async mounted(){
        if(this.src.endsWith('.aes')){
                debugger
              await ex.load_js('https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/crypto-js/4.1.1/crypto-js.min.js')
              var src = '/media/general_upload/images/2023_04/test_image_pk7.aes' 
              var rt = await ex.getFile(src)
               debugger
                var de = await Decrypt(rt,'94a4b778g01ca4ab')
               this.real_src = blobToDataURL(de)
            }else{
                this.real_src =  this.src
            }
    },
    methods:{
        getData(url){
         
         }
     }
}

function blobToArrayBuffer(blob){
    var pro = new ex.FreePromise()
    var arrayBuffer;
    var fileReader = new FileReader();
    fileReader.onload = function(event) {
        arrayBuffer = event.target.result;
        pro.resolve(arrayBuffer)
    };
    fileReader.readAsArrayBuffer(blob);
    return pro.promise
}
async function Decrypt(data,key) {
    debugger
    var buf = await  blobToArrayBuffer(data)
    var AES_KEY = CryptoJS.enc.Utf8.parse(key);
        let decrypt = CryptoJS.AES.decrypt(buf, AES_KEY, {  mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        debugger
        return decrypt;
}

function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}
</script>