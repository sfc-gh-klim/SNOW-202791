!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1075)}({1075:function(e,n){function t(e,n,t,r,o,u,c){try{var i=e[u](c),a=i.value}catch(e){return void t(e)}i.done?n(a):Promise.resolve(a).then(r,o)}function r(e){return function(){var n=this,r=arguments;return new Promise((function(o,u){var c=e.apply(n,r);function i(e){t(c,o,u,i,a,"next",e)}function a(e){t(c,o,u,i,a,"throw",e)}i(void 0)}))}}function o(){return u.apply(this,arguments)}function u(){return(u=r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Excel.run(function(){var e=r(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=n.workbook.getSelectedRange()).load("address"),t.format.fill.color="yellow",e.next=5,n.sync();case 5:console.log("The range address was ".concat(t.address,"."));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}Office.initialize=function(){document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("run").onclick=o}}});
//# sourceMappingURL=taskpane.js.map