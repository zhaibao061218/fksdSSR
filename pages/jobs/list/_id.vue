<template>
<div class="jobsListPage">

    <Swiper :banners="bannerImgs" :swiperOption="swiperOption" />

    <div class="container">
        <el-row :gutter="20">
            <el-col :span="24">
                <p class="hrMail">
                    请将简历以附件的形式发送至：<a href="mailto:hr3@focusorder.com">hr3@focusorder.com</a>
                    简历中请注明您所申请的职位
                </p>
                <ul class="list">
                    <li v-for="(item, index) in jobsData.Data" :key="index">
                        <nuxt-link :to="'/jobs/view/' + item.Id">
                            <div class="leftArea">
                                <h3>{{ item.RecruitName}}<span class="num">（{{ item.IsSome==1?"若干":item.RecruitNumber+"人" }} ）</span></h3>
                                <p class="salary">面议</p>
                            </div>
                            <div class="rightArea">
                                <p class="endDate">截止时间：{{ $moment(item.RecruitEndTime).format("YYYY-MM-DD") }}</p>
                                <p class="city">工作地点：{{ item.RecruitCity }}</p>
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
                <Pager prevText="上一页" nextText="下一页" layout="prev,next" url="/jobs/list/" :total="jobsData.Amount" :pageSize="5" :currentPage="currentPage"></Pager>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
    head() {
        return {
            title: "人才招聘 - 福克斯德专为传统企业转型跨境电商提供一站式解决方案",
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
        };
    },
    async asyncData({
        params,
        $axios
    }) {
        let [bannerImgsData, jobsData] = await Promise.all([
            $axios.get(
                "/api/WebSite/getwebsitebannerlistbyweb?BannerIndex=5"
            ),
            $axios.get(
                "/api/WebSite/getwebsiterecruitlist?State=0&PageIndex=" + params.id + "&PageSize=5"
            ),
        ]);
        return {
            bannerImgs: bannerImgsData.data.Data,
            jobsData: jobsData.data.Data,
            currentPage: parseInt(params.id)
        };
    },
    methods: {
        // async fnChangePage(id) {
        //     this.$router.push({
        //         path: `/jobs/list/${id}`
        //     })
        // }
    }
};
</script>
