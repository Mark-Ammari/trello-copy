(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{100:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(99),a(18)),i=a(14),s=a(21),d=a(22),u=a(23),m=Object(n.createContext)({color:"",changeColor:function(){},colorScheme:[]}),C=(a(100),a(70)),p=a.n(C),E=a(71),h=a.n(E),g=a(51),f=a(150),_=a(153),A=a(155),b=a(177),O=a(33),v=a.n(O),y=a(19),T=a(75),S=a.n(T).a.create({baseURL:"https://trellocopycat.herokuapp.com/",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE"}}),D=function(){return function(e){e({type:"FETCH_BOARDLIST_START"}),S.get("/v1/api").then((function(t){e(function(e,t){return{type:"FETCH_BOARDLIST_SUCCESS",res:e,color:t}}(t.data,t.data.boardListContainer.color.color))})).catch((function(t){console.log(t),e({type:"FETCH_BOARDLIST_FAIL"})}))}},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleColorChange=function(e){a.props.onChangeColor(e.target.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:v.a.ColorPicker},r.a.createElement("div",{onClick:this.handleColorChange,id:"red",className:v.a.Red}),r.a.createElement("div",{onClick:this.handleColorChange,id:"blue",className:v.a.Blue}),r.a.createElement("div",{onClick:this.handleColorChange,id:"green",className:v.a.Green}),r.a.createElement("div",{onClick:this.handleColorChange,id:"orange",className:v.a.Orange}),r.a.createElement("div",{onClick:this.handleColorChange,id:"purple",className:v.a.Purple}),r.a.createElement("div",{onClick:this.handleColorChange,id:"gray",className:v.a.Gray}))}}]),t}(n.Component),B=Object(y.b)(null,(function(e){return{onChangeColor:function(t){return e(function(e){return function(t){t({type:"PUT_COLOR_START"}),S.put("/v1/api/changecolor/",null,{params:{color:e}}).then((function(e){t(function(e){return{type:"PUT_COLOR_SUCCESS",res:e}}(e.data.color)),t(D())})).catch((function(e){console.log(e),t({type:"PUT_COLOR_FAIL"})}))}}(t))}}}))(L),R=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),color:"white",fontSize:"15pt"}}}}));function k(){var e=R(),t=r.a.useState(null),a=Object(g.a)(t,2),n=a[0],o=a[1],c=Boolean(n),l=c?"simple-popover":void 0;return r.a.createElement("div",{className:e.root},r.a.createElement(_.a,{onClick:function(e){o(e.currentTarget)},size:"medium","aria-label":"add to shopping cart"},r.a.createElement(A.a,{fontSize:"small"})),r.a.createElement(b.a,{id:l,open:c,anchorEl:n,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"right"}},r.a.createElement(B,null)))}var w={red:["#953b2a","#b04632"],blue:["#0067a2","#0079bf"],green:["#448130","#519839"],orange:["#b27a2c","#d29034"],purple:["#745186","#89609e"],gray:["#6f777b","#838c91"]},j=function(){var e=Object(n.useContext)(m);return r.a.createElement("header",{style:{background:w[e.color][0]},className:p.a.Header},r.a.createElement("img",{src:h.a,alt:"trello"}),r.a.createElement(k,null))},N=a(54),P=a.n(N),H=a(77),I=a.n(H),F=a(160),U=a(55),M=a.n(U),x=a(157),G=a(158),z=a(159),V=function(e){return r.a.createElement("div",{className:M.a.AddListDropdownContainer},r.a.createElement("input",{onChange:e.onChange,value:e.value,autoFocus:!0,type:"text",placeholder:"Enter list title..."}),r.a.createElement("div",{className:M.a.AddListDropdown},r.a.createElement(x.a,{onClick:e.btnclick,style:{marginRight:"0.5em"},title:"add list",variant:"contained",color:"primary"},"Add List"),r.a.createElement(G.a,{onClick:e.fabclick,style:{marginLeft:"0.5em"},color:"primary",size:"small"},r.a.createElement(z.a,{fontSize:"small"}))))},W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,value:""},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.changeTextFieldValueHandler=function(e){a.setState({value:e.target.value})},a.createBoardHandler=function(){a.props.onCreateNewBoard(a.state.value),a.handleClose()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:I.a.AddListBtn,onClick:this.handleClick},r.a.createElement(F.a,null)," Add a list"),r.a.createElement(b.a,{open:Boolean(this.state.anchorEl),anchorEl:this.state.anchorEl,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(V,{btnclick:this.createBoardHandler,onChange:this.changeTextFieldValueHandler,value:this.state.value,fabclick:this.handleClose})))}}]),t}(n.Component),Q=Object(y.b)(null,(function(e){return{onCreateNewBoard:function(t){return e(function(e){return function(t){t({type:"POST_NEWBOARD_START"}),S.post("/v1/api/newBoard/".concat(e)).then((function(e){console.log(e),t(function(e){return{type:"POST_NEWBOARD_SUCCESS",res:e}}(e)),t(D())})).catch((function(e){console.log(e),t({type:"POST_NEWBOARD_FAIL"})}))}}(t))}}}))(W),J=a(45),Y=a.n(J),Z=a(161),q=a(162),K=a(78),X=a.n(K),$=function(e){return r.a.createElement("div",{className:X.a.AddCardBtn,onClick:e.addCard},r.a.createElement(F.a,null)," Add another card")},ee=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Y.a.BoardList},r.a.createElement("div",{className:Y.a.BoardListContent},r.a.createElement(Z.a,{component:"h6",variant:"h6"},this.props.title),r.a.createElement("span",{className:Y.a.Icon,onClick:this.props.onClick},r.a.createElement(q.a,{color:"secondary"}))),this.props.cards,r.a.createElement("div",{className:Y.a.Margin}),r.a.createElement($,{addCard:this.props.addCard}))}}]),t}(n.Component),te=r.a.memo(Object(y.b)((function(e){return{boardList:e.boardList.boardList}}),(function(e){return{onPostCardData:function(){return e(D())}}}))(ee)),ae=a(175),ne=a(163),re=a(165),oe=a(34),ce=a.n(oe),le=a(164),ie=a(166),se=a(167),de=a(168),ue=a(79),me=Object(f.a)({root:{background:"#f4f5f7"},icons:{marginRight:"7px",color:"#172b4d",fontSize:"20pt"}}),Ce=function(e){var t=me(),a=Object(n.useState)(!1),o=Object(g.a)(a,2),c=o[0],l=o[1],i=function(){l(!1)};return r.a.createElement("div",{className:ce.a.CardModal},r.a.createElement("span",{onClick:function(){l(!0)}},e.btn),r.a.createElement(ae.a,{fullWidth:!0,open:c,onClose:i,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(ne.a,{className:t.root},r.a.createElement(_.a,{size:"small",onClick:i},r.a.createElement(le.a,{fontSize:"small"}))),r.a.createElement(re.a,{className:t.root},r.a.createElement("div",{className:ce.a.DialogContent},r.a.createElement(ie.a,{className:t.icons,fontSize:"large"}),r.a.createElement(ue.a,{onChange:e.changecardtitle,className:ce.a.Input,minRows:2,maxRows:5,defaultValue:e.cardtitle})),r.a.createElement("div",{className:[ce.a.DialogContent,ce.a.IssueType].join(" ")},r.a.createElement(se.a,{className:t.icons,fontSize:"large"}),e.dropdown),r.a.createElement("div",{className:ce.a.MultilineContent},r.a.createElement(de.a,{className:t.icons,fontSize:"large"}),r.a.createElement("textarea",{onChange:e.changecarddescription,className:ce.a.TextArea,rows:5,defaultValue:e.carddescription}))),r.a.createElement(ne.a,{className:t.root},r.a.createElement("span",{onClick:i},e.savebtn),r.a.createElement("span",{onClick:i},e.deletebtn))))},pe=a(176),Ee=a(173),he=Object(f.a)((function(e){return{margin:{},formControl:{margin:e.spacing(1),minWidth:120}}})),ge=function(e){var t=he();return r.a.createElement("div",null,r.a.createElement(Ee.a,{value:e.value,variant:"outlined",margin:"dense",onChange:e.onChange,className:t.selectEmpty},r.a.createElement(pe.a,{value:"issue"},r.a.createElement("em",null,"issue")),r.a.createElement(pe.a,{value:"story"},"story"),r.a.createElement(pe.a,{value:"task"},"task"),r.a.createElement(pe.a,{value:"bug"},"bug")))},fe=a(41),_e=a.n(fe),Ae=a(169),be=a(170),Oe=a(171),ve=a(172),ye=function(e){var t=null;switch(e.issue){case"story":t=r.a.createElement(Ae.a,{style:{color:"#61bd4f"}});break;case"task":t=r.a.createElement(be.a,{style:{color:"#00c2e0"}});break;case"bug":t=r.a.createElement(Oe.a,{style:{color:"#EB5a46"}});break;default:t=null}return r.a.createElement("div",{onClick:e.click,className:_e.a.Card},r.a.createElement(Z.a,{component:"h6",className:_e.a.Typography},e.summary),r.a.createElement("div",{className:_e.a.IconsContainer},r.a.createElement("div",{className:_e.a.Icons},t,r.a.createElement(ve.a,{style:{color:"#c3c3c3"},className:_e.a.Edit}))))},Te=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={summary:"",description:"",issue:""},a.deleteBoardHandler=function(e){a.props.onDeleteBoardListData(e)},a.changeTitleHandler=function(e){a.setState({summary:e.target.value})},a.changeDescriptionHandler=function(e){a.setState({description:e.target.value})},a.changeIssueHandler=function(e){a.setState({issue:e.target.value})},a.showCardsDataHandler=function(e,t){var n=Object.keys(a.props.boardList.boardListContainer)[e],r=Object.keys(a.props.boardList.boardListContainer[n]).filter((function(e){return"title"!==e}))[t],o=a.props.boardList.boardListContainer[n][r];a.setState({summary:o.summary,description:o.description,issue:o.issueType||"issue"})},a.changeCardDataHandler=function(e,t,n,r,o){a.props.onChangeCardData(e,t,n,r,o)},a.addNewCardHandler=function(e){a.props.onAddCard(e)},a.removeCardHandler=function(e,t){a.props.onDeleteCard(e,t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this;return e=Object.values(this.props.boardList.boardListContainer).filter((function(e){return!("color"in e)})).map((function(e,a){return r.a.createElement(te,{addCard:function(){return t.addNewCardHandler(a)},onClick:function(){return t.deleteBoardHandler(a)},key:a,title:e.title,cards:Object.keys(e).filter((function(e){return"title"!==e})).map((function(n,o){return r.a.createElement(Ce,{cardtitle:t.state.summary,carddescription:t.state.description,dropdown:r.a.createElement(ge,{value:t.state.issue,onChange:t.changeIssueHandler}),cardissue:t.state.issue,changecardissue:t.changeIssueHandler,changecardtitle:t.changeTitleHandler,changecarddescription:t.changeDescriptionHandler,deletebtn:r.a.createElement(x.a,{onClick:function(){return t.removeCardHandler(a,o)},color:"secondary"},"Delete"),savebtn:r.a.createElement(x.a,{onClick:function(){return t.changeCardDataHandler(a,o,t.state.summary,t.state.description,t.state.issue)},color:"primary"},"Save"),key:o,btn:r.a.createElement(ye,{click:function(){return t.showCardsDataHandler(a,o)},issue:e[n].issueType,summary:e[n].summary.length>99?e[n].summary.substring(0,99)+"...":e[n].summary})})}))})})),r.a.createElement("div",{className:P.a.BoardListContainer},e,r.a.createElement(Q,null),r.a.createElement("div",{className:P.a.Border}))}}]),t}(n.Component),Se=Object(y.b)((function(e){return{boardList:e.boardList.boardList}}),(function(e){return{onDeleteBoardListData:function(t){return e(function(e){return function(t){t({type:"DELETE_BOARD_START"}),S.delete("/v1/api/deleteboard/".concat(e)).then((function(e){t(function(e){return{type:"DELETE_BOARD_SUCCESS",res:e}}(e)),t(D())})).catch((function(e){console.log(e),t({type:"DELETE_BOARD_FAIL"})}))}}(t))},onChangeCardData:function(t,a,n,r,o){return e(function(e,t,a,n,r){return function(o){o({type:"PUT_CARD_START"}),S.put("/v1/api/changecard/".concat(e,"/").concat(t,"/"),null,{params:{summary:a,description:n,issue:r}}).then((function(e){console.log(e),o(function(e){return{type:"PUT_CARD_SUCCESS",res:e}}(e)),o(D())})).catch((function(e){console.log(e),o({type:"PUT_CARD_FAIL"})}))}}(t,a,n,r,o))},onAddCard:function(t){return e(function(e){return function(t){t({type:"POST_NEWCARD_START"}),S.post("/v1/api/newboard/".concat(e,"/newcard")).then((function(e){t(function(e){return{type:"POST_NEWCARD_SUCCESS",res:e}}(e)),t(D())})).catch((function(e){console.log(e),t({type:"POST_NEWCARD_FAIL"})}))}}(t))},onDeleteCard:function(t,a){return e(function(e,t){return function(a){a({type:"DELETE_CARD_START"}),S.delete("/v1/api/deleteboard/".concat(e,"/deletecard/").concat(t)).then((function(e){console.log(e),a(function(e){return{type:"DELETE_CARD_SUCCESS",res:e}}(e)),a(D())})).catch((function(e){console.log(e),a({type:"DELETE_CARD_FAIL"})}))}}(t,a))}}}))(Te),De=a(80),Le=a.n(De),Be=a(81),Re=a.n(Be),ke=a(82),we=a.n(ke),je=function(){var e=Object(n.useContext)(m);return r.a.createElement("footer",{style:{backgroundColor:w[e.color][0]},className:Le.a.Footer},r.a.createElement("p",null,"Created by Mark Ammari"),r.a.createElement("div",null,r.a.createElement("a",{re:"noopener noreferrer",target:"_blank",href:"https://github.com/Mark-Ammari"},r.a.createElement("img",{src:Re.a,alt:"github"})),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Mark-Ammari/trello-copy"},r.a.createElement("img",{src:we.a,alt:"source-code"}))))},Ne=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchBoardListData()}},{key:"render",value:function(){return document.body.style.backgroundColor=w[this.props.color][1],r.a.createElement(m.Provider,{value:{color:this.props.color}},r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(Se,null),r.a.createElement("div",{className:"Border"}),r.a.createElement(je,null)))}}]),t}(n.Component),Pe=Object(y.b)((function(e){return{color:e.boardList.color}}),(function(e){return{onFetchBoardListData:function(){return e(D())}}}))(Ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=a(56),Ie=a(83),Fe=a(84),Ue=a.n(Fe),Me=a(20),xe=a(85),Ge=a(7),ze={boardList:{},color:""},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOARDLIST_START":case"FETCH_BOARDLIST_FAIL":return Object(Ge.a)({},e);case"FETCH_BOARDLIST_SUCCESS":return Object(Ge.a)({},e,{boardList:t.res,color:t.color});default:return e}},We={createNewBoardMsg:{}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_NEWBOARD_START":case"POST_NEWBOARD_FAIL":return Object(Ge.a)({},e);case"POST_NEWBOARD_SUCCESS":return Object(Ge.a)({},e,{createNewBoardMsg:t.res});default:return e}},Je={createNewCardMsg:{}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_NEWCARD_START":case"POST_NEWCARD_FAIL":return Object(Ge.a)({},e);case"POST_NEWCARD_SUCCESS":return Object(Ge.a)({},e,{createNewCardMsg:t.res});default:return e}},Ze={deleteBoardMsg:{}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_BOARD_START":case"DELETE_BOARD_FAIL":return Object(Ge.a)({},e);case"DELETE_BOARD_SUCCESS":return Object(Ge.a)({},e,{deleteBoardMsg:t.res});default:return e}},Ke={deleteCardMsg:{}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_CARD_START":case"DELETE_CARD_FAIL":return Object(Ge.a)({},e);case"DELETE_CARD_SUCCESS":return Object(Ge.a)({},e,{deleteCardMsg:t.res});default:return e}},$e={changeCardMsg:{}},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_CARD_START":case"PUT_CARD_FAIL":return Object(Ge.a)({},e);case"PUT_CARD_SUCCESS":return Object(Ge.a)({},e,{changeCardMsg:t.res});default:return e}},tt={changeColor:""},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_COLOR_START":case"PUT_COLOR_FAIL":return Object(Ge.a)({},e);case"PUT_COLOR_SUCCESS":return Object(Ge.a)({},e,{changeColor:t.res});default:return e}},nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Me.d,rt=Object(Me.c)({boardList:Ve,newBoard:Qe,newCard:Ye,deleteBoard:qe,deleteCard:Xe,changeCard:et,changeColor:at}),ot={key:"root",storage:Ue.a},ct=Object(He.a)(ot,rt),lt=Object(Me.e)(ct,nt(Object(Me.a)(xe.a))),it=Object(He.b)(lt);c.a.render(r.a.createElement(y.a,{store:lt},r.a.createElement(Ie.a,{loading:null,persistor:it},r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){e.exports={Red:"ColorPicker_Red__2jqYi",Blue:"ColorPicker_Blue__2Ed2d",Green:"ColorPicker_Green__3dPrT",Orange:"ColorPicker_Orange__2X11C",Purple:"ColorPicker_Purple__11VMV",Gray:"ColorPicker_Gray__yu7ja",ColorPicker:"ColorPicker_ColorPicker__3fnC8"}},34:function(e,t,a){e.exports={DialogContent:"CardModal_DialogContent__1jYqe",IssueType:"CardModal_IssueType__1TBBB",Input:"CardModal_Input__2XLYf",TextArea:"CardModal_TextArea__3lrZV",MultilineContent:"CardModal_MultilineContent__3Hsag"}},41:function(e,t,a){e.exports={Card:"Card_Card__1zpQO",Icons:"Card_Icons__2roOr",Typography:"Card_Typography__2sK5G"}},45:function(e,t,a){e.exports={BoardList:"BoardList_BoardList__3OkJR",BoardListContent:"BoardList_BoardListContent__-BC8i",Margin:"BoardList_Margin__33S9q",Icon:"BoardList_Icon__bii_V"}},54:function(e,t,a){e.exports={BoardListContainer:"BoardListContainer_BoardListContainer__1cbVT",Border:"BoardListContainer_Border__WrKhI"}},55:function(e,t,a){e.exports={AddListDropdownContainer:"AddListDropdown_AddListDropdownContainer__Gylr7",AddListDropdown:"AddListDropdown_AddListDropdown__PJJD1"}},70:function(e,t,a){e.exports={Header:"Header_Header__34gci"}},71:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAA8CAMAAADWtUEnAAAAV1BMVEX///8jHyAjHyD///////////////////////////////////////////////////////////////////////////////////////////////////////98ygg7AAAAHHRSTlMAAQIQIC4wPUBQYHCAgpCcoLDAytDc4Ovw8fP+YuFlbAAAA8hJREFUeF7tmOuSnCAQhWe2CUHoGCSEkMT3f86sM2gfmYlLSqt2K+X5tcyKfPQVvPx/OnXq1Kl+fFXStwGFaRDoI/F1402+wN5kPxJgujPlaaDGu4YPxKeRicvAtUw0WzoO0I/g1VQGqiVwtzX8NY5Nxxxe1esWPlOQIhqw38cnQV2k2LzikjGOhwgTQgNiKEzTo5Tvg/R2Eo8Nwih6VGM22sLH6G1zORaQtx7aFiWxGaRLGyArceGzcUs8+A043JsBb2dqA8RMUvV4y4JxYGuMsWEcs9rmUxmSoiuw3aURsHlMHvmytIiHpbRj5k6oPSZFEgcfBohFU0G4P5eZMhxbrUYHu7WDybLTRwFiPqaW0hVKiQEHU145mG/DoA4CBA/Z7Y6BncKgg1kcDA9HOgzQgG2IYw4QgODBJ1lrIF0yVZuxhwEOsBpDPyVjDElB7gWq/DQgkqvLQjoKUGFw2SVblL9Zxn8uGdAVQ9MSE5keppsRFJiHEAbWOwEZm5SZYTmXZX6XhluoghjQoQE1eDu6caV+F2BZOGJCBx3rzjxT2WqGQob7rKyqfht3AXaFAHMw55pvNk4SAxqcgOncTUkEGmgXoF81ESRDH1EUquJrNCDD3wOeWLK3al+SkKxQH78yF6y4RFovJlewvQTVINPy0s60ZPHWYUH8pR4PDz3NSalnviA10F+giVjIYIup1gooma65AhxW75LciHpxJs98kYRDwYYSdL8grZHbAWs9eNgu5i3ywpKp8GUlTh2wAjiYa+RnvRMQPUxVU7NgXZ75NOzIQAXIJFYL8PNlPyDaAz1s0boJ+S5fsI0NEI6x7tT+EMCMl20lfGBd5KPSkB0+D5ZNkC1mNyBEvHgYts4PfCqujqYOu7A0lCisuwH71bsiNqZVO4i3Leg84hbMD7D318WYTtywHzDKeuIxBMRmZSc+eaSHiwyVZ/F4uB8QiwzENiZQfdQDJg9XYYry4iBz2q+dtaoioyWicK7DryAKHB6QnoFvXCbFGmu7c9R6dlBQuS4OGpZyGZsg8I0d8I3OZNhzrev1Xz994LnEV3dvLG3djPC9bMILrRU+EV+OAcTDZhBrVhEQFuv5T3cARErlv9+qzyYHAjJUnKG6TqFydRL9+QsGkTzE6FGAAQDVk9ghJPRUIrUo6w75JM0H2gT047ZwhwYrgp29jTJhJjCFOcBHEJ1W1yIdJu46/mpAepMwiJmUz/JR1Hj3ZO+qD2PyFpgns6a5X8eJVdru5ifwl5cJ8b11Ap6A76cT8AS8Xk/AfdqJdwL+AZ4nJzaBqOx2AAAAAElFTkSuQmCC"},77:function(e,t,a){e.exports={AddListBtn:"AddListBtn_AddListBtn__1dICr"}},78:function(e,t,a){e.exports={AddCardBtn:"AddCardBtn_AddCardBtn__2y1v2"}},80:function(e,t,a){e.exports={Footer:"Footer_Footer__1CLEo"}},81:function(e,t,a){e.exports=a.p+"static/media/github.bef99f4f.svg"},82:function(e,t,a){e.exports=a.p+"static/media/sourcecode.da9c79e2.svg"},94:function(e,t,a){e.exports=a(126)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.a9a7cbc1.chunk.js.map