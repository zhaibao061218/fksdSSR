<template>
<div class="homePage">
    <div class="homePageBanner" v-if="slides.length > 0">
        <Swiper :banners="slides" :swiperOption="swiperOption" />
    </div>
    <div class="bordeCompanyProfile">
        <div class="companyProfile">
            <p class="title"><span>公司介绍</span></p>
            <div class="companyProfileContent">
                <div></div>
                <div>
                    <p>深圳市福克斯德信息咨询有限公司成立于 2013年，总部位于深圳，在香港、美国、成都设有分公司，拥有<span>200+</span>资深运营人员，凭借雄厚实力已服务<span>30, 000+</span>跨境卖家，帮助<span>2000</span>多家中国企业品牌扬帆出海。</p>
                    <p>福克斯德作为老牌跨境电商服务商，专注为跨境卖家提供海外真人测评服务，自2013年成立以来，福克斯德始终秉承“助力中国制造货通全球”的使命，践行“客户第一、合作共赢、求知上进、诚信、专业、创新”的核心价值，致力于成为全球跨境电商领域最受欢迎的十大服务商之一。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="development">
        <div class="developmentContent">
            <p class="title"><span>发展历程</span></p>
            <div class="developmentBgc">
                <div class="developmentTop">
                    <ul>
                        <li>
                            <p>2017</p>
                            <p>深耕领域</p>
                            <p>
                                <span>推出论坛及亚马逊卖家服务，帮助 2000家企业入驻且</span>
                                <span>培训超过 20000人次，凭借卓越的服务及专业水平，</span>
                                <span>成为亚马逊领域综合实力超强服务商之一</span>
                            </p>
                        </li>
                        <li>
                            <p>2020</p>
                            <p>速速发展</p>
                            <p>
                                <span>平台进入高速发展趋势，目前已汇聚45万+海量真</span>
                                <span>人买家资源，3万＋跨境卖家入驻</span>
                            </p>
                        </li>
                        <li>
                            <p>2021</p>
                            <p>聚焦未来</p>
                            <p>
                                <span>聚焦未来,打造跨境领域的资源共享平台</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="developmentDown">
                    <ul>
                        <li>
                            <p>2013</p>
                            <p>初创品牌</p>
                            <p>
                                <span>跨境电商领域服务项目正式启动，帮助</span>
                                <span>2000多家中国企业品牌成功出海</span>
                            </p>
                        </li>
                        <li>
                            <p>2019</p>
                            <p>蓄势待发</p>
                            <p>
                                <span>基于客户的实际需求和市场现状，结合自身8年沉淀的、资源、</span>
                                <span>技术以及经验，2018年正式推出跨境真人测评平台-评价易</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="advantage" ref="advantage">
        <div class="advantageContent">
            <p class="title"><span>公司优势</span></p>
            <ul>
                <li>
                    <img src="~@/assets/img/indexTime.png" />
                    <p>
                        <countTo :startVal="advantage1startVal" :endVal="advantage1endVal" :duration="2000" :autoplay="false" ref="uCountTo1"></countTo>
                    </p>
                    <p>专注跨境服务领域8+年</p>
                </li>
                <li>
                    <img src="~@/assets/img/indexFirend.png" />
                    <p>
                        <countTo ref="uCountTo2" :startVal="advantage2startVal" :endVal="advantage2endVal" :duration="2000" :autoplay="false"></countTo>
                    </p>
                    <p>数百位资深运营人员，团队实力雄厚</p>
                </li>
                <li>
                    <img src="~@/assets/img/indexCooperation.png" />
                    <p>
                        <countTo :startVal="advantage3startVal" :endVal="advantage3endVal" :duration="2000" :autoplay="false" ref="uCountTo3"></countTo>
                    </p>
                    <p>累计服务过超3万+跨境卖家</p>
                </li>
                <li>
                    <img src="~@/assets/img/indexStar.png" />
                    <p>
                        <countTo :startVal="advantage4startVal" :endVal="advantage4endVal" :duration="2000" :autoplay="false" ref="uCountTo4"></countTo>
                    </p>
                    <p>汇聚110万+海外优质买家资源</p>
                </li>
            </ul>
        </div>
    </div>

    <div class="culture">
        <p class="title"><span>企业文化</span></p>
        <div class="swiper-container" v-swiper:mySwiper="cultureSwiperOption" ref="cultureSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <p>“ 成为全球进出口行业领域最受欢迎的十大服务商之一 ”</p>
                    <img src="../assets/img/indexCulture1.jpg" alt="" srcset="" />
                </div>
                <div class="swiper-slide">
                    <p>“ 助力中国制造 货通全球 ”</p>
                    <img src="../assets/img/indexCulture2.jpg" alt="" srcset="" />
                </div>
                <div class="swiper-slide">
                    <p>“ 客户第一、合作共赢、求知上进、诚信、专业、创新 ”</p>
                    <img src="../assets/img/indexCulture3.jpg" alt="" srcset="" />
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>

        <!-- <p class="title"><span>企业文化</span></p>

      <div class="copyWriting">
        <p>
          <span
            v-for="item in cultureTitleList"
            :key="item.value"
            :class="{ active: titleIndex === item.value }"
            @click="changeSwiper(item.value)"
            >{{ item.name }}</span
          >
        </p>
      </div> -->

    </div>

    <div class="honor">
        <div class="honorContent">
            <p class="title"><span>公司荣誉</span></p>
            <div class="honorSwiper">
                <SwiperPoint :banners="honorSlides" :showPoint="honorSlides.length > 3 ? true : false" :swiperOption="honorSwiperOption" />
            </div>
        </div>
    </div>
    <div class="team">
        <div class="teamContent">
            <p class="title"><span>专业团队</span></p>
            <div class="teamSwiper">
                <SwiperPoint :banners="teamSlides" :swiperOption="teamSwiperOption" :showPoint="true" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import countTo from "vue-count-to";
export default {
    components: {
        countTo
    },
    head() {
        return {
            title: "福克斯德 专为传统企业转型跨境电商提供一站式解决方案",
        };
    },
    data() {
        return {
            advantage1startVal: 0,
            advantage1endVal: 8,
            advantage2startVal: 0,
            advantage2endVal: 200,
            advantage3startVal: 0,
            advantage3endVal: 30000,
            advantage4startVal: 0,
            advantage4endVal: 1100000,
            swiperOption: {
                speed: 400,
                autoplay: false,
                delay: 3000,
                observer: true,
                loop: true,
                observerParent: true,
                observeSlideChildren: true,
                paginationClickable: false,
                autoplayDisableOnInteraction: false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            honorSwiperOption: {
                speed: 400,
                slidesPerView: 3,
                //centeredSlides: true,
                autoplay: false,
                delay: 3000,
                observer: true,
                observerParent: true,
                observeSlideChildren: true,
                paginationClickable: false,
                autoplayDisableOnInteraction: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            honorSlides: [{
                    textDescription: "因为专注 所以专业",
                    BannerUrl: require("@/assets/img/honorImg1.jpg"),
                },
                {
                    textDescription: "因为专业 所以卓越",
                    BannerUrl: require("@/assets/img/honorImg2.jpg"),
                },
                {
                    textDescription: "因为卓越 所以信赖",
                    BannerUrl: require("@/assets/img/honorImg3.jpg"),
                },
            ],
            //titleIndex: 1,
            // cultureTitleList: [{
            //         name: "愿景",
            //         value: 1,
            //     },
            //     {
            //         name: "使命",
            //         value: 2,
            //     },
            //     {
            //         name: "价值观",
            //         value: 3,
            //     },
            // ],
            teamSwiperOption: {
                loop: true,
                speed: 400,
                slidesPerView: 4,
                autoplay: false,
                delay: 3000,
                observer: true,
                observerParent: true,
                observeSlideChildren: true,
                paginationClickable: false,
                autoplayDisableOnInteraction: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            teamSlides: [{
                    BannerUrl: require("@/assets/img/Bailey.jpg"),
                    peoplesSlogans: "企业转型指导专家亚马逊实战运营导师已帮助10000+家企业入驻亚马逊平台每年帮助企业创造10多亿元利润",
                },
                {
                    BannerUrl: require("@/assets/img/FucsEd.jpg"),
                    peoplesSlogans: "从事互联网技术开发11年曾任职于IT上市公司技术负责人精通互联网云计算应用、电商平台、SaaS云平台等1000W级在线用户成功案例经验",
                },
                {
                    BannerUrl: require("@/assets/img/Johnson.jpg"),
                    peoplesSlogans: "10年市场及销售管理工作经验曾任职大型上市公司、著名国企市场管理岗位精通外贸、跨境电商领域带领团队1年内突破0到1.3亿元销售业绩帮助超10000+专家快速提升产品销量",
                },
                {
                    BannerUrl: require("@/assets/img/Fenny.jpg"),
                    peoplesSlogans: "拥有多年会计工作及财务管理经验熟悉国家会计法规了解税务法规和相关税收政策具备高度的职业敏感性和良好的职业道德操守较强的成本管理风险控制和财务分析能力",
                },
                {
                    BannerUrl: require("@/assets/img/Randy.png"),
                    peoplesSlogans: "超10年海外营销管理经验曾任职上市企业营销总裁并荣获优秀团队管理奖在跨境电商领域具有独到见解和丰富经验拥有一套切实有效的团队管理方式",
                },
            ],

            isStar: true,
            firstHasStar: true,
            cultureSwiperOption: {
                effect: 'fade',
                speed: 400,
                observer: true,
                observerParent: true,
                observeSlideChildren: true,
                paginationClickable: false,
                autoplayDisableOnInteraction: false,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 3000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        let text = '';
                        switch (index) {
                            case 0:
                                text = '愿景';
                                break;
                            case 1:
                                text = '使命';
                                break;
                            case 2:
                                text = '价值观';
                                break;
                        }
                        return '<span class="' + className + '">' + text + '</span>';
                    }
                }
            },
        };
    },
    async asyncData({
        $axios
    }) {
        let [slidesData] = await Promise.all([
            $axios.get("/api/WebSite/getwebsitebannerlistbyweb?BannerIndex=1"),
            $axios.get("/api/WebSite/getwebsitebannerlistbyweb?BannerIndex=2"),
            //$axios.get("/info"),
        ]);
        return {
            slides: slidesData.data.Data,
        };
    },
    computed: {
        //swiper() {
        //return this.$refs.cultureSwiper.swiper;
        //},
    },
    methods: {
        handleScroll() {
            var advantage = this.$refs.advantage.offsetTop;
            var bodyTop =
                document.documentElement.scrollTop || document.body.srcollTop;
            if (bodyTop >= advantage - 300) {
                if (this.firstHasStar) {
                    this.$refs.uCountTo1.start();
                    this.$refs.uCountTo2.start();
                    this.$refs.uCountTo3.start();
                    this.$refs.uCountTo4.start();
                    this.firstHasStar = false;
                }
            }
        },
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
    },

    destroyed() {
        // 离开该页面需要移除这个监听的事件，不然会报错
        window.removeEventListener("scroll", this.handleScroll, true);
    },
};
</script>

<style lang="scss">
.homePage {
    * {
        margin: 0px;
        padding: 0px;
    }

    ul,
    li {
        list-style: none;
    }

    .title {
        height: 32px;
        font-size: 32px;

        font-weight: bold;
        color: #0057a3;
        line-height: 24px;
        text-align: center;

        span {
            position: relative;
        }

        span::after {
            content: " ";
            position: absolute;
            bottom: -9px;
            left: -10px;
            width: 156px;
            height: 5px;
            background: #ffaf2b;
        }
    }

    .homePageBanner {
        height: 800px;
        overflow: hidden;
        position: relative;

        .swiper-container {
            height: 100%;
            width: 100%;
            position: absolute;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .bordeCompanyProfile {
        background: #ffffff;
        width: 100%;
        height: 623px;

        .companyProfile {
            width: 1200px;
            margin: auto;

            .title {
                padding-top: 44px;
            }

            .companyProfileContent {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 59px;

                div:first-child {
                    width: 654px;
                    height: 414px;
                    overflow: hidden;
                    margin-right: 75px;
                    background: url("~@/assets/img/company.jpg") no-repeat;
                    background-size: 100% 100%;
                    transition: all 0.3s;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                &:hover {
                    div:first-child {
                        background: url("~@/assets/img/indexBnner.jpg") no-repeat;
                    }
                }

                div:last-child {
                    width: 591px;
                    // height: 193px;
                    font-size: 18px;

                    font-weight: 400;
                    color: #333333;
                    line-height: 24px;
                    // margin-top: 111px;

                    p {
                        font-size: 18px;

                        font-weight: 400;
                        color: #333333;
                        line-height: 30px;
                    }

                    p:first-child {
                        margin-bottom: 32px;

                        span {
                            color: #ff7a04;
                        }
                    }
                }
            }
        }
    }

    .development {
        width: 100%;
        height: 623px;

        .title {
            padding-top: 50px;
        }

        .developmentContent {
            margin: auto;

            .developmentBgc {
                background: url("~@/assets/img/development.png") no-repeat;
                background-size: 100% 283px;
                background-position: 0 130px;
            }

            .developmentTop {
                ul {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 28px;

                    li {
                        &:first-child {
                            margin-left: 80px;
                        }
                    }
                }
            }

            .developmentDown {
                ul {
                    overflow: hidden;

                    li {
                        float: left;

                        &:first-child {
                            margin-right: 180px;
                        }
                    }
                }
            }

            ul {
                width: 1200px;
                margin: auto;

                li {
                    p:nth-child(1) {
                        font-size: 32px;
                        font-family: HelveticaNeue LT CYR 55 Roman;
                        font-weight: bold;
                        color: #0057a3;
                    }

                    p:nth-child(2) {
                        font-size: 18px;

                        font-weight: bold;
                        color: #333333;
                        line-height: 17px;
                        margin-top: 12px;
                        margin-bottom: 7px;
                    }

                    p:last-child {
                        span {
                            display: block;
                            font-size: 16px;

                            font-weight: 400;
                            color: #333333;
                            line-height: 24px;
                        }
                    }
                }
            }

            .developmentDown {
                margin-top: 230px;
            }
        }
    }

    .advantage {
        width: 100%;
        height: 538px;

        .title {
            padding-top: 50px;
        }

        .advantageContent {
            width: 1200px;
            margin: auto;
            height: 307px;

            ul {
                display: flex;
                justify-content: flex-start;
                margin-top: 68px;
                background: #ffffff;
            }

            li {
                width: 25%;
                height: 306px;
                text-align: center;

                p:nth-child(2) {
                    font-size: 60px;
                    line-height: 60px;
                    height: 60px;
                    font-family: Bebas Neue;
                    font-weight: bold;
                    color: #ff7a04;
                }

                p:nth-child(3) {
                    font-size: 16px;

                    font-weight: 400;
                    color: #333;
                    margin-top: 22px;
                }
            }

            li:nth-child(1) {
                img {
                    width: 61px;
                    height: 61px;
                    margin-top: 26px;
                    margin-bottom: 66px;
                }
            }

            li:nth-child(2) {
                position: relative;

                &::before {
                    content: "";
                    width: 1px;
                    height: 100%;
                    border-left: 0.5px dashed #555555;
                    position: absolute;
                    left: -1px;
                    top: 0px;
                }

                &::after {
                    content: "";
                    width: 1px;
                    height: 100%;
                    border-right: 0.5px dashed #555555;
                    position: absolute;
                    right: 1px;
                    top: 0px;
                }

                img {
                    width: 84px;
                    height: 60px;
                    margin-top: 30px;
                    margin-bottom: 63px;
                }
            }

            li:nth-child(3) {
                position: relative;

                &::after {
                    content: "";
                    width: 1px;
                    height: 100%;
                    border-right: 0.5px dashed #555555;
                    position: absolute;
                    right: 1px;
                    top: 0px;
                }

                img {
                    width: 62px;
                    height: 58px;
                    margin-top: 31px;
                    margin-bottom: 64px;
                }
            }

            li:nth-child(4) {
                img {
                    width: 60px;
                    height: 57px;
                    margin-top: 32px;
                    margin-bottom: 64px;
                }
            }
        }
    }

    .culture {
        width: 100%;
        height: 545px;
        position: relative;

        .swiper-container {
            height: 545px;

            .swiper-slide {
                position: relative;
                background: #fff;

                img {
                    width: 100%;
                    height: 100%;
                    // opacity: 0.72;
                }

                p {
                    position: absolute;
                    z-index: 1;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    font-size: 36px;
                    color: #fff;
                }
            }

            .swiper-pagination {
                top: 148px;
            }

            .swiper-pagination-bullet {
                width: auto;
                height: auto;
                margin: 0 24px !important;
                background: none;
                border-radius: 0;
                font-size: 28px;
                color: #F6F6F6;
                opacity: 0.8;

                &.swiper-pagination-bullet-active {
                    opacity: 1;
                    color: #fff;
                    font-weight: 700;
                }
            }
        }

        .title {
            color: #f4f4f4;
            position: absolute;
            top: 52px;
            left: 0px;
            width: 100%;
            text-align: center;
            z-index: 10;
        }

        .copyWriting {
            width: 1200px;
            position: absolute;
            top: 145px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            text-align: center;

            p {
                &:first-child {
                    span {
                        font-size: 28px;

                        font-weight: bold;
                        color: #ccc;
                        line-height: 24px;
                        display: inline-block;
                        margin-right: 45px;
                        margin-bottom: 72px;
                        cursor: pointer;

                        &.active {
                            color: #ffffff;
                        }
                    }
                }

                &:last-child {
                    span {
                        font-size: 36px;

                        font-weight: 400;
                        color: #f6f6f6;
                        line-height: 24px;
                        display: none;

                        &:first-child {
                            display: block;
                        }
                    }
                }
            }
        }
    }

    .honor {
        width: 100%;
        height: 474px;
        background: #e3e4e5;
        overflow: hidden;

        .swiper-container {
            position: unset;
        }

        .honorContent {
            width: 1200px;
            margin: auto;

            .title {
                padding-top: 65px;
            }

            .honorSwiper {
                margin-top: 63px;
                position: relative;

                .swiper-slide {
                    text-align: center;
                    position: relative;
                }

                p {
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    text-align: center;
                    width: 100%;
                    font-size: 24px;

                    font-weight: 400;
                    color: #005bac;
                }

                .swiper-container {
                    height: 252px;
                }

                img {
                    width: 318px;
                    height: 205px;
                    background: #333333;
                    border-radius: 2px;
                }

                .swiper-button-next,
                .swiper-container-rtl .swiper-button-prev {
                    right: -75px;
                    left: auto;
                    background: url("~@/assets/img/swiperRight.png");
                    width: 74px;
                    height: 74px;
                    top: 50%;
                    transform: translateY(-50%);
                    outline: none;
                }

                .swiper-button-prev,
                .swiper-container-rtl .swiper-button-next {
                    left: -75px;
                    right: auto;
                    background: url("~@/assets/img/swiperLeft.png");
                    width: 74px;
                    height: 74px;
                    top: 50%;
                    transform: translateY(-50%);
                    outline: none;
                }

                .swiper-button-prev:after,
                .swiper-button-next:after {
                    display: none;
                }
            }
        }
    }

    .team {
        height: 630px;
        background: #ffffff;
        overflow: hidden;

        .title {
            padding-top: 62px;
        }

        .teamSwiper {
            width: 1200px;
            position: relative;
            height: 431px;
            margin: auto;
            margin-top: 64px;

            .swiper-container {
                position: unset;

                .swiper-slide {
                    text-align: center;
                    position: relative;

                    img {
                        width: 263px;
                        height: 428px;
                    }

                    .peoplesSlogans {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        text-align: center;
                        width: 100%;
                        height: 0;
                        overflow: hidden;
                        transition: height 0.8s cubic-bezier(0.19, 1, 0.22, 1);

                        // &.showHide {
                        //   // animation: slideDown 0.3s linear;
                        //   // animation-fill-mode: forwards;
                        // }
                        p {
                            border-radius: 10px;
                            z-index: 10;
                            border-top: 1px solid #000000;
                            margin: auto;
                            width: 230px;
                            height: 422px;
                            display: flex;
                            align-items: center;
                            font-size: 16px;
                            line-height: 40px;
                            vertical-align: middle;
                            background-color: #fff;
                            padding: 0 14px;
                            cursor: pointer;
                            overflow: hidden;
                        }
                    }

                    &:hover {
                        .peoplesSlogans {
                            height: 100%;
                        }
                    }
                }
            }

            .swiper-button-next,
            .swiper-container-rtl .swiper-button-prev {
                right: -75px;
                left: auto;
                background: url("~@/assets/img/swiperRight.png");
                width: 74px;
                height: 74px;
                top: 50%;
                transform: translateY(-50%);
                outline: none;
            }

            .swiper-button-prev,
            .swiper-container-rtl .swiper-button-next {
                left: -75px;
                right: auto;
                background: url("~@/assets/img/swiperLeft.png");
                width: 74px;
                height: 74px;
                top: 50%;
                transform: translateY(-50%);
                outline: none;
            }

            .swiper-button-prev:after,
            .swiper-button-next:after {
                display: none;
            }
        }
    }
}

// 动画
// @keyframes slideDown {
//   from {
//     height: 0px;
//   }
//   to {
//     height: 100%;
//   }
// }
</style>>
