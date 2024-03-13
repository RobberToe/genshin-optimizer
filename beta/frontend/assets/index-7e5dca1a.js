import{r as B,i as W,j as H,Q as U,e as a,n as i,J as n,p as t,T as D,B as A,t as w,C as m,D as V,U as L,V as dt,b as F,u as P,N as x,_ as G,W as _t,s as ft,X as ht,K as E,Y as It,Z as Pt,$ as Tt,M as Mt,R as pt,a0 as Et}from"./index-1c11f729.js";import{u as Ft,f as $t,s as Rt,P as lt}from"./StarDisplay-8da67c1e.js";import{d as jt,a as qt,A as mt,S as Kt,b as Vt,c as Lt,p as Ot,e as Ut,f as zt,g as Bt,h as ct}from"./StatEditorList-b74ede2d.js";import{d as Wt,B as Ht}from"./Help-f9a44022.js";import{C as z}from"./CloseButton-39424d68.js";import{T as Gt}from"./index-0490e90a.js";import{S as K}from"./SqBadge-6a4f0f19.js";import{C as Nt}from"./ColoredText-4626580a.js";import{A as Qt}from"./LocationAutocomplete-a771d77e.js";import"./DropdownButton-952f891b.js";import"./Link-1acbfba1.js";import"./Artifact-370d046d.js";import"./SlotIcon-bbd08484.js";import"./InfoTooltip-d8e29743.js";import"./index-9fc2e9ac.js";import"./CardActionArea-d651c559.js";const Xt=r=>r[Math.floor(Math.random()*r.length)];var N={},Jt=W;Object.defineProperty(N,"__esModule",{value:!0});var Q=N.default=void 0,Yt=Jt(B()),Zt=H,te=(0,Yt.default)((0,Zt.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");Q=N.default=te;function ee({pageKey:r,text:e="",modalTitle:o="",children:c}){const[u,p,d]=U(localStorage.getItem(`infoShown_${r}`)!=="true"),[f]=a.useState(Array.isArray(e)?Xt(e):e),y=a.useCallback(()=>{d(),localStorage.setItem(`infoShown_${r}`,"true")},[d,r]);return i(w,{children:[i(n,{container:!0,children:[t(n,{item:!0,flexGrow:1,children:t(D,{variant:"caption",pl:1,children:f})}),t(n,{item:!0,xs:"auto",children:t(A,{size:"small",color:"info",variant:"contained",onClick:p,startIcon:t(Wt,{}),children:t(Gt,{ns:"ui",key18:"info"})})})]}),t(dt,{containerProps:{maxWidth:"xl"},open:u,onClose:y,children:i(w,{children:[t(m,{sx:{py:1},children:i(n,{container:!0,children:[t(n,{item:!0,flexGrow:1,children:t(D,{variant:"h6",children:o})}),t(n,{item:!0,children:t(z,{onClick:y})})]})}),t(V,{}),t(m,{children:t(a.Suspense,{fallback:t(L,{variant:"rectangular",width:"100%",height:500}),children:c})}),t(V,{}),t(m,{sx:{py:1},children:t(z,{large:!0,onClick:y})})]})})]})}function yt(){const r=F(),[e,o]=a.useState(r.displayArtifact.get());return a.useEffect(()=>r.displayArtifact.follow((c,u)=>o(u)),[r]),e}var X={},re=W;Object.defineProperty(X,"__esModule",{value:!0});var gt=X.default=void 0,ae=re(B()),ie=H,ne=(0,ae.default)((0,ie.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");gt=X.default=ne;var J={},oe=W;Object.defineProperty(J,"__esModule",{value:!0});var bt=J.default=void 0,se=oe(B()),le=H,ce=(0,se.default)((0,le.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");bt=J.default=ce;const ue=a.lazy(()=>G(()=>import("./ArtifactFilterDisplay-13e88694.js").then(r=>r.b),["./ArtifactFilterDisplay-13e88694.js","./index-1c11f729.js","./index-5c4fec49.css","./StatEditorList-b74ede2d.js","./Link-1acbfba1.js","./index-0490e90a.js","./ColoredText-4626580a.js","./SqBadge-6a4f0f19.js","./StarDisplay-8da67c1e.js","./DropdownButton-952f891b.js","./Artifact-370d046d.js","./LocationAutocomplete-a771d77e.js","./Help-f9a44022.js","./SlotIcon-bbd08484.js","./InfoTooltip-d8e29743.js","./index-9fc2e9ac.js","./CardActionArea-d651c559.js","./totalUtils-4e869526.js","./sortByRarityAndName-b392f858.js"],import.meta.url));function de({numShowing:r,total:e,artifactIds:o}){const{t:c}=P(["artifact","ui"]),u=F(),{filterOption:p}=yt(),d=a.useCallback(f=>u.displayArtifact.set({filterOption:{...p,...f}}),[u,p]);return t(a.Suspense,{fallback:t(L,{variant:"rectangular",width:"100%",height:300}),children:t(w,{children:i(m,{children:[i(n,{container:!0,children:[t(n,{item:!0,children:t(D,{variant:"h6",children:t(x,{t:c,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),t(n,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:r!==e&&i(D,{children:["Filtered ",t("strong",{children:r})," / ",e]})}),t(n,{item:!0,children:t(A,{size:"small",color:"error",onClick:()=>u.displayArtifact.set({action:"reset"}),startIcon:t(bt,{}),children:t(x,{t:c,i18nKey:"ui:reset"})})})]}),t(a.Suspense,{fallback:t(L,{variant:"rectangular",width:"100%",height:200}),children:t(ue,{filterOption:p,filterOptionDispatch:d,filteredIds:o})})]})})})}function fe({artifactIds:r}){const{t:e}=P(["artifact","ui"]),o=F(),{numDelete:c,numUnequip:u,numUnlock:p,numLock:d}=a.useMemo(()=>{const l=r.map(b=>o.arts.get(b)),h=l.reduce((b,I)=>b+(I.lock?0:1),0),C=l.length-h,_=h,k=l.reduce((b,I)=>b+(I.location?1:0),0);return{numDelete:_,numUnequip:k,numUnlock:h,numLock:C}},[r,o]);return i(n,{container:!0,spacing:1,alignItems:"center",children:[t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!u,onClick:()=>window.confirm(`Are you sure you want to unequip ${u} artifacts currently equipped on characters?`)&&r.map(l=>o.arts.set(l,{location:""})),startIcon:t(gt,{}),children:[t(x,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),t(K,{sx:{ml:1},color:u?"success":"secondary",children:u})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!c,onClick:()=>window.confirm(`Are you sure you want to delete ${c} artifacts?`)&&r.map(l=>{var h;return!((h=o.arts.get(l))!=null&&h.lock)&&o.arts.remove(l)}),startIcon:t(_t,{}),children:[t(x,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),t(K,{sx:{ml:1},color:c?"success":"secondary",children:c})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to unlock ${d} artifacts?`)&&r.map(l=>o.arts.set(l,{lock:!1})),startIcon:t(jt,{}),children:[t(x,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),t(K,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),t(n,{item:!0,xs:12,sm:6,md:3,children:i(A,{fullWidth:!0,color:"error",disabled:!p,onClick:()=>window.confirm(`Are you sure you want to lock ${p} artifacts?`)&&r.map(l=>o.arts.set(l,{lock:!0})),startIcon:t(qt,{}),children:[t(x,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),t(K,{sx:{ml:1},color:p?"success":"secondary",children:p})]})}),t(n,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:t(D,{variant:"caption",color:"text.secondary",children:i(x,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",t("b",{children:"currently filtered artifacts"})]})})})]})}function he({show:r,onHide:e}){const{t:o}=P("artifact");return t(dt,{open:r,onClose:e,children:i(ft,{children:[i(m,{sx:{display:"flex",alignItems:"center"},children:[i(D,{variant:"h6",flexGrow:1,children:[t(Q,{sx:{verticalAlign:"text-top",mr:1}}),o`showDup`]}),t(z,{onClick:e})]}),t(V,{}),t(m,{children:t(pe,{})})]})})}function pe(){const{t:r}=P("artifact"),e=F(),[o,c]=ht();a.useEffect(()=>e.arts.followAny(c),[c,e]);const u=a.useMemo(()=>{const d=o&&[];let f=e.arts.keys;for(;f.length!==0;){const y=f.shift();if(!y)continue;const T=e.arts.get(y);if(!T)continue;const{duplicated:g}=e.arts.findDups(T,f);if(!g.length)continue;const l=g.map(h=>h.id);d.push([y,...l].sort(h=>{var C;return((C=e.arts.get(h))==null?void 0:C.location)??""?-1:1})),f=f.filter(h=>!l.includes(h))}return d},[e,o]),p=a.useMemo(()=>({}),[]);return i(Pt,{spacing:2,children:[u.map(d=>t(w,{sx:{overflowX:"scroll"},children:t(m,{sx:{display:"flex",gap:1},children:d.map(f=>t(E,{sx:{minWidth:300},children:t(mt,{artifactId:f,canEquip:!0,onDelete:()=>e.arts.remove(f),editorProps:p})},f))})},d.join())),!u.length&&t(It,{variant:"filled",severity:"success",children:r`noDupAlert`})]})}const me=[...Tt];function ye({probabilityFilter:r={},setProbabilityFilter:e,disabled:o=!1}){const{t:c}=P("artifact");return i(w,{children:[t(m,{sx:{py:1},children:t(D,{variant:"h6",children:"Roll Probability Calculator"})}),t(V,{}),t(m,{children:i(n,{container:!0,spacing:1,children:[t(n,{item:!0,xs:12,md:6,children:t(ft,{children:t(m,{children:i(D,{children:['This UI only pops up when "Sort by"',t("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",i(Nt,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),t(n,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:t(Kt,{statKeys:me,statFilters:r,setStatFilters:e,disabled:o,label:c("probabilityFilter.label")})})]})})]})}const ge=pt.lazy(()=>G(()=>import("./ArtifactEditor-53c7dc3f.js"),["./ArtifactEditor-53c7dc3f.js","./index-1c11f729.js","./index-5c4fec49.css","./index-0490e90a.js","./ColoredText-4626580a.js","./SqBadge-6a4f0f19.js","./Help-f9a44022.js","./StatEditorList-b74ede2d.js","./Link-1acbfba1.js","./StarDisplay-8da67c1e.js","./DropdownButton-952f891b.js","./Artifact-370d046d.js","./LocationAutocomplete-a771d77e.js","./SlotIcon-bbd08484.js","./InfoTooltip-d8e29743.js","./index-9fc2e9ac.js","./CardActionArea-d651c559.js","./ArtifactRarityDropdown-7c780577.js","./sortByRarityAndName-b392f858.js","./CloseButton-39424d68.js","./TextButton-af16ba74.js","./CardHeader-a4fed2b9.js"],import.meta.url)),be=pt.lazy(()=>G(()=>import("./index-b7cbd3bb.js"),["./index-b7cbd3bb.js","./index-1c11f729.js","./index-5c4fec49.css","./Settings-5382a3a2.js","./StarDisplay-8da67c1e.js","./DropdownButton-952f891b.js","./ColoredText-4626580a.js","./index-0490e90a.js","./SqBadge-6a4f0f19.js","./ImgFullwidth-53ced43d.js","./StatEditorList-b74ede2d.js","./Link-1acbfba1.js","./Artifact-370d046d.js","./LocationAutocomplete-a771d77e.js","./Help-f9a44022.js","./SlotIcon-bbd08484.js","./InfoTooltip-d8e29743.js","./index-9fc2e9ac.js","./CardActionArea-d651c559.js"],import.meta.url)),ut={xs:1,sm:2,md:3,lg:3,xl:4},ve={xs:10,sm:12,md:24,lg:24,xl:24};function qe(){const{t:r}=P(["artifact","ui"]),e=F(),o=yt(),[c,u,p]=U(!1),[d,f,y]=U(!1),T=Ft(),g=ve[T],{sortType:l,effFilter:h,ascending:C,probabilityFilter:_}=o,k=l==="probability",[b,I]=a.useState(0),O=a.useRef(null),[vt,Y]=ht(),Z=a.useDeferredValue(vt),M=a.useMemo(()=>new Set(h),[h]),xt=a.useCallback(s=>e.arts.remove(s),[e]);a.useEffect(()=>(Mt.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny(()=>Y())),[e,Y]);const At=a.useCallback(s=>e.displayArtifact.set({probabilityFilter:s}),[e]),wt=a.useMemo(()=>!e.arts.values.length,[e]),tt=a.useMemo(()=>Vt(M,_),[M,_]),et=a.useMemo(()=>Lt(M),[M]),rt=a.useDeferredValue(o),at=a.useDeferredValue(_);a.useEffect(()=>{if(k)return e.arts.values.forEach(s=>e.arts.setProbability(s.id,Ot(s,at))),()=>e.arts.values.forEach(s=>e.arts.setProbability(s.id,-1))},[e,k,at]);const{artifactIds:v,totalArtNum:$}=a.useMemo(()=>{const{sortType:s=ct[0],ascending:S=!1,filterOption:R}=rt;let j=e.arts.values;return k&&(j=j.filter(q=>q.probability&&q.probability!==1)),{artifactIds:j.filter($t(R,et)).sort(Rt(Ut[s]??[],S,tt)).map(q=>q.id),totalArtNum:j.length,...Z}},[rt,Z,e,tt,et,k]),{artifactIdsToShow:it,numPages:nt,currentPageIndex:Dt}=a.useMemo(()=>{const s=Math.ceil(v.length/g),S=Et(b,0,s-1);return{artifactIdsToShow:v.slice(S*g,(S+1)*g),numPages:s,currentPageIndex:S}},[v,b,g]),kt=v.length!==$?`${v.length}/${$}`:`${$}`,St=a.useCallback((s,S)=>{var R;(R=O.current)==null||R.scrollIntoView({behavior:"smooth"}),I(S-1)},[I,O]),ot={count:nt,page:Dt+1,onChange:St},st={numShowing:it.length,total:kt,t:r,namespace:"artifact"},Ct={sortKeys:[...ct],value:l,onChange:s=>e.displayArtifact.set({sortType:s}),ascending:C,onChangeAsc:s=>e.displayArtifact.set({ascending:s})};return i(E,{display:"flex",flexDirection:"column",gap:1,my:1,children:[t(a.Suspense,{fallback:!1,children:t(ge,{artifactIdToEdit:c?"new":"",cancelEdit:p,allowUpload:!0,allowEmpty:!0})}),t(a.Suspense,{fallback:!1,children:t(he,{show:d,onHide:y})}),t(ee,{pageKey:"artifactPage",modalTitle:r`info.title`,text:r("tipsOfTheDay",{returnObjects:!0}),children:t(be,{})}),wt&&t(zt,{}),t(de,{numShowing:v.length,total:$,artifactIds:v}),t(w,{ref:O,children:t(m,{children:t(Ht,{placement:"top",title:t(x,{t:r,i18nKey:"efficiencyFilter.title",children:"Substats to use in efficiency calculation"}),children:t(E,{children:t(Bt,{selectedKeys:h,onChange:s=>e.displayArtifact.set({effFilter:s})})})})})}),t(w,{children:i(m,{children:[t(E,{pb:2,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(lt,{paginationProps:ot,showingTextProps:st,displaySort:!0,sortByButtonProps:Ct})}),t(fe,{artifactIds:v})]})}),k&&t(ye,{probabilityFilter:_,setProbabilityFilter:At}),i(n,{container:!0,columns:ut,spacing:1,children:[t(n,{item:!0,xs:!0,children:t(A,{fullWidth:!0,onClick:u,color:"info",startIcon:t(Qt,{}),children:r`addNew`})}),t(n,{item:!0,xs:1,children:t(A,{fullWidth:!0,onClick:f,color:"info",startIcon:t(Q,{}),children:r`showDup`})})]}),t(a.Suspense,{fallback:t(L,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(n,{container:!0,spacing:1,columns:ut,children:it.map(s=>t(n,{item:!0,xs:1,children:t(mt,{artifactId:s,effFilter:M,onDelete:xt,editorProps:{},canEquip:!0})},s))})}),nt>1&&t(w,{children:t(m,{children:t(E,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(lt,{paginationProps:ot,showingTextProps:st})})})})]})}export{qe as default};
