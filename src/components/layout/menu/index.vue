<template>
    <div>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo"
            background-color="#304156" text-color="#BFCBD9" active-text-color="#2196f3" router :collapse="iscollapse">
            <el-menu-item>
                <span slot="title">应用软件系统开发</span>
            </el-menu-item>
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/product">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>产品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/product/list">产品列表</el-menu-item>
                    <el-menu-item index="/product/category">产品分类</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/order">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/order/olist">订单列表</el-menu-item>
                    <el-menu-item index="/order/oadmin">订单汇总</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/advert">
                <i class="el-icon-document"></i> 
                <span slot="title">广告列表</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    props:['iscollapse'],
    data(){
        return {
            // iscollapse:false
        }
    }
}
</script>
<style lang="scss">
.el-menu{
    border-right: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>