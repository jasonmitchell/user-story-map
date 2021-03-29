(this["webpackJsonpuser-story-map"]=this["webpackJsonpuser-story-map"]||[]).push([[0],{23:function(t,e,n){"use strict";n.r(e);var c,i=n(1),d=n.n(i),r=n(11),o=n.n(r),a=n(2),s=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,d=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),d(t),r(t)}))},u=n(3),l=Object(a.b)(c||(c=Object(u.a)(["\n  html {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    font-size: 18px;\n    line-height: 1.5;\n    display: flex;\n  }\n\n  body {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n"]))),b=n(6);function j(){return Math.random().toString(36).substr(2,9)}var f,h,x,O,p,v,m,y,g=n(4),A=n(15),k=n(7),I=n(0),w=a.c.div(f||(f=Object(u.a)(['\n  width: 100%;\n  display: grid;\n  grid-template-columns: min-content auto min-content;\n  grid-template-rows: min-content auto min-content;\n  gap: 0em;\n  grid-template-areas:\n    "top top top"\n    "left card right"\n    "bottom bottom bottom";\n']))),C=a.c.article(h||(h=Object(u.a)(["\n  border: 1px solid #cccccc;\n  width: 100%;\n  grid-area: card;\n"]))),S=a.c.button.attrs((function(t){return{type:"button"}}))(x||(x=Object(u.a)([""]))),B=Object(a.c)(S)(O||(O=Object(u.a)(["\n  grid-area: top;\n"]))),R=Object(a.c)(S)(p||(p=Object(u.a)(["\n  grid-area: bottom;\n"]))),L=Object(a.c)(S)(v||(v=Object(u.a)(["\n  grid-area: left;\n"]))),F=Object(a.c)(S)(m||(m=Object(u.a)(["\n  grid-area: right;\n"]))),M="add-activity",N="add-task",U="add-story",z="update-card";function E(t){var e=t.id,n=t.title,c=t.onAddAbove,i=t.onAddBelow,d=t.onAddLeft,r=t.onAddRight,o=t.dispatch;return Object(I.jsxs)(w,{children:[Object(I.jsx)(C,{children:Object(I.jsx)("input",{type:"text",autoFocus:!0,value:n,onChange:function(t){o({type:z,cardId:e,title:t.target.value})}})}),i&&Object(I.jsx)(R,{onClick:i,children:"+"}),r&&Object(I.jsx)(F,{onClick:r,children:"+"}),c&&Object(I.jsx)(B,{onClick:c,children:"+"}),d&&Object(I.jsx)(L,{onClick:d,children:"+"})]})}function J(t){var e=t.onAddLeft,n=t.onAddRight,c=Object(k.a)(t,["onAddLeft","onAddRight"]);return Object(I.jsx)(E,Object(g.a)(Object(g.a)({},c),{},{onAddLeft:e,onAddRight:n,onAddAbove:null,onAddBelow:null}))}function T(t){var e=t.onAddLeft,n=t.onAddRight,c=Object(k.a)(t,["onAddLeft","onAddRight"]);return Object(I.jsx)(E,Object(g.a)(Object(g.a)({},c),{},{onAddLeft:e,onAddRight:n,onAddAbove:null,onAddBelow:null}))}function W(t){var e=t.onAddAbove,n=t.onAddBelow,c=Object(k.a)(t,["onAddAbove","onAddBelow"]);return Object(I.jsx)(E,Object(g.a)(Object(g.a)({},c),{},{onAddLeft:null,onAddRight:null,onAddAbove:e,onAddBelow:n}))}var D,P,H,V,q,G=a.c.section(y||(y=Object(u.a)(["\n  border-top: 1px solid #cccccc;\n"])));function K(t){var e=t.name,n=t.children,c=t.onAddAbove,i=t.onAddBelow;return Object(I.jsxs)(G,{children:[Object(I.jsxs)("header",{children:[Object(I.jsx)("input",{type:"text",defaultValue:e,autoFocus:!0}),Object(I.jsx)("button",{type:"button",onClick:c,children:"Add Release Above"}),Object(I.jsx)("button",{type:"button",onClick:i,children:"Add Release Below"})]}),Object(I.jsx)("div",{children:n})]})}var Q=a.c.div(D||(D=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  min-width: 100vw;\n  background: ",";\n"])),(function(t){return t.theme.background})),X=a.c.div(P||(P=Object(u.a)(["\n  display: flex;\n"]))),Y=a.c.div(H||(H=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: ",";\n  max-width: ",";\n"])),(function(t){return t.theme.columnWidth}),(function(t){return t.theme.columnWidth})),Z=a.c.div(V||(V=Object(u.a)(["\n  display: flex;\n"]))),$=a.c.div(q||(q=Object(u.a)(["\n  display: flex;\n"]))),_={releases:[{id:"release-".concat(j()),name:"Backlog"}],cards:[]};function tt(t,e){var n=function(t,e,n,c){t.filter((function(t){return 0===t.id.indexOf(e)&&t.index>=n&&(!c||c(t))})).forEach((function(t){t.index+=1}))};switch(e.type){case M:n(t.cards,"activity",e.activityIndex),t.cards.push({id:"activity-".concat(j()),title:"",index:e.activityIndex});break;case N:n(t.cards,"task",e.taskIndex,(function(t){return t.activityId===e.activityId})),t.cards.push({id:"task-".concat(j()),activityId:e.activityId,title:"",index:e.taskIndex});break;case U:n(t.cards,"story",e.storyIndex,(function(t){return t.taskId===e.taskId&&t.releaseId===e.releaseId})),t.cards.push({id:"story-".concat(j()),releaseId:e.releaseId,taskId:e.taskId,title:"",index:e.storyIndex});break;case z:t.cards.find((function(t){return t.id===e.cardId})).title=e.title;break;case"add-release":t.releases.splice(e.index,0,{id:j(),name:""});break;default:throw new Error("Unknown action type")}}function et(t,e){t({type:M,activityIndex:e})}function nt(t,e,n){t({type:N,activityId:e,taskIndex:n})}function ct(t,e){t({type:"add-release",index:e})}function it(t,e){return t.filter((function(t){return 0===t.id.indexOf(e)})).sort((function(t,e){return t.index-e.index}))}var dt,rt,ot,at=function(t){var e=t.map,n=t.onMapUpdated,c=Object(A.a)(tt,e||_),d=Object(b.a)(c,2),r=d[0],o=d[1],a=r.releases,s=r.cards,u=it(s,"activity"),l=it(s,"task"),j=it(s,"story");return Object(i.useEffect)((function(){n(r)}),[n,r,e]),Object(I.jsxs)(Q,{children:[Object(I.jsxs)(Z,{children:[u.map((function(t){var e=l.filter((function(e){return e.activityId===t.id}));return Object(I.jsxs)("div",{children:[Object(I.jsx)(Y,{children:Object(I.jsx)(J,Object(g.a)(Object(g.a)({},t),{},{onAddLeft:function(){return et(o,t.index)},onAddRight:function(){return et(o,t.index+1)},dispatch:o}))}),Object(I.jsxs)($,{children:[e.map((function(e){return Object(I.jsx)(Y,{children:Object(I.jsx)(T,Object(g.a)(Object(g.a)({},e),{},{onAddLeft:function(){return nt(o,t.id,e.index)},onAddRight:function(){return nt(o,t.id,e.index+1)},dispatch:o}))},e.id)})),!e.length&&Object(I.jsx)("button",{type:"button",onClick:function(){return nt(o,t.id,0)},children:"+ New Task"})]})]},t.id)})),!u.length&&Object(I.jsx)("button",{type:"button",onClick:function(){return et(o,0)},children:"+ New Activity"})]}),a.map((function(t,e){var n=j.filter((function(e){return e.releaseId===t.id}));return Object(I.jsx)(K,Object(g.a)(Object(g.a)({},t),{},{index:e,onAddAbove:function(){return ct(o,e)},onAddBelow:function(){return ct(o,e+1)},children:Object(I.jsx)(X,{children:u.map((function(e){var c=l.filter((function(t){return t.activityId===e.id}));return c.length?c.length&&c.map((function(e){var c=n.filter((function(n){return n.releaseId===t.id&&n.taskId===e.id})),i=function(t,e,n,c){return function(c){t({type:U,releaseId:e,taskId:n,storyIndex:c})}}(o,t.id,e.id);return Object(I.jsxs)(Y,{children:[c.map((function(t,e){return Object(I.jsx)(W,Object(g.a)(Object(g.a)({},t),{},{onAddAbove:function(){return i(e)},onAddBelow:function(){return i(e+1)},dispatch:o}),t.id)})),!c.length&&Object(I.jsx)("button",{type:"button",onClick:function(){return i(0)},children:"+ New Story"})]},"task-stories-".concat(e.id))})):Object(I.jsx)(Y,{},"activity-empty-tasks-".concat(e.id))}))})}),"release-".concat(t.id))}))]})},st=a.c.div(dt||(dt=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  max-height: 100vh;\n"]))),ut=a.c.header(rt||(rt=Object(u.a)(["\n  background: ",";\n"])),(function(t){return t.theme.header})),lt=a.c.section(ot||(ot=Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n  padding-top: 0.5em;\n"])));function bt(t){localStorage.setItem("map",JSON.stringify(t))}var jt=JSON.parse(localStorage.getItem("map"));var ft=function(){var t=Object(i.useState)(j()),e=Object(b.a)(t,2),n=e[0],c=e[1];return Object(I.jsxs)(st,{children:[Object(I.jsxs)(ut,{children:["User Story Map",Object(I.jsx)("button",{type:"button",onClick:function(){localStorage.removeItem("map"),jt=null,c(j())},children:"Clear"})]}),Object(I.jsx)(lt,{children:Object(I.jsx)(at,{map:jt,onMapUpdated:bt},n)})]})};o.a.render(Object(I.jsx)(d.a.StrictMode,{children:Object(I.jsxs)(a.a,{theme:{background:"#ffffff",header:"#cccccc",columnWidth:"250px"},children:[Object(I.jsx)(l,{}),Object(I.jsx)(ft,{})]})}),document.getElementById("root")),s()}},[[23,1,2]]]);
//# sourceMappingURL=main.23535709.chunk.js.map