export  async function  initWow(){
    ex.load_css(cfg.js_lib.animate_css)
    await ex.load_js(cfg.js_lib.wow)
    setTimeout(()=>{
        new WOW().init();
    },300)
}