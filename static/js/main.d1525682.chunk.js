(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),a=c(2),s=c.n(a),l=c(5),r=c(3),d=c(4),i=c(7),u=c(6),p=(c(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),m=function(e){Object(i.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(r.a)(this,c);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:[]},e.selectCancelGood=function(t){e.setState((function(e){if(!e.selectedGoods.includes(t))return{selectedGoods:[].concat(Object(l.a)(e.selectedGoods),[t])};var c=e.selectedGoods.indexOf(t);return e.selectedGoods.splice(c,1),{selectedGoods:e.selectedGoods}}))},e.clearSelectedGood=function(){e.setState({selectedGoods:[]})},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"App__heading"},"Selected good: ".concat(t.join(", "))),n.a.createElement("button",{type:"button",className:"button App__button-clear",onClick:this.clearSelectedGood},"X"),n.a.createElement("ul",{className:"App__list"},p.map((function(c){return n.a.createElement("li",{key:c,className:-1!==t.indexOf(c)?"App__selected":"App__list-item"},c,n.a.createElement("button",{type:"button",className:"button App__button-select",onClick:function(){return e.selectCancelGood(c)}},-1===t.indexOf(c)?"Add":"Remove"))}))))}}]),c}(n.a.Component);s.a.render(n.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,c){e.exports=c(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d1525682.chunk.js.map