"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[246],{98022:function(e,a,t){t.r(a),t.d(a,{default:function(){return fm}});var d=t(27235),i=t(78661),n=t(53343),c=t(31148),r=t(4942),s=t(73036);function o(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,s.b3)([(0,s.d1)(a,e),{display:(0,r.Z)({},"artifact:".concat(e),t)}])}var l=t.p+"static/media/flower.1e05231c67a4b5c11596.png",m=t.p+"static/media/plume.40546dc8a3d8e200227d.png",f=t.p+"static/media/sands.47890ea0069400dc53f2.png",p=t.p+"static/media/goblet.fb105aeb81d0a625019e.png",g=t.p+"static/media/circlet.bf871ab66ea96f22d097.png",u={flower:l,plume:m,sands:f,goblet:p,circlet:g},b=u,w="Adventurer",h=(0,c.i)(w,b),y=(0,i.ew)(d.qH.artSet.Adventurer,2,1e3),_=(0,i.ew)(d.qH.artSet.Adventurer,4,(0,i.WV)((0,i.aQ)(.3),d.qH.total.hp)),S=o(w,{premod:{hp:y}},{heal:_}),H={name:"Adventurer",rarity:[3],icons:b,setEffects:{2:{document:[{header:h(2),fields:[{node:y}]}]},4:{document:[{header:h(4),fields:[{node:(0,i.ce)(_,{name:(0,n.el)("healing"),variant:"heal"})}]}]}}},v=new c.y(w,H,S),q=t(29439),E=t(24351),O=t.p+"static/media/flower.3935cb409b691e665a62.png",Q=t.p+"static/media/plume.dfe96a7d783b607d8fbb.png",D=t.p+"static/media/sands.1b88a469fa7dfeeb862b.png",Z=t.p+"static/media/goblet.c364d1e377e0cbdc8e81.png",k=t.p+"static/media/circlet.63236f78fa046b2b8e57.png",B={flower:O,plume:Q,sands:D,goblet:Z,circlet:k},P=B,V="ArchaicPetra",T=(0,c.i)(V,P),W=(0,n.dW)("artifact",V),F=(0,q.Z)(W,2),M=F[1],R=(0,i.ew)(d.qH.artSet.ArchaicPetra,2,(0,i.aQ)(.15)),j=(0,n.wV)(V,"element"),z=(0,q.Z)(j,2),A=z[0],C=z[1],N=Object.fromEntries(E.gs.map((function(e){return["".concat(e,"_dmg_"),(0,i.ew)(d.qH.artSet.ArchaicPetra,4,(0,i.Dg)(e,C,(0,i.aQ)(.35)))]}))),G=o(V,{premod:{geo_dmg_:R},teamBuff:{premod:N}}),x={name:"Archaic Petra",rarity:[4,5],icons:P,setEffects:{2:{document:[{header:T(2),fields:[{node:R}]}]},4:{document:[{header:T(4),path:A,value:C,teamBuff:!0,name:M("condName"),states:Object.fromEntries(E.gs.map((function(e){return[e,{name:(0,n.el)("element.".concat(e)),fields:[{node:N["".concat(e,"_dmg_")]},{text:(0,n.el)("duration"),value:10,unit:"s"}]}]})))}]}}},L=new c.y(V,x,G),U=t(79406),I=t.p+"static/media/flower.c02a7f41867926881297.png",K=t.p+"static/media/plume.837e8b5c617df06c1c43.png",J=t.p+"static/media/sands.c219ad2b503235b58256.png",X=t.p+"static/media/goblet.b675a75ce4e2971e9183.png",Y=t.p+"static/media/circlet.321a4496c33d3c61b4a9.png",$={flower:I,plume:K,sands:J,goblet:X,circlet:Y},ee=$,ae="Berserker",te=(0,c.i)(ae,ee),de=U.ZP.info("critRate_"),ie=(0,i.ew)(d.qH.artSet.Berserker,2,(0,i.aQ)(.12),de),ne=(0,n.wV)(ae,"hp"),ce=(0,q.Z)(ne,2),re=ce[0],se=ce[1],oe=(0,i.ew)(d.qH.artSet.Berserker,4,(0,i.Dg)("70",se,(0,i.aQ)(.24)),de),le=o(ae,{premod:{critRate_:(0,i.Sm)(ie,oe)}}),me={name:"Berserker",rarity:[3,4],icons:ee,setEffects:{2:{document:[{header:te(2),fields:[{node:ie}]}]},4:{document:[{header:te(4),path:re,value:se,teamBuff:!0,name:(0,n.st)("lessPercentHP",{percent:70}),states:{70:{fields:[{node:oe}]}}}]}}},fe=new c.y(ae,me,le),pe=t.p+"static/media/flower.dffc63728926aaebe4db.png",ge=t.p+"static/media/plume.04b35bc09a88ed9f672d.png",ue=t.p+"static/media/sands.0e6cd041d21ca92534f2.png",be=t.p+"static/media/goblet.f66cea5d34018229fa2b.png",we=t.p+"static/media/circlet.71ed366e5f38ede537eb.png",he={flower:pe,plume:ge,sands:ue,goblet:be,circlet:we},ye=he,_e="BlizzardStrayer",Se=(0,c.i)(_e,ye),He=(0,n.dW)("artifact",_e),ve=(0,q.Z)(He,2),qe=ve[1],Ee=(0,n.wV)(_e,"state"),Oe=(0,q.Z)(Ee,2),Qe=Oe[0],De=Oe[1],Ze=(0,i.ew)(d.qH.artSet.BlizzardStrayer,2,(0,i.aQ)(.15)),ke=(0,i.ew)(d.qH.artSet.BlizzardStrayer,4,(0,i.P5)(De,{cryo:(0,i.aQ)(.2),frozen:(0,i.aQ)(.4)},i.zv)),Be=o(_e,{premod:{cryo_dmg_:Ze},total:{critRate_:ke}}),Pe={name:"Blizzard Strayer",rarity:[4,5],icons:ye,setEffects:{2:{document:[{header:Se(2),fields:[{node:Ze}]}]},4:{document:[{header:Se(4),value:De,path:Qe,name:qe("condName"),states:{cryo:{name:qe("condCryo"),fields:[{node:ke}]},frozen:{name:qe("condFrozen"),fields:[{node:ke}]}}}]}}},Ve=new c.y(_e,Pe,Be),Te=t.p+"static/media/flower.90eb2f3070b6327d5921.png",We=t.p+"static/media/plume.84ca5601a84867d3249f.png",Fe=t.p+"static/media/sands.5788c8a2e24bfec10a95.png",Me=t.p+"static/media/goblet.46036e69cfbf99c331cc.png",Re=t.p+"static/media/circlet.c740e3ae09695ccd77dc.png",je={flower:Te,plume:We,sands:Fe,goblet:Me,circlet:Re},ze=je,Ae="BloodstainedChivalry",Ce=(0,c.i)(Ae,ze),Ne=(0,i.ew)(d.qH.artSet.BloodstainedChivalry,2,(0,i.aQ)(.25)),Ge=(0,n.wV)(Ae,"defeat"),xe=(0,q.Z)(Ge,2),Le=xe[0],Ue=xe[1],Ie=(0,i.ew)(d.qH.artSet.BloodstainedChivalry,4,(0,i.Dg)("hit",Ue,(0,i.aQ)(.5))),Ke=(0,i.ew)(d.qH.artSet.BloodstainedChivalry,4,(0,i.Dg)("hit",Ue,(0,i.aQ)(1))),Je=o(Ae,{premod:{physical_dmg_:Ne,charged_dmg_:Ie,staminaDec_:Ke}}),Xe={name:"Bloodstained Chivalry",rarity:[4,5],icons:ze,setEffects:{2:{document:[{header:Ce(2),fields:[{node:Ne}]}]},4:{document:[{header:Ce(4),path:Le,value:Ue,name:(0,n.st)("afterDefeatEnemy",{percent:70}),states:{hit:{fields:[{node:Ie},{node:Ke}]}}}]}}},Ye=new c.y(Ae,Xe,Je),$e=t.p+"static/media/flower.5da683e24e8226ef88f5.png",ea=t.p+"static/media/plume.0c39b54c3e6a69eef589.png",aa=t.p+"static/media/sands.28297dd9316d585b3a95.png",ta=t.p+"static/media/goblet.70b13ba4cb3075f3ab3c.png",da=t.p+"static/media/circlet.5c8eefdeac6f1c4c990d.png",ia={flower:$e,plume:ea,sands:aa,goblet:ta,circlet:da},na=ia,ca="BraveHeart",ra=(0,c.i)(ca,na),sa=(0,i.ew)(d.qH.artSet.BraveHeart,2,(0,i.aQ)(.18)),oa=(0,n.wV)(ca,"hp"),la=(0,q.Z)(oa,2),ma=la[0],fa=la[1],pa=(0,i.ew)(d.qH.artSet.BraveHeart,4,(0,i.Dg)("50",fa,(0,i.aQ)(.3))),ga=o(ca,{premod:{atk_:sa,all_dmg_:pa}}),ua={name:"Brave Heart",rarity:[3,4],icons:na,setEffects:{2:{document:[{header:ra(2),fields:[{node:sa}]}]},4:{document:[{header:ra(4),path:ma,value:fa,name:(0,n.st)("enemyGreaterPercentHP",{percent:50}),states:{50:{fields:[{node:pa}]}}}]}}},ba=new c.y(ca,ua,ga),wa=t(1413),ha=t(60393),ya=t.p+"static/media/flower.a3625cd2e9c91099ac2d.png",_a=t.p+"static/media/plume.008da8ad916afab8d383.png",Sa=t.p+"static/media/sands.8c19d6aa9ce046195b2c.png",Ha=t.p+"static/media/goblet.caecf2334a582ec8bfd6.png",va=t.p+"static/media/circlet.a52fe56212583f937cfb.png",qa={flower:ya,plume:_a,sands:Sa,goblet:Ha,circlet:va},Ea=qa,Oa="CrimsonWitchOfFlames",Qa=(0,c.i)(Oa,Ea),Da=(0,n.wV)(Oa,"stack"),Za=(0,q.Z)(Da,2),ka=Za[0],Ba=Za[1],Pa=U.ZP.info("pyro_dmg_"),Va=(0,i.ew)(d.qH.artSet.CrimsonWitchOfFlames,2,(0,i.aQ)(.15),Pa),Ta=(0,i.ew)(d.qH.artSet.CrimsonWitchOfFlames,4,(0,i.aQ)(.4)),Wa=(0,wa.Z)({},Ta),Fa=(0,wa.Z)({},Ta),Ma=(0,i.ew)(d.qH.artSet.CrimsonWitchOfFlames,4,(0,i.aQ)(.15)),Ra=(0,wa.Z)({},Ma),ja=(0,ha.w6)(1,3),za=(0,i.ew)(d.qH.artSet.CrimsonWitchOfFlames,4,(0,i.P5)(Ba,Object.fromEntries(ja.map((function(e){return[e,(0,i.aQ)(.15*e/2)]}))),i.zv),Pa),Aa=o(Oa,{premod:{pyro_dmg_:(0,i.Sm)(Va,za),overloaded_dmg_:Ta,burning_dmg_:Wa,vaporize_dmg_:Ma,melt_dmg_:Ra,burgeon_dmg_:Fa}}),Ca={name:"Crimson Witch of Flames",rarity:[4,5],icons:Ea,setEffects:{2:{document:[{header:Qa(2),fields:[{node:Va}]}]},4:{document:[{header:Qa(4),fields:[{node:Ta},{node:Wa},{node:Fa},{node:Ma},{node:Ra}]},{header:Qa(4),value:Ba,path:ka,name:(0,n.st)("afterUse.skill"),states:Object.fromEntries(ja.map((function(e){return[e,{name:(0,n.st)("stack",{count:e}),fields:[{node:za}]}]})))}]}}},Na=new c.y(Oa,Ca,Aa),Ga=t.p+"static/media/flower.45731fb70a768f7ec000.png",xa=t.p+"static/media/plume.47509ac48b5160756e99.png",La=t.p+"static/media/sands.f74700147addaecb2a9d.png",Ua=t.p+"static/media/goblet.f9b376aa9e6c2b193d1b.png",Ia=t.p+"static/media/circlet.06b9e7b77870360769ac.png",Ka={flower:Ga,plume:xa,sands:La,goblet:Ua,circlet:Ia},Ja=Ka,Xa="DeepwoodMemories",Ya=(0,c.i)(Xa,Ja),$a=(0,i.ew)(d.qH.artSet.DeepwoodMemories,2,.15),et=(0,n.wV)(Xa,"set4"),at=(0,q.Z)(et,2),tt=at[0],dt=at[1],it=(0,i.ew)(d.qH.artSet.DeepwoodMemories,4,(0,i.Dg)(dt,"on",-.3)),nt=o(Xa,{premod:{dendro_dmg_:$a},teamBuff:{premod:{dendro_enemyRes_:it}}}),ct={name:"Deepwood memories",rarity:[4,5],icons:Ja,setEffects:{2:{document:[{header:Ya(2),fields:[{node:$a}]}]},4:{document:[{header:Ya(4),path:tt,value:dt,teamBuff:!0,name:(0,n.st)("hitOp.skillOrBurst"),states:{on:{fields:[{node:it},{text:(0,n.el)("duration"),value:8,unit:"s"}]}}}]}}},rt=new c.y(Xa,ct,nt),st=t.p+"static/media/flower.2d8b1432541bd3828f24.png",ot=t.p+"static/media/plume.18f68f601e7b8698bd05.png",lt=t.p+"static/media/sands.5e681ad5b6bc01df83ee.png",mt=t.p+"static/media/goblet.30393864f5fe1b1ae8e9.png",ft=t.p+"static/media/circlet.4d8c371c64fe4f4fa3b3.png",pt={flower:st,plume:ot,sands:lt,goblet:mt,circlet:ft},gt=pt,ut="DefendersWill",bt=(0,c.i)(ut,gt),wt=(0,i.ew)(d.qH.artSet.DefendersWill,2,(0,i.aQ)(.3)),ht=(0,ha.Uq)(E.N,(function(e){return["".concat(e,"_res_"),(0,i.ew)(d.qH.artSet.DefendersWill,4,(0,i.ew)(d.uK[e],1,(0,i.aQ)(.3)))]})),yt=o(ut,{premod:(0,wa.Z)({def_:wt},ht)}),_t={name:"Defender's Will",rarity:[3,4],icons:gt,setEffects:{2:{document:[{header:bt(2),fields:[{node:wt}]}]},4:{document:[{header:bt(4),fields:Object.values(ht).map((function(e){return{node:e}}))}]}}},St=new c.y(ut,_t,yt),Ht=t.p+"static/media/flower.c0e774f97da561ab466d.png",vt=t.p+"static/media/plume.aff63e48387d1b5e5ba4.png",qt=t.p+"static/media/sands.7346de95a637c2863ee3.png",Et=t.p+"static/media/goblet.30d0dee627d9902ce3d3.png",Ot=t.p+"static/media/circlet.0c1abc60c2ec7027b312.png",Qt={flower:Ht,plume:vt,sands:qt,goblet:Et,circlet:Ot},Dt=Qt,Zt="EchoesOfAnOffering",kt=(0,c.i)(Zt,Dt),Bt=(0,n.dW)("artifact",Zt),Pt=(0,q.Z)(Bt,2),Vt=Pt[1],Tt=(0,i.ew)(d.qH.artSet.EchoesOfAnOffering,2,(0,i.aQ)(.18)),Wt=(0,n.wV)(Zt,"mode"),Ft=(0,q.Z)(Wt,2),Mt=Ft[0],Rt=Ft[1],jt=(0,i.ew)(d.qH.artSet.EchoesOfAnOffering,4,(0,i.WV)((0,i.P5)(Rt,{on:(0,i.aQ)(.7),avg:(0,i.aQ)(.351428)},i.zv),d.qH.total.atk)),zt=o(Zt,{premod:{atk_:Tt,normal_dmgInc:jt}}),At={name:"Echoes of an Offering",rarity:[4,5],icons:Dt,setEffects:{2:{document:[{header:kt(2),fields:[{node:Tt}]}]},4:{document:[{header:kt(4),value:Rt,path:Mt,name:Vt("mode"),states:{on:{name:Vt("always"),fields:[{node:jt}]},avg:{name:Vt("avg"),fields:[{node:jt}]}}}]}}},Ct=new c.y(Zt,At,zt),Nt=t.p+"static/media/flower.03a26b708732d2a0c6aa.png",Gt=t.p+"static/media/plume.f8998212ff0b54c0df8d.png",xt=t.p+"static/media/sands.c0e7d7a5b229cdc23a79.png",Lt=t.p+"static/media/goblet.14a77065c8990a6e5d0a.png",Ut=t.p+"static/media/circlet.e8fcadf0cd4a2c2294ee.png",It={flower:Nt,plume:Gt,sands:xt,goblet:Lt,circlet:Ut},Kt=It,Jt="EmblemOfSeveredFate",Xt=(0,c.i)(Jt,Kt),Yt=(0,i.ew)(d.qH.artSet.EmblemOfSeveredFate,2,(0,i.aQ)(.2)),$t=(0,i.ew)(d.qH.artSet.EmblemOfSeveredFate,4,(0,i.VV)((0,i.aQ)(.75),(0,i.WV)((0,i.aQ)(.25),d.qH.premod.enerRech_))),ed=o(Jt,{premod:{enerRech_:Yt,burst_dmg_:$t}},{burstBonus:$t}),ad={name:"Emblem of Severed Fate",rarity:[4,5],icons:Kt,setEffects:{2:{document:[{header:Xt(2),fields:[{node:Yt}]}]},4:{document:[{header:Xt(4),fields:[{node:$t}]}]}}},td=new c.y(Jt,ad,ed),dd=t.p+"static/media/flower.67868a25d80366282552.png",id=t.p+"static/media/plume.3de87c176b007ac2ca49.png",nd=t.p+"static/media/sands.1348742f52871e96257c.png",cd=t.p+"static/media/goblet.2fec87dd1ca96fbafe11.png",rd=t.p+"static/media/circlet.7ffbbe36d40f2774ea05.png",sd={flower:dd,plume:id,sands:nd,goblet:cd,circlet:rd},od=sd,ld="Gambler",md=(0,c.i)(ld,od),fd=(0,i.ew)(d.qH.artSet.Gambler,2,(0,i.aQ)(.2)),pd=o(ld,{premod:{skill_dmg_:fd}}),gd={name:"Gambler",rarity:[3,4],icons:od,setEffects:{2:{document:[{header:md(2),fields:[{node:fd}]}]},4:{document:[{header:md(4),fields:[]}]}}},ud=new c.y(ld,gd,pd),bd=t(93433),wd=t.p+"static/media/flower.ad6523f4f456eebb109e.png",hd=t.p+"static/media/plume.a57150a501633c39bc24.png",yd=t.p+"static/media/sands.fe443054065b9285a27d.png",_d=t.p+"static/media/goblet.22c4e418241a440ac19f.png",Sd=t.p+"static/media/circlet.eb19831021291a2e7497.png",Hd={flower:wd,plume:hd,sands:yd,goblet:_d,circlet:Sd},vd=Hd,qd="GildedDreams",Ed=(0,c.i)(qd,vd),Od=(0,i.ew)(d.qH.artSet.GildedDreams,2,80,U.ZP.info("eleMas")),Qd=(0,n.wV)(qd,"passive"),Dd=(0,q.Z)(Qd,2),Zd=Dd[0],kd=Dd[1],Bd=(0,i.ew)(d.qH.artSet.GildedDreams,4,(0,i.Dg)(kd,"on",(0,i.P5)(d.qH.charEle,Object.fromEntries(E.N.map((function(e){return[e,(0,i.ew)(d.uK[e],2,(0,i.WV)((0,i.Sm)(d.uK[e],-1),(0,i.aQ)(.14)))]}))),i.zv))),Pd=i.Sm.apply(void 0,(0,bd.Z)(E.N.map((function(e){return(0,i.ew)(d.uK[e],1,(0,i.KP)(e,d.qH.charEle,d.uK[e]))})))),Vd=(0,i.ew)(d.qH.artSet.GildedDreams,4,(0,i.Dg)(kd,"on",(0,i.ew)(Pd,1,(0,i.WV)(Pd,50)),U.ZP.info("eleMas"))),Td=o(qd,{premod:{eleMas:(0,i.Sm)(Od,Vd),atk_:Bd}}),Wd={name:"Gilded Dreams",rarity:[4,5],icons:vd,setEffects:{2:{document:[{header:Ed(2),fields:[{node:Od}]}]},4:{document:[{header:Ed(4),path:Zd,value:kd,name:(0,n.st)("afterReaction"),states:{on:{fields:[{node:Bd},{node:Vd},{canShow:function(e){return!e.get(Bd).isEmpty||!e.get(Vd).isEmpty},text:(0,n.el)("duration"),value:8,unit:"s"},{canShow:function(e){return!e.get(Bd).isEmpty||!e.get(Vd).isEmpty},text:(0,n.el)("cd"),value:8,unit:"s"}]}}}]}}},Fd=new c.y(qd,Wd,Td),Md=t.p+"static/media/flower.4d301fa4da3297eca5eb.png",Rd=t.p+"static/media/plume.28d795936ba2273f3921.png",jd=t.p+"static/media/sands.2342578311f5e8ac9d92.png",zd=t.p+"static/media/goblet.9daedb67928bcf3d51f7.png",Ad=t.p+"static/media/circlet.e804bb32c68fc098cc2b.png",Cd={flower:Md,plume:Rd,sands:jd,goblet:zd,circlet:Ad},Nd=Cd,Gd="GladiatorsFinale",xd=(0,c.i)(Gd,Nd),Ld=(0,i.ew)(d.qH.artSet.GladiatorsFinale,2,(0,i.aQ)(.18)),Ud=(0,i.ew)(d.qH.artSet.GladiatorsFinale,4,(0,i.P5)(d.qH.weaponType,{sword:(0,i.aQ)(.35),polearm:(0,i.aQ)(.35),claymore:(0,i.aQ)(.35)},i.zv)),Id=o(Gd,{premod:{atk_:Ld,normal_dmg_:Ud}}),Kd={name:"Gladiator's Finale",rarity:[4,5],icons:Nd,setEffects:{2:{document:[{header:xd(2),fields:[{node:Ld}]}]},4:{document:[{header:xd(4),fields:[{node:Ud}]}]}}},Jd=new c.y(Gd,Kd,Id),Xd=t.p+"static/media/flower.419ba3d2999ed99a2619.png",Yd=t.p+"static/media/plume.c85a190843ba93b9543a.png",$d=t.p+"static/media/sands.347924be76887281f27a.png",ei=t.p+"static/media/goblet.505b3b750fdf66cbd487.png",ai=t.p+"static/media/circlet.b57425563385178a3497.png",ti={flower:Xd,plume:Yd,sands:$d,goblet:ei,circlet:ai},di=ti,ii="HeartOfDepth",ni=(0,c.i)(ii,di),ci=(0,i.ew)(d.qH.artSet.HeartOfDepth,2,(0,i.aQ)(.15)),ri=(0,n.wV)(ii,"skill"),si=(0,q.Z)(ri,2),oi=si[0],li=si[1],mi=(0,i.ew)(d.qH.artSet.HeartOfDepth,4,(0,i.Dg)("cast",li,(0,i.aQ)(.3))),fi=(0,wa.Z)({},mi),pi=o(ii,{premod:{hydro_dmg_:ci,normal_dmg_:mi,charged_dmg_:fi}}),gi={name:"Heart of Depth",rarity:[4,5],icons:di,setEffects:{2:{document:[{header:ni(2),fields:[{node:ci}]}]},4:{document:[{header:ni(4),path:oi,value:li,name:(0,n.st)("afterUse.skill"),states:{cast:{fields:[{node:mi},{node:fi}]}}}]}}},ui=new c.y(ii,gi,pi),bi=t.p+"static/media/flower.365e79265baffd70e925.png",wi=t.p+"static/media/plume.047e45476bdc150c6ffc.png",hi=t.p+"static/media/sands.e3e551179cd5ff3e03dd.png",yi=t.p+"static/media/goblet.baf4ef32ff4172610e68.png",_i=t.p+"static/media/circlet.3bc8882e55c510e599b8.png",Si={flower:bi,plume:wi,sands:hi,goblet:yi,circlet:_i},Hi=Si,vi="HuskOfOpulentDreams",qi=(0,c.i)(vi,Hi),Ei=(0,n.dW)("artifact",vi),Oi=(0,q.Z)(Ei,2),Qi=Oi[1],Di=(0,n.wV)(vi,"stack"),Zi=(0,q.Z)(Di,2),ki=Zi[0],Bi=Zi[1],Pi=U.ZP.info("def_"),Vi=(0,i.ew)(d.qH.artSet.HuskOfOpulentDreams,2,(0,i.aQ)(.3),Pi),Ti=(0,ha.w6)(1,4),Wi=(0,i.ew)(d.qH.artSet.HuskOfOpulentDreams,4,(0,i.P5)(Bi,Object.fromEntries(Ti.map((function(e){return[e,(0,i.aQ)(.06*e)]}))),i.zv),Pi),Fi=(0,i.ew)(d.qH.artSet.HuskOfOpulentDreams,4,(0,i.P5)(Bi,Object.fromEntries(Ti.map((function(e){return[e,(0,i.aQ)(.06*e)]}))),i.zv)),Mi=o(vi,{premod:{def_:(0,i.Sm)(Vi,Wi),geo_dmg_:Fi}}),Ri={name:"Husk of Opulent Dreams",rarity:[4,5],icons:Hi,setEffects:{2:{document:[{header:qi(2),fields:[{node:Vi}]}]},4:{document:[{header:qi(4),value:Bi,path:ki,teamBuff:!0,name:Qi("condName"),states:Object.fromEntries(Ti.map((function(e){return[e,{name:(0,n.st)("stack",{count:e}),fields:[{node:Wi},{node:Fi}]}]})))}]}}},ji=new c.y(vi,Ri,Mi),zi=t.p+"static/media/flower.32295b79fe061ab0352b.png",Ai=t.p+"static/media/plume.2287fd8c7cabb6dd85ff.png",Ci=t.p+"static/media/sands.e464f3ca5b14866768d1.png",Ni=t.p+"static/media/goblet.642a9dcdadbbea0dc510.png",Gi=t.p+"static/media/circlet.7bb78835fe0642e86e5c.png",xi={flower:zi,plume:Ai,sands:Ci,goblet:Ni,circlet:Gi},Li=xi,Ui="Instructor",Ii=(0,c.i)(Ui,Li),Ki=(0,n.dW)("artifact",Ui),Ji=(0,q.Z)(Ki,2),Xi=Ji[1],Yi=(0,n.wV)(Ui,"set4"),$i=(0,q.Z)(Yi,2),en=$i[0],an=$i[1],tn=(0,i.ew)(d.qH.artSet.Instructor,2,80),dn=(0,i.ew)(d.qH.artSet.Instructor,4,(0,i.Dg)("on",an,120)),nn=o(Ui,{premod:{eleMas:tn},teamBuff:{premod:{eleMas:dn}}}),cn={name:"Instructor",rarity:[3,4],icons:Li,setEffects:{2:{document:[{header:Ii(2),fields:[{node:tn}]}]},4:{document:[{header:Ii(4),teamBuff:!0,value:an,path:en,name:Xi("condName"),states:{on:{fields:[{node:dn},{text:(0,n.el)("duration"),value:8,unit:"s"}]}}}]}}},rn=new c.y(Ui,cn,nn),sn=t.p+"static/media/flower.c08f07ea61cf09dd1279.png",on=t.p+"static/media/plume.a281f44e674bd37e2167.png",ln=t.p+"static/media/sands.fc044fc23ce6e4132d1e.png",mn=t.p+"static/media/goblet.a7bc326b82d46a73d9c5.png",fn=t.p+"static/media/circlet.79ab8b5858ba30efb988.png",pn={flower:sn,plume:on,sands:ln,goblet:mn,circlet:fn},gn=pn,un="Lavawalker",bn=(0,c.i)(un,gn),wn=(0,n.dW)("artifact",un),hn=(0,q.Z)(wn,2),yn=hn[1],_n=(0,n.wV)(un,"state"),Sn=(0,q.Z)(_n,2),Hn=Sn[0],vn=Sn[1],qn=(0,i.ew)(d.qH.artSet.Lavawalker,2,(0,i.aQ)(.4)),En=(0,i.ew)(d.qH.artSet.Lavawalker,4,(0,i.Dg)("on",vn,(0,i.aQ)(.35))),On=o(un,{premod:{pyro_res_:qn,all_dmg_:En}}),Qn={name:"Lavawalker",rarity:[4,5],icons:gn,setEffects:{2:{document:[{header:bn(2),fields:[{node:qn}]}]},4:{document:[{header:bn(4),value:vn,path:Hn,name:yn("condName"),states:{on:{fields:[{node:En}]}}}]}}},Dn=new c.y(un,Qn,On),Zn=t.p+"static/media/flower.dacbeacd6ebe5f6af06c.png",kn=t.p+"static/media/plume.998d1a5c64f24ba1071a.png",Bn=t.p+"static/media/sands.c5e3e0f200ae2297e518.png",Pn=t.p+"static/media/goblet.5c49d774d49376db2d5f.png",Vn=t.p+"static/media/circlet.73e2a8af664f70572818.png",Tn={flower:Zn,plume:kn,sands:Bn,goblet:Pn,circlet:Vn},Wn=Tn,Fn="LuckyDog",Mn=(0,c.i)(Fn,Wn),Rn=(0,i.ew)(d.qH.artSet.LuckyDog,2,100),jn=(0,i.ew)(d.qH.artSet.LuckyDog,4,300),zn=o(Fn,{premod:{def:Rn}},{heal:jn}),An={name:"Lucky Dog",rarity:[3],icons:Wn,setEffects:{2:{document:[{header:Mn(2),fields:[{node:Rn}]}]},4:{document:[{header:Mn(4),fields:[{node:(0,i.ce)(jn,{name:(0,n.el)("healing"),variant:"heal"})}]}]}}},Cn=new c.y(Fn,An,zn),Nn=t.p+"static/media/flower.058025e1d5a16a0fe228.png",Gn=t.p+"static/media/plume.23241860545d6bbf9469.png",xn=t.p+"static/media/sands.2dbd4e8b631e7c935fc0.png",Ln=t.p+"static/media/goblet.5f1961eb122ff268369d.png",Un=t.p+"static/media/circlet.152b3753ecae99836794.png",In={flower:Nn,plume:Gn,sands:xn,goblet:Ln,circlet:Un},Kn=In,Jn="MaidenBeloved",Xn=(0,c.i)(Jn,Kn),Yn=(0,n.wV)(Jn,"state"),$n=(0,q.Z)(Yn,2),ec=$n[0],ac=$n[1],tc=(0,i.ew)(d.qH.artSet.MaidenBeloved,2,(0,i.aQ)(.15)),dc=(0,i.ew)(d.qH.artSet.MaidenBeloved,4,(0,i.Dg)("on",ac,(0,i.aQ)(.2))),ic=o(Jn,{premod:{heal_:tc},teamBuff:{premod:{incHeal_:dc}}}),nc={name:"Maiden Beloved",rarity:[4,5],icons:Kn,setEffects:{2:{document:[{header:Xn(2),fields:[{node:tc}]}]},4:{document:[{header:Xn(4),teamBuff:!0,value:ac,path:ec,name:(0,n.st)("afterUse.skillOrBurst"),states:{on:{fields:[{node:dc}]}}}]}}},cc=new c.y(Jn,nc,ic),rc=t.p+"static/media/flower.7e7971aef49e5b44e0df.png",sc=t.p+"static/media/plume.01b8c08ca41a0f5d5f42.png",oc=t.p+"static/media/sands.0f9e04b613d218b758cf.png",lc=t.p+"static/media/goblet.c4144e0b02851d90137c.png",mc=t.p+"static/media/circlet.aa6b6b4e4b4a4556d2d6.png",fc={flower:rc,plume:sc,sands:oc,goblet:lc,circlet:mc},pc=fc,gc="MartialArtist",uc=(0,c.i)(gc,pc),bc=(0,n.wV)(gc,"state"),wc=(0,q.Z)(bc,2),hc=wc[0],yc=wc[1],_c=(0,i.ew)(d.qH.artSet.MartialArtist,2,(0,i.aQ)(.15),U.ZP.info("normal_dmg_")),Sc=(0,i.ew)(d.qH.artSet.MartialArtist,2,(0,i.aQ)(.15),U.ZP.info("charged_dmg_")),Hc=(0,i.ew)(d.qH.artSet.MartialArtist,4,(0,i.Dg)("on",yc,(0,i.aQ)(.25),U.ZP.info("normal_dmg_"))),vc=(0,i.ew)(d.qH.artSet.MartialArtist,4,(0,i.Dg)("on",yc,(0,i.aQ)(.25),U.ZP.info("charged_dmg_"))),qc=o(gc,{premod:{normal_dmg_:(0,i.Sm)(_c,Hc),charged_dmg_:(0,i.Sm)(Sc,vc)}}),Ec={name:"Martial Artist",rarity:[3,4],icons:pc,setEffects:{2:{document:[{header:uc(2),fields:[{node:_c},{node:Sc}]}]},4:{document:[{header:uc(4),value:yc,path:hc,name:(0,n.st)("afterUse.skill"),states:{on:{fields:[{node:Hc},{node:vc},{text:(0,n.el)("duration"),value:8,unit:"s"}]}}}]}}},Oc=new c.y(gc,Ec,qc),Qc=t.p+"static/media/flower.0c959d66242c77eef547.png",Dc=t.p+"static/media/plume.859357f9c2f3c90900e8.png",Zc=t.p+"static/media/sands.f177f0e04b5c6d56f0fc.png",kc=t.p+"static/media/goblet.b26967857207116bd460.png",Bc=t.p+"static/media/circlet.171108c7cee531d45031.png",Pc={flower:Qc,plume:Dc,sands:Zc,goblet:kc,circlet:Bc},Vc=Pc,Tc="NoblesseOblige",Wc=(0,c.i)(Tc,Vc),Fc=(0,i.ew)(d.qH.artSet.NoblesseOblige,2,(0,i.aQ)(.2)),Mc=(0,n.wV)(Tc,"set4"),Rc=(0,q.Z)(Mc,2),jc=Rc[0],zc=Rc[1],Ac=(0,i.ew)(d.qH.artSet.NoblesseOblige,4,(0,i.Dg)(zc,"on",(0,i.aQ)(.2))),Cc=o(Tc,{premod:{burst_dmg_:Fc},teamBuff:{premod:{atk_:Ac}}}),Nc={name:"Noblesse Oblige",rarity:[4,5],icons:Vc,setEffects:{2:{document:[{header:Wc(2),fields:[{node:Fc}]}]},4:{document:[{header:Wc(4),teamBuff:!0,value:zc,path:jc,name:(0,n.st)("afterUse.burst"),states:{on:{fields:[{node:Ac},{text:(0,n.el)("duration"),value:12,unit:"s"}]}}}]}}},Gc=new c.y(Tc,Nc,Cc),xc=t.p+"static/media/flower.20045a2d56c298405985.png",Lc=t.p+"static/media/plume.09db835ba05d181476ea.png",Uc=t.p+"static/media/sands.dcdf98b518ab8ce12f44.png",Ic=t.p+"static/media/goblet.c1b0745816812bd417f4.png",Kc=t.p+"static/media/circlet.9606eeb5c6d175dad2e4.png",Jc={flower:xc,plume:Lc,sands:Uc,goblet:Ic,circlet:Kc},Xc=Jc,Yc="OceanHuedClam",$c=(0,c.i)(Yc,Xc),er=(0,i.ew)(d.qH.artSet.OceanHuedClam,2,(0,i.aQ)(.15)),ar=(0,i.ew)(d.qH.artSet.OceanHuedClam,4,(0,i.WV)((0,i.WV)((0,i.aQ)(.9),3e4),d.qH.enemy.physical_resMulti)),tr=o(Yc,{premod:{heal_:er}},{heal:ar}),dr={name:"Ocean-Hued Clam",rarity:[4,5],icons:Xc,setEffects:{2:{document:[{header:$c(2),fields:[{node:er}]}]},4:{document:[{header:$c(4),fields:[{node:(0,i.ce)(ar,{name:c.y.trm(Yc)("condName"),variant:"physical"})}]}]}}},ir=new c.y(Yc,dr,tr),nr=t.p+"static/media/flower.ac5e46060aef6cd454ae.png",cr=t.p+"static/media/plume.091c7cbb735cb80a2110.png",rr=t.p+"static/media/sands.69f779cfc55342a5a0a0.png",sr=t.p+"static/media/goblet.303ab43d428dcc20feba.png",or=t.p+"static/media/circlet.b88ea7e68914f9cdbfee.png",lr={flower:nr,plume:cr,sands:rr,goblet:sr,circlet:or},mr=lr,fr="PaleFlame",pr=(0,c.i)(fr,mr),gr=(0,n.wV)(fr,"stacks"),ur=(0,q.Z)(gr,2),br=ur[0],wr=ur[1],hr=U.ZP.info("physical_dmg_"),yr=(0,i.ew)(d.qH.artSet.PaleFlame,2,(0,i.aQ)(.25),hr),_r=(0,ha.w6)(1,2),Sr=(0,i.ew)(d.qH.artSet.PaleFlame,4,(0,i.P5)(wr,Object.fromEntries(_r.map((function(e){return[e,(0,i.aQ)(.09*e)]}))),i.zv)),Hr=(0,i.ew)(d.qH.artSet.PaleFlame,4,(0,i.P5)(wr,Object.fromEntries(_r.map((function(e){return[e,(0,i.Dg)(e,2,(0,i.aQ)(.25))]}))),i.zv),hr),vr=o(fr,{premod:{physical_dmg_:(0,i.Sm)(yr,Hr),atk_:Sr}}),qr={name:"Pale Flame",rarity:[4,5],icons:mr,setEffects:{2:{document:[{header:pr(2),fields:[{node:yr}]}]},4:{document:[{header:pr(4),value:wr,path:br,teamBuff:!0,name:(0,n.st)("hitOp.skill"),states:Object.fromEntries(_r.map((function(e){return[e,{name:e.toString(),fields:[{node:Sr},{node:Hr},{text:(0,n.el)("duration"),value:7,unit:"s"}]}]})))}]}}},Er=new c.y(fr,qr,vr),Or=t.p+"static/media/circlet.7ec1ab0e29e8e61d04ae.png",Qr={circlet:Or},Dr=Qr,Zr="PrayersForDestiny",kr=(0,c.i)(Zr,Dr),Br=o(Zr),Pr={name:"Prayers for Destiny",rarity:[3,4],icons:Dr,setEffects:{1:{document:[{header:kr(1),fields:[]}]}}},Vr=new c.y(Zr,Pr,Br),Tr=t.p+"static/media/circlet.3f9693f6ec135c1d0dc3.png",Wr={circlet:Tr},Fr=Wr,Mr="PrayersForIllumination",Rr=(0,c.i)(Mr,Fr),jr=o(Mr),zr={name:"Prayers for Illumination",rarity:[3,4],icons:Fr,setEffects:{1:{document:[{header:Rr(1),fields:[]}]}}},Ar=new c.y(Mr,zr,jr),Cr=t.p+"static/media/circlet.a37db9b6139977910a0a.png",Nr={circlet:Cr},Gr=Nr,xr="PrayersForWisdom",Lr=(0,c.i)(xr,Gr),Ur=o(xr),Ir={name:"Prayers for Wisdom",rarity:[3,4],icons:Gr,setEffects:{1:{document:[{header:Lr(1),fields:[]}]}}},Kr=new c.y(xr,Ir,Ur),Jr=t.p+"static/media/circlet.34e39f734f3222ef64b5.png",Xr={circlet:Jr},Yr=Xr,$r="PrayersToSpringtime",es=(0,c.i)($r,Yr),as=o($r),ts={name:"Prayers to Springtime",rarity:[3,4],icons:Yr,setEffects:{1:{document:[{header:es(1),fields:[]}]}}},ds=new c.y($r,ts,as),is=t.p+"static/media/flower.122f7227610444fe29a5.png",ns=t.p+"static/media/plume.16061333ef326007220f.png",cs=t.p+"static/media/sands.9e609a84d30bb1a6c532.png",rs=t.p+"static/media/goblet.76feb2c074d7af207c8d.png",ss=t.p+"static/media/circlet.2a0ed1d7ce51424eb1f7.png",os={flower:is,plume:ns,sands:cs,goblet:rs,circlet:ss},ls=os,ms="ResolutionOfSojourner",fs=(0,c.i)(ms,ls),ps=(0,i.ew)(d.qH.artSet.ResolutionOfSojourner,2,(0,i.aQ)(.18)),gs=(0,i.ew)(d.qH.artSet.ResolutionOfSojourner,4,(0,i.aQ)(.3)),us=o(ms,{premod:{atk_:ps,charged_critRate_:gs}}),bs={name:"Resolution of Sojourner",rarity:[3,4],icons:ls,setEffects:{2:{document:[{header:fs(2),fields:[{node:ps}]}]},4:{document:[{header:fs(4),fields:[{node:gs}]}]}}},ws=new c.y(ms,bs,us),hs=t.p+"static/media/flower.3863936d985a358081eb.png",ys=t.p+"static/media/plume.d41085f8f69a311334c6.png",_s=t.p+"static/media/sands.88b53df6c7ca99b9087b.png",Ss=t.p+"static/media/goblet.ffe697eaba209e55f58f.png",Hs=t.p+"static/media/circlet.ceeef23bbfbbf992ae32.png",vs={flower:hs,plume:ys,sands:_s,goblet:Ss,circlet:Hs},qs=vs,Es="RetracingBolide",Os=(0,c.i)(Es,qs),Qs=(0,n.wV)(Es,"state"),Ds=(0,q.Z)(Qs,2),Zs=Ds[0],ks=Ds[1],Bs=(0,i.ew)(d.qH.artSet.RetracingBolide,2,(0,i.aQ)(.35)),Ps=(0,i.ew)(d.qH.artSet.RetracingBolide,4,(0,i.Dg)("on",ks,(0,i.aQ)(.4))),Vs=(0,i.ew)(d.qH.artSet.RetracingBolide,4,(0,i.Dg)("on",ks,(0,i.aQ)(.4))),Ts=o(Es,{premod:{shield_:Bs,normal_dmg_:Ps,charged_dmg_:Vs}}),Ws={name:"Retracing Bolide",rarity:[4,5],icons:qs,setEffects:{2:{document:[{header:Os(2),fields:[{node:Bs}]}]},4:{document:[{header:Os(4),value:ks,path:Zs,name:(0,n.st)("protectedByShield"),states:{on:{fields:[{node:Ps},{node:Vs}]}}}]}}},Fs=new c.y(Es,Ws,Ts),Ms=t.p+"static/media/flower.8f5e2124830716201f43.png",Rs=t.p+"static/media/plume.163ee156b6924f2469c9.png",js=t.p+"static/media/sands.8a43f4441f4da52c8582.png",zs=t.p+"static/media/goblet.0810b75259a7bf136ce2.png",As={flower:Ms,plume:Rs,sands:js,goblet:zs,circlet:t.p+"static/media/circlet.020ef2c6d1c2a565a5d1.png"},Cs="Scholar",Ns=(0,c.i)(Cs,As),Gs=(0,i.ew)(d.qH.artSet.Scholar,2,(0,i.aQ)(.2)),xs=o(Cs,{premod:{enerRech_:Gs}}),Ls={name:"Scholar",rarity:[3,4],icons:As,setEffects:{2:{document:[{header:Ns(2),fields:[{node:Gs}]}]},4:{document:[{header:Ns(4),fields:[]}]}}},Us=new c.y(Cs,Ls,xs),Is={flower:t.p+"static/media/flower.88c3e8556f074c757402.png",plume:t.p+"static/media/plume.bf0007603e63e825b3ca.png",sands:t.p+"static/media/sands.29f9e951d9b8c524bcb2.png",goblet:t.p+"static/media/goblet.19915595017d72afd8fb.png",circlet:t.p+"static/media/circlet.3b4914f643d04ec1c7f9.png"},Ks="ShimenawasReminiscence",Js=(0,c.i)(Ks,Is),Xs=(0,n.dW)("artifact",Ks),Ys=(0,q.Z)(Xs,2)[1],$s=(0,n.wV)(Ks,"usedEnergy"),eo=(0,q.Z)($s,2),ao=eo[0],to=eo[1],io=(0,i.ew)(d.qH.artSet.ShimenawasReminiscence,2,(0,i.aQ)(.18)),no=(0,i.ew)(d.qH.artSet.ShimenawasReminiscence,4,(0,i.Dg)("used",to,(0,i.aQ)(.5))),co=(0,wa.Z)({},no),ro=(0,wa.Z)({},no),so=o(Ks,{premod:{atk_:io,normal_dmg_:no,charged_dmg_:co,plunging_dmg_:ro}}),oo={name:"Shimenawa's Reminiscence",rarity:[4,5],icons:Is,setEffects:{2:{document:[{header:Js(2),fields:[{node:io}]}]},4:{document:[{header:Js(4),value:to,path:ao,name:Ys("afterUseEnergy"),states:{used:{fields:[{node:no},{node:co},{node:ro}]}}}]}}},lo=new c.y(Ks,oo,so),mo={flower:t.p+"static/media/flower.078154c1d47aeb8af037.png",plume:t.p+"static/media/plume.840c0deca773b3d5a62b.png",sands:t.p+"static/media/sands.51dcf1b2c689603e4a14.png",goblet:t.p+"static/media/goblet.e394c2248f7ab29f33b6.png",circlet:t.p+"static/media/circlet.8ea2b1ea7fbd539f780e.png"},fo="TenacityOfTheMillelith",po=(0,c.i)(fo,mo),go=(0,i.ew)(d.qH.artSet.TenacityOfTheMillelith,2,(0,i.aQ)(.2)),uo=(0,n.wV)(fo,"skill"),bo=(0,q.Z)(uo,2),wo=bo[0],ho=bo[1],yo=(0,i.ew)(d.qH.artSet.TenacityOfTheMillelith,4,(0,i.Dg)("cast",ho,(0,i.aQ)(.2))),_o=(0,i.ew)(d.qH.artSet.TenacityOfTheMillelith,4,(0,i.Dg)("cast",ho,(0,i.aQ)(.3))),So=o(fo,{premod:{hp_:go},teamBuff:{premod:{atk_:yo,shield_:_o}}}),Ho={name:"Tenacity of the Millelith",rarity:[4,5],icons:mo,setEffects:{2:{document:[{header:po(2),fields:[{node:go}]}]},4:{document:[{header:po(4),teamBuff:!0,path:wo,value:ho,name:(0,n.st)("hitOp.skill"),states:{cast:{fields:[{node:yo},{node:_o}]}}}]}}},vo=new c.y(fo,Ho,So),qo={flower:t.p+"static/media/flower.da223517f161ed5a4ca6.png",plume:t.p+"static/media/plume.dedfd1b681caeefefe22.png",sands:t.p+"static/media/sands.bf5f1423a29502fc5c77.png",goblet:t.p+"static/media/goblet.31afd370ce53c45d16ce.png",circlet:t.p+"static/media/circlet.792207465d50166effb2.png"},Eo="TheExile",Oo=(0,c.i)(Eo,qo),Qo=(0,i.ew)(d.qH.artSet.TheExile,2,(0,i.aQ)(.2)),Do=o(Eo,{premod:{enerRech_:Qo}}),Zo={name:"The Exile",rarity:[3,4],icons:qo,setEffects:{2:{document:[{header:Oo(2),fields:[{node:Qo}]}]},4:{document:[{header:Oo(4),fields:[]}]}}},ko=new c.y(Eo,Zo,Do),Bo={flower:t.p+"static/media/flower.67c8e44a954e09a45c1c.png",plume:t.p+"static/media/plume.89f96f71bddb1de4b838.png",sands:t.p+"static/media/sands.c8be6b5afd273c4bd8fa.png",goblet:t.p+"static/media/goblet.87b4ebb5f7884588974b.png",circlet:t.p+"static/media/circlet.d03509ba290f7082b3c1.png"},Po="ThunderingFury",Vo=(0,c.i)(Po,Bo),To=(0,i.ew)(d.qH.artSet.ThunderingFury,2,(0,i.aQ)(.15)),Wo=(0,i.ew)(d.qH.artSet.ThunderingFury,4,(0,i.aQ)(.4)),Fo=(0,wa.Z)({},Wo),Mo=(0,wa.Z)({},Wo),Ro=(0,wa.Z)({},Wo),jo=(0,i.ew)(d.qH.artSet.ThunderingFury,4,(0,i.aQ)(.2)),zo=o(Po,{premod:{electro_dmg_:To,overloaded_dmg_:Wo,electrocharged_dmg_:Fo,superconduct_dmg_:Mo,hyperbloom_dmg_:Ro,aggravate_dmg_:jo}}),Ao={name:"Thundering Fury",rarity:[4,5],icons:Bo,setEffects:{2:{document:[{header:Vo(2),fields:[{node:To}]}]},4:{document:[{header:Vo(4),fields:[{node:Wo},{node:Fo},{node:Mo},{node:Ro},{node:jo}]}]}}},Co=new c.y(Po,Ao,zo),No={flower:t.p+"static/media/flower.ac9747bfdc2a7edb2238.png",plume:t.p+"static/media/plume.956b6070a2051c91abde.png",sands:t.p+"static/media/sands.3e4cfcfae11bea767e5a.png",goblet:t.p+"static/media/goblet.cb5c813fe118976838df.png",circlet:t.p+"static/media/circlet.18651435d98f58c8c062.png"},Go="Thundersoother",xo=(0,c.i)(Go,No),Lo=(0,n.dW)("artifact",Go),Uo=(0,q.Z)(Lo,2)[1],Io=(0,n.wV)(Go,"state"),Ko=(0,q.Z)(Io,2),Jo=Ko[0],Xo=Ko[1],Yo=(0,i.ew)(d.qH.artSet.Thundersoother,2,(0,i.aQ)(.4)),$o=(0,i.ew)(d.qH.artSet.Thundersoother,4,(0,i.Dg)("on",Xo,(0,i.aQ)(.35))),el=o(Go,{premod:{electro_res_:Yo,all_dmg_:$o}}),al={name:"Thundersoother",rarity:[4,5],icons:No,setEffects:{2:{document:[{header:xo(2),fields:[{node:Yo}]}]},4:{document:[{header:xo(4),value:Xo,path:Jo,name:Uo("condName"),states:{on:{fields:[{node:$o}]}}}]}}},tl=new c.y(Go,al,el),dl=t(91702),il={flower:t.p+"static/media/flower.3f114b1eb6be29842460.png",plume:t.p+"static/media/plume.7ad465eb04ffb8f45fa9.png",sands:t.p+"static/media/sands.2c9ae52456e58842c357.png",goblet:t.p+"static/media/goblet.0454649570411abbef69.png",circlet:t.p+"static/media/circlet.8e9e1cdbf66b7997677e.png"},nl=t(80184),cl="TinyMiracle",rl=(0,c.i)(cl,il),sl=(0,n.dW)("artifact",cl),ol=(0,q.Z)(sl,2)[1],ll=(0,n.wV)(cl,"element"),ml=(0,q.Z)(ll,2),fl=ml[0],pl=ml[1],gl=Object.fromEntries(E.N.map((function(e){return[e,(0,i.ew)(d.qH.artSet.TinyMiracle,2,(0,i.aQ)(.2),U.ZP.info("".concat(e,"_res_")))]}))),ul=Object.fromEntries(E.N.map((function(e){return[e,(0,i.ew)(d.qH.artSet.TinyMiracle,4,(0,i.Dg)(pl,e,(0,i.aQ)(.3)),U.ZP.info("".concat(e,"_res_")))]}))),bl=o(cl,{premod:Object.fromEntries(E.N.map((function(e){return["".concat(e,"_res_"),(0,i.Sm)(gl[e],ul[e])]})))}),wl={name:"Tiny Miracle",rarity:[3,4],icons:il,setEffects:{2:{document:[{header:rl(2),fields:Object.values(gl).map((function(e){return{node:e}}))}]},4:{document:[{header:rl(4),path:fl,value:pl,teamBuff:!0,name:ol("condName"),states:Object.fromEntries(E.N.map((function(e){return[e,{name:(0,nl.jsx)(dl.Z,{color:e,children:(0,n.el)("element.".concat(e))}),fields:[].concat((0,bd.Z)(Object.values(ul).map((function(e){return{node:e}}))),[{text:(0,n.el)("duration"),value:10,unit:"s"}])}]})))}]}}},hl=new c.y(cl,wl,bl),yl={flower:t.p+"static/media/flower.0d2c0aaf5f281c0c96e6.png",plume:t.p+"static/media/plume.853d72d80ea8fc733e8c.png",sands:t.p+"static/media/sands.d41487516839400bef1b.png",goblet:t.p+"static/media/goblet.6d92a6ac97d0a092b696.png",circlet:t.p+"static/media/circlet.5a6cc9a5d4f19eaab1d1.png"},_l="TravelingDoctor",Sl=(0,c.i)(_l,yl),Hl=(0,n.wV)(_l,"state"),vl=(0,q.Z)(Hl,2),ql=vl[0],El=vl[1],Ol=(0,i.ew)(d.qH.artSet.TravelingDoctor,2,(0,i.aQ)(.2)),Ql=(0,i.ew)(d.qH.artSet.TravelingDoctor,4,(0,i.WV)((0,i.aQ)(.2),d.qH.total.hp)),Dl=o(_l,{premod:{incHeal_:Ol}},{heal:Ql}),Zl={name:"Traveling Doctor",rarity:[3],icons:yl,setEffects:{2:{document:[{header:Sl(2),fields:[{node:Ol}]}]},4:{document:[{header:Sl(4),value:El,path:ql,name:(0,n.st)("afterUse.burst"),states:{on:{fields:[{node:(0,i.ce)(Ql,{name:(0,n.el)("healing"),variant:"heal"})}]}}}]}}},kl=new c.y(_l,Zl,Dl),Bl={flower:t.p+"static/media/flower.8077b59dce3e48645943.png",plume:t.p+"static/media/plume.d6e47c20c2a732fabd8a.png",sands:t.p+"static/media/sands.a371fa7e286fe5778119.png",goblet:t.p+"static/media/goblet.980f47cdfb58c9bfabc7.png",circlet:t.p+"static/media/circlet.ae8fd14d503333f9d011.png"},Pl="VermillionHereafter",Vl=(0,c.i)(Pl,Bl),Tl=(0,i.ew)(d.qH.artSet.VermillionHereafter,2,(0,i.aQ)(.18),U.ZP.info("atk_")),Wl=(0,n.wV)(Pl,"afterBurst"),Fl=(0,q.Z)(Wl,2),Ml=Fl[0],Rl=Fl[1],jl=(0,i.ew)(d.qH.artSet.VermillionHereafter,4,(0,i.Dg)(Rl,"on",(0,i.aQ)(.08)),U.ZP.info("atk_")),zl=(0,n.wV)(Pl,"stacks"),Al=(0,q.Z)(zl,2),Cl=Al[0],Nl=Al[1],Gl=(0,i.ew)(d.qH.artSet.VermillionHereafter,4,(0,i.Dg)(Rl,"on",(0,i.P5)(Nl,Object.fromEntries((0,ha.w6)(1,4).map((function(e){return[e,(0,i.aQ)(.1*e)]}))),i.zv),U.ZP.info("atk_"))),xl=o(Pl,{premod:{atk_:(0,i.Sm)(Tl,jl,Gl)}}),Ll={name:"Vermillion Hereafter",rarity:[4,5],icons:Bl,setEffects:{2:{document:[{header:Vl(2),fields:[{node:Tl}]}]},4:{document:[{header:Vl(4),value:Rl,path:Ml,teamBuff:!0,name:(0,n.st)("afterUse.burst"),states:{on:{fields:[{node:jl}]}}},{header:Vl(4),value:Nl,path:Cl,teamBuff:!0,name:(0,n.st)("stacks"),canShow:(0,i.Dg)(Rl,"on",1),states:Object.fromEntries((0,ha.w6)(1,4).map((function(e){return[e,{name:(0,n.st)("stack",{count:e}),fields:[{node:Gl}]}]})))}]}}},Ul=new c.y(Pl,Ll,xl),Il={flower:t.p+"static/media/flower.78f9a382366023ed655c.png",plume:t.p+"static/media/plume.fdfba7f4393d25ab150a.png",sands:t.p+"static/media/sands.c326b17009e87ae1534a.png",goblet:t.p+"static/media/goblet.89409f60dad9be50c99c.png",circlet:t.p+"static/media/circlet.cadf79900c865924b7b2.png"},Kl="ViridescentVenerer",Jl=(0,c.i)(Kl,Il),Xl=(0,i.ew)(d.qH.artSet.ViridescentVenerer,2,(0,i.aQ)(.15)),Yl=(0,i.ew)(d.qH.artSet.ViridescentVenerer,4,(0,i.aQ)(.6)),$l=(0,ha.O)(E.gs,(function(e){return[Kl,"swirl".concat(e)]})),em=(0,ha.O)(E.gs,(function(e){return(0,n.v9)($l[e])})),am=(0,ha.Uq)(E.gs,(function(e){return["".concat(e,"_enemyRes_"),(0,i.ew)(d.qH.artSet.ViridescentVenerer,4,(0,i.Dg)(e,em[e],(0,i.aQ)(-.4)))]})),tm=o(Kl,{premod:{anemo_dmg_:Xl,swirl_dmg_:Yl},teamBuff:{premod:(0,wa.Z)({},am)}}),dm={name:"Viridescent Venerer",rarity:[4,5],icons:Il,setEffects:{2:{document:[{header:Jl(2),fields:[{node:Xl}]}]},4:{document:[{header:Jl(4),fields:[{node:Yl}]},{header:Jl(4),teamBuff:!0,states:Object.fromEntries(E.gs.map((function(e){return[e,{value:em[e],path:$l[e],name:(0,n.st)("swirlReaction.".concat(e)),fields:[{node:am["".concat(e,"_enemyRes_")]},{text:(0,n.el)("duration"),value:10,unit:"s"}]}]})))}]}}},im=new c.y(Kl,dm,tm),nm={flower:t.p+"static/media/flower.ac7f960d02509f236701.png",plume:t.p+"static/media/plume.35d4062290d0171117fc.png",sands:t.p+"static/media/sands.03e22fa47d91b8b1cc67.png",goblet:t.p+"static/media/goblet.af4a544dfb5b272c4934.png",circlet:t.p+"static/media/circlet.b71d0d8fac125dc58b38.png"},cm="WanderersTroupe",rm=(0,c.i)(cm,nm),sm=(0,i.ew)(d.qH.artSet.WanderersTroupe,2,80),om=(0,i.ew)(d.qH.artSet.WanderersTroupe,4,(0,i.P5)(d.qH.weaponType,{catalyst:(0,i.aQ)(.35),bow:(0,i.aQ)(.35)},i.zv)),lm=o(cm,{premod:{eleMas:sm,charged_dmg_:om}}),mm={name:"Wanderer's Troupe",rarity:[4,5],icons:nm,setEffects:{2:{document:[{header:rm(2),fields:[{node:sm}]}]},4:{document:[{header:rm(4),fields:[{node:om}]}]}}},fm={Adventurer:v,ArchaicPetra:L,Berserker:fe,BlizzardStrayer:Ve,BloodstainedChivalry:Ye,BraveHeart:ba,CrimsonWitchOfFlames:Na,DeepwoodMemories:rt,DefendersWill:St,EchoesOfAnOffering:Ct,EmblemOfSeveredFate:td,Gambler:ud,GildedDreams:Fd,GladiatorsFinale:Jd,HeartOfDepth:ui,HuskOfOpulentDreams:ji,Instructor:rn,Lavawalker:Dn,LuckyDog:Cn,MaidenBeloved:cc,MartialArtist:Oc,NoblesseOblige:Gc,OceanHuedClam:ir,PaleFlame:Er,PrayersForDestiny:Vr,PrayersForIllumination:Ar,PrayersForWisdom:Kr,PrayersToSpringtime:ds,ResolutionOfSojourner:ws,RetracingBolide:Fs,Scholar:Us,ShimenawasReminiscence:lo,TenacityOfTheMillelith:vo,TheExile:ko,ThunderingFury:Co,Thundersoother:tl,TinyMiracle:hl,TravelingDoctor:kl,VermillionHereafter:Ul,ViridescentVenerer:im,WanderersTroupe:new c.y(cm,mm,lm)}}}]);
//# sourceMappingURL=246.b65289cd.chunk.js.map