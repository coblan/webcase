<template>
    <div id = "map" style = "width: 100%; height: 100%"></div>
</template>
<script>
import axios from 'axios'
import ex from 'weblib/ex'

/**
 * 105.90205840,29.37264252        -2.482139061473738,64.94803602021031
 * 105.90424352, 29.37344316       18.54464307862666,80.41469458762039
 * 105.90212801, 29.37419069       10.50000283438376,45.09894248941958
 * 105.89277216, 29.37494214       -43.59820790226192,-67.58415618645475
 */

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
            var polyline = L.polyline(pathList, {color: 'red'}).addTo(this.map);
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