"use strict";self.webpackHotUpdatehello_world(687,{381:()=>{console.log("подключено");const t=[["1 Вопрос","2 Вопрос","3 Вопрос","4 Вопрос","5 Вопрос","Cколько первого","Сколько второго","Сколько третьего","Сколько четвертого","Сколько пятого","ответ первого","ответ второго","ответ третьего","ответ четвертого","ответ пятого"],["1 Вопросgfh2","2 Вопросfgh2","3 Вопроfghс2","4 Вопросfgh2","5 Вопроfgh2","Cколько fghпервого2","Сколько fghвторого2","Сколько fghтретьего2","Сколько fghчетвертого2","Сколько fghпятого2","ответ первого2","ответ второго2","ответ третьего2","ответ четвертого2","ответ пятого2"],["1 Вопросgfh3","2 Вопросfgh3","3 Вопроfghс3","4 Вопросfgh3","5 Вопроfgh3","Cколько fghпервого3","Сколько fghвторого3","Сколько fghтретьего3","Сколько fghчетвертого3","Сколько fghпятого3","ответ первого3","ответ второго3","ответ третьего3","ответ четвертого3","ответ пятого3"],["1 Вопросgfh4","2 Вопросfgh4","3 Вопроfghс4","4 Вопросfgh4","5 Вопроfgh4","bag","Сколько fghвторого4","Сколько fghтретьего4","Сколько fghчетвертого4","Сколько fghпятого4","ответ первого4","ответ второго4","ответ третьего4","ответ четвертого4","ответ пятого4"],["1 Вопросgfh5","2 Вопросfgh5","3 Вопроfghс5","4 Вопросfgh5","5 Вопроfgh5","Cколько fghпервого5","Сколько fghвторого5","Сколько fghтретьего5","Сколько fghчетвертого5","Сколько fghпятого5","ответ первого5","ответ второго5","ответ третьего5","ответ четвертого5","ответ пятого5"]],e=decodeURIComponent(window.location.search).replace(/name=/g,"").replace(/time=/g,"").replace(/&/g,", ").replace("?","").split(","),o=e.slice(0,-1);o.forEach((t=>{console.log(t),document.querySelector(".js-teams").insertAdjacentHTML("afterbegin",'<div class="team js-team"><div class="team__name"><span class="name js-team__name">text </span></div><div class="board"><div class="score-board"><div class="the-score">$<span class="dollar js-score">0</span></div></div><div class="answer-board js-answer-board disable"><button class="correct js-correct"></button><button class="incorrect js-incorrect"></button></div></div></div>')})),[...document.querySelectorAll(".js-team__name")].forEach(((t,e)=>{console.log(o,e),t.textContent=o[e]}));const n=[...document.querySelectorAll(".js-score")],s=document.querySelector(".js-countdown"),l=document.querySelector(".js-countdown-one"),c=e[e.length-1];console.log(c);const r=Math.floor(c/60),a=Math.round(60*(1/60-Math.floor(1/60))),i=Math.round(60*(c/60-Math.floor(c/60))),d=()=>{c<60?1==i.toString().length?s.textContent="0"+i:s.textContent=i:(1==r.toString().length&&(l.textContent="0"+r),2==r.toString().length&&(l.textContent=r),1==i.toString().length&&(s.textContent="0"+i),2==i.toString().length&&(s.textContent=i))};d();const u=document.querySelectorAll(".js-title"),h=document.querySelector(".js-questionWindow"),g=document.querySelectorAll(".js-answer-board"),f=[...document.querySelectorAll(".js-correct")],m=[...document.querySelectorAll(".js-incorrect")],x=document.querySelector(".js-question"),v=document.querySelector(".js-question__text"),b=[...document.querySelectorAll(".js-title")],y=document.querySelector(".js-questionWindow__vars"),C=document.querySelector(".js-questionWindow__vars-btn"),S=document.querySelector(".js-questionWindow__next"),j=document.querySelector(".js-bag-div"),q=document.querySelector(".js-bag-answer"),L=document.querySelectorAll(".js-firstRow"),w=document.querySelectorAll(".js-secondRow"),p=document.querySelectorAll(".js-thirdRow"),E=document.querySelectorAll(".js-fourthRow"),_=document.querySelectorAll(".js-fifthRow"),A=document.querySelector(".js-countdown-block");let M=["answer",0],T=()=>{g.forEach((t=>{t.classList.contains("disable")&&g.forEach((t=>{t.classList.remove("disable")}))})),C.classList.remove("disable")};C.addEventListener("click",(()=>k()));const k=()=>{C.classList.add("disable"),y.style.cssText="opacity: 0; transition: all, 0.2s",setTimeout((()=>y.textContent=M[0]),200),setTimeout((()=>y.style.cssText="opacity: 1; transition: all, 0.3s"),205),S.classList.remove("disable")},O=e=>{y.textContent="Верный ответ",e.style.cssText="opacity: 0; transition: all, 0.5s",setTimeout((()=>e.style.cssText="display: none"),600),h.classList.add("active"),setTimeout((()=>h.style.cssText="opacity: 1; transition: all, 0.3s"),10),C.classList.add("disable");let o=0,n=0;[...L].includes(e)&&(o=0,n=[...L].indexOf(e)),[...w].includes(e)&&(o=1,n=[...w].indexOf(e)),[...p].includes(e)&&(o=2,n=[...p].indexOf(e)),[...E].includes(e)&&(o=3,n=[...E].indexOf(e)),[..._].includes(e)&&(o=4,n=[..._].indexOf(e));const c=[t[o][n],t[o][n+5],t[o][n+10],e.getAttribute("data-score")];"bag"==c[1]?(M[0]=q.textContent,M[1]=1e3,x.textContent="Хер в мешке за 1000$!",v.textContent="",j.classList.remove("invisible")):(x.textContent=c[0]+". Категория: "+b[o].textContent,u[o].classList.add("title_active"),M[0]=c[2],M[1]=c[3],v.textContent=c[1]),setTimeout((()=>(()=>{A.classList.remove("invisible-but-block");const t=setInterval((()=>{var e;0==l.textContent&&0==s.textContent?(T(),clearInterval(t),A.style.cssText="color: red"):(e=60*Number(l.textContent)+Number(s.textContent)-1)<60?(l.textContent="00",1==e.toString().length?s.textContent="0"+e:s.textContent=e):(1==Math.floor(e/60).toString().length&&(l.textContent="0"+Math.floor(e/60)),2==Math.floor(e/60).toString().length&&(l.textContent=Math.floor(e/60)),1==a.toString().length&&(s.textContent="0"+Math.round(60*(e/60-Math.floor(e/60)))),2==a.toString().length&&(s.textContent=Math.round(60*(e/60-Math.floor(e/60)))))}),1e3);document.addEventListener("keypress",(()=>{h.classList.contains("active")&&(T(),clearInterval(t))})),A.addEventListener("click",(()=>{console.log("123"),h.classList.contains("active")&&(T(),clearInterval(t))})),S.addEventListener("click",(()=>{clearInterval(t),I()}))})()),1e3)},I=()=>{console.log("close"),h.classList.remove("active"),h.style.cssText="opacity: 0; transition: all, 0.3s",setTimeout((()=>h.classList.remove("active")),300),g.forEach((t=>{t.classList.toggle("disable")})),g.forEach((t=>{t.classList.add("disable")})),S.classList.add("disable"),d(),j.classList.add("invisible")};f.forEach((t=>{t.addEventListener("click",(()=>{N(t)}))})),m.forEach((t=>{t.addEventListener("click",(()=>{R(t)}))}));const N=t=>{let e=f.indexOf(t);n[e].textContent=Number(n[e].textContent)+Number(M[1]),I()},R=t=>{let e=m.indexOf(t);n[e].textContent=Number(n[e].textContent)-Number(M[1])};[L,w,p,E,_].forEach((t=>{t.forEach((t=>{t.addEventListener("click",(()=>{O(t)}))}))}))}},(function(t){t.h=()=>"a5b12e52c42c6312b18d"}));