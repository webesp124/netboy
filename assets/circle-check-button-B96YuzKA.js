import{a as e}from"./rolldown-runtime-BYbx6iT9.js";import{i as t,r as n}from"./react-D4Cofj83.js";import{W as r,k as i}from"./mui-ByWCFDxG.js";import{i as a}from"./emotion-Di8hwSI8.js";var o=t(),s=e(n(),1),c=(e,t)=>{let n=(0,s.useRef)(e);(0,s.useLayoutEffect)(()=>{n.current=e},[e]),(0,s.useEffect)(()=>{if(t===null)return;let e=setInterval(()=>{n.current()},t);return()=>{clearInterval(e)}},[t])},l=a`
  100% {
    stroke-dashoffset: 0;
  }
`,u=a`
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`,d=a`
  100% {
    box-shadow: inset 0 0 0 100vh var(--checkmark-fill-color);
  }
`,f=r(`svg`,{target:`ewkqvsk0`})(`position:absolute;width:24px;height:24px;display:block;margin-left:auto;margin-right:auto;border-radius:50%;stroke:`,({theme:e})=>e.pureWhite,`;stroke-width:5;stroke-miterlimit:10;animation:`,d,` 0.2s ease-in-out 0.2s forwards,`,u,` 0.12s ease-in-out 0.45s both;`),p=r(`circle`,{target:`ewkqvsk1`})(`stroke-dasharray:166;stroke-dashoffset:166;stroke-width:5;stroke-miterlimit:10;stroke:`,({theme:e})=>e.checkMarkGreen,`;fill:none;animation:`,l,` 0.3s cubic-bezier(0.65,0,0.45,1) forwards;`),m=r(`path`,{target:`ewkqvsk2`})(`transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;animation:`,l,` 0.15s cubic-bezier(0.65,0,0.45,1) 0.4s forwards;`),h=r(`span`,{target:`ewkqvsk3`})(({$isSuccessCheckVisible:e})=>e&&`visibility: hidden;`),g=({copy:e,msDuration:t=1100,onClick:n,showSuccess:r=!0,...a})=>{let l=(0,s.useId)(),[u,d]=(0,s.useState)(!1),g=r&&u;return c(()=>{d(!1)},g?t:null),(0,o.jsxs)(i,{onClick:e=>{d(!0),n?.(e)},variant:`contained`,...a,children:[g&&(0,o.jsxs)(f,{role:`graphics-symbol`,"aria-labelledby":l,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 52 52`,children:[(0,o.jsx)(`title`,{id:l,children:`Circle Check`}),(0,o.jsx)(p,{cx:`26`,cy:`26`,r:`25`,fill:`none`}),(0,o.jsx)(m,{fill:`none`,d:`M14.1 27.2l7.1 7.2 16.7-16.8`})]}),(0,o.jsx)(h,{$isSuccessCheckVisible:g,children:e})]})};export{g as t};
//# sourceMappingURL=circle-check-button-B96YuzKA.js.map