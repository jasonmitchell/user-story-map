(this["webpackJsonpuser-story-map"]=this["webpackJsonpuser-story-map"]||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var c,r=n(1),i=n.n(r),a=n(11),d=n.n(a),o=n(2),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},l=n(3),u=Object(o.b)(c||(c=Object(l.a)(["\n  html {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    font-size: 18px;\n    line-height: 1.5;\n    display: flex;\n  }\n\n  body {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n"]))),f=n(6);function b(){return Math.random().toString(36).substr(2,9)}var j,h,p,x,O,v,y,m=n(4),I=n(15),g=n(7),k=n(0),A=o.c.div(j||(j=Object(l.a)(['\n  width: 100%;\n  display: grid;\n  grid-template-columns: min-content auto min-content;\n  grid-template-rows: min-content auto min-content;\n  gap: 0em;\n  grid-template-areas:\n    "top top top"\n    "left card right"\n    "bottom bottom bottom";\n']))),w=o.c.article(h||(h=Object(l.a)(["\n  border: 1px solid #cccccc;\n  width: 100%;\n  grid-area: card;\n"]))),C=o.c.button.attrs((function(e){return{type:"button"}}))(p||(p=Object(l.a)([""]))),S=Object(o.c)(C)(x||(x=Object(l.a)(["\n  grid-area: top;\n"]))),B=Object(o.c)(C)(O||(O=Object(l.a)(["\n  grid-area: bottom;\n"]))),R=Object(o.c)(C)(v||(v=Object(l.a)(["\n  grid-area: left;\n"]))),L=Object(o.c)(C)(y||(y=Object(l.a)(["\n  grid-area: right;\n"]))),E="add-activity",F="add-task",M="add-story",D="update-card",U="delete-activity",N="delete-task",z="delete-story";function J(e){var t=e.id,n=e.title,c=e.type,r=e.onAddAbove,i=e.onAddBelow,a=e.onAddLeft,d=e.onAddRight,o=e.dispatch;return Object(k.jsxs)(A,{children:[Object(k.jsxs)(w,{children:[Object(k.jsx)("input",{type:"text",autoFocus:!0,value:n,onChange:function(e){o({type:D,cardId:t,title:e.target.value})}}),Object(k.jsx)("button",{type:"button",onClick:function(){o({type:"activity"===c?U:"task"===c?N:z,cardId:t})},children:"Delete"})]}),i&&Object(k.jsx)(B,{onClick:i,children:"+"}),d&&Object(k.jsx)(L,{onClick:d,children:"+"}),r&&Object(k.jsx)(S,{onClick:r,children:"+"}),a&&Object(k.jsx)(R,{onClick:a,children:"+"})]})}function T(e){var t=e.onAddLeft,n=e.onAddRight,c=Object(g.a)(e,["onAddLeft","onAddRight"]);return Object(k.jsx)(J,Object(m.a)(Object(m.a)({},c),{},{onAddLeft:t,onAddRight:n,onAddAbove:null,onAddBelow:null}))}function W(e){var t=e.onAddLeft,n=e.onAddRight,c=Object(g.a)(e,["onAddLeft","onAddRight"]);return Object(k.jsx)(J,Object(m.a)(Object(m.a)({},c),{},{onAddLeft:t,onAddRight:n,onAddAbove:null,onAddBelow:null}))}function P(e){var t=e.onAddAbove,n=e.onAddBelow,c=Object(g.a)(e,["onAddAbove","onAddBelow"]);return Object(k.jsx)(J,Object(m.a)(Object(m.a)({},c),{},{onAddLeft:null,onAddRight:null,onAddAbove:t,onAddBelow:n}))}function H(e,t,n,c){e.filter((function(e){return 0===e.id.indexOf(t)&&e.index>=n&&(!c||c(e))})).forEach((function(e){e.index+=1}))}function q(e){var t=0;e.sort((function(e,t){return e.index-t.index})).forEach((function(e){e.index=t++}))}function G(e,t){var n=[];return e.forEach((function(e,c){!0===t(e)&&n.push(c)})),n}var K=function(e,t){var n=e.cards.findIndex((function(e){return e.id===t})),c=e.cards[n];return G(e.cards,(function(e){return e.taskId===t})).forEach((function(t){e.cards.splice(t,1)})),e.cards.splice(n,1),c};function Q(e,t){switch(t.type){case E:H(e.cards,"activity",t.activityIndex),e.cards.push({id:"activity-".concat(b()),type:"activity",title:"",index:t.activityIndex});break;case F:H(e.cards,"task",t.taskIndex,(function(e){return e.activityId===t.activityId})),e.cards.push({id:"task-".concat(b()),type:"task",activityId:t.activityId,title:"",index:t.taskIndex});break;case M:H(e.cards,"story",t.storyIndex,(function(e){return e.taskId===t.taskId&&e.releaseId===t.releaseId})),e.cards.push({id:"story-".concat(b()),type:"story",releaseId:t.releaseId,taskId:t.taskId,title:"",index:t.storyIndex});break;case D:e.cards.find((function(e){return e.id===t.cardId})).title=t.title;break;case U:!function(e,t){var n=e.cards.findIndex((function(e){return e.id===t})),c=e.cards[n];G(e.cards,(function(e){return e.activityId===c.id})).map((function(t){return e.cards[t].id})).forEach((function(t){K(e.cards,t)})),e.cards.splice(n,1)}(e,t.cardId),q(e.cards.filter((function(e){return"activity"===e.type})));break;case N:var n=K(e,t.cardId);q(e.cards.filter((function(e){return e.activityId===n.activityId})));break;case z:var c=e.cards.findIndex((function(e){return e.id===t.cardId})),r=e.cards[c];e.cards.splice(c,1),q(e.cards.filter((function(e){return e.taskId===r.taskId&&e.releaseId===r.releaseId})));break;case"add-release":e.releases.splice(t.index,0,{id:b(),name:""});break;case"update-release":e.releases.find((function(e){return e.id===t.releaseId})).name=t.name;break;case"delete-release":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t})),c=e.releases[n<e.releases.length-1?n+1:n-1];e.releases.splice(n,1);var r=e.cards.filter((function(e){return e.releaseId===c.id})).length;e.cards.filter((function(e){return e.releaseId===t})).forEach((function(e){e.releaseId=c.id,e.index=r++}))}(e,t.releaseId);break;case"move-release-up":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t}));if(0!==n){var c=e.releases[n],r=e.releases[n-1];e.releases[n-1]=c,e.releases[n]=r}}(e,t.releaseId);break;case"move-release-down":!function(e,t){var n=e.releases.findIndex((function(e){return e.id===t}));if(n!==e.releases.length-1){var c=e.releases[n],r=e.releases[n+1];e.releases[n+1]=c,e.releases[n]=r}}(e,t.releaseId);break;default:throw new Error("Unknown action type")}}var V,X,Y,Z,$,_,ee={releases:[{id:"release-".concat(b()),name:"Backlog"}],cards:[]},te=o.c.section(V||(V=Object(l.a)(["\n  border-top: 1px solid #cccccc;\n"])));function ne(e){var t=e.id,n=e.name,c=e.canDelete,r=e.children,i=e.onAddAbove,a=e.onAddBelow,d=e.dispatch;return Object(k.jsxs)(te,{children:[Object(k.jsxs)("header",{children:[Object(k.jsx)("input",{type:"text",value:n,autoFocus:!0,onChange:function(e){d({type:"update-release",releaseId:t,name:e.target.value})}}),Object(k.jsx)("button",{type:"button",onClick:i,children:"Add Release Above"}),Object(k.jsx)("button",{type:"button",onClick:a,children:"Add Release Below"}),Object(k.jsx)("button",{type:"button",onClick:function(){return d({type:"move-release-up",releaseId:t})},children:"Move Up"}),Object(k.jsx)("button",{type:"button",onClick:function(){return d({type:"move-release-down",releaseId:t})},children:"Move Down"}),c&&Object(k.jsx)("button",{type:"button",onClick:function(){return d({type:"delete-release",releaseId:t})},children:"Delete"})]}),Object(k.jsx)("div",{children:r})]})}var ce=o.c.div(X||(X=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  min-width: 100vw;\n  background: ",";\n"])),(function(e){return e.theme.background})),re=o.c.div(Y||(Y=Object(l.a)(["\n  display: flex;\n"]))),ie=o.c.div(Z||(Z=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: ",";\n  max-width: ",";\n"])),(function(e){return e.theme.columnWidth}),(function(e){return e.theme.columnWidth})),ae=o.c.div($||($=Object(l.a)(["\n  display: flex;\n"]))),de=o.c.div(_||(_=Object(l.a)(["\n  display: flex;\n"])));function oe(e,t){e({type:E,activityIndex:t})}function se(e,t,n){e({type:F,activityId:t,taskIndex:n})}function le(e,t){e({type:"add-release",index:t})}function ue(e,t){return e.filter((function(e){return 0===e.id.indexOf(t)})).sort((function(e,t){return e.index-t.index}))}var fe,be,je,he=function(e){var t=e.map,n=e.onMapUpdated,c=Object(I.a)(Q,t||ee),i=Object(f.a)(c,2),a=i[0],d=i[1],o=a.releases,s=a.cards,l=ue(s,"activity"),u=ue(s,"task"),b=ue(s,"story");return Object(r.useEffect)((function(){n(a)}),[n,a,t]),Object(k.jsxs)(ce,{children:[Object(k.jsxs)(ae,{children:[l.map((function(e){var t=u.filter((function(t){return t.activityId===e.id}));return Object(k.jsxs)("div",{children:[Object(k.jsx)(ie,{children:Object(k.jsx)(T,Object(m.a)(Object(m.a)({},e),{},{onAddLeft:function(){return oe(d,e.index)},onAddRight:function(){return oe(d,e.index+1)},dispatch:d}))}),Object(k.jsxs)(de,{children:[t.map((function(t){return Object(k.jsx)(ie,{children:Object(k.jsx)(W,Object(m.a)(Object(m.a)({},t),{},{onAddLeft:function(){return se(d,e.id,t.index)},onAddRight:function(){return se(d,e.id,t.index+1)},dispatch:d}))},t.id)})),!t.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return se(d,e.id,0)},children:"+ New Task"})]})]},e.id)})),!l.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return oe(d,0)},children:"+ New Activity"})]}),o.map((function(e,t){var n=b.filter((function(t){return t.releaseId===e.id}));return Object(k.jsx)(ne,Object(m.a)(Object(m.a)({},e),{},{dispatch:d,index:t,canDelete:o.length>1,onAddAbove:function(){return le(d,t)},onAddBelow:function(){return le(d,t+1)},children:Object(k.jsx)(re,{children:l.map((function(t){var c=u.filter((function(e){return e.activityId===t.id}));return c.length?c.length&&c.map((function(t){var c=n.filter((function(n){return n.releaseId===e.id&&n.taskId===t.id})),r=function(e,t,n,c){return function(c){e({type:M,releaseId:t,taskId:n,storyIndex:c})}}(d,e.id,t.id);return Object(k.jsxs)(ie,{children:[c.map((function(e,t){return Object(k.jsx)(P,Object(m.a)(Object(m.a)({},e),{},{onAddAbove:function(){return r(t)},onAddBelow:function(){return r(t+1)},dispatch:d}),e.id)})),!c.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return r(0)},children:"+ New Story"})]},"task-stories-".concat(t.id))})):Object(k.jsx)(ie,{},"activity-empty-tasks-".concat(t.id))}))})}),"release-".concat(e.id))}))]})},pe=o.c.div(fe||(fe=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 100vw;\n  height: 100vh;\n  max-height: 100vh;\n"]))),xe=o.c.header(be||(be=Object(l.a)(["\n  background: ",";\n"])),(function(e){return e.theme.header})),Oe=o.c.section(je||(je=Object(l.a)(["\n  flex: 1;\n  overflow: auto;\n  padding-top: 0.5em;\n"])));function ve(e){localStorage.setItem("map",JSON.stringify(e))}var ye=JSON.parse(localStorage.getItem("map"));var me=function(){var e=Object(r.useState)(b()),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(k.jsxs)(pe,{children:[Object(k.jsxs)(xe,{children:["User Story Map",Object(k.jsx)("button",{type:"button",onClick:function(){localStorage.removeItem("map"),ye=null,c(b())},children:"Clear"})]}),Object(k.jsx)(Oe,{children:Object(k.jsx)(he,{map:ye,onMapUpdated:ve},n)})]})};d.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsxs)(o.a,{theme:{background:"#ffffff",header:"#cccccc",columnWidth:"250px"},children:[Object(k.jsx)(u,{}),Object(k.jsx)(me,{})]})}),document.getElementById("root")),s()}},[[23,1,2]]]);
//# sourceMappingURL=main.b8f97c09.chunk.js.map