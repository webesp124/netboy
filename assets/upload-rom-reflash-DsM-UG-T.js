import{a as e}from"./rolldown-runtime-BYbx6iT9.js";import{i as t,r as n}from"./react-D4Cofj83.js";import{K as r,M as i,N as a,k as o}from"./mui-ByWCFDxG.js";import{i as s,n as c}from"./hooks-DPg459AI.js";import{l,w as u}from"./ui-BExRiWWh.js";import{p as d}from"./styled-CWnLpB2T.js";import{_ as f,h as p,n as m,t as h}from"./reader-client-6ImHFzQ9.js";import{i as g,u as _}from"./util-rom-BJ6x5CZ7.js";import{c as v}from"./index-CRft9y6M.js";import{n as y,t as b}from"./modal-header-Bfq6QEO8.js";import{t as x}from"./modal-footer-DTUdihez.js";import{t as S}from"./error-with-icon-JSHrD2wm.js";import{t as C}from"./drag-and-drop-input-BQ7iPDVV.js";import{t as w}from"./use-async-data-BlYT4ftm.js";var T=t(),E=e(n(),1),D=()=>{let[e,t]=(0,E.useState)(0),[n,r]=(0,E.useState)(null),{data:i,isLoading:a,error:o,execute:s}=w({fetchFn:(0,E.useCallback)(e=>e?new Promise((n,i)=>{let a=e.romFile.name.toLowerCase().endsWith(`.gba`)?e.romFile.size:void 0;e.romFile.arrayBuffer().then(async i=>{await p(e.esp32IP,i,a,{onProgress:e=>{r(e),t(e.percent*.67)}}),await f(e.esp32IP,i,a,{onProgress:e=>{r(e),t(67+e.percent*.33)}}),t(100),n(!0)}).catch(i)}):Promise.reject(Error(`fetchProps is required`)),[]),clearDataOnLoad:!0});return{data:i,isLoading:a,error:o,execute:s,progress:e,readerProgress:n}},O=v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  margin-bottom: 15px;
`,k=v.p`
  word-wrap: break-word;
  max-width: 100%;
`,A=[`.gba`,`.gbc`,`.gb`],j=v.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  position: relative;
  height: 24px;
  width: 100%;
  margin-top: 16px;
  overflow: hidden;

  &::after {
    content: '';
    background-color: ${e=>e.theme.gbaThemeBlue};
    height: 100%;
    width: ${e=>e.progress}%;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.2s ease-in-out;
  }
`,M=({isLoading:e,children:t,indicator:n,progress:r,message:a,etaSeconds:o,bytesPerSecond:s})=>e?(0,T.jsxs)(O,{children:[(0,T.jsx)(k,{children:a??(r<4?`Erasing Sectors...`:r>67?`Verifying ROM...`:`Flashing new ROM to cartridge...`)}),(s||o)&&(0,T.jsxs)(i,{variant:`caption`,children:[s?`${(s/1024).toFixed(1)} KB/s`:``,o?` · ${Math.ceil(o)}s remaining`:``]}),n,(0,T.jsx)(j,{progress:r,children:(0,T.jsxs)(`span`,{style:{position:`relative`,width:`100%`,textAlign:`center`,zIndex:600},children:[Math.round(r),`%`]})})]}):t,N=({esp32IP:e})=>{let t=r(),{closeModal:n}=d(),{handleSubmit:f,setValue:p,reset:v,control:w}=s(),{isLoading:O,error:k,execute:j,progress:N,readerProgress:P}=D(),F=(0,E.useId)(),I=(0,E.useCallback)(e=>{v(),p(`romFile`,e[0],{shouldValidate:!0})},[v,p]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(b,{title:`Reflash Cartridge ROM`}),(0,T.jsx)(y,{children:(0,T.jsxs)(M,{isLoading:O,indicator:(0,T.jsx)(l,{color:t.gbaThemeBlue,cssOverride:{margin:`0 auto`}}),progress:N,message:P?.message,etaSeconds:P?.etaSeconds,bytesPerSecond:P?.bytesPerSecond,children:[!!k&&(0,T.jsx)(S,{icon:(0,T.jsx)(u,{style:{color:t.errorRed}}),text:`Writing ROM has failed. ${m(k)}`}),(0,T.jsxs)(a,{severity:`warning`,variant:`outlined`,sx:{mb:2},children:[(0,T.jsx)(i,{variant:`subtitle2`,children:`Reflash carefully`}),(0,T.jsx)(i,{variant:`body2`,children:`Back up saves first, keep the reader powered, and leave the cartridge inserted until verification finishes.`})]}),(0,T.jsx)(`form`,{id:F,"aria-label":`Upload Rom Form`,onSubmit:f(async({romFile:t})=>{if(t){if(!window.confirm([`Flash ${t.name} to the inserted cartridge?`,``,`This can overwrite the cartridge ROM. netBOY will try to back up the current save first.`,`Keep the reader powered and do not remove the cartridge until verification finishes.`,``,`If flashing fails, leave the cartridge inserted and retry with the same ROM before power-cycling the reader.`].join(`
`)))return;let n=window.gameData,r=window.additionalData,i=n?.is_gba!==!1,a=i&&r?.saveType?g(r.saveType):void 0;try{let t=await h(e,a===-1?void 0:a,{timeoutMs:9e4,retries:0});_({name:`BeforeFlash_${r?.fullName??n?.romName??`cartridge`}.sav`,readerURL:e,gameName:r?.fullName??n?.romName??`Unknown cartridge`,cartridgeType:i?`gba`:`gb`,saveType:i?r?.saveType:void 0},t)}catch(e){if(!window.confirm([`Could not back up the current cartridge save before flashing.`,m(e),``,`Continue flashing anyway?`].join(`
`)))return}await j({romFile:t,esp32IP:e});return}}),children:(0,T.jsx)(c,{control:w,name:`romFile`,rules:{validate:e=>!!e||`A rom file is required`},render:({field:{name:e},fieldState:{error:t}})=>(0,T.jsx)(C,{ariaLabel:`Upload Rom`,id:`${F}--drag-and-drop`,onDrop:I,name:e,validFileExtensions:A,hideErrors:!!t,children:(0,T.jsx)(`p`,{children:`Drag and drop a .gba, .gb, or .gbc ROM file here, or click to upload a file`})})})})]})}),(0,T.jsxs)(x,{children:[(0,T.jsx)(o,{form:F,type:`submit`,variant:`contained`,children:`Reflash Repro`}),(0,T.jsx)(o,{variant:`outlined`,onClick:n,children:`Close`})]})]})};export{N as UploadRomReflashModal};
//# sourceMappingURL=upload-rom-reflash-DsM-UG-T.js.map