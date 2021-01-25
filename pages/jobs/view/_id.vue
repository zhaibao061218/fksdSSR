<template>
<div class="jobDetail">
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="24">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/jobs/list/1' }">人才招聘</el-breadcrumb-item>
                    <el-breadcrumb-item>招聘信息</el-breadcrumb-item>
                </el-breadcrumb>

                <div class="jobInfos">
                    <div class="leftArea">
                        <h3>
                            {{ jobDetailData.RecruitName }}<span class="num">（{{ jobDetailData.IsSome==1?"若干":jobDetailData.RecruitNumber+"人" }}）</span>
                        </h3>
                        <p class="salary">面议</p>
                    </div>
                    <div class="rightArea">
                        <p class="endDate">截止时间：{{ $moment(jobDetailData.RecruitEndTime).format("YYYY-MM-DD") }}</p>
                        <p class="city">工作地点：{{ jobDetailData.RecruitCity }}</p>
                    </div>
                </div>

                <div class="jobContent">
                    <h3 class="subTitle">岗位职责</h3>
                    <div class="editorContent" v-html="jobDetailData.JobDuty"></div>

                    <h3 class="subTitle">任职要求</h3>
                    <div class="editorContent" v-html="jobDetailData.JobDemand"></div>

                    <div class="contactHr">
                        <p>请将简历以附件的形式发送至：<a href="mailto:hr3@focusorder.com">hr3@focusorder.com</a> 简历中请注明您所申请的职位</p>
                        <p>如有疑问请联系人事： <span>0755-21011556 / 13632803152</span></p>
                    </div>

                </div>
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
    async asyncData({
        params,
        $axios
    }) {
        let [jobDetailData] = await Promise.all([
            $axios.get(
                "/api/WebSite/getwebsiterecruitinfobyid?Id=" + params.id
            ),
        ]);
        return {
            jobDetailData: jobDetailData.data.Data,
        };
    },
};
</script>
