(this["webpackJsonpop25-new-ui"]=this["webpackJsonpop25-new-ui"]||[]).push([[0],{190:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(19),i=n.n(c),o=n(11),s=n.n(o),d=n(22),l=n(7),u=n(55),p=n(24),j=n(82),h=function(){return Object(j.b)()},b=j.c,f=n(47),m=Object(f.c)({name:"interface",initialState:{darkmode:!0},reducers:{toogleDarkMode:function(e){e.darkmode=!e.darkmode},setDarkMode:function(e,t){e.darkmode=t.payload}}}),O=m.actions,g=(O.toogleDarkMode,O.setDarkMode),x=function(e){return e.preferences.darkmode},v=m.reducer,y=Object(f.c)({name:"interface",initialState:{isMenuDrawerOpen:!0,isMobileMenuDrawerOpen:!1,isPreferencesDrawerOpen:!1},reducers:{toggleMenuDrawerOpen:function(e){e.isMenuDrawerOpen=!e.isMenuDrawerOpen},setMenuDrawerOpen:function(e,t){e.isMenuDrawerOpen=t.payload},toggleMobileMenuDrawerOpen:function(e){e.isMobileMenuDrawerOpen=!e.isMobileMenuDrawerOpen},setMobileMenuDrawerOpen:function(e,t){e.isMobileMenuDrawerOpen=t.payload},togglePreferencesDrawerOpen:function(e){e.isPreferencesDrawerOpen=!e.isPreferencesDrawerOpen},setPreferencesDrawerOpen:function(e,t){e.isPreferencesDrawerOpen=t.payload}}}),k=y.actions,C=k.toggleMenuDrawerOpen,w=k.setMenuDrawerOpen,S=k.toggleMobileMenuDrawerOpen,D=k.setMobileMenuDrawerOpen,T=k.togglePreferencesDrawerOpen,N=k.setPreferencesDrawerOpen,_=function(e){return e.interface.isMenuDrawerOpen},M=function(e){return e.interface.isMobileMenuDrawerOpen},I=function(e){return e.interface.isPreferencesDrawerOpen},R=y.reducer,P=n(121),q=n(131),A=n(242),B=n(243),L=n(56),E=n(244),H=n(193),F=n(194),V=n(195),W=n(246),z=n(21),U=n(269),G=n(271),Q=n(44),K=n(245),J=n(247),Y=n(248),X=n(249),Z=n(250),$=n(2),ee=Object(P.a)((function(e){return Object(q.a)({drawer:Object(l.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240},toolbar:e.mixins.toolbar})})),te=function(){var e=b(x);return Object($.jsxs)("div",{children:[Object($.jsx)(A.a,{position:"relative",color:e?"transparent":"primary",children:Object($.jsx)(B.a,{children:Object($.jsx)(L.a,{variant:"h6",noWrap:!0,children:"OP25 (Boatbod)"})})}),Object($.jsx)(E.a,{}),Object($.jsxs)(H.a,{children:[Object($.jsxs)(F.a,{button:!0,component:u.b,to:"/",activeClassName:"Mui-selected",exact:!0,children:[Object($.jsx)(V.a,{children:Object($.jsx)(K.a,{})}),Object($.jsx)(W.a,{children:"Receiver"})]}),Object($.jsxs)(F.a,{button:!0,component:u.b,to:"/history",activeClassName:"Mui-selected",children:[Object($.jsx)(V.a,{children:Object($.jsx)(J.a,{})}),Object($.jsx)(W.a,{children:"History"})]}),Object($.jsxs)(F.a,{button:!0,component:u.b,to:"/config",activeClassName:"Mui-selected",children:[Object($.jsx)(V.a,{children:Object($.jsx)(Y.a,{})}),Object($.jsx)(W.a,{children:"Config"})]}),Object($.jsxs)(F.a,{button:!0,component:u.b,to:"/plot",activeClassName:"Mui-selected",children:[Object($.jsx)(V.a,{children:Object($.jsx)(X.a,{})}),Object($.jsx)(W.a,{children:"Plot"})]})]}),Object($.jsx)(E.a,{}),Object($.jsx)(H.a,{children:Object($.jsxs)(F.a,{button:!0,component:u.b,to:"/about",activeClassName:"Mui-selected",children:[Object($.jsx)(V.a,{children:Object($.jsx)(Z.a,{})}),Object($.jsx)(W.a,{children:"About"})]})})]})},ne=void 0!==globalThis?function(){return globalThis.document.body}:void 0,re=function(){var e=h(),t=b(_),n=b(M),r=ee(),a=Object(z.a)();return Object($.jsxs)("nav",{className:r.drawer,children:[Object($.jsx)(U.a,{smUp:!0,implementation:"css",children:Object($.jsx)(G.a,{container:ne,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:n,onOpen:function(){e(D(!0))},onClose:function(){e(D(!1))},classes:{paper:r.drawerPaper},ModalProps:{keepMounted:!0},children:Object($.jsx)(te,{})})}),Object($.jsx)(U.a,{xsDown:!0,implementation:"css",children:Object($.jsx)(Q.a,{classes:{paper:r.drawerPaper},variant:"persistent",anchor:"rtl"===a.direction?"right":"left",open:t,onClose:function(){e(w(!1))},ModalProps:{keepMounted:!0},children:Object($.jsx)(te,{})})})]})},ae=n(252),ce=n(78),ie=n(254),oe=n(199),se=n(200),de=n(253),le=n(94),ue=Object(P.a)((function(e){return Object(q.a)({appBar:Object(l.a)({},e.breakpoints.up("sm"),{width:"".concat(300,"px")}),drawer:Object(l.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),gridSpace:{paddingLeft:e.spacing(2)},drawerPaper:{width:300},preferencesHeader:{color:function(t){return t.isDarkMode?e.palette.common.white:le.a[800]}},checkboxMaxWidth:{width:180},toolbar:e.mixins.toolbar})})),pe=void 0!==globalThis?function(){return globalThis.document.body}:void 0,je=function(){var e=h(),t=b(I),n=b(x),r=ue({isDarkMode:n}),a=Object(z.a)();return Object($.jsx)("nav",{className:r.drawer,children:Object($.jsxs)(G.a,{container:pe,variant:"temporary",anchor:"rtl"===a.direction?"left":"right",open:t,onClose:function(){e(N(!1))},onOpen:function(){e(N(!0))},classes:{paper:r.drawerPaper},ModalProps:{keepMounted:!0},children:[Object($.jsx)(A.a,{position:"relative",className:r.appBar,color:n?"transparent":"primary",children:Object($.jsx)(B.a,{})}),Object($.jsx)(E.a,{}),Object($.jsxs)(ae.a,{className:r.gridSpace,container:!0,spacing:0,children:[Object($.jsx)(ae.a,{item:!0,xs:12,children:Object($.jsx)(ae.a,{container:!0,justifyContent:"flex-end",children:Object($.jsx)(ce.a,{onClick:function(){e(N(!1))},children:Object($.jsx)(de.a,{})})})}),Object($.jsx)(ae.a,{item:!0,xs:12,children:Object($.jsx)(L.a,{className:r.preferencesHeader,variant:"h6",children:"Theme"})}),Object($.jsx)(ae.a,{item:!0,xs:12,children:Object($.jsx)(ie.a,{children:Object($.jsx)(oe.a,{control:Object($.jsx)(se.a,{checked:n,onChange:function(t){e(g(t.target.checked))},name:"darkModeEnabled"}),label:"Dark Mode"})})})]})]})})},he=n(109),be=n(255),fe=n(256),me=Object(P.a)((function(e){return Object(q.a)({grow:{flexGrow:1},appBar:Object(l.a)({},e.breakpoints.up("sm"),{width:function(e){return e.isOpen?"calc(100%)":""},paddingLeft:function(e){return e.isOpen&&240}}),content:{flexGrow:1,padding:e.spacing(3)}})})),Oe=function(){var e=h(),t=b(_),n=me({isOpen:t});return Object($.jsxs)(A.a,{position:"fixed",className:n.appBar,children:[Object($.jsx)(re,{}),Object($.jsxs)(B.a,{children:[Object($.jsx)(U.a,{smUp:!0,children:Object($.jsx)(ce.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){e(S())},children:Object($.jsx)(be.a,{})})}),Object($.jsx)(U.a,{xsDown:!0,children:Object($.jsx)(ce.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){e(C())},children:Object($.jsx)(be.a,{})})}),Object($.jsx)("div",{className:n.grow}),Object($.jsx)(he.a,{title:"Preferences","aria-label":"preferences",children:Object($.jsx)(ce.a,{color:"inherit","aria-label":"preferences",onClick:function(){e(T())},children:Object($.jsx)(fe.a,{})})})]}),Object($.jsx)(je,{})]})},ge=Object(P.a)((function(){return Object(q.a)({root:{display:"flex"}})})),xe=function(){var e=ge();return Object($.jsx)("div",{className:e.root,children:Object($.jsx)(Oe,{})})},ve=n(9),ye=n(29),ke=n(138),Ce=n.n(ke),we=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEV_SERVER_API?Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEV_SERVER_API:"/",Se=function(){return Ce.a.create({baseURL:we,method:"post",headers:{"Content-type":"application/json"},timeout:5e3,withCredentials:!1})},De=n(75),Te=n(76),Ne=function(e){return(e/1e6).toFixed(6)},_e=function(){function e(){Object(De.a)(this,e),this._store=void 0,this._store=null}return Object(Te.a)(e,[{key:"setStore",value:function(e){this._store=e}},{key:"sendGetSimpleConfig",value:function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._store){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._store.dispatch(Re({command:"get_config",arg1:0,arg2:0}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendGetFullConfig",value:function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._store){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._store.dispatch(Re({command:"get_full_config",arg1:0,arg2:0}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendUpdateChannels",value:function(){var e=Object(d.a)(s.a.mark((function e(){var t,n,r,a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._store){e.next=2;break}return e.abrupt("return");case 2:if(t=this._store.getState(),0!==(n=t.op25.channels).length){e.next=9;break}return e.next=7,null===(r=this._store)||void 0===r?void 0:r.dispatch(Re({command:"update",arg1:0,arg2:0}));case 7:e.next=10;break;case 9:n.forEach(function(){var e=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=a._store)||void 0===n?void 0:n.dispatch(Re({command:"update",arg1:0,arg2:t.id}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendHoldOnChannel",value:function(){var e=Object(d.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=this._store)||void 0===r?void 0:r.dispatch(Re({command:"hold",arg1:n,arg2:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendUnHoldOnChannel",value:function(){var e=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this._store)||void 0===n?void 0:n.dispatch(Re({command:"hold",arg1:0,arg2:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendSkipOnChannel",value:function(){var e=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this._store)||void 0===n?void 0:n.dispatch(Re({command:"skip",arg1:0,arg2:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendBlacklistOnChannel",value:function(){var e=Object(d.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=this._store)||void 0===r?void 0:r.dispatch(Re({command:"lockout",arg1:n,arg2:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendWhitelistOnChannel",value:function(){var e=Object(d.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=this._store)||void 0===r?void 0:r.dispatch(Re({command:"whitelist",arg1:n,arg2:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendReloadOnChannel",value:function(){var e=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this._store)||void 0===n?void 0:n.dispatch(Re({command:"reload",arg1:0,arg2:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendSetDebugOnChannel",value:function(){var e=Object(d.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(r=this._store)||void 0===r?void 0:r.dispatch(Re({command:"set_debug",arg1:n,arg2:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();_e.instance=void 0;var Me={isConnected:!1,channels:[],systems:[],terminalConfig:void 0,send_queue:[{command:"get_config",arg1:0,arg2:0}]},Ie=Object(f.b)("op25/sendQueue",function(){var e=Object(d.a)(s.a.mark((function e(t,n){var r,a,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,a=n.dispatch,c=r().op25,i=Object(ye.a)(c.send_queue),a(Le()),e.next=6,Se().post("/",i);case 6:return o=e.sent,e.abrupt("return",{status:o.status,statusText:o.statusText,data:o.data});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Re=Object(f.b)("op25/addToSendQueue",function(){var e=Object(d.a)(s.a.mark((function e(t,n){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.getState,a=n.dispatch,r().op25.send_queue.length>=10&&a(Be()),a(Ae(t));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Pe=Object(f.c)({name:"op25",initialState:Me,reducers:{pushToSendQueue:function(e,t){e.send_queue.push(t.payload)},unshiftOnSendQueue:function(e){e.send_queue.unshift()},emptySendQueue:function(e){e.send_queue=[]}},extraReducers:function(e){e.addCase(Ie.fulfilled,(function(e,t){e.isConnected=!0;var n=t.payload,r=n.status,a=n.statusText,c=n.data;if(200===r){if(c){var i=c;try{i.forEach((function(t){if(t.json_type)switch(t.json_type){case"trunk_update":return void function(e,t){"trunk_update"===e.json_type&&Object.keys(e).filter((function(e){return"json_type"!==e&&"nac"!==e})).forEach((function(n){var r=e[n],a=[],c=[];Object.keys(r.frequencies).forEach((function(e){var t=r.frequencies[e],n=r.frequency_data[Number.parseInt(e)];a.push({frequency:Number.parseInt(e),counter:n.counter,lastActivitySeconds:Number.parseInt(n.last_activity),talkgroups:n.tgids.map((function(e){return{id:e}})),displayText:t})})),Object.keys(r.adjacent_data).forEach((function(e){var t=r.adjacent_data[e];c.push({id:Number.parseInt(e),rfid:t.rfid,stid:t.stid,uplink:{frequency:t.uplink},table:t.table})}));var i={id:Number.parseInt(n),syid:r.syid,rfid:r.rfid,stid:r.stid,rxFrequency:r.rxchan,txFrequency:r.txchan,wacn:r.wacn,nac:r.nac,secondaryFrequencies:r.secondary,frequencies:a,name:r.system,TopLine:r.top_line,lastTSBK:r.last_tsbk,adjacentData:c},o=t.systems.findIndex((function(e){return e.id===Number.parseInt(n)}));-1===o?t.systems.push(i):t.systems[o]=i}))}(t,e);case"change_freq":return void console.log("***** change_freq *****",t);case"channel_update":return void function(e,t){"channel_update"===e.json_type&&e.channels&&e.channels.forEach((function(n){var r=e[n],a={id:Number.parseInt(n),encrypted:1===r.encrypted,frequency:r.freq,mode:r.mode,name:r.name,sourceAddress:r.srcaddr,sourceTag:r.srctag,stream:r.stream,msgqid:r.msgqid,ppm:r.ppm,systemName:r.system,tdma:r.tdma,tgID:r.tgid,tgTag:r.tag},c=t.channels.findIndex((function(e){return e.id===Number.parseInt(n)}));-1===c?t.channels.push(a):t.channels[c]=a}))}(t,e);case"rx_update":return void console.log("***** rx_update *****",t);case"terminal_config":return void function(e,t){if("terminal_config"===e.json_type){var n={module:e.module,terminalType:e.terminal_type,cursesPlotInterval:e.curses_plot_interval,httpPlotInterval:e.http_plot_interval,httpPlotDirectory:e.http_plot_directory,tuningStepSizeLarge:e.tuning_step_large,tuningStepSizeSmall:e.tuning_step_small};t.terminalConfig=n}}(t,e);case"full_config":return void console.log("full_config",t);default:return void console.log("unknown server data type",t.json_type)}else console.log("no json_type",t)}))}catch(o){console.log("Error parsing response: ",o)}}}else console.log("Error ".concat(r.toString(10),": ").concat(a))})).addCase(Ie.rejected,(function(e){(void 0===e.isConnected||e.isConnected)&&(e.isConnected=!1,globalThis.scroll({top:0,left:0,behavior:"smooth"}))})).addCase(Re.fulfilled,(function(e){}))}}),qe=Pe.actions,Ae=qe.pushToSendQueue,Be=qe.unshiftOnSendQueue,Le=qe.emptySendQueue,Ee=function(e){return e.op25.isConnected},He=function(e){return e.op25.channels},Fe=function(e){return e.op25.systems},Ve=function(e){return e.op25.systems.length},We=function(e){var t,n;return{stepSizeSmall:(null===(t=e.op25.terminalConfig)||void 0===t?void 0:t.tuningStepSizeSmall)||100,stepSizeLarge:(null===(n=e.op25.terminalConfig)||void 0===n?void 0:n.tuningStepSizeLarge)||1200}},ze=Pe.reducer,Ue=n(139),Ge=n(257),Qe=n(258),Ke=n(259),Je=n(263),Ye=n(68),Xe=n(49),Ze=Object(P.a)((function(e){return Object(q.a)({root:{minWidth:275,border:"0"},cardContent:{paddingRight:15,borderLeftStyle:function(e){return e.isDarkMode?"none":"solid"},borderRightStyle:function(e){return e.isDarkMode?"none":"solid"},borderWidth:1},cardHeader:{backgroundColor:function(t){return t.isEncrypted?"red":e.palette.primary.main},borderLeftStyle:function(e){return e.isDarkMode?"none":"solid"},borderRightStyle:function(e){return e.isDarkMode?"none":"solid"},borderTopStyle:function(e){return e.isDarkMode?"none":"solid"},borderWidth:1,borderColor:function(t){return t.isEncrypted?"red":e.palette.primary.main},margin:"0",textAlign:"center",height:30,color:e.palette.primary.contrastText},cardHeaderActions:{display:"block",marginTop:-15},currentchannel:{marginLeft:15,marginBottom:20,overflow:"auto"},grid:{height:260},gridRoot:{fontSize:12,border:"0"},rowRoot:{border:"0"},cellRoot:{paddingLeft:5,paddingRight:5,border:"0"},cardActions:{paddingBottom:20,borderLeftStyle:function(e){return e.isDarkMode?"none":"solid"},borderRightStyle:function(e){return e.isDarkMode?"none":"solid"},borderBottomStyle:function(e){return e.isDarkMode?"none":"solid"},borderWidth:1,flexWrap:"wrap",justifyContent:"center"},actionbuttons:{paddingLeft:15,paddingRight:15}})})),$e=function(e){var t=e.className,n=e.channelId,a=e.onChannelHoldTalkgroup,c=e.onGoToTalkgroup,i=e.onReloadChannel,o=e.onBlacklistTalkgroup,s=e.onWhitelistTalkgroup,d=e.onLogVerboseChange,l=e.onSkipTalkgroup,u=b(function(e){return function(t){return t.op25.channels.find((function(t){return t.id===e}))}}(n)),p=b(x),j=b(We),h=j.stepSizeSmall,f=j.stepSizeLarge,m=Object(r.useState)(!1),O=Object(ve.a)(m,2),g=O[0],v=O[1],y=Ze({isEncrypted:!!u&&u.encrypted,isDarkMode:p}),k=[{field:"id",hide:!0,sortable:!1,width:0},{field:"stateName",align:"right",sortable:!1,width:110,renderHeader:function(e){return Object($.jsx)($.Fragment,{})},renderCell:function(e){var t;return e.getValue(e.id,"description")?Object($.jsx)(he.a,{title:"".concat(e.getValue(e.id,"description")&&(null===(t=e.getValue(e.id,"description"))||void 0===t?void 0:t.toString())),enterDelay:500,placement:"right",children:Object($.jsx)("span",{children:e.getValue(e.id,"stateName")})}):Object($.jsx)("span",{children:e.getValue(e.id,"stateName")})}},{field:"stateValue",align:"left",sortable:!1,renderHeader:function(e){return Object($.jsx)($.Fragment,{})},renderCell:function(e){var t;return"System Name:"===e.getValue(e.id,"stateName")?Object($.jsx)(he.a,{title:"".concat(e.getValue(e.id,"stateValue")&&(null===(t=e.getValue(e.id,"stateValue"))||void 0===t?void 0:t.toString())),enterDelay:500,placement:"right",children:Object($.jsx)("span",{children:e.getValue(e.id,"stateValue")})}):Object($.jsx)("span",{children:e.getValue(e.id,"stateValue")})}},{field:"description",hide:!0,sortable:!1}],C=[{id:1,stateName:"Group Address:",stateValue:u&&u.tgID?u.tgID:"-",description:"Also known as the Talkgroup ID, this is the unique ID assigned to a group."},{id:2,stateName:"Source Address:",stateValue:u&&u.sourceAddress?u.sourceAddress:"-",description:"ID of the person talking (Radio ID / Unit ID)"},{id:3,stateName:"Frequency:",stateValue:u&&u.frequency?Ne(u.frequency):"-"},{id:4,stateName:"Encrypted:",stateValue:u?u.encrypted?"Yes":"No":"-",description:"Shows as yes if this channel is encrpyted (false positives do occur)"},{id:5,stateName:"System Name:",stateValue:u?u.systemName:"-",nextFunction:function(){}}];return Object($.jsxs)(Ge.a,{className:"".concat(y.root).concat(void 0!==t?" ".concat(t):""),variant:"outlined",children:[Object($.jsx)(Qe.a,{title:g?u&&(u.name||u.tgTag||u.tgID)?"".concat(u.name?"".concat(u.name," / "):"").concat(u.tgTag||u.tgID?u.tgTag?u.tgTag:u.tgID:u.name?"-":""):"-":u&&u.name?u.name:"-",action:Object($.jsx)("span",{className:y.cardHeaderActions,children:Object($.jsx)(ce.a,{onClick:function(){v(!g)},children:g?Object($.jsx)(Xe.e,{}):Object($.jsx)(Xe.f,{})})}),className:y.cardHeader,titleTypographyProps:{variant:"subtitle2"}}),!g&&Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(Ke.a,{className:y.cardContent,children:[Object($.jsx)(L.a,{className:y.currentchannel,variant:"h5",component:"h2",children:u&&(u.tgTag||u.tgID)?u.tgTag?u.tgTag:u.tgID:"-"}),Object($.jsx)("div",{className:y.grid,children:Object($.jsx)(Ue.a,{classes:{root:y.gridRoot,row:y.rowRoot,cell:y.cellRoot},rows:C,columns:k,headerHeight:0,isRowSelectable:function(e){return!1},hideFooter:!0})})]}),Object($.jsx)(Je.a,{className:y.cardActions,children:!g&&Object($.jsxs)(ae.a,{container:!0,direction:"column",spacing:2,children:[Object($.jsx)(ae.a,{item:!0,children:Object($.jsxs)(ae.a,{container:!0,direction:"row",justifyContent:"center",children:[Object($.jsx)(Ye.a,{size:"small",onClick:function(){u&&l(u.id)},children:"Skip"}),Object($.jsx)(Ye.a,{size:"small",onClick:function(){u&&u.tgID&&a(u.id,u.tgID)},children:"Hold"}),Object($.jsx)(Ye.a,{size:"small",onClick:function(){u&&i(u.id)},children:"Reload"}),Object($.jsx)(Ye.a,{size:"small",onClick:function(){u&&c(u.id)},children:"GOTO"}),Object($.jsx)(he.a,{title:"Blacklist",placement:"top",enterDelay:500,onClick:function(){u&&o(u.id,u.tgID?u.tgID:0)},children:Object($.jsx)(Ye.a,{size:"small",children:"B/List"})}),Object($.jsx)(he.a,{title:"Whitelist",placement:"top",enterDelay:500,onClick:function(){u&&s(u.id,u.tgID?u.tgID:0)},children:Object($.jsx)(Ye.a,{size:"small",children:"W/List"})}),Object($.jsx)(he.a,{title:"Log Verbosity",placement:"top",enterDelay:500,onClick:function(){u&&d(u.id)},children:Object($.jsx)(Ye.a,{size:"small",children:"Log/V"})})]})}),Object($.jsx)(ae.a,{item:!0,children:Object($.jsxs)(ae.a,{container:!0,direction:"row",justifyContent:"center",children:[Object($.jsx)(he.a,{title:"-".concat(f),placement:"top",children:Object($.jsx)(ce.a,{size:"small",className:y.actionbuttons,children:Object($.jsx)(Xe.c,{})})}),Object($.jsx)(he.a,{title:"-".concat(h),placement:"top",children:Object($.jsx)(ce.a,{size:"small",className:y.actionbuttons,children:Object($.jsx)(Xe.a,{})})}),Object($.jsx)(he.a,{title:"+".concat(h),placement:"top",children:Object($.jsx)(ce.a,{size:"small",className:y.actionbuttons,children:Object($.jsx)(Xe.b,{})})}),Object($.jsx)(he.a,{title:"+".concat(f),placement:"top",children:Object($.jsx)(ce.a,{size:"small",className:y.actionbuttons,children:Object($.jsx)(Xe.d,{})})}),Object($.jsx)(Ye.a,{size:"small",onClick:function(){},children:"View Plot"})]})})]})})]})]})},et=n(251),tt=n(264),nt=n(267),rt=n(266),at=n(77),ct=Object(P.a)((function(e){return Object(q.a)({root:{minWidth:275,border:"0"},cardContent:{paddingRight:15,borderLeftStyle:function(e){return e.isDarkMode?"none":"solid"},borderRightStyle:function(e){return e.isDarkMode?"none":"solid"},borderWidth:1},cardHeader:{backgroundColor:e.palette.primary.main,borderLeftStyle:function(e){return e.isDarkMode?"none":"solid"},borderRightStyle:function(e){return e.isDarkMode?"none":"solid"},borderTopStyle:function(e){return e.isDarkMode?"none":"solid"},borderWidth:1,borderColor:e.palette.primary.main,margin:"0",textAlign:"center",height:30,color:e.palette.primary.contrastText},cardHeaderActions:{display:"block",marginTop:-15},currentsystem:{marginLeft:15,marginBottom:20,overflow:"auto",textAlign:"center"},table:{width:"100%",borderSpacing:0,borderTopWidth:1,borderTopStyle:"solid",borderTopColor:function(e){return e.isDarkMode?"#666666":"#CCCCCC"}},tableInfo:Object(l.a)({borderSpacing:0,borderTopWidth:1,borderTopStyle:"solid",borderTopColor:function(e){return e.isDarkMode?"#666666":"#CCCCCC"}},e.breakpoints.up("lg"),{width:"100%"}),tr:{"&:hover":{backgroundColor:function(e){return e.isDarkMode?"#515151":"#F5F5F5"}}},td:{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:function(e){return e.isDarkMode?"#666666":"#CCCCCC"},paddingTop:15,paddingBottom:15,paddingLeft:10,paddingRight:10},tdFrequency:{borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:function(e){return e.isDarkMode?"#666666":"#CCCCCC"},paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,textAlign:"center"},tdName:{width:110,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:function(e){return e.isDarkMode?"#666666":"#CCCCCC"},paddingTop:15,paddingBottom:15,textAlign:"right"},grid:{minHeight:260},cardActions:{paddingBottom:20,borderLeftStyle:function(e){return e.isDarkMode?"none":"solid"},borderRightStyle:function(e){return e.isDarkMode?"none":"solid"},borderBottomStyle:function(e){return e.isDarkMode?"none":"solid"},borderWidth:1,flexWrap:"wrap",justifyContent:"center"},actionbuttons:{paddingLeft:15,paddingRight:15}})})),it=function(e){var t,n=e.className,a=e.systemId,c=Object(z.a)(),i=Object(et.a)(c.breakpoints.up("md")),o=b(function(e){return function(t){return t.op25.systems.find((function(t){return t.id===e}))}}(a)),s=b(x),d=Object(r.useState)(!1),l=Object(ve.a)(d,2),u=l[0],p=l[1],j=ct({isDarkMode:s}),h=o?Object($.jsxs)("span",{children:[o.rxFrequency?Ne(o.rxFrequency):"-"," ","\xa0/\xa0"," ",o.txFrequency?Ne(o.txFrequency):"-"]}):Object($.jsx)("span",{children:"\u2013"});return Object($.jsxs)(Ge.a,{className:"".concat(j.root).concat(void 0!==n?" ".concat(n):""),variant:"outlined",children:[Object($.jsx)(Qe.a,{title:u?o?i?o.name||o.TopLine?"".concat(o.name?"".concat(o.name," / "):"").concat(o.TopLine?o.TopLine:"-"):"-":o.name?o.name:"-":"-":o&&o.name?o.name:"-",action:Object($.jsx)("span",{className:j.cardHeaderActions,children:Object($.jsx)(ce.a,{onClick:function(){p(!u)},children:u?Object($.jsx)(Xe.e,{}):Object($.jsx)(Xe.f,{})})}),className:j.cardHeader,titleTypographyProps:{variant:"subtitle2"}}),!u&&Object($.jsxs)(Ke.a,{className:j.cardContent,children:[Object($.jsx)(L.a,{className:j.currentsystem,variant:"caption",component:"h2",children:o&&o.TopLine?o.TopLine:"-"}),Object($.jsx)("div",{className:j.grid,children:Object($.jsxs)(ae.a,{container:!0,justifyContent:"center",spacing:2,children:[Object($.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object($.jsx)(L.a,{className:j.tableInfo,variant:"caption",component:"table",children:Object($.jsxs)("tbody",{children:[Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("td",{className:j.tdName,children:"WACN:"}),Object($.jsx)("td",{className:j.td,children:o&&o.wacn?"0x".concat(o.wacn.toString(16).toUpperCase()):"-"})]}),Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("td",{className:j.tdName,children:"System ID:"}),Object($.jsx)("td",{className:j.td,children:o&&o.syid?"0x".concat(o.syid.toString(16).toUpperCase()):"-"})]}),Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("td",{className:j.tdName,children:"NAC:"}),Object($.jsx)("td",{className:j.td,children:o&&o.nac?"0x".concat(o.nac.toString(16).toUpperCase()):"-"})]}),Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("td",{className:j.tdName,children:"RFSS/Site:"}),Object($.jsxs)("td",{className:j.td,children:[o&&o.rfid?"".concat(o.rfid.toString()," (").concat(o.rfid.toString(16).toUpperCase(),")"):"-"," ","\xa0/\xa0",o&&o.stid?"".concat(o.stid.toString().padStart(3,"0")," (").concat(o.stid.toString(16).toUpperCase(),")"):"-"]})]}),Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("td",{className:j.tdName,children:"Rx/Tx Frequency:"}),Object($.jsx)("td",{className:j.td,children:h})]}),Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("td",{className:j.tdName,children:"Secondary CC:"}),Object($.jsx)("td",{className:j.td,children:o&&o.secondaryFrequencies?o.secondaryFrequencies.map((function(e,t){return t>0?", ".concat(Ne(e)):Ne(e)})):"-"})]})]})})}),Object($.jsx)(ae.a,{item:!0,xs:12,lg:6,children:Object($.jsxs)(L.a,{className:j.table,variant:"caption",component:"table",children:[Object($.jsx)("thead",{children:Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("th",{className:j.td,children:"Voice Frequency:"}),Object($.jsx)("th",{className:j.td,children:"Last Used:"}),Object($.jsx)("th",{className:j.td,children:"Active Talkgroup ID(s):"}),Object($.jsx)("th",{className:j.td,children:"Count:"})]})}),Object($.jsx)("tbody",{children:null===o||void 0===o||null===(t=o.frequencies)||void 0===t?void 0:t.map((function(e){var t;return Object($.jsxs)("tr",{className:j.tr,children:[Object($.jsx)("td",{className:j.tdFrequency,children:Object($.jsxs)(ae.a,{container:!0,justifyContent:"space-around",alignItems:"center",spacing:2,children:[Object($.jsx)(U.a,{smDown:!0,children:Object($.jsx)(ae.a,{item:!0,children:Object($.jsx)(tt.a,{children:Object($.jsx)(Xe.g,{})})})}),Object($.jsx)(ae.a,{item:!0,children:Ne(e.frequency)})]})}),Object($.jsx)("td",{className:j.tdFrequency,children:e.lastActivitySeconds?Object(nt.a)(Object(rt.a)({start:Object(at.a)(new Date(Date.now()),{seconds:e.lastActivitySeconds}),end:new Date(Date.now())}),{format:["years","days","hours","minutes","seconds"]}):"-"}),Object($.jsx)("td",{className:j.tdFrequency,children:null===(t=e.talkgroups)||void 0===t?void 0:t.filter((function(e,t,n){return 0===t||-1===n.findIndex((function(t){return t.id===e.id}))})).map((function(e,t){return e.id?t>0?" / [ ".concat(e.id.toString()," ]"):"[ ".concat(e.id.toString()," ]"):"-"}))}),Object($.jsx)("td",{className:j.tdFrequency,children:e.counter&&e.counter>0?e.counter.toString():"00"})]},e.frequency)}))})]})})]})})]})]})},ot=Object(P.a)((function(e){return Object(q.a)({channelsHeadingText:{color:e.palette.getContrastText(e.palette.background.default),fontSize:"2em",marginBottom:15},systemsHeadingText:{color:e.palette.getContrastText(e.palette.background.default),fontSize:"2em",marginTop:50,marginBottom:15}})})),st=function(e){var t=e.onChannelHoldTalkgroup,n=e.onGoToTalkgroup,r=e.onReloadChannel,a=e.onBlacklistTalkgroup,c=e.onWhitelistTalkgroup,i=e.onLogVerboseChange,o=e.onSkipTalkgroup,s=ot(),d=b(He),l=b(Fe);return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(L.a,{component:"h1",className:s.channelsHeadingText,children:"Channels:"}),Object($.jsx)(ae.a,{container:!0,spacing:2,children:d.map((function(e){return Object($.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object($.jsx)($e,{channelId:e.id,onChannelHoldTalkgroup:t,onGoToTalkgroup:n,onReloadChannel:r,onBlacklistTalkgroup:a,onWhitelistTalkgroup:c,onLogVerboseChange:i,onSkipTalkgroup:o})},e.id)}))}),Object($.jsx)(L.a,{component:"h1",className:s.systemsHeadingText,children:"Systems:"}),Object($.jsx)(ae.a,{container:!0,spacing:2,children:l.map((function(e){return Object($.jsx)(ae.a,{item:!0,xs:12,children:Object($.jsx)(it,{systemId:e.id})},e.id)}))})]})},dt=n(268),lt=n(273),ut=Object(P.a)((function(e){return Object(q.a)({spaced:{marginBottom:20}})})),pt=function(){var e=Object(r.useState)(!1),t=Object(ve.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),i=Object(ve.a)(c,2),o=i[0],s=i[1],d=b(Ee),l=b(Ve),u=ut();Object(r.useEffect)((function(){d&&!o&&a(!0)}),[d]),Object(r.useEffect)((function(){setTimeout((function(){s(!1)}),5e3)}),[]);var p=function(e,t){"clickaway"!==t&&a(!1)};return Object($.jsxs)($.Fragment,{children:[!o&&void 0!==d&&!d&&Object($.jsxs)(dt.a,{className:u.spaced,variant:"filled",severity:"error",children:["The OP25 web interface does not have a connection with the Python HTTP server. Address attempted is: ",we]}),!o&&d&&0===l&&Object($.jsx)(dt.a,{className:u.spaced,variant:"outlined",severity:"error",children:"There are no available systems. Check the logs for a control channel timeout."}),n&&Object($.jsx)(lt.a,{open:n,autoHideDuration:6e3,onClose:p,children:Object($.jsx)(dt.a,{variant:"filled",severity:"success",onClose:p,children:"OP25 web interface reconnected with Python HTTP server."})})]})},jt=function(){var e=Object(p.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},ht=Object(P.a)((function(e){var t;return Object(q.a)({content:(t={width:"100%"},Object(l.a)(t,e.breakpoints.down("xs"),{paddingTop:90,paddingBottom:20,paddingLeft:20,paddingRight:20}),Object(l.a)(t,e.breakpoints.up("sm"),{paddingLeft:function(e){return e.isOpen&&265},paddingTop:90,paddingBottom:25,paddingRight:25}),t),tempDebugContent:{marginTop:50}})})),bt=function(){var e=_e.getInstance(),t=h(),n=b(_),a=ht({isOpen:n}),c=function(){var t=Object(d.a)(s.a.mark((function t(n,r){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sendHoldOnChannel(n,r);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=Object(d.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=prompt("Hold on what talkgroup ID?"))){t.next=4;break}return t.next=4,e.sendHoldOnChannel(n,Number.parseInt(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(d.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sendReloadOnChannel(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(d.a)(s.a.mark((function t(n,r){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=prompt("Blacklist what talkgroup ID?",r.toString()))){t.next=4;break}return t.next=4,e.sendBlacklistOnChannel(n,Number.parseInt(a));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(d.a)(s.a.mark((function t(n,r){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=prompt("Whitelist what talkgroup ID?",r.toString()))){t.next=4;break}return t.next=4,e.sendWhitelistOnChannel(n,Number.parseInt(a));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(d.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=prompt("What log verbose level?"))){t.next=4;break}return t.next=4,e.sendSetDebugOnChannel(n,Number.parseInt(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(d.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sendSkipOnChannel(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var n=setInterval(Object(d.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.sendUpdateChannels();case 1:case"end":return t.stop()}}),t)}))),1e3),r=setInterval(Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Ie());case 2:case"end":return e.stop()}}),e)}))),1e3);return function(){clearInterval(n),clearInterval(r)}}),[]),Object($.jsxs)(u.a,{children:[Object($.jsx)(xe,{}),Object($.jsxs)("div",{className:a.content,children:[Object($.jsx)(pt,{}),Object($.jsx)(p.c,{children:Object($.jsxs)(p.a,{path:"/",exact:!0,children:[Object($.jsx)(jt,{}),Object($.jsx)(st,{onChannelHoldTalkgroup:c,onGoToTalkgroup:i,onReloadChannel:o,onBlacklistTalkgroup:l,onWhitelistTalkgroup:j,onLogVerboseChange:f,onSkipTalkgroup:m})]})})]})]})},ft=Object(f.a)({reducer:{interface:R,op25:ze,preferences:v}}),mt={interface:{isMenuDrawerOpen:!0,isMobileMenuDrawerOpen:!1,isPreferencesDrawerOpen:!1},preferences:{darkmode:!0},op25:{isConnected:!1,channels:[{id:1,encrypted:!1,frequency:85625e4,name:"Dummy Channel",ppm:0,sourceAddress:1234,sourceTag:"Dispatcher",systemName:"Dummy System",tdma:!1,tgID:123,tgTag:"Dummy Talkgroup"},{id:2,encrypted:!0,frequency:85625e4,name:"Acme Channel",ppm:0,sourceAddress:9876,sourceTag:"Roadrunner",systemName:"Acme Corp",tdma:!0,tgID:999,tgTag:"Acme Outdoors Secure Talkgroup"},{id:3,encrypted:!1,frequency:85625e4,name:"State Patrol Channel",ppm:0,sourceAddress:5463,sourceTag:"Trooper Allen",systemName:"Statewide System",tdma:!0,tgID:456,tgTag:"Section 1A Talkgroup"}],systems:[],terminalConfig:void 0,send_queue:[{command:"get_config",arg1:0,arg2:0}]}},Ot=(Object(f.a)({reducer:{interface:R,op25:ze,preferences:v},preloadedState:mt}),n(265)),gt=(n(189),n(62)),xt=n(260),vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.useDarkMode;return Object(gt.b)({palette:{type:!1===t?"light":"dark",secondary:{main:le.a[500]}}})},yt=function(e){var t=e.children,n=e.theme,r=void 0===n?"default":n,a=b(x),c="default"===r?a:"dark"===r;return Object($.jsx)(xt.a,{theme:vt({useDarkMode:c}),children:t})},kt=ft;_e.getInstance().setStore(kt),i.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(j.a,{store:kt,children:Object($.jsxs)(yt,{children:[Object($.jsx)(Ot.a,{}),Object($.jsx)(bt,{})]})})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.cd71f002.chunk.js.map