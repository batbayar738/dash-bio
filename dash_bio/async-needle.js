(window.webpackJsonpdash_bio=window.webpackJsonpdash_bio||[]).push([[7],{49:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),a=e(100),i=e.n(a),u=e(11);function c(t){return"[object Number]"===Object.prototype.toString.call(t)}var s=Object(u.a)((function(t,n){if(!c(t)||!c(n))throw new TypeError("Both arguments to range must be numbers");for(var e=[],r=t;r<n;)e.push(r),r+=1;return e})),l=e(3),f=Object(l.a)((function(t){return function(){return t}})),p=Object(u.a)((function(t,n){var e,r=Number(n),o=0;if(r<0||isNaN(r))throw new RangeError("n must be a non-negative number");for(e=new Array(r);o<r;)e[o]=t(o),o+=1;return e})),h=Object(u.a)((function(t,n){return p(f(t),n)})),y=e(4);function b(t){return function n(e,r,o){switch(arguments.length){case 0:return n;case 1:return Object(y.a)(e)?n:Object(u.a)((function(n,r){return t(e,n,r)}));case 2:return Object(y.a)(e)&&Object(y.a)(r)?n:Object(y.a)(e)?Object(u.a)((function(n,e){return t(n,r,e)})):Object(y.a)(r)?Object(u.a)((function(n,r){return t(e,n,r)})):Object(l.a)((function(n){return t(e,r,n)}));default:return Object(y.a)(e)&&Object(y.a)(r)&&Object(y.a)(o)?n:Object(y.a)(e)&&Object(y.a)(r)?Object(u.a)((function(n,e){return t(n,e,o)})):Object(y.a)(e)&&Object(y.a)(o)?Object(u.a)((function(n,e){return t(n,r,e)})):Object(y.a)(r)&&Object(y.a)(o)?Object(u.a)((function(n,r){return t(e,n,r)})):Object(y.a)(e)?Object(l.a)((function(n){return t(n,r,o)})):Object(y.a)(r)?Object(l.a)((function(n){return t(e,n,o)})):Object(y.a)(o)?Object(l.a)((function(n){return t(e,r,n)})):t(e,r,o)}}}var d=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};var m=Object(l.a)((function(t){return!!d(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),g=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var x=Object(u.a)((function(t,n){return function(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,e){return n.apply(this,arguments)};case 3:return function(t,e,r){return n.apply(this,arguments)};case 4:return function(t,e,r,o){return n.apply(this,arguments)};case 5:return function(t,e,r,o,a){return n.apply(this,arguments)};case 6:return function(t,e,r,o,a,i){return n.apply(this,arguments)};case 7:return function(t,e,r,o,a,i,u){return n.apply(this,arguments)};case 8:return function(t,e,r,o,a,i,u,c){return n.apply(this,arguments)};case 9:return function(t,e,r,o,a,i,u,c,s){return n.apply(this,arguments)};case 10:return function(t,e,r,o,a,i,u,c,s,l){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}(t.length,(function(){return t.apply(n,arguments)}))}));function O(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function v(t,n,e,r){return t["@@transducer/result"](e[r](x(t["@@transducer/step"],t),n))}var j="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function w(t,n,e){if("function"==typeof t&&(t=function(t){return new g(t)}(t)),m(e))return function(t,n,e){for(var r=0,o=e.length;r<o;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"==typeof e["fantasy-land/reduce"])return v(t,n,e,"fantasy-land/reduce");if(null!=e[j])return O(t,n,e[j]());if("function"==typeof e.next)return O(t,n,e);if("function"==typeof e.reduce)return v(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}var S=b(w),k=Object(u.a)((function(t,n){return n>t?n:t})),A=e(50);function E(t,n){return function(t,n,e){var r,o;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(r=1/n;e<t.length;){if(0===(o=t[e])&&1/o===r)return e;e+=1}return-1}if(n!=n){for(;e<t.length;){if("number"==typeof(o=t[e])&&o!=o)return e;e+=1}return-1}return t.indexOf(n,e);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,e);case"object":if(null===n)return t.indexOf(n,e)}for(;e<t.length;){if(Object(A.a)(t[e],n))return e;e+=1}return-1}(n,t,0)>=0}var N=Object(u.a)(E),P=e(467);function C(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function _(t,n,e){return function(){if(0===arguments.length)return e();var r=Array.prototype.slice.call(arguments,0),o=r.pop();if(!d(o)){for(var a=0;a<t.length;){if("function"==typeof o[t[a]])return o[t[a]].apply(o,r);a+=1}if(C(o)){var i=n.apply(null,r);return i(o)}}return e.apply(this,arguments)}}function T(t){return"[object Object]"===Object.prototype.toString.call(t)}var M=function(){return this.xf["@@transducer/init"]()},B=function(t){return this.xf["@@transducer/result"](t)},z=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=M,t.prototype["@@transducer/result"]=B,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),F=Object(u.a)((function(t,n){return new z(t,n)})),R=e(9),D=Object(u.a)(_(["filter"],F,(function(t,n){return T(n)?w((function(e,r){return t(n[r])&&(e[r]=n[r]),e}),{},Object(R.a)(n)):function(t,n){for(var e=0,r=n.length,o=[];e<r;)t(n[e])&&(o[o.length]=n[e]),e+=1;return o}(t,n)}))),I=e(10),J=e(5),L=Object(u.a)((function(t,n){if(0===t.length)return!1;for(var e=n,r=0;r<t.length;){if(!Object(J.a)(t[r],e))return!1;e=e[t[r]],r+=1}return!0})),W=Object(u.a)((function(t,n){return L([t],n)})),G=b((function(t,n,e){var r,o={};for(r in n)Object(J.a)(r,n)&&(o[r]=Object(J.a)(r,e)?t(r,n[r],e[r]):n[r]);for(r in e)Object(J.a)(r,e)&&!Object(J.a)(r,o)&&(o[r]=e[r]);return o})),H=b((function t(n,e,r){return G((function(e,r,o){return T(r)&&T(o)?t(n,r,o):n(e,r,o)}),e,r)})),U=Object(u.a)((function(t,n){return H((function(t,n,e){return e}),t,n)})),X=e(466),q=e(19);function K(t){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function V(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(){return(Y=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function Z(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function tt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,n){return(nt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function et(t){return!isNaN(parseFloat(t))&&isFinite(t)}function rt(t,n,e,r){var o=(n-t)/r,a=Math.max(2,r);return[s(0,a).map((function(n){return t+n*o})),h(e,a)]}function ot(t){return S(k,-1/0,function(t){return t.filter((function(t){return Number(et(t))}))}(t))}e.d(n,"default",(function(){return at}));var at=function(t){function n(){var t,e,r;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),e=this,(t=!(r=$(n).call(this))||"object"!==K(r)&&"function"!=typeof r?tt(e):r).gd=o.a.createRef(),t.state={xStart:null,xEnd:null},t.handleChange=t.handleChange.bind(tt(t)),t.handleClick=t.handleClick.bind(tt(t)),t}var e,r,a;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&nt(t,n)}(n,t),e=n,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props=U(n.defaultProps,this.props)}},{key:"handleChange",value:function(t){t["xaxis.range[0]"]||t["xaxis.range"]?this.setState({xStart:t["xaxis.range[0]"]||t["xaxis.range"][0],xEnd:t["xaxis.range[1]"]||t["xaxis.range"][1]}):!0===t["xaxis.autorange"]&&this.setState({xStart:null,xEnd:null})}},{key:"handleClick",value:function(t){var n=function(t,n,e){var r;if(N(e,["click","hover","selected"])){var o=[];if(Object(P.a)(n))return null;for(var a=t.props.data,i=0;i<n.points.length;i++){var u=n.points[i],c=D((function(t){return!N(Object(I.a)(t),["Object","Array"])}),u);W("curveNumber",u)&&W("pointNumber",u)&&W("customdata",a[c.curveNumber])&&(c.customdata=a[c.curveNumber].customdata[u.pointNumber]),W("pointNumbers",u)&&(c.pointNumbers=u.pointNumbers),o[i]=c}r={points:o}}else"relayout"!==e&&"restyle"!==e||(r=n);return W("range",n)&&(r.range=n.range),W("lassoPoints",n)&&(r.lassoPoints=n.lassoPoints),r}(this.gd.current,t,"click");Object(P.a)(n)||this.props.setProps({clickData:n})}},{key:"render",value:function(){var t=this.props,n=t.id,e=t.width,r=t.height,a=this.prepareTraces(),u=a.data,c=a.globalAnnotation,s=a.domainAnnotations,l=this.prepareLayout({data:u,globalAnnotation:c,domainAnnotations:s}),f={width:e,height:r};return o.a.createElement("div",{id:n,style:f},o.a.createElement(i.a,Y({style:f,ref:this.gd,data:u,layout:l,onClick:this.handleClick,onRelayout:this.handleChange},Object(X.a)(["setProps"],this.props))))}},{key:"prepareTraces",value:function(){var t=U(n.defaultProps,this.props),e=t.mutationData,r=e.x,o=e.y,a=e.mutationGroups,i=e.domains,u=t.domainStyle,c=u.domainColor,s=u.displayMinorDomains,l=u.textangle,f=t.needleStyle,p=f.stemColor,h=f.stemThickness,y=f.stemConstHeight,b=f.headSize,d=f.headColor,m=f.headSymbol,g=V(function(t){var n=[],e=[],r=[],o=[];return t.forEach((function(t,a){if(t.indexOf("-")>-1){var i=t.split("-");et(i[0])||et(i[1])?o.push(a):e.push(t)}else r.push(a),n.push(t)})),[n,e,r,o]}(r),3),x=g[0],O=g[1],v=g[2],j=Array.isArray(d)?d:a.map((function(){return d})),w=Array.isArray(m)?m:a.map((function(){return m})),S=c,k=Math.min.apply(null,x),A=Math.max.apply(null,x),E=!0===y?1:ot(o),N=this.state.xStart||k,P=(this.state.xEnd||A)-N,C=!0===y?.5:E/10,_=!0===y?2:E+C,T=[],M=[],B=[],z=[];v.forEach((function(t){y?z=z.concat([1]):(B=B.concat(["("+r[t]+","+o[t]+")"]),z=z.concat([o[t]]))}));var F=!0===y?"x+name+text":"name+text";i.forEach((function(t,n){var e=t.coord.split("-"),r=Number(e[0]),o=Number(e[1]),a=o-r;T.push({x:[o,r],y:[_,_],xaxis:"x1",name:t.name,fill:"tozeroy",mode:"lines",opacity:.5,visible:"legendonly",legendgroup:t.name,marker:{color:S[n]}});var i=V(rt(r,o,-C,o-r),2),u=i[0],c=i[1];T.push({type:"scatter",mode:"lines",fill:"tozeroy",fillcolor:S[n],hoveron:"points+fills",x:u,y:c,xaxis:"x2",showlegend:!1,hoverinfo:"name",name:"[".concat(r,"->").concat(o,"] ").concat(t.name),marker:{color:S[n]},line:{width:2}}),M.push({x:(r+o)/2,y:0===l?-C/2:-C/2-(1.2+.001*Math.abs(l)),showarrow:!1,text:t.name,width:a,align:a<.1*P?"right":"center",textangle:l})})),!0===s&&O.forEach((function(t){var n=Number(t.split("-")[0]),e=Number(t.split("-")[1]),o=a[r.indexOf(t)],i=V(rt(n,e,-C/2,e-n),2),u=i[0],c=i[1];T.push({type:"scatter",mode:"lines",x:u,y:c,fill:"tozeroy",fillcolor:j[Q(new Set(a)).indexOf(o)],hoveron:"points+fills",xaxis:"x2",hoverinfo:"name+text",name:o,text:"[".concat(n,"->").concat(e,"] "),showlegend:!1,marker:{color:j[Q(new Set(a)).indexOf(o)]},line:{width:33}})}));var R=[{text:"<b>".concat(x.length+O.length," Mutations</b>"),x:.01,xref:"paper",y:1.1,yref:"paper",showarrow:!1,align:"left"}];return{data:[{type:"scatter",mode:"markers",x:x,y:z,xaxis:"x1",hoverinfo:F,text:B,error_y:{type:"data",symmetric:!1,array:0,arrayminus:z,thickness:h,width:0,color:p},transforms:[{type:"groupby",groups:a,nameformat:"%{group}",styles:Q(new Set(a)).map((function(t,n){return{target:t,value:{marker:{size:b,symbol:w[n],color:j[n]}}}}))}]}].concat(T),globalAnnotation:R,domainAnnotations:M}}},{key:"prepareLayout",value:function(t){var e=t.data,r=t.globalAnnotation,o=t.domainAnnotations,a=U(n.defaultProps,this.props),i=a.xlabel,u=a.ylabel,c=a.rangeSlider,s=a.margin,l=this.state,f=l.xStart,p=l.xEnd,h=!1;(Boolean(!f)||Boolean(!p))&&(h=!0,e.forEach((function(t){var n=Math.min.apply(null,t.x),e=Math.max.apply(null,t.x);(f>n||Boolean(!f))&&(f=n),(p<e||Boolean(!p))&&(p=e)})));var y={legend:{orientation:"v",x:1,y:1.05,bgcolor:"rgba(255, 255, 255, 0)"},hovermode:"closest",xaxis:{title:i,showgrid:!1,zeroline:!1,autorange:Boolean(!f),range:[f,p],anchor:"y"},xaxis2:{scaleanchor:"x",autorange:Boolean(!f),range:[f,p],anchor:"y",overlaying:"x"},yaxis:{title:u,showgrid:!1,ticks:"inside"},margin:s,annotations:o.concat(r)};return!0===c&&(y.xaxis.rangeslider=!0===h?{range:[.98*f,1.02*p]}:{}),y}}])&&Z(e.prototype,r),a&&Z(e,a),n}(r.Component);at.propTypes=q.c,at.defaultProps=q.b}}]);
//# sourceMappingURL=async-needle.js.map