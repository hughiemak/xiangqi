(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),s=l(91),r=l.n(s);l(7),l(92),l(99);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=l(1),c=l(2),o=l(4),u=l(3),d=l(5),h=l(29),p=(l(100),function(e){function t(e){var l;return Object(i.a)(this,t),(l=Object(o.a)(this,Object(u.a)(t).call(this,e))).normalBGColor="white",l.highlightedBGColor="#cccccc",l.highlight=function(){l.setState({highlight:!0})},l.unhighlight=function(){l.setState({highlight:!1})},l.state={backgroundColor:l.normalBGColor,highlight:!1},l}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:this.state.highlight?"highlight-piece":"unhighlight-square"},n.a.createElement("div",{className:"piece",style:{backgroundColor:this.state.backgroundColor,borderColor:this.props.player,color:this.props.player}},this.props.text))}}]),t}(n.a.Component)),y=Object.freeze({Red:"red",Black:"black"});function m(){return y}var v=Object.freeze({King:1,Advisor:2,Elephant:3,Cannon:4,Horse:5,Chariot:6,Soldier:7});function g(){return v}var f=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{text:this.props.player===m().Red?"\u5e25":"\u5c07",player:this.props.player})}},{key:"isMovePossible",value:function(e,t){var l=Math.abs(t.x-e.x),a=Math.abs(t.y-e.y);return(0==l||1==l)&&(0==a||1==a)}},{key:"getChessType",value:function(){return g().King}}]),t}(p),C=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{text:this.props.player===m().Red?"\u4ed5":"\u58eb",player:this.props.player})}}]),t}(p),q=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{text:this.props.player===m().Red?"\u76f8":"\u8c61",player:this.props.player})}}]),t}(p),k=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{text:this.props.player===m().Red?"\u5175":"\u5352",player:this.props.player})}}]),t}(p),x=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{text:this.props.player===m().Red?"\u4fe5":"\u8eca",player:this.props.player})}}]),t}(p),b=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{text:this.props.player===m().Red?"\u70ae":"\u7832",player:this.props.player})}}]),t}(p),E=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p,{text:this.props.player===m().Red?"\u508c":"\u99ac",player:this.props.player})}}]),t}(p);function S(e){if(null==e)return null;var t=e.player;switch(e.chessType){case g().King:return n.a.createElement(f,{player:t});case g().Advisor:return n.a.createElement(C,{player:t});case g().Elephant:return n.a.createElement(q,{player:t});case g().Cannon:return n.a.createElement(b,{player:t});case g().Horse:return n.a.createElement(E,{player:t});case g().Chariot:return n.a.createElement(x,{player:t});case g().Soldier:return n.a.createElement(k,{player:t});default:return null}}var N=function(e){function t(e){var l;Object(i.a)(this,t),(l=Object(o.a)(this,Object(u.a)(t).call(this,e))).onClick=function(){l.props.x,l.props.y;l.props.onClick(Object(h.a)(l))},l.hasPiece=function(){return null!=l.state.piece},l.onFocus=function(){console.log("this.hasPiece(): "+l.hasPiece()),l.hasPiece()&&l.setState({borderColor:"black"})},l.select=function(){l.setState({isSelected:!0})},l.unselect=function(){l.setState({isSelected:!1})};var a=l.props.piece;console.log("Square this.props.piece: "+l.props.piece);var n={x:l.props.x,y:l.props.y};return l.state={isSelected:!1,piece:a,backgroundColor:"none",borderColor:"yellow",coord:n,highlight:l.props.highlight},l}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.piece!==e.piece&&this.setState({piece:this.props.piece}),this.props.highlight!==e.highlight&&this.setState({highlight:this.props.highlight})}},{key:"render",value:function(){return n.a.createElement("button",{className:"square",onClick:this.onClick,style:{backgroundColor:this.state.backgroundColor,borderColor:"transparent"}},n.a.createElement("div",{className:this.state.highlight&&null!=this.state.piece?this.state.piece.player===m().Red?"highlight-piece-in-red":"highlight-piece":"unhighlight-square"},S(this.state.piece)))}},{key:"setKing",value:function(e){this.setState({piece:n.a.createElement(f,null)},e)}}]),t}(n.a.Component),O=function(e){function t(e){var l;return Object(i.a)(this,t),(l=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={squares:l.props.squares,unselect:l.props.unselect,select:l.props.select},l}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.squares!==e.squares&&this.setState({squares:this.props.squares}),this.props.unselect!==e.unselect&&this.setState({unselect:this.props.unselect}),this.props.select!==e.select&&this.setState({select:this.props.select})}},{key:"renderSquare",value:function(e,t,l,a){var s=this;return n.a.createElement(N,{piece:this.state.squares[l][t],key:e,x:t,y:l,onClick:function(e){return s.onClick(e)},setClick:function(e){return s.clickChild=e},highlight:a})}},{key:"onClick",value:function(e){this.props.onClick(e)}},{key:"render",value:function(){for(var e=[],t=9;t>=0;t--){for(var l=[],a=0;a<9;a++){var s,r=t.toString()+a.toString(),i=this.state.select;s=null!=i&&(i.x==a&&i.y==t),l.push(this.renderSquare(r,a,t,s))}e.push(n.a.createElement("div",{className:"board-row",key:t},l))}return n.a.createElement("div",null,e)}}]),t}(n.a.Component);function j(e,t,l){return{chessType:e,player:t,holderPosition:l}}function H(e){console.log("initChessBoard");var t=[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]];return e&&(t[0][4]=j(g().King,m().Red,{y:1,x:5}),t[9][4]=j(g().King,m().Black,{y:0,x:5}),t[0][5]=j(g().Advisor,m().Red,{y:1,x:4}),t[0][3]=j(g().Advisor,m().Red,{y:1,x:6}),t[9][5]=j(g().Advisor,m().Black,{y:0,x:4}),t[9][3]=j(g().Advisor,m().Black,{y:0,x:6}),t[0][2]=j(g().Elephant,m().Red,{y:1,x:3}),t[0][6]=j(g().Elephant,m().Red,{y:1,x:7}),t[9][6]=j(g().Elephant,m().Black,{y:0,x:3}),t[9][2]=j(g().Elephant,m().Black,{y:0,x:7}),t[2][1]=j(g().Cannon,m().Red,{y:0,x:2}),t[2][7]=j(g().Cannon,m().Red,{y:1,x:2}),t[7][1]=j(g().Cannon,m().Black,{y:0,x:2}),t[7][7]=j(g().Cannon,m().Black,{y:1,x:2}),t[0][1]=j(g().Horse,m().Red,{y:0,x:1}),t[0][7]=j(g().Horse,m().Red,{y:1,x:1}),t[9][1]=j(g().Horse,m().Black,{y:0,x:1}),t[9][7]=j(g().Horse,m().Black,{y:1,x:1}),t[0][0]=j(g().Chariot,m().Red,{y:0,x:0}),t[0][8]=j(g().Chariot,m().Red,{y:1,x:0}),t[9][0]=j(g().Chariot,m().Black,{y:0,x:0}),t[9][8]=j(g().Chariot,m().Black,{y:1,x:0}),t[3][0]=j(g().Soldier,m().Red,{y:0,x:3}),t[3][2]=j(g().Soldier,m().Red,{y:0,x:4}),t[3][4]=j(g().Soldier,m().Red,{y:0,x:5}),t[3][6]=j(g().Soldier,m().Red,{y:0,x:6}),t[3][8]=j(g().Soldier,m().Red,{y:0,x:7}),t[6][0]=j(g().Soldier,m().Black,{y:1,x:3}),t[6][2]=j(g().Soldier,m().Black,{y:1,x:4}),t[6][4]=j(g().Soldier,m().Black,{y:1,x:5}),t[6][6]=j(g().Soldier,m().Black,{y:1,x:6}),t[6][8]=j(g().Soldier,m().Black,{y:1,x:7})),t}function R(e,t,l){if(0===B(e,t).xDiff){for(var a=e.x,n=D(e,t).yDir,s=!1,r=e.y+n;r!=t.y;r+=n){console.log("hasPieceBetween i: "+r),null!=l[r][a]&&(s=!0)}return s}if(0===B(e,t).yDiff){var i=e.y,c=D(e,t).xDir;for(s=!1,r=e.x+c;r!=t.x;r+=c){console.log("hasPieceBetween i: "+r),null!=l[i][r]&&(s=!0)}return s}}function B(e,t){return{xDiff:Math.abs(t.x-e.x),yDiff:Math.abs(t.y-e.y)}}function D(e,t){var l=Math.sign(t.y-e.y);return{xDir:Math.sign(t.x-e.x),yDir:l}}function w(e,t){return t[e.y][e.x]}function P(e,t,l,a){var n=JSON.parse(JSON.stringify(a));return n[t.y][t.x]=null,n[l.y][l.x]=e,n}l(114);var A=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"display-board"},n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-right"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-left"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-left"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-right"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square-no-right-border"}),n.a.createElement("div",{className:"display-square-no-vert-border"}),n.a.createElement("div",{className:"display-square-no-vert-border"}),n.a.createElement("div",{className:"display-square-no-vert-border"}),n.a.createElement("div",{className:"display-square-no-vert-border"}),n.a.createElement("div",{className:"display-square-no-vert-border"}),n.a.createElement("div",{className:"display-square-no-vert-border"}),n.a.createElement("div",{className:"display-square-no-left-border"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-right"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-left"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-left"}),n.a.createElement("div",{className:"display-square-with-diagonal-top-right"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}),n.a.createElement("div",{className:"display-square"}))}}]),t}(n.a.Component),M=l(93),J=function(e){function t(e){var l;return Object(i.a)(this,t),(l=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){console.log(l.state.id),l.props.onSelect(l.state.data)},console.log("this.props.holderContent: "+JSON.stringify(l.props.holderContent)),l.state={test:"ChessHolder: test",id:l.props.id,highlight:l.props.highlight,data:{square:l.props.square,player:l.props.player,holderContent:l.props.holderContent}},l}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.holderContent!==e.holderContent&&(console.log("ChessHolder componentDidUpdate"),this.setState({data:Object(M.a)({},this.state.data,{holderContent:this.props.holderContent})})),this.props.highlight!==e.highlight&&this.setState({highlight:this.props.highlight})}},{key:"sqHasPiece",value:function(){var e=this.state.data.square;return null!=this.state.data.holderContent[e.y][e.x]}},{key:"render",value:function(){var e;return e=null!=this.state.data.holderContent&&0!=this.state.data.holderContent.length?this.state.data.holderContent[this.state.data.square.y][this.state.data.square.x]:null,n.a.createElement("div",{className:"chess-square",onClick:this.handleClick},n.a.createElement("div",{className:this.state.highlight&&null!=e?e.player===m().Red?"highlight-piece-in-red":"highlight-piece":"unhighlight-square"},S(e)))}}]),t}(n.a.Component),T=function(e){function t(e){var l;return Object(i.a)(this,t),(l=Object(o.a)(this,Object(u.a)(t).call(this,e))).onSelect=function(e){l.onPieceSelected(e)},l.test=function(){null!=l.state.holderContent&&(l.state.holderContent[0][0]=null,l.setState({holderContent:l.state.holderContent}))},l.onPieceSelected=function(e){l.props.onPieceSelected(e)},l.removePiece=function(e){},l.state={player:l.props.player,holderContent:l.props.holderContent,selected:l.props.selected},l}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.holderContent!==e.holderContent&&this.setState({holderContent:this.props.holderContent}),this.props.selected!==e.selected&&this.setState({selected:this.props.selected})}},{key:"generateRow",value:function(e,t){for(var l=[],a=0;a<=7;a++){var s=e.toString()+a.toString(),r={x:a,y:e},i=!1;null!=t&&t.y==e&&t.x==a&&(i=!0),l.push(n.a.createElement(J,{key:s,id:s,square:r,onSelect:this.onSelect,holderContent:this.state.holderContent,player:this.state.player,highlight:i}))}return l}},{key:"generateRows",value:function(e){return[this.generateRow(0,e),this.generateRow(1,e)]}},{key:"render",value:function(){return console.log("ChessHolder render()"),n.a.createElement("div",{className:"chess-parent-container"},n.a.createElement("div",{className:"chess-container"},n.a.createElement("div",{className:"board-row"},this.generateRows(this.state.selected))))}},{key:"removePieceAt",value:function(e){var t=JSON.parse(JSON.stringify(this.state.holderContent));t[e.y][e.x]=null,this.setState({holderContent:t})}}]),t}(n.a.Component);function G(){return{Black:[[j(g().Chariot,m().Black,{y:0,x:0}),j(g().Horse,m().Black,{y:0,x:1}),j(g().Cannon,m().Black,{y:0,x:2}),j(g().Elephant,m().Black,{y:0,x:3}),j(g().Advisor,m().Black,{y:0,x:4}),j(g().King,m().Black,{y:0,x:5}),j(g().Advisor,m().Black,{y:0,x:6}),j(g().Elephant,m().Black,{y:0,x:7})],[j(g().Chariot,m().Black,{y:1,x:0}),j(g().Horse,m().Black,{y:1,x:1}),j(g().Cannon,m().Black,{y:1,x:2}),j(g().Soldier,m().Black,{y:1,x:3}),j(g().Soldier,m().Black,{y:1,x:4}),j(g().Soldier,m().Black,{y:1,x:5}),j(g().Soldier,m().Black,{y:1,x:6}),j(g().Soldier,m().Black,{y:1,x:7})]],Red:[[j(g().Chariot,m().Red,{y:0,x:0}),j(g().Horse,m().Red,{y:0,x:1}),j(g().Cannon,m().Red,{y:0,x:2}),j(g().Soldier,m().Red,{y:0,x:3}),j(g().Soldier,m().Red,{y:0,x:4}),j(g().Soldier,m().Red,{y:0,x:5}),j(g().Soldier,m().Red,{y:0,x:6}),j(g().Soldier,m().Red,{y:0,x:7})],[j(g().Chariot,m().Red,{y:1,x:0}),j(g().Horse,m().Red,{y:1,x:1}),j(g().Cannon,m().Red,{y:1,x:2}),j(g().Elephant,m().Red,{y:1,x:3}),j(g().Advisor,m().Red,{y:1,x:4}),j(g().King,m().Red,{y:1,x:5}),j(g().Advisor,m().Red,{y:1,x:6}),j(g().Elephant,m().Red,{y:1,x:7})]]}}var K=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).enterAutoInitMode=function(){var t=H(!0);e.redHolderContent=[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]],e.blackHolderContent=[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]],e.setState({squares:t,redHolderContent:e.redHolderContent,blackHolderContent:e.blackHolderContent,turn:m().Red})},e.enterCustomMode=function(){var t=H(!1);e.redHolderContent=G().Red,e.blackHolderContent=G().Black,e.setState({squares:t,redHolderContent:e.redHolderContent,blackHolderContent:e.blackHolderContent,turn:m().Red})},e.onChessHolderPieceSelected=function(t){0!=t.holderContent.length&&null!=t.holderContent.length&&null!=t.holderContent[t.square.y][t.square.x]&&e.setState({selectedHolderSqData:t})},e.onAutoStartBtnClicked=function(){e.enterAutoInitMode()},e.onCustomizeBtnClicked=function(){e.enterCustomMode()},e.blackHolderContent=G().Black,e.redHolderContent=G().Red,e.state={squares:H(!0),isSelectingChess:!0,selectedSquare:null,unselect:null,select:null,turn:m().Red,selectedHolderSqData:null,redHolderContent:[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]],blackHolderContent:[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.enterAutoInitMode()}},{key:"toggleTurn",value:function(){this.state.turn===m().Red?this.setState({turn:m().Black}):this.setState({turn:m().Red})}},{key:"isSelectingChess",value:function(){return!!this.state.isSelectingChess}},{key:"isPlacingPiece",value:function(){return!this.state.isSelectingChess}},{key:"squreHavePiece",value:function(e){return null!==e.state.piece}},{key:"activateSquare",value:function(e){}},{key:"deactivateSquare",value:function(e){}},{key:"handleClick",value:function(e){console.log("sq: "+JSON.stringify(e.state));var t=this.state.squares,l=e.state.coord,a=this.state.turn;if(console.log("this.state.selectedHolderSqData: "+this.state.selectedHolderSqData),console.log("!this.squreHavePiece(sq): "+!this.squreHavePiece(e)),null==this.state.selectedHolderSqData||this.squreHavePiece(e))if(this.isSelectingChess()){if(this.squreHavePiece(e))w(l,t).player===a?(console.log("G01: selecting your chess"),this.setState({select:l},function(){this.setState({isSelectingChess:!1})})):console.log("G02: cannot select opponent chess");else console.log("G03: cannot select empty square")}else{var n=w(l,t);if(null!==n&&n.player===a)console.log("G04: selecting another chess"),this.setState({select:l},function(){this.setState({isSelectingChess:!1})});else{var s=this.state.select,r=w(s,t),i=(r.chessType,e.state.coord);if(function(e,t,l,a){var n=B(e,t).xDiff,s=B(e,t).yDiff;if(0===n&&0===s)return!1;switch(l.chessType){case g().King:return l.player==m().Red?!(3!=t.x&&4!=t.x&&5!=t.x||0!=t.y&&1!=t.y&&2!=t.y)&&(0===n||1===n)&&(0===s||1===s):!(3!=t.x&&4!=t.x&&5!=t.x||7!=t.y&&8!=t.y&&9!=t.y)&&(0===n&&1===s||1===n&&0===s);case g().Advisor:return l.player==m().Red?!(3!=t.x&&4!=t.x&&5!=t.x||0!=t.y&&1!=t.y&&2!=t.y)&&1===n&&1===s:!(3!=t.x&&4!=t.x&&5!=t.x||7!=t.y&&8!=t.y&&9!=t.y)&&1===n&&1===s;case g().Elephant:if(l.player==m().Red){if(0==t.y||1==t.y||2==t.y||3==t.y||4==t.y){var r=D(e,t);return null==a[e.y+r.yDir][e.x+r.xDir]&&2===n&&2===s}return!1}if(5==t.y||6==t.y||7==t.y||8==t.y||9==t.y){var i=D(e,t);return null==a[e.y+i.yDir][e.x+i.xDir]&&2===n&&2===s}return!1;case g().Cannon:if(0===n||0===s){var c=a[t.y][t.x];return l.player,R(e,t,a)?null!=c:null==c}return!1;case g().Horse:if(1===n&&2===s||2===n&&1===s){if(2===n){var o=Math.sign(t.x-e.x),u=e.y,d=e.x+o;return null==a[u][d]}var h=Math.sign(t.y-e.y),p=e.y+h,y=e.x;return null==a[p][y]}return!1;case g().Chariot:return(0===n||0===s)&&!R(e,t,a);case g().Soldier:return l.player==m().Red?e.y<=4?t.y-e.y===1&&0===n:(1!==n||1!==s)&&t.y-e.y!==-1:e.y>4?t.y-e.y===-1&&0===n:(1!==n||1!==s)&&t.y-e.y!==1}}(s,i,r,t))if(this.squreHavePiece(e)){console.log("G06: eating opponent chess");var c=P(r,s,i,t),o=w(i,t);if(null!=o){var u=o.holderPosition;o.player==m().Black?(this.blackHolderContent[u.y][u.x]=o,this.setState({blackHolderContent:this.blackHolderContent})):(this.redHolderContent[u.y][u.x]=o,this.setState({redHolderContent:this.redHolderContent}))}this.setState({squares:c,select:null},function(){this.setState({isSelectingChess:!0}),this.toggleTurn()})}else{console.log("G05: moving chess to empty square");var d=P(r,s,i,t);this.setState({squares:d,select:null},function(){this.setState({isSelectingChess:!0}),this.toggleTurn()})}else console.log("G08: cannot make such move"),this.setState({isSelectingChess:!1})}}else{console.log("Place piece");var h=function(e,t,l){var a=JSON.parse(JSON.stringify(l));return console.log("dest.y: "+JSON.stringify(t.y)),console.log("dest.x: "+JSON.stringify(t.x)),console.log("sqData: "+JSON.stringify(e)),a[t.y][t.x]=e.holderContent[e.square.y][e.square.x],a}(this.state.selectedHolderSqData,l,t);this.addPieceToBoard(this.state.selectedHolderSqData,h)}}},{key:"removePieceFromHolder",value:function(e){e.square.x,e.square.y}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"btns-container"},n.a.createElement("button",{className:"btn",onClick:this.onAutoStartBtnClicked},"Auto Start"),n.a.createElement("button",{className:"btn",onClick:this.onCustomizeBtnClicked},"Customize")),n.a.createElement(T,{onPieceSelected:this.onChessHolderPieceSelected,player:m().Black,holderContent:this.state.blackHolderContent,selected:null!=this.state.selectedHolderSqData&&this.state.selectedHolderSqData.player==m().Black?this.state.selectedHolderSqData.square:null}),n.a.createElement("div",{className:"game"},n.a.createElement(A,null),n.a.createElement("div",{className:"game-board"},n.a.createElement(O,{squares:this.state.squares,onClick:function(t){return e.handleClick(t)},unselect:this.state.unselect,select:this.state.select}))),n.a.createElement(T,{onPieceSelected:this.onChessHolderPieceSelected,player:m().Red,holderContent:this.state.redHolderContent,selected:null!=this.state.selectedHolderSqData&&this.state.selectedHolderSqData.player==m().Red?this.state.selectedHolderSqData.square:null}))}},{key:"addPieceToBoard",value:function(e,t){var l=e.square;e.player==m().Black?(this.blackHolderContent[l.y][l.x]=null,this.setState({blackHolderContent:this.blackHolderContent,squares:t,selectedHolderSqData:null,isSelectingChess:!0})):(this.redHolderContent[l.y][l.x]=null,this.setState({redHolderContent:this.redHolderContent,squares:t,selectedHolderSqData:null,isSelectingChess:!0}))}},{key:"removePieceFromBoardToHolder",value:function(){}}]),t}(n.a.Component);r.a.render(n.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,l){},92:function(e,t,l){e.exports=l.p+"static/media/logo.5d5d9eef.svg"},94:function(e,t,l){e.exports=l(250)},99:function(e,t,l){}},[[94,1,2]]]);
//# sourceMappingURL=main.e51ac427.chunk.js.map