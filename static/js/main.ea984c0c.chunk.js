(this["webpackJsonpuser-story-map"]=this["webpackJsonpuser-story-map"]||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var r,c=n(1),i=n.n(c),a=n(11),d=n.n(a),o=n(2),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},u=n(3),l=Object(o.b)(r||(r=Object(u.a)(["\n  html {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    font-size: 18px;\n    line-height: 1.5;\n    display: flex;\n  }\n\n  body {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n"]))),f=n(6);function b(){return Math.random().toString(36).substr(2,9)}var j,h,p,x,v,O,y,m=n(4),g=n(15),I=n(7),k=n(0),A=o.c.div(j||(j=Object(u.a)(['\n  width: 100%;\n  display: grid;\n  grid-template-columns: min-content auto min-content;\n  grid-template-rows: min-content auto min-content;\n  gap: 0em;\n  grid-template-areas:\n    "top top top"\n    "left card right"\n    "bottom bottom bottom";\n  justify-items: center;\n  align-items: center;\n']))),w=o.c.article(h||(h=Object(u.a)(["\n  border: 1px solid ",";\n  border-left: 4px solid ",";\n  border-radius: 3px;\n  background: ",";\n  width: 100%;\n  grid-area: card;\n"])),(function(e){return e.theme.cards.typeAccents[e.type]}),(function(e){return e.theme.cards.typeAccents[e.type]}),(function(e){return e.theme.cards.background})),C=o.c.button.attrs((function(e){return{type:"button"}}))(p||(p=Object(u.a)(["\n  transition: all .3s ease;\n  background: transparent;\n  border: none;\n  color: ",";\n  font-size: 1.25em;\n  line-height: 1.25em;\n  padding: 0;\n  margin: 0.1em;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  border-radius: 50%;\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.subtle}),(function(e){return e.theme.accent}),(function(e){return e.theme.accentText})),S=Object(o.c)(C)(x||(x=Object(u.a)(["\n  grid-area: top;\n"]))),B=Object(o.c)(C)(v||(v=Object(u.a)(["\n  grid-area: bottom;\n"]))),R=Object(o.c)(C)(O||(O=Object(u.a)(["\n  grid-area: left;\n"]))),L=Object(o.c)(C)(y||(y=Object(u.a)(["\n  grid-area: right;\n"]))),E="add-activity",F="add-task",M="add-story",D="update-card",U="delete-activity",N="delete-task",T="delete-story";function z(e){var t=e.id,n=e.index,r=e.title,c=e.type,i=e.onAddAbove,a=e.onAddBelow,d=e.onAddLeft,o=e.onAddRight,s=e.dispatch;return Object(k.jsxs)(A,{children:[Object(k.jsxs)(w,{type:c,children:[Object(k.jsx)("input",{type:"text",autoFocus:!0,value:r,onChange:function(e){s({type:D,cardId:t,title:e.target.value})}}),Object(k.jsx)("button",{type:"button",onClick:function(){s({type:"activity"===c?U:"task"===c?N:T,cardId:t})},children:"Delete"})]}),a&&Object(k.jsx)(B,{onClick:a,children:"+"}),o&&Object(k.jsx)(L,{onClick:o,children:"+"}),i&&0===n&&Object(k.jsx)(S,{onClick:i,children:"+"}),d&&0===n&&Object(k.jsx)(R,{onClick:d,children:"+"})]})}function J(e){var t=e.onAddLeft,n=e.onAddRight,r=Object(I.a)(e,["onAddLeft","onAddRight"]);return Object(k.jsx)(z,Object(m.a)(Object(m.a)({},r),{},{onAddLeft:t,onAddRight:n,onAddAbove:null,onAddBelow:null}))}function W(e){var t=e.onAddLeft,n=e.onAddRight,r=Object(I.a)(e,["onAddLeft","onAddRight"]);return Object(k.jsx)(z,Object(m.a)(Object(m.a)({},r),{},{onAddLeft:t,onAddRight:n,onAddAbove:null,onAddBelow:null}))}function P(e){var t=e.onAddAbove,n=e.onAddBelow,r=Object(I.a)(e,["onAddAbove","onAddBelow"]);return Object(k.jsx)(z,Object(m.a)(Object(m.a)({},r),{},{onAddLeft:null,onAddRight:null,onAddAbove:t,onAddBelow:n}))}function H(e,t,n,r){e.filter((function(e){return 0===e.id.indexOf(t)&&e.index>=n&&(!r||r(e))})).forEach((function(e){e.index+=1}))}function q(e){var t=0;e.sort((function(e,t){return e.index-t.index})).forEach((function(e){e.index=t++}))}function G(e,t){var n=[];return e.forEach((function(e,r){!0===t(e)&&n.push(r)})),n}var K=function(e,t){var n=e.cards.findIndex((function(e){return e.id===t})),r=e.cards[n];return G(e.cards,(function(e){return e.taskId===t})).forEach((function(t){e.cards.splice(t,1)})),e.cards.splice(n,1),r};function Q(e,t){switch(t.type){case E:H(e.cards,"activity",t.activityIndex),e.cards.push({id:"activity-".concat(b()),type:"activity",title:"",index:t.activityIndex});break;case F:H(e.cards,"task",t.taskIndex,(function(e){return e.activityId===t.activityId})),e.cards.push({id:"task-".concat(b()),type:"task",activityId:t.activityId,title:"",index:t.taskIndex});break;case M:H(e.cards,"story",t.storyIndex,(function(e){return e.taskId===t.taskId&&e.releaseId===t.releaseId})),e.cards.push({id:"story-".concat(b()),type:"story",releaseId:t.releaseId,taskId:t.taskId,title:"",index:t.storyIndex});break;case D:e.cards.find((function(e){return e.id===t.cardId})).title=t.title;break;case U:!function(e,t){var n=e.cards.findIndex((function(e){return e.id===t})),r=e.cards[n];G(e.cards,(function(e){return e.activityId===r.id})).map((function(t){return e.cards[t].id})).forEach((function(t){K(e.cards,t)})),e.cards.splice(n,1)}(e,t.cardId),q(e.cards.filter((function(e){return"activity"===e.type})));break;case N:var n=K(e,t.cardId);q(e.cards.filter((function(e){return e.activityId===n.activityId})));break;case T:var r=e.cards.findIndex((function(e){return e.id===t.cardId})),c=e.cards[r];e.cards.splice(r,1),q(e.cards.filter((function(e){return e.taskId===c.taskId&&e.releaseId===c.releaseId})));break;case"add-release":e.releases.splice(t.index,0,{id:b(),name:""});break;case"update-release":e.releases.find((function(e){return e.id===t.releaseId})).name=t.name;break;case"delete-release":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t})),r=e.releases[n<e.releases.length-1?n+1:n-1];e.releases.splice(n,1);var c=e.cards.filter((function(e){return e.releaseId===r.id})).length;e.cards.filter((function(e){return e.releaseId===t})).forEach((function(e){e.releaseId=r.id,e.index=c++}))}(e,t.releaseId);break;case"move-release-up":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t}));if(0!==n){var r=e.releases[n],c=e.releases[n-1];e.releases[n-1]=r,e.releases[n]=c}}(e,t.releaseId);break;case"move-release-down":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t}));if(n!==e.releases.length-1){var r=e.releases[n],c=e.releases[n+1];e.releases[n+1]=r,e.releases[n]=c}}(e,t.releaseId);break;default:throw new Error("Unknown action type")}}var V,X,Y,Z,$,_,ee={releases:[{id:"release-".concat(b()),name:"Backlog"}],cards:[]},te=o.c.section(V||(V=Object(u.a)(["\n  border-top: 1px solid #cccccc;\n"])));function ne(e){var t=e.id,n=e.name,r=e.canDelete,c=e.children,i=e.onAddAbove,a=e.onAddBelow,d=e.dispatch;return Object(k.jsxs)(te,{children:[Object(k.jsxs)("header",{children:[Object(k.jsx)("input",{type:"text",value:n,autoFocus:!0,onChange:function(e){d({type:"update-release",releaseId:t,name:e.target.value})}}),Object(k.jsx)("button",{type:"button",onClick:i,children:"Add Release Above"}),Object(k.jsx)("button",{type:"button",onClick:a,children:"Add Release Below"}),Object(k.jsx)("button",{type:"button",onClick:function(){return d({type:"move-release-up",releaseId:t})},children:"Move Up"}),Object(k.jsx)("button",{type:"button",onClick:function(){return d({type:"move-release-down",releaseId:t})},children:"Move Down"}),r&&Object(k.jsx)("button",{type:"button",onClick:function(){return d({type:"delete-release",releaseId:t})},children:"Delete"})]}),Object(k.jsx)("div",{children:c})]})}var re=o.c.div(X||(X=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  min-width: 100vw;\n  background: ",";\n"])),(function(e){return e.theme.background})),ce=o.c.div(Y||(Y=Object(u.a)(["\n  display: flex;\n"]))),ie=o.c.div(Z||(Z=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: ",";\n  max-width: ",";\n"])),(function(e){return e.theme.columnWidth}),(function(e){return e.theme.columnWidth})),ae=o.c.div($||($=Object(u.a)(["\n  display: flex;\n"]))),de=o.c.div(_||(_=Object(u.a)(["\n  display: flex;\n"])));function oe(e,t){e({type:E,activityIndex:t})}function se(e,t,n){e({type:F,activityId:t,taskIndex:n})}function ue(e,t){e({type:"add-release",index:t})}function le(e,t){return e.filter((function(e){return 0===e.id.indexOf(t)})).sort((function(e,t){return e.index-t.index}))}var fe,be,je,he=function(e){var t=e.map,n=e.onMapUpdated,r=Object(g.a)(Q,t||ee),i=Object(f.a)(r,2),a=i[0],d=i[1],o=a.releases,s=a.cards,u=le(s,"activity"),l=le(s,"task"),b=le(s,"story");return Object(c.useEffect)((function(){n(a)}),[n,a,t]),Object(k.jsxs)(re,{children:[Object(k.jsxs)(ae,{children:[u.map((function(e){var t=l.filter((function(t){return t.activityId===e.id}));return Object(k.jsxs)("div",{children:[Object(k.jsx)(ie,{children:Object(k.jsx)(J,Object(m.a)(Object(m.a)({},e),{},{onAddLeft:function(){return oe(d,e.index)},onAddRight:function(){return oe(d,e.index+1)},dispatch:d}))}),Object(k.jsxs)(de,{children:[t.map((function(t){return Object(k.jsx)(ie,{children:Object(k.jsx)(W,Object(m.a)(Object(m.a)({},t),{},{onAddLeft:function(){return se(d,e.id,t.index)},onAddRight:function(){return se(d,e.id,t.index+1)},dispatch:d}))},t.id)})),!t.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return se(d,e.id,0)},children:"+ New Task"})]})]},e.id)})),!u.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return oe(d,0)},children:"+ New Activity"})]}),o.map((function(e,t){var n=b.filter((function(t){return t.releaseId===e.id}));return Object(k.jsx)(ne,Object(m.a)(Object(m.a)({},e),{},{dispatch:d,index:t,canDelete:o.length>1,onAddAbove:function(){return ue(d,t)},onAddBelow:function(){return ue(d,t+1)},children:Object(k.jsx)(ce,{children:u.map((function(t){var r=l.filter((function(e){return e.activityId===t.id}));return r.length?r.length&&r.map((function(t){var r=n.filter((function(n){return n.releaseId===e.id&&n.taskId===t.id})),c=function(e,t,n,r){return function(r){e({type:M,releaseId:t,taskId:n,storyIndex:r})}}(d,e.id,t.id);return Object(k.jsxs)(ie,{children:[r.map((function(e,t){return Object(k.jsx)(P,Object(m.a)(Object(m.a)({},e),{},{onAddAbove:function(){return c(t)},onAddBelow:function(){return c(t+1)},dispatch:d}),e.id)})),!r.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return c(0)},children:"+ New Story"})]},"task-stories-".concat(t.id))})):Object(k.jsx)(ie,{},"activity-empty-tasks-".concat(t.id))}))})}),"release-".concat(e.id))}))]})},pe=o.c.div(fe||(fe=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 100vw;\n  height: 100vh;\n  max-height: 100vh;\n"]))),xe=o.c.header(be||(be=Object(u.a)(["\n  background: ",";\n  color: ",";\n"])),(function(e){return e.theme.header}),(function(e){return e.theme.accentText})),ve=o.c.section(je||(je=Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n  padding-top: 0.5em;\n"])));function Oe(e){localStorage.setItem("map",JSON.stringify(e))}var ye=JSON.parse(localStorage.getItem("map"));var me=function(){var e=Object(c.useState)(b()),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(k.jsxs)(pe,{children:[Object(k.jsxs)(xe,{children:["User Story Map",Object(k.jsx)("button",{type:"button",onClick:function(){localStorage.removeItem("map"),ye=null,r(b())},children:"Clear"})]}),Object(k.jsx)(ve,{children:Object(k.jsx)(he,{map:ye,onMapUpdated:Oe},n)})]})};d.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsxs)(o.a,{theme:{background:"#ffffff",accent:"#7310fa",accentText:"#ffffff",subtle:"#cccccc",header:"#7310fa",columnWidth:"250px",cards:{background:"#ffffff",typeAccents:{activity:"#fac710",task:"#2d9bf0",story:"#18c427"}}},children:[Object(k.jsx)(l,{}),Object(k.jsx)(me,{})]})}),document.getElementById("root")),s()}},[[23,1,2]]]);
//# sourceMappingURL=main.ea984c0c.chunk.js.map