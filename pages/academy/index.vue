<template>
<div class="school">
    <div class="schoolBanner" v-if="slides.length>0">
        <Swiper :banners="slides" :swiperOption="swiperOption" />
    </div>
    <div class="strength">
        <p class="title"><span>独家优势</span></p>
        <div class="strengthContent">
            <ul>
                <li>
                    <p>
                        <img src="~@/assets/img/schoolList1.png" alt="" />
                    </p>
                    <div>
                        <p>精准适用性强</p>
                        <p>从入门到高级进阶</p>
                        <p>覆盖面极其广泛</p>
                        <p>课程设计更合理</p>
                        <img src="../../assets/img/one.png" />
                    </div>
                </li>
                <li>
                    <p>
                        <img src="~@/assets/img/schoolList2.png" alt="" />
                    </p>
                    <div>
                        <p>线上精品课程</p>
                        <p>汇聚业界资深讲师</p>
                        <p>打造优质线上课程</p>
                        <p>全面提升课程质量</p>
                        <img src="../../assets/img/two.png" />
                    </div>
                </li>
                <li>
                    <p>
                        <img src="~@/assets/img/schoolList3.png" alt="" />
                    </p>
                    <div>
                        <p>案例实操演练</p>
                        <p>全盘分析运营痛点</p>
                        <p>颠覆传统运营思维</p>
                        <p>分享实战实操经验</p>
                        <img src="../../assets/img/three.png" />
                    </div>
                </li>
                <li>
                    <p>
                        <img src="~@/assets/img/schoolList4.png" alt="" />
                    </p>
                    <div>
                        <p>讲师现场答疑</p>
                        <p>线上答疑互动</p>
                        <p>讲师解答疑惑</p>
                        <p>课程互动性强</p>
                        <img src="../../assets/img/four.png" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="classes">
        <p class="title"><span>精品课程</span></p>
        <div class="classesContent">
            <ul>
                <li>
                    <img src="~@/assets/img/star.png" alt="" srcset="" />
                    <h3>新手入门</h3>
                    <div>
                        <p v-for="item in courselist1" :key="item.id">{{item.CourseName}}</p>
                    </div>
                    <a href="/academy/list/1/1">立即查看</a>
                </li>
                <li>
                    <img src="~@/assets/img/classesBorder7.png" alt="" srcset="" />
                    <h3>快速进阶</h3>
                    <div>
                        <p v-for="item in courselist2" :key="item.id">{{item.CourseName}}</p>
                        <p v-show="courselist2<=0">暂无课程</p>
                    </div>
                    <a href="/academy/list/2/1">立即查看</a>
                </li>
                <li>
                    <img src="~@/assets/img/classesBorder6.png" alt="" srcset="" />
                    <h3>高阶课程</h3>
                    <div>
                        <p v-for="item in courselist3" :key="item.id">{{item.CourseName}}</p>
                        <p v-show="courselist3<=0">暂无课程</p>
                    </div>
                    <a href="/academy/list/3/1">立即查看</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="newPeople">
        <p class="title"><span>新人专享</span></p>
        <div class="newPeopleContent">
            <div class="member">
                <a href="https://www.pingjiae.com/BrandWeb/Register" target="_blank"><span>立即<br />注册</span></a>
            </div>
            <div class="memberTable">
                <el-table :data="tableData" style="width: 100%" :span-method="objectSpanMethod" border>
                    <el-table-column type="index" label="序 号" width="100">
                    </el-table-column>
                    <el-table-column prop="ico" label="身 份" width="100">
                        <template slot-scope="scope">
                            <img :src="scope.row.ico" alt="" srcset="" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="vip" label="等 级"> </el-table-column>
                    <el-table-column prop="integrate" label="积分（近1年内用户积分总和)">
                    </el-table-column>
                    <el-table-column label="权 益" width="300">
                        <template slot-scope="scope">

                            <p class="equity" v-for="item in scope.row.equity" :key="item">
                                <img class="course" src="~@/assets/img/course.png" alt="" srcset="">{{ item }}
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="getIntegral" label="积分获取方式">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    head() {
        return {
            title: "跨境学堂 - 福克斯德专为传统企业转型跨境电商提供一站式解决方案",
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
            tableData: [{
                    ico: require("../../assets/img/badges1.png"),
                    vip: "VIP1",
                    integrate: "1-100",
                    equity: ["对应等级直播课程"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges1.png"),
                    vip: "VIP2",
                    integrate: "101-500",
                    equity: ["对应等级及小于自身等级直播课程"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges1.png"),
                    vip: "VIP3",
                    integrate: "501-1000",
                    equity: ["对应等级及小于自身等级直播课程"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges2.png"),
                    vip: "VIP4",
                    integrate: "1001-2000",
                    equity: ["对应等级及小于自身等级直播课程", "50元店铺套餐兑换券/月"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges2.png"),
                    vip: "VIP5",
                    integrate: "2001-5000",
                    equity: [" 对应等级及小于自身等级直播课程", "100元店铺套餐兑换券/月"],

                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges2.png"),
                    vip: "VIP6",
                    integrate: "5001-10000",
                    equity: [" 对应等级及小于自身等级直播课程", "150元店铺套餐兑换券/月"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges3.png"),
                    vip: "VIP7",
                    integrate: "10001-20000",
                    equity: [" 对应等级及小于自身等级直播课程", "200元店铺套餐兑换券/月"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges3.png"),
                    vip: "VIP8",
                    integrate: "20001-50000",
                    equity: [" 对应等级及小于自身等级直播课程", "250元店铺套餐兑换券/月"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges3.png"),
                    vip: "VIP9",
                    integrate: "50001-100000",
                    equity: [" 对应等级及小于自身等级直播课程", "300元店铺套餐兑换券/月"],
                    getIntegral: "免评单1分，留评单2分",
                },
                {
                    ico: require("../../assets/img/badges4.png"),
                    vip: "VIP10",
                    integrate: ">100001",
                    equity: [
                        " 对应等级及小于自身等级直播课程",
                        "3500元店铺套餐兑换券/月",
                    ],
                    getIntegral: "免评单1分，留评单2分",
                },
            ],
        };
    },
    async asyncData({
        $axios
    }) {
        let [slidesData, courselist1, courselist2, courselist3] = await Promise.all([
            $axios.get(
                "/api/WebSite/getwebsitebannerlistbyweb?BannerIndex=4"
            ),
            $axios.get(
                "/api/WebSite/getwebsitecourselist_web?type=1&pageIndex=1&pageSize=4"
            ),
            $axios.get(
                "/api/WebSite/getwebsitecourselist_web?type=2&pageIndex=1&pageSize=4"
            ),
            $axios.get(
                "/api/WebSite/getwebsitecourselist_web?type=3&pageIndex=1&pageSize=4"
            )
        ]);
        return {
            // posts: request1Data.data.data,
            slides: slidesData.data.Data,
            courselist1: courselist1.data.Data.Data,
            courselist2: courselist2.data.Data.Data,
            courselist3: courselist3.data.Data.Data,
        };
    },
    methods: {
        objectSpanMethod({
            row,
            column,
            rowIndex,
            columnIndex
        }) {
            if (columnIndex === 1) {
                if (rowIndex % 3 === 0) {
                    return {
                        rowspan: 3,
                        colspan: 1,
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0,
                    };
                }
            }
        },
    },
};
</script>

<style lang="scss" scope>
.school {
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
            width: 156px;
            height: 5px;
            background: #ffaf2b;
        }
    }

    .schoolBanner {
        width: 100%;
        height: 510px;
        overflow: hidden;
        position: relative;

        .swiper-container {
            height: 510px;
        }
    }

    .strength {
        width: 100%;
        height: 690px;
        background: #ffffff;

        .title {
            padding-top: 53px;
        }

        .strengthContent {
            width: 1200px;
            margin: auto;

            ul {
                display: flex;
                justify-content: flex-start;
                margin-top: 59px;

                li {
                    width: 300px;
                    text-align: center;

                    &>p:first-child {
                        width: 302px;
                        height: 188px;
                        background: #cae5fc;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    &:nth-child(odd) {
                        &>p:first-child {
                            background: #9ed2fe;
                        }

                        &>div {
                            height: 287px;
                            background: #eeeeee;
                        }
                    }

                    &>div {
                        height: 287px;
                        background: #f5f5f5;

                        p {
                            &:nth-child(1) {
                                font-size: 24px;

                                font-weight: 400;
                                color: #005bac;
                                line-height: 17px;
                                padding-top: 30px;
                                margin-bottom: 20px;
                            }

                            &:not(:first-child) {
                                font-size: 14px;

                                font-weight: 400;
                                color: #333333;
                                line-height: 30px;
                            }
                        }

                        img {
                            margin-top: 30px;
                        }
                    }
                }
            }
        }
    }

    .classes {
        width: 100%;
        height: 716px;
        background: url("~@/assets/img/classesBgc.jpg");
        background-size: 100% 100%;

        .title {
            padding-top: 53px;
            color: #ffffff;
        }

        .classesContent {
            width: 1200px;
            margin: auto;

            ul {
                display: flex;
                justify-content: space-between;
                margin-top: 90px;

                li {
                    width: 359px;
                    height: 444px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    background-image: url("~@/assets/img/classesBorder.png");
                    background-size: 100% 100%;
                    text-align: center;
                    position: relative;

                    img {
                        margin-top: 38px;
                    }

                    h3 {
                        font-size: 28px;

                        font-weight: 400;
                        color: #ffffff;
                        margin-top: 34px;
                        margin-bottom: 30px;
                    }

                    div {
                        p {
                            font-size: 14px;
                            // font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #ffffff;
                            margin-bottom: 15px;
                        }
                    }

                    a {
                        display: inline-block;
                        width: 327px;
                        height: 52px;
                        line-height: 52px;
                        background: linear-gradient(0deg, #00539b, #0084ff);
                        border: 1px solid #09208e;
                        border-radius: 4px;
                        outline: none;
                        text-decoration: none;
                        font-size: 30px;
                        color: #ffffff;
                        font-weight: 400;
                        position: absolute;
                        bottom: 45px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
            }
        }
    }

    .newPeople {
        background: #ffffff;

        .title {
            padding-top: 53px;
        }

        .newPeopleContent {
            width: 1200px;
            margin: auto;
            margin-top: 64px;

            .member {
                height: 201px;
                background: url("~@/assets/img/memberBgc.png") no-repeat;
                border-radius: 101px;
                background-size: 100% 100%;
                position: relative;

                span {
                    position: absolute;
                    right: 12px;
                    top: 11px;
                    display: inline-block;
                    width: 180px;
                    height: 180px;
                    background: linear-gradient(0deg, #424359 0%, #6a6b81 100%);
                    box-shadow: 0px 5px 7px 0px rgba(4, 0, 0, 0.45);
                    border-radius: 50%;
                    font-size: 46px;

                    font-weight: 400;
                    color: #ffffff;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-wrap: wrap;
                    cursor: pointer;
                }
            }

            .memberTable {
                margin-top: 43px;
                height: 700px;
                padding-bottom: 70px;
                overflow: hidden;

                .el-table td,
                .el-table th.is-leaf {
                    text-align: center;
                }

                .el-table th {
                    background: linear-gradient(0deg, #0c51ff, #0084ff);
                    color: #ffffff;
                }

                .el-table__body {
                    tbody {
                        tr {

                            &:nth-child(4),
                            &:nth-child(5),
                            &:nth-child(6) {
                                background: #b7ddfd;
                                color: #555555;
                            }

                            &:nth-child(7),
                            &:nth-child(8),
                            &:nth-child(9) {
                                background: #FDD799;
                                color: #555555;
                            }

                            &:nth-child(10) {
                                background: #BEAEFC;
                                color: #555555;
                            }
                        }
                    }
                }

                .el-table--enable-row-hover .el-table__body tr:hover>td {
                    background-color: transparent;
                }

                .equity {
                    text-align: left;
                    padding-left: 20px;

                    img {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>
