(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[16],{175:function(e,t,n){"use strict";var c={elements:{anemo:n.p+"static/media/Element_Anemo.f809fde3.png",cryo:n.p+"static/media/Element_Cryo.019d72f9.png",dendro:n.p+"static/media/Element_Dendro.8ee0f26d.png",electro:n.p+"static/media/Element_Electro.342332ac.png",geo:n.p+"static/media/Element_Geo.b7e865c6.png",hydro:n.p+"static/media/Element_Hydro.f2f8bd8a.png",pyro:n.p+"static/media/Element_Pyro.f65c2e38.png"},weaponTypes:{bow:n.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:n.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:n.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:n.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:n.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:n.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:n.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:n.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:n.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:n.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=c},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(14),a=n(0),s=n(108),r=n(1);function i(e){var t=e.value,n=e.onChange,i=e.className,o=void 0===i?"":i,l=e.disabled,d=void 0!==l&&l,j=e.float,u=void 0!==j&&j,b=e.placeholder,h=e.allowEmpty,m=void 0!==h&&h,x=e.max,f=e.min,O=Object(a.useState)(null!==t&&void 0!==t?t:""),p=Object(c.a)(O,2),g=p[0],v=p[1],y=Object(a.useState)({}),N=Object(c.a)(y,2),w=N[0],E=N[1],C=Object(a.useCallback)((function(){if(E({}),m&&""===g)return n(null);""===g&&v(0);var e=u?parseFloat:parseInt;n(e(g)||0)}),[n,g,u,m]);return Object(a.useEffect)((function(){return v(null!==t&&void 0!==t?t:"")}),[t,v,w]),Object(r.jsx)(s.a,{value:g,"aria-label":"custom-input",className:"hide-appearance ".concat(o),type:"number",placeholder:b,onChange:function(e){return v(e.target.value)},onBlur:C,disabled:d,onKeyDown:function(e){return"Enter"===e.key&&C()},max:x,min:f})}},190:function(e,t,n){"use strict";var c=n(2),a=n(4),s=n(5),r=n.n(s),i=n(0),o=n.n(i),l=n(7),d=["bsPrefix","size","toggle","vertical","className","as"],j=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.size,i=e.toggle,j=e.vertical,u=e.className,b=e.as,h=void 0===b?"div":b,m=Object(a.a)(e,d),x=Object(l.a)(n,"btn-group"),f=x;return j&&(f=x+"-vertical"),o.a.createElement(h,Object(c.a)({},m,{ref:t,className:r()(u,f,s&&x+"-"+s,i&&x+"-toggle")}))}));j.displayName="ButtonGroup",j.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=j},196:function(e,t,n){"use strict";var c=n(2),a=n(4),s=n(5),r=n.n(s),i=n(0),o=n.n(i),l=n(6),d=n.n(l),j=n(7),u=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],b=(d.a.string,d.a.bool,d.a.bool,d.a.bool,d.a.bool,o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.fluid,l=e.rounded,d=e.roundedCircle,b=e.thumbnail,h=Object(a.a)(e,u);n=Object(j.a)(n,"img");var m=r()(i&&n+"-fluid",l&&"rounded",d&&"rounded-circle",b&&n+"-thumbnail");return o.a.createElement("img",Object(c.a)({ref:t},h,{className:r()(s,m)}))})));b.displayName="Image",b.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=b},216:function(e,t,n){"use strict";var c=n(4),a=n(2),s=n(5),r=n.n(s),i=n(0),o=n.n(i),l=n(11),d=n(7),j=["bsPrefix","size","hasValidation","className","as"],u=Object(l.a)("input-group-append"),b=Object(l.a)("input-group-prepend"),h=Object(l.a)("input-group-text",{Component:"span"}),m=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.size,i=e.hasValidation,l=e.className,u=e.as,b=void 0===u?"div":u,h=Object(c.a)(e,j);return n=Object(d.a)(n,"input-group"),o.a.createElement(b,Object(a.a)({ref:t},h,{className:r()(l,n,s&&n+"-"+s,i&&"has-validation")}))}));m.displayName="InputGroup";var x=Object(a.a)({},m,{Text:h,Radio:function(e){return o.a.createElement(h,null,o.a.createElement("input",Object(a.a)({type:"radio"},e)))},Checkbox:function(e){return o.a.createElement(h,null,o.a.createElement("input",Object(a.a)({type:"checkbox"},e)))},Append:u,Prepend:b});t.a=x},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var c=n(8);function a(e){var t=e%1e3,n=Math.floor(e/1e3%60),c=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:c,seconds:n,milliseconds:t}}function s(e){var t=a(e),n=t.hours,s=t.minutes,r=t.seconds,i="Minutes";return n&&(i="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.s)(s,"0",2),":").concat(Object(c.s)(r,"0",2)," ").concat(i)}function r(e){var t=a(e),n=t.hours,s=t.minutes,r=t.seconds,i=t.milliseconds,o="Minutes";return n&&(o="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.s)(s,"0",2),":").concat(Object(c.s)(r,"0",2),".").concat(Object(c.s)(i,"0",3)," ").concat(o)}},232:function(e,t,n){"use strict";var c=n(2),a=n(4),s=n(0),r=n.n(s),i=n(6),o=n.n(i),l=n(63),d=n(107),j=n(106),u=["title","children","bsPrefix","rootCloseEvent","variant","size","menuAlign","menuRole","renderMenuOnMount","disabled","href","id"],b={id:o.a.any,href:o.a.string,onClick:o.a.func,title:o.a.node.isRequired,disabled:o.a.bool,menuAlign:j.a,menuRole:o.a.string,renderMenuOnMount:o.a.bool,rootCloseEvent:o.a.string,bsPrefix:o.a.string,variant:o.a.string,size:o.a.string},h=r.a.forwardRef((function(e,t){var n=e.title,s=e.children,i=e.bsPrefix,o=e.rootCloseEvent,b=e.variant,h=e.size,m=e.menuAlign,x=e.menuRole,f=e.renderMenuOnMount,O=e.disabled,p=e.href,g=e.id,v=Object(a.a)(e,u);return r.a.createElement(l.a,Object(c.a)({ref:t},v),r.a.createElement(d.a,{id:g,href:p,size:h,variant:b,disabled:O,childBsPrefix:i},n),r.a.createElement(j.b,{align:m,role:x,renderOnMount:f,rootCloseEvent:o},s))}));h.displayName="DropdownButton",h.propTypes=b,t.a=h},351:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var c=n(14),a=n(59),s=n(60);function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return l(this,n)}}var j=n(90),u=n(50),b=n(0),h=n.n(b),m=n(149),x=n(19),f=n(196),O=n(44),p=n(22),g=n(190),v=n(43),y=n(232),N=n(63),w=n(216),E=n(155),C=n(34),_=n(175),k=n(182),T=n(219),M=n(8),R=n(1),D=1e3,P=36e5;function S(e){return Object(R.jsxs)(m.a,{className:"mb-2",children:[Object(R.jsx)(H,{}),Object(R.jsx)(B,{}),Object(R.jsx)(U,{})]})}var I=160,z=48e4,B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(n,e);var t=d(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).resinIncrement=void 0,c.updateTimer=void 0,c.setResin=function(e){return c.setState((function(t){var n={resin:e=parseInt(e)||0};return e>=I?(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=0,t.resin<I&&(n.date=(new Date).getTime())):(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=setInterval((function(){return c.setResin(c.state.resin+1)}),z),n.date=(new Date).getTime()),n}))};var s=Object(M.n)("resinInfo");c.state=s||{resin:100,date:(new Date).getTime()};var r=c.state,i=r.resin,o=r.date;if(i<I&&Date.now()-o>z){var l=I-i,d=Math.min(Math.floor((Date.now()-o)/z),l);i+=d,o+=d*z,c.state.resin=i,c.state.date=o}return C.a.pageview("/tools"),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.resin,c=t.date;if(n<I){var a=c+z-new Date;this.resinIncrement=setTimeout((function(){e.setResin(e.state.resin+1)}),a)}this.updateTimer=setInterval((function(){return e.forceUpdate()}),D)}},{key:"componentWillUnmount",value:function(){this.updateTimer&&clearInterval(this.updateTimer),this.resinIncrement&&clearTimeout(this.resinIncrement)}},{key:"componentDidUpdate",value:function(){var e=Object(M.f)(this.state);Object(M.r)("resinInfo",e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.resin,c=t.date,a=n>=I?c:c+z,s=new Date(n>=I?c:c+(I-n)*z),r=Object(T.a)(Math.abs(a-Date.now()));return Object(R.jsxs)(x.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(R.jsxs)(x.a.Header,{children:[Object(R.jsx)(f.a,{src:_.a.resin.fragile,className:"thumb-small d-inline my-n1 ml-n2"}),Object(R.jsx)("span",{children:"Resin Counter"})]}),Object(R.jsx)(x.a.Body,{children:Object(R.jsxs)(O.a,{children:[Object(R.jsx)(p.a,{xs:"auto",className:"px-3",children:Object(R.jsxs)("span",{style:{fontSize:"4em"},children:[Object(R.jsx)(f.a,{src:_.a.resin.fragile,className:"d-inline w-auto mt-n3 ml-n3 mr-n4",style:{height:"1.5em"}}),Object(R.jsx)("input",{type:"number",className:"invisible-input hide-appearance text-white mb-0 text-right",size:4,value:n,min:0,max:999,style:{width:"2.1em"},onChange:function(t){return e.setResin(t.target.value)}}),"/",I]})}),Object(R.jsxs)(p.a,{children:[Object(R.jsxs)(g.a,{className:"w-100 d-flex mb-2",children:[Object(R.jsx)(v.a,{onClick:function(){return e.setResin(0)},disabled:0===n,children:"0"}),Object(R.jsx)(v.a,{onClick:function(){return e.setResin(n-1)},disabled:0===n,children:"-1"}),Object(R.jsx)(v.a,{onClick:function(){return e.setResin(n-20)},disabled:n<20,children:"-20"}),Object(R.jsx)(v.a,{onClick:function(){return e.setResin(n-40)},disabled:n<40,children:"-40"}),Object(R.jsx)(v.a,{onClick:function(){return e.setResin(n-60)},disabled:n<60,children:"-60"}),Object(R.jsx)(v.a,{onClick:function(){return e.setResin(n+1)},children:"+1"}),Object(R.jsx)(v.a,{onClick:function(){return e.setResin(n+60)},children:"+60"}),Object(R.jsxs)(v.a,{onClick:function(){return e.setResin(I)},disabled:n===I,children:["MAX ",I]})]}),Object(R.jsx)("h5",{children:n<I?Object(R.jsxs)("span",{children:["Next resin in ",r,", full Resin at ",s.toLocaleTimeString()," ",s.toLocaleDateString()]}):Object(R.jsxs)("span",{children:["Resin has been full for at least ",r,", since ",s.toLocaleTimeString()," ",s.toLocaleDateString()]})})]}),Object(R.jsx)("small",{children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})]})})]})}}]),n}(h.a.Component),A={America:-18e6,Europe:P,Asia:288e5,"TW, HK, MO":288e5};function H(e){var t=Object(b.useState)(Object.keys(A)[0]),n=Object(c.a)(t,2),a=n[0],s=n[1],r=Object(b.useState)(new Date(Date.now()+A[a])),i=Object(c.a)(r,2),o=i[0],l=i[1];Object(b.useEffect)((function(){return s(Object(M.n)("server_timezone")||Object.keys(A)[0])}),[]),Object(b.useEffect)((function(){var e=function t(){return l(new Date(Date.now()+A[a])),setTimeout((function(){e=t()}),D-Date.now()%D)}();return Object(M.r)("server_timezone",a),function(){return clearTimeout(e)}}),[a]);var d=new Date(o);d.getUTCHours()<4?d.setUTCHours(4,0,0,0):(d=new Date(d.getTime()+864e5)).setUTCHours(4,0,0,0);var h=d.getTime()-o.getTime(),m=Object(T.a)(h);return Object(R.jsxs)(x.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(R.jsx)(x.a.Header,{children:Object(R.jsxs)(O.a,{children:[Object(R.jsxs)(p.a,{xs:"auto",children:[Object(R.jsx)("h5",{className:"d-inline",children:Object(R.jsx)(u.a,{icon:j.c,className:"fa-fw mr-2"})}),Object(R.jsx)("span",{children:"Teyvat Time"})]}),Object(R.jsx)(p.a,{xs:"auto",children:Object(R.jsx)(y.a,{title:a,children:Object.keys(A).map((function(e){return Object(R.jsx)(N.a.Item,{onClick:function(){return s(e)},children:e},e)}))})})]})}),Object(R.jsx)(x.a.Body,{children:Object(R.jsxs)(O.a,{className:"d-flex justify-content-center",children:[Object(R.jsx)(p.a,{xs:"auto",className:"px-3",children:Object(R.jsx)("span",{style:{fontSize:"4em"},className:"d-block",children:o.toLocaleTimeString([],{timeZone:"UTC"})})}),Object(R.jsx)(p.a,{xs:"auto ",children:Object(R.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(R.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Server Date: ",Object(R.jsx)("b",{children:o.toDateString()})]}),Object(R.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Time until reset: ",Object(R.jsx)("b",{children:m})]}),Object(R.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Resin until reset: ",Object(R.jsx)("b",{children:Math.floor(h/48e4)})]})]})})]})})]})}var W={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:_.a.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:_.a.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:_.a.exp_books.wit}},L=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],F=[20,40,50,60,70,80,90];function U(e){var t=Object(b.useState)(0),n=Object(c.a)(t,2),a=n[0],s=n[1],r=Object(b.useState)(0),i=Object(c.a)(r,2),o=i[0],l=i[1],d=Object(b.useState)(0),j=Object(c.a)(d,2),u=j[0],h=j[1],m={advice:a,experience:o,wit:u},y={advice:s,experience:l,wit:h},N=Object(b.useState)(!1),C=Object(c.a)(N,2),_=C[0],T=C[1],D=Object(b.useState)(1),P=Object(c.a)(D,2),S=P[0],I=P[1],z=Object(b.useState)(0),B=Object(c.a)(z,2),A=B[0],H=B[1],U=Object(b.useState)(0),q=Object(c.a)(U,2),V=q[0],G=q[1];Object(b.useEffect)((function(){return G(Object(M.n)("mora")||0)}),[]),Object(b.useEffect)((function(){Object(M.r)("mora",V)}),[V]),Object(b.useEffect)((function(){return I(Object(M.n)("exp_calc_level")||1)}),[]),Object(b.useEffect)((function(){Object(M.r)("exp_calc_level",S)}),[S]),Object(b.useEffect)((function(){return H(Object(M.n)("exp_calc_cur_exp")||0)}),[]),Object(b.useEffect)((function(){Object(M.r)("exp_calc_cur_exp",A)}),[A]),Object(b.useEffect)((function(){var e=Object(M.n)("exp_books")||{},t={advice:s,experience:l,wit:h};Object.entries(e).forEach((function(e){var n,a=Object(c.a)(e,2),s=a[0],r=a[1];return null===(n=t[s])||void 0===n?void 0:n.call(t,r)}))}),[]),Object(b.useEffect)((function(){return Object(M.r)("exp_books",{advice:a,experience:o,wit:u})}),[a,o,u]);for(var Y=F.find((function(e){return e>S})),J=-A,K=S;K<Math.min(Y,L.length);K++)J+=L[K];for(var Z=function(e,t,n,c,a){var s=a?Math.floor(c/1e3):Math.ceil(c/1e3),r=Math.min(Math.floor(s/20),e);s-=20*r;var i=Math.min(Math.floor(s/5),t);s-=5*i;var o=Math.min(s,n);if(s-=o,a||0===s)return[r,i,o];if(3===i&&r!==e)return[r+1,0,0];if(i!==t)return[r,i+1,0];if(r!==e)return[r+1,0,0];return null}(u,o,a,J,_)||[],Q=Object(c.a)(Z,3),$=Q[0],ee=void 0===$?0:$,te=Q[1],ne=void 0===te?0:te,ce=Q[2],ae=void 0===ce?0:ce,se={advice:ae,experience:ne,wit:ee},re=2e4*ee+5e3*ne+1e3*ae,ie=re/5,oe=J-re,le=V-ie,de=re+A,je=S;je<Math.min(Y,L.length)&&L[je]<=de;je++)de-=L[je];je===Y&&(de=0);var ue="";return le<0?ue=Object(R.jsxs)("span",{children:["You don't have enough ",Object(R.jsx)("b",{children:"Mora"})," for this operation."]}):0===Z.length?ue=Object(R.jsxs)("span",{children:["You don't have enough ",Object(R.jsx)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===S&&(ue="You are at the maximum level."),Object(R.jsxs)(x.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(R.jsx)(x.a.Header,{children:Object(R.jsxs)(O.a,{children:[Object(R.jsxs)(p.a,{xs:"auto",children:[Object(R.jsx)(f.a,{src:W.wit.img,className:"thumb-small d-inline my-n1 ml-n2"}),Object(R.jsx)("span",{children:"Experience Calculator"})]}),Object(R.jsx)(p.a,{children:Object(R.jsxs)(g.a,{children:[Object(R.jsx)(v.a,{variant:_?"primary":"success",disabled:!_,onClick:function(){return T(!1)},children:"Full Level"}),Object(R.jsx)(v.a,{variant:_?"success":"primary",disabled:_,onClick:function(){return T(!0)},children:"Don't fully level"})]})})]})}),Object(R.jsxs)(x.a.Body,{children:[Object(R.jsx)(O.a,{className:"mb-2",children:Object(R.jsxs)(p.a,{children:[Object(R.jsx)("span",{children:"This calcualtor tries to calculate the amount of exp books required to get to the next milestone level. "}),_?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minize as much exp loss as possible."]})}),Object(R.jsxs)(O.a,{children:[Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Current Level"})}),Object(R.jsx)(k.a,{placeholder:void 0,value:S,onChange:function(e){return I(Object(M.a)(e,0,90))}})]})}),Object(R.jsx)(p.a,{xs:12,md:8,className:"mb-2",children:Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Current EXP."})}),Object(R.jsx)(k.a,{placeholder:void 0,value:A,onChange:function(e){return H(Object(M.a)(e,0,(L[S]||1)-1))}}),Object(R.jsx)(w.a.Append,{children:Object(R.jsxs)(w.a.Text,{children:["/",L[S]||0]})})]})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(x.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Next Milestone: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{children:Y})})]})})}),Object(R.jsx)(p.a,{xs:12,md:8,className:"mb-2",children:Object(R.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(x.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"EXP. needed to milestone: "}),Object(R.jsxs)("span",{className:"float-right text-right",children:[Object(R.jsx)("strong",{children:re})," / ",Object(R.jsx)("b",{children:J})]})]})})})]}),Object(R.jsxs)(O.a,{children:[Object.entries(W).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(R.jsx)(p.a,{xs:12,lg:4,children:Object(R.jsx)(X,{bookObj:a,value:m[n],setValue:y[n],required:se[n]})},n)})),Object(R.jsx)(p.a,{xs:12,lg:4,className:"mb-2",children:Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Current Mora"})}),Object(R.jsx)(k.a,{placeholder:void 0,value:V,onChange:function(e){return G(Math.max(e,0))}})]})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(x.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Mora Cost: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{children:ie})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(x.a.Body,{className:"py-2",children:[Object(R.jsxs)("span",{children:["EXP ",_?"Diff":"Waste",": "]}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:oe<0?"text-danger":"text-success",children:oe})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(x.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Final Mora: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:le<0?"text-danger":"text-success",children:le})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(x.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Final Level: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:"text-success",children:je})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(x.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Final EXP: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:de<0?"text-danger":"text-success",children:de})})]})})})]})]}),Object(R.jsx)(x.a.Footer,{children:Object(R.jsxs)(O.a,{children:[Object(R.jsx)(p.a,{children:Boolean(ue)&&Object(R.jsx)(E.a,{variant:"danger",className:"mb-0 py-2",children:ue})}),Object(R.jsx)(p.a,{xs:"auto",children:Object(R.jsx)(v.a,{disabled:!!ue,onClick:function(){I(je),H(de),Object.entries(se).forEach((function(e){var t,n=Object(c.a)(e,2),a=n[0],s=n[1];return null===(t=y[a])||void 0===t?void 0:t.call(y,m[a]-s)})),G(le)},variant:"success",children:"Apply"})})]})})]})}function X(e){var t=e.bookObj,n=t.name,c=t.img,a=e.value,s=void 0===a?0:a,r=e.setValue,i=e.required,o=void 0===i?0:i;return Object(R.jsxs)(x.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(R.jsx)(x.a.Header,{children:n}),Object(R.jsx)(x.a.Body,{children:Object(R.jsxs)(O.a,{children:[Object(R.jsx)(p.a,{xs:3,children:Object(R.jsx)(f.a,{src:c,className:"w-100 h-auto",rounded:!0})}),Object(R.jsxs)(p.a,{children:[Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Amount"})}),Object(R.jsx)(k.a,{placeholder:void 0,value:s,onChange:function(e){return r(Math.max(e,0))}})]}),Object(R.jsxs)("div",{className:"mt-2",children:[Object(R.jsx)("span",{children:"Required: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:o?"text-success":"",children:o})})]})]})]})})]})}}}]);
//# sourceMappingURL=16.e8164dff.chunk.js.map