(this.webpackJsonpreact_ludo=this.webpackJsonpreact_ludo||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),jquery__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),jquery__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__),_github_png__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),equalsHit=0,decimalHit=0,Main=function(_React$Component){Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Main,_React$Component);var _super=Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Main);function Main(_){var e;return Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Main),(e=_super.call(this,_)).state={formula:"",display:"0",pawns:{red:[-1,-1,-1,-1],green:[-1,-1,-1,-1],yellow:[-1,-1,-1,-1],blue:[-1,-1,-1,-1]},turn:"red",pawn_no:1},e.handleClick=e.handleClick.bind(Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.keyPress=e.keyPress.bind(Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.color_selector_change=e.color_selector_change.bind(Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.pawn_selector_change=e.pawn_selector_change.bind(Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_laragon_www_shilpichak_github_io_react_ludo_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Main,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;window.addEventListener("keydown",this.keyPress);var roundAccurately=function(_,e){return Number(Math.round(_+"e"+e)+"e-"+e)},regex=/[x*X/+-]/;this.number=function(_){if(_this2.state.formula.length>20|_this2.state.display.length>12)_this2.setState({formula:"",display:"LIMIT REACHED"});else if("0"===_this2.state.formula|equalsHit>=1)equalsHit>=1&&(equalsHit=0),_this2.setState({formula:_,display:_});else if(regex.test(_this2.state.display.charAt(0))|"0"===_this2.state.display)if("0"===_this2.state.display){var e=_this2.state.formula.split("");console.log(e),e.splice(e.length-1,1);e=e.join("");console.log(e),_this2.setState({formula:e+_,display:_})}else _this2.setState({formula:_this2.state.formula+_,display:_});else _this2.setState({formula:_this2.state.formula+_,display:_this2.state.display+_})},this.operator=function(_){if(decimalHit=0,_this2.state.formula.length>25|_this2.state.display.length>15)_this2.setState({formula:"",display:"LIMIT REACHED"});else if(equalsHit>=1)equalsHit=0,_this2.setState({formula:_this2.state.display+_,display:_});else if(/[-]/.test(_this2.state.formula.charAt(_this2.state.formula.length-1))&&regex.test(_this2.state.formula.charAt(_this2.state.formula.length-2))){(e=_this2.state.formula.split("")).splice(e.length-2,2,_);var e=e.join("");_this2.setState({formula:e})}else if(regex.test(_this2.state.formula.charAt(_this2.state.formula.length-1))){var t=_this2.state.formula.slice(0,_this2.state.formula.length-1)+_;_this2.setState({formula:t,display:_})}else _this2.setState({formula:_this2.state.formula+_,display:_})},this.decimal=function(){_this2.state.formula.length>25|_this2.state.display.length>15?_this2.setState({formula:"",display:"LIMIT REACHED"}):regex.test(_this2.state.display.charAt(0))||0==_this2.state.display&""==_this2.state.formula?_this2.setState({formula:_this2.state.formula+"0.",display:"0."}):equalsHit>=1?(equalsHit=0,_this2.setState({display:"0.",formula:"0."})):_this2.setState({formula:_this2.state.formula+".",display:_this2.state.display+"."})},this.subtract=function(){/[-]/.test(_this2.state.formula.charAt(_this2.state.formula.length-1))||(decimalHit=0,_this2.setState({formula:_this2.state.formula+"-",display:"-"}))},this.answer=function(){if(_this2.state.formula.length>14|_this2.state.display.length>14)_this2.setState({formula:"",display:"LIMIT REACHED"});else if(0==equalsHit&&!regex.test(_this2.state.formula.charAt(_this2.state.formula.length-1))){decimalHit=0,equalsHit+=1;var answer=roundAccurately(eval(_this2.state.formula),4).toString();return console.log(_this2.state.formula.length),_this2.setState({formula:_this2.state.formula+"="+answer,display:answer}),answer}}}},{key:"handleClick",value:function(_){switch(_.target.id){case"clear":decimalHit=0,this.setState({formula:"",display:"0"});break;case"divide":this.operator("/");break;case"multiply":this.operator("*");break;case"add":this.operator("+");break;case"subtract":this.subtract();break;case"seven":this.number("7");break;case"eight":this.number("8");break;case"nine":this.number("9");break;case"four":this.number("4");break;case"five":this.number("5");break;case"six":this.number("6");break;case"one":this.number("1");break;case"two":this.number("2");break;case"three":this.number("3");break;case"zero":this.number("0");break;case"decimal":(decimalHit+=1)<=1&&this.decimal();break;case"equals":this.answer()}}},{key:"color_selector_change",value:function(_){console.log(this.state.turn),jquery__WEBPACK_IMPORTED_MODULE_6___default()("#turn_color").removeClass("dark-"+this.state.turn);var e=_.target.value;this.setState({turn:e}),console.log(e),jquery__WEBPACK_IMPORTED_MODULE_6___default()("#turn_color").addClass("dark-"+e)}},{key:"pawn_selector_change",value:function(_){console.log(this.state.pawn_no);var e=_.target.value;this.setState({pawn_no:e}),console.log(e),jquery__WEBPACK_IMPORTED_MODULE_6___default()("#pawn_no").html(e)}},{key:"keyPress",value:function(_){if(_.key>="1"&&_.key<="6"){var e=this.state.turn,t=["red","green","yellow","blue"],a=t.indexOf(e),s=this.state.pawn_no,l=s-1,r=_.key.charCodeAt(0)-48,i=this.state.pawns;if(-1==i[e][l]&&6!=r){jquery__WEBPACK_IMPORTED_MODULE_6___default()("#color_selector").val(t[(a+1)%4]);var c=new Event("change",{bubbles:!0});return void jquery__WEBPACK_IMPORTED_MODULE_6___default()("#color_selector")[0].dispatchEvent(c)}if(-1==i[e][l]&&6==r)i[e][l]=0;else{if(i[e][l]+r>56){jquery__WEBPACK_IMPORTED_MODULE_6___default()("#color_selector").val(t[(a+1)%4]);var d=new Event("change",{bubbles:!0});return void jquery__WEBPACK_IMPORTED_MODULE_6___default()("#color_selector")[0].dispatchEvent(d)}if(6!=r){jquery__WEBPACK_IMPORTED_MODULE_6___default()("#color_selector").val(t[(a+1)%4]);var n=new Event("change",{bubbles:!0});jquery__WEBPACK_IMPORTED_MODULE_6___default()("#color_selector")[0].dispatchEvent(n)}i[e][l]=i[e][l]+r}this.setState({pawns:i}),jquery__WEBPACK_IMPORTED_MODULE_6___default()("[data-"+e+'="'+i[e][l]+'"]').css("top"),jquery__WEBPACK_IMPORTED_MODULE_6___default()("#"+e+"-"+s).css("top",jquery__WEBPACK_IMPORTED_MODULE_6___default()("[data-"+e+'="'+i[e][l]+'"]').css("top")),jquery__WEBPACK_IMPORTED_MODULE_6___default()("#"+e+"-"+s).css("left",jquery__WEBPACK_IMPORTED_MODULE_6___default()("[data-"+e+'="'+i[e][l]+'"]').css("left")),jquery__WEBPACK_IMPORTED_MODULE_6___default()("#"+e+"-"+s).css("visibility","visible"),jquery__WEBPACK_IMPORTED_MODULE_6___default()("#"+e+"-base-"+s).css("visibility","hidden")}"+"==_.key&&this.operator("+"),"-"==_.key&&this.subtract(),"*"==_.key&&this.operator("*"),"/"==_.key&&this.operator("/"),"="!=_.key&&"Enter"!=_.key||this.answer(),"."==_.key&&(decimalHit+=1)<=1&&this.decimal(),"Escape"==_.key&&(decimalHit=0,this.setState({formula:"",display:"0"}))}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{id:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2",{class:"text-center",style:{color:"white",background:"linear-gradient(90deg,#0047ff,#ff4040)"},children:"REACT LUDO"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"ludo",class:"ludo-box",style:{background:"#fff",margin:"auto",padding:"6px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{class:"game",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"house green",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{class:"box",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-one green"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-two green"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-three green"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-four green"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-base-1",class:"square square-one dark-green pawn",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-base-2",class:"square square-two dark-green pawn",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-base-3",class:"square square-three dark-green pawn",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-base-4",class:"square square-four dark-green pawn",children:"4"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"house yellow",style:{right:"0"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{class:"box",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-one yellow"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-two yellow"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-three yellow"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-four yellow"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-base-1",class:"square square-one dark-yellow pawn",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-base-2",class:"square square-two dark-yellow pawn",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-base-3",class:"square square-three dark-yellow pawn",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-base-4",class:"square square-four dark-yellow pawn",children:"4"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"house red",style:{bottom:"0"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{class:"box",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-one red"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-two red"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-three red"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-four red"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-base-1",class:"square square-one dark-red pawn",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-base-2",class:"square square-two dark-red pawn",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-base-3",class:"square square-three dark-red pawn",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-base-4",class:"square square-four dark-red pawn",children:"4"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"house blue",style:{bottom:"0",right:"0"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{class:"box",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-one blue"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-two blue"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-three blue"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"square square-four blue"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-base-1",class:"square square-one dark-blue pawn",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-base-2",class:"square square-two dark-blue pawn",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-base-3",class:"square square-three dark-blue pawn",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-base-4",class:"square square-four dark-blue pawn",children:"4"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"home","data-red":"56","data-green":"56","data-yellow":"56","data-blue":"56"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"12","data-yellow":"38","data-blue":"25",style:{top:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells g-start","data-red":"13","data-green":"0","data-yellow":"39","data-blue":"26",style:{top:"40%",left:"6.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"14","data-green":"1","data-yellow":"40","data-blue":"27",style:{top:"40%",left:"13.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"15","data-green":"2","data-yellow":"41","data-blue":"28",style:{top:"40%",left:"19.98%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"16","data-green":"3","data-yellow":"42","data-blue":"29",style:{top:"40%",left:"26.64%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"17","data-green":"4","data-yellow":"43","data-blue":"30",style:{top:"40%",left:"33.3%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"18","data-green":"5","data-yellow":"44","data-blue":"31",style:{top:"33.3%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"19","data-green":"6","data-yellow":"45","data-blue":"32",style:{top:"26.64%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"20","data-green":"7","data-yellow":"46","data-blue":"33",style:{top:"19.98%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells safe","data-red":"21","data-green":"8","data-yellow":"47","data-blue":"34",style:{top:"13.32%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"22","data-green":"9","data-yellow":"48","data-blue":"35",style:{top:"6.66%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"23","data-green":"10","data-yellow":"49","data-blue":"36",style:{top:"0",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"24","data-green":"11","data-yellow":"50","data-blue":"37",style:{top:"0",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells yellow","data-yellow":"51",style:{top:"6.66%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells yellow","data-yellow":"52",style:{top:"13.32%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells yellow","data-yellow":"53",style:{top:"19.98%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells yellow","data-yellow":"54",style:{top:"26.64%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells yellow","data-yellow":"55",style:{top:"33.3%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"25","data-green":"12","data-blue":"38",style:{top:"0",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells y-start","data-red":"26","data-green":"13","data-yellow":"0","data-blue":"39",style:{top:"6.66%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"27","data-green":"14","data-yellow":"1","data-blue":"40",style:{top:"13.32%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"28","data-green":"15","data-yellow":"2","data-blue":"41",style:{top:"19.98%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"29","data-green":"16","data-yellow":"3","data-blue":"42",style:{top:"26.64%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"30","data-green":"17","data-yellow":"4","data-blue":"43",style:{top:"33.3%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"31","data-green":"18","data-yellow":"5","data-blue":"44",style:{top:"40%",right:"33.3%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"32","data-green":"19","data-yellow":"6","data-blue":"45",style:{top:"40%",right:"26.64%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"33","data-green":"20","data-yellow":"7","data-blue":"46",style:{top:"40%",right:"19.98%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells safe","data-red":"34","data-green":"21","data-yellow":"8","data-blue":"47",style:{top:"40%",right:"13.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"35","data-green":"22","data-yellow":"9","data-blue":"48",style:{top:"40%",right:"6.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"36","data-green":"23","data-yellow":"10","data-blue":"49",style:{top:"40%",right:"0"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"37","data-green":"24","data-yellow":"11","data-blue":"50",style:{top:"46.66%",right:"0"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells blue","data-blue":"51",style:{top:"46.66%",right:"6.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells blue","data-blue":"52",style:{top:"46.66%",right:"13.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells blue","data-blue":"53",style:{top:"46.66%",right:"19.98%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells blue","data-blue":"54",style:{top:"46.66%",right:"26.64%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells blue","data-blue":"55",style:{top:"46.66%",right:"33.3%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"38","data-green":"25","data-yellow":"12",style:{top:"53.32%",right:"0"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells b-start","data-red":"39","data-green":"26","data-yellow":"13","data-blue":"0",style:{top:"53.32%",right:"6.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"40","data-green":"27","data-yellow":"14","data-blue":"1",style:{top:"53.32%",right:"13.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"41","data-green":"28","data-yellow":"15","data-blue":"2",style:{top:"53.32%",right:"19.98%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"42","data-green":"29","data-yellow":"16","data-blue":"3",style:{top:"53.32%",right:"26.64%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"43","data-green":"30","data-yellow":"17","data-blue":"4",style:{top:"53.32%",right:"33.3%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"44","data-green":"31","data-yellow":"18","data-blue":"5",style:{bottom:"33.3%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"45","data-green":"32","data-yellow":"19","data-blue":"6",style:{bottom:"26.64%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"46","data-green":"33","data-yellow":"20","data-blue":"7",style:{bottom:"19.98%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells safe","data-red":"47","data-green":"34","data-yellow":"21","data-blue":"8",style:{bottom:"13.32%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"48","data-green":"35","data-yellow":"22","data-blue":"9",style:{bottom:"6.66%",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"49","data-green":"36","data-yellow":"23","data-blue":"10",style:{bottom:"0",left:"53.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"50","data-green":"37","data-yellow":"24","data-blue":"11",style:{bottom:"0",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells red ","data-red":"51",style:{bottom:"6.66%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells red","data-red":"52",style:{bottom:"13.32%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells red","data-red":"53",style:{bottom:"19.98%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells red","data-red":"54",style:{bottom:"26.64%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells red","data-red":"55",style:{bottom:"33.3%",left:"46.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-green":"38","data-yellow":"25","data-blue":"12",style:{bottom:"0",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells r-start","data-red":"0","data-green":"39","data-yellow":"26","data-blue":"13",style:{bottom:"6.66%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"1","data-green":"40","data-yellow":"27","data-blue":"14",style:{bottom:"13.32%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"2","data-green":"41","data-yellow":"28","data-blue":"15",style:{bottom:"19.98%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"3","data-green":"42","data-yellow":"29","data-blue":"16",style:{bottom:"26.64%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"4","data-green":"43","data-yellow":"30","data-blue":"17",style:{bottom:"33.3%",left:"40%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"5","data-green":"44","data-yellow":"31","data-blue":"18",style:{top:"53.32%",left:"33.3%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"6","data-green":"45","data-yellow":"32","data-blue":"19",style:{top:"53.32%",left:"26.64%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"7","data-green":"46","data-yellow":"33","data-blue":"20",style:{top:"53.32%",left:"19.98%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells safe","data-red":"8","data-green":"47","data-yellow":"34","data-blue":"21",style:{top:"53.32%",left:"13.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"9","data-green":"48","data-yellow":"35","data-blue":"22",style:{top:"53.32%",left:"6.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"10","data-green":"49","data-yellow":"36","data-blue":"23",style:{top:"53.32%",left:"0"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells","data-red":"11","data-green":"50","data-yellow":"37","data-blue":"24",style:{top:"46.66%",left:"0"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells green","data-green":"51",style:{top:"46.66%",left:"6.66%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells green","data-green":"52",style:{top:"46.66%",left:"13.32%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells green","data-green":"53",style:{top:"46.66%",left:"19.98%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells green","data-green":"54",style:{top:"46.66%",left:"26.64%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells green","data-green":"55",style:{top:"46.66%",left:"33.3%"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-1",class:"cells dark-red pawn",style:{visibility:"hidden"},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-2",class:"cells dark-red pawn",style:{visibility:"hidden"},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-3",class:"cells dark-red pawn",style:{visibility:"hidden"},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"red-4",class:"cells dark-red pawn",style:{visibility:"hidden"},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-1",class:"cells dark-green pawn",style:{visibility:"hidden"},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-2",class:"cells dark-green pawn",style:{visibility:"hidden"},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-3",class:"cells dark-green pawn",style:{visibility:"hidden"},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"green-4",class:"cells dark-green pawn",style:{visibility:"hidden"},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-1",class:"cells dark-yellow pawn",style:{visibility:"hidden"},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-2",class:"cells dark-yellow pawn",style:{visibility:"hidden"},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-3",class:"cells dark-yellow pawn",style:{visibility:"hidden"},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"yellow-4",class:"cells dark-yellow pawn",style:{visibility:"hidden"},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-1",class:"cells dark-blue pawn",style:{visibility:"hidden"},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-2",class:"cells dark-blue pawn",style:{visibility:"hidden"},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-3",class:"cells dark-blue pawn",style:{visibility:"hidden"},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"blue-4",class:"cells dark-blue pawn",style:{visibility:"hidden"},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"cells2",style:{top:"33.33%",left:"-43.33%"},children:"aaa"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{class:"cells2",style:{top:"33.33%",left:"110%"},children:["Player:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select",{id:"color_selector",onChange:this.color_selector_change,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{value:"red",class:"dark-red",children:"RED"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{value:"green",class:"dark-green",children:"GREEN"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{value:"yellow",class:"dark-yellow",children:"YELLOW"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{value:"blue",class:"dark-blue",children:"BLUE"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"turn_color",class:"dark-red",children:"\xa0\xa0\xa0\xa0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{class:"line-break"}),"Pawn:",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select",{id:"pawn_selector",onChange:this.pawn_selector_change,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option",{children:"4"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"pawn_no",class:"circle-number",children:"1"})]})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"spacer"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"github",style:{margin:"auto",width:"100px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a",{id:"github-link",href:"https://github.com/ShilpiChak",target:"_blank",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img",{src:_github_png__WEBPACK_IMPORTED_MODULE_7__.a,alt:"Github",width:"100px"})})})]})})}}]),Main}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Main},13:function(_,e,t){"use strict";e.a=t.p+"static/media/github.38ecca95.png"},42:function(_,e,t){},44:function(_,e,t){},46:function(_,e,t){"use strict";t.r(e);t(16),t(17);var a=t(2),s=t.n(a),l=t(9),r=t.n(l),i=(t(42),t(10)),c=(t(44),t(0));var d=function(){return Object(c.jsx)(i.a,{})},n=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,l=e.getLCP,r=e.getTTFB;t(_),a(_),s(_),l(_),r(_)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),n()}},[[46,1,2]]]);
//# sourceMappingURL=main.8d57a19a.chunk.js.map