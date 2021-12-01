export class Drawer{
    constructor(map){
        this.map=map
    }
    polygon(){
        let points = [];
 
         const polygon = new L.Polygon(points);
         this.map.addLayer(polygon);
         
         this.map.on('mousedown', e => {
            points.push([e.latlng.lat, e.latlng.lng]);
         
            this.map.on('mousemove', event => {
               polygon.setLatLngs([...points,[event.latlng.lat, event.latlng.lng]])
            });
         });
         
         this.map.on('dblclick', () => {
            if (points.length) {
                this.map.off('mousemove');
                this.map.off('mousedown')
                this.map.off('dblclick')
            //    points = [];
               }
            });
        return points
    }
}