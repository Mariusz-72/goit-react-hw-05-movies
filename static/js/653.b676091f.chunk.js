"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[653],{653:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),c=n(439),a=n(757),s=n.n(a),o=n(791),i=n(952),u=n(87),v="Movies_searchForm__S-9T7",l="Movies_searchInput__+E-Mw",h="Movies_searchButton__VlmGO",f="Movies_movieLink__e75lb",m="Movies_movieItem__WBe6u",d="Movies_noResults__LUzU2",p="Movies_moviesContainer__D1+tn",_=n(184),x=function(){var e=(0,o.useState)(""),t=(0,c.Z)(e,2),n=t[0],a=t[1],x=(0,o.useState)([]),g=(0,c.Z)(x,2),w=g[0],b=g[1],j=(0,o.useState)(!1),k=(0,c.Z)(j,2),M=k[0],N=k[1],S=function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,(0,i.z1)(n);case 4:r=e.sent,b(r.results),N(0===r.results.length),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error searching movies:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("h1",{children:"Search Movies"}),(0,_.jsxs)("form",{onSubmit:S,className:v,children:[(0,_.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter a movie title",className:l}),(0,_.jsx)("button",{type:"submit",className:h,children:"Search"})]}),M&&(0,_.jsx)("p",{className:d,children:"No results found"}),w.map((function(e){return(0,_.jsx)("div",{className:m,children:(0,_.jsx)(u.rU,{to:"/movies/".concat(e.id),className:f,children:(0,_.jsx)("h3",{children:e.title})})},e.id)}))]})}},952:function(e,t,n){n.d(t,{Df:function(){return l},TP:function(){return f},tx:function(){return d},z1:function(){return h},zv:function(){return m}});var r=n(683),c=n(861),a=n(757),s=n.n(a),o=n(294),i="5eb4fde0c979574b7842bf5dec2210bc",u="https://api.themoviedb.org/3",v=function(){var e=(0,c.Z)(s().mark((function e(t){var n,c,a,u,v=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.length>1&&void 0!==v[1]?v[1]:{},e.prev=1,e.next=4,o.Z.get(t,{params:(0,r.Z)((0,r.Z)({},n),{},{api_key:i})});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error((null===(a=e.t0.response)||void 0===a||null===(u=a.data)||void 0===u?void 0:u.status_message)||"Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e="".concat(u,"/trending/movie/day");return v(e)},h=function(e){var t="".concat(u,"/search/movie");return v(t,{query:e})},f=function(e){var t="".concat(u,"/movie/").concat(e);return v(t)},m=function(e){var t="".concat(u,"/movie/").concat(e,"/credits");return v(t)},d=function(e){var t="".concat(u,"/movie/").concat(e,"/reviews");return v(t)}}}]);
//# sourceMappingURL=653.b676091f.chunk.js.map