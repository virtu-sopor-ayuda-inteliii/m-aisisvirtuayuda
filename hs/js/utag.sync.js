//tealium universal tag - utag.sync ut4.0.202411120001, Copyright 2024 Tealium.com Inc. All Rights Reserved.
function webtrend_change_separator(value){if(value.indexOf(",")>-1){var new_value=value.replace(/,/g,";");return new_value;}
else
{return value;}}
function webtrend_site(cg_n){if(cg_n.indexOf(";")>-1){var broken_up_string=cg_n.split(";");return broken_up_string[0];}
else
{return cg_n;}}
function webtrend_ibType(cg_n){if(cg_n.indexOf(";")>-1)
{var broken_up_string=cg_n.split(";");return broken_up_string[1];}
else
{return"";}}
function webtrend_cg_n(cg_n){if((cg_n.indexOf("HomePage")>-1)||(cg_n.indexOf("Public")>-1)){var new_cg_n=cg_n+";No IBType";return new_cg_n;}
else
{return cg_n;}}
window.HSBC=window.HSBC||{};HSBC.SITE=HSBC.SITE||{};HSBC.PAGE=HSBC.PAGE||{};HSBC.EXT=HSBC.EXT||{};HSBC.LOG=HSBC.LOG||{};HSBC.DCS=HSBC.DCS||{};window.DCSext=window.DCSext||{};window.dcsGetHSBCCookie=window.dcsGetHSBCCookie||function(name){return"";}
window.dcsVar=function(){};window.dcsMultiTrack=function(){};window.dcsMapHSBC=function(){};window.dcsMeta=function(){};window.dcsFunc=function(){};window.dcsTag=function(){};window.TMS=window.TMS||{};var TMS=window.TMS;TMS.call_queue=[];TMS.copy=function(a,b,c){var utagLoaderGvCopy=function(d,e,f){e={};for(f in d){if(d.hasOwnProperty(f)&&typeof d[f]!="function")e[f]=d[f];}
return e}
b={};for(c in utagLoaderGvCopy(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}
TMS.trackEvent=function(event_name,data){var new_data=TMS.copy(data);TMS.call_queue.push({type:event_name,data:new_data});};TMS.trackView=function(data){var new_data=TMS.copy(data);TMS.call_queue.push({type:"view",data:new_data});};var maskTimeout=3000,syncChangesApplied=false;var cssRuleManager={sheet:(function(){var style=document.createElement("style");style.appendChild(document.createTextNode(""));document.head.appendChild(style);return style.sheet;})(),addCSSRule:function(selector,rules){if("insertRule"in this.sheet){this.sheet.insertRule(selector+"{"+rules+"}",0);}else if("addRule"in this.sheet){this.sheet.addRule(selector,rules,0);}}}
var removeMask=function(){if(syncChangesApplied)return;cssRuleManager.sheet.disabled=true;syncChangesApplied=true;}
window.optimizely=window.optimizely||[];window.optimizely.push({type:"addListener",filter:{type:"lifecycle",name:"campaignDecided"},"handler":removeMask});try{cssRuleManager.addCSSRule('body','visibility:hidden');setTimeout(removeMask,maskTimeout);var u={};u.head=document.getElementsByTagName("head")[0];u.scr=document.createElement("script");u.scr.async=true;u.scr.src="//cdn.optimizely.com/js/20367530559.js";u.head.appendChild(u.scr);}
catch(e){console.log(e);}
