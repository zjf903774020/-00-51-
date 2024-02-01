console.log("成功引用gn.js");

new Vue({
    el: '#app',
    data: function () {
        return {
            cards: [
                {
                    title: '某音',
                    title1: '某音工具箱',
                    title2: 'DY工具箱',
                    id: 1,
                    fold: true,
                    products: [
                        {
                            htb_name: '智能引流',
                            qtb_name: '智能引流',
                            wkt_name: '智能引流',
                            id: 'dy_znyl',
                            htb_img_src: '../../muban/huituibao/images/qzdr.png',
                            qtb_img_src: '../../public/images/znyl.png',
                            wkt_img_src: '../../public/images/znyl.png',
                            ehk_img_src: 'images/douyin/dy_znyl.png',
                            href: '../../dy_znyl.html',
                            gnjs: '抖音智能引流功能介绍:主要功能适用于全国范围获客，提升品牌账号曝光度',
                        },
                        {
                            htb_name: '精准截流',
                            qtb_name: '精准截流',
                            wkt_name: '精准截流',
                            id: 'dy_jzyl',
                            htb_img_src: '../../muban/huituibao/images/ly_dd.png',
                            qtb_img_src: '../../public/images/jzjl.png',
                            wkt_img_src: '../../public/images/jzjl.png',
                            ehk_img_src: 'images/douyin/dy_jzjl.png',
                            href: '../../dy_jzyl.html',
                            gnjs: '抖音精准截流功能介绍：可指定行业、账号等进行精准截取目标账号流量',
                        },
                        {
                            htb_name: '直播场控',
                            qtb_name: '直播场控',
                            wkt_name: '直播场控',
                            id: 'dy_zbyl',
                            htb_img_src: '../../muban/huituibao/images/zhibo.png',
                            qtb_img_src: '../../public/images/zbck.png',
                            wkt_img_src: '../../public/images/zbck.png',
                            ehk_img_src: 'images/douyin/dy_zbck.png',
                            href: '../../dy_zbck.html',
                            gnjs: '抖音直播场控功能介绍：对直播间进行自动礼物感谢、进场欢迎、自动喊话等功能，帮助主播进行一些机械化工作，提升直播效率',
                        },
                        {
                            htb_name: '同城引流',
                            qtb_name: '同城引流',
                            wkt_name: '同城引流',
                            id: 'dy_tcyl',
                            htb_img_src: '../../muban/huituibao/images/chengshi.png',
                            qtb_img_src: '../../public/images/tcyl.png',
                            wkt_img_src: '../../public/images/tcyl.png',
                            ehk_img_src: 'images/douyin/dy_tcyl.png',
                            href: '../../dy_tcyl.html',
                            gnjs: '抖音同城引流功能介绍：在抖音同城界面进行运行，让您的账号在同城进行账号曝光，增加品牌账号曝光',
                        },
                        {
                            htb_name: '粉丝画像引流',
                            qtb_name: '粉丝画像引流',
                            wkt_name: '粉丝画像引流',
                            id: 'dy_fshxyl',
                            htb_img_src: '../../muban/huituibao/images/ktrx.png',
                            qtb_img_src: '../../public/images/fshx.png',
                            wkt_img_src: '../../public/images/fshx.png',
                            ehk_img_src: 'images/douyin/dy_fshx.png',
                            href: '../../dy_fshxyl.html',
                            gnjs: '抖音粉丝画像引流功能介绍：对于粉丝列表内的同类型账号进行操作，完成同类型账号引流目的',
                        },
                        {
                            htb_name: '取消视频点赞',
                            qtb_name: '取消视频点赞',
                            wkt_name: '取消视频点赞',
                            id: 'dy_qxspdz',
                            htb_img_src: '../../muban/huituibao/images/qxz.png',
                            qtb_img_src: '../../public/images/qxdz.png',
                            wkt_img_src: '../../public/images/qxdz.png',
                            ehk_img_src: 'images/douyin/dy_qxdz.png',
                            href: '../../dy_qxspdz.html',
                            gnjs: '抖音取消视频点赞功能介绍：以上功能可能会产生部分点赞行为，可使用该功能对已点赞功能进行取消',
                        },
                    ]
                },
                {
                    title: '某手',
                    title1: '某手工具箱',
                    title2: 'KS工具箱',
                    ykzs_logo_img_src: 'images/ks.png',
                    id: 2,
                    fold: true,
                    products: [
                        {
                            htb_name: '万能引流',
                            qtb_name: '万能引流',
                            wkt_name: '万能引流',
                            id: 'ks_wxyl',
                            htb_img_src: '../../muban/huituibao/images/ks/qcyzh.png',
                            qtb_img_src: '../../public/images/wnyl.png',
                            wkt_img_src: '../../public/images/wnyl.png',
                            ehk_img_src: 'images/kuaishou/ks_wnyl.png',
                            href: '../../ks_wnyl.html',
                            gnjs: '快手万能引流功能介绍：适用于全国获客，对快手的全国用户进行品牌账号增加曝光',
                        },
                        {
                            htb_name: '同城引流',
                            qtb_name: '同城引流',
                            wkt_name: '同城引流',
                            id: 'ks_tcyl',
                            htb_img_src: '../../muban/huituibao/images/ks/chengshi.png',
                            qtb_img_src: '../../public/images/tcyl.png',
                            wkt_img_src: '../../public/images/tcyl.png',
                            ehk_img_src: 'images/kuaishou/ks_tcyl.png',
                            href: '../../ks_tcyl.html',
                            gnjs: '快手同城引流功能介绍：在快手同城内进行引流，在同城一定范围内进行品牌账号曝光',
                        },
                        {
                            htb_name: '直播场控',
                            qtb_name: '直播场控',
                            wkt_name: '直播场控',
                            id: 'ks_zbck',
                            htb_img_src: '../../muban/huituibao/images/ks/zhibo.png',
                            qtb_img_src: '../../public/images/zbck.png',
                            wkt_img_src: '../../public/images/zbck.png',
                            ehk_img_src: 'images/kuaishou/ks_zbck.png',
                            href: '../../yc_whz.html',
                            gnjs: '快手直播场控功能介绍：对直播间进行自动礼物感谢、进场欢迎、自动喊话等功能，帮助主播进行一些机械化工作，提升主播的直播效率',
                        },
                        {
                            htb_name: '智能养号',
                            qtb_name: '智能养号',
                            wkt_name: '智能养号',
                            id: 'ks_znyh',
                            htb_img_src: '../../muban/huituibao/images/ks/znyh.png',
                            qtb_img_src: '../../public/images/znyh.png',
                            wkt_img_src: '../../public/images/znyh.png',
                            ehk_img_src: 'images/kuaishou/ks_znyh.png',
                            href: '../../yc_whz.html',
                            gnjs: '快手智能养号功能介绍：对快手进行常规拟人式账号操作，适用于一些新号需要增加快手对账号的信任度提升，从而获取官方推流',
                        },
                        {
                            htb_name: '行业转化',
                            qtb_name: '行业转化',
                            wkt_name: '行业转化',
                            id: 'ks_hyzh',
                            htb_img_src: '../../muban/huituibao/images/ks/hyzh.png',
                            qtb_img_src: '../../public/images/hyzh.png',
                            wkt_img_src: '../../public/images/hyzh.png',
                            ehk_img_src: 'images/kuaishou/ks_hyzh.png',
                            href: '../../yc_whz.html',
                            gnjs: '快手行业转化功能介绍：根据行业内容对客户进行转化，成为私域流量。',
                        },
                        {
                            htb_name: '群成员转化',
                            qtb_name: '群成员转化',
                            wkt_name: '群成员转化',
                            id: 'ks_qcyzh',
                            htb_img_src: '../../muban/huituibao/images/ks/qcyzh.png',
                            qtb_img_src: '../../public/images/qcyzh.png',
                            wkt_img_src: '../../public/images/qcyzh.png',
                            ehk_img_src: 'images/kuaishou/ks_qcyzh.png',
                            href: '../../yc_whz.html',
                            gnjs: '快手群成员转化功能介绍：针对群内成员进行转化，成为私域流量。',
                        },
                        {
                            htb_name: '截流评论',
                            qtb_name: '截流评论',
                            wkt_name: '截流评论',
                            id: 'ks_jlpl',
                            htb_img_src: '../../muban/huituibao/images/ks/liuyan-duandian.png',
                            qtb_img_src: '../../public/images/jlpl.png',
                            wkt_img_src: '../../public/images/jlpl.png',
                            ehk_img_src: 'images/kuaishou/ks_jlpl.png',
                            href: '../../yc_whz.html',
                            gnjs: '快手截流评论功能介绍：选中某个行业或账号，对其账号内粉丝或流量进行评论操作，从而达到截流效果。',
                        },
                        {
                            htb_name: '精准引流',
                            qtb_name: '精准引流',
                            wkt_name: '精准引流',
                            id: 'ks_jzyl',
                            htb_img_src: '../../muban/huituibao/images/ks/jz.png',
                            qtb_img_src: '../../public/images/jzjl.png',
                            wkt_img_src: '../../public/images/jzjl.png',
                            ehk_img_src: 'images/kuaishou/ks_jzyl.png',
                            href: '../../yc_whz.html',
                            gnjs: '快手精准引流功能介绍：精准至某个行业、账号，进行功能性操作，实现品牌账号曝光。',
                        },
                        {
                            htb_name: '精准评论',
                            qtb_name: '精准评论',
                            wkt_name: '精准评论',
                            id: 'ks_jzpl',
                            htb_img_src: '../../muban/huituibao/images/ks/pl.png',
                            qtb_img_src: '../../public/images/jzpl.png',
                            wkt_img_src: '../../public/images/jzpl.png',
                            ehk_img_src: 'images/kuaishou/ks_jzpl.png',
                            href: '../../yc_whz.html',
                            gnjs: '快手精准评论功能介绍：精准至某个行业、账号进行评论，增加账号的垂直度，从而获取官方自带流量。',
                        }
                    ]
                },
                {
                    title: '某红书',
                    title1: '某红书工具箱',
                    title2: 'XHS工具箱',
                    id: 3,
                    fold: true,
                    products: [
                        {
                            htb_name: '万能引流',
                            qtb_name: '万能引流',
                            wkt_name: '万能引流',
                            id: 'xhs_wnyl',
                            htb_img_src: '../../muban/huituibao/images/xhs/qunzuduoren.png',
                            qtb_img_src: '../../public/images/wnyl.png',
                            wkt_img_src: '../../public/images/wnyl.png',
                            ehk_img_src: 'images/xiaohongshu/xhs_wnyl.png',
                            href: '../../xhs_wnyl.html',
                            gnjs: '小红书万能引流功能介绍：适用于全国获客，对小红书的全国用户进行品牌账号增加曝光',
                        },
                        {
                            htb_name: '粉丝转化',
                            qtb_name: '粉丝转化',
                            wkt_name: '粉丝转化',
                            id: 'xhs_fszh',
                            htb_img_src: '../../muban/huituibao/images/xhs/fszh.png',
                            qtb_img_src: '../../public/images/fshx.png',
                            wkt_img_src: '../../public/images/fshx.png',
                            ehk_img_src: 'images/xiaohongshu/xhs_fszh.png',
                            href: '../../yc_whz.html',
                            gnjs: '小红书粉丝转化功能介绍：对粉丝进行私域流量转化，从而不受平台限制进行推广产品',
                        },
                        {
                            htb_name: '行业转化',
                            qtb_name: '行业转化',
                            wkt_name: '行业转化',
                            id: 'xhs_hyzh',
                            htb_img_src: '../../muban/huituibao/images/xhs/hangyedongtai.png',
                            qtb_img_src: '../../public/images/hyzh.png',
                            wkt_img_src: '../../public/images/hyzh.png',
                            ehk_img_src: 'images/xiaohongshu/xhs_hyzh.png',
                            href: '../../yc_whz.html',
                            gnjs: '小红书行业转化功能介绍：针对某个行业、账号进行粉丝转化行为，转变为私域流量。',
                        },
                        {
                            htb_name: '同城引流',
                            qtb_name: '同城引流',
                            wkt_name: '同城引流',
                            id: 'xhs_tcyl',
                            htb_img_src: '../../muban/huituibao/images/xhs/chengshi.png',
                            qtb_img_src: '../../public/images/tcyl.png',
                            wkt_img_src: '../../public/images/tcyl.png',
                            ehk_img_src: 'images/xiaohongshu/xhs_tcyl.png',
                            href: '../../xhs_tcyl.html',
                            gnjs: '小红书同城引流功能介绍：使用账号在软件同城内进行引流，增加品牌账号在同城内的账号曝光',
                        }
                    ]
                },
                {
                    title: '保活设置',
                    title1: '免杀设置',
                    title2: '免杀设置',
                    id: 4,
                    fold: true,
                    products: [
                        {
                            htb_name: '悬浮窗',
                            qtb_name: '悬浮窗',
                            wkt_name: '悬浮窗',
                            id: 'sz_xfc',
                            htb_img_src: '../../public/images/qxgl_1.jpg',
                            qtb_img_src: '../../public/images/xfc.png',
                            wkt_img_src: '../../public/images/xfc.png',
                            ehk_img_src: 'images/shezhi/sz_xfc.png',
                            href: '../../qx_xfc.html',
                        },
                        {
                            htb_name: '后台无限制',
                            qtb_name: '后台无限制',
                            wkt_name: '后台无限制',
                            id: 'sz_htwxz',
                            htb_img_src: '../../public/images/qxgl_1.jpg',
                            qtb_img_src: '../../public/images/htwxz.png',
                            wkt_img_src: '../../public/images/htwxz.png',
                            ehk_img_src: 'images/shezhi/sz_htwxz.png',
                            href: '../../qx_htwxz.html',
                        },
                        {
                            htb_name: '忽略电池优化',
                            qtb_name: '忽略电池优化',
                            wkt_name: '忽略电池优化',
                            id: 'sz_hldcyh',
                            htb_img_src: '../../public/images/qxgl_1.jpg',
                            qtb_img_src: '../../public/images/hldcyh.png',
                            wkt_img_src: '../../public/images/hldcyh.png',
                            ehk_img_src: 'images/shezhi/sz_hldcyh.png',
                            href: '../../qx_hldcyh.html',
                        },
                        {
                            htb_name: '勿扰模式',
                            qtb_name: '勿扰模式',
                            wkt_name: '勿扰模式',
                            id: 'sz_wrms',
                            htb_img_src: '../../public/images/qxgl_1.jpg',
                            qtb_img_src: '../../public/images/wrms.png',
                            wkt_img_src: '../../public/images/wrms.png',
                            ehk_img_src: 'images/shezhi/sz_wrms.png',
                            href: '../../qx_wrms.html',
                        },
                        {
                            htb_name: '修改系统设置',
                            qtb_name: '修改系统设置',
                            wkt_name: '修改系统设置',
                            id: 'sz_xgxtsz',
                            htb_img_src: '../../public/images/qxgl_1.jpg',
                            qtb_img_src: '../../public/images/xgxtsz.png',
                            wkt_img_src: '../../public/images/xgxtsz.png',
                            ehk_img_src: 'images/shezhi/sz_xgxtsz.png',
                            href: '../../qx_xgxtsz.html',
                        },
                        {
                            htb_name: '后台锁定',
                            qtb_name: '后台锁定',
                            wkt_name: '后台锁定',
                            id: 'sz_htsd',
                            htb_img_src: '../../public/images/qxgl_1.jpg',
                            qtb_img_src: '../../public/images/htsd.png',
                            wkt_img_src: '../../public/images/htsd.png',
                            ehk_img_src: 'images/shezhi/sz_htsd.png',
                            href: '../../qx_htsd.html',
                        }
                    ]
                }
            ]

        }
    },


});
// console.log("你好，我是一个警告框！");
// alert("你好，我是一个警告框！");