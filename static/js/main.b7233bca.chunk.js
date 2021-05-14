(this["webpackJsonpuser-story-map"]=this["webpackJsonpuser-story-map"]||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),i=n(12),d=n.n(i),o=n(2),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},u=n(3),l=Object(o.b)(r||(r=Object(u.a)(["\n  html {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    font-size: 18px;\n    line-height: 1.5;\n    display: flex;\n  }\n\n  textarea {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  }\n\n  body {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n"]))),f=n(5);function b(){return Math.random().toString(36).substr(2,9)}var p,j,h,x,y,O,m,v,I=n(4),g=n(21),k=n(7),w=n(20),C=n(16),S=n.n(C),A=n(0),B="24px",E=o.c.div(p||(p=Object(u.a)(["\n  position: relative;\n  display: grid;\n  width: 294px;\n  grid-template-columns: "," "," ",";\n  grid-template-rows: min-content "," min-content ",' min-content;\n  grid-template-areas:\n    "toolbar-top toolbar-top toolbar-top"\n    ". top ."\n    "left card right"\n    ". bottom ."\n    "toolbar toolbar toolbar";\n  justify-items: center;\n  align-items: center;\n\n  &:hover, &:focus-within {\n    button {\n      visibility: visible;\n    }\n  }\n'])),B,(function(e){return e.theme.cardWidth}),B,B,B),M=o.c.article(j||(j=Object(u.a)(["\n  border: 1px solid ",";\n  border-left: 4px solid ",";\n  border-radius: 3px;\n  background: ",";\n  width: 100%;\n  grid-area: card;\n  padding: 0.25em;\n  cursor: pointer;\n"])),(function(e){return e.theme.cards.typeAccents[e.type]}),(function(e){return e.theme.cards.typeAccents[e.type]}),(function(e){return e.theme.cards.background})),F=o.c.div(h||(h=Object(u.a)(["\n  grid-area: card;\n"]))),U=Object(o.c)(S.a).attrs((function(e){return{type:"text",value:e.title,placeholder:e.placeholder,maxLength:400}}))(x||(x=Object(u.a)(["\n  width: 100%;\n  max-width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.85em;\n  resize: none;\n"]))),z=o.c.div(y||(y=Object(u.a)(["\n  grid-area: ",";\n  position: absolute;\n  bottom: ",";\n  top: ",";\n  z-index: 1000;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 3px;\n  padding: 0.5em;\n  width: 100%;\n  box-shadow: rgba(5, 0, 56, 0.12) 0px 4px 16px 0px;\n"])),(function(e){return e.displayAtBottom?"toolbar":"toolbar-top"}),(function(e){return e.displayAtBottom?"-3em":"0"}),(function(e){return e.displayAtBottom?"0":"-3em"}),(function(e){return e.theme.cards.background}),(function(e){return Object(w.a)(.1,e.theme.subtle)})),D=o.c.button.attrs((function(e){return{type:"button"}}))(O||(O=Object(u.a)(["\n  transition: background-color .3s ease, color .3s ease;\n  background: transparent;\n  border: none;\n  color: ",";\n  font-size: 1em;\n  line-height: 1em;\n  padding: 0;\n  margin: 0.1em;\n  width: ",";\n  height: ",";\n  cursor: pointer;\n  border-radius: 50%;\n  outline: none;\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.subtle}),B,B,(function(e){return e.theme.accent}),(function(e){return e.theme.accentText}));function R(e){var t=e.onClick,n=Object(k.a)(e,["onClick"]);return Object(A.jsx)(D,Object(I.a)(Object(I.a)({},n),{},{onClick:t,children:"+"}))}var N=Object(o.c)(R)(m||(m=Object(u.a)(["\n  grid-area: ",";\n"])),(function(e){return"story"===e.type?"top":"left"})),T=Object(o.c)(R)(v||(v=Object(u.a)(["\n  grid-area: ",";\n"])),(function(e){return"story"===e.type?"bottom":"right"})),H="add-activity",J="add-task",L="add-story",P="update-card",W="delete-activity",q="delete-task",G="delete-story",K="select-card",Q="clear-selected-card";function V(e){var t,n=e.id,r=e.title,a=e.type,i=e.isSelected,d=e.onAddBefore,o=e.onAddAfter,s=e.dispatch,u=Object(c.useState)(!1),l=Object(f.a)(u,2),b=l[0],p=l[1],j=Object(c.useRef)(null),h=Object(c.useRef)(null);return Object(A.jsxs)(E,{ref:j,type:a,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},children:[Object(A.jsx)(M,{type:a,isSelected:i,onClick:function(e){e.stopPropagation(),h.current.focus(),s({type:K,cardId:n})},children:Object(A.jsx)(U,{ref:h,title:r,placeholder:"New ".concat(a,"..."),onChange:function(e){s({type:P,cardId:n,title:e.target.value})}})}),d&&b&&Object(A.jsx)(N,{type:a,onClick:d}),o&&b&&Object(A.jsx)(T,{type:a,onClick:o}),i&&Object(A.jsx)(z,{displayAtBottom:(t=j,!((window.innerHeight||document.documentElement.clientHeight)-t.current.getBoundingClientRect().bottom<=50)),children:Object(A.jsx)("button",{type:"button",onClick:function(){s({type:"activity"===a?W:"task"===a?q:G,cardId:n})},children:"Delete"})})]})}function X(e){var t=e.dispatch,n=Object(k.a)(e,["dispatch"]),r=n.index;return Object(A.jsx)(V,Object(I.a)(Object(I.a)({},n),{},{dispatch:t,onAddBefore:function(){return t({type:H,activityIndex:r})},onAddAfter:function(){return t({type:H,activityIndex:r+1})}}))}function Y(e){var t=e.dispatch,n=Object(k.a)(e,["dispatch"]),r=n.activityId,c=n.index;return Object(A.jsx)(V,Object(I.a)(Object(I.a)({},n),{},{dispatch:t,onAddBefore:function(){return t({type:J,activityId:r,taskIndex:c})},onAddAfter:function(){return t({type:J,activityId:r,taskIndex:c+1})}}))}function Z(e){var t=e.dispatch,n=Object(k.a)(e,["dispatch"]),r=n.releaseId,c=n.taskId,a=n.index;return Object(A.jsx)(V,Object(I.a)(Object(I.a)({},n),{},{dispatch:t,onAddBefore:function(){return t({type:L,releaseId:r,taskId:c,storyIndex:a})},onAddAfter:function(){return t({type:L,releaseId:r,taskId:c,storyIndex:a+1})}}))}function $(e){var t=e.children;return Object(A.jsx)(E,{children:Object(A.jsx)(F,{children:t})})}function _(e,t,n,r){e.filter((function(e){return 0===e.id.indexOf(t)&&e.index>=n&&(!r||r(e))})).forEach((function(e){e.index+=1}))}function ee(e){var t=0;e.sort((function(e,t){return e.index-t.index})).forEach((function(e){e.index=t++}))}function te(e,t){var n=[];return e.forEach((function(e,r){!0===t(e)&&n.push(r)})),n}var ne=function(e,t){var n=e.cards.findIndex((function(e){return e.id===t})),r=e.cards[n];return te(e.cards,(function(e){return e.taskId===t})).forEach((function(t){e.cards.splice(t,1)})),e.cards.splice(n,1),r};function re(e,t){switch(t.type){case H:_(e.cards,"activity",t.activityIndex),e.cards.push({id:"activity-".concat(b()),type:"activity",title:"",index:t.activityIndex});break;case J:_(e.cards,"task",t.taskIndex,(function(e){return e.activityId===t.activityId})),e.cards.push({id:"task-".concat(b()),type:"task",activityId:t.activityId,title:"",index:t.taskIndex});break;case L:_(e.cards,"story",t.storyIndex,(function(e){return e.taskId===t.taskId&&e.releaseId===t.releaseId})),e.cards.push({id:"story-".concat(b()),type:"story",releaseId:t.releaseId,taskId:t.taskId,title:"",index:t.storyIndex});break;case P:e.cards.find((function(e){return e.id===t.cardId})).title=t.title;break;case W:!function(e,t){var n=e.cards.findIndex((function(e){return e.id===t})),r=e.cards[n];te(e.cards,(function(e){return e.activityId===r.id})).map((function(t){return e.cards[t].id})).forEach((function(t){ne(e.cards,t)})),e.cards.splice(n,1)}(e,t.cardId),ee(e.cards.filter((function(e){return"activity"===e.type})));break;case q:var n=ne(e,t.cardId);ee(e.cards.filter((function(e){return e.activityId===n.activityId})));break;case G:var r=e.cards.findIndex((function(e){return e.id===t.cardId})),c=e.cards[r];e.cards.splice(r,1),ee(e.cards.filter((function(e){return e.taskId===c.taskId&&e.releaseId===c.releaseId})));break;case K:e.selectedCardId=t.cardId;break;case Q:e.selectedCardId=null;break;case"add-release":e.releases.splice(t.index,0,{id:b(),name:""});break;case"update-release":e.releases.find((function(e){return e.id===t.releaseId})).name=t.name;break;case"delete-release":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t})),r=e.releases[n<e.releases.length-1?n+1:n-1];e.releases.splice(n,1);var c=e.cards.filter((function(e){return e.releaseId===r.id})).length;e.cards.filter((function(e){return e.releaseId===t})).forEach((function(e){e.releaseId=r.id,e.index=c++}))}(e,t.releaseId);break;case"move-release-up":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t}));if(0!==n){var r=e.releases[n],c=e.releases[n-1];e.releases[n-1]=r,e.releases[n]=c}}(e,t.releaseId);break;case"move-release-down":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t}));if(n!==e.releases.length-1){var r=e.releases[n],c=e.releases[n+1];e.releases[n+1]=r,e.releases[n]=c}}(e,t.releaseId);break;default:throw new Error("Unknown action type")}}var ce,ae,ie,de,oe={releases:[{id:"release-".concat(b()),name:"Backlog"}],cards:[]},se=o.c.section(ce||(ce=Object(u.a)(["\n  border-top: 1px solid #cccccc;\n"])));function ue(e){var t=e.id,n=e.index,r=e.name,c=e.canDelete,a=e.children,i=e.dispatch;return Object(A.jsxs)(se,{children:[Object(A.jsxs)("header",{children:[Object(A.jsx)("input",{type:"text",value:r,autoFocus:!0,onChange:function(e){i({type:"update-release",releaseId:t,name:e.target.value})}}),Object(A.jsx)("button",{type:"button",onClick:function(){return i({type:"add-release",index:n})},children:"Add Release Above"}),Object(A.jsx)("button",{type:"button",onClick:function(){return i({type:"add-release",index:n+1})},children:"Add Release Below"}),Object(A.jsx)("button",{type:"button",onClick:function(){return i({type:"move-release-up",releaseId:t})},children:"Move Up"}),Object(A.jsx)("button",{type:"button",onClick:function(){return i({type:"move-release-down",releaseId:t})},children:"Move Down"}),c&&Object(A.jsx)("button",{type:"button",onClick:function(){return i({type:"delete-release",releaseId:t})},children:"Delete"})]}),Object(A.jsx)("div",{children:a})]})}var le=o.c.div(ae||(ae=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100vh;\n  min-width: 100vw;\n  background: ",";\n  padding: 0.5em;\n"])),(function(e){return e.theme.background})),fe=o.c.div(ie||(ie=Object(u.a)(["\n  display: flex;\n"]))),be=o.c.div(de||(de=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"])));function pe(e,t){return e.filter((function(e){return 0===e.id.indexOf(t)})).sort((function(e,t){return e.index-t.index}))}function je(e,t){return e.filter((function(e){return e.activityId===t.id}))}var he,xe,ye,Oe=function(e){var t=e.map,n=e.onMapUpdated,r=Object(g.a)(re,t||oe),a=Object(f.a)(r,2),i=a[0],d=i.releases,o=i.cards,s=i.selectedCardId,u=a[1],l=pe(o,"activity"),b=pe(o,"task"),p=pe(o,"story");return Object(c.useEffect)((function(){n({releases:d,cards:o})}),[n,d,o,t]),Object(A.jsxs)(le,{onClick:function(){return u({type:Q})},children:[Object(A.jsxs)(fe,{children:[0===l.length&&Object(A.jsx)($,{children:Object(A.jsx)(R,{onClick:function(){return u({type:H,activityIndex:0})}})}),l.map((function(e){var t=je(b,e);return Object(A.jsxs)(fe,{children:[Object(A.jsx)(X,Object(I.a)(Object(I.a)({dispatch:u},e),{},{isSelected:s===e.id})),t.map((function(t,n){return n>0&&Object(A.jsx)($,{},"".concat(e.id,"-").concat(t.id,"-spacer"))}))]},e.id)}))]}),Object(A.jsx)(fe,{children:l.map((function(e){var t=je(b,e);return Object(A.jsxs)(fe,{children:[0===t.length&&Object(A.jsx)($,{children:Object(A.jsx)(R,{onClick:function(){return u({type:J,activityId:e.id,taskIndex:0})}})}),t.length>0&&t.map((function(e){return Object(A.jsx)(Y,Object(I.a)({dispatch:u,isSelected:s===e.id},e),e.id)}))]},"".concat(e.id,"-tasks"))}))}),d.map((function(e,t){var n=p.filter((function(t){return t.releaseId===e.id}));return Object(A.jsx)(ue,Object(I.a)(Object(I.a)({index:t,dispatch:u,canDelete:d.length>1},e),{},{children:Object(A.jsx)(fe,{children:l.map((function(t){return je(b,t).map((function(t){var r=n.filter((function(e){return e.taskId===t.id}));return Object(A.jsxs)(be,{children:[0===r.length&&Object(A.jsx)($,{children:Object(A.jsx)(R,{onClick:function(){return u({type:L,releaseId:e.id,taskId:t.id,storyIndex:0})}})}),r.length>0&&r.map((function(e){return Object(A.jsx)(Z,Object(I.a)({dispatch:u,isSelected:s===e.id},e),e.id)}))]},"".concat(t.id,"-stories"))}))}))})}),e.id)}))]})},me=o.c.div(he||(he=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 100vw;\n  height: 100vh;\n  max-height: 100vh;\n"]))),ve=o.c.header(xe||(xe=Object(u.a)(["\n  background: ",";\n  color: ",";\n"])),(function(e){return e.theme.header}),(function(e){return e.theme.accentText})),Ie=o.c.section(ye||(ye=Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n  padding-top: 0.5em;\n  max-width: 100vw;\n"])));function ge(e){localStorage.setItem("map",JSON.stringify(e))}var ke=JSON.parse(localStorage.getItem("map"));var we=function(){var e=Object(c.useState)(b()),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(A.jsxs)(me,{children:[Object(A.jsxs)(ve,{children:["User Story Map",Object(A.jsx)("button",{type:"button",onClick:function(){localStorage.removeItem("map"),ke=null,r(b())},children:"Clear"})]}),Object(A.jsx)(Ie,{children:Object(A.jsx)(Oe,{map:ke,onMapUpdated:ge},n)})]})};d.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsxs)(o.a,{theme:{background:"#ffffff",accent:"#7310fa",accentText:"#ffffff",subtle:"#cccccc",header:"#7310fa",cardWidth:"250px",cards:{background:"#ffffff",typeAccents:{activity:"#fac710",task:"#2d9bf0",story:"#18c427"}}},children:[Object(A.jsx)(l,{}),Object(A.jsx)(we,{})]})}),document.getElementById("root")),s()}},[[37,1,2]]]);
//# sourceMappingURL=main.b7233bca.chunk.js.map