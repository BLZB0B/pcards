define(["TFS/WorkItemTracking/RestClient","TFS/WorkItemTracking/Contracts","q"],function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=o,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(i,s)},t.isEmpty=function(e){return!e&&0!==e||!(!d(e)||0!==e.length)},t.createFrame=function(e){var t=o({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,a=/[&<>"'`=]/;function s(e){return r[e]}function o(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var l=Object.prototype.toString;t.toString=l;var c=function(e){return"function"==typeof e};c(/x/)&&(t.isFunction=c=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=c;var d=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=d},function(e,t,n){e.exports=n(9).default},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function i(e,t){var n=t&&t.loc,a=void 0,s=void 0;n&&(e+=" - "+(a=n.start.line)+":"+(s=n.start.column));for(var o=Error.prototype.constructor.call(this,e),l=0;l<r.length;l++)this[r[l]]=o[r[l]];Error.captureStackTrace&&Error.captureStackTrace(this,i);try{n&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:s,enumerable:!0}):this.column=s)}catch(e){}}i.prototype=new Error,t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var i=n(0),a=r(n(2)),s=n(10),o=n(18),l=r(n(20));t.VERSION="4.1.1";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function c(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},s.registerDefaultHelpers(this),o.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var d=l.default.log;t.log=d,t.createFrame=i.createFrame,t.logger=l.default},function(e,t,n){var r,i;r=[n,t,n(5),n(6),n(7)],void 0===(i=function(e,t,r,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),o=n(25),l=n(26),c=n(27),d=n(28),u=VSS.getExtensionContext(),p=r.getClient(),f={getMenuItems:function(e){var t="Pretty Card";return e.workItemIds&&e.workItemIds.length>1&&(t="Pretty Cards"),[{action:function(e){return function(e){return p.getWorkItems(e,void 0,void 0,i.WorkItemExpand.Fields)}(e.workItemIds||e.ids||[e.workItemId||e.id]).then(function(e){return function(e){return e.map(function(e){var t={};return"User Story"===e.fields["System.WorkItemType"]&&(t={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],description:e.fields["System.Description"],acceptance_criteria:e.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],id:e.fields["System.Id"]}),"Bug"===e.fields["System.WorkItemType"]&&(t={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],repro_steps:e.fields["Microsoft.VSTS.TCM.ReproSteps"],system_info:e.fields["Microsoft.VSTS.TCM.SystemInfo"],id:e.fields["System.Id"]}),"Task"===e.fields["System.WorkItemType"]&&(t={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],description:e.fields["System.Description"],id:e.fields["System.Id"]}),"Product Backlog Item"===e.fields["System.WorkItemType"]&&(t={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],description:e.fields["System.Description"],acceptance_criteria:e.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],id:e.fields["System.Id"]}),"Feature"===e.fields["System.WorkItemType"]&&(t={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],problemoropportunity:e.fields["Custom.ProblemorOpportunity"],acceptance_criteria:e.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],priority:e.fields["Microsoft.VSTS.Common.Priority"],businessvalue:e.fields["Microsoft.VSTS.Common.BusinessValue"],timesaving:e.fields["Custom.TimeSaving"],costsaving:e.fields["Custom.CostSaving"],businessrisk:e.fields["Custom.BusinessRisk"],usabilityimprovemment:e.fields["Custom.UsabilityImprovement"],sponsor:e.fields["Custom.Sponsor"],id:e.fields["System.Id"]}),t})}(e)}).then(function(e){return a.all(e)}).then(function(e){var t=document.createElement("div");t.setAttribute("class","container border"),e.forEach(function(e){var n,r,i,a,u;"Bug"===e.type&&(n=o({number:e.id,title:e.title,repro_steps:e.repro_steps,system_info:e.system_info})),"User Story"===e.type&&(r=s({number:e.id,title:e.title,description:e.description,acceptance_criteria:e.acceptance_criteria})),"Task"===e.type&&(i=l({number:e.id,title:e.title,description:e.description})),"Product Backlog Item"===e.type&&(a=c({number:e.id,title:e.title,description:e.description,acceptance_criteria:e.acceptance_criteria})),"Feature"===e.type&&(u=d({number:e.id,title:e.title,description:e.description,problemoropportunity:e.problemoropportunity,revenueamount:e.revenueamount,timesaving:e.timesaving,costsaving:e.costsaving,sponsor:e.sponsor,priority:e.priority})),"Bug"===e.type&&(t.innerHTML+=n),"User Story"===e.type&&(t.innerHTML+=r),"Task"===e.type&&(t.innerHTML+=i),"Product Backlog Item"===e.type&&(t.innerHTML+=a),"Feature"===e.type&&(t.innerHTML+=u),"User Story"!==e.type&&"Bug"!==e.type&&"Task"!==e.type&&"Product Backlog Item"!==e.type&&"Feature"!==e.type&&(t.innerHTML+="<div class='container'>Work item type not supported. Submit pull requests here: https://github.com/blzb0b/pcards</div>",t.innerHTML+="page type: "+e.type)}),document.body.appendChild(t),setTimeout(function(){window.focus(),document.execCommand("print",!1,null)||window.print(),t.parentElement.removeChild(t)},1e3)})},icon:"static/img/print14.png",text:t,title:t}]}};VSS.register(u.publisherId+"."+u.extensionId+".print-work-item",f)}.apply(t,r))||(e.exports=i)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var r=n(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var a,s,o=null!=t?t:e.nullContext||{},l=n.helperMissing,c=e.escapeExpression;return'<div class="container border-blue">\r\n  <div class="title-and-estimate-container">\r\n    <div class="title-container">\r\n      <div class="title-text">\r\n        <strong>Title:&nbsp;</strong>'+c("function"==typeof(s=null!=(s=n.title||(null!=t?t.title:t))?s:l)?s.call(o,{name:"title",hash:{},data:i}):s)+'\r\n      </div>\r\n    </div>\r\n    <div class="estimate-container border-blue"></div>\r\n  </div>\r\n  <div class="userstory-and-discipline-container">\r\n    <div class="user-story"> \r\n      <strong>Description:</strong><br/>\r\n      '+(null!=(a="function"==typeof(s=null!=(s=n.description||(null!=t?t.description:t))?s:l)?s.call(o,{name:"description",hash:{},data:i}):s)?a:"")+'\r\n     </div>\r\n    <div class="discipline-container">\r\n      <div class="discipline">\r\n        <div class="description">Dev</div>\r\n        <div class="box border-blue"></div>\r\n      </div>\r\n      <div class="discipline">\r\n        <div class="description">UX</div>\r\n        <div class="box border-blue"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="po-vsts-container">\r\n    <div class="po">\r\n      <strong>Product Owner:</strong>\r\n    </div>\r\n    <div class="vsts-number">\r\n      <strong>'+c("function"==typeof(s=null!=(s=n.number||(null!=t?t.number:t))?s:l)?s.call(o,{name:"number",hash:{},data:i}):s)+'</strong> \r\n    </div>\r\n  </div>\r\n  \r\n  <hr/>\r\n  \r\n  <div class="acceptance-criteria-container">\r\n    <div class="acceptance-criteria">\r\n      <strong>Acceptance Criteria:</strong><br/>\r\n        '+(null!=(a="function"==typeof(s=null!=(s=n.acceptance_criteria||(null!=t?t.acceptance_criteria:t))?s:l)?s.call(o,{name:"acceptance_criteria",hash:{},data:i}):s)?a:"")+"\r\n    </div>\r\n  </div>\r\n</div>"},useData:!0})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=i(n(3)),s=r(n(21)),o=r(n(2)),l=i(n(0)),c=i(n(22)),d=r(n(23));function u(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=s.default,e.Exception=o.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=c,e.template=function(t){return c.template(t,e)},e}var p=u();p.create=u,d.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){i.default(e),a.default(e),s.default(e),o.default(e),l.default(e),c.default(e),d.default(e)};var i=r(n(11)),a=r(n(12)),s=r(n(13)),o=r(n(14)),l=r(n(15)),c=r(n(16)),d=r(n(17))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var i=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return i(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):i(this);if(n.data&&n.ids){var s=r.createFrame(n.data);s.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:s}}return a(t,n)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(0),a=n(2),s=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new s.default("Must pass iterator to #each");var n=t.fn,r=t.inverse,a=0,o="",l=void 0,c=void 0;function d(t,r,a){l&&(l.key=t,l.index=r,l.first=0===r,l.last=!!a,c&&(l.contextPath=c+t)),o+=n(e[t],{data:l,blockParams:i.blockParams([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),i.isFunction(e)&&(e=e.call(this)),t.data&&(l=i.createFrame(t.data)),e&&"object"==typeof e)if(i.isArray(e))for(var u=e.length;a<u;a++)a in e&&d(a,a,a===e.length-1);else{var p=void 0;for(var f in e)e.hasOwnProperty(f)&&(void 0!==p&&d(p,a-1),p=f,a++);void 0!==p&&d(p,a-1,!0)}return 0===a&&(o=r(this)),o})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(2),a=(r=i)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var i=t.data;return t.data&&t.ids&&((i=r.createFrame(t.data)).contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:i,blockParams:r.blockParams([e],[i&&i.contextPath])})})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var r,i=n(19),a=(r=i)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",function(e,t,n,i){var a=e;return t.partials||(t.partials={},a=function(i,a){var s=n.partials;n.partials=r.extend({},s,t.partials);var o=e(i,a);return n.partials=s,o}),t.partials[i.args[0]]=i.fn,a})},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(i.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=i.lookupLevel(e),"undefined"!=typeof console&&i.lookupLevel(i.level)<=e){var t=i.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=o.COMPILER_REVISION;if(t!==n){if(t<n){var r=o.REVISION_CHANGES[n],i=o.REVISION_CHANGES[t];throw new s.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new s.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new s.default("No environment passed to template");if(!e||!e.main)throw new s.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new s.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:i.escapeExpression,invokePartial:function(n,r,a){a.hash&&(r=i.extend({},r,a.hash),a.ids&&(a.ids[0]=!0));n=t.VM.resolvePartial.call(this,n,r,a);var o=t.VM.invokePartial.call(this,n,r,a);null==o&&t.compile&&(a.partials[a.name]=t.compile(n,e.compilerOptions,t),o=a.partials[a.name](r,a));if(null!=o){if(a.indent){for(var l=o.split("\n"),c=0,d=l.length;c<d&&(l[c]||c+1!==d);c++)l[c]=a.indent+l[c];o=l.join("\n")}return o}throw new s.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var a=this.programs[e],s=this.fn(e);return t||i||r||n?a=l(this,e,s,t,n,r,i):a||(a=this.programs[e]=l(this,e,s)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=i.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function r(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=i.data;r._setup(i),!i.partial&&e.useData&&(a=function(e,t){t&&"root"in t||((t=t?o.createFrame(t):{}).root=e);return t}(t,a));var s=void 0,l=e.useBlockParams?[]:void 0;function c(t){return""+e.main(n,t,n.helpers,n.partials,a,l,s)}return e.useDepths&&(s=i.depths?t!=i.depths[0]?[t].concat(i.depths):i.depths:[t]),(c=d(e.main,c,n,i.depths||[],a,l))(t,i)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},r._child=function(t,r,i,a){if(e.useBlockParams&&!i)throw new s.default("must pass block params");if(e.useDepths&&!a)throw new s.default("must pass parent depths");return l(n,t,e[t],r,0,i,a)},r},t.wrapProgram=l,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var a=void 0;n.fn&&n.fn!==c&&function(){n.data=o.createFrame(n.data);var e=n.fn;a=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=o.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=i.extend({},n.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new s.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=c;var r,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=n(2),s=(r=a)&&r.__esModule?r:{default:r},o=n(3);function l(e,t,n,r,i,a,s){function o(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=s;return!s||t==s[0]||t===e.nullContext&&null===s[0]||(o=[t].concat(s)),n(e,t,e.helpers,e.partials,i.data||r,a&&[i.blockParams].concat(a),o)}return(o=d(n,o,e,s,r,a)).program=t,o.depth=s?s.length:0,o.blockParams=i||0,o}function c(){return""}function d(e,t,n,r,a,s){if(e.decorator){var o={};t=e.decorator(t,o,n,r&&r[0],a,s,r),i.extend(t,o)}return t}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(24))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var a,s,o=null!=t?t:e.nullContext||{},l=n.helperMissing,c=e.escapeExpression;return'<div class="container border-red">\r\n  <div class="title-and-estimate-container">\r\n    <div class="title-container">\r\n      <div class="title-text">\r\n        <strong>Title:&nbsp;</strong>'+c("function"==typeof(s=null!=(s=n.title||(null!=t?t.title:t))?s:l)?s.call(o,{name:"title",hash:{},data:i}):s)+'\r\n      </div>\r\n    </div>\r\n    <div class="estimate-container border-red"></div>\r\n  </div>\r\n  <div class="userstory-and-discipline-container">\r\n    <div class="user-story"> \r\n      <strong>Reproduction Steps:</strong>\r\n      <br/>\r\n        '+(null!=(a="function"==typeof(s=null!=(s=n.repro_steps||(null!=t?t.repro_steps:t))?s:l)?s.call(o,{name:"repro_steps",hash:{},data:i}):s)?a:"")+"\r\n      <br/><br/>\r\n      <strong>System Info:</strong>\r\n      <br/>\r\n        "+(null!=(a="function"==typeof(s=null!=(s=n.system_info||(null!=t?t.system_info:t))?s:l)?s.call(o,{name:"system_info",hash:{},data:i}):s)?a:"")+'\r\n      <br/>\r\n     </div>\r\n    <div class="discipline-container">\r\n      <div class="discipline">\r\n        <div class="description">Dev</div>\r\n        <div class="box border-red"></div>\r\n      </div>\r\n      <div class="discipline">\r\n        <div class="description">UX</div>\r\n        <div class="box border-red"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="po-vsts-container">\r\n    <div class="po">\r\n      <strong>Product Owner:</strong>\r\n    </div>\r\n    <div class="vsts-number">\r\n      <strong>'+c("function"==typeof(s=null!=(s=n.number||(null!=t?t.number:t))?s:l)?s.call(o,{name:"number",hash:{},data:i}):s)+"</strong>\r\n    </div>\r\n  </div>\r\n</div>"},useData:!0})},function(e,t,n){var r=n(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var a,s,o=null!=t?t:e.nullContext||{},l=n.helperMissing,c=e.escapeExpression;return'<div class="container border-yellow">\r\n  <div class="title-and-estimate-container">\r\n    <div class="title-container">\r\n      <div class="title-text">\r\n        <strong>Title:&nbsp;</strong>'+c("function"==typeof(s=null!=(s=n.title||(null!=t?t.title:t))?s:l)?s.call(o,{name:"title",hash:{},data:i}):s)+'\r\n      </div>\r\n    </div>\r\n    <div class="estimate-container border-yellow"></div>\r\n  </div>\r\n  <div class="userstory-and-discipline-container">\r\n    <div class="user-story"> \r\n      <strong>Description:</strong><br/>\r\n      '+(null!=(a="function"==typeof(s=null!=(s=n.description||(null!=t?t.description:t))?s:l)?s.call(o,{name:"description",hash:{},data:i}):s)?a:"")+'\r\n     </div>\r\n    <div class="discipline-container">\r\n      <div class="discipline">\r\n        <div class="description">Dev</div>\r\n        <div class="box border-yellow"></div>\r\n      </div>\r\n      <div class="discipline">\r\n        <div class="description">UX</div>\r\n        <div class="box border-yellow"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="po-vsts-container">\r\n    <div class="po">\r\n      <strong>Product Owner:</strong>\r\n    </div>\r\n    <div class="vsts-number">\r\n      <strong>'+c("function"==typeof(s=null!=(s=n.number||(null!=t?t.number:t))?s:l)?s.call(o,{name:"number",hash:{},data:i}):s)+"</strong> \r\n    </div>\r\n  </div>\r\n</div>"},useData:!0})},function(e,t,n){var r=n(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var a,s,o=null!=t?t:e.nullContext||{},l=n.helperMissing,c=e.escapeExpression;return'<div class="container border-blue">\r\n  <div class="title-and-estimate-container">\r\n    <div class="title-container">\r\n      <div class="title-text">\r\n        <strong>Title:&nbsp;</strong>'+c("function"==typeof(s=null!=(s=n.title||(null!=t?t.title:t))?s:l)?s.call(o,{name:"title",hash:{},data:i}):s)+'\r\n      </div>\r\n    </div>\r\n    <div class="estimate-container border-blue"></div>\r\n  </div>\r\n  <div class="userstory-and-discipline-container">\r\n    <div class="user-story"> \r\n      <strong>Description:</strong><br/>\r\n      '+(null!=(a="function"==typeof(s=null!=(s=n.description||(null!=t?t.description:t))?s:l)?s.call(o,{name:"description",hash:{},data:i}):s)?a:"")+'\r\n     </div>\r\n    <div class="discipline-container">\r\n      <div class="discipline">\r\n        <div class="description">Dev</div>\r\n        <div class="box border-blue"></div>\r\n      </div>\r\n      <div class="discipline">\r\n        <div class="description">UX</div>\r\n        <div class="box border-blue"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="po-vsts-container">\r\n    <div class="po">\r\n      <strong>Product Owner:</strong>\r\n    </div>\r\n    <div class="vsts-number">\r\n      <strong>'+c("function"==typeof(s=null!=(s=n.number||(null!=t?t.number:t))?s:l)?s.call(o,{name:"number",hash:{},data:i}):s)+'</strong> \r\n    </div>\r\n  </div>\r\n  \r\n  <hr/>\r\n  \r\n  <div class="acceptance-criteria-container">\r\n    <div class="acceptance-criteria">\r\n      <strong>Acceptance Criteria:</strong><br/>\r\n        '+(null!=(a="function"==typeof(s=null!=(s=n.acceptance_criteria||(null!=t?t.acceptance_criteria:t))?s:l)?s.call(o,{name:"acceptance_criteria",hash:{},data:i}):s)?a:"")+"\r\n    </div>\r\n  </div>\r\n</div>"},useData:!0})},function(e,t,n){var r=n(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,i){var a,s,o=null!=t?t:e.nullContext||{},l=n.helperMissing,c="function",d=e.escapeExpression;return'  <div class="container border-purple background-purple">\r\n    <div class="innerContainer">\r\n        <div class="title-and-estimate-container">\r\n          <div class="title-container">\r\n            <div class="title-text">\r\n              <strong>Title:&nbsp;</strong>'+d(typeof(s=null!=(s=n.title||(null!=t?t.title:t))?s:l)===c?s.call(o,{name:"title",hash:{},data:i}):s)+'\r\n            </div>\r\n          </div>\r\n           <div class="estimate-container border-purple"><span style="font-size: 9pt;float: left;"> Priority<br/></span><span style="float:left">'+d(typeof(s=null!=(s=n.priority||(null!=t?t.priority:t))?s:l)===c?s.call(o,{name:"priority",hash:{},data:i}):s)+'</span></div>\r\n        </div>\r\n        <div class="userstory-and-discipline-container">\r\n          <div class="user-story"> \r\n            <strong>Problem or Opportunity:</strong><br/>\r\n            '+(null!=(a=typeof(s=null!=(s=n.problemoropportunity||(null!=t?t.problemoropportunity:t))?s:l)===c?s.call(o,{name:"problemoropportunity",hash:{},data:i}):s)?a:"")+'\r\n           </div>\r\n          \x3c!-- <div class="discipline-container">\r\n            <div class="discipline">\r\n              <div class="description">Dev</div>\r\n              <div class="box border-purple"></div>\r\n            </div>\r\n            <div class="discipline">\r\n              <div class="description">UX</div>\r\n              <div class="box border-purple"></div>\r\n            </div>\r\n            <div class="discipline">\r\n                <div class="description">Infra</div>\r\n                <div class="box border-purple"></div>\r\n              </div>\r\n          </div> --\x3e\r\n        </div>\r\n        <hr/>\r\n        \x3c!-- <div class="acceptance-criteria-container">\r\n          <div class="acceptance-criteria">\r\n            <strong>Acceptance Criteria:</strong><br/>\r\n              '+(null!=(a=typeof(s=null!=(s=n.acceptance_criteria||(null!=t?t.acceptance_criteria:t))?s:l)===c?s.call(o,{name:"acceptance_criteria",hash:{},data:i}):s)?a:"")+'\r\n          </div>\r\n        </div>\r\n        <hr/> --\x3e\r\n\r\n          <div class="po-vsts-container-justifications">\r\n            <div class="po">\r\n                Revenue Amount: £ '+d(typeof(s=null!=(s=n.revenueamount||(null!=t?t.revenueamount:t))?s:l)===c?s.call(o,{name:"revenueamount",hash:{},data:i}):s)+'\r\n            </div>\r\n            <div class="po">\r\n                Time Saving: '+d(typeof(s=null!=(s=n.timesaving||(null!=t?t.timesaving:t))?s:l)===c?s.call(o,{name:"timesaving",hash:{},data:i}):s)+' hrs\r\n            </div>\r\n            <div class="po">\r\n                Cost Saving: £ '+d(typeof(s=null!=(s=n.costsaving||(null!=t?t.costsaving:t))?s:l)===c?s.call(o,{name:"costsaving",hash:{},data:i}):s)+'\r\n            </div>\r\n        </div>\r\n         <div class="po-vsts-container-bottom">\r\n            <div class="po">\r\n              <strong>Product Sponsor: '+d(typeof(s=null!=(s=n.sponsor||(null!=t?t.sponsor:t))?s:l)===c?s.call(o,{name:"sponsor",hash:{},data:i}):s)+'</strong>\r\n            </div>\r\n            <div class="vsts-number">\r\n              <strong>'+d(typeof(s=null!=(s=n.number||(null!=t?t.number:t))?s:l)===c?s.call(o,{name:"number",hash:{},data:i}):s)+"</strong> \r\n            </div>\r\n          </div>\r\n          </div>\r\n      </div>\r\n"},useData:!0})}])});
//# sourceMappingURL=pcards.js.map