import { MyTestTool } from "./leaflet_tools/test_tools";
import {Drawer} from './leaflet_tools/tools'
window.MyTestTool = MyTestTool
window.Drawer = Drawer

import floatPannel from './leaflet_tools/floatPannel.vue'
Vue.component('floatPannel',floatPannel)