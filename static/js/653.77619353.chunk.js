"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[653],{653:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),s=n.n(c),o=n(791),u=n(952),i=n(87),v={},l=n(184),h=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,o.useState)([]),f=(0,a.Z)(h,2),d=f[0],m=f[1],p=(0,o.useState)(!1),x=(0,a.Z)(p,2),g=x[0],w=x[1],b=function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,(0,u.z1)(n);case 4:r=e.sent,m(r.results),w(0===r.results.length),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error searching movies:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:v.moviesContainer,children:[(0,l.jsx)("h1",{children:"Search Movies"}),(0,l.jsxs)("form",{onSubmit:b,className:v.searchForm,children:[(0,l.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter a movie title",className:v.searchInput}),(0,l.jsx)("button",{type:"submit",className:v.searchButton,children:"Search"})]}),g&&(0,l.jsx)("p",{className:v.noResults,children:"No results found"}),d.map((function(e){return(0,l.jsx)("div",{className:v.movieItem,children:(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),className:v.movieLink,children:(0,l.jsx)("h3",{children:e.title})})},e.id)}))]})}},952:function(e,t,n){n.d(t,{Df:function(){return l},TP:function(){return f},tx:function(){return m},z1:function(){return h},zv:function(){return d}});var r=n(683),a=n(861),c=n(757),s=n.n(c),o=n(294),u="6909cd80103b2d22b83ee7f9c75d0eee",i="https://api.themoviedb.org/3",v=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a,c,i,v=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.length>1&&void 0!==v[1]?v[1]:{},e.prev=1,e.next=4,o.Z.get(t,{params:(0,r.Z)((0,r.Z)({},n),{},{api_key:u})});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error((null===(c=e.t0.response)||void 0===c||null===(i=c.data)||void 0===i?void 0:i.status_message)||"Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e="".concat(i,"/trending/movie/day");return v(e)},h=function(e){var t="".concat(i,"/search/movie");return v(t,{query:e})},f=function(e){var t="".concat(i,"/movies/").concat(e);return v(t)},d=function(e){var t="".concat(i,"/movie/").concat(e,"/credits");return v(t)},m=function(e){var t="".concat(i,"/movie/").concat(e,"/reviews");return v(t)}}}]);
//# sourceMappingURL=653.77619353.chunk.js.map