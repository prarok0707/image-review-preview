((e,t)=>{"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WEBPACK_GLOBAL=t():e.WEBPACK_GLOBAL=t()})(this,()=>{{let n={isActive:"is-active",isDragging:"is-dragging",isLoading:"is-loading",isLoaded:"is-loaded",isError:"is-error"};class t{_root=null;_images=[];_indexActive=0;_speed=20;_pageX=null;constructor(e){this._root=(e=e)&&(e="string"==typeof e?document.body.querySelector(e):e)instanceof Element?e:null,this._init()}update=()=>{var{isActive:e,isLoaded:t,isError:i,isDragging:s}=n;this._root.classList.remove(s,t,i),this._root.removeEventListener("pointerdown",this._onPointerDown),this._images[this._indexActive]?.classList.remove(e),this._init()};_onPointerDown=e=>{e.preventDefault();var t=document.body,i=this._images.length;this._pageX=e.pageX,this._speed=(30<=i?2:20<=i&&5)||(10<=i?10:20),t.style.cursor="ew-resize",this._root.classList.add(n.isDragging),t.addEventListener("pointermove",this._onPointerMoveThrottle),t.addEventListener("pointerup",this._onPointerUp)};_onPointerMove=i=>{i=i.pageX;if(!(this._pageX>i-this._speed&&this._pageX<i+this._speed)){var s=this._images.length-1;let e=this._indexActive-1,t=this._indexActive+1;e<0&&(e=s),t>s&&(t=0);var s=this._images[e],o=this._images[this._indexActive],r=this._images[t];this._pageX<i&&(s.classList.add(n.isActive),this._indexActive=e),this._pageX>i&&(r.classList.add(n.isActive),this._indexActive=t),o.classList.remove(n.isActive),this._pageX=i}};_onPointerMoveThrottle=(()=>((e,t)=>{let i=!1,s=null,o=null;return function(){i?(s=this,o=arguments):(i=!0,e.apply(this,arguments),setTimeout(()=>{i=!1,o&&(e.apply(s,o),s=o=null)},t))}})(this._onPointerMove,16))();_onPointerUp=()=>{var e=document.body;e.style.removeProperty("cursor"),this._root.classList.remove(n.isDragging),e.removeEventListener("pointermove",this._onPointerMoveThrottle),e.removeEventListener("pointerup",this._onPointerUp)};_events=()=>{var e=this._images.map(s=>new Promise((e,t)=>{var i=new Image;i.src=s.src,i.addEventListener("load",()=>e()),i.addEventListener("error",()=>t())}));Promise.all(e).then(()=>{this._root.classList.remove(n.isLoading),this._root.classList.add(n.isLoaded),this._root.addEventListener("pointerdown",this._onPointerDown)}).catch(()=>{this._root.classList.remove(n.isLoading),this._root.classList.add(n.isError)})};_init=()=>{var e;this._root&&(e=this._root.querySelectorAll("[data-image-review-target]"),this._images=Array.from(e),this._images.length)&&(this._root.classList.add(n.isLoading),this._images[0].classList.add(n.isActive),this._events())}}return document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll("[data-image-review]").forEach(e=>{new t(e)})}),{}}});