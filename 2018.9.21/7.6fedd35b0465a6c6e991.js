webpackJsonp([7],{1668:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(69),u=r(n),p=a(83),s=r(p),c=a(1693),i=a(49),o=(r(i),a(140)),f=(r(o),a(59)),d=(r(f),a(114));t.default=(0,s.default)(d.pageModel,{namespace:"myapphome",state:{createstatus:"",createid:""},subscriptions:{},effects:{query:u.default.mark(function e(t,a){t.payload,a.call,a.put,a.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}),create:u.default.mark(function e(t,a){var r,n,p=t.payload,s=a.call,i=a.put;a.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(c.Myappcreate,{opentype:1,name:p.name,intro:p.intro,template:p.template});case 2:if(r=e.sent,!(n=r.data)){e.next=9;break}return e.next=7,i({type:"updatedata",payload:{createstatus:"ok",createid:n._id}});case 7:e.next=11;break;case 9:return e.next=11,i({type:"updatedata",payload:{createstatus:"error"}});case 11:case"end":return e.stop()}},e,this)}),setdata:u.default.mark(function e(t,a){var r=t.payload,n=(a.call,a.put);a.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:"updatedata",payload:r});case 2:case"end":return e.stop()}},e,this)})}}),e.exports=t.default},1693:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Myappcreate=t.Myappdetail=t.Myappview=t.Myapplist=void 0;var n=a(69),u=r(n),p=a(4),s=r(p),c=a(721),i=r(c),o=(t.Myapplist=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.get)(o.Baseapi+"myapps",(0,s.default)({},t)));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.Myappview=function(){var e=(0,i.default)(u.default.mark(function e(t){var a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.myappid,e.abrupt("return",(0,f.get)(o.Baseapi+"myapps/myappview/"+a));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.Myappdetail=function(){var e=(0,i.default)(u.default.mark(function e(t){var a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.myappid,e.abrupt("return",(0,f.get)(o.Baseapi+"myapps/apphome/"+a,(0,s.default)({},t)));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.Myappcreate=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.post)(o.Baseapi+"myapps",(0,s.default)({},t)));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(90)),f=a(722)}});