(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a(222)},134:function(e,t,a){},137:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n,r,s,i,o,c,l,u,p,d,h=a(1),m=a.n(h),g=a(5),v=a.n(g),f=(a(134),a(9)),k=a.n(f),S=a(11),y=a(127),b=a(18),N=a(23),E=a(25),w=a(24),O=a(26),x=(a(137),a(235)),T=a(237),A=a(231),C=a(10),D=a(30),I=a(31),H=(a(138),a(14)),j=(n=function e(t){var a=this;Object(b.a)(this,e),this.webSocketURL=void 0,this.updateLastWSmsgSec=function(){a.lastWSmsgSec=((new Date).getTime()-a.lastWSmsgTime)/1e3,a.lastWSmsgSec>75&&(a.lastWSmsgTime=(new Date).getTime(),a.lastWSmsgSec=0,a.socketInit()),a.socketReadyState=a.socket.readyState},this.socket=void 0,this.time=(new Date).getTime(),Object(D.a)(this,"socketReadyState",r,this),Object(D.a)(this,"socketMsgs",s,this),Object(D.a)(this,"blockDatas",i,this),Object(D.a)(this,"lastBlockTime",o,this),Object(D.a)(this,"lastWSmsgTime",c,this),Object(D.a)(this,"lastWSmsgSec",l,this),Object(D.a)(this,"txids",u,this),Object(D.a)(this,"addTxidSended",p,this),this.pushEvent=function(e,t){var a=new CustomEvent(e,{detail:t});window.dispatchEvent(a)},this.getDelay=function(e){return parseInt(((new Date).getTime()/1e3-e).toFixed(0))+"s"},Object(D.a)(this,"socketInit",d,this),this.webSocketURL=t,setInterval(this.updateLastWSmsgSec,1e3),this.socketInit()},r=Object(I.a)(n.prototype,"socketReadyState",[H.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),s=Object(I.a)(n.prototype,"socketMsgs",[H.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(I.a)(n.prototype,"blockDatas",[H.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{blockHeight:-1,blockTime:0,blockHash:"",timeDiff:0}]}}),o=Object(I.a)(n.prototype,"lastBlockTime",[H.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),c=Object(I.a)(n.prototype,"lastWSmsgTime",[H.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return(new Date).getTime()}}),l=Object(I.a)(n.prototype,"lastWSmsgSec",[H.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=Object(I.a)(n.prototype,"txids",[H.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=Object(I.a)(n.prototype,"addTxidSended",[H.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.txids.unshift("0x"+t)}}}),d=Object(I.a)(n.prototype,"socketInit",[H.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.blockDatas=[{blockHeight:-1,blockTime:0,blockHash:"",timeDiff:0}],e.socket=new WebSocket(e.webSocketURL),e.socket.onclose=function(e){console.log(e),T.a.warning({message:"websocket",description:"close"})},e.socket.onerror=function(e){console.log(e),T.a.error({message:"websocket",description:"error"})},e.socket.onopen=function(t){console.log(t),e.socket.send("Hello Server!"),T.a.success({message:"websocket",description:"open"})},e.socket.onmessage=function(t){console.log(t),console.log(t.data),e.socketMsgs.unshift(t.data),e.lastWSmsgTime=(new Date).getTime(),e.time=(new Date).getTime();var a=JSON.parse(t.data).data;if(null!=a.blockHeight){var n=-1;e.txids.length>0&&(n=a.tx.findIndex(function(t){return t.txid===e.txids[0]})),T.a.info({message:a.blockHeight,description:"delay: "+e.getDelay(a.blockTime)+"/"+e.getDelay(a.blockInsertTime)+"/"+e.getDelay(a.svrSystemTime)+"||txidIndex:"+n});var r=e.blockDatas;-1==r[0].blockHeight&&r.shift(),r.length>=50&&r.pop();var s=0;r.length>0&&(s=a.blockTime-r[0].blockTime);var i=a;i.timeDiff=s,i.txidIndex=n,r.unshift(i),e.pushEvent("newBlockEvent",i),e.blockDatas=r,e.lastBlockTime=a.blockTime}}}}}),n),R=a(118),W=a(230),B=a(225),_=a(117),V=function e(){Object(b.a)(this,e)};V.getAddressFromScriptHash=function(){},V.getBlock=function(){var e=Object(S.a)(k.a.mark(function e(t){var a,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://test.nel.group:20332?jsonrpc=2.0&method=getblock&params=["+t+",1]&id=1",{});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),V.hex2a=function(e){for(var t=e.toString(),a="",n=0;n<t.length&&"00"!==t.substr(n,2);n+=2)a+=String.fromCharCode(parseInt(t.substr(n,2),16));return a},V.hex2Int=function(e){return""==e?0:parseInt(V.byte2Hex(V.hex2Byte(e).reverse()),16)},V.hex2TimeStr=function(e){return V.timetrans(parseInt(V.byte2Hex(V.hex2Byte(e).reverse()),16))},V.hexReverse=function(e){return V.byte2Hex(V.hex2Byte(e).reverse())},V.byte2Hex=function(e){if(!e)return"";for(var t="",a=0;a<e.length;a++){var n=(255&e[a]).toString(16);t+=n=1===n.length?"0"+n:n}return t.toLowerCase()},V.hex2Byte=function(e){if(!e)return new Uint8Array;for(var t=[],a=0,n=e.length;a<n;a+=2)t.push(parseInt(e.substr(a,2),16));return new Uint8Array(t)},V.timetrans=function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+" ")+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+((t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},V.sec2HMS=function(e){var t=0,a=0,n=0;e%3600>0&&(e-=3600*(t=parseInt((e/3600).toString()))),e%60>0&&(e-=60*(a=parseInt((e/60).toString()))),n=e;return t+":"+(a<10?"0"+a:a.toString())+":"+(n<10?"0"+n:n.toString())};var J,G=V,L={scriptHash:"",operation:"nameHashArray",arguments:[{type:"Array",value:[]}],network:"TestNet"},M=function e(t){Object(b.a)(this,e),this.namehash=function(){var e=Object(S.a)(k.a.mark(function e(t){var a,n,r,s,i,o,c,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(a="",L.arguments[0].value=[],n=!0,r=!1,s=void 0,e.prev=5,i=t.split(".").reverse()[Symbol.iterator]();!(n=(o=i.next()).done);n=!0)c=o.value,L.arguments[0].value.push({type:"String",value:c});e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),r=!0,s=e.t0;case 13:e.prev=13,e.prev=14,n||null==i.return||i.return();case 16:if(e.prev=16,!r){e.next=19;break}throw s;case 19:return e.finish(16);case 20:return e.finish(13);case 21:return e.next=23,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(L)));case 23:return l=e.sent,a=l.stack[0].value,e.abrupt("return",a);case 26:case"end":return e.stop()}},e,null,[[5,9,13,21],[14,,16,20]])}));return function(t){return e.apply(this,arguments)}}(),L.scriptHash=t.nns_domaincenter},F=Object(_.a)(J=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).NNSh=new M(a.props.scriptHash),a.state={resData:"{}"},a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,this.props.title),m.a.createElement("p",null,this.props.address),m.a.createElement("p",null,this.props.network),m.a.createElement("pre",null,JSON.stringify(this.props.scriptHash,null,2)),m.a.createElement("div",null,m.a.createElement("div",{className:"demo-loading-container"},m.a.createElement(R.a,null),m.a.createElement("p",null,"LastWSmsg: ",this.props.store.lastWSmsgSec,"s"),m.a.createElement("p",null,"LastBlockTime: ",G.timetrans(this.props.store.lastBlockTime),"(before ",G.sec2HMS(parseInt(((new Date).getTime()/1e3-this.props.store.lastBlockTime).toFixed(0))),")")),m.a.createElement(W.a,{bordered:!0,dataSource:this.props.store.blockDatas,pagination:{onChange:function(e){console.log(e)},pageSize:5},renderItem:function(e){return m.a.createElement(W.a.Item,{key:e.id},m.a.createElement(W.a.Item.Meta,{avatar:m.a.createElement(B.a,{src:"https://neo-cdn.azureedge.net/images/favicon.png"}),title:e.blockHeight,description:e.blockHash}),m.a.createElement("div",null,"(",e.timeDiff+"s",")",G.timetrans(e.blockTime)))}})))}}]),t}(m.a.Component))||J,q=a(232),z=a(71),P={scriptHash:"348387116c4a75e420663277d9c02049907128c7",operation:"getOwnerInfo",arguments:[{type:"ByteArray",value:""}],network:"TestNet"},U=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).NNSh=new M(a.props.scriptHash),a.state={resData:"{}",inputValue:"qmz.test"},a.butGetInvokeReadClick=function(){var e=Object(S.a)(k.a.mark(function e(t){var n,r,s;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.NNSh.namehash(a.state.inputValue);case 2:return P.arguments[0].value=e.sent,e.next=5,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(P)));case 5:return n=e.sent,r=n.stack[0].value,console.log(n),(s={owner:r[0].value,register:r[1].value,resolver:r[2].value,TTL:r[3].value,parentOwner:r[4].value,domain:r[5].value,parenthash:r[6].value,root:r[7].value}).domain=G.hex2a(s.domain),s.TTL=G.hex2TimeStr(s.TTL),e.next=13,Teemo.NEO.getAddressFromScriptHash(G.byte2Hex(G.hex2Byte(s.owner).reverse()));case 13:s.owner=e.sent,a.setState({resData:JSON.stringify(s,null,2)});case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"handelChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,this.props.title),m.a.createElement(q.a,{id:"NNSinput",placeholder:"\u8f93\u5165\u8981\u67e5\u8be2\u7684NSS\u57df\u540d",onChange:this.handelChange.bind(this),defaultValue:this.state.inputValue}),m.a.createElement(z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u83b7\u53d6NNS\u6240\u6709\u8005\u4fe1\u606f"),m.a.createElement("pre",null,this.state.resData))}}]),t}(m.a.Component),Y={scriptHash:"",operation:"resolve",arguments:[{type:"String",value:"addr"},{type:"ByteArray",value:""}],network:"TestNet"},K=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).NNSh=new M(a.props.scriptHash),a.state={resData:"{}",inputValue:"qmz.test"},a.butGetInvokeReadClick=function(){var e=Object(S.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.NNSh.namehash(a.state.inputValue);case 2:return Y.arguments[1].value=e.sent,e.next=5,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(Y)));case 5:n=e.sent,a.setState({resData:G.hex2a(n.stack[0].value)});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){Y.scriptHash=this.props.scriptHash.nns_resolver}},{key:"handelChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,this.props.title),m.a.createElement(q.a,{placeholder:"\u8f93\u5165\u8981\u67e5\u8be2\u7684NSS\u57df\u540d",onChange:this.handelChange.bind(this),defaultValue:this.state.inputValue}),m.a.createElement(z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u89e3\u6790NNS"),m.a.createElement("pre",null,this.state.resData))}}]),t}(m.a.Component),$=a(226),Q=a(227),X=a(233),Z=a(228),ee=a(234),te=a(229),ae=a(236),ne=a(238),re={scriptHash:"",operation:"balanceOf",arguments:[{type:"Address",value:""}],network:"TestNet"},se={scriptHash:"",operation:"balanceOf",arguments:[{type:"Address",value:""}],network:"TestNet"},ie={scriptHash:"",operation:"getAuctionStateByFullhash",arguments:[{type:"ByteArray",value:""}],network:"TestNet"},oe={scriptHash:"",operation:"balanceOfBid",arguments:[{type:"Address",value:""},{type:"ByteArray",value:""}],network:"TestNet"},ce={scriptHash:"",operation:"transfer",arguments:[{type:"Address",value:""},{type:"Address",value:""},{type:"Integer",value:0}],fee:"0",description:"NNS\u7ade\u62cd\u5145\u503cCGAS\u8f6c\u8d26",network:"TestNet"},le={scriptHash:"",operation:"setmoneyin",arguments:[{type:"Hook_Txid",value:0}],fee:"0",description:"NNS\u7ade\u62cd\u5145\u503c\u786e\u8ba4",network:"TestNet"},ue={scriptHash:"",operation:"getmoneyback",arguments:[{type:"Address",value:""},{type:"Integer",value:0}],fee:"0",description:"NNS\u7ade\u62cdCGAS\u63d0\u53d6",network:"TestNet"},pe={scriptHash:"",operation:"startAuction",arguments:[{type:"Address",value:""},{type:"ByteArray",value:""},{type:"String",value:""}],fee:"0",description:"NNS\u7ade\u62cd\u52a0\u4ef7",network:"TestNet"},de={scriptHash:"",operation:"raise",arguments:[{type:"Address",value:""},{type:"ByteArray",value:""},{type:"Integer",value:0}],fee:"0",description:"NNS\u7ade\u62cd\u5f00\u6807",network:"TestNet"},he={scriptHash:"",operation:"bidSettlement",arguments:[{type:"Address",value:""},{type:"ByteArray",value:""}],fee:"0",description:"NNS\u7ade\u62cd\u57df\u540d\u9886\u53d6",network:"TestNet"},me={scriptHash:"",operation:"collectDomain",arguments:[{type:"Address",value:""},{type:"ByteArray",value:""}],fee:"0",description:"NNS\u7ade\u62cd\u57df\u540d\u9886\u53d6",network:"TestNet"},ge={scriptHash:"",operation:"renewDomain",arguments:[{type:"Address",value:""},{type:"ByteArray",value:""},{type:"String",value:""}],fee:"0",description:"NNS\u57df\u540d\u7eed\u671f",network:"TestNet"},ve={scriptHash:"",operation:"authenticate",arguments:[{type:"Address",value:""},{type:"Array",value:[]}],fee:"0",description:"NNS\u53cd\u5411\u89e3\u6790\u7ed1\u5b9a",network:"TestNet"},fe={scriptHash:"",operation:"revoke",arguments:[{type:"Address",value:""}],fee:"0",description:"NNS\u53cd\u5411\u89e3\u6790\u89e3\u7ed1",network:"TestNet"},ke=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).NNSh=new M(a.props.scriptHash),a.state={resDataRead:"{}",reqDataWrite:"{}",resDataWrite:"{}",inputValueAddr:a.props.address,inputValueNns:"qmz.test",inputAmount:0,loadingR:!0,loadingW:!1,CGASBalance:0,auctionBalance:0,bidBalance:0,auctionDay:0,auctionStateInfo:{id:"",auctionStarter:"",parenthash:"",domain:"",domainTTL:"",startBlockSelling:0,endBlock:"",maxPrice:"",maxBuyer:"",lastBlock:""},CGASopValue:0,drawerVisible:!1},a.intervalID=void 0,a.doOnEvent=function(e){console.log("newBlockEvent",e),e.detail.txidIndex>-1&&a.getInvokeRead_getBanlance()},a.calcAuctionDay=function(){var e=Object(S.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getBlock(t);case 2:return a=e.sent.result.time,e.abrupt("return",((new Date).getTime()/1e3-a)/60/5);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getInvokeRead_getBanlance=Object(S.a)(k.a.mark(function e(){var t,n,r,s;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return re.arguments[0].value=a.state.inputValueAddr,se.arguments[0].value=a.state.inputValueAddr,e.next=4,a.NNSh.namehash(a.state.inputValueNns);case 4:return ie.arguments[0].value=e.sent,oe.arguments[0].value=a.state.inputValueAddr,oe.arguments[1].value=a.state.auctionStateInfo.id,(t={group:[{}]}).group.pop(),t.group.push(re),t.group.push(se),t.group.push(ie),t.group.push(oe),console.log(JSON.stringify(oe)),e.next=16,Teemo.NEO.invokeReadGroup(JSON.parse(JSON.stringify(t)));case 16:return n=e.sent,console.log(n),r=n.stack[2].value,s={id:r[0].value,auctionStarter:r[1].value,parenthash:r[2].value,domain:r[3].value,domainTTL:r[4].value,startBlockSelling:r[5].value,endBlock:r[6].value,maxPrice:r[7].value,maxBuyer:r[8].value,lastBlock:r[9].value},e.next=22,Teemo.NEO.getAddressFromScriptHash(G.hexReverse(s.auctionStarter));case 22:return s.auctionStarter=e.sent,s.domain=G.hex2a(s.domain),s.domainTTL=G.hex2TimeStr(s.domainTTL),s.maxPrice=s.maxPrice/Math.pow(10,8),e.next=28,Teemo.NEO.getAddressFromScriptHash(G.hexReverse(s.maxBuyer));case 28:return s.maxBuyer=e.sent,e.t0=a,e.t1=G.hex2Int(n.stack[0].value)/Math.pow(10,8),e.t2=G.hex2Int(n.stack[1].value)/Math.pow(10,8),e.t3=G.hex2Int(n.stack[3].value)/Math.pow(10,8),e.t4=s,e.next=36,a.calcAuctionDay(s.startBlockSelling);case 36:e.t5=e.sent,e.t6=JSON.stringify(s,null,2),e.t7={CGASBalance:e.t1,auctionBalance:e.t2,bidBalance:e.t3,auctionStateInfo:e.t4,auctionDay:e.t5,resDataRead:e.t6,loadingR:!1},e.t0.setState.call(e.t0,e.t7);case 40:case"end":return e.stop()}},e)})),a.butGetInvokeReadClick=function(){var e=Object(S.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.getInvokeRead_getBanlance();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.butInvoke_doCGASin_click=Object(S.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ce.arguments[0].value=a.state.inputValueAddr,e.next=3,Teemo.NEO.getAddressFromScriptHash(a.props.scriptHash.nns_auction);case 3:return ce.arguments[1].value=e.sent,ce.arguments[2].value=a.state.CGASopValue*Math.pow(10,8),(t={merge:!0,group:[{}]}).group.pop(),t.group.push(ce),t.group.push(le),a.setState({loadingW:!0}),e.next=12,Teemo.NEO.invokeGroup(JSON.parse(JSON.stringify(t)));case 12:(n=e.sent).forEach(function(e){a.props.store.addTxidSended(e.txid)}),a.setState({reqDataWrite:JSON.stringify(t,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 15:case"end":return e.stop()}},e)})),a.butInvoke_doCGASout_click=Object(S.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ue.arguments[0].value=a.state.inputValueAddr,ue.arguments[1].value=a.state.CGASopValue*Math.pow(10,8),a.setState({loadingW:!0}),e.next=5,Teemo.NEO.invoke(JSON.parse(JSON.stringify(ue)));case 5:t=e.sent,a.props.store.addTxidSended(t.txid),a.setState({reqDataWrite:JSON.stringify(ue,null,2),resDataWrite:JSON.stringify(t,null,2),loadingW:!1,loadingR:!0});case 8:case"end":return e.stop()}},e)})),a.butInvoke_doStartAuction_click=Object(S.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return pe.arguments[0].value=a.state.inputValueAddr,e.next=3,a.NNSh.namehash(a.state.inputValueNns.split(".")[1]);case 3:return pe.arguments[1].value=e.sent,pe.arguments[2].value=a.state.inputValueNns.split(".")[0],a.setState({loadingW:!0}),e.next=8,Teemo.NEO.invoke(JSON.parse(JSON.stringify(pe)));case 8:t=e.sent,a.props.store.addTxidSended(t.txid),a.setState({reqDataWrite:JSON.stringify(pe,null,2),resDataWrite:JSON.stringify(t,null,2),loadingW:!1,loadingR:!0});case 11:case"end":return e.stop()}},e)})),a.butInvoke_doBid_click=Object(S.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return de.arguments[0].value=a.state.inputValueAddr,de.arguments[1].value=a.state.auctionStateInfo.id,de.arguments[2].value=(a.state.inputAmount*Math.pow(10,8)).toString(),console.log(de),a.setState({loadingW:!0}),e.next=7,Teemo.NEO.invoke(JSON.parse(JSON.stringify(de)));case 7:t=e.sent,a.props.store.addTxidSended(t.txid),a.setState({reqDataWrite:JSON.stringify(de,null,2),resDataWrite:JSON.stringify(t,null,2),loadingW:!1,loadingR:!0});case 10:case"end":return e.stop()}},e)})),a.butInvoke_doBidSettlementAndCollect_click=Object(S.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return he.arguments[0].value=a.state.inputValueAddr,he.arguments[1].value=a.state.auctionStateInfo.id,me.arguments[0].value=a.state.inputValueAddr,me.arguments[1].value=a.state.auctionStateInfo.id,(t={merge:!1,group:[{}]}).group.pop(),t.group.push(he),t.group.push(me),a.setState({loadingW:!0}),e.next=11,Teemo.NEO.invokeGroup(JSON.parse(JSON.stringify(t)));case 11:(n=e.sent).forEach(function(e){a.props.store.addTxidSended(e.txid)}),a.setState({reqDataWrite:JSON.stringify(t,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 14:case"end":return e.stop()}},e)})),a.butInvoke_doRenew_click=Object(S.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ge.arguments[0].value=a.state.inputValueAddr,e.next=3,a.NNSh.namehash(a.state.inputValueNns.split(".")[1]);case 3:return ge.arguments[1].value=e.sent,ge.arguments[2].value=a.state.inputValueNns.split(".")[0],console.log(ge),a.setState({loadingW:!0}),e.next=9,Teemo.NEO.invoke(JSON.parse(JSON.stringify(ge)));case 9:t=e.sent,a.props.store.addTxidSended(t.txid),a.setState({reqDataWrite:JSON.stringify(ge,null,2),resDataWrite:JSON.stringify(t,null,2),loadingW:!1,loadingR:!0});case 12:case"end":return e.stop()}},e)})),a.butInvokeCreditAuthenticateClick=function(){var e=Object(S.a)(k.a.mark(function e(t){var n,r,s,i,o,c,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(ve.arguments[0].value=a.state.inputValueAddr,ve.arguments[1].value=[],n=!0,r=!1,s=void 0,e.prev=5,i=a.state.inputValueNns.split(".").reverse()[Symbol.iterator]();!(n=(o=i.next()).done);n=!0)c=o.value,ve.arguments[1].value.push({type:"String",value:c});e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),r=!0,s=e.t0;case 13:e.prev=13,e.prev=14,n||null==i.return||i.return();case 16:if(e.prev=16,!r){e.next=19;break}throw s;case 19:return e.finish(16);case 20:return e.finish(13);case 21:return a.setState({loadingW:!0}),e.next=24,Teemo.NEO.invoke(JSON.parse(JSON.stringify(ve)));case 24:l=e.sent,a.props.store.addTxidSended(l.txid),a.setState({reqDataWrite:JSON.stringify(ve,null,2),resDataWrite:JSON.stringify(l,null,2),loadingW:!1,loadingR:!0});case 27:case"end":return e.stop()}},e,null,[[5,9,13,21],[14,,16,20]])}));return function(t){return e.apply(this,arguments)}}(),a.butInvokeCreditRevokeClick=function(){var e=Object(S.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return fe.arguments[0].value=a.state.inputValueAddr,a.setState({loadingW:!0}),e.next=4,Teemo.NEO.invoke(JSON.parse(JSON.stringify(fe)));case 4:n=e.sent,a.props.store.addTxidSended(n.txid),a.setState({reqDataWrite:JSON.stringify(fe,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(re.scriptHash=this.props.scriptHash.NEP_5_CGAS,se.scriptHash=this.props.scriptHash.nns_auction,ce.scriptHash=this.props.scriptHash.NEP_5_CGAS,le.scriptHash=this.props.scriptHash.nns_auction,ue.scriptHash=this.props.scriptHash.nns_auction,ie.scriptHash=this.props.scriptHash.nns_auction,pe.scriptHash=this.props.scriptHash.nns_auction,de.scriptHash=this.props.scriptHash.nns_auction,oe.scriptHash=this.props.scriptHash.nns_auction,he.scriptHash=this.props.scriptHash.nns_auction,me.scriptHash=this.props.scriptHash.nns_auction,ge.scriptHash=this.props.scriptHash.nns_auction,this.intervalID=setInterval(Object(S.a)(k.a.mark(function t(){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,e.calcAuctionDay(e.state.auctionStateInfo.startBlockSelling);case 3:t.t1=t.sent,t.t2={auctionDay:t.t1},t.t0.setState.call(t.t0,t.t2);case 6:case"end":return t.stop()}},t)})),1e3),console.log("teemoReady:",this.props.teemoReady),this.props.teemoReady)console.log(1),this.getInvokeRead_getBanlance();else{console.log(0);var t=setInterval(function(){console.log("teemoReady:",e.props.teemoReady),e.props.teemoReady&&(setTimeout(function(){e.getInvokeRead_getBanlance()},1e3),clearInterval(t))},1e3)}window.addEventListener("newBlockEvent",this.doOnEvent,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("newBlockEvent",this.doOnEvent,!1),clearInterval(this.intervalID)}},{key:"CGASopChange",value:function(e){this.setState({CGASopValue:e.target.value})}},{key:"addrChange",value:function(e){this.setState({inputValueAddr:e.target.value})}},{key:"nnsChange",value:function(e){this.setState({inputValueNns:e.target.value})}},{key:"amountChange",value:function(e){this.setState({inputAmount:e})}},{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,this.props.title),m.a.createElement($.a,{gutter:16},m.a.createElement(Q.a,{span:8},m.a.createElement(R.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},m.a.createElement(X.a,{title:"\u94b1\u5305\u8d26\u6237",value:this.state.CGASBalance,suffix:"CGAS",prefix:m.a.createElement(C.a,{type:"money-collect"})}))),m.a.createElement(Q.a,{span:8},m.a.createElement($.a,{gutter:16},m.a.createElement(Q.a,{span:8},m.a.createElement(z.a,{onClick:this.butInvoke_doCGASout_click},m.a.createElement(C.a,{type:"left"}),"\u63d0\u53d6")),m.a.createElement(Q.a,{span:8},m.a.createElement(q.a,{placeholder:"\u8f93\u5165\u91d1\u989d",onChange:this.CGASopChange.bind(this),defaultValue:this.state.CGASopValue.toString()})),m.a.createElement(Q.a,{span:8},m.a.createElement(z.a,{onClick:this.butInvoke_doCGASin_click},"\u5145\u503c",m.a.createElement(C.a,{type:"right"}))))),m.a.createElement(Q.a,{span:8},m.a.createElement(R.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},m.a.createElement(X.a,{title:"\u5408\u7ea6\u8d26\u6237",value:this.state.auctionBalance,suffix:"CGAS",prefix:m.a.createElement(C.a,{type:"money-collect"})})))),m.a.createElement(q.a,{placeholder:"\u8f93\u5165\u8981\u67e5\u8be2\u7684\u5730\u5740",onChange:this.addrChange.bind(this),defaultValue:this.state.inputValueAddr}),m.a.createElement(q.a,{placeholder:"\u8f93\u5165\u8981\u7ed1\u5b9a\u7684NNS",onChange:this.nnsChange.bind(this),defaultValue:this.state.inputValueNns}),m.a.createElement(z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u5237\u65b0\u6570\u636e"),m.a.createElement(Z.a,{type:"vertical"}),m.a.createElement(z.a,{onClick:this.butInvoke_doStartAuction_click},"\u5f00\u6807"),m.a.createElement(Z.a,{type:"vertical"}),m.a.createElement(ee.a,{min:0,max:this.state.auctionBalance,step:.1,onChange:this.amountChange.bind(this)}),"=>",m.a.createElement(z.a,{onClick:this.butInvoke_doBid_click},"\u52a0\u4ef7"),m.a.createElement(Z.a,{type:"vertical"}),m.a.createElement(z.a,{onClick:this.butInvoke_doBidSettlementAndCollect_click},"\u7ed3\u7b97\u4e0e\u9886\u53d6"),m.a.createElement(Z.a,{type:"vertical"}),m.a.createElement(z.a,{onClick:this.butInvoke_doRenew_click,disabled:this.state.auctionDay>275},"\u7eed\u671f",(this.state.auctionDay-275).toFixed(2)),m.a.createElement(Z.a,null),m.a.createElement(R.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},m.a.createElement($.a,{type:"flex",align:"middle",gutter:16},m.a.createElement(Q.a,{span:3},m.a.createElement(X.a,{title:"\u5f00\u62cd\u5929\u6570",value:this.state.auctionDay.toFixed(2),suffix:"\u5929",prefix:m.a.createElement(C.a,{type:"clock-circle"})})),m.a.createElement(Q.a,{span:8},m.a.createElement(te.a,{checked:this.state.drawerVisible,onChange:function(){e.setState({drawerVisible:!e.state.drawerVisible})}}),"\u663e\u793a\u65f6\u95f4\u8f74"),m.a.createElement(Q.a,{span:13},m.a.createElement(X.a,{title:"\u52a0\u4ef7\u603b\u6570",value:this.state.bidBalance,suffix:"CGAS",prefix:m.a.createElement(C.a,{type:"money-collect"})}))),m.a.createElement(ae.a,{title:"\u7ade\u62cd\u9636\u6bb5",placement:"left",closable:!1,onClose:function(){e.setState({drawerVisible:!1})},visible:this.state.drawerVisible},m.a.createElement(ne.a,null,m.a.createElement(ne.a.Item,{color:this.state.auctionDay>0?"green":"blue"},"\u786e\u5b9a\u671f\uff081-2\uff09"),m.a.createElement(ne.a.Item,{color:this.state.auctionDay>2?"green":"blue"},"\u786e\u5b9a\u671f\uff083\uff09"),m.a.createElement(ne.a.Item,{color:this.state.auctionDay>3?"green":"blue"},"\u968f\u673a\u671f\uff084-5\uff09"),m.a.createElement(ne.a.Item,{color:this.state.auctionDay>5?"green":"blue"},"\u7ade\u62cd\u7ed3\u675f\uff085\uff09"),m.a.createElement(ne.a.Item,{color:this.state.auctionDay>275?"green":"blue"},"\u7eed\u671f\u671f\uff08365-90\uff09"),m.a.createElement(ne.a.Item,{color:this.state.auctionDay>365?"green":"blue"},"\u5230\u671f\uff08365\uff09"))),m.a.createElement("pre",null,this.state.resDataRead)),m.a.createElement(R.a,{tip:"\u8bf7\u6c42\u4e2d",spinning:this.state.loadingW},m.a.createElement("pre",null,this.state.resDataWrite)))}}]),t}(m.a.Component),Se={scriptHash:"",operation:"getCreditInfo",arguments:[{type:"Address",value:""}],network:"TestNet"},ye={scriptHash:"",operation:"authenticate",arguments:[{type:"Address",value:""},{type:"Array",value:[]}],fee:"0",description:"NNS\u53cd\u5411\u89e3\u6790\u7ed1\u5b9a",network:"TestNet"},be={scriptHash:"",operation:"revoke",arguments:[{type:"Address",value:""}],fee:"0",description:"NNS\u53cd\u5411\u89e3\u6790\u89e3\u7ed1",network:"TestNet"},Ne=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).NNSh=new M(a.props.scriptHash),a.state={resDataRead:"{}",reqDataWrite:"{}",resDataWrite:"{}",inputValueAddr:a.props.address,inputValueNns:"qmz.test",loadingR:!1,loadingW:!1},a.doOnEvent=function(e){console.log("newBlockEvent",e),e.detail.txidIndex>-1&&a.getInvokeRead()},a.getInvokeRead=Object(S.a)(k.a.mark(function e(){var t,n,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Se.arguments[0].value=a.state.inputValueAddr,e.next=3,Teemo.NEO.invokeRead(JSON.parse(JSON.stringify(Se)));case 3:t=e.sent,n=t.stack[0].value,(r={namehash:n[0].value,fullDomainName:n[1].value,TTL:n[2].value}).fullDomainName=G.hex2a(r.fullDomainName),r.TTL=G.hex2TimeStr(r.TTL),a.setState({resDataRead:JSON.stringify(r,null,2),loadingR:!1});case 9:case"end":return e.stop()}},e)})),a.butGetInvokeReadClick=function(){var e=Object(S.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.getInvokeRead();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.butInvokeCreditAuthenticateClick=function(){var e=Object(S.a)(k.a.mark(function e(t){var n,r,s,i,o,c,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(ye.arguments[0].value=a.state.inputValueAddr,ye.arguments[1].value=[],n=!0,r=!1,s=void 0,e.prev=5,i=a.state.inputValueNns.split(".").reverse()[Symbol.iterator]();!(n=(o=i.next()).done);n=!0)c=o.value,ye.arguments[1].value.push({type:"String",value:c});e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),r=!0,s=e.t0;case 13:e.prev=13,e.prev=14,n||null==i.return||i.return();case 16:if(e.prev=16,!r){e.next=19;break}throw s;case 19:return e.finish(16);case 20:return e.finish(13);case 21:return a.setState({loadingW:!0}),e.next=24,Teemo.NEO.invoke(JSON.parse(JSON.stringify(ye)));case 24:l=e.sent,a.props.store.addTxidSended(l.txid),a.setState({reqDataWrite:JSON.stringify(ye,null,2),resDataWrite:JSON.stringify(l,null,2),loadingW:!1,loadingR:!0});case 27:case"end":return e.stop()}},e,null,[[5,9,13,21],[14,,16,20]])}));return function(t){return e.apply(this,arguments)}}(),a.butInvokeCreditRevokeClick=function(){var e=Object(S.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return be.arguments[0].value=a.state.inputValueAddr,a.setState({loadingW:!0}),e.next=4,Teemo.NEO.invoke(JSON.parse(JSON.stringify(be)));case 4:n=e.sent,a.props.store.addTxidSended(n.txid),a.setState({reqDataWrite:JSON.stringify(be,null,2),resDataWrite:JSON.stringify(n,null,2),loadingW:!1,loadingR:!0});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){Se.scriptHash=this.props.scriptHash.nns_credit,ye.scriptHash=this.props.scriptHash.nns_credit,be.scriptHash=this.props.scriptHash.nns_credit,window.addEventListener("newBlockEvent",this.doOnEvent,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("newBlockEvent",this.doOnEvent,!1)}},{key:"addrChange",value:function(e){this.setState({inputValueAddr:e.target.value})}},{key:"nnsChange",value:function(e){this.setState({inputValueNns:e.target.value})}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,this.props.title),m.a.createElement(q.a,{placeholder:"\u8f93\u5165\u8981\u67e5\u8be2\u7684\u5730\u5740",onChange:this.addrChange.bind(this),defaultValue:this.state.inputValueAddr}),m.a.createElement(q.a,{placeholder:"\u8f93\u5165\u8981\u7ed1\u5b9a\u7684NNS",onChange:this.nnsChange.bind(this),defaultValue:this.state.inputValueNns}),m.a.createElement(z.a,{onClick:this.butGetInvokeReadClick,type:"primary"},"\u83b7\u53d6NNS\u53cd\u5411\u89e3\u6790\u4fe1\u606f"),m.a.createElement(z.a,{onClick:this.butInvokeCreditAuthenticateClick},"\u7ed1\u5b9a"),m.a.createElement(z.a,{onClick:this.butInvokeCreditRevokeClick},"\u89e3\u7ed1"),m.a.createElement(R.a,{tip:"\u7b49\u5f85\u5171\u8bc6\u4e2d",spinning:this.state.loadingR},m.a.createElement("pre",null,this.state.resDataRead)),m.a.createElement(R.a,{tip:"\u8bf7\u6c42\u4e2d",spinning:this.state.loadingW},m.a.createElement("pre",null,this.state.resDataWrite)))}}]),t}(m.a.Component),Ee=x.a.Header,we=x.a.Content,Oe=x.a.Footer,xe=x.a.Sider,Te={nns_domaincenter:"348387116c4a75e420663277d9c02049907128c7",nns_resolver:"6e2aea28af9c5febea0774759b1b76398e3167f1",nns_auction:"5fd8c2aed0eec0fa103f6fba16748b453baf5b2e",nns_credit:"77bf387c9b5f2e2c33ef8507478b103285c55b11",NEP_5_CGAS:"74f2dc36a68fdc4682034178eb2220729231db76",NEP_5_NNC:"fc732edee1efdf968c23c20a9628eaa5a6ccb934"},Ae=((new Date).getTime(),new j("ws://47.99.35.147:82/ws/testnet")),Ce=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={menuID:1,address:"address",network:"network",teemoReady:!1},a.average=function(e){var t,a=(t=[]).concat.apply(t,Object(y.a)(e));return a.reduce(function(e,t){return e+t},0)/a.length},a.init=function(){window.addEventListener("Teemo.NEO.READY",function(){var e=Object(S.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inject READY "),T.a.success({message:"Teemo",description:"Teemo.NEO.READY"}),e.t0=a,e.next=5,Teemo.NEO.getAccount();case 5:return e.t1=e.sent.address,e.next=8,Teemo.NEO.getNetworks();case 8:e.t2=e.sent.defaultNetwork,e.t3={address:e.t1,network:e.t2,teemoReady:!0},e.t0.setState.call(e.t0,e.t3);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("Teemo.NEO.NETWORK_CHANGED",function(e){console.log("NETWORK_CHANGED"),console.log(e),a.setState({network:e.detail.defaultNetwork})})},a.menuClick=function(e){console.log("menu Click",e),a.setState({menuID:e.key})},a}return Object(O.a)(t,e),Object(N.a)(t,[{key:"componentWillMount",value:function(){this.init()}},{key:"render",value:function(){var e=null;return e=1==this.state.menuID?m.a.createElement(F,{store:Ae,title:"default Page",address:this.state.address,network:this.state.network,scriptHash:Te,teemoReady:this.state.teemoReady}):2==this.state.menuID?m.a.createElement(U,{title:"NNS Domain Center",scriptHash:Te}):3==this.state.menuID?m.a.createElement(K,{title:"NNS Resolver",scriptHash:Te}):4==this.state.menuID?m.a.createElement(ke,{store:Ae,title:"NNS Auction",address:this.state.address,scriptHash:Te,teemoReady:this.state.teemoReady}):5==this.state.menuID?m.a.createElement(Ne,{store:Ae,title:"NNS Credit",address:this.state.address,scriptHash:Te}):m.a.createElement("p",null,"div_defult"),m.a.createElement(x.a,null,m.a.createElement(xe,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)}},m.a.createElement("div",{className:"logo"}),m.a.createElement(A.a,{onClick:this.menuClick,theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},m.a.createElement(A.a.Item,{key:"1"},m.a.createElement(C.a,{type:"file"}),m.a.createElement("span",{className:"nav-text"},"Default Page")),m.a.createElement(A.a.Item,{key:"2"},m.a.createElement(C.a,{type:"file"}),m.a.createElement("span",{className:"nav-text"},"NNS Center")),m.a.createElement(A.a.Item,{key:"3"},m.a.createElement(C.a,{type:"file"}),m.a.createElement("span",{className:"nav-text"},"NNS resolver")),m.a.createElement(A.a.Item,{key:"4"},m.a.createElement(C.a,{type:"file"}),m.a.createElement("span",{className:"nav-text"},"NNS Auction")),m.a.createElement(A.a.Item,{key:"5"},m.a.createElement(C.a,{type:"file"}),m.a.createElement("span",{className:"nav-text"},"NNS Credit")))),m.a.createElement(x.a,null,m.a.createElement(Ee,{style:{background:"#fff",padding:0}},m.a.createElement("h1",null,"--- NNS Teemo Demo ---")),m.a.createElement(we,{style:{margin:"24px 16px 0"}},m.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},e)),m.a.createElement(Oe,{style:{textAlign:"center"}},"NNS \xa92019 Created by NEL")))}}]),t}(h.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.a.render(m.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,1,2]]]);
//# sourceMappingURL=main.15efb62e.chunk.js.map