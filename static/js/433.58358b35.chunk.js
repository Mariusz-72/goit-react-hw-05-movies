"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[433],{11:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),o=t(439),c=t(757),i=t.n(c),a=t(791),u=t(87),s=t(952),v={home:"Home_home__Iy41P",movieLink:"Home_movieLink__Vy9G5",moviePoster:"Home_moviePoster__hUJnh"},f=t(184),m=function(){var e=(0,a.useState)([]),n=(0,o.Z)(e,2),t=n[0],c=n[1];(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Df)();case 3:n=e.sent,c(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Wyst\u0105pi\u0142 b\u0142\u0105d podczas pobierania popularnych film\xf3w:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=(0,a.useState)(null),l=(0,o.Z)(m,2),p=l[0],d=l[1],h=function(){d(null)};return(0,f.jsxs)("div",{className:v.home,children:[(0,f.jsx)("h1",{children:"Popularne filmy"}),t.map((function(e){return(0,f.jsxs)("div",{onMouseEnter:function(){return n=e.id,void d(n);var n},onMouseLeave:h,className:v.movieItem,children:[(0,f.jsx)(u.rU,{to:"/movies/".concat(e.id),className:v.movieLink,children:(0,f.jsx)("h3",{children:e.title})}),p===e.id&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:e.title,className:v.moviePoster})]},e.id)}))]})}},952:function(e,n,t){t.d(n,{Df:function(){return f},TP:function(){return l},tx:function(){return d},z1:function(){return m},zv:function(){return p}});var r=t(683),o=t(861),c=t(757),i=t.n(c),a=t(294),u="5eb4fde0c979574b7842bf5dec2210bc",s="https://api.themoviedb.org/3",v=function(){var e=(0,o.Z)(i().mark((function e(n){var t,o,c,s,v=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.length>1&&void 0!==v[1]?v[1]:{},e.prev=1,e.next=4,a.Z.get(n,{params:(0,r.Z)((0,r.Z)({},t),{},{api_key:u})});case 4:return o=e.sent,e.abrupt("return",o.data);case 8:throw e.prev=8,e.t0=e.catch(1),new Error((null===(c=e.t0.response)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.status_message)||"Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e="".concat(s,"/trending/movie/day");return v(e)},m=function(e){var n="".concat(s,"/search/movie");return v(n,{query:e})},l=function(e){var n="".concat(s,"/movie/").concat(e);return v(n)},p=function(e){var n="".concat(s,"/movie/").concat(e,"/credits");return v(n)},d=function(e){var n="".concat(s,"/movie/").concat(e,"/reviews");return v(n)}}}]);
//# sourceMappingURL=433.58358b35.chunk.js.map