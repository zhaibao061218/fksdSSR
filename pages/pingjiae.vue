<template>
<div class="pingjiae">
    <div class="banner" v-if="slides.length>0">
        <Swiper :banners="slides" :swiperOption="swiperOption" />
    </div>
    <div class="checkedUs">
        <p class="title"><span>为什么选择我们</span></p>
        <div class="checkedUsContent">
            <div>
                <p class="line"></p>
                <p class="usDt">测评市场现状</p>
                <div class="describeText">
                    <p>
                        近年来，随着跨境电商的蓬勃发展和卖家群体规模不断增长，测评需求不断扩大，
                    </p>
                    <p>
                        催生了大量质量参差不齐的测评机构，随之而来的测评市场乱象也越来越严重。
                    </p>
                    <p>
                        各种小规模、不规范化、“隐藏式”中介，掺杂其中混淆视线，让很多跨境卖家
                    </p>
                    <p>
                        防不胜防，稍不留神就上当受骗。跨境卖家迫切需要一个安全高效的海外市场
                    </p>
                    <p>测评服务平台。</p>
                </div>
            </div>
            <div>
                <p class="line"></p>
                <p class="usDt">选择"评价易"的原因</p>
                <div class="describeText">
                    <p>
                        福克斯德基于目前市场现状和跨境卖家的实际需求，耗时数年，精心为跨境卖家打造研发出大型跨境真人测评平台——评价易，评价易不但可以为跨境卖家提供安全、高效、稳定的100%真人测评

                        服务，还可以通过平台独有的产品试用报告进行目标市场调研和产品改良，有效帮助卖家解决运营难、销量难、获评难的问题，同时还降低80%的运营成本，是广大卖家安全合规获取Review，
                        打造精品产品，提升店铺销量的不二选择！</p>
                </div>
            </div>
            <img class="robot" src="~@/assets/img/robot.png" />
            <ul>
                <li>
                    <img src="~@/assets/img/pingjiaeList1.png" />
                    <p>背景优势——大平台背书，测评更放心</p>
                    <div>
                        评价易是福克斯德专为跨境卖家精心打造的100%跨境真人测评平台。公司成立于2013年，总部位于深圳，在香港、美国、成都设有分公司，拥有数百位资深运营人员，团队实力雄厚。
                    </div>
                </li>
                <li>
                    <img src="~@/assets/img/pingjiaeList2.png" />
                    <p>平台优势——源于品质，敢于承诺</p>
                    <div>
                        评价易平台所有买家均为100%真人素人买家，买家资源均通过海外广告、媒体、社群等多种推广渠道引入，同时通过一系列严格的风控措施层层把关和过滤，确保买家群体质量和行为规范，为跨境卖家提供安全、高效、稳定的100%真人测评服务，并向卖家推出及承诺50%保底留评率、3个月质保-退款退货平台包赔、一对一专属账号经理、专属客服等优质服务，最大程度保障卖家权益。
                    </div>
                </li>
                <li>
                    <img src="~@/assets/img/pingjiaeList3.png" />
                    <p>安全优势——全方位保障卖家安全</p>
                    <div>
                        评价易平台严格遵循跨境电商平台相关运营政策，杜绝所有可能存在的风险隐患，全方位确保卖家店铺及资金安全；提供独立后台操作系统，全程自动化送测；资金管理透明，支持资金实时提现，最快当天到账，最慢T+1到账，全方位保障卖家资金安全；卖家专属一对一账号经理、专属客服，随时在线解答您的疑问，为您提供最优质的送测服务。
                    </div>
                </li>
                <li>
                    <img src="~@/assets/img/pingjiaeList4.png" />
                    <p>价格优势——超低收费，超高性价比</p>
                    <div>
                        评价易平台打破行业价格壁垒，每笔订单仅需30元，免评单仅需15元，每笔交易产生的税金由买家承担，性价比超高。
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="platformAdvantages">
        <p class="title"><span>平台优势</span></p>
        <div class="platformAdvantagesContent">
            <ul>
                <li>
                    <img src="~@/assets/img/pingjiaeList5.png" />
                    <p></p>
                    <p>海量真人买家，真实测评</p>
                    <div>
                        汇聚110万+海量真人买家资源，满足各个不同类目需求，真实下单并100%提供产品测评报告，为产品改良提供依据。
                    </div>
                </li>
                <li>
                    <img src="~@/assets/img/pingjiaeList6.png" />
                    <p></p>
                    <p>稳定流量，超高留评率</p>
                    <div>
                        海量买家池持续喷井式高速增长，<br> 留评率平均70%以上，质保50%。
                    </div>
                </li>
                <li>
                    <img src="~@/assets/img/pingjiaeList7.png" />
                    <p></p>
                    <p>安全高效0风险</p>
                    <div>
                        完全遵循跨境电商平台政策,每笔订单质保3个月，<br> 退款退货平台担,真正做到安全可靠零风险测评。
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="~@/assets/img/pingjiaeList8.png" />
                    <p></p>
                    <p>超低收费</p>
                    <div>
                        国内首创跨境真人测评平台，超低手续费，每笔订单仅需30元，<br />
                        免评单仅15元，留评不额外收费，<br />
                        卖家无需承担交易产生的税金，税金均由买家承担。
                    </div>
                </li>
                <li>
                    <img src="~@/assets/img/pingjiaeList9.png" />
                    <p></p>
                    <p>一站式测评服务</p>
                    <div>
                        提供独立操作后台，可实时监测各项数据 <br />
                        1对1专属账户经理服务，一站式解决所有测评问题
                    </div>
                </li>
            </ul>
        </div>
        <p class="goPje"><a href="https://www.pingjiae.com/" target="_blank">立即进入评价易 >></a></p>
    </div>
</div>
</template>

<script>
export default {
    head() {
        return {
            title: "评价易 - 福克斯德专为传统企业转型跨境电商提供一站式解决方案",
        };
    },
    data() {
        return {
            slides: [],
            swiperOption: {
                speed: 400,
                autoplay: false,
                delay: 3000,
                observer: true,
                loop: true,
                observerParent: true,
                observeSlideChildren: true,
                direction: "horizontal",
                paginationClickable: false,
                autoplayDisableOnInteraction: false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
        };
    },
    async asyncData({
        $axios
    }) {
        let [slidesData] = await Promise.all([
            $axios.get(
                "/api/WebSite/getwebsitebannerlistbyweb?BannerIndex=3"
            ),

        ]);
        return {
            slides: slidesData.data.Data,
        };
    },
};
</script>

<style lang="scss">
.pingjiae {
    * {
        margin: 0px;
        padding: 0px;
    }

    ul,
    ol {
        list-style-type: none;
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
            height: 5px;
            background: #ffaf2b;
        }
    }

    .banner {

        .swiper-container,
        .swiperSingle {
            height: 508px;

            img {
                height: 100%;
            }
        }
    }

    .checkedUs {
        // height: 1491px;
        background: #eeeeee;

        .title {
            padding-top: 53px;

            span::after {
                width: 264px;
            }
        }

        .checkedUsContent {
            width: 1200px;
            margin: auto;
            margin-top: 61px;
            position: relative;

            .robot {
                position: absolute;
                right: 50px;
                top: 0px;
            }

            .line {
                width: 60px;
                height: 15px;
                background: #0057a3;
                margin-bottom: 19px;
            }

            .usDt {
                font-size: 24px;

                font-weight: 400;
                color: #333333;
                line-height: 17px;
                margin-bottom: 17px;
            }

            &>div:first-child {
                margin-bottom: 120px;
            }

            .describeText {
                font-size: 16px;

                font-weight: 400;
                color: #333333;
                line-height: 27px;
            }

            ul {
                margin-top: 37px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 50px;

                li {
                    width: 596px;
                    height: 264px;
                    background: #dfdede;
                    text-align: center;
                    margin-bottom: 9px;
                    padding-bottom: 20px;

                    img {
                        width: 80px;
                        height: 90px;
                        margin: auto;
                        margin-top: 10px;
                        margin-bottom: 18px;
                    }

                    p:nth-child(2) {
                        font-size: 24px;

                        font-weight: 400;
                        color: #333333;
                        margin-bottom: 14px;
                    }

                    div {
                        font-size: 14px;

                        font-weight: 400;
                        color: #333333;
                        padding-left: 16px;
                        padding-right: 12px;
                        text-align: left;
                    }
                }
            }
        }
    }

    .platformAdvantages {
        width: 100%;
        height: 808px;
        background: url("~@/assets/img/platformAdvantages.jpg");
        background-size: 100% 100%;

        .title {
            text-align: center;
            padding-top: 55px;
            color: #ffffff;

            span {
                &::after {
                    width: 156px;
                }
            }
        }

        .platformAdvantagesContent {
            width: 1200px;
            height: 520px;
            border: 2px solid rgba(255, 255, 255, 0.5);
            margin: auto;
            margin-top: 51px;
            position: relative;

            ul {
                li {
                    p:nth-child(2) {
                        width: 183px;
                        height: 2px;
                        background: #ff7a04;
                        margin: auto;
                        margin-top: 16px;
                        margin-bottom: 15px;
                    }

                    p:nth-child(3) {
                        // height: 24px;
                        font-size: 24px;

                        font-weight: 400;
                        color: #ffffff;
                        margin-bottom: 10px;
                    }
                }

                &:first-child {
                    display: flex;
                    justify-content: space-around;
                    // align-items: center;
                    margin-top: 40px;
                    margin-bottom: 40px;

                    li {
                        width: 334px;
                        text-align: center;

                        img {
                            height: 60px;
                            vertical-align: top;
                        }
                    }

                    div {
                        width: 334px;
                        font-size: 14px;
                        line-height: 22px;

                        font-weight: 400;
                        color: #ffffff;
                    }
                }

                &:nth-child(2) {
                    display: flex;
                    justify-content: space-around;
                    color: #ffffff;
                    text-align: center;

                    div {
                        font-size: 14px;
                        line-height: 22px;

                        font-weight: 400;
                        color: #ffffff;
                    }
                }
            }
        }

        .goPje {
            text-align: center;
            margin-top: 40px;

            a {
                display: inline-block;
                width: 266px;
                height: 53px;
                line-height: 53px;
                // background: #ffaf2b;
                border-radius: 27px;
                color: #ffffff;
                font-size: 24px;
                text-decoration: none;
                animation: chgBgColor 0.8s ease-in-out infinite;
            }
        }
    }
}

@keyframes chgBgColor {
    0% {
        background: #0468BF;
    }

    100% {
        background: #ffaf2b;
    }
}
</style>
