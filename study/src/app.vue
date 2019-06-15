<template>
    <div id="app">
        <h1 class="test">{{msg}}</h1>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
        name:'app',
        data(){
            return {
                msg:"hello world"
            }
        }
    }
</script>
<style >
    .test{
        color:#020202;
        font-size:18px;
    }
</style>