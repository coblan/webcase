

export class MyTestTool{
    constructor(map){
        this.map = map
    }
    addDebugGrid(){
        L.control.zoom({
            position: 'bottomright'
         }).addTo(this.map);

         L.GridLayer.DebugCoords = L.GridLayer.extend({
               createTile: function (coords) {
                  var tile = document.createElement('div');
                  var y =  gety(coords.y,coords.z)
                  tile.innerHTML = [coords.x,coords.y, coords.z].join(', ');
                  tile.style.outline = '1px solid red';
                  return tile;
               }
            });

          L.gridLayer.debugCoords = function(opts) {
               return new L.GridLayer.DebugCoords(opts);
         };

         this.map.addLayer(L.gridLayer.debugCoords());
    }
    addPopPosion(){
        var popup = L.popup();
    
        function onMapClick(e) {
           popup
           .setLatLng(e.latlng)
           .setContent("You clicked the map at " + e.latlng.toString())
           .openOn(map);
        }
    
        this.map.on('click', onMapClick);
    
        // map.on('mousemove', onMapClick);
    }
    addPloygen(){
        var style = {
            'default': {
                'color': 'transparent',
              //   'opacity':0,
            },
            'highlight': {
                'color': 'red'
            }
        };
        
        var group = new L.LayerGroup([
            new L.Polygon([
                [-50, -50], [50, -50], [50, -10], [-50, -10]
            ], {
                'label': 'Polygon 1',
                'popup': 'Polygon 1'
            }),
            new L.Polygon([
                [-50, 10], [50, 10], [50, 50], [-50, 50]
            ], {
                'label': 'Polygon 2',
                'popup': 'Polygon 2'
            })
        ]).addTo(this.map);
        // Variable for storing highlighted layer
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
              debugger
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
    }
}