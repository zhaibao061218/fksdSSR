<template>
<el-container class="containerWrapper">
    <el-header height="100px">
        <Header />
    </el-header>

    <el-main>
        <Nuxt />
    </el-main>

    <el-footer height="395px">
        <Footer />
    </el-footer>

    <div class="servicefixedBar">
        <div class="fixedItem online">
            <a target="_blank" href="https://p.qiao.baidu.com/cps/chat?siteId=8954735&userId=20501524&siteToken=f0726d5be10a3e6235c03594baa00c95"><span>在线客服</span></a>
        </div>
        <div class="fixedItem wechat">
            <span>公众号</span>
            <div class="wechatHover"></div>
        </div>
        <div class="fixedItem tel">
            <span>电话咨询</span>
            <p class="telHover">400-8318-580</p>
        </div>
        <div class="fixedItem qq">
            <a target="_blank" href="https://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAyMDkzNV8zOTgzMTFfNDAwODMxODU4MF8yXw"><span>客服QQ</span></a>
        </div>
        <div class="fixedItem email">
            <span>邮箱</span>
            <p class="emailHover">marketing@focusorder.com</p>
        </div>
        <div class="fixedItem scrollTop" @click="toTop()">
            <span><i class="el-icon-arrow-up"></i>顶部</span>
        </div>
    </div>
</el-container>
</template>

<script>
export default {
    data() {
        return {
            gotop: false,
            visible: false,
        };
    },
    mounted() {
        // 此处true需要加上，不加滚动事件可能绑定不成功
        window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            let scrolltop =
                document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
        },
        toTop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    clearInterval(timeTop);
                }
            }, 10);
        },
    },
};
</script>

<style lang="scss" scope>
.servicefixedBar {
    position: fixed;
    right: 50px;
    top: 30%;
    background: #fff;
    box-shadow: 0 0 4px #ccc;
    z-index: 999;

    .fixedItem {
        position: relative;
        width: 42px;
        padding: 0 8px;
        height: 50px;
        background-image: url("~@/assets/img/servicefixedBar.png");
        background-repeat: no-repeat;
        cursor: pointer;

        a {
            text-decoration: none;
            display: block;
            height: inherit;
        }

        span {
            display: block;
            opacity: 0;
            text-align: center;
            background: #fff;
            font-size: 16px;
            color: #555;
            height: inherit;
            line-height: 17px;
            padding-top: 7px;
            box-sizing: border-box;
            transition: all 0.3s;
        }

        &::after {
            content: "";
            width: 42px;
            height: 1px;
            position: absolute;
            bottom: 0;
            overflow: hidden;
            background: #ededed;
        }

        &.online {
            background-position: center 13px;
        }

        &.wechat {
            background-position: center -40px;

            span {
                white-space: nowrap;
                padding-top: 15px;
                text-indent: -4px;
            }
        }

        &.tel {
            background-position: center -90px;

            &:hover {
                .telHover {
                    animation: telwidth 0.2s linear forwards;
                    -webkit-animation: telwidth 0.2s linear forwards;
                    -ms-animation: telwidth 0.2s linear forwards;
                    -o-animation: telwidth 0.2s linear forwards;
                }
            }

            .telHover {
                background: #ffffff;
                position: absolute;
                top: 0px;
                right: 58px;
                width: 0;
                height: 50px;
                text-align: center;
                line-height: 50px;
                margin: 0px;
                padding: 0px;
                overflow: hidden;
                color: #005bac;
            }
        }

        &.qq {
            background-position: center -140px;
        }

        &.email {
            background-position: center -185px;

            &:hover {
                .emailHover {
                    animation: emailwidth 0.2s linear forwards;
                    -moz-animation: emailwidth 0.2s linear forwards;
                    -webkit-animation: emailwidth 0.2s linear forwards;
                    -o-animation: emailwidth 0.2s linear forwards;
                }
            }

            .emailHover {
                width: 0px;
                height: 50px;
                background: #ffffff;
                position: absolute;
                top: 0px;
                right: 58px;
                overflow: hidden;
                text-align: center;
                line-height: 50px;
                margin: 0px;
                padding: 0px;
                color: #005bac;
            }

            span {
                padding-top: 15px;
            }
        }

        &.wechat {
            position: relative;

            span:hover+.wechatHover {
                animation: wechatOpacity 0.2s linear forwards;
                -webkit-animation: wechatOpacity 0.2s linear forwards;
                -ms-animation: wechatOpacity 0.2s linear forwards;
                -o-animation: wechatOpacity 0.2s linear forwards;
            }

            .wechatHover {
                position: absolute;
                right: 62px;
                top: -50px;
                width: 146px;
                height: 146px;
                background: url("../assets/img/qrcode-focusorder.jpg") no-repeat;
                background-position: right;
                opacity: 0;
            }
        }

        &.scrollTop {
            background-position: center -235px;

            i {
                display: block;
                font-size: 22px;
                line-height: 17px;
            }
        }

        // &:hover {
        //   span {
        //     opacity: 1;
        //     color: #005bac;
        //   }
        // }
        span {
            &:hover {
                opacity: 1;
                color: #005bac;
            }
        }

    }
}

@keyframes telwidth {
    from {
        width: 0px;
    }

    to {
        width: 147px;
    }
}

@-webkit-keyframes telwidth {
    from {
        width: 0px;
    }

    to {
        width: 147px;
    }
}

@-ms-keyframes telwidth {
    from {
        width: 0px;
    }

    to {
        width: 147px;
    }
}

@-o-keyframes telwidth {
    from {
        width: 0px;
    }

    to {
        width: 147px;
    }
}

@keyframes wechatOpacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-webkit-keyframes wechatOpacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-ms-keyframes wechatOpacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-o-keyframes wechatOpacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes emailwidth {
    from {
        width: 0;
    }

    to {
        width: 236px;
    }
}

@-webkit-keyframes emailwidth {
    from {
        width: 0;
    }

    to {
        width: 236px;
    }
}

@-ms-keyframes emailwidth {
    from {
        width: 0;
    }

    to {
        width: 236px;
    }
}

@-o-keyframes emailwidth {
    from {
        width: 0;
    }

    to {
        width: 236px;
    }
}
</style>
