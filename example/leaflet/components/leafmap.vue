<template>
    <div id = "map" style = "width: 100%; height: 100%"></div>
</template>
<script>


/**
 * 105.897753,29.367625      18.276784064591638,80.26723881428742
 * 
 * 105.89087,29.370759       0.6607174227448667,-35.23212651918641
 * 
 * 105.892897,29.366159      -24.96428661925269,44.35182695665905       
 */


// [6.374867003622302e+03,8.379752056158515e+03,-9.211592305516222e+05;1.113749825424718e+04,-1.239309663358848e+04,-8.153999574033960e+05]

function map_to_point(lng,lat){
    
    
    var p_x = 6.374867003622302e+03 * lng + 8.379752056158515e+03*lat -9.211592305516222e+05
    var p_y = 1.113749825424718e+04 * lng + -1.239309663358848e+04 * lat + -8.153999574033960e+05
    return [p_x,p_y]
}

var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
var PI = 3.1415926535897932384626;
var a = 6378245.0;
var ee = 0.00669342162296594323;
function transformlat(lng, lat) {
    var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
    return ret
}

function transformlng(lng, lat) {
    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
    return ret
}

function wgs84togcj02(lng, lat) {
    var dlat = transformlat(lng - 105.0, lat - 35.0);
    var dlng = transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * PI;
    var magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
    dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
    var mglat = lat + dlat;
    var mglng = lng + dlng;
    return [mglng, mglat]
}


import start from '../assets/start.png'
import end from '../assets/end.png'
import camera_png from '../assets/camera1.png'
// import * as dayjs from 'dayjs'
import {FreePromise} from 'weblib/ex/promise'
import ex from 'weblib/ex'
import map_data from './map_data.js'

export default {
    props:{
        popupHander:{},
        imageStatic:{},
    },
    data(){
        return {
            current_layers:[],
            loaded:new FreePromise(),
            cameras:[],
        }
    },
    mounted(){

        // var vv = dayjs().format('YY-MM-DD')
        // if(vv>'22-01-31'){return}
        var self = this
        ex.load_css('https://cdn.jsdelivr.net/npm/leaflet@1.3.4/dist/leaflet.css')
        ex.load_js('https://cdn.jsdelivr.net/npm/leaflet@1.3.4/dist/leaflet-src.min.js').then(()=>{
            return ex.load_js('https://cdn.jsdelivr.net/npm/leaflet-polylinedecorator@1.6.0/dist/leaflet.polylineDecorator.min.js')
        }).then(()=>{
            self.loaded.resolve() 

            this.initMap()
            this.updateBackground()
            this.addPloygen()
            this. startIcon = L.divIcon({className: 'start-icon',html:'<img src="'+start +'">'})
            this. endIcon = L.divIcon({className: 'start-icon',html:'<img src="'+end +'">'})
            this.cameraIcon = L.divIcon({className: 'start-icon',html:'<img src="'+camera_png +'">'})
            
        })
    },
    methods:{
        initMap(){
            var mapOptions = {
            crs: L.CRS.Simple,
            center: [0, 0],
            // center:[29.345319,106.526541],
            zoom: 1,
            maxZoom: 4, //最大视图
            minZoom: 1, //最小视图
            // zoomControl: false
            // drawControl: true,
            attributionControl: false,
         }
         // Creating a map object
         this.map = new L.map('map', mapOptions);
        },
        updateBackground(){
            var image_static = this.imageStatic
            function gety(y,z){
                if(z==1){
                var ry = y+4
                }
                if(z==2){
                var ry = y+8
                }
                if(z==3){
                var ry = y+16
                }
                if(z==4){
                var ry = y+32
                }
                return ry
            }
            function trans(y,z){
                if(z==1){
                var ry = y+4/2 +1
                }
                if(z==2){
                var ry = y+8/2 +1
                }
                if(z==3){
                var ry = y+16/2 +1
                }
                if(z==4){
                var ry = y+32/2 +1
                }
                return ry
            }
         L.TileLayer.Kitten = L.TileLayer.extend({
               getTileUrl: function(coords) {
                  // var i = Math.ceil( Math.random() * 4 );
                  var z = coords.z
                 var y = trans(coords.y,z)// gety(coords.y,coords.z)
                  
                  var x = trans(coords.x,z) 
                  
                  console.log(x,y,z)
                  return `${image_static}/${z}/${z}${y}/${z}${y}${x}.png?v=1`
               },
               getAttribution: function() {
                  return "cj"
               }
            });

            L.tileLayer.kitten = function() {
               return new L.TileLayer.Kitten();
            }

            var layer1 =   L.tileLayer.kitten()
            this.map.addLayer(layer1);
        },
       async addPloygen(){
           await this.loaded.promise
        var style = {
            'default': {
                'color': 'transparent',
                'fillColor':'transparent',
                'fillOpacity':0,
              //   'opacity':0,
            },
            'highlight': {
                'color': '#36BF36',
                'fillColor':'#36BF36',
                'fillOpacity':0.4,
            
            }
        };

        // var resp = await axios.get('http://demo.softjing.com/dapi/myjson/value')
        // if(resp.data && resp.data.data){
        //      this.model = JSON.parse(resp.data.data)
        // }
        this.model = map_data
        var outlist = []
        var self_vc = this
         ex.each(this.model.blocks,item=>{
             var local_layer =  new L.Polygon(item.polygen, {
                    'label': item.label,
                     'popup':(aa)=>{
                        //  var self = this
                        //  var yy = function (){
                        //      debugger
                        //     self_vc.popupHander(aa).then(resp =>{
                        //         debugger
                        //         self.setPopupContent(resp)
                        //     })
                        //  }
                        //  yy()
                        setTimeout(()=>{
                            self_vc.popupHander(item.label).then((resp)=>{
                                local_layer.setPopupContent(resp)
                            })
                            
                        },10)
                            
                         return ''
                        // var resp = await this.popupHander(aa)
                        //   return `<span> 等待对接${item.label}的数据 </span> `
                        
                    //  return `<span> 等待对接${item.label}的数据 </span> `
                     }, // `等待对接${item.label}的数据`,
                    weight: 1
                   
                })
            outlist.push(
               local_layer
            )
        })
        var group = new L.LayerGroup(outlist).addTo(this.map);
        var highlight;
        
        function setHighlight (layer) {
          // Check if something's highlighted, if so unset highlight
          if (highlight) {
            unsetHighlight(highlight);
          }
          // Set highlight style on layer and store to variable
          layer.setStyle(style.highlight);
          highlight = layer;
        }
        
        function unsetHighlight (layer) {
          // Set default style and clear variable
          layer.setStyle(style.default);
          highlight = null;
        }
        
        // Iterate
        group.eachLayer(function (layer) {
              
              // Set default style
              layer.setStyle(style.default);
              // Bind label with polygon option variable
              // layer.bindLabel(layer.options.label);
               layer.bindTooltip(layer.options.label);
              
              // Bind popup with polygon option variable
              layer.bindPopup(layer.options.popup);
        
              // Mouseover handler
              layer.on('mouseover', function (e) {
                 // Set highlight
                 setHighlight(layer);
                 
              });
        
              // Mouseout handler
              layer.on('mouseout', function (e) {
                 // Unset highlight
                 unsetHighlight(layer);
              });
        
              // Fetch list from DOM
              var list = L.DomUtil.get('list'),
                 // Add list item
                 item = L.DomUtil.create('li', 'item', list),
                 // Add link
                 link = L.DomUtil.create('a', 'link', item);
        
              // Set link text
              link.textContent = layer.options.label;
              // Set link href
              link.href = '#';
        
              // Add clickhandler to link
              L.DomEvent.addListener(link, 'click', function (e) {
                 // Set highlight
                 setHighlight(layer);
              });
        });
    },
       drawPath(pathList){
        //    pathList = pathList.slice(1,)
        if (pathList.length <2){
            return
        }
            var convertd = ex.map(pathList,item=>{return map_to_point(item.lng,item.lat)}) 
            var start_layer = L.marker(convertd[0],{
                title:'开始',
                icon:this.startIcon,
            }).addTo(this.map);
            var end_layer =  L.marker(convertd[convertd.length-1],{title:'结束',icon:this.endIcon}).addTo(this.map);
            this.current_layers.push(start_layer)
            this.current_layers.push(end_layer)

            var polyline = L.polyline(convertd, {color: 'red'}).addTo(this.map);
            var decorator = L.polylineDecorator(polyline, {
                patterns: [
                    // defines a pattern of 10px-wide dashes, repeated every 20px on the line
                    {offset: 0, repeat: 100, symbol: L.Symbol.arrowHead({pixelSize: 8, polygon: false, pathOptions: {stroke: true}})},
                ]
            }).addTo(this.map);
            this.current_layers.push(polyline)
            this.current_layers.push(decorator)
            return polyline
        },
        clearPath(){
             ex.each(this.current_layers,line=>{
                this.map.removeLayer(line)
            })
        },
        drawCamera(posList){
            /**
             * @posList: [{lng:150.2,lat:30},{lng:150.3,lat:30.1}}]
             */

            for(var i=0;i<posList.length;i++){
                var item = posList[i]
                var pos = map_to_point(item.lng,item.lat)
                var start_layer = L.marker(pos,{
                                title:'摄像头',
                                icon:this.cameraIcon,
                   }).addTo(this.map);
                   this.cameras.push(start_layer)
            }

        },
        clearCamera(){
            ex.each(this.cameras,line=>{
                            this.map.removeLayer(line)
                        })
               }
    }
}
</script>