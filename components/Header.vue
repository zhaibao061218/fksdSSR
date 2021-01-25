<template>
<div class="container">
    <el-row :gutter="20" class="topNav" type="flex" justify="space-between" align="middle">

        <h1><a href="/"><img alt="福克斯德 助力中国制造 货通全球" src="~@/assets/img/logo.png" /></a></h1>

        <nav>
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="transparent">
                <el-menu-item index="/">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">产品与服务</template>
                    <el-menu-item index="/pingjiae">评价易</el-menu-item>
                    <el-menu-item index="/academy">跨境学堂</el-menu-item>
                    <li class="el-menu-item"><a target="_blank" href="http://www.amazoner.cn/forum.php">卖家论坛</a></li>
                </el-submenu>
                <el-menu-item index="/jobs/list/1">人才招聘</el-menu-item>
                <el-menu-item index="/contact">联系我们</el-menu-item>
            </el-menu>
        </nav>

        <div class="serviceTel">400-8318-580</div>

    </el-row>
</div>
</template>

<script>
export default {
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push(key);
        },
    },
    computed: {
        activeIndex() {
            if (this.$route.path.indexOf("jobs") != -1) {
                return '/jobs/list/1';
            } else {
                return "/" + this.$route.path.split("/")[1];
            }
        }
    },
};
</script>
