(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iyQ6:function(t,e,r){"use strict";r.r(e);var a,n=r("U8pU"),s=r("uFwe"),o=r("HaE+"),i=(r("rB9j"),r("hByQ"),r("07d7"),r("PKPk"),r("3bBZ"),r("Kz25"),r("ma9I"),r("oVuX"),r("tkto"),r("2B1R"),r("sMBO"),r("mRH6"),r("fbCW"),r("ls82"),r("KkUu")),c=r("2u47");a=r("cCgg");var u={metaInfo:{title:"Create contract!"},data:function(){return{serviceProviderContract:i,erc20:c,serviceProviderAddress:"0xb79a18115a15194D0066d0F7ce63a7C261DC6A6E",network:{default:"rinkeby",current:null,map:{137:"mainnet",80001:"mumbai"},list:{rinkeby:{web3Provider:"https://rinkeby.infura.io/v3/cd808238c8684678a97167ac62dc29b0",explorer:"https://rinkeby.etherscan.io",id:4,name:"Rinkeby Test Network"}}},metamask:{},makingTransaction:!1,transactionStarted:!1,formDisabled:!1,contract:{buyer:"0x3E1ECc904D9a356408e57126790438636439E291",item:"0x476f231a320d6E9C548420cac55Fbc5f74A55c31",currency:"0x322c8115A858244936C20c87cFDc38Fb69e1cE14",quantity:"10",amount:"800"},trx:{hash:"",link:""},service:null,contracts:{},contractIds:[],account:null}},computed:{},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.currentNetwork=t.getParam("network")||t.network.default,t.initDapp(),e.next=4,t.initWeb3(t.currentNetwork,!0);case 4:return e.next=6,t.initService(t.currentNetwork);case 6:return t.registerEvents(),e.next=9,t.loadContracts();case 9:case"end":return e.stop()}}),e)})))()},methods:{status:function(t){return{0:"Pending",1:"Completed",2:"Cancelled",3:"Paused"}[t]},registerEvents:function(){var t=this;window.ethereum&&window.ethereum.on("chainChanged",(function(e){t.metamask.netId=t.web3.utils.hexToNumber(e),t.initDapp()}))},getParam:function(t){var e=window.location.search;return new URLSearchParams(e).get(t)},initDapp:function(){this.network.current=this.network.list[this.currentNetwork],this.initWeb3(this.currentNetwork,!0)},initWeb3:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.network.list[t]){n.next=3;break}throw r.$toast.error("Failed initializing network ".concat(t,". Allowed values are ").concat(Object.keys(r.network.list).join(", "),".")),new Error("Failed initializing network ".concat(t,". Allowed values are ").concat(Object.keys(r.network.list).join(", "),"."));case 3:if(e&&void 0!==window.ethereum){n.next=9;break}r.network.current=r.network.list[t],r.web3Provider=new a.providers.HttpProvider(r.network.list[t].web3Provider),r.web3=new a(r.web3Provider),n.next=20;break;case 9:return r.web3Provider=window.ethereum,r.web3=new a(r.web3Provider),r.metamask.installed=r.web3Provider.isMetaMask,n.next=14,r.web3.eth.getChainId();case 14:if(s=n.sent,r.metamask.netId=s,s===r.network.list[t].id){n.next=20;break}return r.network.current=r.network.list[r.network.map[s]],n.next=20,r.initWeb3(t,!1);case 20:case"end":return n.stop()}}),n)})))()},initService:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.service=new t.web3.eth.Contract(t.serviceProviderContract.abi,t.serviceProviderAddress);case 1:case"end":return e.stop()}}),e)})))()},loadContracts:function(){var t=arguments,e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var a,n,o,i,c,u,l,d,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.length>0&&void 0!==t[0]?t[0]:null,e.metamask.installed){r.next=4;break}return e.$toast.error("To create a Token please install MetaMask!"),r.abrupt("return");case 4:if(e.metamask.netId===e.network.current.id){r.next=7;break}return e.$toast.error("Your MetaMask in on the wrong network. Please switch on ".concat(e.network.current.name," and try again!")),r.abrupt("return");case 7:return a=null,e.getParam("id")&&(a=e.getParam("id")),n=null,e.getParam("status")&&(n=e.getParam("status")),o=null,e.getParam("with")&&(o=(o=e.getParam("with"))?o.toLowerCase():null),e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,e.sourceCodeVerified=!1,e.verificationCount=0,r.next=21,e.web3Provider.request({method:"eth_requestAccounts"});case 21:return r.sent,r.next=24,e.web3.eth.getCoinbase();case 24:if(i=r.sent,e.account=i,{from:i},!a){r.next=31;break}e.contractIds=[a],r.next=34;break;case 31:return r.next=33,e.service.methods.contractIdsForAddress(i).call();case 33:e.contractIds=r.sent;case 34:c={},u=Object(s.a)(e.contractIds),r.prev=36,u.s();case 38:if((l=u.n()).done){r.next=46;break}return d=l.value,r.next=42,e.service.methods.find(d).call();case 42:(m=r.sent)&&(n&&e.status(m.status)!==n||o&&m.seller.toLowerCase()!==o&&m.buyer.toLowerCase()!==o||(c[d]={id:m.id,seller:m.seller,buyer:m.buyer,item:m.item,currency:m.currency,quantity:e.web3.utils.fromWei(m.quantity,"ether"),amount:e.web3.utils.fromWei(m.amount,"ether"),status:m.status}));case 44:r.next=38;break;case 46:r.next=51;break;case 48:r.prev=48,r.t0=r.catch(36),u.e(r.t0);case 51:return r.prev=51,u.f(),r.finish(51);case 54:e.contracts=c;case 55:case"end":return r.stop()}}),r,null,[[36,48,51,54]])})))()},estimateGas:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.service.methods.create(t).estimateGas(e).catch((function(t){r.$toast.error(t)}));case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}}),a)})))()},complete:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var a,n,s,o,i,c,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,e.sourceCodeVerified=!1,e.verificationCount=0,r.next=8,e.web3Provider.request({method:"eth_requestAccounts"});case 8:return r.next=10,e.web3.eth.getCoinbase();case 10:if(a=r.sent,n={from:a},s=e.contracts[t],o=e.web3.utils.toWei(s.quantity,"ether"),i=e.web3.utils.toWei(s.amount,"ether"),"0x0000000000000000000000000000000000000000"===s.currency){r.next=31;break}return c=new e.web3.eth.Contract(e.erc20.abi,s.currency),r.next=19,c.methods.allowance(a,e.serviceProviderAddress).call();case 19:if(!(r.sent<o)){r.next=29;break}return e.$toast.info("You need to approve!"),r.next=24,c.methods.approve(e.serviceProviderAddress,e.web3.utils.toWei(o,"ether")).send(n).on("error",(function(t){e.makingTransaction=!1,e.formDisabled=!1,e.$toast.error(t.message)})).on("transactionHash",(function(t){console.log(t),e.$toast.info("Approval hash received"),e.transactionStarted=!0})).on("receipt",(function(t){console.log(t),e.$forceUpdate(),e.$toast.success("Well done! Approval request success!")}));case 24:u=r.sent,console.log(u),r.next=29;break;case 29:r.next=32;break;case 31:n.value=i;case 32:return r.next=34,e.service.methods.complete(t).estimateGas(n).catch((function(t){e.$toast.error(t)}));case 34:if(l=r.sent){r.next=37;break}return r.abrupt("return");case 37:n.gas=l,e.service.methods.complete(t).send(n).on("error",(function(t){e.makingTransaction=!1,e.formDisabled=!1,e.$toast.error(t.message)})).on("transactionHash",(function(t){e.transactionStarted=!0,e.trx.hash=t,e.trx.link="".concat(e.network.current.explorer,"/tx/").concat(e.trx.hash)})).on("receipt",(function(r){console.log(r),e.$forceUpdate(),e.$toast.success("Well done! Your contract was completed!"),e.loadContracts(t)}));case 39:case"end":return r.stop()}}),r)})))()},cancel:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var a,s,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.trx.hash="",e.trx.link="",e.formDisabled=!0,e.makingTransaction=!0,e.sourceCodeVerified=!1,e.verificationCount=0,r.next=8,e.web3Provider.request({method:"eth_requestAccounts"});case 8:return r.next=10,e.web3.eth.getCoinbase();case 10:return a=r.sent,s={from:a},r.next=14,e.service.methods.cancel(t).estimateGas(s).catch((function(t,r){e.$toast.error(t),console.table(Object(n.a)(t.message))}));case 14:if(o=r.sent){r.next=17;break}return r.abrupt("return");case 17:s.gas=o,e.service.methods.cancel(t).send(s).on("error",(function(t){e.makingTransaction=!1,e.formDisabled=!1,e.$toast.error(t.message)})).on("transactionHash",(function(t){e.transactionStarted=!0,e.trx.hash=t,e.trx.link="".concat(e.network.current.explorer,"/tx/").concat(e.trx.hash)})).on("receipt",(function(r){console.log(r),e.$forceUpdate(),e.$toast.success("Your contract was cancelled!"),e.loadContracts(t)}));case 19:case"end":return r.stop()}}),r)})))()}}},l=r("KHd+"),d=Object(l.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},[[r("div",{staticClass:"w-full max-w-7xl mx-auto xl:px-8"},[t.metamask.installed?t.account?r("div",[t._v("\n            You are transacting as "+t._s(t.account)+"\n          ")]):t._e():r("div",[r("div",{staticClass:"p-4 bg-yellow-100 text-yellow-700 text-base border-yellow-400"},[r("h4",{staticClass:"text-xl font-semibold mb-1"},[t._v("\n                Attention!\n              ")]),r("p",[t._v("\n                This app is tested with "),r("a",{staticClass:"underline",attrs:{href:"https://metamask.io/",target:"_blank"}},[t._v("MetaMask")]),t._v(" wallet only. Use any other wallet at your own risk.\n              ")])])]),r("div",{staticClass:"mt-2"},[r("g-link",{staticClass:"mt-2 text-blue-600 underline",attrs:{to:"/create"}},[t._v("Create new contract")])],1),r("div",{staticClass:"mt-4 md:flex md:space-x-10"},[r("div",{staticClass:"flex-1  "},[r("h2",{staticClass:"p-3 bg-gray-700 text-white"},[t._v("\n                My Contracts\n              ")]),r("div",{staticClass:"px-4 pt-3 pb-6 grid grid-cols-1 border-t-0 border-2 border-gray-300 gap-y-6 bg-white "},[Object.keys(t.contracts).length?r("ul",{staticClass:"divide-y divide-gray-200 space-y-2"},t._l(t.contracts,(function(e){return r("li",{key:e.id,staticClass:"py-4 flex flex-col"},[r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("ID")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(e.id))])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Seller")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(e.seller))])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Buyer")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(e.buyer))])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Item")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(e.item))])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Currency")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(e.currency))])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Quantity")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(e.quantity))])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Amount")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(e.amount))])]),r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Status")]),r("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(t.status(e.status)))])]),"0"===e.status?r("div",{staticClass:"mt-2"},[r("p",{staticClass:"text-sm font-medium text-gray-900"},[t._v("Action")]),r("p",{staticClass:"text-sm text-gray-500"},[t.account.toLowerCase()===e.seller.toLowerCase()?r("button",{staticClass:"px-3 py-2 bg-yellow-300",on:{click:function(r){return t.cancel(e.id)}}},[t._v("Cancel")]):t._e(),t.account.toLowerCase()===e.buyer.toLowerCase()?r("button",{staticClass:"px-3 py-2 bg-green-300",on:{click:function(r){return t.complete(e.id)}}},[t._v("Complete")]):t._e()])]):t._e()])})),0):r("p",[t._v("No contract found. Create one")])])])])])]],2)])}),[],!1,null,null,null);e.default=d.exports}}]);