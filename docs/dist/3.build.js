webpackJsonp([3],{34:function(e,t,s){function r(e){s(93)}var a=s(8)(s(43),s(81),r,null,null);e.exports=a.exports},43:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{myCroppa:{}}},computed:{installStyle:function(){return'<link href="https://unpkg.com/vue-croppa/dist/vue-croppa.min.css" rel="stylesheet" type="text/css">'},installTags:function(){return'<script src="https://unpkg.com/vue-croppa/dist/vue-croppa.min.js"><\/script>       '},vueRegistryBuild:function(){return"import Vue from 'vue'\n import Croppa from 'vue-croppa'\n\n Vue.use(Croppa)       "},vueRegistryTag:function(){return"<script>\n   Vue.use(Croppa)\n <\/script>       "},simplestUsageTemplate:function(){return'<croppa v-model="myCroppa"></croppa>'},simplestUsageScript:function(){return"new Vue({\n   // ... other vm options omitted\n   data: {\n     myCroppa: {}\n   },\n\n   methods: {\n     uploadCroppedImage() {\n       this.myCroppa.generateBlob((blob) => {\n         // write code to upload the cropped image file (a file is a blob)\n       }, 'image/jpeg', 0.8) // 80% compressed jpeg file\n     }\n   }\n })       "}}}},58:function(e,t,s){t=e.exports=s(1)(),t.push([e.i,"",""])},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"quick-start"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",[s("p",[e._v("1. Install with npm or include it directly.")]),e._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{md5:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:"npm install --save vue-croppa",expression:"'npm install --save vue-croppa'"}]},[s("code",{staticClass:"bash"})])]),e._v(" "),s("v-flex",{staticClass:"text-md-center",attrs:{md1:"",xs12:""}},[s("h5",[e._v("or")])]),e._v(" "),s("v-flex",{attrs:{md6:"",xs12:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.installTags,expression:"installTags"}]},[s("code",{staticClass:"html"})])])],1),e._v(" "),s("br"),e._v(" "),s("p",[e._v("2. If your build tool supports css module, import it as left below. Or simply include the file in your HTML.")]),e._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{md5:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:"import 'vue-croppa/dist/vue-croppa.css'",expression:"'import \\'vue-croppa/dist/vue-croppa.css\\''"}]},[s("code",{staticClass:"javascript"})])]),e._v(" "),s("v-flex",{staticClass:"text-md-center",attrs:{md1:"",xs12:""}},[s("h5",[e._v("or")])]),e._v(" "),s("v-flex",{attrs:{md6:"",xs12:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.installStyle,expression:"installStyle"}]},[s("code",{staticClass:"html"})])])],1),e._v(" "),s("br"),e._v(" "),s("p",[e._v("3. Register it as a vue plugin.\n        "),s("router-link",{attrs:{to:"/registration"}},[e._v("More ways to register it.")])],1),e._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{md5:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.vueRegistryBuild,expression:"vueRegistryBuild"}]},[s("code",{staticClass:"javascript"})])]),e._v(" "),s("v-flex",{staticClass:"text-md-center",attrs:{md1:"",xs12:""}},[s("h5",[e._v("or")])]),e._v(" "),s("v-flex",{attrs:{md6:"",xs12:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.vueRegistryTag,expression:"vueRegistryTag"}]},[s("code",{staticClass:"html"})])])],1),e._v(" "),s("br"),e._v(" "),s("p",[e._v("4. Now you have it. The simplest usage: ")]),e._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{md12:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.simplestUsageTemplate,expression:"simplestUsageTemplate"}]},[s("code",{staticClass:"html"})])]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("v-flex",{attrs:{md12:""}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.simplestUsageScript,expression:"simplestUsageScript"}]},[s("code",{staticClass:"javascript"})])])],1)],1)],1)],1)},staticRenderFns:[]}},93:function(e,t,s){var r=s(58);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s(9)("0aa19854",r,!0)}});