<template>
    <div>
        <div>出发地 
            <select v-model='src'>
                <option :value="p.id" v-for='p in has_name_points' :key='p.id'>{{p.label}}</option>
            </select>
        </div>
        <div>目的地 
            <select v-model='dst'>
                <option :value="p.id" v-for='p in has_name_points' :key='p.id'>{{p.label}}</option>
            </select>
        </div>
        <button @click="findPath">确定</button>
    </div>
</template>
<script>
import path_data from './path_data.js'
import axios from 'axios'
import ex from 'weblib/ex'

export default {
    props:{
        points:{
            default:()=>[]
        },
        lines:{
            default:()=>[]
        }
    },
    data(){
        return {
            src:'',
            dst:'',
            draw_lines:[],
        }
    },
    computed:{
        has_name_points(){
            // return []
    
           return ex.filter(this.points,p=>{return p.label!=''})
        }
    },
    methods:{
        findPath(){
            var src_idx = this.idToPointIndex(this.src)
            var dst_idx = this.idToPointIndex(this.dst)
            var idx_path = this.findIndexPath(src_idx,dst_idx)
            
            var path = ex.map(idx_path,index=> {return this.indexToPoint(index)}  )
            this.clearAllLine()
            this.drawPath(path)
        },
        idToPointIndex(p_id){
            for(var i =0;i<this.points.length;i++){
                var p = this.points[i]
                if(p.id==p_id){
                    return i+1 // index +1 ，因为后面的 矩阵索引是从 1开始的
                }
            }

        },
        findIndexPath(index1,index2){
            var ls = path_data.path_data
           var row =  ls[index1-1]
           var path = [index2]
           var lastindex = index2
           while(1){
                var par = this._findParent(lastindex,row)
                if(!par){
                    break
                }
                if(par == -1){
                    path.push(index1)
                    break
                }
                path.push(par)
                lastindex = par
                if(par ==index1){
                    break
                }
           }
           return path.reverse()
        },
        _findParent(index,row){
            return  row[index]
            // for(var key in row){
            //     if(row[key] ==index){
            //         return key
            //     }
            // }
        },
        
        indexToPoint(index){
            return this.points[index -1]
        },
        drawPath(path){
            for(var i =0;i<path.length-1;i++){
                var first_point = path[i]
                var second_point = path[i+1]
                var line = L.polyline([first_point.latlng.split(','),second_point.latlng.split(',')], {color: 'red'}).addTo(map);
                this.draw_lines.push(line)
            }
              
        },
        clearAllLine(){
            ex.each(this.draw_lines,line=>{
                map.removeLayer(line)
            })
            this.draw_lines =[]
        },

    }
}
</script>