(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"HaE+":function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,c,"next",t)}function c(t){n(i,a,o,s,c,"throw",t)}s(void 0)}))}}r.d(e,"a",(function(){return a}))},iyQ6:function(t,e,r){"use strict";r.r(e);var n,a=r("U8pU"),o=r("uFwe"),i=r("HaE+"),s=(r("rB9j"),r("hByQ"),r("07d7"),r("PKPk"),r("3bBZ"),r("Kz25"),r("ma9I"),r("oVuX"),r("tkto"),r("2B1R"),r("sMBO"),r("mRH6"),r("fbCW"),r("ls82"),r("KkUu")),c=r("2u47");n=r("cCgg");var u={metaInfo:{title:"Create contract!"},data:function(){return{serviceProviderContract:s,erc20:c,serviceProviderAddress:"0x3CD9EC54DC09bB85C4E92656c6c4643d8e66618f",network:{default:"rinkeby",current:null,map:{137:"mainnet",80001:"mumbai"},list:{rinkeby:{web3Provider:"https://rinkeby.infura.io/v3/cd808238c8684678a97167ac62dc29b0",explorer:"https://rinkeby.etherscan.io",id:4,name:"Rinkeby Test Network"}}},metamask:{},makingTransaction:!1,transactionStarted:!1,formDisabled:!1,contract:{buyer:"0x3E1ECc904D9a356408e57126790438636439E291",creatorInputToken:"0x476f231a320d6E9C548420cac55Fbc5f74A55c31",buyerInputToken:"0x322c8115A858244936C20c87cFDc38Fb69e1cE14",creatorInputAmount:"10",buyerInputAmount:"800"},trx:{hash:"",link:""},service:null,contracts:{},contractIds:[],account:null}},computed:{},mounted:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.currentNetwork=t.getParam("network")||t.network.default,t.initDapp(),e.next=4,t.initWeb3(t.currentNetwork,!0);case 4:return e.next=6,t.initService(t.currentNetwork);case 6:return t.registerEvents(),e.next=9,t.loadContracts();case 9:case"end":return e.stop()}}),e)})))()},methods:{status:function(t){return{0:"Pending",1:"Completed",2:"Cancelled",3:"Paused"}[t]},registerEvents:function(){var t=this;window.ethereum&&window.ethereum.on("chainChanged",(function(e){t.metamask.netId=t.web3.utils.hexToNumber(e),t.initDapp()}))},getParam:function(t){var e=window.location.search;return new URLSearchParams(e).get(t)},initDapp:function(){this.network.current=this.network.list[this.currentNetwork],this.initWeb3(this.currentNetwork,!0)},initWeb3:function(t,e){var r=this;return Object(i.a)(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.network.list[t]){a.next=3;break}throw r.$toast.error("Failed initializing network ".concat(t,". Allowed values are ").concat(Object.keys(r.network.list).join(", "),".")),new Error("Failed initializing network ".concat(t,". Allowed values are ").concat(Object.keys(r.network.list).join(", "),"."));case 3:if(e&&void 0!==window.ethereum){a.next=9;break}r.network.current=r.network.list[t],r.web3Provider=new n.providers.HttpProvider(r.network.list[t].web3Provider),r.web3=new n(r.web3Provider),a.next=20;break;case 9:return r.web3Provider=window.ethereum,r.web3=new n(r.web3Provider),r.metamask.installed=r.web3Provider.isMetaMask,a.next=14,r.web3.eth.getChainId();case 14:if(o=a.sent,r.metamask.netId=o,o===r.network.list[t].id){a.next=20;break}return r.network.current=r.network.list[r.network.map[o]],a.next=20,r.initWeb3(t,!1);case 20:case"end":return a.stop()}}),a)})))()},initService:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.service=new t.web3.eth.Contract(t.serviceProviderContract.abi,t.serviceProviderAddress);case 1:case"end":return e.stop()}}),e)})))()},loadContracts:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var r,n,a,i,s,c,u,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.metamask.installed){e.next=3;break}return t.$toast.error("To create a Token please install MetaMask!"),e.abrupt("return");case 3:if(t.metamask.netId===t.network.current.id){e.next=6;break}return t.$toast.error("Your MetaMask in on the wrong network. Please switch on ".concat(t.network.current.name," and try again!")),e.abrupt("return");case 6:return r=null,t.getParam("id")&&(r=t.getParam("id")),n=null,t.getParam("status")&&(n=t.getParam("status")),a=null,t.getParam("with")&&(a=(a=t.getParam("with"))?a.toLowerCase():null),t.trx.hash="",t.trx.link="",t.formDisabled=!0,t.makingTransaction=!0,t.sourceCodeVerified=!1,t.verificationCount=0,e.next=20,t.web3Provider.request({method:"eth_requestAccounts"});case 20:return e.sent,e.next=23,t.web3.eth.getCoinbase();case 23:if(i=e.sent,t.account=i,{from:i},!r){e.next=30;break}t.contractIds=[r],e.next=33;break;case 30:return e.next=32,t.service.methods.contractsOf(i).call();case 32:t.contractIds=e.sent;case 33:s={},c=Object(o.a)(t.contractIds),e.prev=35,c.s();case 37:if((u=c.n()).done){e.next=45;break}return l=u.value,e.next=41,t.service.methods.find(l).call();case 41:(d=e.sent)&&(n&&t.status(d.status)!==n||a&&d.creator.toLowerCase()!==a&&d.buyer.toLowerCase()!==a||(s[l]={id:d.id,creator:d.creator,buyer:d.buyer,creatorInputToken:d.creatorInputToken,buyerInputToken:d.buyerInputToken,creatorInputAmount:t.web3.utils.fromWei(d.creatorInputAmount,"ether"),buyerInputAmount:t.web3.utils.fromWei(d.buyerInputAmount,"ether"),status:d.status}));case 43:e.next=37;break;case 45:e.next=50;break;case 47:e.prev=47,e.t0=e.catch(35),c.e(e.t0);case 50:return e.prev=50,c.f(),e.finish(50);case 53:t.contracts=s;case 54:case"end":return e.stop()}}),e,null,[[35,47,50,53]])})))()},estimateGas:function(t,e){var r=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.service.methods.create(t).estimateGas(e).catch((function(t){r.$toast.error(t)}));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}),n)})))()},complete:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function r(){var n,a,o,i,s,c,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,e.sourceCodeVerified=!1,e.verificationCount=0,r.next=8,e.web3Provider.request({method:"eth_requestAccounts"});case 8:return r.next=10,e.web3.eth.getCoinbase();case 10:if(n=r.sent,a={from:n},o=e.contracts[t],i=e.web3.utils.toWei(o.creatorInputAmount,"ether"),s=e.web3.utils.toWei(o.buyerInputAmount,"ether"),"0x0000000000000000000000000000000000000000"===o.buyerInputToken){r.next=31;break}return c=new e.web3.eth.Contract(e.erc20.abi,o.buyerInputToken),r.next=19,c.methods.allowance(n,e.serviceProviderAddress).call();case 19:if(!(r.sent<i)){r.next=29;break}return e.$toast.info("You need to approve!"),r.next=24,c.methods.approve(e.serviceProviderAddress,e.web3.utils.toWei(i,"ether")).send(a).on("error",(function(t){e.makingTransaction=!1,e.formDisabled=!1,e.$toast.error(t.message)})).on("transactionHash",(function(t){console.log(t),e.$toast.info("Approval hash received"),e.transactionStarted=!0})).on("receipt",(function(t){console.log(t),e.$forceUpdate(),e.$toast.success("Well done! Approval request success!")}));case 24:u=r.sent,console.log(u),r.next=29;break;case 29:r.next=32;break;case 31:a.value=s;case 32:return r.next=34,e.service.methods.complete(t).estimateGas(a).catch((function(t){e.$toast.error(t)}));case 34:if(l=r.sent){r.next=37;break}return r.abrupt("return");case 37:a.gas=l,e.service.methods.complete(t).send(a).on("error",(function(t){e.makingTransaction=!1,e.formDisabled=!1,e.$toast.error(t.message)})).on("transactionHash",(function(t){e.transactionStarted=!0,e.trx.hash=t,e.trx.link="".concat(e.network.current.explorer,"/tx/").concat(e.trx.hash)})).on("receipt",(function(r){console.log(r),e.$forceUpdate(),e.$toast.success("Well done! Your contract was completed!"),e.loadContracts(t)}));case 39:case"end":return r.stop()}}),r)})))()},cancel:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function r(){var n,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,e.sourceCodeVerified=!1,e.verificationCount=0,r.next=8,e.web3Provider.request({method:"eth_requestAccounts"});case 8:return r.next=10,e.web3.eth.getCoinbase();case 10:return n=r.sent,o={from:n},r.next=14,e.service.methods.cancel(t).estimateGas(o).catch((function(t,r){e.$toast.error(t),console.table(Object(a.a)(t.message))}));case 14:if(i=r.sent){r.next=17;break}return r.abrupt("return");case 17:o.gas=i,e.service.methods.cancel(t).send(o).on("error",(function(t){e.makingTransaction=!1,e.formDisabled=!1,e.$toast.error(t.message)})).on("transactionHash",(function(t){e.transactionStarted=!0,e.trx.hash=t,e.trx.link="".concat(e.network.current.explorer,"/tx/").concat(e.trx.hash)})).on("receipt",(function(r){console.log(r),e.$forceUpdate(),e.$toast.success("Your contract was cancelled!"),e.loadContracts(t)}));case 19:case"end":return r.stop()}}),r)})))()}}},l=r("KHd+"),d=Object(l.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},[[r("div",{staticClass:"w-full max-w-7xl mx-auto xl:px-8"},[t.metamask.installed?t.account?r("div",[t._v("\n          You are transacting as "+t._s(t.account)+"\n        ")]):t._e():r("div",[r("div",{staticClass:"p-4 bg-yellow-100 text-yellow-700 text-base border-yellow-400"},[r("h4",{staticClass:"text-xl font-semibold mb-1"},[t._v("\n              Attention!\n            ")]),r("p",[t._v("\n              This app is tested with "),r("a",{staticClass:"underline",attrs:{href:"https://metamask.io/",target:"_blank"}},[t._v("MetaMask")]),t._v(" wallet only. Use any other wallet at your own risk.\n            ")])])]),r("div",{staticClass:"mt-2"},[r("g-link",{staticClass:"mt-2 text-blue-600 underline",attrs:{to:"/create"}},[t._v("\n            Create new contract\n          ")])],1),r("div",{staticClass:"mt-4 md:flex md:space-x-10"},[r("div",{staticClass:"flex-1  "},[r("h2",{staticClass:"p-3 bg-gray-700 text-white"},[t._v("\n              My Contracts\n            ")]),r("div",{staticClass:"px-4 pt-3 pb-6 grid grid-cols-1 border-t-0 border-2 border-gray-300 gap-y-6 bg-white "},[Object.keys(t.contracts).length?r("ul",{staticClass:"divide-y divide-gray-200 space-y-2"},t._l(t.contracts,(function(e){return r("li",{key:e.id,staticClass:"py-4 flex flex-col"},[r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      ID\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(e.id)+"\n                    ")])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Creator\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(e.creator)+"\n                    ")])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Buyer\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(e.buyer)+"\n                    ")])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Item\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(e.creatorInputToken)+"\n                    ")])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Currency\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(e.buyerInputToken)+"\n                    ")])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Quantity\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(e.creatorInputAmount)+"\n                    ")])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Amount\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(e.buyerInputAmount)+"\n                    ")])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Status\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                      "+t._s(t.status(e.status))+"\n                    ")])]),"0"===e.status?r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                      Action\n                    ")]),r("p",{staticClass:"text-sm text-gray-500"},[t.account.toLowerCase()===e.creator.toLowerCase()?r("button",{staticClass:"px-3 py-2 bg-yellow-300",on:{click:function(r){return t.cancel(e.id)}}},[t._v("\n                        Cancel\n                      ")]):t._e(),t.account.toLowerCase()===e.buyer.toLowerCase()?r("button",{staticClass:"px-3 py-2 bg-green-300",on:{click:function(r){return t.complete(e.id)}}},[t._v("\n                        Complete\n                      ")]):t._e()])]):t._e()])})),0):r("p",[t._v("\n                No contract found. Create one\n              ")])])])])])]],2)])}),[],!1,null,null,null);e.default=d.exports},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new C(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=g(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function f(){}function h(){}var m={};m[a]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(_([])));v&&v!==e&&r.call(v,a)&&(m=v);var w=h.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,s){var c=u(t[a],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=w.constructor=h,h.constructor=f,f.displayName=s(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new y(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,i,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);