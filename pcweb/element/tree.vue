<template>
  <div>
    <div style="padding: 5px;">
      <el-input
          placeholder="输入关键字"
          suffix-icon="el-icon-search"
          v-model="filterText">
      </el-input>
    </div>

    <el-tree :data="options" :props="defaultProps"
             :expand-on-click-node="false"
             :filter-node-method="filterNode"
             :highlight-current="true"
             ref="tree"
             @node-click="handleNodeClick"></el-tree>
  </div>

</template>
<script>
/*
* options = [
   {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
          }]
        },
    ]
*
* */
 export default {
   props:{
     options:{},
     getOption:{}
   },
    data() {
      return {
        filterText:'',
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
   watch: {
     filterText(val) {
       this.$refs.tree.filter(val);
     }
   },
    methods: {
      handleNodeClick(data) {
        debugger
        console.log(data);
        this.$emit('node-click',data)
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

  };
</script>
