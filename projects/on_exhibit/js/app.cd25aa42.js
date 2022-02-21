(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0caa":function(t,e,a){"use strict";a("d6f4")},"162b":function(t,e,a){},"294d":function(t,e,a){"use strict";a("9ea8")},3358:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"pa-0",style:{background:t.bgColor},attrs:{fluid:""}},[a("v-main",[a("v-item-group",{staticClass:"shrink mr-6 elevation-10",staticStyle:{background:"#fff",color:"#222","border-radius":"5px",padding:"10px","z-index":"1000",position:"fixed",top:"45%"},attrs:{mandatory:""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.length,(function(e){return a("v-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(n){var r=n.active,i=n.toggle;return[a("div",[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{"input-value":r,icon:"","x-small":"",color:t.btnColor},on:{click:i}},"v-btn",o,!1),n),[a("v-icon",{attrs:{"x-small":""}},[t._v("mdi-record")])],1)]}}],null,!0)},[a("span",[t._v(t._s(1===e?"Generate Exhibit":"Expolore the timeline"))])])],1)]}}],null,!0)})})),1),a("v-window",{staticClass:"elevation-1",attrs:{vertical:""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},[a("v-window-item",{key:0},[a("YourExhibit",{on:{timeline:function(e){t.window=1}}})],1),a("v-window-item",{key:1},[a("About"),a("Visualizations"),a("Footer")],1)],1)],1),a("div",{attrs:{id:"tooltip"}})],1)],1)},i=[],o=a("5530"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",id:"about"}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("div",{attrs:{id:"logos"}},[a("v-img",{staticClass:"mr-4",staticStyle:{float:"left",filter:"grayscale(100%)"},attrs:{src:"assets/parsons.jpeg",width:"60"}}),a("v-img",{attrs:{contain:"",src:"assets/smithsonian.png",width:"95"}})],1)]),a("v-row",{staticClass:"text-center mt-4",attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-2 pa-0",attrs:{cols:"12"}},[a("h1",{staticClass:" mb-3"},[t._v(" On Exhibit: "),a("span",[t._v("What's in the Smithsonian?")])])]),a("v-col",{staticClass:"mt-0 mb-10",attrs:{cols:"12",xs:"8",md:"8",lg:"6",xl:"5"}},[a("p",{staticClass:"font-weight-regular"},[t._v(" On Exhibit focuses on artifacts that are exhibited, digitalized and part of the open access API of the Smithsonian Institution, as this gives an interesting perspective on the restrictions museums face in making their collections more accessible to the public. This approach creates, in a way, an online tour of the available artifacts in each museum. Users can choose a museum to explore with a dropdown, and see everything available in that museum (based on the data in the API) chronologically. This not only allows users to see the subset of artifacts that are displayed in the physical space of the museums, but also get to explore virtually a subset of these same artifacts, effectively creating an online tour of the museum - something ever more important in the times of COVID where a lot of constraints exist on public gatherings. ")])])],1)],1)},c=[],l={name:"About",data:function(){return{}}},u=l,f=(a("0caa"),a("2877")),d=a("6544"),m=a.n(d),p=a("62ad"),v=a("a523"),h=a("adda"),b=a("0fd9"),g=Object(f["a"])(u,s,c,!1,null,"5ce6e86b",null),w=g.exports;m()(g,{VCol:p["a"],VContainer:v["a"],VImg:h["a"],VRow:b["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticStyle:{background:"#ddd"},attrs:{padless:""}},[a("v-col",{staticClass:"text-left",staticStyle:{"font-size":"8pt",color:"#333"},attrs:{cols:"6"}},[t._v(" MS Data Visualization, Parsons School of Design, NYC ")]),a("v-col",{staticClass:"text-right",staticStyle:{"font-size":"9pt"},attrs:{cols:"6"}},[a("a",{attrs:{href:"http://yoanacodes.github.io/index.html",target:"_blank"}},[t._v("Portfolio")]),t._v("   |   "),a("a",{attrs:{href:"mailto:yoana.kosturska@gmail.com"}},[t._v("Contact: Yoana Kosturska")]),t._v("   |   © 2021-"+t._s((new Date).getFullYear())+" ")])],1)},x=[],j={name:"Footer"},O=j,_=(a("294d"),a("553a")),k=Object(f["a"])(O,y,x,!1,null,null,null),C=k.exports;m()(k,{VCol:p["a"],VFooter:_["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"100vh"}},[a("Overview"),a("v-row",{staticClass:"mb-12",attrs:{align:"center",justify:"center"}},[a("DropdownFilter")],1),a("Beeswarm")],1)},M=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"object"===typeof t.filters?a("v-row",{staticClass:"ma-0 pa-0 mt-4",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"8"}},[a("v-combobox",{attrs:{items:t.filters,"item-text":"label","item-value":"value",label:"Select a museum","item-color":"blue lighten-3",color:"grey",single:"","return-object":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a("v-icon",{attrs:{small:""}},[t._v("mdi-bank")]),t._v("  "+t._s(e.item.label)+" "),a("v-spacer"),t._v("   ("+t._s(e.item.count)+") ")]}}],null,!1,3171250163),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1):t._e()},D=[],A=a("c46f"),E=a("2f62"),B={name:"DropdownFilter",computed:Object(o["a"])(Object(o["a"])({},Object(E["d"])(["filters","selectedMuseum"])),Object(E["b"])(["getMuseumData"])),data:function(){return{selected:Object}},watch:{selected:function(t){this.updateSelectedMuseum(t)}},mounted:function(){this.selected={label:"Smithsonian American Art Museum",value:"smithsonian_american_art_museum",count:875}},methods:Object(o["a"])({},Object(E["c"])(["updateSelectedMuseum"]))},z=B,F=a("2b5d"),Y=a("132d"),I=a("2fa4"),$=Object(f["a"])(z,S,D,!1,null,null,null),P=$.exports;m()($,{VCol:p["a"],VCombobox:F["a"],VIcon:Y["a"],VRow:b["a"],VSpacer:I["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"8"}},[a("h3",{staticClass:"mt-10"},[t._v(t._s(t.selectedMuseum.label)+" "),a("br"),t._v(" "+t._s(t.selectedMuseum.count)+" Artifacts")])])],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",xs:"12",md:"12",lg:"10",xl:"9"}},[a("div",{staticClass:"svg-container",attrs:{id:"viz"}})])],1)],1)},T=[],X=a("2909"),W=(a("4de4"),a("4e827"),a("99af"),a("5698")),q={name:"plot",props:[],computed:Object(o["a"])(Object(o["a"])({},Object(E["d"])(["selectedMuseum"])),Object(E["b"])(["getMuseumData"])),data:function(){return{}},watch:{getMuseumData:function(){this.render()}},mounted:function(){this.getMuseumData&&this.getMuseumData.length&&this.render()},methods:{fillMissingYears:function(t){var e=[],a=[],n=[],r=W["j"](t),i=W["i"](t);r<0?(r-=200,i+=20):r<1580?(r-=100,i+=20):(r-=20,i+=20);while(i>r)r<0?(e.push(r),r+=r<0?500:10):r<=1580?(a.push(r),r+=100):(n.push(r),r+=10);return[e,a,n]},makeAxisTicks:function(t,e){var a=A["a"](t).pluck("date").pluck("label").uniq().sortBy().value(),n=e[0],r=e[e.length-1],i=e.filter((function(t,e){return e%4===0}));return-1===a.indexOf(n)&&a.push(n),-1===a.indexOf(r)&&a.push(r),A["f"]([].concat(Object(X["a"])(a),Object(X["a"])(i))).sort()},render:function(){var t=this;W["n"]("#viz svg").remove();var e=Object(X["a"])(this.getMuseumData),a=A["a"](e).pluck("date").pluck("label").uniq().sortBy().value();a=this.fillMissingYears(a),A["c"](a,(function(a){var n=A["d"](e,(function(t){var e=t.date.label;return e>=a[0]&&e<=a[a.length-1]}));if(n.length){var r=t.makeAxisTicks(n,a),i=0;i=n.length>100?n.length*r.length:n.length<20?600:1500,t.drawTimeline(a,i,r,n)}}))},drawTimeline:function(t,e,a,n){var r=this,i={top:100,right:100,bottom:50,left:100},o=e,s=1e3,c=(W["o"]("%Q"),s+i.left+i.right),l=o+i.top+i.bottom,u=W["m"]("#viz").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 ".concat(c," ").concat(l)).classed("svg-content",!0).append("g").attr("transform","translate("+i.left+","+i.top+")"),f=W["d"](t,(function(t){return t})).reverse(),d=W["l"]().domain(f).range([o,0]),m=f[1]<0?"".concat(-f[1]," BCE"):"".concat(f[1]," AD"),p=f[0]<0?"".concat(-f[0]," BCE"):"".concat(f[0]," AD"),v="Artifacts on exhibit between ".concat(m," and ").concat(p),h=(u.append("g").attr("class","title").append("text").attr("x",s/v.length*11).attr("y",-60).style("font-size","16pt").style("font-weight",300).text(v.toUpperCase()),W["b"](d).tickValues([]).tickFormat((function(t,e){return t<0?"".concat(-t," BCE"):"".concat(t," AD")})).tickSizeOuter(0));u.append("g").call(h).attr("stroke","#ddd").attr("stroke-width","1px").style("opacity",.3).attr("stroke-dasharray","1, 1").style("transform","translateX(".concat(s/2,"px"));var b=15,g=W["b"](d).tickValues(a).tickFormat((function(t,e){return t<0?"".concat(-t," BCE"):"".concat(t," AD")}));u.append("g").attr("class","axis").call(g).call((function(t){return t.selectAll("path").remove()})).style("transform","translateX(".concat(b,"px"));var w=W["c"](d).tickValues(a).tickFormat((function(t,e){return t<0?"".concat(-t," BCE"):"".concat(t," AD")}));u.append("g").attr("class","axis").call(w).call((function(t){return t.selectAll("path").remove()})).style("transform","translateX(".concat(s-b,"px")),u.selectAll().data(a).enter().append("line").attr("x1",(function(t){return 0})).attr("x2",s).attr("y1",(function(t){return d(t)})).attr("y2",(function(t){return d(t)})).attr("stroke","#999").attr("stroke-dasharray","2, 2").style("opacity",.7);for(var y=W["f"](n).force("forceY",W["h"]((function(t){return d(t.dateClean)})).strength(1)).force("forceX",W["g"](s/2).strength(.9)).force("collide",W["e"](21)).stop(),x=500,j=0;j<x;++j)y.tick();y.stop();var O=u.append("g").attr("class","nodes").selectAll("g.node").data(n),_=O.enter().append("g").attr("class","node").attr("transform",(function(t){return"translate("+t.x+","+t.y+")"}));_.append("pattern").attr("id",(function(t){return t.id})).attr("height","30px").attr("width","30px").append("image").attr("class","image thumb").attr("xlink:href",(function(t){return"images/thumb_".concat(t.media[0],".jpeg")})).attr("width","200px").attr("height","200px").attr("x",-78).attr("y",-80).style("opacity",.8),_.append("a").attr("xlink:href",(function(t){return t.record_link})).attr("target","_blank").append("circle").attr("class","shadow circle").attr("r",(function(t){return 20})).attr("fill",(function(t){return"url(#"+t.id+")"})).on("mouseover",(function(t,e){return r.mouseover(t,e)})).on("mouseout",(function(){W["n"]("#viz circle").attr("stroke","none"),W["m"]("#tooltip").style("display","none")})).on("click",(function(t,e){return r.activeCell=e}))},mouseover:function(t,e){var a=W["m"]("#tooltip").node().getBoundingClientRect().height,n='\n            <div class="align-center justify-center">\n                <img src="images/thumb_'.concat(e.media[0],'.jpeg" class="thumb" alt="musuem image">\n            </div>\n            ').concat(e.date.source,"<br><span class='artifact-title'>").concat(e.title,"</span>");W["n"]("#viz circle").attr("stroke","none"),W["m"](t.srcElement).attr("stroke","#999"),W["m"]("#tooltip").style("display","block").style("left",t.pageX+20+"px").style("top",t.pageY-a/2+"px").html(n)}}},G=q,J=(a("f61e"),Object(f["a"])(G,R,T,!1,null,null,null)),U=J.exports;m()(J,{VCol:p["a"],VRow:b["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.getOverviewData.length?a("div",{attrs:{id:"timeline-overview"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("h2",[t._v("Overview: Timeline of the artifacts in each museum")])]),a("v-row",{staticClass:"mb-12 pb-12",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",xs:"12",md:"12",lg:"12",xl:"8"}},[a("div",{staticClass:"svg-container",attrs:{id:"overview"}})])],1)],1):t._e()},N=[],Q={name:"Overview",props:[],computed:Object(o["a"])({},Object(E["b"])(["getOverviewData"])),data:function(){return{}},watch:{getOverviewData:function(){this.render()}},mounted:function(){this.getOverviewData.length&&this.render()},methods:{render:function(){W["n"]("#overview svg").remove();var t=Object(X["a"])(this.getOverviewData),e=A["e"](t,"museum").sort((function(t,e){return t>e?-1:1})),a=A["e"](t,"year");a=this.fillMissingYears(a);var n={top:10,right:10,bottom:40,left:420},r=300,i=1e3,o=i+n.left+n.right,s=r+n.top+n.bottom,c=W["m"]("#overview").append("svg").attr("viewBox","0 0 ".concat(o," ").concat(s)).append("g").attr("transform","translate("+n.left+","+n.top+")"),l=W["k"]().domain(e).range([r,0]).paddingOuter([.25]).paddingInner([.5]),u=W["b"](l);c.append("g").attr("class","y-axis").call(u);var f=W["k"]().domain(a).range([0,i]),d=W["a"](f);c.append("g").attr("class","x-axis").call(d).call((function(t){return t.selectAll(".tick text").text((function(t,e){return e%2!=0?"":t<0?"".concat(-t," BCE"):"".concat(t)}))})).attr("transform","translate(0, ".concat(r,")"));c.selectAll("rect").data(t).enter().append("rect").attr("x",(function(t){return f(t.year)})).attr("y",(function(t){return l(t.museum)})).attr("width",10).attr("height",10).attr("fill","#222")},fillMissingYears:function(t){var e=[],a=W["j"](t),n=W["i"](t);a-=a<0?1e3:a<1500?100:10;while(n>a)a+=a<0?1e3:a<1500?100:10,e.push(a);return e}}},H=Q,L=(a("9c45"),Object(f["a"])(H,K,N,!1,null,null,null)),Z=L.exports;m()(L,{VCol:p["a"],VRow:b["a"]});var tt={name:"Visualizations",components:{DropdownFilter:P,Beeswarm:U,Overview:Z}},et=tt,at=Object(f["a"])(et,V,M,!1,null,null,null),nt=at.exports;m()(at,{VContainer:v["a"],VRow:b["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"exhibit",fluid:""}},[a("div",{attrs:{id:"masonry-wrapper"}},[a("div",{attrs:{id:"masonry-with-columns"}},[t._l(t.getRandomExhibit,(function(t,e){return[a("div",{key:e,staticClass:"crop"},[a("img",{attrs:{src:"images/thumb_"+t+".jpeg",alt:"random image"}})])]}))],2)]),a("v-row",{staticStyle:{"z-index":"1",position:"relative"},attrs:{align:"center",justify:"center"}},[a("h1",{staticClass:"mt-10 mb-6 text-center elevation-10",staticStyle:{background:"#fff",color:"#222",padding:"25px"}},[t._v(" On Exhibit: "),a("span",[t._v("What's in the Smithsonian?")])])]),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn",{staticClass:"elevation-12",staticStyle:{color:"#222",position:"absolute",top:"88%"},attrs:{"x-large":"",color:"white"},on:{click:t.timeline}},[a("v-icon",{staticClass:"pr-3"},[t._v("mdi-bank")]),a("span",{staticStyle:{color:"#0094ff"}},[t._v("Explore and Compare the Musuems")])],1)],1)],1)},it=[],ot={name:"YourExhibit",computed:Object(o["a"])(Object(o["a"])({},Object(E["d"])(["data"])),Object(E["b"])(["getRandomExhibit"])),mounted:function(){},methods:{timeline:function(){this.$emit("timeline")}}},st=ot,ct=(a("5bc9"),a("8336")),lt=Object(f["a"])(st,rt,it,!1,null,null,null),ut=lt.exports;m()(lt,{VBtn:ct["a"],VContainer:v["a"],VIcon:Y["a"],VRow:b["a"]});var ft={name:"App",components:{About:w,Footer:C,Visualizations:nt,YourExhibit:ut},computed:Object(o["a"])(Object(o["a"])({},Object(E["d"])(["filters"])),{},{bgColor:function(){return 1===this.window?"#eee":"#111"},btnColor:function(){return this.window,"#333"}}),data:function(){return{length:2,window:2}},watch:{},created:function(){this.$store.dispatch("fetchFilters"),this.$store.dispatch("fetchData")},methods:{changeView:function(){this.window=1}}},dt=ft,mt=(a("cf25"),a("7496")),pt=a("d903"),vt=a("604c"),ht=a("f6c4"),bt=a("3a2f"),gt=a("f665"),wt=a("1e6c"),yt=Object(f["a"])(dt,r,i,!1,null,null,null),xt=yt.exports;m()(yt,{VApp:mt["a"],VBtn:ct["a"],VContainer:v["a"],VIcon:Y["a"],VItem:pt["a"],VItemGroup:vt["b"],VMain:ht["a"],VTooltip:bt["a"],VWindow:gt["a"],VWindowItem:wt["a"]});a("d81d"),a("fb6a");var jt=a("bc3a"),Ot=a.n(jt);n["a"].use(E["a"]);var _t=new E["a"].Store({state:{filters:Object,selectedMuseum:Object,data:Object},mutations:{saveFilters:function(t,e){t.filters=e.filters},updateSelectedMuseum:function(t,e){t.selectedMuseum=e},saveData:function(t,e){t.data=e.data}},getters:{getRandomExhibit:function(t){if(Array.isArray(t.data)){var e=A["b"].chain(t.data).pluck("media").map((function(t){return A["b"].filter(t,(function(t,e){return 0===e}))})).value(),a=Object(X["a"])(e).sort((function(){return.5-Math.random()}));return a.slice(0,300)}},getOverviewData:function(t){var e=A["b"].chain(t.data).groupBy("museum").map((function(t,e){return{museum:e,years:A["b"].uniq(A["b"].pluck(t,"dateClean"))}})).map((function(t){return A["b"].map(t.years,(function(e){return{museum:t.museum,year:e}}))})).flatten().value();return e},groupMusuemData:function(t){var e=A["b"].chain(t.data).groupBy("dateClean").mapObject((function(t){return A["b"].groupBy(t,"museum")})).mapObject((function(t){var e=A["b"].map(t,(function(t,e){return{name:e,data:t}}));return A["b"].sortBy(e,(function(t){return t.data.length})).reverse()})).value();return e},getMuseumData:function(t){if(Array.isArray(t.data))return A["b"].chain(t.data).filter((function(e){return e.museum===t.selectedMuseum.label})).value()}},actions:{fetchFilters:function(t){var e=t.commit;return Ot.a.get("data/filters.json").then((function(t){e("saveFilters",{filters:t.data,flag:!0})})).catch((function(t){console.log(t)}))},fetchData:function(t){var e=t.commit;return Ot.a.get("data/formatted_data.json").then((function(t){e("saveData",{data:t.data,flag:!0})})).catch((function(t){console.log(t)}))}},modules:{}}),kt=a("f309");n["a"].use(kt["a"]);var Ct=new kt["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:_t,vuetify:Ct,render:function(t){return t(xt)}}).$mount("#app")},"5bc9":function(t,e,a){"use strict";a("162b")},"9c45":function(t,e,a){"use strict";a("a933")},"9ea8":function(t,e,a){},a933:function(t,e,a){},cf25:function(t,e,a){"use strict";a("fea6")},d6f4:function(t,e,a){},f61e:function(t,e,a){"use strict";a("3358")},fea6:function(t,e,a){}});