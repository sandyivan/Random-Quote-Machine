(this.webpackJsonprandom_quote_machine=this.webpackJsonprandom_quote_machine||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(2),o=a.n(n),c=a(7),f=a.n(c),u=(a(18),a(8)),s=a(9),d=a(13),r=a(12),b=(a(19),a(20),a(6)),i=a(10),l=a(11),h=a(1),j=function(t){var e=t.quote,a=t.author,n=t.generateRandomQuote,o='https://twitter.com/intent/tweet?hashtags=quotes&text="'.concat(e,'" ').concat(a);return Object(h.jsx)("div",{className:"quote-container",children:Object(h.jsxs)("div",{id:"quote-box",children:[Object(h.jsxs)("blockquote",{id:"text",children:[Object(h.jsx)(b.a,{className:"quote-left",icon:i.a}),Object(h.jsx)("span",{children:e})]}),Object(h.jsxs)("p",{id:"author",children:["- ",a]}),Object(h.jsx)("a",{id:"tweet-quote",target:"_blank",class:"twitter-share-button",href:o,children:Object(h.jsx)(b.a,{icon:l.a,className:"fa-3x"})}),Object(h.jsx)("button",{onClick:n,id:"new-quote",className:"shadow-none btn btn-default float-end",children:"click me "})]})})},m=["#00ffff","#000000","#0000ff","#8a2be2","#a52a2a","#deb887","#5f9ea0","#7fff00","#d2691e","#ff7f50","#6495ed","#dc143c","#00008b","#008b8b","#b8860b","#a9a9a9","#006400","#bdb76b","#8b008b","#556b2f","#ff8c00","#9932cc","#8b0000","#e9967a","#8fbc8f","#483d8b","#2f4f4f","#2f4f4f","#00ced1","#9400d3","#ff1493","#696969","#696969","#1e90ff","#b22222","#228b22","#ff00ff","#ffd700","#daa520","#808080","#008000","#808080","#ff69b4","#cd5c5c","#4b0082","#7cfc00","#f08080","#90ee90","#ffa07a","#20b2aa","#87cefa","#778899","#778899","#00ff00","#32cd32","#ff00ff","#800000","#66cdaa","#0000cd","#ba55d3","#9370db","#3cb371","#7b68ee","#00fa9a","#48d1cc","#c71585","#191970","#000080","#808000","#6b8e23","#ffa500","#ff4500","#da70d6","#db7093","#cd853f","#800080","#663399","#ff0000","#bc8f8f","#4169e1","#8b4513","#fa8072","#f4a460","#2e8b57","#a0522d","#6a5acd","#708090","#708090","#00ff7f","#4682b4","#d2b48c","#008080","#ff6347","#ee82ee","#9acd32"],g=function(t){Object(d.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).changeBg=function(){var t=n.state.colors,e=t[Math.floor(Math.random()*t.length)];document.body.style.backgroundColor=e,document.getElementById("new-quote").style.backgroundColor=e,document.getElementById("tweet-quote").style.color=e,document.getElementById("text").style.color=e,document.getElementById("author").style.color=e,console.log("click")},n.generateRandomQuote=function(){console.log(n.state.quote);var t=n.state.quotes[Math.floor(Math.random()*n.state.quotes.length)];console.log(t.text,t.author),n.setState({quote:t.text,author:t.author}),n.changeBg()},n.fetchData=function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){return n.setState({quotes:t})}))},n.state={quotes:[],quote:"You can do it",author:"Sandeep Ivan",colors:m,color:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(j,{generateRandomQuote:this.generateRandomQuote,quote:this.state.quote,author:this.state.author})})}}]),a}(o.a.Component),q=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,c=e.getLCP,f=e.getTTFB;a(t),n(t),o(t),c(t),f(t)}))};f.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),q()}},[[27,1,2]]]);
//# sourceMappingURL=main.d1eeb041.chunk.js.map