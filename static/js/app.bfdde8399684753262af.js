webpackJsonp([0],{"2sw8":function(e,t,i){"use strict";var s={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};t.a=s},"4ELh":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"js-cursor-dim",class:{active:e.isActive}},e._l(e.items,function(t){return i("li",{key:t.id,staticClass:"js-cursor-highlight js-cursor-underline",class:e.itemClass,attrs:{id:t.id},on:{click:e.itemClick}},[t.to?i("router-link",{attrs:{to:t.to}},[i("span",{staticClass:"underlined"},[e._v(" "+e._s(t.text)+" ")])]):e._e(),e._v(" "),t.href?i("a",{attrs:{href:t.href,target:"_blank"}},[i("span",{staticClass:"underlined"},[e._v(" "+e._s(t.text)+" ")])]):e._e()],1)}))},staticRenderFns:[]};var n=i("VU/8")({name:"animated_list",props:["items","itemClass","isActive","itemClick"]},a,!1,function(e){i("sVSl")},null,null).exports,r={name:"Sidebar",components:{animated_list:n},props:["navItems","onLoad","beforeClose","onClose"],data:function(){return{isActive:!1,isOpen:!1,width:this.getWidth(),height:this.getHeight()}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.onResize),this.getWidth(),this.getHeight()})},methods:{beforeLoad:function(e,t){TweenMax.set(e,{x:100-this.width,clearProps:"z-index"})},loadAnimation:function(e,t){TweenMax.fromTo(e.querySelector("#sidebar-line"),2.5,{y:-this.height},{delay:.5,ease:Expo.easeInOut,y:0,onComplete:t,clearProps:"all"}),TweenMax.fromTo([e.querySelector("#sticky-logo"),e.querySelector("#sticky-burger")],1.5,{opacity:0,y:30},{delay:2,ease:Expo.easeOut,opacity:1,y:0,clearProps:"all",onComplete:t})},burgerClickHandler:function(e,t){this.isOpen?(this.isOpen=!1,this.close(e,t)):(this.isOpen=!0,this.open(e,t))},open:function(e,t){TweenMax.to(this.$el,1,{x:0,ease:Expo.easeInOut,clearProps:"z-index"})},close:function(e,t){this.beforeClose(),TweenMax.killTweensOf(this.$el),TweenMax.to(this.$el,1,{x:100-this.width,ease:Expo.easeInOut,clearProps:"z-index",onComplete:this.onClose})},getWidth:function(){return document.documentElement.clientWidth},getHeight:function(){return document.documentElement.clientHeight},setActive:function(e,t){this.isActive=!0,"function"==typeof this.onLoad&&this.onLoad()},onResize:function(){this.width=this.getWidth(),this.height=this.getHeight(),this.isOpen||TweenMax.set(this.$el,{x:100-this.width,clearProps:"z-index"})}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{appear:""},on:{"before-appear":e.beforeLoad,appear:e.loadAnimation,"after-appear":e.setActive}},[i("div",{staticClass:"site-sidebar",attrs:{id:"site-sidebar"}},[i("div",{staticClass:"sidebar-line",attrs:{id:"sidebar-line"}}),e._v(" "),i("div",{staticClass:"sidebar-extend",attrs:{id:"sidebar-extend"}},[i("div",{staticClass:"sidebar-top-el extend-title",attrs:{id:"extend-title"}},[i("div",{staticClass:"title",attrs:{id:"title"}},[i("router-link",{attrs:{to:"/"}},[i("span",[e._v("Pachinko Bot")])])],1)]),e._v(" "),i("div",{staticClass:"sidebar-mid-el sidebar-nav",attrs:{id:"sidebar-nav"}},[i("animated_list",{staticClass:"nav-list",attrs:{items:e.navItems,"item-class":"nav-item","is-active":e.isOpen,"item-click":e.burgerClickHandler,id:"nav-list"}})],1)]),e._v(" "),i("div",{staticClass:"sidebar-sticky",attrs:{id:"sidebar-sticky"}},[i("div",{staticClass:"sidebar-top-el sticky-logo",attrs:{id:"sticky-logo"}},[i("div",{staticClass:"logo",attrs:{id:"logo"}},[i("svg",{attrs:{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"}},[i("circle",{attrs:{cx:"100",cy:"100",r:"100",fill:"white"}})])])]),e._v(" "),i("div",{staticClass:"sidebar-mid-el sticky-burger",class:{active:e.isActive,open:e.isOpen},attrs:{id:"sticky-burger"},on:{click:e.burgerClickHandler}},[i("div",{staticClass:"patty"}),e._v(" "),i("div",{staticClass:"patty"}),e._v(" "),i("div",{staticClass:"patty"})])])])])},staticRenderFns:[]};var l=i("VU/8")(r,o,!1,function(e){i("4ELh")},null,null).exports,c={name:"App",components:{Sidebar:l},data:function(){return{pages:[{text:"Mission",id:"mission-nav",to:"/"},{text:"Journal",id:"journal-nav",to:"journal"},{text:"Team",id:"team-nav",to:"team"}],loaded:!1}},methods:{setLoaded:function(){this.loaded=!0},setUnloaded:function(){this.loaded=!1}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Sidebar",{attrs:{navItems:this.pages,onLoad:this.setLoaded,beforeClose:this.setUnloaded,onClose:this.setLoaded}}),this._v(" "),this.loaded?t("router-view"):this._e()],1)},staticRenderFns:[]};var m=i("VU/8")(c,d,!1,function(e){i("nzgx")},null,null).exports,h=i("/ocq"),u={name:"MemberPage",props:["member","onClose"],components:{animated_list:n},data:function(){return{isOpen:!1,width:this.getWidth(),height:this.getHeight()}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.onResize),this.onResize()})},methods:{close:function(e,t){TweenMax.killTweensOf(this.$el),TweenMax.to(this.$el,1,{x:-this.width,ease:Expo.easeInOut,onComplete:this.setClose,onCompleteParams:[e,t]})},open:function(){this.isOpen=!0,TweenMax.to(this.$el,1,{x:0,ease:Expo.easeInOut})},getWidth:function(){return.5*document.documentElement.clientWidth},getHeight:function(){return.5*document.documentElement.clientHeight},onResize:function(){this.width=this.getWidth(),this.height=this.getHeight(),this.isOpen||TweenMax.set(this.$el,{x:-this.width})},setClose:function(e,t){this.isOpen=!1,"function"==typeof e?e(t):"function"==typeof this.onClose&&this.onClose()},itemClick:function(){return 2}}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"members-page",class:{active:e.isOpen},attrs:{id:"members-page"}},[i("div",{staticClass:"page-wrapper"},[i("div",{staticClass:"page-line"}),e._v(" "),e.member?i("div",{staticClass:"member-about"},[i("div",{staticClass:"member-header"},[i("div",{staticClass:"member-title"},[i("div",{staticClass:"member-name"},[i("span",[e._v(e._s(e.member.name))])]),e._v(" "),i("div",{staticClass:"member-position"},[i("span",[e._v(e._s(e.member.position))])])]),e._v(" "),i("div",{staticClass:"member-links"},[i("animated_list",{staticClass:"nav-list",attrs:{items:e.member.social,"item-class":"member-link","is-active":!0,"item-click":e.itemClick,id:"nav-list"}})],1)]),e._v(" "),i("div",{staticClass:"member-description"},[i("span",[e._v(e._s(e.member.description))])])]):e._e(),e._v(" "),i("div",{staticClass:"cross",on:{click:e.close}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20"}},[i("path",{attrs:{d:" M 0,18.5 L 18.5, 0, L 20, 1.5, L 1.5, 20 Z m0-17 L 1.5, 0, L 20, 18.5, L 18.5, 20 Z"}})])])])])},staticRenderFns:[]};var v=i("VU/8")(u,p,!1,function(e){i("PxFB")},null,null).exports,f={name:"animated_image",props:["imageSrc","delay"],methods:{beforeEnter:function(){},enterAnimation:function(){var e=this.$el.querySelector("#animated-block"),t=0;"number"==typeof this.delay&&(t=this.delay),TweenMax.to(e,2.5,{delay:t,width:0,ease:Power4.easeOut})}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation}},[t("div",{staticClass:"animated-image"},[t("img",{attrs:{src:this.imageSrc}}),this._v(" "),t("div",{staticClass:"animated-block",attrs:{id:"animated-block"}})])])},staticRenderFns:[]};var b=i("VU/8")(f,g,!1,function(e){i("rpNr")},null,null).exports,w={name:"animated_title",props:["titleText","delay"],methods:{beforeEnter:function(){},enterAnimation:function(){var e=this.$el.querySelector("#animated-title"),t=0;"number"==typeof this.delay&&(t=this.delay),TweenMax.fromTo(e,2,{opacity:0,yPercent:25},{delay:t,yPercent:0,opacity:1,ease:Power4.easeOut,clearProps:"all"})}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation}},[t("div",{staticClass:"animated-title-container",attrs:{id:"animated-title-container"}},[t("h1",{staticClass:"animated-title",attrs:{id:"animated-title"}},[t("span",[this._v(this._s(this.titleText))])])])])},staticRenderFns:[]};var _=i("VU/8")(w,y,!1,function(e){i("uhg0")},null,null).exports,x={name:"animated_par",props:["parText","delay"],methods:{beforeEnter:function(){},enterAnimation:function(){var e=this.$el.querySelector("#animated-par"),t=0;"number"==typeof this.delay&&(t=this.delay),TweenMax.fromTo(e,2,{opacity:0,yPercent:25},{delay:t,opacity:1,yPercent:0,ease:Power4.easeOut,clearProps:"all"})}}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation}},[t("div",{staticClass:"animated-par-container"},[t("p",{staticClass:"animated-par",attrs:{id:"animated-par"}},[t("span",[this._v(this._s(this.parText))])])])])},staticRenderFns:[]};var k={name:"Team",components:{MemberPage:v,animated_image:b,animated_title:_,animated_par:i("VU/8")(x,C,!1,function(e){i("wplO")},null,null).exports},data:function(){return{team_members:[{name:"Gurkiran Dhaliwal",id:"gurkiran",image:"static/images/temp-prof.jpg",position:"Code Daddy",description:"I'm a third year math major, and I joined this club because I'm interested in autonomous robots. I want to learn more about how to design systems that can react to environmental inputs and make decisions on their own. I also enjoy the challenge of simplifying complicated tasks so that they can be handled by software. I'm hoping that through this project I will become a better programmer and will have more experience with the hardware side of robotics. My other interests include computer vision, painting, violin, and pool.",social:[{text:"github",href:"https://github.com/gurkirand",id:"github"},{text:"email",href:"mailto:gurkirand@gmail.com",id:"email"}]},{name:"Stephanie Djajadi",id:"stephanie",image:"static/images/steph.jpg",position:"Finance Minister",description:"Hi! I'm a first-year studying computer science and data science, and I'm excited to learn about the potential of humanitarian applications of robotics. Outside of school, I like eating ramen, learning random fun facts, and exploring new places!",social:[{text:"email",href:"mailto:sdjajadi@berkeley.edu",id:"email"}]},{name:"Michael Lee",id:"michael",image:"static/images/temp-prof.jpg",position:"Social Media Rep",description:"I am a third year EECS student at UC Berkeley. My interests include machine learning, control systems, and coffee.",social:[{text:"email",href:"mailto:hyunkyu@berkeley.edu",id:"email"}]},{name:"Lavanya Mittal",id:"lavanya",image:"static/images/lavanya.jpg",position:"Chief Technology Officer",description:"Hiiiiii! I'm a third year CS major with an interest in applying AI to robotics! I look forward to learning as much as I can and seeing how my passions can be applied to a meaningful social cause, such as aiding in a humanitarian crisis. In my spare time I like to hike, play board games, and be a big toon on Toontown. Catch me as Dr. Huddles!",social:[{text:"email",href:"mailto:lavamitt@berkeley.edu",id:"email"}]},{name:"William Tai",id:"will",image:"static/images/will.jpg",position:"Team Dictator",description:"Hey, I’m a first year MechE major who's most likely gonna minor in EECS or CS, and I’ve always loved robotics. I engaged mostly in the design aspect, but I would love to learn more about the software part. Besides school, I’m a big Lakers and Warriors fan, and I love eating Chipotle and playing with my dog Beebo.",social:[{text:"email",href:"mailto:williamt@berkeley.edu",id:"email"}]}],isActive:!1,activeMember:null,isLocked:!1}},methods:{beforeEnter:function(e,t){},enterAnimation:function(e,t){t()},setActive:function(e,t){this.isActive=!0},isEven:function(e){return!1},isMid:function(e){return e%3==1},isLast:function(e){return e%3==2},memberClick:function(e){if(this.$refs.memberPage.isOpen){var t=this.newMember.bind(this);this.$refs.memberPage.close(t,e)}else this.newMember(e)},newMember:function(e){this.activeMember=e,this.$refs.memberPage.open(),this.isLocked=!0},setUnlocked:function(){console.log("HELLO"),this.isLocked=!1}}},A={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{on:{"before-enter":e.beforeEnter,enter:e.enterAnimation,"after-enter":e.setActive}},[i("section",{staticClass:"team-page",attrs:{id:"team-page"}},[i("div",{staticClass:"page-wrapper",class:{locked:e.isLocked}},[i("animated_title",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],class:"page-title page-section",attrs:{id:"page-title",titleText:"Team"}}),e._v(" "),i("div",{staticClass:"team-about page-section",attrs:{id:"team-about"}},[i("animated_title",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{titleText:"A robotics team inspired to help people in emergency situations.",delay:.5}}),e._v(" "),i("animated_par",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{parText:"We are a robotics team of five students under the parent organization of Robotics at Berkeley. We were challenged to build a robot that helps first responders during humanitarian crises, so we designed a small robot to enter rubble and locate a human being by searching for heat. We hope to run our robot autonomously, minimizing the risk posed to humans in emergency situations. With this, we hope that our robot becomes an essential and cost-effective part of disaster recovery.",delay:1}})],1),e._v(" "),i("animated_image",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],class:"team-image page-section",attrs:{id:"team-image",imageSrc:"static/images/team.jpg",delay:1}}),e._v(" "),i("div",{staticClass:"members-about page-section",attrs:{id:"members-description"}},[i("animated_title",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{titleText:"Meet Our Members",delay:2}}),e._v(" "),i("animated_par",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],attrs:{parText:"\tWe started off as five individuals with a desire to help others. As time progressed, we not only brought our ideas together, but also became a team bonded by shared passions and experiences. Here are our members and their stories.",delay:2.5}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"team-members page-section",attrs:{id:"team-members"}},[i("ul",{staticClass:"member-list",attrs:{id:"member-list"}},e._l(e.team_members,function(t,s){return i("li",{key:t.id,staticClass:"team-member",class:{mid:e.isMid(s),right:e.isEven(s),last:e.isLast(s)},attrs:{id:t.id},on:{click:function(i){e.memberClick(t)}}},[i("div",{staticClass:"member-image"},[i("img",{attrs:{src:t.image}})]),e._v(" "),i("div",{staticClass:"member-title"},[i("div",{staticClass:"member-name"},[i("span",{staticClass:"underlined"},[e._v(e._s(t.name))])]),e._v(" "),i("div",{staticClass:"member-position"},[i("span",[e._v(e._s(t.position))])])])])}))]),e._v(" "),i("MemberPage",{ref:"memberPage",attrs:{member:e.activeMember,onClose:e.setUnlocked}})],1)])])},staticRenderFns:[]};var T=i("VU/8")(k,A,!1,function(e){i("tobS")},null,null).exports,E={name:"Mission",components:{animated_title:_},data:function(){return{isActive:!1}},methods:{beforeEnter:function(e,t){},enterAnimation:function(e,t){t()},setActive:function(e,t){this.isActive=!0}}},M={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{on:{"before-enter":this.beforeEnter,enter:this.enterAnimation,"after-enter":this.setActive}},[t("section",{staticClass:"mission-page",attrs:{id:"mission-page"}},[t("animated_title",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],class:"page-title",attrs:{id:"page-title",titleText:"Pachinko Bot"}})],1)])},staticRenderFns:[]};var O=i("VU/8")(E,M,!1,function(e){i("c37O")},null,null).exports,I=i("mef7");s.a.use(h.a);var L=new h.a({routes:[{path:"/",name:"Mission",component:O},{path:"/team",name:"Team",component:T},{path:"/journal",name:"Journal",component:I.default}]});i("+Uzz");s.a.config.productionTip=!1,s.a.component("site-sidebar",l),new s.a({el:"#app",router:L,components:{App:m},template:"<App/>"})},PxFB:function(e,t){},Tw08:function(e,t){},c37O:function(e,t){},mef7:function(e,t,i){"use strict";var s=i("yz8m"),a=i.n(s),n=i("2sw8");var r=function(e){i("Tw08")},o=i("VU/8")(a.a,n.a,!1,r,null,null);t.default=o.exports},nzgx:function(e,t){},rpNr:function(e,t){},sVSl:function(e,t){},tobS:function(e,t){},uhg0:function(e,t){},wplO:function(e,t){},yz8m:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.bfdde8399684753262af.js.map