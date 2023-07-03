<template>
  <el-row :gutter="0" class="demo-radius">
    <el-col :span="6">
      <el-card class="leftcard" :body-style="{ padding: '0px'}">
        <slot name="left">
          
        </slot>
      </el-card>
    </el-col>
    <el-col :span="18">
      <el-card class="rightcard" >
        <slot name="right">
          
        </slot>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
    defineProps(["borderRadius", "height", "color", "hoverColor"])

</script>

<style scoped>
.leftcard {
  border-radius: 0px;
  border-top-left-radius: v-bind("borderRadius"); 
  border-bottom-left-radius: v-bind("borderRadius"); 
  height: v-bind("height");
}
.rightcard {
  border-radius: 0px;
  border-top-right-radius: v-bind("borderRadius"); 
  border-bottom-right-radius: v-bind("borderRadius"); 
  height: v-bind("height");

}
.rightcard:hover {
  color: v-bind("color");
  background-color: v-bind("hoverColor");
}
</style>
