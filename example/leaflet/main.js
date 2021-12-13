import { MyTestTool } from "./leaflet_tools/test_tools";
import {Drawer} from './leaflet_tools/tools'
window.MyTestTool = MyTestTool
window.Drawer = Drawer

import floatPannel from './leaflet_tools/floatPannel.vue'
import popPannel from './leaflet_tools/popPannel.vue'
Vue.component('floatPannel',floatPannel)
Vue.component('popPannel',popPannel)
