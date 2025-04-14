<template>
    <el-button @click="submit" >确认</el-button>
    </template>
     
    <script setup>
    import {ElMessage} from "element-plus";
     
    function submit() {
      ElMessage.success("Hello World！")
    }
    </script>
     
    <style scoped>
    </style>