(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(221)},133:function(e,t,a){},134:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n,r,s,o,i,c,l,u,p,d,m,h,f,g,v,k,b,y,S,w,E=a(1),O=a.n(E),N=a(5),x=a.n(N),C=(a(133),a(20)),D=a(24),T=a(27),A=a(26),j=a(28),I=(a(134),a(234)),H=a(230),R=a(10),_=a(9),B=a.n(_),W=a(13),J=a(18),G=a(15),L=(a(137),a(11)),M=a(236),z=(n=function(){function e(){var t=this;Object(C.a)(this,e),Object(J.a)(this,"isTeemoReady",r,this),Object(J.a)(this,"isConnected",s,this),Object(J.a)(this,"scriptHash",o,this),Object(J.a)(this,"network",i,this),Object(J.a)(this,"address",c,this),Object(J.a)(this,"nns",l,this),Object(J.a)(this,"updateAddress",u,this),Object(J.a)(this,"updateNetwork",p,this),Object(J.a)(this,"updateNNS",d,this),this.updateLastWSmsgSec=function(){t.lastWSmsgSec=((new Date).getTime()-t.lastWSmsgTime)/1e3,t.lastWSmsgSec>75&&(t.lastWSmsgTime=(new Date).getTime(),t.lastWSmsgSec=0,t.socketInit()),t.socket&&(t.socketReadyState=t.socket.readyState)},this.socket=void 0,this.time=(new Date).getTime(),Object(J.a)(this,"socketReadyState",m,this),Object(J.a)(this,"socketMsgs",h,this),Object(J.a)(this,"blockDatas",f,this),Object(J.a)(this,"lastBlockTime",g,this),Object(J.a)(this,"lastWSmsgTime",v,this),Object(J.a)(this,"lastWSmsgSec",k,this),Object(J.a)(this,"txids",b,this),Object(J.a)(this,"addTxidSended",y,this),this.pushEvent=function(e,t){var a=new CustomEvent(e,{detail:t});window.dispatchEvent(a)},this.getDelay=function(e){return parseInt(((new Date).getTime()/1e3-e).toFixed(0))+"s"},Object(J.a)(this,"socketInit",S,this),Object(J.a)(this,"init",w,this),this.init(),setInterval(this.updateLastWSmsgSec,1e3)}return Object(D.a)(e,[{key:"rpcUrl",get:function(){return"MainNet"==this.network?"http://seed.nel.group:10332":"http://test.nel.group:20332"}},{key:"webSocketURL",get:function(){return"MainNet"==this.network?"ws://47.99.35.147:82/ws/mainnet":"ws://47.99.35.147:82/ws/testnet"}}]),e}(),r=Object(G.a)(n.prototype,"isTeemoReady",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),s=Object(G.a)(n.prototype,"isConnected",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),o=Object(G.a)(n.prototype,"scriptHash",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{nns_domaincenter:"348387116c4a75e420663277d9c02049907128c7",nns_resolver:"6e2aea28af9c5febea0774759b1b76398e3167f1",nns_auction:"5fd8c2aed0eec0fa103f6fba16748b453baf5b2e",nns_credit:"77bf387c9b5f2e2c33ef8507478b103285c55b11",NEP_5_CGAS:"74f2dc36a68fdc4682034178eb2220729231db76",NEP_5_NNC:"fc732edee1efdf968c23c20a9628eaa5a6ccb934"}}}),i=Object(G.a)(n.prototype,"network",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"TestNet"}}),c=Object(G.a)(n.prototype,"address",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"A**********************"}}),l=Object(G.a)(n.prototype,"nns",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"qmz.test"}}),u=Object(G.a)(n.prototype,"updateAddress",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.address=t}}}),p=Object(G.a)(n.prototype,"updateNetwork",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.network=t}}}),d=Object(G.a)(n.prototype,"updateNNS",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.nns=t}}}),Object(G.a)(n.prototype,"rpcUrl",[L.e],Object.getOwnPropertyDescriptor(n.prototype,"rpcUrl"),n.prototype),Object(G.a)(n.prototype,"webSocketURL",[L.e],Object.getOwnPropertyDescriptor(n.prototype,"webSocketURL"),n.prototype),m=Object(G.a)(n.prototype,"socketReadyState",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),h=Object(G.a)(n.prototype,"socketMsgs",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=Object(G.a)(n.prototype,"blockDatas",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{blockHeight:-1,blockTime:0,blockHash:"",timeDiff:0}]}}),g=Object(G.a)(n.prototype,"lastBlockTime",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),v=Object(G.a)(n.prototype,"lastWSmsgTime",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return(new Date).getTime()}}),k=Object(G.a)(n.prototype,"lastWSmsgSec",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=Object(G.a)(n.prototype,"txids",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=Object(G.a)(n.prototype,"addTxidSended",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.txids.unshift("0x"+t)}}}),S=Object(G.a)(n.prototype,"socketInit",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.socket&&e.socket.close(),e.blockDatas=[{blockHeight:-1,blockTime:0,blockHash:"",timeDiff:0}],e.socket=new WebSocket(e.webSocketURL),e.socket.onclose=function(e){console.log(e),M.a.warning({message:"websocket",description:"close"})},e.socket.onerror=function(e){console.log(e),M.a.error({message:"websocket",description:"error"})},e.socket.onopen=function(t){console.log(t),e.socket.send("Hello Server!"),M.a.success({message:"websocket",description:"open on "+e.webSocketURL})},e.socket.onmessage=function(t){console.log(t),console.log(t.data),e.socketMsgs.unshift(t.data),e.lastWSmsgTime=(new Date).getTime(),e.time=(new Date).getTime();var a=JSON.parse(t.data).data;if(null!=a.blockHeight){var n=-1;e.txids.length>0&&(n=a.tx.findIndex(function(t){return t.txid===e.txids[0]})),M.a.info({message:a.blockHeight,description:"delay: "+e.getDelay(a.blockTime)+"/"+e.getDelay(a.blockInsertTime)+"/"+e.getDelay(a.svrSystemTime)+"||txidIndex:"+n});var r=e.blockDatas;-1==r[0].blockHeight&&r.shift(),r.length>=50&&r.pop();var s=0;r.length>0&&(s=a.blockTime-r[0].blockTime);var o=a;o.timeDiff=s,o.txidIndex=n,o.txCount=a.tx.length,r.unshift(o),e.pushEvent("newBlockEvent",o),e.blockDatas=r,e.lastBlockTime=a.blockTime}}}}}),w=Object(G.a)(n.prototype,"init",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){console.log("this is init"),window.addEventListener("Teemo.NEO.READY",function(){var t=Object(W.a)(B.a.mark(function t(a){return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("inject READY "),M.a.success({message:"Teemo",description:"Teemo.NEO.READY"}),e.isTeemoReady=!0,Teemo.NEO.getAccount().then(function(t){console.log("account",t),e.updateAddress(t.address)}).catch(function(t){console.log("account",t),e.isConnected=!1}),t.t0=e,t.next=7,Teemo.NEO.getNetworks();case 7:t.t1=t.sent.defaultNetwork,t.t0.updateNetwork.call(t.t0,t.t1),e.socketInit();case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),window.addEventListener("Teemo.NEO.NETWORK_CHANGED",function(t){console.log("NETWORK_CHANGED"),console.log(t),e.updateNetwork(t.detail.defaultNetwork),e.socketInit()}),window.addEventListener("Teemo.NEO.CONNECTED",function(){var t=Object(W.a)(B.a.mark(function t(a){return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("CONNECTED"),console.log(a),M.a.success({message:"Teemo",description:"Teemo.NEO.CONNECTED"}),e.isConnected=!0,e.updateAddress(a.detail.address),t.t0=e,t.next=8,Teemo.NEO.getNetworks();case 8:t.t1=t.sent.defaultNetwork,t.t0.updateNetwork.call(t.t0,t.t1);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),window.addEventListener("Teemo.NEO.DISCONNECTED",function(t){console.log("DISCONNECTED"),console.log(t),M.a.warning({message:"Teemo",description:"Teemo.NEO.DISCONNECTED"}),e.isConnected=!1,e.updateAddress("A**********************"),e.updateNetwork("TestNet")}),window.addEventListener("Teemo.NEO.ACCOUNT_CHANGED",function(e){console.log("ACCOUNT_CHANGED"),console.log(e),M.a.warning({message:"Teemo",description:"Teemo.NEO.ACCOUNT_CHANGED"})})}}}),n),U=a(118),V=a(229),F=a(224),P=a(117),q=function e(t){var a=this;Object(C.a)(this,e),this.store=void 0,this.getBlock=function(){var e=Object(W.a)(B.a.mark(function e(t){var n,r;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.store.rpcUrl+"?jsonrpc=2.0&method=getblock&params=["+t+",1]&id=1",{});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.store=t};q.getAddressFromScriptHash=function(){},q.hex2a=function(e){for(var t=e.toString(),a="",n=0;n<t.length&&"00"!==t.substr(n,2);n+=2)a+=String.fromCharCode(parseInt(t.substr(n,2),16));return a},q.hex2Int=function(e){return""==e?0:parseInt(q.byte2Hex(q.hex2Byte(e).reverse()),16)},q.hex2TimeStr=function(e){return q.timetrans(parseInt(q.byte2Hex(q.hex2Byte(e).reverse()),16))},q.hexReverse=function(e){return q.byte2Hex(q.hex2Byte(e).reverse())},q.byte2Hex=function(e){if(!e)return"";for(var t="",a=0;a<e.length;a++){var n=(255&e[a]).toString(16);t+=n=1===n.length?"0"+n:n}return t.toLowerCase()},q.hex2Byte=function(e){if(!e)return new Uint8Array;for(var t=[],a=0,n=e.length;a<n;a+=2)t.push(parseInt(e.substr(a,2),16));return new Uint8Array(t)},q.timetrans=function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+" ")+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+((t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},q.sec2HMS=function(e){var t=0,a=0,n=0;e%3600>0&&(e-=3600*(t=parseInt((e/3600).toString()))),e%60>0&&(e-=60*(a=parseInt((e/60).toString()))),n=e;return t+":"+(a<10?"0"+a:a.toString())+":"+(n<10?"0"+n:n.toString())};var Y,K=q,$=function e(t){var a=this;Object(C.a)(this,e),this.store=void 0,this.invokeRead_nameHashArray=void 0,this.namehash=function(){var e=Object(W.a)(B.a.mark(function e(t){var n,r,s,o,i,c,l,u;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n="",a.invokeRead_nameHashArray.arguments[0].value=[],r=!0,s=!1,o=void 0,e.prev=5,i=t.split(".").reverse()[Symbol.iterator]();!(r=(c=i.next()).done);r=!0)l=c.value,a.invokeRead_nameHashArray.arguments[0].value.push({type:"String",value:l});e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),s=!0,o=e.t0;case 13:e.prev=13,e.prev=14,r||null==i.return||i.return();case 16:if(e.prev=16,!s){e.next=19;break}throw o;case 19:return e.finish(16);case 20:return e.finish(13);case 21:return e.next=23,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(a.invokeRead_nameHashArray)));case 23:return u=e.sent,n=u.stack[0].value,e.abrupt("return",n);case 26:case"end":return e.stop()}},e,null,[[5,9,13,21],[14,,16,20]])}));return function(t){return e.apply(this,arguments)}}(),this.store=t,this.invokeRead_nameHashArray={scriptHash:t.scriptHash.nns_domaincenter,operation:"nameHashArray",arguments:[{type:"Array",value:[]}],network:t.network}},Q=Object(P.a)(Y=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).NNSh=new $(a.props.store),a.state={resData:"{}"},a}return Object(j.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return O.a.createElement(O.a.Fragment,null,O.a.createElement(U.a,{tip:"\u8fde\u63a5Teemo\u2026\u2026",spinning:!this.props.store.isTeemoReady},O.a.createElement("p",null,this.props.title),O.a.createElement("p",null,this.props.store.address),O.a.createElement("p",null,this.props.store.network,"||",this.props.store.rpcUrl,"||",this.props.store.webSocketURL,"||isConnected:",this.props.store.isConnected.toString(),"||",this.props.store.nns),O.a.createElement("pre",null,JSON.stringify(this.props.store.scriptHash,null,2)),O.a.createElement("div",null,O.a.createElement("div",{className:"demo-loading-container"},O.a.createElement(U.a,null),O.a.createElement("p",null,"LastWSmsg: ",this.props.store.lastWSmsgSec,"s"),O.a.createElement("p",null,"LastBlockTime: ",K.timetrans(this.props.store.lastBlockTime),"(before ",K.sec2HMS(parseInt(((new Date).getTime()/1e3-this.props.store.lastBlockTime).toFixed(0))),")")),O.a.createElement(V.a,{bordered:!0,dataSource:this.props.store.blockDatas,pagination:{onChange:function(e){console.log(e)},pageSize:5},renderItem:function(e){return O.a.createElement(V.a.Item,{key:e.id},O.a.createElement(V.a.Item.Meta,{avatar:O.a.createElement(F.a,{src:"https://neo-cdn.azureedge.net/images/favicon.png"}),title:e.blockHeight,description:e.blockHash+" tx:"+e.txCount}),O.a.createElement("div",null,"(",e.timeDiff+"s",")",K.timetrans(e.blockTime)))}}))))}}]),t}(O.a.Component))||Y,X=a(231),Z=a(71),ee=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={resData:"{}"},a.butGetInvokeReadClick=function(){var e=Object(W.a)(B.a.mark(function e(t){var n,r,s,o;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a.props.store.scriptHash.nns_domaincenter,e.next=3,new $(a.props.store).namehash(a.props.store.nns);case 3:return e.t1=e.sent,e.t2={type:"ByteArray",value:e.t1},e.t3=[e.t2],e.t4=a.props.store.network,n={scriptHash:e.t0,operation:"getOwnerInfo",arguments:e.t3,network:e.t4},e.next=10,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(n)));case 10:if(r=e.sent,s=r.stack[0].value,(o={owner:s[0].value,register:s[1].value,resolver:s[2].value,TTL:s[3].value,parentOwner:s[4].value,domain:s[5].value,parenthash:s[6].value,root:s[7].value}).domain=K.hex2a(o.domain),o.TTL=K.hex2TimeStr(o.TTL),""==o.owner){e.next=19;break}return e.next=18,Teemo.NEO.getAddressFromScriptHash(K.byte2Hex(K.hex2Byte(o.owner).reverse()));case 18:o.owner=e.sent;case 19:a.setState({resData:JSON.stringify(o,null,2)});case 20:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(j.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return O.a.createElement(O.a.Fragment,null,O.a.createElement("p",null,this.props.title),O.a.createElement(X.a,{placeholder:"\u8f93\u5165NSS\u57df\u540d",onChange:function(t){e.props.store.updateNNS(t.target.value)},defaultValue:this.props.store.nns}),O.a.createElement(Z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u83b7\u53d6NNS\u6240\u6709\u8005\u4fe1\u606f"),O.a.createElement("pre",null,this.state.resData))}}]),t}(O.a.Component),te=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={resData:"{}"},a.butGetInvokeReadClick=function(){var e=Object(W.a)(B.a.mark(function e(t){var n,r;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a.props.store.scriptHash.nns_resolver,e.t1={type:"String",value:"addr"},e.next=4,new $(a.props.store).namehash(a.props.store.nns);case 4:return e.t2=e.sent,e.t3={type:"ByteArray",value:e.t2},e.t4=[e.t1,e.t3],e.t5=a.props.store.network,n={scriptHash:e.t0,operation:"resolve",arguments:e.t4,network:e.t5},e.next=11,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(n)));case 11:r=e.sent,a.setState({resData:""==K.hex2a(r.stack[0].value)?"\u672a\u6620\u5c04":K.hex2a(r.stack[0].value)});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(j.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return O.a.createElement(O.a.Fragment,null,O.a.createElement("p",null,this.props.title),O.a.createElement(X.a,{placeholder:"\u8f93\u5165NSS\u57df\u540d",onChange:function(t){e.props.store.updateNNS(t.target.value)},defaultValue:this.props.store.nns}),O.a.createElement(Z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u89e3\u6790NNS"),O.a.createElement("pre",null,this.state.resData))}}]),t}(O.a.Component),ae=a(225),ne=a(226),re=a(232),se=a(227),oe=a(233),ie=a(228),ce=a(235),le=a(237),ue=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={resDataRead:"{}",reqDataWrite:"{}",resDataWrite:"{}",inputAmount:0,loadingR:!0,loadingW:!1,CGASBalance:0,auctionBalance:0,bidBalance:0,auctionDay:0,auctionStateInfo:{id:"",auctionStarter:"",parenthash:"",domain:"",domainTTL:"",startBlockSelling:0,endBlock:"",maxPrice:"",maxBuyer:"",lastBlock:""},CGASopValue:0,drawerVisible:!1},a.intervalID=void 0,a.doOnEvent=function(e){console.log("newBlockEvent",e),e.detail.txidIndex>-1&&a.getInvokeRead_getBanlance()},a.calcAuctionDay=function(){var e=Object(W.a)(B.a.mark(function e(t){var n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new K(a.props.store).getBlock(t);case 2:return n=e.sent.result.time,e.abrupt("return",((new Date).getTime()/1e3-n)/60/5);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getInvokeRead_getBanlance=Object(W.a)(B.a.mark(function e(){var t,n,r,s,o,i,c,l,u;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={scriptHash:a.props.store.scriptHash.NEP_5_CGAS,operation:"balanceOf",arguments:[{type:"Address",value:a.props.store.address}],network:a.props.store.network},n={scriptHash:a.props.store.scriptHash.nns_auction,operation:"balanceOf",arguments:[{type:"Address",value:a.props.store.address}],network:a.props.store.network},e.t0=a.props.store.scriptHash.nns_auction,e.next=5,new $(a.props.store).namehash(a.props.store.nns);case 5:return e.t1=e.sent,e.t2={type:"ByteArray",value:e.t1},e.t3=[e.t2],e.t4=a.props.store.network,r={scriptHash:e.t0,operation:"getAuctionStateByFullhash",arguments:e.t3,network:e.t4},s={scriptHash:a.props.store.scriptHash.nns_auction,operation:"balanceOfBid",arguments:[{type:"Address",value:a.props.store.address},{type:"ByteArray",value:""}],network:a.props.store.network},(o={group:[{}]}).group.pop(),o.group.push(t),o.group.push(n),o.group.push(r),e.next=18,Teemo.NEO.invokeReadGroup(JSON.parse(JSON.stringify(o)));case 18:if(null==(i=e.sent).stack[0]){e.next=49;break}return c=i.stack[2].value,l={id:c[0].value,auctionStarter:c[1].value,parenthash:c[2].value,domain:c[3].value,domainTTL:c[4].value,startBlockSelling:c[5].value,endBlock:c[6].value,maxPrice:c[7].value,maxBuyer:c[8].value,lastBlock:c[9].value},e.next=24,Teemo.NEO.getAddressFromScriptHash(K.hexReverse(l.auctionStarter));case 24:if(l.auctionStarter=e.sent,l.domain=K.hex2a(l.domain),l.domainTTL=K.hex2TimeStr(l.domainTTL),l.maxPrice=l.maxPrice/Math.pow(10,8),""==l.maxBuyer){e.next=32;break}return e.next=31,Teemo.NEO.getAddressFromScriptHash(K.hexReverse(l.maxBuyer));case 31:l.maxBuyer=e.sent;case 32:return s.arguments[1].value=l.id,e.next=35,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(s)));case 35:return u=e.sent,e.t5=a,e.t6=K.hex2Int(i.stack[0].value)/Math.pow(10,8),e.t7=K.hex2Int(i.stack[1].value)/Math.pow(10,8),e.t8=K.hex2Int(u.stack[0].value)/Math.pow(10,8),e.t9=l,e.next=43,a.calcAuctionDay(l.startBlockSelling);case 43:e.t10=e.sent,e.t11=JSON.stringify(l,null,2),e.t12={CGASBalance:e.t6,auctionBalance:e.t7,bidBalance:e.t8,auctionStateInfo:e.t9,auctionDay:e.t10,resDataRead:e.t11,loadingR:!1},e.t5.setState.call(e.t5,e.t12),e.next=50;break;case 49:a.setState({resDataRead:"\u67e5\u8be2\u5f02\u5e38",loadingR:!1});case 50:case"end":return e.stop()}},e)})),a.butGetInvokeReadClick=function(){var e=Object(W.a)(B.a.mark(function e(t){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.getInvokeRead_getBanlance();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.butInvoke_doCGASin_click=Object(W.a)(B.a.mark(function e(){var t,n,r,s;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a.props.store.scriptHash.NEP_5_CGAS,e.t1={type:"Address",value:a.props.store.address},e.next=4,Teemo.NEO.getAddressFromScriptHash(a.props.store.scriptHash.nns_auction);case 4:return e.t2=e.sent,e.t3={type:"Address",value:e.t2},e.t4={type:"Integer",value:a.state.CGASopValue*Math.pow(10,8)},e.t5=[e.t1,e.t3,e.t4],e.t6=a.props.store.network,t={scriptHash:e.t0,operation:"transfer",arguments:e.t5,fee:"0",description:"NNS\u7ade\u62cd\u5145\u503cCGAS\u8f6c\u8d26",network:e.t6},n={scriptHash:a.props.store.scriptHash.nns_auction,operation:"setmoneyin",arguments:[{type:"Hook_Txid",value:0}],fee:"0",description:"NNS\u7ade\u62cd\u5145\u503c\u786e\u8ba4",network:a.props.store.network},(r={merge:!0,group:[{}]}).group.pop(),r.group.push(t),r.group.push(n),a.setState({loadingW:!0}),e.next=18,Teemo.NEO.invokeGroup(JSON.parse(JSON.stringify(r)));case 18:(s=e.sent).forEach(function(e){a.props.store.addTxidSended(e.txid)}),a.setState({reqDataWrite:JSON.stringify(r,null,2),resDataWrite:JSON.stringify(s,null,2),loadingW:!1,loadingR:!0});case 21:case"end":return e.stop()}},e)})),a.butInvoke_doCGASout_click=Object(W.a)(B.a.mark(function e(){var t,n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={scriptHash:a.props.store.scriptHash.nns_auction,operation:"getmoneyback",arguments:[{type:"Address",value:a.props.store.address},{type:"Integer",value:a.state.CGASopValue*Math.pow(10,8)}],fee:"0",description:"NNS\u7ade\u62cdCGAS\u63d0\u53d6",network:a.props.store.network},a.setState({loadingW:!0}),e.next=4,Teemo.NEO.invoke(JSON.parse(JSON.stringify(t)));case 4:n=e.sent,a.props.store.addTxidSended(n.txid),a.setState({reqDataWrite:JSON.stringify(t,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 7:case"end":return e.stop()}},e)})),a.butInvoke_doStartAuction_click=Object(W.a)(B.a.mark(function e(){var t,n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a.props.store.scriptHash.nns_auction,e.t1={type:"Address",value:a.props.store.address},e.next=4,new $(a.props.store).namehash(a.props.store.nns.split(".")[1]);case 4:return e.t2=e.sent,e.t3={type:"ByteArray",value:e.t2},e.t4={type:"String",value:a.props.store.nns.split(".")[0]},e.t5=[e.t1,e.t3,e.t4],e.t6=a.props.store.network,t={scriptHash:e.t0,operation:"startAuction",arguments:e.t5,fee:"0",description:"NNS\u7ade\u62cd\u5f00\u6807",network:e.t6},a.setState({loadingW:!0}),e.next=13,Teemo.NEO.invoke(JSON.parse(JSON.stringify(t)));case 13:n=e.sent,a.props.store.addTxidSended(n.txid),a.setState({reqDataWrite:JSON.stringify(t,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 16:case"end":return e.stop()}},e)})),a.butInvoke_doBid_click=Object(W.a)(B.a.mark(function e(){var t,n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={scriptHash:a.props.store.scriptHash.nns_auction,operation:"raise",arguments:[{type:"Address",value:a.props.store.address},{type:"ByteArray",value:a.state.auctionStateInfo.id},{type:"Integer",value:(a.state.inputAmount*Math.pow(10,8)).toString()}],fee:"0",description:"NNS\u7ade\u62cd\u52a0\u4ef7",network:a.props.store.network},console.log(t),a.setState({loadingW:!0}),e.next=5,Teemo.NEO.invoke(JSON.parse(JSON.stringify(t)));case 5:n=e.sent,a.props.store.addTxidSended(n.txid),a.setState({reqDataWrite:JSON.stringify(t,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 8:case"end":return e.stop()}},e)})),a.butInvoke_doBidSettlementAndCollect_click=Object(W.a)(B.a.mark(function e(){var t,n,r,s;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={scriptHash:a.props.store.scriptHash.nns_auction,operation:"bidSettlement",arguments:[{type:"Address",value:a.props.store.address},{type:"ByteArray",value:a.state.auctionStateInfo.id}],fee:"0",description:"NNS\u7ade\u62cd\u57df\u540d\u9886\u53d6",network:a.props.store.network},n={scriptHash:a.props.store.scriptHash.nns_auction,operation:"collectDomain",arguments:[{type:"Address",value:a.props.store.address},{type:"ByteArray",value:a.state.auctionStateInfo.id}],fee:"0",description:"NNS\u7ade\u62cd\u57df\u540d\u9886\u53d6",network:a.props.store.network},(r={merge:!1,group:[{}]}).group.pop(),r.group.push(t),r.group.push(n),a.setState({loadingW:!0}),e.next=9,Teemo.NEO.invokeGroup(JSON.parse(JSON.stringify(r)));case 9:(s=e.sent).forEach(function(e){a.props.store.addTxidSended(e.txid)}),a.setState({reqDataWrite:JSON.stringify(r,null,2),resDataWrite:JSON.stringify(s,null,2),loadingW:!1,loadingR:!0});case 12:case"end":return e.stop()}},e)})),a.butInvoke_doRenew_click=Object(W.a)(B.a.mark(function e(){var t,n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a.props.store.scriptHash.nns_auction,e.t1={type:"Address",value:a.props.store.address},e.next=4,new $(a.props.store).namehash(a.props.store.nns.split(".")[1]);case 4:return e.t2=e.sent,e.t3={type:"ByteArray",value:e.t2},e.t4={type:"String",value:a.props.store.nns.split(".")[0]},e.t5=[e.t1,e.t3,e.t4],e.t6=a.props.store.network,t={scriptHash:e.t0,operation:"renewDomain",arguments:e.t5,fee:"0",description:"NNS\u57df\u540d\u7eed\u671f",network:e.t6},console.log(t),a.setState({loadingW:!0}),e.next=14,Teemo.NEO.invoke(JSON.parse(JSON.stringify(t)));case 14:n=e.sent,a.props.store.addTxidSended(n.txid),a.setState({reqDataWrite:JSON.stringify(t,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 17:case"end":return e.stop()}},e)})),a}return Object(j.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(Object(W.a)(B.a.mark(function t(){return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,e.calcAuctionDay(e.state.auctionStateInfo.startBlockSelling);case 3:t.t1=t.sent,t.t2={auctionDay:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}},t)})),1e3),this.getInvokeRead_getBanlance(),window.addEventListener("newBlockEvent",this.doOnEvent,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("newBlockEvent",this.doOnEvent,!1),clearInterval(this.intervalID)}},{key:"CGASopChange",value:function(e){this.setState({CGASopValue:e.target.value})}},{key:"amountChange",value:function(e){this.setState({inputAmount:e})}},{key:"render",value:function(){var e=this;return O.a.createElement(O.a.Fragment,null,O.a.createElement("p",null,this.props.title),O.a.createElement(ae.a,{gutter:16},O.a.createElement(ne.a,{span:8},O.a.createElement(U.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},O.a.createElement(re.a,{title:"\u94b1\u5305\u8d26\u6237",value:this.state.CGASBalance,suffix:"CGAS",prefix:O.a.createElement(R.a,{type:"money-collect"})}))),O.a.createElement(ne.a,{span:8},O.a.createElement(ae.a,{gutter:16},O.a.createElement(ne.a,{span:8},O.a.createElement(Z.a,{onClick:this.butInvoke_doCGASout_click},O.a.createElement(R.a,{type:"left"}),"\u63d0\u53d6")),O.a.createElement(ne.a,{span:8},O.a.createElement(X.a,{placeholder:"\u8f93\u5165\u91d1\u989d",onChange:this.CGASopChange.bind(this),defaultValue:this.state.CGASopValue.toString()})),O.a.createElement(ne.a,{span:8},O.a.createElement(Z.a,{onClick:this.butInvoke_doCGASin_click},"\u5145\u503c",O.a.createElement(R.a,{type:"right"}))))),O.a.createElement(ne.a,{span:8},O.a.createElement(U.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},O.a.createElement(re.a,{title:"\u5408\u7ea6\u8d26\u6237",value:this.state.auctionBalance,suffix:"CGAS",prefix:O.a.createElement(R.a,{type:"money-collect"})})))),O.a.createElement(X.a,{placeholder:"\u8f93\u5165\u5730\u5740",onChange:function(t){e.props.store.updateAddress(t.target.value)},defaultValue:this.props.store.address}),O.a.createElement(X.a,{placeholder:"\u8f93\u5165NSS\u57df\u540d",onChange:function(t){e.props.store.updateNNS(t.target.value)},defaultValue:this.props.store.nns}),O.a.createElement(Z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u5237\u65b0\u6570\u636e"),O.a.createElement(se.a,{type:"vertical"}),O.a.createElement(Z.a,{onClick:this.butInvoke_doStartAuction_click},"\u5f00\u6807"),O.a.createElement(se.a,{type:"vertical"}),O.a.createElement(oe.a,{min:0,max:this.state.auctionBalance,step:.1,onChange:this.amountChange.bind(this)}),"=>",O.a.createElement(Z.a,{onClick:this.butInvoke_doBid_click},"\u52a0\u4ef7"),O.a.createElement(se.a,{type:"vertical"}),O.a.createElement(Z.a,{onClick:this.butInvoke_doBidSettlementAndCollect_click},"\u7ed3\u7b97\u4e0e\u9886\u53d6"),O.a.createElement(se.a,{type:"vertical"}),O.a.createElement(Z.a,{onClick:this.butInvoke_doRenew_click,disabled:!(this.state.auctionDay>275)},"\u7eed\u671f",(this.state.auctionDay-275).toFixed(2)),O.a.createElement(se.a,null),O.a.createElement(U.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},O.a.createElement(ae.a,{type:"flex",align:"middle",gutter:16},O.a.createElement(ne.a,{span:3},O.a.createElement(re.a,{title:"\u5f00\u62cd\u5929\u6570",value:this.state.auctionDay.toFixed(2),suffix:"\u5929",prefix:O.a.createElement(R.a,{type:"clock-circle"})})),O.a.createElement(ne.a,{span:8},O.a.createElement(ie.a,{checked:this.state.drawerVisible,onChange:function(){e.setState({drawerVisible:!e.state.drawerVisible})}}),"\u663e\u793a\u65f6\u95f4\u8f74"),O.a.createElement(ne.a,{span:13},O.a.createElement(re.a,{title:"\u52a0\u4ef7\u603b\u6570",value:this.state.bidBalance,suffix:"CGAS",prefix:O.a.createElement(R.a,{type:"money-collect"})}))),O.a.createElement(ce.a,{title:"\u7ade\u62cd\u9636\u6bb5",placement:"left",closable:!1,onClose:function(){e.setState({drawerVisible:!1})},visible:this.state.drawerVisible},O.a.createElement(le.a,null,O.a.createElement(le.a.Item,{color:this.state.auctionDay>0?"green":"blue"},"\u786e\u5b9a\u671f\uff081-2\uff09"),O.a.createElement(le.a.Item,{color:this.state.auctionDay>2?"green":"blue"},"\u786e\u5b9a\u671f\uff083\uff09"),O.a.createElement(le.a.Item,{color:this.state.auctionDay>3?"green":"blue"},"\u968f\u673a\u671f\uff084-5\uff09"),O.a.createElement(le.a.Item,{color:this.state.auctionDay>5?"green":"blue"},"\u7ade\u62cd\u7ed3\u675f\uff085\uff09"),O.a.createElement(le.a.Item,{color:this.state.auctionDay>275?"green":"blue"},"\u7eed\u671f\u671f\uff08365-90\uff09"),O.a.createElement(le.a.Item,{color:this.state.auctionDay>365?"green":"blue"},"\u5230\u671f\uff08365\uff09"))),O.a.createElement("pre",null,this.state.resDataRead)),O.a.createElement(U.a,{tip:"\u8bf7\u6c42\u4e2d",spinning:this.state.loadingW},O.a.createElement("pre",null,this.state.resDataWrite)))}}]),t}(O.a.Component),pe=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={resDataRead:"{}",reqDataWrite:"{}",resDataWrite:"{}",loadingR:!1,loadingW:!1},a.doOnEvent=function(e){console.log("newBlockEvent",e),e.detail.txidIndex>-1&&a.getInvokeRead()},a.getInvokeRead=Object(W.a)(B.a.mark(function e(){var t,n,r,s;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t={scriptHash:a.props.store.scriptHash.nns_credit,operation:"getCreditInfo",arguments:[{type:"Address",value:""}],network:a.props.store.network}).arguments[0].value=a.props.store.address,console.log(JSON.stringify(t,null,2)),e.next=5,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(t)));case 5:null!=(n=e.sent).stack[0]?(r=n.stack[0].value,(s={namehash:r[0].value,fullDomainName:r[1].value,TTL:r[2].value}).fullDomainName=K.hex2a(s.fullDomainName),s.TTL=K.hex2TimeStr(s.TTL),a.setState({resDataRead:JSON.stringify(s,null,2),loadingR:!1})):a.setState({resDataRead:"\u4ece\u672a\u6620\u5c04",loadingR:!1});case 7:case"end":return e.stop()}},e)})),a.butGetInvokeReadClick=function(){var e=Object(W.a)(B.a.mark(function e(t){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.getInvokeRead();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.butInvokeCreditAuthenticateClick=function(){var e=Object(W.a)(B.a.mark(function e(t){var n,r,s,o,i,c,l,u;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for((n={scriptHash:a.props.store.scriptHash.nns_credit,operation:"authenticate",arguments:[{type:"Address",value:""},{type:"Array",value:[]}],fee:"0",description:"NNS\u53cd\u5411\u89e3\u6790\u7ed1\u5b9a",network:a.props.store.network}).arguments[0].value=a.props.store.address,n.arguments[1].value=[],r=!0,s=!1,o=void 0,e.prev=6,i=a.props.store.nns.split(".").reverse()[Symbol.iterator]();!(r=(c=i.next()).done);r=!0)l=c.value,n.arguments[1].value.push({type:"String",value:l});e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),s=!0,o=e.t0;case 14:e.prev=14,e.prev=15,r||null==i.return||i.return();case 17:if(e.prev=17,!s){e.next=20;break}throw o;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return a.setState({loadingW:!0}),e.next=25,Teemo.NEO.invoke(JSON.parse(JSON.stringify(n)));case 25:u=e.sent,a.props.store.addTxidSended(u.txid),a.setState({reqDataWrite:JSON.stringify(n,null,2),resDataWrite:JSON.stringify(u,null,2),loadingW:!1,loadingR:!0});case 28:case"end":return e.stop()}},e,null,[[6,10,14,22],[15,,17,21]])}));return function(t){return e.apply(this,arguments)}}(),a.butInvokeCreditRevokeClick=function(){var e=Object(W.a)(B.a.mark(function e(t){var n,r;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n={scriptHash:a.props.store.scriptHash.nns_credit,operation:"revoke",arguments:[{type:"Address",value:""}],fee:"0",description:"NNS\u53cd\u5411\u89e3\u6790\u89e3\u7ed1",network:a.props.store.network}).arguments[0].value=a.props.store.address,a.setState({loadingW:!0}),e.next=5,Teemo.NEO.invoke(JSON.parse(JSON.stringify(n)));case 5:r=e.sent,a.props.store.addTxidSended(r.txid),a.setState({reqDataWrite:JSON.stringify(n,null,2),resDataWrite:JSON.stringify(r,null,2),loadingW:!1,loadingR:!0});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(j.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("newBlockEvent",this.doOnEvent,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("newBlockEvent",this.doOnEvent,!1)}},{key:"render",value:function(){var e=this;return O.a.createElement(O.a.Fragment,null,O.a.createElement("p",null,this.props.title),O.a.createElement(X.a,{placeholder:"\u8f93\u5165\u5730\u5740",onChange:function(t){e.props.store.updateAddress(t.target.value)},defaultValue:this.props.store.address}),O.a.createElement(X.a,{placeholder:"\u8f93\u5165NSS\u57df\u540d",onChange:function(t){e.props.store.updateNNS(t.target.value)},defaultValue:this.props.store.nns}),O.a.createElement(Z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u83b7\u53d6NNS\u53cd\u5411\u89e3\u6790\u4fe1\u606f"),O.a.createElement(Z.a,{onClick:this.butInvokeCreditAuthenticateClick},"\u7ed1\u5b9a"),O.a.createElement(Z.a,{onClick:this.butInvokeCreditRevokeClick},"\u89e3\u7ed1"),O.a.createElement(U.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},O.a.createElement("pre",null,this.state.resDataRead)),O.a.createElement(U.a,{tip:"\u8bf7\u6c42\u4e2d",spinning:this.state.loadingW},O.a.createElement("pre",null,this.state.resDataWrite)))}}]),t}(O.a.Component),de=I.a.Header,me=I.a.Content,he=I.a.Footer,fe=I.a.Sider,ge=new z,ve=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(T.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={menuID:1},a.menuClick=function(e){console.log("menu Click",e),a.setState({menuID:e.key})},a}return Object(j.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=null;return e=1==this.state.menuID?O.a.createElement(Q,{store:ge,title:"default Page"}):2==this.state.menuID?O.a.createElement(ee,{store:ge,title:"NNS Domain Center"}):3==this.state.menuID?O.a.createElement(te,{store:ge,title:"NNS Resolver"}):4==this.state.menuID?O.a.createElement(ue,{store:ge,title:"NNS Auction(Only *.test)"}):5==this.state.menuID?O.a.createElement(pe,{store:ge,title:"NNS Credit"}):O.a.createElement("p",null,"div_defult"),O.a.createElement(I.a,null,O.a.createElement(fe,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)}},O.a.createElement("div",{className:"logo"}),O.a.createElement(H.a,{onClick:this.menuClick,theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},O.a.createElement(H.a.Item,{key:"1"},O.a.createElement(R.a,{type:"file"}),O.a.createElement("span",{className:"nav-text"},"Default Page")),O.a.createElement(H.a.Item,{key:"2"},O.a.createElement(R.a,{type:"file"}),O.a.createElement("span",{className:"nav-text"},"NNS Center")),O.a.createElement(H.a.Item,{key:"3"},O.a.createElement(R.a,{type:"file"}),O.a.createElement("span",{className:"nav-text"},"NNS resolver")),O.a.createElement(H.a.Item,{key:"4"},O.a.createElement(R.a,{type:"file"}),O.a.createElement("span",{className:"nav-text"},"NNS Auction")),O.a.createElement(H.a.Item,{key:"5"},O.a.createElement(R.a,{type:"file"}),O.a.createElement("span",{className:"nav-text"},"NNS Credit")))),O.a.createElement(I.a,null,O.a.createElement(de,{style:{background:"#fff",padding:0}},O.a.createElement("h1",null,"--- NNS Teemo Demo ---")),O.a.createElement(me,{style:{margin:"24px 16px 0"}},O.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},e)),O.a.createElement(he,{style:{textAlign:"center"}},"NNS \xa92019 Created by NEL")))}}]),t}(E.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));x.a.render(O.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[128,1,2]]]);
//# sourceMappingURL=main.847d2f1c.chunk.js.map