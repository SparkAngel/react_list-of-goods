(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),l=n.n(r),s=n(4),c=n(5),u=n(7),i=n(6),d=n(8),m=n(1),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(e){return Object(m.a)(e).reverse()},h=function(e){return Object(m.a)(e).sort(function(e,t){return e.localeCompare(t)})},b=function(e){return Object(m.a)(e).sort(function(e,t){return t.length-e.length})},v=function(e,t){return Object(m.a)(e).filter(function(e){return e.length>=t})},E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={goods:[],goodsCurrent:[],isLoaded:!1,selectedNumber:1},n.handleClick=function(){n.setState({goods:p,goodsCurrent:p,isLoaded:!0})},n.sortReverse=function(){n.setState({goods:g(n.state.goods)})},n.sortAlphabetically=function(){n.setState({goods:h(n.state.goods)})},n.sortByLength=function(){n.setState({goods:b(n.state.goods)})},n.sortReset=function(){n.setState({goods:n.state.goodsCurrent,selectedNumber:1})},n.sortByLengthValue=function(e){var t=e.target.value;n.setState({goods:v(n.state.goods,t),selectedNumber:t})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.isLoaded?a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement("button",{onClick:this.sortReverse,type:"button"},"Reverse"),a.a.createElement("button",{onClick:this.sortAlphabetically,type:"button"},"Alphabetically"),a.a.createElement("button",{onClick:this.sortByLength,type:"button"},"Length"),a.a.createElement("button",{onClick:this.sortReset,type:"button"},"Reset"),a.a.createElement("select",{onChange:this.sortByLengthValue,value:this.state.selectedNumber},a.a.createElement("option",{value:"1"},"1"),a.a.createElement("option",{value:"2"},"2"),a.a.createElement("option",{value:"3"},"3"),a.a.createElement("option",{value:"4"},"4"),a.a.createElement("option",{value:"5"},"5"),a.a.createElement("option",{value:"6"},"6"),a.a.createElement("option",{value:"7"},"7"),a.a.createElement("option",{value:"8"},"8"),a.a.createElement("option",{value:"9"},"9"),a.a.createElement("option",{value:"10"},"10")),this.state.goods.map(function(e){return a.a.createElement("li",null,e)}))):a.a.createElement("button",{onClick:this.handleClick,type:"button"},"Start")}}]),t}(a.a.Component);l.a.render(a.a.createElement(E,{test:123}),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.339d23ea.chunk.js.map