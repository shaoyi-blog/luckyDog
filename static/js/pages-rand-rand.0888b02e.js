(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-rand-rand"],{2851:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".content[data-v-faf9be60]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-faf9be60]{height:%?300?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-faf9be60]{\n\t/* \t\tdisplay: flex;*/justify-content:center;height:%?10?%;width:%?500?%;margin-top:%?10?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.title[data-v-faf9be60]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},"5d70":function(t,e,n){"use strict";n.r(e);var o=n("873a"),a=n("6b05");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("c39b");var i,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"faf9be60",null,!1,o["a"],i);e["default"]=l.exports},"69a5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"神奇口袋食用方法：\n\n",rule:"① 点击按钮，随机打开一颗神奇果🍎\n\n②觉得好用的下次可以直接找公众号发神奇果名字，会自动返回链接\n\n③微信打不开的链接可以用浏览器打开\n\n",newline:"\n"}},onLoad:function(){},methods:{wonderful:function(e){var n=[{url:"https://dpurl.cn/TTyFF5Ez",text:"外卖红包",recommend:"点一下就领到了，很方便",type:"ad"},{url:"https://pyq.jzzz66.cn/about.html",text:"朋友圈集赞模拟器",recommend:"妈妈再也不用担心我赞不够了",type:"flow"},{url:"/pages/index/index",text:"赛博算命",recommend:"仿生人新副业，不来试试么",type:"flow"},{url:"https://goldfishies.com/",text:"赛博养鱼",recommend:"一起来喂金鱼！",type:"flow"},{url:"https://suulnnka.github.io/BullshitGenerator/index.html",text:"狗屁不通文章生成器",recommend:"脑细胞狂喜：从此不用为凑字而发愁！",type:"flow"},{url:"https://www.nstun.com/tools/fireworks/index.html",text:"看烟花",recommend:"看完整个人都美好了！",type:"flow"},{url:"https://aidn.jp/ygif/",text:"表情动起来",recommend:"我的表情会动，你的会也么",type:"flow"},{url:"https://poki.com/?continueFlag=99848cbde9095ded46f7d976a2ced271",text:"游戏乐园",recommend:"呦，不来摸个鱼么",type:"flow"},{url:"https://www.neka.cc/composer/10916?dt_platform=wechat_friends&dt_dapp=1",text:"捏脸",recommend:"来，捏一下？",type:"flow"},{url:"https://www.douban.com/group/topic/266666817/?_i=8638538oMAdDZS",text:"表白翻译机",recommend:"当用你的风格说“我爱你”时",type:"flow"},{url:"https://jts.egg404.cn/",text:"道歉检讨生成器",recommend:"怎么，词穷了还不赶紧来",type:"flow"}],o=Math.floor(1e3*Math.random()),a=n.length,r=o%a,i=n[r];uni.showModal({title:i["text"],content:"推荐理由："+i["recommend"],success:function(e){e.confirm?(t.log("用户点击确定"),"赛博算命"==i["text"]?uni.navigateTo({url:i["url"]}):window.location.href=i["url"]):e.cancel&&t.log("用户点击取消")}.bind(this)})}}};e.default=n}).call(this,n("5a52")["default"])},"6b05":function(t,e,n){"use strict";n.r(e);var o=n("69a5"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"873a":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"/static/koudai.jpg"}}),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-text",{staticClass:"rule"},[t._v(t._s(t.rule))]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wonderful.apply(void 0,arguments)}}},[t._v("😜 神奇一下")])],1)],1)},r=[]},bcb8:function(t,e,n){var o=n("2851");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("31f5229d",o,!0,{sourceMap:!1,shadowMode:!1})},c39b:function(t,e,n){"use strict";var o=n("bcb8"),a=n.n(o);a.a}}]);