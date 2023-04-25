<template>
    <div>
        <div class="header">
            <div class="open">
                <span v-if="!iscollapse" class="el-icon-s-fold" @click="changeMenu"></span>
                <span v-else class="el-icon-s-unfold" @click="changeMenu"></span>
            </div>   
        </div>
       <router-view></router-view>
    </div>
</template>
<script>
    export default{
        props:['iscollapse'],
        components:{

        },
        methods:{
            changeMenu(){
                this.$emit('changeMenu')
            }
        }
    }
</script>
<style lang="scss" scoped>
.header{
    height: 50px;
    background: #1e78bf;
    color: white;
    line-height: 50px;
    .open{
        span{
            font-size: 25px;
            cursor: pointer;
        }
    }
}
</style>