<template>
    <div id = "map" style = "width: 100%; height: 100%"></div>
</template>
<script>
import axios from 'axios'
import ex from 'weblib/ex'

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

// var cc = map_to_point(105.90424352, 29.37344316)
 
// var startIcon = L.icon({
//     iconUrl: '/static/start.png',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//     shadowUrl: 'my-icon-shadow.png',
//     shadowSize: [68, 95],
//     shadowAnchor: [22, 94]
// });

import start from '../assets/start.png'
import end from '../assets/end.png'
var startIcon = L.divIcon({className: 'start-icon',html:'<img src="'+start +'">'});
var endIcon = L.divIcon({className: 'start-icon',html:'<img src="'+end +'">'});

export default {
    props:{
        popupHander:{},
        pp:{},
    },
    mounted(){
        this.initMap()
        this.updateBackground()
        this.addPloygen()
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
                  return `tile3/${z}/${z}${y}/${z}${y}${x}.png?v=1`
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

        var resp = await axios.get('http://demo.softjing.com/dapi/myjson/value')
        if(resp.data && resp.data.data){
             this.model = JSON.parse(resp.data.data)
        }
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
            var convertd = ex.map(pathList,item=>{return map_to_point(item.lng,item.lat)}) 
            L.marker(convertd[0],{
                title:'开始',
                icon:startIcon,
            }).addTo(this.map);
            L.marker(convertd[convertd.length-1],{title:'结束',icon:endIcon}).addTo(this.map);

            var polyline = L.polyline(convertd, {color: 'red'}).addTo(this.map);
            var decorator = L.polylineDecorator(polyline, {
                patterns: [
                    // defines a pattern of 10px-wide dashes, repeated every 20px on the line
                    {offset: 0, repeat: 100, symbol: L.Symbol.arrowHead({pixelSize: 8, polygon: false, pathOptions: {stroke: true}})},
                ]
            }).addTo(this.map);
            return polyline
        },
        clearPath(path){
             ex.each(path,line=>{
                map.removeLayer(line)
            })
        }
    }
}
</script>