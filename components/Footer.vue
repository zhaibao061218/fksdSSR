<template>
<div class="container">
    <el-row :gutter="20" type="flex" justify="space-between" align="top">
        <el-col :span="12">
            <ul class="ftNav">
                <li><a href="/pingjiae">产品服务</a><span>|</span></li>
                <li><a href="/jobs/list/1">人才招聘</a><span>|</span></li>
                <li><a href="/contact">联系我们</a></li>
            </ul>

            <div class="ftQrcode">
                <dl>
                    <dt><img src="~@/assets/img/qrcode-focusorder.jpg"></dt>
                    <dd>福克斯德官方公众号</dd>
                </dl>

                <dl>
                    <dt><img src="~@/assets/img/qrcode-pingjiae.jpg"></dt>
                    <dd>评价易官方公众号</dd>
                </dl>

            </div>

            <div class="ftCopyright"><span>福克斯德公司版权所有</span><span>&copy; copyright 2014-{{curYear}}</span><span>粤ICP备15020577号-1</span></div>

        </el-col>
        <el-col :span="11">
            <div class="ftContact">
              <div class="ftBrandLogo"><img src="~@/assets/img/ft-logo.png"></div>
              <ul>
                <li>商务合作：15618988589（李经理）</li>
                <li>业务咨询：18948192235（郭经理）</li>
                <li>400-8318-580</li>
                <li>marketing@focusorder.com</li>
              </ul>
            </div>
        </el-col>
    </el-row>
</div>
</template>


<script>
export default {
    data(){
        return {
            //怎么
            curYear: new Date().getFullYear()
        }
    }
}
</script>