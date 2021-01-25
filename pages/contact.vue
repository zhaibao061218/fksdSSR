<template>
<div class="contactPage">
    <Swiper :banners="bannerImgs" :swiperOption="swiperOption" />

    <section class="service">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="24">
                    <h2><span>服务通道</span></h2>
                    <ul>
                        <li>
                            <p>业务咨询</p>
                            <p>18948192235（郭经理）</p>
                        </li>
                        <li>
                            <p>商务合作</p>
                            <p>15618988589（李经理）</p>
                        </li>
                        <li>
                            <p>官方热线</p>
                            <p>400-8318-580</p>
                        </li>
                        <li>
                            <p>咨询邮箱</p>
                            <p>marketing@focusorder.com</p>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </section>

    <section class="focusUs">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="24">
                    <h2><span>关注我们</span></h2>
                    <ul>
                        <li>
                            <img src="~@/assets/img/qrcode-focusorder-big.png">
                            <p>福克斯德官方公众号</p>
                        </li>
                        <li>
                            <img src="~@/assets/img/qrcode-pingjiae-big.png">
                            <p>评价易官方公众号</p>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </section>

    <section class="location">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="24">
                    <h2><span>公司地址</span></h2>
                    <p><i class="el-icon-location"></i><span>深圳市龙华新区清湖卫东龙商务大厦A座1408-1411</span></p>

                    <client-only>
                        <baidu-map class="bdwindow" :dragging="map.dragging" :center="map.center" :zoom="map.zoom" style="height:468px" :scroll-wheel-zoom='map.scroll'>
                            <bm-info-window :position="map.center" :title="map.title" :show="map.show">
                                <p class="bdwtext" v-html="map.contents"></p>
                            </bm-info-window>
                        </baidu-map>
                    </client-only>

                </el-col>
            </el-row>
        </div>
    </section>

</div>
</template>

<script>
export default {
    head() {
        return {
            title: "联系我们 - 福克斯德专为传统企业转型跨境电商提供一站式解决方案",
        };
    },
    data() {
        return {
            swiperOption: {
                speed: 400,
                autoplay: true,
                delay: 3000,
                loop: true,
                observer: true,
                observerParent: true,
                observeSlideChildren: true,
                direction: "horizontal",
                paginationClickable: true,
                autoplayDisableOnInteraction: false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            map: {
                center: {
                    lng: 114.048424,
                    lat: 22.667713
                },
                zoom: 15, //缩放级别
                title: "深圳福克斯德信息咨询有限公司",
                contents: '深圳市龙华新区清湖卫东龙商务大厦A座1408-1411', //标签内容
                show: true, //显示标签
                scroll: true, //地图缩放
                dragging: true, //地图拖拽
            }
        };
    },
    async asyncData({
        $axios
    }) {
        let [bannerImgsData] = await Promise.all([
            $axios.get(
                "/api/WebSite/getwebsitebannerlistbyweb?BannerIndex=6"
            )
        ]);

        return {
            bannerImgs: bannerImgsData.data.Data
        };
    },
};
</script>
