(this["webpackJsonpuser-story-map"]=this["webpackJsonpuser-story-map"]||[]).push([[0],{23:function(t,n,e){"use strict";e.r(n);var c,i,d,r,a,o,s,l,u,b=e(1),j=e.n(b),f=e(10),h=e.n(f),x=e(2),O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,d=n.getLCP,r=n.getTTFB;e(t),c(t),i(t),d(t),r(t)}))},p=e(3),v=Object(x.b)(c||(c=Object(p.a)(["\n  html {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    font-size: 18px;\n    line-height: 1.5;\n    display: flex;\n  }\n\n  body {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n"]))),y=e(4),g=e(14),m=e(15),A=e(6),k=e(0),w=x.c.div(i||(i=Object(p.a)(['\n  width: 100%;\n  display: grid;\n  grid-template-columns: min-content auto min-content;\n  grid-template-rows: min-content auto min-content;\n  gap: 0em;\n  grid-template-areas:\n    "top top top"\n    "left card right"\n    "bottom bottom bottom";\n']))),I=x.c.article(d||(d=Object(p.a)(["\n  border: 1px solid #cccccc;\n  width: 100%;\n  grid-area: card;\n"]))),B=x.c.button.attrs((function(t){return{type:"button"}}))(r||(r=Object(p.a)([""]))),C=Object(x.c)(B)(a||(a=Object(p.a)(["\n  grid-area: top;\n"]))),R=Object(x.c)(B)(o||(o=Object(p.a)(["\n  grid-area: bottom;\n"]))),S=Object(x.c)(B)(s||(s=Object(p.a)(["\n  grid-area: left;\n"]))),L=Object(x.c)(B)(l||(l=Object(p.a)(["\n  grid-area: right;\n"]))),F="add-activity",M="add-task",N="add-story",U="update-card";function z(t){var n=t.id,e=t.title,c=t.onAddAbove,i=t.onAddBelow,d=t.onAddLeft,r=t.onAddRight,a=t.dispatch;return Object(k.jsxs)(w,{children:[Object(k.jsx)(I,{children:Object(k.jsx)("input",{type:"text",autoFocus:!0,value:e,onChange:function(t){a({type:U,cardId:n,title:t.target.value})}})}),i&&Object(k.jsx)(R,{onClick:i,children:"+"}),r&&Object(k.jsx)(L,{onClick:r,children:"+"}),c&&Object(k.jsx)(C,{onClick:c,children:"+"}),d&&Object(k.jsx)(S,{onClick:d,children:"+"})]})}function E(t){var n=t.onAddLeft,e=t.onAddRight,c=Object(A.a)(t,["onAddLeft","onAddRight"]);return Object(k.jsx)(z,Object(y.a)(Object(y.a)({},c),{},{onAddLeft:n,onAddRight:e,onAddAbove:null,onAddBelow:null}))}function J(t){var n=t.onAddLeft,e=t.onAddRight,c=Object(A.a)(t,["onAddLeft","onAddRight"]);return Object(k.jsx)(z,Object(y.a)(Object(y.a)({},c),{},{onAddLeft:n,onAddRight:e,onAddAbove:null,onAddBelow:null}))}function T(t){var n=t.onAddAbove,e=t.onAddBelow,c=Object(A.a)(t,["onAddAbove","onAddBelow"]);return Object(k.jsx)(z,Object(y.a)(Object(y.a)({},c),{},{onAddLeft:null,onAddRight:null,onAddAbove:n,onAddBelow:e}))}var W,D,P,H,V,q=x.c.section(u||(u=Object(p.a)(["\n  border-top: 1px solid #cccccc;\n"])));function G(t){var n=t.name,e=t.children,c=t.onAddAbove,i=t.onAddBelow;return Object(k.jsxs)(q,{children:[Object(k.jsxs)("header",{children:[Object(k.jsx)("input",{type:"text",defaultValue:n,autoFocus:!0}),Object(k.jsx)("button",{type:"button",onClick:c,children:"Add Release Above"}),Object(k.jsx)("button",{type:"button",onClick:i,children:"Add Release Below"})]}),Object(k.jsx)("div",{children:e})]})}var K=x.c.div(W||(W=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  min-width: 100vw;\n  background: ",";\n"])),(function(t){return t.theme.background})),Q=x.c.div(D||(D=Object(p.a)(["\n  display: flex;\n"]))),X=x.c.div(P||(P=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: ",";\n  max-width: ",";\n"])),(function(t){return t.theme.columnWidth}),(function(t){return t.theme.columnWidth})),Y=x.c.div(H||(H=Object(p.a)(["\n  display: flex;\n"]))),Z=x.c.div(V||(V=Object(p.a)(["\n  display: flex;\n"])));function $(){return Math.random().toString(36).substr(2,9)}var _={releases:[{id:"release-".concat($()),name:"Backlog"}],cards:[]};function tt(t,n){var e=function(t,n,e){t.filter((function(t){return 0===t.id.indexOf(n)&&t.index>=e})).forEach((function(t){t.index+=1}))};switch(n.type){case F:e(t.cards,"activity",n.activityIndex),t.cards.push({id:"activity-".concat($()),title:"",index:n.activityIndex});break;case M:e(t.cards,"task",n.taskIndex),t.cards.push({id:"task-".concat($()),activityId:n.activityId,title:"",index:n.taskIndex});break;case N:e(t.cards,"story",n.storyIndex),t.cards.push({id:"story-".concat($()),releaseId:n.releaseId,taskId:n.taskId,title:"",index:n.storyIndex});break;case U:t.cards.find((function(t){return t.id===n.cardId})).title=n.title;break;case"add-release":t.releases.splice(n.index,0,{id:$(),name:""});break;default:throw new Error("Unknown action type")}}function nt(t,n){t({type:"add-activity",activityIndex:n})}function et(t,n,e){t({type:"add-task",activityId:n,taskIndex:e})}function ct(t,n){t({type:"add-release",index:n})}function it(t,n){return t.filter((function(t){return 0===t.id.indexOf(n)})).sort((function(t,n){return t.index-n.index}))}var dt,rt,at,ot=function(t){var n=t.map,e=t.onMapUpdated,c=Object(m.a)(tt,n||_),i=Object(g.a)(c,2),d=i[0],r=d.releases,a=d.cards,o=i[1],s=it(a,"activity"),l=it(a,"task"),u=it(a,"story");return Object(b.useEffect)((function(){e({releases:r,cards:a})}),[e,r,a]),Object(k.jsxs)(K,{children:[Object(k.jsxs)(Y,{children:[s.map((function(t){var n=l.filter((function(n){return n.activityId===t.id}));return Object(k.jsxs)("div",{children:[Object(k.jsx)(X,{children:Object(k.jsx)(E,Object(y.a)(Object(y.a)({},t),{},{onAddLeft:function(){return nt(o,t.index)},onAddRight:function(){return nt(o,t.index+1)},dispatch:o}))}),Object(k.jsxs)(Z,{children:[n.map((function(n){return Object(k.jsx)(X,{children:Object(k.jsx)(J,Object(y.a)(Object(y.a)({},n),{},{onAddLeft:function(){return et(o,t.id,n.index)},onAddRight:function(){return et(o,t.id,n.index+1)},dispatch:o}))},n.id)})),!n.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return et(o,t.id,0)},children:"+ New Task"})]})]},t.id)})),!s.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return nt(o,0)},children:"+ New Activity"})]}),r.map((function(t,n){var e=u.filter((function(n){return n.releaseId===t.id}));return Object(k.jsx)(G,Object(y.a)(Object(y.a)({},t),{},{index:n,onAddAbove:function(){return ct(o,n)},onAddBelow:function(){return ct(o,n+1)},children:Object(k.jsx)(Q,{children:s.map((function(n){var c=l.filter((function(t){return t.activityId===n.id}));return c.length?c.length&&c.map((function(n){var c=e.filter((function(e){return e.releaseId===t.id&&e.taskId===n.id})),i=function(t,n,e,c){return function(c){t({type:"add-story",releaseId:n,taskId:e,storyIndex:c})}}(o,t.id,n.id);return Object(k.jsxs)(X,{children:[c.map((function(t,n){return Object(k.jsx)(T,Object(y.a)(Object(y.a)({},t),{},{onAddAbove:function(){return i(n)},onAddBelow:function(){return i(n+1)},dispatch:o}),t.id)})),!c.length&&Object(k.jsx)("button",{type:"button",onClick:function(){return i(0)},children:"+ New Story"})]},"task-stories-".concat(n.id))})):Object(k.jsx)(X,{},"activity-empty-tasks-".concat(n.id))}))})}),"release-".concat(t.id))}))]})},st=x.c.div(dt||(dt=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  max-height: 100vh;\n"]))),lt=x.c.header(rt||(rt=Object(p.a)(["\n  background: #cccccc;\n"]))),ut=x.c.section(at||(at=Object(p.a)(["\n  flex: 1;\n  overflow: auto;\n  padding-top: 0.5em;\n"])));function bt(t){localStorage.setItem("map",JSON.stringify(t))}var jt=function(){var t=JSON.parse(localStorage.getItem("map"));return Object(k.jsxs)(st,{children:[Object(k.jsx)(lt,{children:"User Story Map"}),Object(k.jsx)(ut,{children:Object(k.jsx)(ot,{map:t,onMapUpdated:bt})})]})};h.a.render(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsxs)(x.a,{theme:{background:"#ffffff",columnWidth:"250px"},children:[Object(k.jsx)(v,{}),Object(k.jsx)(jt,{})]})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.ee45349d.chunk.js.map