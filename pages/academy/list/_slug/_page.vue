<template>
<div class="newStudent">
    <div class="container">
        <div class="content">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/academy' }">跨境学堂</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <span v-if="courseType == 1">新手入门</span>
                    <span v-else-if="courseType == 2">快速进阶</span>
                    <span v-else>高阶课程</span>
                </el-breadcrumb-item>
            </el-breadcrumb>

            <el-table :data="courseList" style="width: 100%" :row-class-name="tableRowClassName" @row-click="lookCourse">
                <el-table-column prop="WatchName" label="直播平台" width="180" align="center">
                </el-table-column>

                <el-table-column prop="courseType" label="课程专题" width="180" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.CourseType == 1">新手入门</span>
                        <span v-else-if="scope.row.CourseType === 2">快速进阶</span>
                        <span v-else>高阶课程</span>
                    </template>
                </el-table-column>

                <el-table-column prop="CourseName" label="课程名称" align="center">
                    <template slot-scope="scope">
                        {{ scope.row.CourseName }}
                    </template>
                </el-table-column>

                <el-table-column prop="Price" label="课程价格(元)" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.Price >= 0">{{ scope.row.Price }}</span>
                        <span v-else class="freeCourses">免费课程</span>
                    </template>
                </el-table-column>

                <el-table-column prop="VIP" label="VIP等级" align="center">
                    <template slot-scope="scope">
                        <span>VIP {{ scope.row.VIP }}</span>
                    </template>
                </el-table-column>
            </el-table>

            <Pager layout="prev,pager,next" :url="`/academy/list/${courseType}/`" :total="total" :pageSize="30" :currentPage="currentPageNumber"></Pager>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentPageNumber: 1,
            courseType: 1,
        };
    },
    async asyncData({
        app,
        params,
        $axios
    }) {
        let [courseList] = await Promise.all([
            $axios.get(
                "/api/WebSite/getwebsitecourselist_web?type=" +
                parseInt(params.slug) +
                "&pageIndex=" +
                parseInt(params.page) +
                "&pageSize=30"
            ),
        ]);

        app.head.title =
            "跨境学堂 - " +
            (params.slug == 1 ?
                "新手入门" :
                params.slug == 2 ?
                "快速进阶" :
                "高阶课程");

        return {
            courseList: courseList.data.Data.Data,
            courseType: params.slug,
            total: courseList.data.Data.Amount,
            currentPageNumber: parseInt(params.page),
        };
    },
    methods: {
        lookCourse(val) {
            if (val.CourseUrl.replace(/(^\s*)|(\s*$)/g, "") != "" && val.CourseUrl != "#") {
                // window.location.href = val.CourseUrl;
                window.open(val.CourseUrl)
            }
        },
        tableRowClassName({
            row,
            rowIndex
        }) {
            //把每一行的索引放进row
            row.index = rowIndex;
        },
    },
};
</script>

<style lang="scss">
.newStudent {
    padding-top: 1px;
    background: #ffffff;

    .el-table {
        font-size: 14px;

        font-weight: 400;
        color: #555555;
        padding-bottom: 50px;

        &:before {
            display: none;
        }

        th {
            background: linear-gradient(0deg, #0c51ff, #0084ff);
            color: #ffffff;
            border-right: 1px solid #cccccc;
        }

        td {
            cursor: pointer;

            &:nth-child(odd) {
                background: #fef5e7;
            }

            &:nth-child(even) {
                background: #daecfb;
            }
        }

        .freeCourses {
            color: #ff0000;
        }

        .el-table--enable-row-hover .el-table__body tr:hover>td {
            background-color: transparent;
        }

        a {
            color: #555555;
            cursor: pointer;
        }
    }

    .el-pagination {
        margin-top: 77px;
        text-align: center;
    }

    .pagination {
        width: 1200px;
        margin: auto;
        list-style: none;
        overflow: hidden;
        text-align: center;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        padding-bottom: 50px;

        li {
            display: inline-block;
            float: left;
            margin-right: 10px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: #f4f4f5;
            border-radius: 4px;

            &.active {
                background: #409eff;

                a {
                    color: #ffffff;
                }
            }

            a {
                color: #606266;
                text-decoration: none;
            }

            &:first-child {
                a {
                    color: #333;
                }

                span {
                    cursor: not-allowed;
                    color: #ccc;
                }
            }

            &:last-child {
                a {
                    color: #333;
                }

                span {
                    cursor: not-allowed;
                    color: #ccc;
                }
            }
        }
    }
}
</style>
