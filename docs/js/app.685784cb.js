(function(){"use strict";var e={6181:function(e,a,t){var n=t(9242),s=t(3396);function i(e,a,t,n,i,o){const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(r)}var o={name:"App"},r=t(89);const l=(0,r.Z)(o,[["render",i]]);var c=l,u=t(678);function d(e,a,t,n,i,o){const r=(0,s.up)("MainView");return(0,s.wg)(),(0,s.j4)(r)}const m=e=>((0,s.dD)("data-v-c11ee0f6"),e=e(),(0,s.Cn)(),e),g={class:"main"},p=(0,s.uE)('<div class="container" data-v-c11ee0f6><div class="title-inner" data-v-c11ee0f6><h2 class="title" data-v-c11ee0f6>kimdabeen</h2></div><div class="round-box" data-v-c11ee0f6><div class="eye-inner" data-v-c11ee0f6><span class="eye" data-v-c11ee0f6></span><span class="eye" data-v-c11ee0f6></span></div><svg class="mouth" xmlns="http://www.w3.org/2000/svg" width="59" height="15" viewBox="0 0 59 15" fill="currentcolor" data-v-c11ee0f6><path d="M29.5 15.0001C45.1967 15.0001 54.236 7.93116 59 1.55185L56.9845 0.00012195C51.3043 5.86219 42.6315 10.1151 29.5 10.1151C16.3685 10.1151 7.69565 5.86219 2.01553 0.000118672L-9.25456e-08 1.55184C4.76397 7.93115 13.8033 15.0001 29.5 15.0001Z" fill="#currentcolor" data-v-c11ee0f6></path></svg></div></div>',1),h={class:"container"},w=m((()=>(0,s._)("div",{class:"title-inner"},[(0,s._)("h2",{class:"title"},"publisher &")],-1))),v={class:"container"},f=m((()=>(0,s._)("div",{class:"title-inner"},[(0,s._)("h2",{class:"title"},"front-end")],-1))),_={class:"container"},b=m((()=>(0,s._)("div",{class:"title-inner"},[(0,s._)("h2",{class:"title"},"developer")],-1))),k=m((()=>(0,s._)("section",{class:"about"},[(0,s._)("p",{class:"about__text"},"안녕하세요. 김다빈입니다.")],-1)));function y(e,a,t,n,i,o){const r=(0,s.up)("FixedLayout"),l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r),(0,s._)("section",g,[p,(0,s._)("div",h,[w,i.show?((0,s.wg)(),(0,s.j4)(l,{key:0,to:"/signUp"})):(0,s.kq)("",!0)]),(0,s._)("div",v,[o.isLoggedIn?((0,s.wg)(),(0,s.j4)(l,{key:1,onClick:o.logout,class:"round-box btn",to:"/edit"},{default:(0,s.w5)((()=>[(0,s.Uk)("Edit Info")])),_:1},8,["onClick"])):((0,s.wg)(),(0,s.j4)(l,{key:0,class:"round-box btn",to:"/signUp"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign Up")])),_:1})),f]),(0,s._)("div",_,[b,o.isLoggedIn?((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:a[0]||(a[0]=(...e)=>o.logout&&o.logout(...e)),class:"round-box btn"},"Logout")):((0,s.wg)(),(0,s.j4)(l,{key:0,class:"round-box btn",to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Login")])),_:1}))])]),k],64)}t(7658);var C=t(7139);const M=e=>((0,s.dD)("data-v-38bcaf68"),e=e(),(0,s.Cn)(),e),I={class:"main-wrap"},N={class:"member"},x={key:0,class:"member__name"},U={key:1,class:"member__name"},L=M((()=>(0,s._)("div",{class:"header__bg"},null,-1))),E={class:"menu"},S={key:0},D={key:1},Z={key:2},F={key:3},j=M((()=>(0,s._)("div",{class:"side__left"},null,-1))),P=M((()=>(0,s._)("div",{class:"side__right"},null,-1)));function W(e,a,t,n,i,o){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("header",{class:(0,C.C_)([{active:i.changeColor},"header"])},[(0,s._)("p",N,[i.userName?((0,s.wg)(),(0,s.iD)("span",x,(0,C.zw)(i.userName),1)):((0,s.wg)(),(0,s.iD)("span",U,"방문자")),(0,s.Uk)("님, 반가워요 :)")]),(0,s._)("div",{onClick:a[0]||(a[0]=e=>i.focusMenu=!i.focusMenu),class:(0,C.C_)([{active:i.focusMenu},"menu-btn"])},[(0,s._)("span",{class:(0,C.C_)([{active:i.changeColor},"menu-btn__line top"])},null,2),(0,s._)("span",{class:(0,C.C_)([{active:i.changeColor},"menu-btn__line bottom"])},null,2)],2)],2),L,(0,s._)("nav",{class:(0,C.C_)([{active:i.focusMenu},"nav"])},[(0,s._)("ul",E,[(0,s._)("li",null,[(0,s.Wm)(r,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("home")])),_:1})]),o.isLoggedIn?((0,s.wg)(),(0,s.iD)("li",D,[(0,s.Wm)(r,{to:"/edit"},{default:(0,s.w5)((()=>[(0,s.Uk)("edit info")])),_:1})])):((0,s.wg)(),(0,s.iD)("li",S,[(0,s.Wm)(r,{to:{name:"SignUp",params:{id:"kimdabeen"}}},{default:(0,s.w5)((()=>[(0,s.Uk)("sign up")])),_:1})])),o.isLoggedIn?((0,s.wg)(),(0,s.iD)("li",F,[(0,s._)("button",{onClick:a[1]||(a[1]=(...e)=>o.logout&&o.logout(...e))},"logout")])):((0,s.wg)(),(0,s.iD)("li",Z,[(0,s.Wm)(r,{to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("login")])),_:1})]))])],2),j,P])}var O=t(65),A=t(2415),q=new O.ZP.Store({state:{user:localStorage.getItem("userInfo")},getters:{getUser:e=>e.user},mutations:{login(e,a){e.user=a,localStorage.setItem("userInfo",a)},logout(e){e.user=null,localStorage.removeItem("userInfo")}},actions:{login({commit:e},{email:a}){e("login",a,{root:!0})},logout:({commit:e})=>!confirm("로그아웃 하겠습니까?")||(e("logout",{root:!0}),localStorage.removeItem("userInfo"),alert("로그아웃되었습니다."),!0)},plugins:[(0,A.Z)({paths:["token","user"]})]}),$={name:"FixedLayout",data(){return{userName:q.state.user,focusMenu:!1,login:!1,changeColor:!1}},computed:{isLoggedIn(){return q.state.user||!1}},created(){},mounted(){window.addEventListener("transitionend",this.touchContent)},methods:{touchContent(){let e=document.querySelector(".header").getBoundingClientRect().bottom,a=document.querySelector(".nav").getBoundingClientRect().bottom;a>10?this.changeColor=!0:a<e&&(this.changeColor=!1)},logout(){q.dispatch("logout").then((()=>{localStorage.removeItem("userInfo"),this.$router.push("/login")}))}}};const B=(0,r.Z)($,[["render",W],["__scopeId","data-v-38bcaf68"]]);var V=B,H={name:"MainView",components:{FixedLayout:V},data(){return{show:!1}},computed:{isLoggedIn(){return q.state.user||!1}},created(){},mounted(){this.moveElement(),this.loadPage()},methods:{loadPage(){const e=document.querySelectorAll(".title-inner .title"),a=document.querySelectorAll(".round-box");setTimeout((()=>{for(let a=0;a<e.length;a++){const t=e.item(a);t.style.transform="translate3d(0, 0, 0) rotateZ(0deg)"}}),300),setTimeout((()=>{for(let e=0;e<a.length;e++){const t=a.item(e);t.style.opacity="1",t.style.transform="translateX(0)"}}),1200)},moveElement(){const e=document.querySelectorAll(".eye, .mouth"),a=15,t=(e,t)=>(e/t*a-a/2).toFixed(1),n=e=>t(e.x,window.innerWidth),s=e=>t(e.y,window.innerHeight);document.addEventListener("mousemove",(a=>{[...e].forEach((e=>{e.setAttribute("ry","7.5"),e.style.transform=`translateX(${.8*n(a)}px) translateY(${.8*s(a)}px)`}))}),!1)},logout(){q.dispatch("logout").then((()=>{localStorage.removeItem("userInfo"),this.$router.push("/login")}))}}};const R=(0,r.Z)(H,[["render",y],["__scopeId","data-v-c11ee0f6"]]);var Y=R,T={name:"Index",components:{MainView:Y},data(){return{}}};const z=(0,r.Z)(T,[["render",d]]);var K=z;const X=e=>((0,s.dD)("data-v-31fcaf34"),e=e(),(0,s.Cn)(),e),G={class:"login-wrap"},J=X((()=>(0,s._)("h3",{class:"page__title"},"login",-1))),Q={class:"inner"},ee=X((()=>(0,s._)("label",{for:"email"},"아이디(이메일)",-1))),ae=["value"],te={class:"inner"},ne=X((()=>(0,s._)("label",{for:"password"},"비밀번호",-1))),se=["value"],ie={class:"right"},oe={key:0,class:"modal-wrap"},re={class:"modal"},le=X((()=>(0,s._)("h4",{class:"modal__title"},"비밀번호 재설정",-1))),ce=["value"],ue={class:"message"},de={class:"btn-wrap"},me=["disabled"];function ge(e,a,t,i,o,r){const l=(0,s.up)("FixedLayout"),c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s._)("div",G,[J,(0,s._)("div",Q,[ee,(0,s._)("input",{type:"email",id:"email",value:o.email,onInput:a[0]||(a[0]=e=>o.email=e.target.value),placeholder:"아이디(이메일)를 입력해주세요."},null,40,ae)]),(0,s._)("div",te,[ne,(0,s._)("input",{type:"password",id:"password",value:o.password,onInput:a[1]||(a[1]=e=>o.password=e.target.value),placeholder:"비밀번호를 입력해주세요."},null,40,se)]),(0,s._)("button",{class:"guide",onClick:a[2]||(a[2]=e=>r.openModal())},"비밀번호를 잊으셨나요?"),(0,s._)("div",ie,[(0,s._)("button",{class:"btn",onClick:a[3]||(a[3]=(...e)=>r.login&&r.login(...e))},"로그인"),(0,s.Wm)(c,{class:"btn",to:"/signUp"},{default:(0,s.w5)((()=>[(0,s.Uk)("가입하기")])),_:1})])]),o.showModal?((0,s.wg)(),(0,s.iD)("div",oe,[(0,s._)("div",re,[le,(0,s._)("input",{type:"email",id:"modalEmail",value:o.modalEmail,onInput:a[4]||(a[4]=e=>o.modalEmail=e.target.value),placeholder:"아이디(이메일)를 입력해주세요."},null,40,ce),(0,s.wy)((0,s._)("span",ue,"올바르지 않은 이메일 양식입니다.",512),[[n.F8,o.warningMessage]]),(0,s._)("div",de,[(0,s._)("button",{class:(0,C.C_)(["submit-btn",{disable:o.warningMessage||""===o.modalEmail}]),onClick:a[5]||(a[5]=e=>r.resetPassword()),disabled:o.warningMessage||""===o.modalEmail},"Submit",10,me),(0,s._)("button",{onClick:a[6]||(a[6]=e=>r.closeModal())},"Close")])])])):(0,s.kq)("",!0)],64)}var pe=t(4275),he=(t(4059),{name:"Login",components:{FixedLayout:V},data(){return{email:"",modalEmail:"",password:"",showModal:!1,warningMessage:!1}},watch:{modalEmail:function(e){""!==e&&!1===e.includes("@")?this.warningMessage=!0:this.warningMessage=!1}},created(){},methods:{login(){const{email:e,password:a}=this;e?a?pe.Z.auth().signInWithEmailAndPassword(e,a).then((e=>{q.dispatch("login",{email:e.user.displayName}),alert("[로그인 완료] 환영합니다!"),this.$router.push("/index")})).catch((e=>{switch(e.code){case"auth/user-not-found":return alert("이메일 혹은 비밀번호가 일치하지 않습니다.");case"auth/network-request-failed":return alert("네트워크 연결에 실패하였습니다.");case"auth/internal-error":return alert("잘못된 요청입니다.");default:return alert(e.message)}})):alert("비밀번호를 입력해주세요."):alert("아이디(이메일)을 입력해주세요.")},openModal(){this.showModal=!0,document.body.classList.add("scroll-off")},async resetPassword(){try{await pe.Z.auth().sendPasswordResetEmail(this.modalEmail),alert("비밀번호 재설정 메일을 보냈습니다! 메일함을 확인해주세요."),this.showModal=!1}catch(e){switch(e.code){case"auth/user-not-found":return alert("가입되어 있지 않은 이메일입니다.");case"auth/invalid-email":return alert("올바르지 않은 이메일 양식입니다.");default:return alert(e.message)}}},closeModal(){this.showModal=!1,document.body.classList.remove("scroll-off")}}});const we=(0,r.Z)(he,[["render",ge],["__scopeId","data-v-31fcaf34"]]);var ve=we;const fe=e=>((0,s.dD)("data-v-85d59620"),e=e(),(0,s.Cn)(),e),_e={class:"signUp-wrap"},be=fe((()=>(0,s._)("h3",{class:"page__title"},"sign up",-1))),ke={novalidate:""},ye={class:"inner"},Ce=fe((()=>(0,s._)("label",{for:"nickName"},"닉네임",-1))),Me=["value"],Ie={class:"message"},Ne={class:"inner"},xe=fe((()=>(0,s._)("label",{for:"email"},"아이디(이메일)",-1))),Ue=["value"],Le={class:"message"},Ee={class:"inner"},Se=fe((()=>(0,s._)("label",{for:"password"},"비밀번호",-1))),De=["value"],Ze={class:"message"},Fe={class:"inner"},je=fe((()=>(0,s._)("label",{for:"passwordConfirm"},"비밀번호 확인",-1))),Pe=["value"],We={class:"message"},Oe={class:"right"},Ae=["disabled"];function qe(e,a,t,i,o,r){const l=(0,s.up)("FixedLayout");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s._)("div",_e,[be,(0,s._)("form",ke,[(0,s._)("div",ye,[Ce,(0,s._)("input",{type:"text",id:"nickName",value:o.nickName,onInput:a[0]||(a[0]=e=>o.nickName=e.target.value),placeholder:"닉네임을 입력해주세요. (2~9자)",maxlength:"8"},null,40,Me),(0,s.wy)((0,s._)("span",Ie,"닉네임은 최소 2자리 이상이어야 합니다.",512),[[n.F8,o.warningMessage1]])]),(0,s._)("div",Ne,[xe,(0,s._)("input",{type:"email",id:"email",value:o.email,onInput:a[1]||(a[1]=e=>o.email=e.target.value),placeholder:"아이디(이메일)를 입력해주세요."},null,40,Ue),(0,s.wy)((0,s._)("span",Le,"올바르지 않은 이메일 양식입니다.",512),[[n.F8,o.warningMessage2]])]),(0,s._)("div",Ee,[Se,(0,s._)("input",{type:"password",id:"password",value:o.password,onInput:a[2]||(a[2]=e=>o.password=e.target.value),placeholder:"비밀번호를 입력해주세요."},null,40,De),(0,s.wy)((0,s._)("span",Ze,"비밀번호는 최소 6자리 이상이어야 합니다.",512),[[n.F8,o.warningMessage3]])]),(0,s._)("div",Fe,[je,(0,s._)("input",{type:"password",id:"passwordConfirm",value:o.passwordConfirm,onInput:a[3]||(a[3]=e=>o.passwordConfirm=e.target.value),placeholder:"비밀번호를 다시 한 번 입력해주세요."},null,40,Pe),(0,s.wy)((0,s._)("span",We,"비밀번호가 일치하지 않습니다.",512),[[n.F8,o.warningMessage4]])])]),(0,s._)("div",Oe,[(0,s._)("button",{class:(0,C.C_)(["submit-btn",{disable:!1===o.activated}]),onClick:a[4]||(a[4]=(...e)=>r.signUp&&r.signUp(...e)),disabled:!0!==o.activated},"회원가입",10,Ae)])])],64)}var $e={name:"SignUp",components:{FixedLayout:V},props:{id:{type:String,default:"방문자"}},data(){return{nickName:"",email:"",password:"",passwordConfirm:"",activated:!1,warningMessage1:!1,warningMessage2:!1,warningMessage3:!1,warningMessage4:!1,user:{}}},watch:{nickName:function(e){""!==e&&e.length<2?(this.warningMessage1=!0,this.activated=!1):this.warningMessage1=!1,this.checkedInput(e,this.email,this.password,this.passwordConfirm)},email:function(e){""!==e&&!1===e.includes("@")?(this.warningMessage2=!0,this.activated=!1):this.warningMessage2=!1,this.checkedInput(this.nickName,e,this.password,this.passwordConfirm)},password:function(e){""!==e&&e.length<6?(this.warningMessage3=!0,this.activated=!1):this.warningMessage3=!1,e!==this.passwordConfirm&&""!==this.passwordConfirm?this.warningMessage4=!0:this.warningMessage4=!1,this.checkedInput(this.nickName,this.email,e,this.passwordConfirm)},passwordConfirm:function(e){""!==e&&e!==this.password?(this.warningMessage4=!0,this.activated=!1):this.warningMessage4=!1,this.checkedInput(this.nickName,this.email,this.password,e)}},methods:{checkedInput(e,a,t,n){e.length>=2&&a.includes("@")&&t.length>=6&&n===this.password&&(this.activated=!0)},signUp(){const{email:e,password:a}=this;pe.Z.auth().createUserWithEmailAndPassword(e,a).then((e=>{e.user.updateProfile({displayName:this.nickName}),alert("[회원가입 완료] 환영합니다!"),this.$router.push("/login")})).catch((e=>{switch(e.code){case"auth/email-already-in-use":return alert("이미 사용 중인 이메일입니다.");case"auth/network-request-failed":return alert("네트워크 연결에 실패하였습니다.");case"auth/invalid-email":return alert("잘못된 이메일 형식입니다.");case"auth/internal-error":return alert("잘못된 요청입니다.");default:return alert(e.message)}}))}}};const Be=(0,r.Z)($e,[["render",qe],["__scopeId","data-v-85d59620"]]);var Ve=Be;const He=e=>((0,s.dD)("data-v-1a2c4acb"),e=e(),(0,s.Cn)(),e),Re={class:"edit-wrap"},Ye=He((()=>(0,s._)("h3",{class:"page__title"},"edit info",-1))),Te={novalidate:""},ze={class:"inner"},Ke=He((()=>(0,s._)("label",{for:"nickName"},"닉네임",-1))),Xe=["value"],Ge={class:"message"},Je={class:"inner"},Qe=He((()=>(0,s._)("label",{for:"email"},"아이디(이메일)",-1))),ea=["value"],aa={class:"right"},ta=["disabled"];function na(e,a,t,i,o,r){const l=(0,s.up)("FixedLayout");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s._)("div",Re,[Ye,(0,s._)("form",Te,[(0,s._)("div",ze,[Ke,(0,s._)("input",{type:"text",id:"nickName",value:o.newNickName,onInput:a[0]||(a[0]=e=>o.newNickName=e.target.value),placeholder:"닉네임을 입력해주세요. (2~9자)",maxlength:"9"},null,40,Xe),(0,s.wy)((0,s._)("span",Ge,"닉네임은 최소 2자리 이상이어야 합니다.",512),[[n.F8,o.warningMessage]])]),(0,s._)("div",Je,[Qe,(0,s._)("input",{type:"email",id:"email",value:o.email,disabled:""},null,8,ea)])]),(0,s._)("div",aa,[(0,s._)("button",{class:(0,C.C_)(["submit-btn",{disable:o.warningMessage||""===o.newNickName}]),onClick:a[1]||(a[1]=(...e)=>r.changeName&&r.changeName(...e)),disabled:o.warningMessage||""===o.newNickName},"회원정보 수정",10,ta)])])],64)}var sa={name:"Edit",components:{FixedLayout:V},props:{id:{type:String,default:"방문자"}},data(){return{newNickName:"",email:"",warningMessage:!1}},watch:{newNickName:function(e){""!==e&&e.length<2?this.warningMessage=!0:this.warningMessage=!1}},created(){this.findUser()},methods:{findUser(){const e=pe.Z.auth().currentUser;null!==e&&(this.newNickName=e.displayName,this.email=e.email)},async changeName(){const e=pe.Z.auth().currentUser;null!==e&&e.updateProfile({displayName:this.newNickName}).then((()=>{alert("프로필 수정을 완료하였습니다!"),q.state.user=this.newNickName,this.$router.push("/index")})).catch((e=>{alert(e.message)}))}}};const ia=(0,r.Z)(sa,[["render",na],["__scopeId","data-v-1a2c4acb"]]);var oa=ia;const ra=[{path:"/",redirect:"/index"},{path:"/index",name:"Index",component:K},{path:"/signUp",name:"SignUp",component:Ve,props:!0},{path:"/login",name:"Login",component:ve},{path:"/edit",name:"Edit",component:oa}],la=(0,u.p7)({history:(0,u.r5)(""),routes:ra});var ca=la;const ua={apiKey:"AIzaSyAcgKVRK7v00jclp87pDpnXBJPVNmafkLw",authDomain:"vue-firebase-27018.firebaseapp.com",databaseURL:"https://vue-firebase-27018-default-rtdb.firebaseio.com",projectId:"vue-firebase-27018",storageBucket:"vue-firebase-27018.appspot.com",messagingSenderId:"744106227744",appId:"1:744106227744:web:c9ab4467f3b14c340f6445",measurementId:"G-32GP3JZB8V"};pe.Z.initializeApp(ua),(0,n.ri)(c).use(ca).mount("#app")}},a={};function t(n){var s=a[n];if(void 0!==s)return s.exports;var i=a[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,s,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],i=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(r=!1,i<o&&(o=i));if(r){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,s,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var s,i,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(a){return 0!==e[a]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(l)var u=l(t)}for(a&&a(n);c<o.length;c++)i=o[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},n=self["webpackChunkvue_proj"]=self["webpackChunkvue_proj"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6181)}));n=t.O(n)})();
//# sourceMappingURL=app.685784cb.js.map