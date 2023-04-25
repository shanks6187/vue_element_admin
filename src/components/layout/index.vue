<template>
    <div class="layout">
        <div class="menu">
            <v-menu :iscollapse="iscollapse"></v-menu>
        </div>
        <Transition>
        <div class="content" :class="{cg:iscollapse}">
            <v-content @changeMenu="changeMenu" :iscollapse="iscollapse"></v-content>
        </div>
        </Transition>
    </div>
</template>
<script>
import menu from './menu/index.vue'
import content from './content/index.vue'
    export default{
        components:{
            'v-menu':menu,'v-content':content
         },
        data(){
            return {
                iscollapse:false
            }
        },
        methods:{
            changeMenu(){
                this.iscollapse=!this.iscollapse
            }
        }
    }
</script>
<style lang="scss">
.layout{
    padding: 0;
}
.menu{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    background: #304156;
    color:#BFCBD9;
}
.content{
    margin-left: 200px;
    background: yellowgreen;
    transition-duration:0.3s;
    transition-timing-function:ease-in-out;
}
.cg{
    margin-left: 64px;
}
</style>