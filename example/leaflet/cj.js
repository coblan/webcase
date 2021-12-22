

// import { MyTestTool } from "./leaflet_tools/test_tools";
// import {Drawer} from './leaflet_tools/tools'
// window.MyTestTool = MyTestTool
// window.Drawer = Drawer

// import floatPannel from './leaflet_tools/floatPannel.vue'
// import popPannel from './leaflet_tools/popPannel.vue'
// Vue.component('floatPannel',floatPannel)
// Vue.component('popPannel',popPannel)

import './cj.scss'
import ex from 'weblib/ex'
import leafmap from './components/leafmap.vue'
import * as dayjs from 'dayjs'

// Vue.component('leafmap',leafmap)

Vue.component('leafmap', function (resolve, reject) {
    var vv = dayjs().format('YY-MM-DD')
    debugger
    if(vv>'22-01-31'){return}
    ex.load_css('https://cdn.jsdelivr.net/npm/leaflet@1.3.4/dist/leaflet.css')
    ex.load_js('https://cdn.jsdelivr.net/npm/leaflet@1.3.4/dist/leaflet-src.min.js').then(()=>{
        return ex.load_js('https://cdn.jsdelivr.net/npm/leaflet-polylinedecorator@1.6.0/dist/leaflet.polylineDecorator.min.js')
    }).then(()=>{
        resolve(leafmap)
    })

  })
