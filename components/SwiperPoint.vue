<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, key) in banners" :key="key">
        <a :href="banner.LinkUrl ? banner.LinkUrl : 'javascript:;'"
          ><img :src="banner.BannerUrl" />
          <p v-show="banner.textDescription">{{ banner.textDescription }}</p></a
        >
        <div v-show="banner.peoplesSlogans" class="peoplesSlogans"><p>{{banner.peoplesSlogans}}</p></div>
      </div>
      <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
    </div>
    <div v-show="showPoint == true" class="swiper-button-next"></div>
    <div v-show="showPoint == true" class="swiper-button-prev"></div>
  </div>
</template>


<script>
export default {
  props: {
    banners: {
      type: Array,
    },
    swiperOption: {
      type: Object,
      default() {
        return {};
      },
    },
    showPoint:{
      type: Boolean,
    }
  },
  data() {
    return {
       // showHide:false,
        currentIndex:0
    };
  },
  methods: {
      // showSize(index){
      //    // this.$emit("showCityName",true)
      //     this.showHide = true;
      //     this.currentIndex = index 
      // },
      // hideSize(){
      //     this.showHide = false
      //     // this.$emit("showCityName",false)
      // }
  },
};
</script>
