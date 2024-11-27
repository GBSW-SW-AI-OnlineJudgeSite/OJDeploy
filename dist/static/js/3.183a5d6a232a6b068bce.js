webpackJsonp([3],{"815S":function(t,a){},QLwg:function(t,a){},iKNO:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("8Q2T"),i=e("26Oo"),s=e("oAV5"),r=e("FN8c"),o={name:"acm-rank",components:{Pagination:i.a},data:function(){var t=this;return{page:1,limit:30,total:0,loadingTable:!1,dataRank:[],columns:[{align:"center",width:60,render:function(a,e){return a("span",{},e.index+(t.page-1)*t.limit+1)}},{title:this.$i18n.t("m.User_User"),align:"center",render:function(a,e){return a("a",{style:{display:"inline-block","max-width":"200px"},on:{click:function(){t.$router.push({name:"user-home",query:{username:e.row.user.username}})}}},e.row.user.username)}},{title:this.$i18n.t("m.mood"),align:"center",key:"mood"},{title:this.$i18n.t("m.AC"),align:"center",key:"accepted_number"},{title:this.$i18n.t("m.Total"),align:"center",key:"submission_number"},{title:this.$i18n.t("m.Rating"),align:"center",render:function(t,a){return t("span",s.a.getACRate(a.row.accepted_number,a.row.submission_number))}}],options:{tooltip:{trigger:"axis"},legend:{data:[this.$i18n.t("m.AC"),this.$i18n.t("m.Total")]},grid:{x:"3%",x2:"3%"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar","stack"]},saveAsImage:{show:!0}},right:"10%"},calculable:!0,xAxis:[{type:"category",data:["root"],axisLabel:{interval:0,showMinLabel:!0,showMaxLabel:!0,align:"center",formatter:function(t,a){return s.a.breakLongWords(t,10)}}}],yAxis:[{type:"value"}],series:[{name:this.$i18n.t("m.AC"),type:"bar",data:[0],markPoint:{data:[{type:"max",name:"max"}]}},{name:this.$i18n.t("m.Total"),type:"bar",data:[0],markPoint:{data:[{type:"max",name:"max"}]}}]}}},mounted:function(){this.getRankData(1)},methods:{getRankData:function(t){var a=this,e=(t-1)*this.limit,i=this.$refs.chart;i.showLoading({maskColor:"rgba(250, 250, 250, 0.8)"}),this.loadingTable=!0,n.a.getUserRank(e,this.limit,r.g.ACM).then(function(e){a.loadingTable=!1,1===t&&a.changeCharts(e.data.data.results.slice(0,10)),a.total=e.data.data.total,a.dataRank=e.data.data.results,i.hideLoading()}).catch(function(){a.loadingTable=!1,i.hideLoading()})},changeCharts:function(t){var a=[],e=[],n=[];t.forEach(function(t){a.push(t.user.username),e.push(t.accepted_number),n.push(t.submission_number)}),this.options.xAxis[0].data=a,this.options.series[0].data=e,this.options.series[1].data=n}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Row",{attrs:{type:"flex",justify:"space-around"}},[e("Col",{attrs:{span:22}},[e("Panel",{staticClass:"box",attrs:{padding:10}},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.ACM_Ranklist")))]),t._v(" "),e("div",{staticClass:"echarts"},[e("ECharts",{ref:"chart",attrs:{options:t.options,"auto-resize":""}})],1)]),t._v(" "),e("Table",{attrs:{data:t.dataRank,columns:t.columns,loading:t.loadingTable,size:"large"}}),t._v(" "),e("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"update:current":function(a){t.page=a},"on-change":t.getRankData,"on-page-size-change":function(a){return t.getRankData(1)}}})],1)],1)},staticRenderFns:[]};var c=e("VU/8")(o,l,!1,function(t){e("815S")},"data-v-a53ba6c0",null);a.default=c.exports},sW7o:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("8Q2T"),i=e("26Oo"),s=e("oAV5"),r=e("FN8c"),o={name:"acm-rank",components:{Pagination:i.a},data:function(){var t=this;return{page:1,limit:30,total:0,dataRank:[],columns:[{align:"center",width:60,render:function(a,e){return a("span",{},e.index+(t.page-1)*t.limit+1)}},{title:this.$i18n.t("m.User_User"),align:"center",render:function(a,e){return a("a",{style:{display:"inline-block","max-width":"200px"},on:{click:function(){t.$router.push({name:"user-home",query:{username:e.row.user.username}})}}},e.row.user.username)}},{title:this.$i18n.t("m.mood"),align:"center",key:"mood"},{title:this.$i18n.t("m.Score"),align:"center",key:"total_score"},{title:this.$i18n.t("m.AC"),align:"center",key:"accepted_number"},{title:this.$i18n.t("m.Total"),align:"center",key:"submission_number"},{title:this.$i18n.t("m.Rating"),align:"center",render:function(t,a){return t("span",s.a.getACRate(a.row.accepted_number,a.row.submission_number))}}],options:{tooltip:{trigger:"axis"},legend:{data:[this.$i18n.t("m.Score")]},grid:{x:"3%",x2:"3%"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar"]},saveAsImage:{show:!0}},right:"10%"},calculable:!0,xAxis:[{type:"category",data:["root"],boundaryGap:!0,axisLabel:{interval:0,showMinLabel:!0,showMaxLabel:!0,align:"center",formatter:function(t,a){return s.a.breakLongWords(t,14)}},axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:this.$i18n.t("m.Score"),type:"bar",data:[0],barMaxWidth:"80",markPoint:{data:[{type:"max",name:"max"}]}}]}}},mounted:function(){this.getRankData(1)},methods:{getRankData:function(t){var a=this,e=(t-1)*this.limit,i=this.$refs.chart;i.showLoading({maskColor:"rgba(250, 250, 250, 0.8)"}),n.a.getUserRank(e,this.limit,r.g.OI).then(function(e){1===t&&a.changeCharts(e.data.data.results.slice(0,10)),a.total=e.data.data.total,a.dataRank=e.data.data.results,i.hideLoading()})},changeCharts:function(t){var a=[],e=[];t.forEach(function(t){a.push(t.user.username),e.push(t.total_score)}),this.options.xAxis[0].data=a,this.options.series[0].data=e}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Row",{attrs:{type:"flex",justify:"space-around"}},[e("Col",{attrs:{span:22}},[e("Panel",{staticClass:"box",attrs:{padding:10}},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.OI_Ranklist")))]),t._v(" "),e("div",{staticClass:"echarts"},[e("ECharts",{ref:"chart",attrs:{options:t.options,"auto-resize":""}})],1)]),t._v(" "),e("Table",{attrs:{data:t.dataRank,columns:t.columns,size:"large"}}),t._v(" "),e("Pagination",{attrs:{total:t.total,"page-size":t.limit,current:t.page,"show-sizer":""},on:{"update:pageSize":function(a){t.limit=a},"update:page-size":function(a){t.limit=a},"update:current":function(a){t.page=a},"on-change":t.getRankData,"on-page-size-change":function(a){return t.getRankData(1)}}})],1)],1)},staticRenderFns:[]};var c=e("VU/8")(o,l,!1,function(t){e("QLwg")},"data-v-12dc9b7f",null);a.default=c.exports}});