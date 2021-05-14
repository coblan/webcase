export class TableSetting{
    constructor({table}){
        this.key = '_table_settings_'+ table.directorName
        this.table = table
        // this.advise_heads=advise_heads
    }
    loadSetting(){
        // debugger
      
        var setting_str = localStorage.getItem(this.key)
        if(setting_str){
            var setting_obj = JSON.parse(setting_str)
            // setting_obj.advise_heads = ex.arrayIntersection(this.advise_heads,setting_obj.advise_heads)
            setting_obj.advise_width  = setting_obj.advise_width || {}
            setting_obj.advise_order = setting_obj.advise_order || []
        }
        else{
            var setting_obj ={
                advise_heads: this.table.adviseHeads , //this.advise_heads,
                advise_width:{},
                advise_order:[],
            }
            // localStorage.setItem(this.key,JSON.stringify(setting_obj))
        }

        return setting_obj
    }
    writeData(settingobj){

    }

}