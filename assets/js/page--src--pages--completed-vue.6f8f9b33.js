(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KJBR:function(t,e,r){"use strict";r.r(e);var s=r("HaE+"),n=(r("fbCW"),r("ls82"),r("EzfV")),a=r("2RjS"),o=r("2u47"),c={components:{ContractSteps:r("bZP9").a,TokenSelectedInput:n.a},mixins:[a.a],data:function(){return{contract:{id:this.$route.params.id,creatorAddress:"",creatorInputToken:"",creatorInputTokenSymbol:"",buyerAddress:"",buyerInputToken:"",buyerInputTokenSymbol:"",creatorInputAmount:"",buyerInputAmount:"",fee:.1,transaction:{processing:!1}}}},computed:{userIs:function(){if(this.metamask.account&&this.contract.creatorAddress&&this.contract.buyerAddress){var t=this.web3.utils.toChecksumAddress(this.metamask.account);if(this.web3.utils.toChecksumAddress(this.contract.creatorAddress)===t)return"creator";if(this.web3.utils.toChecksumAddress(this.contract.buyerAddress)===t||"0x0000000000000000000000000000000000000000"===this.contract.buyerAddress)return"buyer"}return"unknown"}},watch:{"contract.buyerAddress":function(t){this.web3&&this.web3.utils.isAddress(t)&&(this.contract.buyerAddress=this.web3.utils.toChecksumAddress(t))}},mounted:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initWeb3ConnectMixin();case 2:return e.next=4,t.loadContract();case 4:case"end":return e.stop()}}),e)})))()},methods:{loadContract:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.serviceProviderApi.methods.find(t.contract.id).call().catch((function(){t.$toast.error("No such contract exists!"),t.$router.push("/create")}));case 2:(r=e.sent)&&r.id&&(t.contract.creatorAddress=r.creator,t.contract.buyerAddress=r.buyer,t.contract.creatorInputToken=r.creatorInputToken,t.contract.buyerInputToken=r.buyerInputToken,t.contract.creatorInputAmount=t.web3.utils.fromWei(r.creatorInputAmount,"ether"),t.contract.buyerInputAmount=t.web3.utils.fromWei(r.buyerInputAmount,"ether"),t.contract.status=r.status);case 5:case"end":return e.stop()}}),e)})))()},onCreatorInputTokenChange:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("string"!=typeof t){r.next=4;break}return r.abrupt("return");case 4:void 0===t&&(t={raw:{address:"",symbol:""}});case 5:e.contract.creatorInputToken=t.raw.address,e.contract.creatorInputTokenSymbol=t.raw.symbol;case 7:case"end":return r.stop()}}),r)})))()},onBuyerInputTokenChange:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("string"!=typeof t){r.next=4;break}return r.abrupt("return");case 4:void 0===t&&(t={raw:{address:"",symbol:""}});case 5:e.contract.buyerInputToken=t.raw.address,e.contract.buyerInputTokenSymbol=t.raw.symbol;case 7:case"end":return r.stop()}}),r)})))()},cancel:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var r,s,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,s={from:t.metamask.account},t.contract.transaction.processing=!0,e.next=5,t.serviceProviderApi.methods.cancel(t.contract.id).estimateGas(s).catch((function(e){r=!0,t.$toast.error(e)}));case 5:if(n=e.sent,r||!(n>0)){e.next=10;break}return s.gas=n,e.next=10,t.serviceProviderApi.methods.cancel(t.contract.id).send(s).on("error",(function(e){r=!0,t.contract.transaction.processing=!1,t.$toast.error(e.message)})).on("transactionHash",(function(e){t.$toast.success("Transaction successful! Please wait a bit more!")})).on("receipt",(function(e){t.$toast.success("Your contract was successfully cancelled and the tokens are now refunded to your wallet."),t.contract.transaction.processing=!1}));case 10:case"end":return e.stop()}}),e)})))()},complete:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var r,s,n,a,c,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!1,s=t.web3.utils.toWei(t.contract.buyerInputAmount,"ether"),n={from:t.metamask.account},"0x0000000000000000000000000000000000000000"!==t.contract.buyerInputToken){e.next=7;break}n.value=s,e.next=17;break;case 7:return a=new t.web3.eth.Contract(o.abi,t.contract.buyerInputToken),e.next=10,a.methods.allowance(n.from,t.serviceProvider.address).call().catch((function(e){r=!0,t.$toast.error(e.message)}));case 10:if(c=e.sent,r){e.next=17;break}if(t.contract.transaction.processing=!0,!((i=s-c)>0)){e.next=17;break}return e.next=17,a.methods.approve(t.serviceProvider.address,t.web3.utils.toWei(i+"","ether")).send(n).on("error",(function(e){r=!0,t.contract.transaction.processing=!1,t.$toast.error(e.message)})).on("transactionHash",(function(e){t.$toast.info("Approval request sent for "+t.web3.utils.fromWei(i)+" "+t.contract.buyerInputTokenSymbol+". Please wait for the confirmation...")})).on("receipt",(function(e){t.$toast.success("You have approved "+t.web3.utils.fromWei(i)+" "+t.contract.buyerInputTokenSymbol+". Please wait for the next steps..."),t.$forceUpdate()}));case 17:if(r){e.next=25;break}return e.next=20,t.serviceProviderApi.methods.complete(t.contract.id).estimateGas(n).catch((function(e){r=!0,t.$toast.error(e)}));case 20:if(u=e.sent,r||!(u>0)){e.next=25;break}return n.gas=u,e.next=25,t.serviceProviderApi.methods.complete(t.contract.id).send(n).on("error",(function(e){r=!0,t.contract.transaction.processing=!1,t.$toast.error(e.message)})).on("transactionHash",(function(e){t.$toast.success("Transaction successful! Please wait a bit more!")})).on("receipt",(function(e){t.$toast.success("Well done! Your contract was successfully completed and the tokens are now transferred to your and creator's wallets."),t.contract.transaction.processing=!1}));case 25:r&&(t.contract.transaction.processing=!1);case 26:case"end":return e.stop()}}),e)})))()}}},i=r("KHd+"),u=Object(i.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"max-w-6xl mx-auto py-6 sm:px-6 lg:px-8"},[r("ContractSteps",{attrs:{step:1,name:"buyer"===t.userIs?"You deposited":"Other person deposited"}}),r("div",{staticClass:"border-2 border-gray-200 bg-gray-100"},[r("div",{staticClass:"px-5 py-5 grid grid-cols space-y-5"},[r("div",{staticClass:"py-5"},["unknown"===t.userIs?r("h1",{staticClass:"text-center text-2xl"},[t._v("\n            Escrow Vault Contract "),t.contract.id?r("span",[t._v("#"+t._s(t.contract.id))]):t._e()]):r("h1",{staticClass:"text-center text-2xl"},[t._v("\n            Your Escrow Vault Contract "),t.contract.id?r("span",[t._v("#"+t._s(t.contract.id))]):t._e()])]),r("div",{staticClass:"px-5 flex w-full md:space-x-10"},[r("div",{staticClass:"flex-1 bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"},[r("div",{staticClass:"px-4 py-3 sm:px-6"},["creator"===t.userIs?r("h3",{staticClass:"text-center text-xl"},[t._v("\n                You deposited\n              ")]):r("h3",{staticClass:"text-center text-xl"},[t._v("\n                Contract creator deposited\n              ")])]),r("div",{staticClass:"px-4 py-5 sm:p-6"},[r("div",{staticClass:"space-y-8 divide-y divide-gray-200"},[r("div",[r("div",{staticClass:"grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},[r("div",{staticClass:"sm:col-span-6"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"creatorInputToken"}},[t._v("Token")]),r("div",{staticClass:"mt-1 flex rounded-md shadow-sm"},[r("div",{staticClass:"w-full focus-within:z-10"},[r("TokenSelectedInput",{attrs:{id:"creatorInputToken",selected:t.contract.creatorInputToken,web3:t.web3,"current-network":t.currentNetwork,change:t.onCreatorInputTokenChange}})],1)])]),r("div",{staticClass:"sm:col-span-6"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"creatorInputAmount"}},[t._v("Amount")]),r("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.contract.creatorInputAmount,expression:"contract.creatorInputAmount"}],staticClass:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 sm:text-sm border-gray-300 rounded-md",class:t.contract.creatorInputToken?"pr-16":"",attrs:{id:"creatorInputAmount",type:"number",placeholder:"Loading...",min:"0",step:"any","aria-describedby":"creator-input-amount",disabled:""},domProps:{value:t.contract.creatorInputAmount},on:{input:function(e){e.target.composing||t.$set(t.contract,"creatorInputAmount",e.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.contract.creatorInputToken,expression:"contract.creatorInputToken"}],staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[r("span",{staticClass:"text-gray-500 sm:text-sm"},[t._v("\n                            "+t._s(t.contract.creatorInputTokenSymbol)+"\n                          ")])])])]),r("div",{staticClass:"sm:col-span-6"},["creator"===t.userIs?r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"creatorAddress"}},[t._v("Your Address")]):r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"creatorAddress"}},[t._v("Creator's Address")]),r("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[r("input",{staticClass:"focus:ring-0 focus:border-gray-300 block w-full pl-3 sm:text-sm border-gray-300 rounded-md",attrs:{id:"creatorAddress",type:"text",readonly:"",disabled:"",placeholder:"Loading...","aria-describedby":"creator-address"},domProps:{value:t.contract.creatorAddress}})])])])])])]),r("div",{staticClass:"px-4 py-4 sm:px-6",attrs:{hidden:""}},[t._v("\n              Footer content\n              ")])]),r("div",{staticClass:"flex-1 bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"},[r("div",{staticClass:"px-4 py-3 sm:px-6"},["buyer"===t.userIs?r("h3",{staticClass:"text-center text-xl"},[t._v("\n                Your deposited\n              ")]):r("h3",{staticClass:"text-center text-xl"},[t._v("\n                Other Person deposited\n              ")])]),r("div",{staticClass:"px-4 py-5 sm:p-6"},[r("div",{staticClass:"space-y-8 divide-y divide-gray-200"},[r("div",[r("div",{staticClass:"grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"},[r("div",{staticClass:"sm:col-span-6"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"buyerInputToken"}},[t._v("Token")]),r("div",{staticClass:"mt-1 flex rounded-md shadow-sm"},[r("div",{staticClass:"w-full focus-within:z-10"},[r("TokenSelectedInput",{attrs:{id:"buyerInputToken",selected:t.contract.buyerInputToken,web3:t.web3,"current-network":t.currentNetwork,change:t.onBuyerInputTokenChange}})],1)])]),r("div",{staticClass:"sm:col-span-6"},[r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"buyerInputAmount"}},[t._v("Amount")]),r("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.contract.buyerInputAmount,expression:"contract.buyerInputAmount"}],staticClass:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 sm:text-sm border-gray-300 rounded-md",class:t.contract.buyerInputToken?"pr-16":"",attrs:{id:"buyerInputAmount",type:"number",placeholder:"Loading...",min:"0",step:"any","aria-describedby":"buyer-input-amount",disabled:""},domProps:{value:t.contract.buyerInputAmount},on:{input:function(e){e.target.composing||t.$set(t.contract,"buyerInputAmount",e.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.contract.buyerInputToken,expression:"contract.buyerInputToken"}],staticClass:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[r("span",{staticClass:"text-gray-500 sm:text-sm"},[t._v("\n                            "+t._s(t.contract.buyerInputTokenSymbol)+"\n                          ")])])])]),r("div",{staticClass:"sm:col-span-6"},["buyer"===t.userIs?r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"buyerAddress"}},[t._v("Your Address")]):r("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"buyerAddress"}},[t._v("Other Person's Address")]),r("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.contract.buyerAddress,expression:"contract.buyerAddress"}],staticClass:"focus:ring-0 focus:border-gray-300 block w-full pl-3 sm:text-sm border-gray-300 rounded-md",attrs:{id:"buyerAddress",type:"text",name:"buyer-address",placeholder:"Loading...","aria-describedby":"buyer-address",autocomplete:"buyer-address",disabled:""},domProps:{value:t.contract.buyerAddress},on:{input:function(e){e.target.composing||t.$set(t.contract,"buyerAddress",e.target.value)}}})])])])])])]),r("div",{staticClass:"px-4 py-4 sm:px-6",attrs:{hidden:""}},[t._v("\n              Footer content\n              ")])])])])])],1)])}),[],!1,null,null,null);e.default=u.exports}}]);