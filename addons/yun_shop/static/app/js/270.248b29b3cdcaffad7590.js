webpackJsonp([270],{"LI+J":function(e,t,n){var a=n("zul0");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("2d0d4cb6",a,!0,{})},RaaB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),r=n("Tg7E"),i="0",s=!1,o=!1,l={mixins:[n("vsZy").a],data:function(){return{page:1,record:[],isLoadMore:!0,last_page:0,mailLanguage:"",mailFullReturnTitle:"",mailFullReturnName:"",activeName:"first",first_content:[],second_content:[],alreadyReturn:0,each_return_rate:0,order_return_rate:0,returnAmountTotal:0,notReturn:0,fullReturnName:"",isShow:!1,return_list_name:""}},mounted:function(){},activated:function(){this.initMailLanguage(),this.initData(),this.getData()},methods:{initMailLanguage:function(){this.mailLanguage=this.fun.initMailLanguage(),this.fun.setWXTitle(this.fun.setMailLanguage("消费满额赠送",this.mailLanguage.full_return.full_return)),this.mailFullReturnTitle=this.fun.setMailLanguage("消费满额赠送",this.mailLanguage.full_return.full_return),this.mailFullReturnName=this.fun.setMailLanguage("赠送",this.mailLanguage.full_return.return_name),this.mailFullReturnLog=this.fun.setMailLanguage("满额返现记录",this.mailLanguage.full_return.full_return_log)},initData:function(){this.page=1,this.record=[],this.isLoadMore=!0,this.last_page=0,i="0",s=!1,o=!1,this.activeName="first",this.first_content=[],this.second_content=[],this.alreadyReturn=0,this.each_return_rate=0,this.order_return_rate=0,this.returnAmountTotal=0,this.notReturn=0,this.fullReturnName="满额返现",this.isShow=!1,this.return_list_name="返现记录"},getData:function(){var e=this;$http.get("plugin.full-return.frontend.list.index",{page:1},"加载中").then(function(t){console.log("AAAAA:",t),1==t.result?(e.isLoadMore=!0,e.last_page=t.data.list.last_page,e.alreadyReturn=t.data.finish,e.returnAmountTotal=t.data.total,e.notReturn=t.data.surplus,e.first_content=t.data.list,e.fullReturnName=t.data.full_return_name,e.isShow="0"!=t.data.is_show_return_list,e.return_list_name=t.data.return_list_name,e.last_page||(e.last_page=0),t.data.list.data.length>0&&(e.record=t.data.list.data)):Object(r.Toast)(t.msg)},function(e){Object(r.Toast)(e.msg)})},getMoreData:function(){var e=this;this.isLoadMore=!1;var t={page:this.page};this.page>=this.last_page||(this.page=this.page+1,t.page=this.page,$http.get("plugin.full-return.frontend.list.index",t,"加载中").then(function(t){if(e.isLoadMore=!0,1!==t.result)return e.page=e.page-1,void(e.isLoadMore=!1);e.record=e.record.concat(t.data.list.data)}).catch(function(e){console.log(e)}))},toReturnInfo:function(e){this.$router.push(this.fun.getUrl("full_return_list_info",{id:e}))},getReturnListInfo:function(){var e=this;$http.get("plugin.full-return.frontend.detail.index",{},"").then(function(t){1==t.result?e.second_content=t.data:Object(r.Toast)(t.msg)},function(e){Object(r.Toast)(e.msg)})},setDataByTabIndex:function(){"0"!=i||s?"1"!=i||o||(o=!0,this.getReturnListInfo()):(s=!0,this.getReturnList())},handleClick:function(e,t){i!=e&&(i=e)}},components:{cTitle:a.a}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"shareholderCenter"}},[n("c-title",{attrs:{hide:!1,text:e.mailFullReturnTitle}}),e._v(" "),n("div",{staticClass:"share_holder"},[n("div",{staticClass:"left"},[n("span",[e._v("￥"+e._s(e.returnAmountTotal)+" ")]),n("br"),e._v(" "),n("span",[e._v(e._s(e.mailFullReturnName)+"总额(元)")])])]),e._v(" "),n("div",{staticClass:"share_info"},[n("div",[n("span",[e._v("￥"+e._s(e.alreadyReturn))]),n("br"),e._v("\n\t\t\t\t已"+e._s(e.mailFullReturnName)+"总额(元)\n        \t")]),e._v(" "),n("div",[n("span",[e._v("￥"+e._s(e.notReturn))]),n("br"),e._v("\n        \t\t未"+e._s(e.mailFullReturnName)+"总额(元)\n        \t")])]),e._v(" "),e.isShow?n("div",{staticClass:"shareholder-order"},[n("div",{attrs:{id:"tabs"}},[n("mt-navbar",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("mt-tab-item",{attrs:{id:"first"},nativeOn:{click:function(t){return e.handleClick("0")}}},[e._v(e._s(e.mailFullReturnLog))])],1),e._v(" "),n("mt-tab-container",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("mt-tab-container-item",{attrs:{id:"first"}},[n("ul",{staticClass:"rationList"},e._l(e.record,function(t,a){return n("li",{key:a,staticClass:"list"},[n("h4",[e._v("\n                                    "+e._s(e.mailFullReturnLog)+"ID:"+e._s(t.id)+"\n                                    "),n("span",[e._v(e._s(t.amount))])]),e._v(" "),n("div",{staticClass:"one"},[n("div",{staticClass:"time"},[n("span",{staticClass:"left"},[e._v(e._s(e.mailSingleReturnName)+"时间ID:"+e._s(t.id))]),e._v(" "),n("span",{staticClass:"right"},[e._v(e._s(t.created_at))])]),e._v(" "),n("div",{staticClass:"Record",on:{click:function(n){return e.toReturnInfo(t.id)}}},[n("span",{staticClass:"left look"},[e._v("查看记录")]),e._v(" "),n("i",{staticClass:"fa fa-angle-right"})])])])}),0)])],1)],1)]):e._e()],1)},staticRenderFns:[]};var h=n("VU/8")(l,d,!1,function(e){n("LI+J")},"data-v-84f43530",null);t.default=h.exports},zul0:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'\np[data-v-84f43530] {\n  margin: 0;\n  padding: 0;\n}\n#shareholderCenter[data-v-84f43530] {\n  padding-top: 40px;\n}\n#shareholderCenter .m_header[data-v-84f43530] {\n    width: 100%;\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    font-size: 15px;\n    font-weight: bold;\n    background: #fff;\n}\n#shareholderCenter .m_header span[data-v-84f43530] {\n      display: inline-block;\n      width: 1rem;\n      height: 1.5rem;\n      float: left;\n      margin-left: 0.625rem;\n      font-size: 30px;\n}\n#shareholderCenter .share_holder[data-v-84f43530] {\n    padding: 1rem 0.75rem;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #f15353;\n}\n#shareholderCenter .share_holder .left[data-v-84f43530] {\n      width: 55%;\n      text-align: left;\n      color: #FFFFFF;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n#shareholderCenter .share_holder .left span[data-v-84f43530]:first-child {\n        font-weight: bold;\n        font-size: 20px;\n}\n#shareholderCenter .share_holder .left span[data-v-84f43530] {\n        line-height: 1.5rem;\n        font-size: 14px;\n}\n#shareholderCenter .share_holder .right[data-v-84f43530] {\n      width: 45%;\n      padding: 2rem 0.9375rem 0rem 0rem;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      color: #fff;\n      text-align: right;\n      line-height: 1.625rem;\n      font-size: 12px;\n}\n#shareholderCenter .share_info[data-v-84f43530] {\n    width: 100%;\n    padding: 1rem 0;\n    background-color: #fff;\n    margin-bottom: 0.625rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n#shareholderCenter .share_info div[data-v-84f43530]:first-child {\n      border-right: solid 0.0625rem #ebebeb;\n}\n#shareholderCenter .share_info div[data-v-84f43530] {\n      font-size: 12px;\n      line-height: 1.25rem;\n      width: 50%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n#shareholderCenter .share_info div span[data-v-84f43530] {\n        color: #e84f40;\n        font-size: 16px;\n        font-weight: bold;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list[data-v-84f43530] {\n    margin: 0.375rem 0rem;\n    background-color: #fff;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list h4[data-v-84f43530] {\n      line-height: 40px;\n      width: 100%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0 0.875rem;\n      line-height: 2.5rem;\n      height: 2.5rem;\n      text-align: left;\n      color: #333;\n      font-size: 14px;\n      border-bottom: 0.0625rem solid #ebebeb;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list h4 span[data-v-84f43530] {\n        display: inline-block;\n        font-size: 14px;\n        font-weight: normal;\n        color: #f15353;\n        float: right;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul[data-v-84f43530]:after {\n      content: "";\n      display: block;\n      clear: both;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul[data-v-84f43530] {\n      width: 100%;\n      padding: 0.625rem 0rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul li[data-v-84f43530] {\n        width: 33%;\n        float: left;\n        font-size: 12px;\n        color: #8c9295;\n        line-height: 1.375rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list ul li span[data-v-84f43530] {\n          color: #333;\n          font-size: 14px;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list p[data-v-84f43530] {\n      color: #aab2b9;\n      text-align: left;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0rem 1.25rem 0.9375rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .list p span[data-v-84f43530] {\n        color: #728ae3;\n        float: right;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .recordList[data-v-84f43530] {\n    padding: 0.9375rem;\n    font-size: 14px;\n    line-height: 1.125rem;\n    color: #333;\n    text-align: left;\n    background-color: #fff;\n    margin: 0.125rem;\n}\n#shareholderCenter .shareholder-order #tabs .rationList .recordList span[data-v-84f43530] {\n      font-size: 14px;\n      float: right;\n}\n#shareholderCenter .shareholder-order #tabs .rationList[data-v-84f43530]:after {\n    content: "";\n    display: block;\n    clear: both;\n}\n#shareholderCenter .shareholder-order #tabs .one[data-v-84f43530] {\n    padding: 0 0.875rem;\n}\n#shareholderCenter .shareholder-order #tabs .one .time[data-v-84f43530] {\n      width: 100%;\n      line-height: 1.625rem;\n      margin-top: 0.625rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n#shareholderCenter .shareholder-order #tabs .one .Record[data-v-84f43530] {\n      width: 100%;\n      line-height: 2.75rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n#shareholderCenter .shareholder-order #tabs .one .Record i[data-v-84f43530] {\n        font-size: 20px;\n        color: #929292;\n        line-height: 2.75rem;\n}\n#shareholderCenter .shareholder-order #tabs .one .left[data-v-84f43530] {\n      color: #8c8c8c;\n      font-size: 14px;\n}\n#shareholderCenter .shareholder-order #tabs .one .look[data-v-84f43530] {\n      color: #333;\n}\n#shareholderCenter .shareholder-order #tabs .one .right[data-v-84f43530] {\n      color: #8c8c8c;\n      font-size: 14px;\n}\n',""])}});