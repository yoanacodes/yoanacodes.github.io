(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02845524"],{"04f9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectPage"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"9"}},[a("ProjectMeta",{attrs:{title:t.project.name,description:t.project.description,technologies:t.project.technologies,data_source:t.project.datasrc,links:t.project.links}})],1)],1),a("v-row",{staticClass:"pa-0 mb-12",staticStyle:{background:"#eef1f3"},attrs:{justify:"center"}},[a("v-col",{staticClass:"pa-0 mb-12",attrs:{cols:"9"}},[a("h3",{staticClass:"text-center mt-6"},[a("span",{staticStyle:{color:"#996896"}},[t._v("Alzheimer")]),t._v(" "),a("span",{staticStyle:{color:"#555"}},[t._v(" Clinical Trials.")]),a("span",{staticClass:"font-weight-light",staticStyle:{"font-size":"16pt",display:"block"}},[t._v("The History of 2,207 Clinical Trials between 1981 and today.")])]),a("div",{attrs:{id:"visualizationClinicalTrials"}})])],1),a("v-row",{staticClass:"pa-0 mb-12",staticStyle:{background:"#f1f1f1"},attrs:{justify:"center"}},[a("v-col",{staticClass:"pa-0 mb-12",attrs:{cols:"10"}},[a("ProjectDescription",{attrs:{description:t.description}})],1)],1),a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("h2",{staticClass:"majorSection mt-12"},[t._v("PROCESS")]),a("h3",{staticClass:"mb-4"},[t._v("Design")]),t._l(t.sections.process.design.images,(function(t,e){return[a("ImageWithDescription",{key:e,attrs:{layout:t.layout,image:t}})]}))],2)],1),a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("h3",{staticClass:"mb-4"},[t._v("Data Analysis")]),t._l(t.sections.process.dataAnalysis.images,(function(t,e){return[a("ImageWithDescription",{key:e,attrs:{layout:t.layout,image:t}})]}))],2)],1),a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("h3",{staticClass:"mb-4"},[t._v("Coding Challanges")]),a("CodingSection",{attrs:{codeView:t.codeChallanges}})],1)],1),a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{staticClass:"mb-10",attrs:{cols:"10"}},[a("h2",{staticClass:"majorSection"},[t._v("LINKS TO PROJECT")]),a("LinkButtons",{attrs:{links:t.project.links}})],1)],1)],1)},i=[],s=a("5530"),o=(a("4e827"),a("a15b"),a("fb6a"),a("b0c0"),a("99af"),a("4de4"),a("d3b7"),a("2f62")),r=a("5698"),l=a("ec89"),c=a("5966"),d=a("6f8b"),u=a("0bd9"),p=a("1409"),h={name:"AlzheimerClinicalTrials",components:{ProjectMeta:l["a"],ProjectDescription:c["a"],ImageWithDescription:d["a"],CodingSection:u["a"],LinkButtons:p["a"]},data:function(){return{description:"<p>After I started working in a clinical trials company and collecting data from patients, doctors, nurses and research directors, I started questioning how can we visualize clincal trials data and make them more accessible to patients, doctors, and researchers. One of the things I was hoping to accomplish as I started learning programming was to be able to visualize the complexity of these types of data as well as healthcare in general.</p><p>This project explores 2,207 clinical trials for Alzheimer's disease between 1981 and 2019. It provides data for the studies unique NCT Number, Title, Status, Study Type, Start and End dates, as well as information about the amount of patients enrolled. The visualization clusters all studies based on the age group of the enrolled patients.</p>",sections:{process:{design:{images:[{link:"assets/playground/alzheimerclinicaltrials/tooltip.png",description:"Although the visualization quickly gives a general overview of the disproportionately distributed clinical trials, it is hard to draw any conclusions based on just that. To enhance usability, I implemented a detailed tooltip, which provides detailed information about each study. This allows more details to be visible with minimal interaction.",width:"960px",layout:"side"}]},dataAnalysis:{images:[{link:"assets/playground/alzheimerclinicaltrials/ss_creating_age_groups.png",description:"Before starting to analyze the dataset, I had to clean and group the data by the age of the participants in each clinical trial. I made a separate column in the Pandas data frame to keep the integrity of the original data, while converting it in a more useful format.",width:"960px",layout:"side"},{link:"assets/playground/alzheimerclinicaltrials/ss_enrollment_per_group.png",description:"After preparing the data for further exploration in Python, Pandas, and Matplotlib, I started plotting different aspects of it. First, I wanted to explore the distribution of enrolled patients per age group. This, however, did not provide much knowledge on why there are such differences in the ages of patients.",width:"660px",layout:"side"},{link:"assets/playground/alzheimerclinicaltrials/interventional_vs_observational.png",description:"<p>I then explored the split between Interventional vs Observational studies. I visualized them as two separate pie charts, showing the percentage of all studies and the percentage of all enrolled study subjects respectively. </p><p> Although more than 80% of the Clinical Trials are Interventional, the enrollment in them is 21%. This is caused by the limitations of Interventional studies, in which the inclusion and exclusion criteria are far more specific than in Observational studies and the recruitment protocol much more complex.</p><p> Further, Interventional Clinical Trials in general are completed in shorter periods of time because they usually involve the testing of a new drug or equipment, while Observational studies follow the long term effects of already available interventions or the disease itself. </p>",width:"560px",layout:"side"},{link:"assets/playground/alzheimerclinicaltrials/ss_grouped_bar_status_and_study_type.png",description:" In another aspect of the dataset, I explored the possibility of visualizing the data as a grouped bar chart, showing the study status on the x axis, the total enrollment on the y axis, and the study type as the group. This clearly showed that more patients complete the Interventional studies than the Observational ones. This is a known phenomena in the industry and is often caused by the length of Observational studies, and the 'lost-to-follow-up' rate, i.e. patients stop responding to follow ups.",width:"660px",layout:"side"}]}}},codeChallanges:{data_analysis:[{link:"assets/playground/alzheimerclinicaltrials/break-1.png",description:"<p>One of the hardest things about the project was cleaning and analyzing the data. The dataset was very unstructured, so multiple steps were required to clean the language and remove or mutate the columns. In order to group the data by the age group of recruited participants, I had to heavily manipulate the original strings to extract the actual numeric values.</p><p>In addition, working with so many rows was a prime example of a dataset which Excel falls short with – one could hardly learn much from it without the power of Python and Pandas or programming in general.</p><p>This project was very gratifying and it made me that much more committed to learning programming and helped me validate the immense power of engineering and data analytics.</p>",width:"960px",layout:"side"}],data_visualization:[{link:"assets/playground/alzheimerclinicaltrials/break-2.png",description:"<p>The main challenge for this project was trying to create a visualization that would best cluster the data. Although the circle packing does show all studies grouped by the age of the participants, I think this is not the best way to represent such complex data. It is hard to parse and draw any conclusions based on the clusters, and exploring in detail can be a tedious task due to the amount of data points.</p><p>I am looking forward to having some time to explore further design and engineering techniques that may be more flexible and user friendly.</p>",width:"960px",layout:"side"}]}}},computed:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["siteContent","dataIsReady"])),{},{project:function(){if(this.dataIsReady)return this.siteContent.playground.projects["alzheimerClinicalTrials"]}}),mounted:function(){this.render()},methods:{render:function(){r["l"]("data/playground/alzheimerclinicaltrials/alzheimer.json").then((function(t){var e,a={top:10,right:10,bottom:10,left:20},n=1140,i=1140,s=n+a.left+a.right,o=i+a.top+a.bottom,l=(r["t"]().domain([0,1.5]).range(["hsl(192.2, 100%, 89.4%)","hsl(191.9,100%,31.6%)"]).interpolate(r["j"]),r["f"](",d"),r["q"]().size([n,i]).padding(3)),c=r["i"](t).sum((function(t){return+t["enrollment"]})).sort((function(t,e){return e.value-t.value})),d=c,u=(l(c),r["B"]("#vizTooltip").attr("class","darkTooltip").style("z-index",1e3)),p=function(t){var e="";4==t.depth?e="":(e="",e+="<span>Title: </span>"+t.data["title"],e+="<span>Study type: </span>"+t.data["study_type"],e+="<span>Enrollment: </span>"+t.data["enrollment"],e+="<span>Subjects' age: </span>"+t.data["clean_age"],e+="<span>Status: </span>"+t.data["status"],e+="<span>NCT number: </span>"+t.data["nct_number"]),u.style("display",(function(){return 3==t.depth?"block":"none"})).style("opacity",1),u.style("left",r["d"].pageX+30+"px").style("top",r["d"].pageY+-20+"px").html(e)},h=function(t){u.style("display","none")},f=r["B"]("#visualizationClinicalTrials").append("svg").attr("viewBox","0 0 "+s+" "+o).attr("transform","translate("+a.left+",0)").append("g").attr("transform","translate("+n/2+","+i/2+")").style("cursor","pointer").on("click",(function(){return y(c)})),m=f.append("g").attr("transform","translate(0, 30)").selectAll("circle").data(c.descendants().slice(1)).join("circle").attr("class","dot").attr("fill",(function(t){return 1==t.depth?"#dab6d4":2==t.depth?"#6c447c":3==t.depth?"#996896":void 0}));m.on("mousemove",(function(t){return p(t)})).on("mouseout",h).on("click",(function(t){d!=t&&(y(t),r["d"].stopPropagation())}));var g=f.append("g").attr("transform","translate(0, 30)").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(c.descendants()).join("text").style("fill-opacity",(function(t){return t.parent===c?1:0})).style("display",(function(t){return t.parent===c?"inline":"none"})).style("fill",(function(t){return 1==t.depth||2==t.depth?"#fff":3==t.depth?"#999":void 0})).style("font-size",(function(t){return 1===t.depth||2===t.depth?"18pt":"12pt"})).style("font-weight",(function(t){return 1===t.depth||2===t.depth?"800":"555"})).text((function(t){return t.data.name}));function v(t){f.attr("viewBox","0 0 "+s+" "+o);var a=n/t[2];e=t,g.attr("transform",(function(e){return"translate(".concat((e.x-t[0])*a,",").concat((e.y-t[1])*a,")")})),m.attr("transform",(function(e){return"translate(".concat((e.x-t[0])*a,",").concat((e.y-t[1])*a,")")})),m.attr("r",(function(t){return t.r*a}))}function y(t){if(!(t.depth>1)){d=t;var a=f.transition().duration(r["d"].altKey?7500:750).tween("zoom",(function(t){var a=r["k"](e,[d.x,d.y,2*d.r]);return function(t){return v(a(t))}}));g.filter((function(t){return t.parent===d||"inline"===this.style.display})).transition(a).duration(500).style("fill-opacity",(function(t){t.parent})).on("start",(function(t){t.parent===d&&(this.style.display="inline")})).on("end",(function(t){t.parent!==d&&(this.style.display="none")}))}}v([c.x,c.y,2*c.r])}))}}},f=h,m=(a("c885"),a("2877")),g=a("6544"),v=a.n(g),y=a("62ad"),b=a("0fd9"),w=Object(m["a"])(f,n,i,!1,null,null,null);e["default"]=w.exports;v()(w,{VCol:y["a"],VRow:b["a"]})},"0bd9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-tabs",{attrs:{color:"black","background-color":"transparent",centered:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.codeType,(function(e){return a("v-tab",{key:e},[t._v(" "+t._s(e.replace(/_/g," "))+" ")])})),1),a("v-tabs-items",{staticStyle:{"min-height":"600px"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.codeType,(function(e,n){return a("v-tab-item",{key:n,staticClass:"pa-2 mt-12"},[t._l(t.codeView[e],(function(t,e){return[a("ImageWithDescription",{key:e,attrs:{image:t,layout:t.layout}})]}))],2)})),1)],1)],1)},i=[],s=a("3835"),o=(a("4fadc"),a("6f8b")),r={name:"CodingSection",components:{ImageWithDescription:o["a"]},data:function(){return{tab:null}},props:{codeView:Object},computed:{codeType:function(){for(var t=[],e=0,a=Object.entries(this.codeView);e<a.length;e++){var n=Object(s["a"])(a[e],2),i=n[0];n[1];t.push(i)}return t}}},l=r,c=a("2877"),d=a("6544"),u=a.n(d),p=a("62ad"),h=a("0fd9"),f=a("71a3"),m=a("9d65"),g=a("4e82"),v=a("c3f0"),y=a("80d2"),b=a("58df"),w=Object(b["a"])(m["a"],Object(g["a"])("windowGroup","v-window-item","v-window")),_=w.extend().extend().extend({name:"v-window-item",directives:{Touch:v["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(y["e"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(y["e"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),k=_.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=_.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),C=a("fe57"),T=a("aac8"),j=Object(c["a"])(l,n,i,!1,null,null,null);e["a"]=j.exports;u()(j,{VCol:p["a"],VRow:h["a"],VTab:f["a"],VTabItem:k,VTabs:C["a"],VTabsItems:T["a"]})},5966:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"bgDescription text-center mb-12 mt-12 pb-8",attrs:{justify:"center"}},[a("v-col",{staticClass:"longDescription pa-0 mt-12",attrs:{cols:"9"}},[a("div",{domProps:{innerHTML:t._s(t.description)}})])],1)},i=[],s={name:"ProjectDescription",props:{description:{type:String,required:!0}}},o=s,r=a("2877"),l=a("6544"),c=a.n(l),d=a("62ad"),u=a("0fd9"),p=Object(r["a"])(o,n,i,!1,null,null,null);e["a"]=p.exports;c()(p,{VCol:d["a"],VRow:u["a"]})},"5e33":function(t,e,a){"use strict";a("7bd2")},"6f8b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imageWithDescription"},[a("v-row",{staticClass:"mb-12",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"elevation-3 pa-2",attrs:{color:"transparent"}},[a("v-row",[a("v-col",{staticClass:"pl-6",attrs:{cols:"side"==t.layout?9:12}},[a("v-img",{attrs:{src:t.image.link,width:t.image.width},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}])})],1),a("v-col",{class:"side"==t.layout?"pl-5":"pl-12",attrs:{cols:t.calculateColumns}},[a("p",{staticClass:"pr-2",domProps:{innerHTML:t._s(t.image.description)}})])],1)],1)],1)],1)],1)},i=[],s={name:"ImageWithDescription",props:{image:Object,layout:String},computed:{calculateColumns:function(){return"side"===this.layout?this.$vuetify.breakpoint.xs||this.$vuetify.breakpoint.sm?10:3:10}}},o=s,r=(a("f8c5"),a("2877")),l=a("6544"),c=a.n(l),d=a("b0af"),u=a("62ad"),p=a("adda3"),h=a("490a"),f=a("0fd9"),m=Object(r["a"])(o,n,i,!1,null,null,null);e["a"]=m.exports;c()(m,{VCard:d["a"],VCol:u["a"],VImg:p["a"],VProgressCircular:h["a"],VRow:f["a"]})},"7bd2":function(t,e,a){},"8a79e":function(t,e,a){},c885:function(t,e,a){"use strict";a("ddba")},ddba:function(t,e,a){},ec89:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"mb-12",attrs:{id:"projectMeta"}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"5"}},[a("h2",{staticClass:"py-3 font-weight-bold text-h3"},[t._v(" "+t._s(t.title.toUpperCase())+" ")]),a("p",{staticClass:"text-h5 font-weight-light",domProps:{innerHTML:t._s(t.description)}})]),a("v-spacer"),t.technologies?a("v-col",{class:{"mt-7 ml-10":!t.$vuetify.breakpoint.xs&&!t.$vuetify.breakpoint.sm},attrs:{id:"techCol",cols:"12",xs:"12",sm:"12",md:"3"}},t._l(t.technologiesAll,(function(e,n){return a("v-row",{key:n},[t.hasTech(e)?a("div",{staticClass:"mb-4"},[a("h4",{staticClass:"techAspect"},[t._v(t._s(e.replace(/_/g," ").toUpperCase())+": ")]),t._l(t.technologies[e],(function(e,n){return[a("v-chip",{key:n,staticClass:"mr-1 mb-1 mt-1",attrs:{label:"",color:"#333",dark:""}},[t._v(" "+t._s(e)+" ")])]}))],2):t._e()])})),1):t._e(),a("v-col",{attrs:{cols:"12",id:"projectLinks"}},[t.links?[0!=t.links.live?a("div",[a("span",[t._v("Live Project:")]),0!=t.links.live.src_link?a("a",{attrs:{href:t.links.live.src_link,target:"_blank"}},[t._v(" "+t._s(t.links.live.name)+" ")]):a("span",{staticStyle:{color:"black"}},[t._v(" Coming soon")])]):t._e(),0!=t.links.github?a("div",[a("span",[t._v("Github: ")]),0!=t.links.github.src_link?a("a",{attrs:{href:t.links.github.src_link,target:"_blank"}},[t._v(" "+t._s(t.links.github.name)+" ")]):a("span",{staticStyle:{color:"black"}},[t._v(" Coming soon")])]):t._e()]:t._e(),t.data_source?[0!=t.data_source?a("div",[a("span",[t._v("Data Source: ")]),t._l(t.data_source,(function(e,n){return[0!=e.src_link?a("a",{key:n,attrs:{href:e.src_link,target:"_blank"}},[t._v(" "+t._s(e.name)+" "),a("br")]):a("span",{key:n,staticStyle:{color:"black"}},[t._v(" "+t._s(e.name)+" ")])]}))],2):t._e()]:t._e()],2)],1)},i=[],s=a("3835"),o=(a("4fadc"),{name:"ProjectMeta",props:{title:{type:String,required:!0},description:String,technologies:{type:[Object,Boolean],required:!1},data_source:{type:[Array,Boolean],required:!1},links:{type:Object,required:!1},project:Object},computed:{technologiesAll:function(){for(var t=[],e=0,a=Object.entries(this.technologies);e<a.length;e++){var n=Object(s["a"])(a[e],2),i=n[0];n[1];t.push(i)}return t}},methods:{hasTech:function(t){return Object.prototype.hasOwnProperty.call(this.technologies,t)&&this.technologies[t].length}}}),r=o,l=(a("5e33"),a("2877")),c=a("6544"),d=a.n(c),u=a("cc20"),p=a("62ad"),h=a("0fd9"),f=a("2fa4"),m=Object(l["a"])(r,n,i,!1,null,null,null);e["a"]=m.exports;d()(m,{VChip:u["a"],VCol:p["a"],VRow:h["a"],VSpacer:f["a"]})},f8c5:function(t,e,a){"use strict";a("8a79e")}}]);