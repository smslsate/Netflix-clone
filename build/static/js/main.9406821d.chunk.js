(this["webpackJsonpnetfliex-clone"]=this["webpackJsonpnetfliex-clone"]||[]).push([[0],{22:function(e,t,n){e.exports=n(64)},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),i=(n(27),n(28),n(4)),l=n.n(i),s=n(5),u=n(3),m=n(17),f=n.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),d=(n(46),n(18)),v=n(21),h=n.n(v);var p=function(e){var t=e.title,n=e.fetchUrl,o=e.isLargeRow,r=Object(a.useState)([]),i=Object(u.a)(r,2),m=i[0],v=i[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),b=g[0],w=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row_posters"},m.map((function(e){return c.a.createElement("img",{key:e.id,onClick:function(){return function(e){b?w(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);w(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(o&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&c.a.createElement(d.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="8a879bd5bdcc2e0ecc7000ce12cce6fa",b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(62);var w=function(){var e,t,n=Object(a.useState)([]),o=Object(u.a)(n,2),r=o[0],i=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(b.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(r),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n          "https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'"\n        )'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner_contents"},c.a.createElement("h1",null,(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)),c.a.createElement("div",{className:"banner_buttons"},c.a.createElement("button",{className:"banner_button"},"Play"),c.a.createElement("button",{className:"banner_button"},"My List")),c.a.createElement("h1",{className:"banner_description"},(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner--fadeBottom"}))};n(63);var E=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},c.a.createElement("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png",alt:"Netflix Logo"}),c.a.createElement("img",{className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png",alt:"Netflix Logo"}))};var _=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(E,null),c.a.createElement(w,null),c.a.createElement(p,{title:"NETFLEX ORIGINALS",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),c.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),c.a.createElement(p,{title:" Horror Movies",fetchUrl:b.fetchHorrorMovies}),c.a.createElement(p,{title:" Romance Movies",fetchUrl:b.fetchRomanceMovies}),c.a.createElement(p,{title:" Documentaries",fetchUrl:b.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9406821d.chunk.js.map