(this.webpackJsonp=this.webpackJsonp||[]).push([[217],{47:function(s,e,t){t("HVBj"),s.exports=t("KPWH")},KPWH:function(s,e,t){"use strict";t.r(e);var i=t("2bBj");class n{constructor(){const s=document.querySelector("form#group-filter-form"),e=document.querySelector(".js-groups-list-filter"),t=document.querySelector(".js-groups-list-holder");if(s&&e&&t){new i.a(s,e,t).initSearch()}}}var o=t("06tH"),r=t.n(o),d=t("NmEs");var a=class{constructor(s,e,t){this.landingElement=s,this.cookieName=t,this.dismissButton=e,this.eventWrapper={}}toggle(){const s=this.isDismissed();this.landingElement.classList.toggle("hidden",s),s||this.addEvents()}addEvents(){this.eventWrapper.dismissLanding=this.dismissLanding.bind(this),this.dismissButton.addEventListener("click",this.eventWrapper.dismissLanding)}removeEvents(){this.dismissButton.removeEventListener("click",this.eventWrapper.dismissLanding)}dismissLanding(){this.landingElement.classList.add("hidden"),r.a.set(this.cookieName,"true",{expires:365})}isDismissed(){return Object(d.K)(r.a.get(this.cookieName))}},c=t("Js/K");document.addEventListener("DOMContentLoaded",(function(){new n,Object(c.a)();const s=document.querySelector(".js-explore-groups-landing");s&&new a(s,s.querySelector(".dismiss-button"),"explore_groups_landing_dismissed").toggle()}))}},[[47,1,0,55,66]]]);
//# sourceMappingURL=pages.explore.groups.d33d555b.chunk.js.map