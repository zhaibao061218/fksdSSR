<template>
<ul class="pagination" v-if="pages.length>1">
    <template v-if="url">
        <li v-if="showPrev" class="pre" :class="{ disabled: currentPage == 1 }">
            <nuxt-link v-if="currentPage > 1" :to="`${url}${currentPage - 1}`" v-html="prevText">
            </nuxt-link>
            <span v-else v-html="prevText"></span>
        </li>

        <li v-for="index in pages" :key="index" :class="{ active: currentPage == index }" v-show="showPager">
            <nuxt-link v-if="!isNaN(index)" :to="`${url}${index}`" v-html="index">
            </nuxt-link>
            <span v-else v-html="index"></span>
        </li>

        <li v-if="showNext" class="next" :class="{ disabled: currentPage == Math.ceil(total / pageSize) }">
            <nuxt-link v-if="currentPage != Math.ceil(total / pageSize)" :to="`${url}${currentPage + 1}`" v-html="nextText">
            </nuxt-link>
            <span v-else v-html="nextText"></span>
        </li>
    </template>
</ul>
</template>

<script>
export default {
    name: "Pager",
    props: {
        url: {
            //分页链接
            required: false,
            type: [String],
            default: null,
        },
        total: {
            required: false,
            type: [Number],
            default: 0,
        },
        pageSize: {
            required: false,
            type: [Number],
            default: 5,
        },
        currentPage: {
            required: false,
            type: [Number],
            default: 1,
        },
        layout: {
            required: false,
            type: [String],
            default: 'prev,pager,next',
        },
        prevText: {
            required: false,
            type: [String],
            default: '<i class="el-icon el-icon-arrow-left"></i>',
        },
        nextText: {
            required: false,
            type: [String],
            default: '<i class="el-icon el-icon-arrow-right"></i>',
        },
    },
    data() {
        return {
            pagerCount: 4,
        };
    },
    computed: {
        pages() {
            let pag = [],
                pageNum = Math.ceil(this.total / this.pageSize);

            for (let i = 1; i <= pageNum; i++) {
                pag.push(i);
            }

            //总页数
            return pag;
        },
        showPrev() {
            return this.layout.indexOf('prev') != -1;
        },
        showPager() {
            return this.layout.indexOf('pager') != -1;
        },
        showNext() {
            return this.layout.indexOf('next') != -1;
        }

    },
};
</script>

<style lang="scss" scoped>
.app-pagination {
    margin: 40px auto;
    text-align: center;

    li {
        display: inline-block;
        margin: 0 6px;

        a {
            padding: 8px;
            display: inline-block;
            color: #626262;

            &:hover {
                color: #ffb400;
            }
        }

        &.active a {
            color: #ffb400;
        }

        &.total a {
            color: #ffb400;
        }
    }
}
</style>
