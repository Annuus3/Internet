// 过滤筛选组件
Vue.component('demo-filter', {
    template: `
   				<div class="demo">
   					<div class="demo-warp">
   						<div class="demo-flex" v-for="(v,k) in getList" :key="k">
   							<span class="demo-title">{{v.title}}</span>
   							<div class="demo-content">
   								<div class="demo-tab" :class="isShow ? 'demo-hide' : ''">
   									<span v-for="(val, key) in v.childer" :key="key" :class="{'demo-active': val.active}" @click="tabClick(val,key,k)">{{val.value}}</span>
   								</div>
   							</div>
   							<div class="demo-more" @click="isShow = !isShow" v-if="v.childer.length >= 14">更多</div>
   						</div>
   					</div>
   				</div>
   			`,
    data() {
        return {
            isShow: false
        }
    },
    props: {
        getList: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        tabClick(data, key, k) {
            // 添加 active ==> true 显示 `active样式`
            this.getList[k].childer.map(item => {
                item.active = false
            })
            this.getList[k].childer[key].active = true

            // 选中的数据
            let newArray = []
            this.getList.map(data => {
                data.childer.map(item => {
                    if (item.active == true) {
                        newArray.push(item)
                    }
                })
            })
            this.$emit('get-sel-data', newArray)
            this.$emit('set-time', 0, 1000, true)
        }
    }
})

// 布局组件
Vue.component('view-layout', {
    template: `<div class="view-warp">
   					<div class="view-box" v-if="!viewTime.time">
<!--   						<div class="view-flex" v-for="(v,k) in viewData" :key="k" :style="style">-->
<!--   							<div class="view-item">-->
<!--   								<span>{{v.title}}</span>-->
<!--   							</div>-->
<!--   						</div>-->
                        <td>
                            <!--嵌套的表格开始-->
                            <table>
                                <tr>
                                    <td width="500px" ><a href="https://www.bv2008.cn/show/1075248.html"><span>●</span><b>【外部活动】2022年大学生志愿服务西部计划工作启动</b></a></td>
                                    <td width="400px" style="text-align: right">2022-04-13 14:30</td>
                                </tr>
                                <tr>
                                    <td width="70%"><a href="#"><span>●</span>【官方活动】“奥运冠军陪你玩”儿童团体活动</a></td>
                                    <td width="30%" style="text-align: right">2021-11-23 12:36</td>
                                </tr>
                                <tr>
                                    <td width="70%" ><a href="#"><span>●</span>【官方活动】“来自星星的孩子玩”儿童团体活动</a></td>
                                    <td width="30%" style="text-align: right">2021-09-15 13:30</td>
                                </tr>
                                <tr>
                                    <td width="70%" ><a href="#"><span>●</span>【官方活动】传递爱心系列活动之走进儿童福利院</a></td>
                                    <td width="30%" style="text-align: right">2021-09-23 12:30</td>
                                </tr>
                                <tr>
                                    <td width="70%"><a href="#"><span>●</span>【官方活动】传递爱心系列活动之关爱大同村留守儿童</a></td>
                                    <td width="30%" style="text-align: right">2021-07-15 11:36</td>
                                </tr>
                                <tr>
                                    <td width="400px"><a href="#"><span>●</span>【外部活动】“为爱行走”大型公益徒步活动</a></td>
                                    <td width="300px" style="text-align: right">2021-05-02 14:36</td>
                                </tr>
                                <tr>
                                    <td width="70%"><a href="#"><span>●</span>【官方活动】重阳节敬老院看望老人活动</a></td>
                                    <td width="30%" style="text-align: right">2021-10-10 12:36</td>
                                </tr>
                                <tr>
                                    <td width="70%" ><a href="#"><span>●</span>【官方活动】弘阳社区慰问老人活动</a></td>
                                    <td width="30%" style="text-align: right">2021-08-08 11:30</td>
                                </tr>
                                <tr>
                                    <td width="400px"><a href="#"><span>●</span>【官方活动】冠军故事走进青阳小学活动</a></td>
                                    <td width="300px" style="text-align: right">2021-06-01 12:36</td>
                                </tr>
                                <tr>
                                    <td width="70%" ><a href="https://www.bv2008.cn/show/1075248.html"><span>●</span>【外部活动】2022年大学生志愿服务西部计划工作启动</a></td>
                                    <td width="30%" style="text-align: right">2022-04-13 14:30</td>
                                </tr>
                                <tr>
                                    <td width="70%"><a href="#"><span>●</span>【官方活动】“奥运冠军陪你玩”儿童团体活动</a></td>
                                    <td width="30%" style="text-align: right">2021-11-23 12:36</td>
                                </tr>
                                <tr>
                                    <td width="70%" ><a href="#"><span>●</span>【官方活动】“来自星星的孩子玩”儿童团体活动</a></td>
                                    <td width="30%" style="text-align: right">2021-09-15 13:30</td>
                                </tr>
                                <tr>
                                    <td width="70%" ><a href="https://www.bv2008.cn/show/1075248.html"><span>●</span>【外部活动】2022年大学生志愿服务西部计划工作启动</a></td>
                                    <td width="30%" style="text-align: right">2022-04-13 14:30</td>
                                </tr>
                                <tr>
                                    <td width="70%"><a href="#"><span>●</span>【官方活动】“奥运冠军陪你玩”儿童团体活动</a></td>
                                    <td width="30%" style="text-align: right">2021-11-23 12:36</td>
                                </tr>
                                <tr>
                                    <td width="70%" ><a href="#"><span>●</span>【官方活动】“来自星星的孩子玩”儿童团体活动</a></td>
                                    <td width="30%" style="text-align: right">2021-09-15 13:30</td>
                                </tr>
                            </table>
                        </td>
                                          
                        <div class="block" style="text-align: center">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :total="50">
                            </el-pagination>
                        </div>
                        </div>
   					<div class="view-no-data" v-else>{{viewTime.msg}}</div>
   				</div>`,
    props: {
        viewData: {
            type: Array,
            default: () => []
        },
        width: {
            type: String,
            default: "25%"
        },
        height: {
            type: String,
            default: "300px"
        },
        viewTime: {
            type: Object,
            default: {
                time: true,
                msg: '数据加载中...'
            }
        }
    },
    computed: {
        style() {
            return {
                width: `${this.width.replace(/%+/, '')}%`,
                height: `${this.height.replace(/px+/, '')}px`
            }
        }
    }
})
