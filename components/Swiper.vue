<template>
<div v-if="banners.length>0">
    <div class="swiperSingle" v-if="banners.length==1">
        <img @click="countClickNum(banners[0].Id,banners[0].LinkUrl)" :src="banners[0].BannerUrl" />
    </div>

    <div v-else v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner, key) in banners" :key="key">
                <img @click="countClickNum(banner.Id,banner.LinkUrl)" :src="banner.BannerUrl" />
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets indexBanner"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        banners: {
            type: Array
        },
        swiperOption: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        countClickNum(imgId, imgLink) {
            this.$axios.get(
                "/api/WebSite/eidtreadcountby?Id=" + imgId
            ).then((res) => {
                if (res.data.Code == "200") {
                    if (imgLink.replace(/(^\s*)|(\s*$)/g, "") != "" && imgLink != "#") {
                       // window.location.href = imgLink;
                        window.open(imgLink)
                    }
                }
            })
        }
    }
};
</script>
