(this.webpackJsonp=this.webpackJsonp||[]).push([[313],{145:function(e,t,r){r("HVBj"),r("gjpc"),e.exports=r("e9Dl")},e9Dl:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"createFeatureFlag",(function(){return _})),r.d(n,"requestCreateFeatureFlag",(function(){return C})),r.d(n,"receiveCreateFeatureFlagSuccess",(function(){return v})),r.d(n,"receiveCreateFeatureFlagError",(function(){return j}));var a=r("jB52"),s=r("yi8e"),o=r("NmEs"),u=r("dsWN"),i=r("2ibD"),c=r("sHIo"),l=r("zMfw"),p=r("EgAm");function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={components:{FeatureFlagForm:r("PaxP").a,GlAlert:u.a},mixins:[Object(c.a)()],inject:{showUserCallout:{},userCalloutId:{default:""},userCalloutsPath:{default:""}},data(){return{userShouldSeeNewFlagAlert:this.showUserCallout}},computed:g(g({},Object(s.f)(["error","path"])),{},{scopes(){return[Object(p.a)({environmentScope:"*",active:!0},this.glFeatures.featureFlagsPermissions)]},version:()=>l.g,strategies:()=>[{name:l.i,parameters:{},scopes:[]}]}),methods:g(g({},Object(s.c)(["createFeatureFlag"])),{},{dismissNewVersionFlagAlert(){this.userShouldSeeNewFlagAlert=!1,i.a.post(this.userCalloutsPath,{feature_name:this.userCalloutId})}})},F=r("tBpV"),h=Object(F.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",{staticClass:"page-title"},[e._v(e._s(e.s__("FeatureFlags|New feature flag")))]),e._v(" "),e.error.length?r("gl-alert",{staticClass:"gl-mb-5",attrs:{variant:"warning",dismissible:!1}},e._l(e.error,(function(t,n){return r("p",{key:n,staticClass:"gl-mb-0"},[e._v(e._s(t))])})),0):e._e(),e._v(" "),r("feature-flag-form",{attrs:{"cancel-path":e.path,"submit-text":e.s__("FeatureFlags|Create feature flag"),scopes:e.scopes,strategies:e.strategies,version:e.version},on:{handleSubmit:function(t){return e.createFeatureFlag(t)}}})],1)}),[],!1,null,null,null).exports,b=r("ozMb"),m=r("3twG");const _=function(e,t){let{state:r,dispatch:n}=e;return n("requestCreateFeatureFlag"),i.a.post(r.endpoint,t.version===l.g?Object(p.c)(t):Object(p.b)(t)).then((function(){n("receiveCreateFeatureFlagSuccess"),Object(m.D)(r.path)})).catch((function(e){return n("receiveCreateFeatureFlagError",e.response.data)}))},C=function(e){let{commit:t}=e;return t("REQUEST_CREATE_FEATURE_FLAG")},v=function(e){let{commit:t}=e;return t("RECEIVE_CREATE_FEATURE_FLAG_SUCCESS")},j=function(e,t){let{commit:r}=e;return r("RECEIVE_CREATE_FEATURE_FLAG_ERROR",t)};var O={REQUEST_CREATE_FEATURE_FLAG(e){e.isSendingRequest=!0,e.error=[]},RECEIVE_CREATE_FEATURE_FLAG_SUCCESS(e){e.isSendingRequest=!1},RECEIVE_CREATE_FEATURE_FLAG_ERROR(e,t){e.isSendingRequest=!1,e.error=t.message||[]}},R=function(e){let{endpoint:t,path:r}=e;return{endpoint:t,path:r,isSendingRequest:!1,error:[]}};a.default.use(s.b);!function(){const e=document.querySelector("#js-new-feature-flag"),{environmentsScopeDocsPath:t,strategyTypeDocsPagePath:r,endpoint:u,featureFlagsPath:i,environmentsEndpoint:c,projectId:l,userCalloutsPath:p,userCalloutId:E,showUserCallout:g}=e.dataset;return new a.default({el:e,store:(f={endpoint:u,projectId:l,path:i},new s.b.Store({actions:n,mutations:O,state:R(f),modules:{userLists:Object(b.a)(f)}})),provide:{environmentsScopeDocsPath:t,strategyTypeDocsPagePath:r,environmentsEndpoint:c,projectId:l,userCalloutsPath:p,userCalloutId:E,showUserCallout:Object(o.K)(g)},render:e=>e(h)});var f}()}},[[145,1,0,6,2,3,4,5,9,11,13,17,20,67,94,117]]]);
//# sourceMappingURL=pages.projects.feature_flags.new.693fee24.chunk.js.map