const tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};tt();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},nt=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],s=t[n++],o=t[n++],c=((r&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;e[a++]=String.fromCharCode(55296+(c>>10)),e[a++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],s=t[n++];e[a++]=String.fromCharCode((r&15)<<12|(i&63)<<6|s&63)}}return e.join("")},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const i=t[r],s=r+1<t.length,o=s?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|o>>4;let m=(o&15)<<2|l>>6,f=l&63;c||(f=64,s||(m=64)),a.push(n[u],n[h],n[m],n[f])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ye(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||o==null||l==null||h==null)throw Error();const m=i<<2|o>>4;if(a.push(m),l!==64){const f=o<<4&240|l>>2;if(a.push(f),h!==64){const et=l<<6&192|h;a.push(et)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},at=function(t){const e=ye(t);return rt.encodeByteArray(e,!0)},Ie=function(t){return at(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}function st(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function we(){return typeof indexedDB=="object"}function Ee(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ot(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="FirebaseError";class D extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=ct,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?lt(i,a):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new D(r,o,a)}}function lt(t,e){return t.replace(dt,(n,a)=>{const r=e[a];return r!=null?String(r):`<${a}?>`})}const dt=/\{\$([^}]+)}/g;function O(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const i=t[r],s=e[r];if(te(i)&&te(s)){if(!O(i,s))return!1}else if(i!==s)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function te(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=1e3,ht=2,ft=4*60*60*1e3,pt=.5;function ne(t,e=ut,n=ht){const a=e*Math.pow(n,t),r=Math.round(pt*a*(Math.random()-.5)*2);return Math.min(ft,a+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class I{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new it;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bt(e))try{this.getOrInitializeService({instanceIdentifier:w})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});a.resolve(i)}catch{}}}}clearInstance(e=w){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=w){return this.instances.has(e)}getOptions(e=w){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);a===o&&s.resolve(r)}return r}onInit(e,n){var a;const r=this.normalizeInstanceIdentifier(n),i=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(!!a)for(const r of a)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:gt(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=w){return this.component?this.component.multipleInstances?e:w:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gt(t){return t===w?void 0:t}function bt(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const It={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},wt=d.INFO,Et={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},vt=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),r=Et[e];if(r)console[r](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _e{constructor(e){this.name=e,this._logLevel=wt,this._logHandler=vt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?It[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}const _t=(t,e)=>e.some(n=>t instanceof n);let re,ae;function At(){return re||(re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function St(){return ae||(ae=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ae=new WeakMap,U=new WeakMap,Se=new WeakMap,L=new WeakMap,Y=new WeakMap;function Tt(t){const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(b(t.result)),r()},s=()=>{a(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Ae.set(n,t)}).catch(()=>{}),Y.set(e,t),e}function Ct(t){if(U.has(t))return;const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),r()},s=()=>{a(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});U.set(t,e)}let q={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return U.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Se.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dt(t){q=t(q)}function Ot(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(F(this),e,...n);return Se.set(a,e.sort?e.sort():[e]),b(a)}:St().includes(t)?function(...e){return t.apply(F(this),e),b(Ae.get(this))}:function(...e){return b(t.apply(F(this),e))}}function Rt(t){return typeof t=="function"?Ot(t):(t instanceof IDBTransaction&&Ct(t),_t(t,At())?new Proxy(t,q):t)}function b(t){if(t instanceof IDBRequest)return Tt(t);if(L.has(t))return L.get(t);const e=Rt(t);return e!==t&&(L.set(t,e),Y.set(e,t)),e}const F=t=>Y.get(t);function Te(t,e,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const s=indexedDB.open(t,e),o=b(s);return a&&s.addEventListener("upgradeneeded",c=>{a(b(s.result),c.oldVersion,c.newVersion,b(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const Mt=["get","getKey","getAll","getAllKeys","count"],Bt=["put","add","delete","clear"],x=new Map;function ie(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(x.get(e))return x.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,r=Bt.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||Mt.includes(n)))return;const i=async function(s,...o){const c=this.transaction(s,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return x.set(e,i),i}Dt(t=>({...t,get:(e,n,a)=>ie(e,n)||t.get(e,n,a),has:(e,n)=>!!ie(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kt(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function kt(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const W="@firebase/app",se="0.7.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new _e("@firebase/app"),Nt="@firebase/app-compat",Pt="@firebase/analytics-compat",Lt="@firebase/analytics",Ft="@firebase/app-check-compat",xt="@firebase/app-check",jt="@firebase/auth",Ht="@firebase/auth-compat",Vt="@firebase/database",zt="@firebase/database-compat",Ut="@firebase/functions",qt="@firebase/functions-compat",Wt="@firebase/installations",Gt="@firebase/installations-compat",Kt="@firebase/messaging",Yt="@firebase/messaging-compat",Jt="@firebase/performance",Xt="@firebase/performance-compat",Zt="@firebase/remote-config",Qt="@firebase/remote-config-compat",en="@firebase/storage",tn="@firebase/storage-compat",nn="@firebase/firestore",rn="@firebase/firestore-compat",an="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]",sn={[W]:"fire-core",[Nt]:"fire-core-compat",[Lt]:"fire-analytics",[Pt]:"fire-analytics-compat",[xt]:"fire-app-check",[Ft]:"fire-app-check-compat",[jt]:"fire-auth",[Ht]:"fire-auth-compat",[Vt]:"fire-rtdb",[zt]:"fire-rtdb-compat",[Ut]:"fire-fn",[qt]:"fire-fn-compat",[Wt]:"fire-iid",[Gt]:"fire-iid-compat",[Kt]:"fire-fcm",[Yt]:"fire-fcm-compat",[Jt]:"fire-perf",[Xt]:"fire-perf-compat",[Zt]:"fire-rc",[Qt]:"fire-rc-compat",[en]:"fire-gcs",[tn]:"fire-gcs-compat",[nn]:"fire-fst",[rn]:"fire-fst-compat","fire-js":"fire-js",[an]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new Map,G=new Map;function on(t,e){try{t.container.addComponent(e)}catch(n){J.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function v(t){const e=t.name;if(G.has(e))return J.debug(`There were multiple attempts to register component ${e}.`),!1;G.set(e,t);for(const n of R.values())on(n,t);return!0}function k(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},_=new $("app","Firebase",cn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new I("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}function dn(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ce,automaticDataCollectionEnabled:!1},e),a=n.name;if(typeof a!="string"||!a)throw _.create("bad-app-name",{appName:String(a)});const r=R.get(a);if(r){if(O(t,r.options)&&O(n,r.config))return r;throw _.create("duplicate-app",{appName:a})}const i=new yt(a);for(const o of G.values())i.addComponent(o);const s=new ln(t,n,i);return R.set(a,s),s}function un(t=Ce){const e=R.get(t);if(!e)throw _.create("no-app",{appName:t});return e}function y(t,e,n){var a;let r=(a=sn[t])!==null&&a!==void 0?a:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),J.warn(o.join(" "));return}v(new I(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="firebase-heartbeat-database",fn=1,C="firebase-heartbeat-store";let j=null;function De(){return j||(j=Te(hn,fn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(C)}}}).catch(t=>{throw _.create("storage-open",{originalErrorMessage:t.message})})),j}async function pn(t){var e;try{return(await De()).transaction(C).objectStore(C).get(Oe(t))}catch(n){throw _.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function oe(t,e){var n;try{const r=(await De()).transaction(C,"readwrite");return await r.objectStore(C).put(e,Oe(t)),r.done}catch(a){throw _.create("storage-set",{originalErrorMessage:(n=a)===null||n===void 0?void 0:n.message})}}function Oe(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=1024,gn=30*24*60*60*1e3;class bn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new In(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ce();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=gn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ce(),{heartbeatsToSend:n,unsentEntries:a}=yn(this._heartbeatsCache.heartbeats),r=Ie(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ce(){return new Date().toISOString().substring(0,10)}function yn(t,e=mn){const n=[];let a=t.slice();for(const r of t){const i=n.find(s=>s.agent===r.agent);if(i){if(i.dates.push(r.date),le(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),le(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class In{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return we()?Ee().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pn(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function le(t){return Ie(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){v(new I("platform-logger",e=>new $t(e),"PRIVATE")),v(new I("heartbeat",e=>new bn(e),"PRIVATE")),y(W,se,t),y(W,se,"esm2017"),y("fire-js","")}wn("");const Re="@firebase/installations",X="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=1e4,Be=`w:${X}`,$e="FIS_v2",En="https://firebaseinstallations.googleapis.com/v1",vn=60*60*1e3,_n="installations",An="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},A=new $(_n,An,Sn);function ke(t){return t instanceof D&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne({projectId:t}){return`${En}/projects/${t}/installations`}function Pe(t){return{token:t.token,requestStatus:2,expiresIn:Cn(t.expiresIn),creationTime:Date.now()}}async function Le(t,e){const a=(await e.json()).error;return A.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Fe({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Tn(t,{refreshToken:e}){const n=Fe(t);return n.append("Authorization",Dn(e)),n}async function xe(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Cn(t){return Number(t.replace("s","000"))}function Dn(t){return`${$e} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const a=Ne(t),r=Fe(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={fid:n,authVersion:$e,appId:t.appId,sdkVersion:Be},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await xe(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Pe(l.authToken)}}else throw await Le("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=/^[cdef][\w-]{21}$/,K="";function Bn(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$n(t);return Mn.test(n)?n:K}catch{return K}}function $n(t){return Rn(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Map;function Ve(t,e){const n=N(t);ze(n,e),kn(n,e)}function ze(t,e){const n=He.get(t);if(!!n)for(const a of n)a(e)}function kn(t,e){const n=Nn();n&&n.postMessage({key:t,fid:e}),Pn()}let E=null;function Nn(){return!E&&"BroadcastChannel"in self&&(E=new BroadcastChannel("[Firebase] FID Change"),E.onmessage=t=>{ze(t.data.key,t.data.fid)}),E}function Pn(){He.size===0&&E&&(E.close(),E=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="firebase-installations-database",Fn=1,S="firebase-installations-store";let H=null;function Z(){return H||(H=Te(Ln,Fn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(S)}}})),H}async function M(t,e){const n=N(t),r=(await Z()).transaction(S,"readwrite"),i=r.objectStore(S),s=await i.get(n);return await i.put(e,n),await r.done,(!s||s.fid!==e.fid)&&Ve(t,e.fid),e}async function Ue(t){const e=N(t),a=(await Z()).transaction(S,"readwrite");await a.objectStore(S).delete(e),await a.done}async function P(t,e){const n=N(t),r=(await Z()).transaction(S,"readwrite"),i=r.objectStore(S),s=await i.get(n),o=e(s);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!s||s.fid!==o.fid)&&Ve(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){let e;const n=await P(t.appConfig,a=>{const r=xn(a),i=jn(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===K?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xn(t){const e=t||{fid:Bn(),registrationStatus:0};return qe(e)}function jn(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(A.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=Hn(t,n);return{installationEntry:n,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Vn(t)}:{installationEntry:e}}async function Hn(t,e){try{const n=await On(t,e);return M(t.appConfig,n)}catch(n){throw ke(n)&&n.customData.serverCode===409?await Ue(t.appConfig):await M(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Vn(t){let e=await de(t.appConfig);for(;e.registrationStatus===1;)await je(100),e=await de(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await Q(t);return a||n}return e}function de(t){return P(t,e=>{if(!e)throw A.create("installation-not-found");return qe(e)})}function qe(t){return zn(t)?{fid:t.fid,registrationStatus:0}:t}function zn(t){return t.registrationStatus===1&&t.registrationTime+Me<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un({appConfig:t,heartbeatServiceProvider:e},n){const a=qn(t,n),r=Tn(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={installation:{sdkVersion:Be,appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await xe(()=>fetch(a,o));if(c.ok){const l=await c.json();return Pe(l)}else throw await Le("Generate Auth Token",c)}function qn(t,{fid:e}){return`${Ne(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e=!1){let n;const a=await P(t.appConfig,i=>{if(!We(i))throw A.create("not-registered");const s=i.authToken;if(!e&&Kn(s))return i;if(s.requestStatus===1)return n=Wn(t,e),i;{if(!navigator.onLine)throw A.create("app-offline");const o=Jn(i);return n=Gn(t,o),o}});return n?await n:a.authToken}async function Wn(t,e){let n=await ue(t.appConfig);for(;n.authToken.requestStatus===1;)await je(100),n=await ue(t.appConfig);const a=n.authToken;return a.requestStatus===0?ee(t,e):a}function ue(t){return P(t,e=>{if(!We(e))throw A.create("not-registered");const n=e.authToken;return Xn(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Gn(t,e){try{const n=await Un(t,e),a=Object.assign(Object.assign({},e),{authToken:n});return await M(t.appConfig,a),n}catch(n){if(ke(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ue(t.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await M(t.appConfig,a)}throw n}}function We(t){return t!==void 0&&t.registrationStatus===2}function Kn(t){return t.requestStatus===2&&!Yn(t)}function Yn(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vn}function Jn(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Xn(t){return t.requestStatus===1&&t.requestTime+Me<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t){const e=t,{installationEntry:n,registrationPromise:a}=await Q(e);return a?a.catch(console.error):ee(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e=!1){const n=t;return await er(n),(await ee(n,e)).token}async function er(t){const{registrationPromise:e}=await Q(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){if(!t||!t.options)throw V("App Configuration");if(!t.name)throw V("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw V(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function V(t){return A.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="installations",nr="installations-internal",rr=t=>{const e=t.getProvider("app").getImmediate(),n=tr(e),a=k(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ar=t=>{const e=t.getProvider("app").getImmediate(),n=k(e,Ge).getImmediate();return{getId:()=>Zn(n),getToken:r=>Qn(n,r)}};function ir(){v(new I(Ge,rr,"PUBLIC")),v(new I(nr,ar,"PRIVATE"))}ir();y(Re,X);y(Re,X,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="analytics",sr="firebase_id",or="origin",cr=60*1e3,lr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ke="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new _e("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function dr(t,e){const n=document.createElement("script");n.src=`${Ke}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function ur(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hr(t,e,n,a,r,i){const s=a[r];try{if(s)await e[s];else{const c=(await Ye(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(o){p.error(o)}t("config",r,i)}async function fr(t,e,n,a,r){try{let i=[];if(r&&r.send_to){let s=r.send_to;Array.isArray(s)||(s=[s]);const o=await Ye(n);for(const c of s){const l=o.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",a,r||{})}catch(i){p.error(i)}}function pr(t,e,n,a){async function r(i,s,o){try{i==="event"?await fr(t,e,n,s,o):i==="config"?await hr(t,e,n,a,s,o):i==="consent"?t("consent","update",o):t("set",s)}catch(c){p.error(c)}}return r}function mr(t,e,n,a,r){let i=function(...s){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=pr(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function gr(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ke))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},g=new $("analytics","Analytics",br);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=30,Ir=1e3;class wr{constructor(e={},n=Ir){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Je=new wr;function Er(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vr(t){var e;const{appId:n,apiKey:a}=t,r={method:"GET",headers:Er(a)},i=lr.replace("{app-id}",n),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw g.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function _r(t,e=Je,n){const{appId:a,apiKey:r,measurementId:i}=t.options;if(!a)throw g.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw g.create("no-api-key")}const s=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Tr;return setTimeout(async()=>{o.abort()},n!==void 0?n:cr),Xe({appId:a,apiKey:r,measurementId:i},s,o,e)}async function Xe(t,{throttleEndTimeMillis:e,backoffCount:n},a,r=Je){var i,s;const{appId:o,measurementId:c}=t;try{await Ar(a,e)}catch(l){if(c)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:o,measurementId:c};throw l}try{const l=await vr(t);return r.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Sr(u)){if(r.deleteThrottleMetadata(o),c)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ne(n,r.intervalMillis,yr):ne(n,r.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(o,m),p.debug(`Calling attemptFetch again in ${h} millis`),Xe(t,m,a,r)}}function Ar(t,e){return new Promise((n,a)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),a(g.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Sr(t){if(!(t instanceof D)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Tr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Cr(t,e,n,a,r){if(r&&r.global){t("event",n,a);return}else{const i=await e,s=Object.assign(Object.assign({},a),{send_to:i});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(){var t;if(we())try{await Ee()}catch(e){return p.warn(g.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return p.warn(g.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Or(t,e,n,a,r,i,s){var o;const c=_r(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>p.error(f)),e.push(c);const l=Dr().then(f=>{if(f)return a.getId()}),[u,h]=await Promise.all([c,l]);gr()||dr(i,u.measurementId),r("js",new Date);const m=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return m[or]="firebase",m.update=!0,h!=null&&(m[sr]=h),r("config",u.measurementId,m),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.app=e}_delete(){return delete T[this.app.options.appId],Promise.resolve()}}let T={},he=[];const fe={};let z="dataLayer",Mr="gtag",pe,Ze,me=!1;function Br(){const t=[];if(st()&&t.push("This is a browser extension environment."),ot()||t.push("Cookies are not available."),t.length>0){const e=t.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=g.create("invalid-analytics-context",{errorInfo:e});p.warn(n.message)}}function $r(t,e,n){Br();const a=t.options.appId;if(!a)throw g.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw g.create("no-api-key");if(T[a]!=null)throw g.create("already-exists",{id:a});if(!me){ur(z);const{wrappedGtag:i,gtagCore:s}=mr(T,he,fe,z,Mr);Ze=i,pe=s,me=!0}return T[a]=Or(t,he,fe,e,pe,z,n),new Rr(t)}function kr(t=un()){t=ve(t);const e=k(t,B);return e.isInitialized()?e.getImmediate():Nr(t)}function Nr(t,e={}){const n=k(t,B);if(n.isInitialized()){const r=n.getImmediate();if(O(e,n.getOptions()))return r;throw g.create("already-initialized")}return n.initialize({options:e})}function Qe(t,e,n,a){t=ve(t),Cr(Ze,T[t.app.options.appId],e,n,a).catch(r=>p.error(r))}const ge="@firebase/analytics",be="0.8.0";function Pr(){v(new I(B,(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return $r(a,r,n)},"PUBLIC")),v(new I("analytics-internal",t,"PRIVATE")),y(ge,be),y(ge,be,"esm2017");function t(e){try{const n=e.getProvider(B).getImmediate();return{logEvent:(a,r,i)=>Qe(n,a,r,i)}}catch(n){throw g.create("interop-component-reg-failed",{reason:n})}}}Pr();var Lr="firebase",Fr="9.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */y(Lr,Fr,"app");const xr={apiKey:"AIzaSyCHYDuvnZgZr_01oafhmpupIJA6OItXGtU",authDomain:"creative-test-with-js.firebaseapp.com",projectId:"creative-test-with-js",storageBucket:"creative-test-with-js.appspot.com",messagingSenderId:"995213716844",appId:"1:995213716844:web:e694c0dd4c237805cd9749",measurementId:"G-BH1GR0FGQQ"},jr=dn(xr),Hr=kr(jr);function Vr(t){t.addEventListener("click",()=>{Qe(Hr,"click_interactive-2"),console.log("hi!")})}document.querySelector("#app").innerHTML=`
  <div>
   <button id="click-interactive">Click!</button>
  </div>
`;Vr(document.querySelector("#click-interactive"));
