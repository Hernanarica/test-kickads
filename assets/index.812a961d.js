const Xo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Xo();/**
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
 */const Qi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Qo=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,l=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|h>>6,T=h&63;c||(T=64,o||(p=64)),s.push(n[l],n[d],n[p],n[T])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Qo(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||h==null||d==null)throw Error();const p=r<<2|a>>4;if(s.push(p),h!==64){const T=a<<4&240|h>>2;if(s.push(T),d!==64){const w=h<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Jo=function(e){const t=Qi(e);return Yo.encodeByteArray(t,!0)},Yi=function(e){return Jo(e).replace(/\./g,"")};/**
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
 */class Zo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function rn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ta(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function ea(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function na(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sa(){return rn().indexOf("Electron/")>=0}function ia(){const e=rn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ra(){return rn().indexOf("MSAppHost/")>=0}function oa(){return typeof indexedDB=="object"}function aa(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const ca="FirebaseError";class on extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=ca,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?ha(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,s)}}function ha(e,t){return e.replace(la,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const la=/\{\$([^}]+)}/g;function zn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(si(r)&&si(o)){if(!zn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function si(e){return e!==null&&typeof e=="object"}/**
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
 */function Tt(e){return e&&e._delegate?e._delegate:e}class se{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const mt="[DEFAULT]";/**
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
 */class ua{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Zo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(da(t))try{this.getOrInitializeService({instanceIdentifier:mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mt){return this.instances.has(t)}getOptions(t=mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fa(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=mt){return this.component?this.component.multipleInstances?t:mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fa(e){return e===mt?void 0:e}function da(e){return e.instantiationMode==="EAGER"}/**
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
 */class pa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ua(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const ga={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},ma=A.INFO,ya={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},va=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=ya[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zi{constructor(t){this.name=t,this._logLevel=ma,this._logHandler=va,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ga[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const wa=(e,t)=>t.some(n=>e instanceof n);let ii,ri;function Ea(){return ii||(ii=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ta(){return ri||(ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tr=new WeakMap,Wn=new WeakMap,er=new WeakMap,xn=new WeakMap,ps=new WeakMap;function Ia(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(ut(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&tr.set(n,e)}).catch(()=>{}),ps.set(t,e),t}function ba(e){if(Wn.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Wn.set(e,t)}let Xn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||er.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Aa(e){Xn=e(Xn)}function Sa(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ln(this),t,...n);return er.set(s,t.sort?t.sort():[t]),ut(s)}:Ta().includes(e)?function(...t){return e.apply(Ln(this),t),ut(tr.get(this))}:function(...t){return ut(e.apply(Ln(this),t))}}function Ca(e){return typeof e=="function"?Sa(e):(e instanceof IDBTransaction&&ba(e),wa(e,Ea())?new Proxy(e,Xn):e)}function ut(e){if(e instanceof IDBRequest)return Ia(e);if(xn.has(e))return xn.get(e);const t=Ca(e);return t!==e&&(xn.set(e,t),ps.set(t,e)),t}const Ln=e=>ps.get(e);function Da(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=ut(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ut(o.result),c.oldVersion,c.newVersion,ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Na=["get","getKey","getAll","getAllKeys","count"],ka=["put","add","delete","clear"],Mn=new Map;function oi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Mn.get(t))return Mn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=ka.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Na.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&c.done]))[0]};return Mn.set(t,r),r}Aa(e=>({...e,get:(t,n,s)=>oi(t,n)||e.get(t,n,s),has:(t,n)=>!!oi(t,n)||e.has(t,n)}));/**
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
 */class _a{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oa(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Oa(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qn="@firebase/app",ai="0.7.28";/**
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
 */const gs=new Zi("@firebase/app"),Ra="@firebase/app-compat",xa="@firebase/analytics-compat",La="@firebase/analytics",Ma="@firebase/app-check-compat",Pa="@firebase/app-check",Fa="@firebase/auth",Va="@firebase/auth-compat",Ba="@firebase/database",Ua="@firebase/database-compat",$a="@firebase/functions",ja="@firebase/functions-compat",Ha="@firebase/installations",Ka="@firebase/installations-compat",qa="@firebase/messaging",Ga="@firebase/messaging-compat",za="@firebase/performance",Wa="@firebase/performance-compat",Xa="@firebase/remote-config",Qa="@firebase/remote-config-compat",Ya="@firebase/storage",Ja="@firebase/storage-compat",Za="@firebase/firestore",tc="@firebase/firestore-compat",ec="firebase",nc="9.9.0";/**
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
 */const nr="[DEFAULT]",sc={[Qn]:"fire-core",[Ra]:"fire-core-compat",[La]:"fire-analytics",[xa]:"fire-analytics-compat",[Pa]:"fire-app-check",[Ma]:"fire-app-check-compat",[Fa]:"fire-auth",[Va]:"fire-auth-compat",[Ba]:"fire-rtdb",[Ua]:"fire-rtdb-compat",[$a]:"fire-fn",[ja]:"fire-fn-compat",[Ha]:"fire-iid",[Ka]:"fire-iid-compat",[qa]:"fire-fcm",[Ga]:"fire-fcm-compat",[za]:"fire-perf",[Wa]:"fire-perf-compat",[Xa]:"fire-rc",[Qa]:"fire-rc-compat",[Ya]:"fire-gcs",[Ja]:"fire-gcs-compat",[Za]:"fire-fst",[tc]:"fire-fst-compat","fire-js":"fire-js",[ec]:"fire-js-all"};/**
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
 */const Ue=new Map,Yn=new Map;function ic(e,t){try{e.container.addComponent(t)}catch(n){gs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $e(e){const t=e.name;if(Yn.has(t))return gs.debug(`There were multiple attempts to register component ${t}.`),!1;Yn.set(t,e);for(const n of Ue.values())ic(n,e);return!0}function rc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const oc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},It=new Ji("app","Firebase",oc);/**
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
 */class ac{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new se("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const cc=nc;function hc(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:nr,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});const i=Ue.get(s);if(i){if(zn(e,i.options)&&zn(n,i.config))return i;throw It.create("duplicate-app",{appName:s})}const r=new pa(s);for(const a of Yn.values())r.addComponent(a);const o=new ac(e,n,r);return Ue.set(s,o),o}function lc(e=nr){const t=Ue.get(e);if(!t)throw It.create("no-app",{appName:e});return t}function Rt(e,t,n){var s;let i=(s=sc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gs.warn(a.join(" "));return}$e(new se(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const uc="firebase-heartbeat-database",fc=1,ie="firebase-heartbeat-store";let Pn=null;function sr(){return Pn||(Pn=Da(uc,fc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ie)}}}).catch(e=>{throw It.create("storage-open",{originalErrorMessage:e.message})})),Pn}async function dc(e){var t;try{return(await sr()).transaction(ie).objectStore(ie).get(ir(e))}catch(n){throw It.create("storage-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}async function ci(e,t){var n;try{const i=(await sr()).transaction(ie,"readwrite");return await i.objectStore(ie).put(t,ir(e)),i.done}catch(s){throw It.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function ir(e){return`${e.name}!${e.options.appId}`}/**
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
 */const pc=1024,gc=30*24*60*60*1e3;class mc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=gc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hi(),{heartbeatsToSend:n,unsentEntries:s}=yc(this._heartbeatsCache.heartbeats),i=Yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hi(){return new Date().toISOString().substring(0,10)}function yc(e,t=pc){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),li(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),li(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oa()?aa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function li(e){return Yi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function wc(e){$e(new se("platform-logger",t=>new _a(t),"PRIVATE")),$e(new se("heartbeat",t=>new mc(t),"PRIVATE")),Rt(Qn,ai,e),Rt(Qn,ai,"esm2017"),Rt("fire-js","")}wc("");var Ec="firebase",Tc="9.9.0";/**
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
 */Rt(Ec,Tc,"app");var Ic=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,ms=ms||{},y=Ic||self;function je(){}function Jn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ee(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function bc(e){return Object.prototype.hasOwnProperty.call(e,Fn)&&e[Fn]||(e[Fn]=++Ac)}var Fn="closure_uid_"+(1e9*Math.random()>>>0),Ac=0;function Sc(e,t,n){return e.call.apply(e.bind,arguments)}function Cc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function B(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?B=Sc:B=Cc,B.apply(null,arguments)}function Oe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function $(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function pt(){this.s=this.s,this.o=this.o}var Dc=0;pt.prototype.s=!1;pt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Dc!=0)&&bc(this)};pt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},or=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Nc(e){t:{var t=wh;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function ui(e){return Array.prototype.concat.apply([],arguments)}function ys(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function He(e){return/^[\s\xa0]*$/.test(e)}var fi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function q(e,t){return e.indexOf(t)!=-1}function Vn(e,t){return e<t?-1:e>t?1:0}var G;t:{var di=y.navigator;if(di){var pi=di.userAgent;if(pi){G=pi;break t}}G=""}function vs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ar(e){const t={};for(const n in e)t[n]=e[n];return t}var gi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<gi.length;r++)n=gi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ws(e){return ws[" "](e),e}ws[" "]=je;function kc(e){var t=Rc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var _c=q(G,"Opera"),Mt=q(G,"Trident")||q(G,"MSIE"),hr=q(G,"Edge"),Zn=hr||Mt,lr=q(G,"Gecko")&&!(q(G.toLowerCase(),"webkit")&&!q(G,"Edge"))&&!(q(G,"Trident")||q(G,"MSIE"))&&!q(G,"Edge"),Oc=q(G.toLowerCase(),"webkit")&&!q(G,"Edge");function ur(){var e=y.document;return e?e.documentMode:void 0}var Ke;t:{var Bn="",Un=function(){var e=G;if(lr)return/rv:([^\);]+)(\)|;)/.exec(e);if(hr)return/Edge\/([\d\.]+)/.exec(e);if(Mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Oc)return/WebKit\/(\S+)/.exec(e);if(_c)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Un&&(Bn=Un?Un[1]:""),Mt){var $n=ur();if($n!=null&&$n>parseFloat(Bn)){Ke=String($n);break t}}Ke=Bn}var Rc={};function xc(){return kc(function(){let e=0;const t=fi(String(Ke)).split("."),n=fi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Vn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Vn(i[2].length==0,r[2].length==0)||Vn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var ts;if(y.document&&Mt){var mi=ur();ts=mi||parseInt(Ke,10)||void 0}else ts=void 0;var Lc=ts,Mc=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",je,t),y.removeEventListener("test",je,t)}catch{}return e}();function K(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};function re(e,t){if(K.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(lr){t:{try{ws(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Pc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&re.Z.h.call(this)}}$(re,K);var Pc={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),Fc=0;function Vc(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Fc,this.ca=this.fa=!1}function an(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function cn(e){this.src=e,this.g={},this.h=0}cn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ns(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Vc(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function es(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=rr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(an(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ns(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),jn={};function fr(e,t,n,s,i){if(s&&s.once)return pr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)fr(e,t[r],n,s,i);return null}return n=bs(n),e&&e[Te]?e.N(t,n,Ee(s)?!!s.capture:!!s,i):dr(e,t,n,!1,s,i)}function dr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Ee(i)?!!i.capture:!!i,a=Is(e);if(a||(e[Es]=a=new cn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Bc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Mc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(mr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Bc(){function e(n){return t.call(e.src,e.listener,n)}var t=Uc;return e}function pr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)pr(e,t[r],n,s,i);return null}return n=bs(n),e&&e[Te]?e.O(t,n,Ee(s)?!!s.capture:!!s,i):dr(e,t,n,!0,s,i)}function gr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)gr(e,t[r],n,s,i);else s=Ee(s)?!!s.capture:!!s,n=bs(n),e&&e[Te]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ns(r,n,s,i),-1<n&&(an(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Is(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ns(t,n,s,i)),(n=-1<e?t[e]:null)&&Ts(n))}function Ts(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Te])es(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(mr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Is(t))?(es(n,e),n.h==0&&(n.src=null,t[Es]=null)):an(e)}}}function mr(e){return e in jn?jn[e]:jn[e]="on"+e}function Uc(e,t){if(e.ca)e=!0;else{t=new re(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ts(e),e=n.call(s,t)}return e}function Is(e){return e=e[Es],e instanceof cn?e:null}var Hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(e){return typeof e=="function"?e:(e[Hn]||(e[Hn]=function(t){return e.handleEvent(t)}),e[Hn])}function P(){pt.call(this),this.i=new cn(this),this.P=this,this.I=null}$(P,pt);P.prototype[Te]=!0;P.prototype.removeEventListener=function(e,t,n,s){gr(this,e,t,n,s)};function U(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new K(t,e);else if(t instanceof K)t.target=t.target||e;else{var i=t;t=new K(s,e),cr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Re(o,s,!0,t)&&i}if(o=t.g=e,i=Re(o,s,!0,t)&&i,i=Re(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Re(o,s,!1,t)&&i}P.prototype.M=function(){if(P.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)an(n[s]);delete e.g[t],e.h--}}this.I=null};P.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};P.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Re(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&es(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var As=y.JSON.stringify;function $c(){var e=vr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class jc{constructor(){this.h=this.g=null}add(t,n){const s=yr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var yr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Hc,e=>e.reset());class Hc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kc(e){y.setTimeout(()=>{throw e},0)}function Ss(e,t){ss||qc(),is||(ss(),is=!0),vr.add(e,t)}var ss;function qc(){var e=y.Promise.resolve(void 0);ss=function(){e.then(Gc)}}var is=!1,vr=new jc;function Gc(){for(var e;e=$c();){try{e.h.call(e.g)}catch(n){Kc(n)}var t=yr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}is=!1}function hn(e,t){P.call(this),this.h=e||1,this.g=t||y,this.j=B(this.kb,this),this.l=Date.now()}$(hn,P);g=hn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),U(this,"tick"),this.da&&(Cs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){hn.Z.M.call(this),Cs(this),delete this.g};function Ds(e,t,n){if(typeof e=="function")n&&(e=B(e,n));else if(e&&typeof e.handleEvent=="function")e=B(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function wr(e){e.g=Ds(()=>{e.g=null,e.i&&(e.i=!1,wr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zc extends pt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wr(this)}M(){super.M(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){pt.call(this),this.h=e,this.g={}}$(oe,pt);var yi=[];function Er(e,t,n,s){Array.isArray(n)||(n&&(yi[0]=n.toString()),n=yi);for(var i=0;i<n.length;i++){var r=fr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Tr(e){vs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ts(t)},e),e.g={}}oe.prototype.M=function(){oe.Z.M.call(this),Tr(this)};oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ln(){this.g=!0}ln.prototype.Aa=function(){this.g=!1};function Wc(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var l=h[0];h=h[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Xc(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function _t(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Yc(e,n)+(s?" "+s:"")})}function Qc(e,t){e.info(function(){return"TIMEOUT: "+t})}ln.prototype.info=function(){};function Yc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return As(n)}catch{return t}}var Nt={},vi=null;function un(){return vi=vi||new P}Nt.Ma="serverreachability";function Ir(e){K.call(this,Nt.Ma,e)}$(Ir,K);function ae(e){const t=un();U(t,new Ir(t))}Nt.STAT_EVENT="statevent";function br(e,t){K.call(this,Nt.STAT_EVENT,e),this.stat=t}$(br,K);function W(e){const t=un();U(t,new br(t,e))}Nt.Na="timingevent";function Ar(e,t){K.call(this,Nt.Na,e),this.size=t}$(Ar,K);function Ie(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var fn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Sr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ns(){}Ns.prototype.h=null;function wi(e){return e.h||(e.h=e.i())}function Cr(){}var be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ks(){K.call(this,"d")}$(ks,K);function _s(){K.call(this,"c")}$(_s,K);var rs;function dn(){}$(dn,Ns);dn.prototype.g=function(){return new XMLHttpRequest};dn.prototype.i=function(){return{}};rs=new dn;function Ae(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new oe(this),this.P=Jc,e=Zn?125:void 0,this.W=new hn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Dr}function Dr(){this.i=null,this.g="",this.h=!1}var Jc=45e3,os={},qe={};g=Ae.prototype;g.setTimeout=function(e){this.P=e};function as(e,t,n){e.K=1,e.v=gn(ht(t)),e.s=n,e.U=!0,Nr(e,null)}function Nr(e,t){e.F=Date.now(),Se(e),e.A=ht(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Mr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Dr,e.g=eo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new zc(B(e.Ia,e,e.g),e.O)),Er(e.V,e.g,"readystatechange",e.gb),t=e.H?ar(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ae(),Wc(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const l=ot(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>l)&&(l!=3||Zn||this.g&&(this.h.h||this.g.ga()||bi(this.g)))){this.I||l!=4||t==7||(t==8||0>=d?ae(3):ae(2)),pn(this);var n=this.g.ba();this.N=n;e:if(kr(this)){var s=bi(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){yt(this),Yt(this);var o="";break e}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Xc(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!He(a)){var h=a;break e}}h=null}if(n=h)_t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cs(this,n);else{this.i=!1,this.o=3,W(12),yt(this),Yt(this);break t}}this.U?(_r(this,l,o),Zn&&this.i&&l==3&&(Er(this.V,this.W,"tick",this.fb),this.W.start())):(_t(this.j,this.m,o,null),cs(this,o)),l==4&&yt(this),this.i&&!this.I&&(l==4?Yr(this.l,this):(this.i=!1,Se(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,W(12)):(this.o=0,W(13)),yt(this),Yt(this)}}}catch{}finally{}};function kr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function _r(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Zc(e,n),i==qe){t==4&&(e.o=4,W(14),s=!1),_t(e.j,e.m,null,"[Incomplete Response]");break}else if(i==os){e.o=4,W(15),_t(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else _t(e.j,e.m,i,null),cs(e,i);kr(e)&&i!=qe&&i!=os&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,W(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bs(t),t.L=!0,W(11))):(_t(e.j,e.m,n,"[Invalid Chunked Response]"),yt(e),Yt(e))}g.fb=function(){if(this.g){var e=ot(this.g),t=this.g.ga();this.C<t.length&&(pn(this),_r(this,e,t),this.i&&e!=4&&Se(this))}};function Zc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?qe:(n=Number(t.substring(n,s)),isNaN(n)?os:(s+=1,s+n>t.length?qe:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,yt(this)};function Se(e){e.Y=Date.now()+e.P,Or(e,e.P)}function Or(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ie(B(e.eb,e),t)}function pn(e){e.B&&(y.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qc(this.j,this.A),this.K!=2&&(ae(),W(17)),yt(this),this.o=2,Yt(this)):Or(this,this.Y-e)};function Yt(e){e.l.G==0||e.I||Yr(e.l,e)}function yt(e){pn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Cs(e.W),Tr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function cs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||hs(n.i,e))){if(n.I=e.N,!e.J&&hs(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Xe(n),vn(n);else break t;Vs(n),W(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ie(B(n.ab,n),6e3));if(1>=Vr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else vt(n,11)}else if((e.J||n.g==e)&&Xe(n),!He(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const l=h[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const d=h[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const T=e.g;if(T){const w=T.g?T.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.i;!r.g&&(q(w,"spdy")||q(w,"quic")||q(w,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(xs(r,r.h),r.h=null))}if(s.D){const N=T.g?T.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,D(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=to(s,s.H?s.la:null,s.W),o.J){Br(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(pn(a),Se(a)),s.g=o}else Xr(s);0<n.l.length&&wn(n)}else h[0]!="stop"&&h[0]!="close"||vt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?vt(n,7):Fs(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}ae(4)}catch{}}function th(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Jn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Os(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jn(e)||typeof e=="string")or(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Jn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=th(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Ut(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Ut)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Ut.prototype;g.R=function(){Rs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Rs(this),this.g.concat()};function Rs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];bt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],bt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return bt(this.h,e)?this.h[e]:t};g.set=function(e,t){bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Rr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function eh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function At(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof At){this.g=t!==void 0?t:e.g,Ge(this,e.j),this.s=e.s,ze(this,e.i),We(this,e.m),this.l=e.l,t=e.h;var n=new ce;n.i=t.i,t.g&&(n.g=new Ut(t.g),n.h=t.h),Ei(this,n),this.o=e.o}else e&&(n=String(e).match(Rr))?(this.g=!!t,Ge(this,n[1]||"",!0),this.s=Jt(n[2]||""),ze(this,n[3]||"",!0),We(this,n[4]),this.l=Jt(n[5]||"",!0),Ei(this,n[6]||"",!0),this.o=Jt(n[7]||"")):(this.g=!!t,this.h=new ce(null,this.g))}At.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,Ti,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Qt(t,Ti,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Qt(n,n.charAt(0)=="/"?oh:rh,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,ch)),e.join("")};function ht(e){return new At(e)}function Ge(e,t,n){e.j=n?Jt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ze(e,t,n){e.i=n?Jt(t,!0):t}function We(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ei(e,t,n){t instanceof ce?(e.h=t,hh(e.h,e.g)):(n||(t=Qt(t,ah)),e.h=new ce(t,e.g))}function D(e,t,n){e.h.set(t,n)}function gn(e){return D(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nh(e){return e instanceof At?ht(e):new At(e,void 0)}function sh(e,t,n,s){var i=new At(null,void 0);return e&&Ge(i,e),t&&ze(i,t),n&&We(i,n),s&&(i.l=s),i}function Jt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ih),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ih(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ti=/[#\/\?@]/g,rh=/[#\?:]/g,oh=/[#\?]/g,ah=/[#\?@]/g,ch=/#/g;function ce(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function gt(e){e.g||(e.g=new Ut,e.h=0,e.i&&eh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ce.prototype;g.add=function(e,t){gt(this),this.i=null,e=$t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xr(e,t){gt(e),t=$t(e,t),bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Rs(e)))}function Lr(e,t){return gt(e),t=$t(e,t),bt(e.g.h,t)}g.forEach=function(e,t){gt(this),this.g.forEach(function(n,s){or(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){gt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){gt(this);var t=[];if(typeof e=="string")Lr(this,e)&&(t=ui(t,this.g.get($t(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ui(t,e[n])}return t};g.set=function(e,t){return gt(this),this.i=null,e=$t(this,e),Lr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Mr(e,t,n){xr(e,t),0<n.length&&(e.i=null,e.g.set($t(e,t),ys(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function $t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hh(e,t){t&&!e.j&&(gt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(xr(this,s),Mr(this,i,n))},e)),e.j=t}var lh=class{constructor(e,t){this.h=e,this.g=t}};function Pr(e){this.l=e||uh,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ea&&y.g.Ea()&&y.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uh=10;function Fr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Vr(e){return e.h?1:e.g?e.g.size:0}function hs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function xs(e,t){e.g?e.g.add(t):e.h=t}function Br(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Pr.prototype.cancel=function(){if(this.i=Ur(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ur(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ys(e.i)}function Ls(){}Ls.prototype.stringify=function(e){return y.JSON.stringify(e,void 0)};Ls.prototype.parse=function(e){return y.JSON.parse(e,void 0)};function fh(){this.g=new Ls}function dh(e,t,n){const s=n||"";try{Os(e,function(i,r){let o=i;Ee(i)&&(o=As(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function ph(e,t){const n=new ln;if(y.Image){const s=new Image;s.onload=Oe(xe,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Oe(xe,n,s,"TestLoadImage: error",!1,t),s.onabort=Oe(xe,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Oe(xe,n,s,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function xe(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ce(e){this.l=e.$b||null,this.j=e.ib||!1}$(Ce,Ns);Ce.prototype.g=function(){return new mn(this.l,this.j)};Ce.prototype.i=function(e){return function(){return e}}({});function mn(e,t){P.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ms,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(mn,P);var Ms=0;g=mn.prototype;g.open=function(e,t){if(this.readyState!=Ms)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,he(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,De(this)),this.readyState=Ms};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,he(this)),this.g&&(this.readyState=3,he(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof y.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$r(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function $r(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?De(this):he(this),this.readyState==3&&$r(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,De(this))};g.Ta=function(e){this.g&&(this.response=e,De(this))};g.ha=function(){this.g&&De(this)};function De(e){e.readyState=4,e.l=null,e.j=null,e.A=null,he(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function he(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var gh=y.JSON.parse;function O(e){P.call(this),this.headers=new Ut,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jr,this.K=this.L=!1}$(O,P);var jr="",mh=/^https?$/i,yh=["POST","PUT"];g=O.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rs.g(),this.C=this.u?wi(this.u):wi(rs),this.g.onreadystatechange=B(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ii(this,r);return}e=n||"";const i=new Ut(this.headers);s&&Os(s,function(r,o){i.set(o,r)}),s=Nc(i.T()),n=y.FormData&&e instanceof y.FormData,!(0<=rr(yh,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qr(this),0<this.B&&((this.K=vh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=B(this.pa,this)):this.A=Ds(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ii(this,r)}};function vh(e){return Mt&&xc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function wh(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof ms!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,U(this,"timeout"),this.abort(8))};function Ii(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Hr(e),yn(e)}function Hr(e){e.D||(e.D=!0,U(e,"complete"),U(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,U(this,"complete"),U(this,"abort"),yn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yn(this,!0)),O.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Kr(this):this.cb())};g.cb=function(){Kr(this)};function Kr(e){if(e.h&&typeof ms!="undefined"&&(!e.C[1]||ot(e)!=4||e.ba()!=2)){if(e.v&&ot(e)==4)Ds(e.Fa,0,e);else if(U(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Rr)[1]||null;if(!i&&y.self&&y.self.location){var r=y.self.location.protocol;i=r.substr(0,r.length-1)}s=!mh.test(i?i.toLowerCase():"")}n=s}if(n)U(e,"complete"),U(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Hr(e)}}finally{yn(e)}}}}function yn(e,t){if(e.g){qr(e);const n=e.g,s=e.C[0]?je:null;e.g=null,e.C=null,t||U(e,"ready");try{n.onreadystatechange=s}catch{}}}function qr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),gh(t)}};function bi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case jr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Eh(e){let t="";return vs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ps(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Eh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):D(e,t,n))}function Xt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gr(e){this.za=0,this.l=[],this.h=new ln,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xt("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xt("baseRetryDelayMs",5e3,e),this.$a=Xt("retryDelaySeedMs",1e4,e),this.Ya=Xt("forwardChannelMaxRetries",2,e),this.ra=Xt("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Pr(e&&e.concurrentRequestLimit),this.Ca=new fh,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Gr.prototype;g.ma=8;g.G=1;function Fs(e){if(zr(e),e.G==3){var t=e.V++,n=ht(e.F);D(n,"SID",e.J),D(n,"RID",t),D(n,"TYPE","terminate"),Ne(e,n),t=new Ae(e,e.h,t,void 0),t.K=2,t.v=gn(ht(n)),n=!1,y.navigator&&y.navigator.sendBeacon&&(n=y.navigator.sendBeacon(t.v.toString(),"")),!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=eo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Se(t)}Zr(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function vn(e){e.g&&(Bs(e),e.g.cancel(),e.g=null)}function zr(e){vn(e),e.u&&(y.clearTimeout(e.u),e.u=null),Xe(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function Kn(e,t){e.l.push(new lh(e.Za++,t)),e.G==3&&wn(e)}function wn(e){Fr(e.i)||e.m||(e.m=!0,Ss(e.Ha,e),e.C=0)}function Th(e,t){return Vr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Ie(B(e.Ha,e,t),Jr(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ae(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=ar(r),cr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Wr(this,i,t),n=ht(this.F),D(n,"RID",e),D(n,"CVER",22),this.D&&D(n,"X-HTTP-Session-Id",this.D),Ne(this,n),this.o&&r&&Ps(n,this.o,r),xs(this.i,i),this.Ra&&D(n,"TYPE","init"),this.ja?(D(n,"$req",t),D(n,"SID","null"),i.$=!0,as(i,n,null)):as(i,n,t),this.G=2}}else this.G==3&&(e?Ai(this,e):this.l.length==0||Fr(this.i)||Ai(this))};function Ai(e,t){var n;t?n=t.m:n=e.V++;const s=ht(e.F);D(s,"SID",e.J),D(s,"RID",n),D(s,"AID",e.U),Ne(e,s),e.o&&e.s&&Ps(s,e.o,e.s),n=new Ae(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Wr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),xs(e.i,n),as(n,s,t)}function Ne(e,t){e.j&&Os({},function(n,s){D(t,s,n)})}function Wr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?B(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let h=i[c].h;const l=i[c].g;if(h-=r,0>h)r=Math.max(0,i[c].h-100),a=!1;else try{dh(l,o,"req"+h+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Xr(e){e.g||e.u||(e.Y=1,Ss(e.Ga,e),e.A=0)}function Vs(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Ie(B(e.Ga,e),Jr(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Qr(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ie(B(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,W(10),vn(this),Qr(this))};function Bs(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function Qr(e){e.g=new Ae(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ht(e.oa);D(t,"RID","rpc"),D(t,"SID",e.J),D(t,"CI",e.N?"0":"1"),D(t,"AID",e.U),Ne(e,t),D(t,"TYPE","xmlhttp"),e.o&&e.s&&Ps(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=gn(ht(t)),n.s=null,n.U=!0,Nr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,vn(this),Vs(this),W(19))};function Xe(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function Yr(e,t){var n=null;if(e.g==t){Xe(e),Bs(e),e.g=null;var s=2}else if(hs(e.i,t))n=t.D,Br(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=un(),U(s,new Ar(s,n)),wn(e)}else Xr(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Th(e,t)||s==2&&Vs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:vt(e,5);break;case 4:vt(e,10);break;case 3:vt(e,6);break;default:vt(e,2)}}}function Jr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function vt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=B(e.jb,e);n||(n=new At("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||Ge(n,"https"),gn(n)),ph(n.toString(),s)}else W(2);e.G=0,e.j&&e.j.va(t),Zr(e),zr(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),W(2)):(this.h.info("Failed to ping google.com"),W(1))};function Zr(e){e.G=0,e.I=-1,e.j&&((Ur(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ys(e.l),e.l.length=0),e.j.ua())}function to(e,t,n){let s=nh(n);if(s.i!="")t&&ze(s,t+"."+s.i),We(s,s.m);else{const i=y.location;s=sh(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&vs(e.aa,function(i,r){D(s,r,i)}),t=e.D,n=e.sa,t&&n&&D(s,t,n),D(s,"VER",e.ma),Ne(e,s),s}function eo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new O(new Ce({ib:!0})):new O(e.qa),t.L=e.H,t}function no(){}g=no.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function Qe(){if(Mt&&!(10<=Number(Lc)))throw Error("Environmental error: no available transport.")}Qe.prototype.g=function(e,t){return new Z(e,t)};function Z(e,t){P.call(this),this.g=new Gr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!He(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!He(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new jt(this)}$(Z,P);Z.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ss(B(e.hb,e,t))),W(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=to(e,null,e.W),wn(e)};Z.prototype.close=function(){Fs(this.g)};Z.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Kn(this.g,t)}else this.v?(t={},t.__data__=As(e),Kn(this.g,t)):Kn(this.g,e)};Z.prototype.M=function(){this.g.j=null,delete this.j,Fs(this.g),delete this.g,Z.Z.M.call(this)};function so(e){ks.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(so,ks);function io(){_s.call(this),this.status=1}$(io,_s);function jt(e){this.g=e}$(jt,no);jt.prototype.xa=function(){U(this.g,"a")};jt.prototype.wa=function(e){U(this.g,new so(e))};jt.prototype.va=function(e){U(this.g,new io)};jt.prototype.ua=function(){U(this.g,"b")};Qe.prototype.createWebChannel=Qe.prototype.g;Z.prototype.send=Z.prototype.u;Z.prototype.open=Z.prototype.m;Z.prototype.close=Z.prototype.close;fn.NO_ERROR=0;fn.TIMEOUT=8;fn.HTTP_ERROR=6;Sr.COMPLETE="complete";Cr.EventType=be;be.OPEN="a";be.CLOSE="b";be.ERROR="c";be.MESSAGE="d";P.prototype.listen=P.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.La;O.prototype.getLastErrorCode=O.prototype.Da;O.prototype.getStatus=O.prototype.ba;O.prototype.getResponseJson=O.prototype.Qa;O.prototype.getResponseText=O.prototype.ga;O.prototype.send=O.prototype.ea;var Ih=function(){return new Qe},bh=function(){return un()},qn=fn,Ah=Sr,Sh=Nt,Si={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ch=Ce,Le=Cr,Dh=O;const Ci="@firebase/firestore";/**
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
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
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
 */let Ht="9.9.0";/**
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
 */const St=new Zi("@firebase/firestore");function Di(){return St.logLevel}function m(e,...t){if(St.logLevel<=A.DEBUG){const n=t.map(Us);St.debug(`Firestore (${Ht}): ${e}`,...n)}}function Ct(e,...t){if(St.logLevel<=A.ERROR){const n=t.map(Us);St.error(`Firestore (${Ht}): ${e}`,...n)}}function Ni(e,...t){if(St.logLevel<=A.WARN){const n=t.map(Us);St.warn(`Firestore (${Ht}): ${e}`,...n)}}function Us(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function b(e="Unexpected state"){const t=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: `+e;throw Ct(t),new Error(t)}function x(e,t){e||b()}function C(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends on{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Et{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Nh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class _h{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Et,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Et)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(x(typeof s.accessToken=="string"),new Nh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return x(t===null||typeof t=="string"),new Q(t)}}class Oh{constructor(t,n,s){this.type="FirstParty",this.user=Q.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Rh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Oh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lh{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(x(typeof n.token=="string"),this.p=n.token,new xh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Mh(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ro{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Mh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function S(e,t){return e<t?-1:e>t?1:0}function Pt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class M{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new M(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?S(this.nanoseconds,t.nanoseconds):S(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new M(0,0))}static max(){return new R(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class le{constructor(t,n,s){n===void 0?n=0:n>t.length&&b(),s===void 0?s=t.length-n:s>t.length-n&&b(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return le.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof le?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class _ extends le{construct(t,n,s){return new _(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new _(n)}static emptyPath(){return new _([])}}const Ph=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends le{construct(t,n,s){return new H(t,n,s)}static isValidIdentifier(t){return Ph.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(n)}static emptyPath(){return new H([])}}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(_.fromString(t))}static fromName(t){return new E(_.fromString(t).popFirst(5))}static empty(){return new E(_.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return _.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new _(t.slice()))}}function Fh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=R.fromTimestamp(s===1e9?new M(n+1,0):new M(n,s));return new ft(i,E.empty(),t)}function Vh(e){return new ft(e.readTime,e.key,-1)}class ft{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new ft(R.min(),E.empty(),-1)}static max(){return new ft(R.max(),E.empty(),-1)}}function Bh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:S(e.largestBatchId,t.largestBatchId))}/**
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
 */const Uh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $h{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function oo(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Uh)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class u{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new u((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof u?n:u.resolve(n)}catch(n){return u.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):u.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):u.reject(n)}static resolve(t){return new u((n,s)=>{n(t)})}static reject(t){return new u((n,s)=>{s(t)})}static waitFor(t){return new u((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=u.resolve(!1);for(const s of t)n=n.next(i=>i?u.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new u((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const h=c;n(t[h]).next(l=>{o[h]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(t,n){return new u((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function En(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ao{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
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
 */function ki(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Kt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function co(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */ao.ot=-1;class J{constructor(t,n){this.comparator=t,this.root=n||F.EMPTY}insert(t,n){return new J(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,F.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,F.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Me(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Me(this.root,t,this.comparator,!1)}getReverseIterator(){return new Me(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Me(this.root,t,this.comparator,!0)}}class Me{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class F{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:F.RED,this.left=i!=null?i:F.EMPTY,this.right=r!=null?r:F.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new F(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return F.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return F.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}F.EMPTY=null,F.RED=!0,F.BLACK=!1;F.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,s,i){return this}insert(e,t,n){return new F(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class X{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _i(this.data.getIterator())}getIteratorFrom(t){return new _i(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new X(this.comparator);return n.data=t,n}}class _i{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(t){this.fields=t,t.sort(H.comparator)}static empty(){return new it([])}unionWith(t){let n=new X(H.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new it(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Pt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new lt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new lt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return S(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const jh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(e){if(x(!!e),typeof e=="string"){let t=0;const n=jh.exec(e);if(x(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ue(e){return typeof e=="string"?lt.fromBase64String(e):lt.fromUint8Array(e)}/**
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
 */function Hh(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ye(e){const t=Dt(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}/**
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
 */class Kh{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class fe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new fe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fe&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function $s(e){return e==null}function Je(e){return e===0&&1/e==-1/0}function qh(e){return typeof e=="number"&&Number.isInteger(e)&&!Je(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const Pe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ft(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Hh(e)?4:Gh(e)?9007199254740991:10:b()}function rt(e,t){if(e===t)return!0;const n=Ft(e);if(n!==Ft(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ye(e).isEqual(Ye(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Dt(s.timestampValue),o=Dt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ue(s.bytesValue).isEqual(ue(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?Je(r)===Je(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Pt(e.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ki(r)!==ki(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rt(r[a],o[a])))return!1;return!0}(e,t);default:return b()}}function de(e,t){return(e.values||[]).find(n=>rt(n,t))!==void 0}function Vt(e,t){if(e===t)return 0;const n=Ft(e),s=Ft(t);if(n!==s)return S(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return S(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Oi(e.timestampValue,t.timestampValue);case 4:return Oi(Ye(e),Ye(t));case 5:return S(e.stringValue,t.stringValue);case 6:return function(i,r){const o=ue(i),a=ue(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=S(o[c],a[c]);if(h!==0)return h}return S(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=S(V(i.latitude),V(r.latitude));return o!==0?o:S(V(i.longitude),V(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=Vt(o[c],a[c]);if(h)return h}return S(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Pe.mapValue&&r===Pe.mapValue)return 0;if(i===Pe.mapValue)return 1;if(r===Pe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let l=0;l<a.length&&l<h.length;++l){const d=S(a[l],h[l]);if(d!==0)return d;const p=Vt(o[a[l]],c[h[l]]);if(p!==0)return p}return S(a.length,h.length)}(e.mapValue,t.mapValue);default:throw b()}}function Oi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return S(e,t);const n=Dt(e),s=Dt(t),i=S(n.seconds,s.seconds);return i!==0?i:S(n.nanos,s.nanos)}function xt(e){return ls(e)}function ls(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Dt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ue(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ls(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ls(s.fields[a])}`;return r+"}"}(e.mapValue):b();var t,n}function us(e){return!!e&&"integerValue"in e}function js(e){return!!e&&"arrayValue"in e}function Ve(e){return!!e&&"mapValue"in e}function Zt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Kt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Zt(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Zt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Gh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ve(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zt(n)}setAll(t){let n=H.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Zt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ve(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ve(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Kt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new et(Zt(this.value))}}function ho(e){const t=[];return Kt(e.fields,(n,s)=>{const i=new H([n]);if(Ve(s)){const r=ho(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new it(t)}/**
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
 */class tt{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new tt(t,0,R.min(),R.min(),et.empty(),0)}static newFoundDocument(t,n,s){return new tt(t,1,n,R.min(),s,0)}static newNoDocument(t,n){return new tt(t,2,n,R.min(),et.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,R.min(),et.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Ri(e,t=null,n=[],s=[],i=null,r=null,o=null){return new zh(e,t,n,s,i,r,o)}function Hs(e){const t=C(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+xt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),$s(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>xt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>xt(s)).join(",")),t.ut=n}return t.ut}function Wh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${xt(s.value)}`;var s}).join(", ")}]`),$s(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>xt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>xt(n)).join(",")),`Target(${t})`}function Ks(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!nl(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!rt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Li(e.startAt,t.startAt)&&Li(e.endAt,t.endAt)}class Y extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new Xh(t,n,s):n==="array-contains"?new Jh(t,s):n==="in"?new Zh(t,s):n==="not-in"?new tl(t,s):n==="array-contains-any"?new el(t,s):new Y(t,n,s)}static ct(t,n,s){return n==="in"?new Qh(t,s):new Yh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(Vt(n,this.value)):n!==null&&Ft(this.value)===Ft(n)&&this.at(Vt(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Xh extends Y{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.at(n)}}class Qh extends Y{constructor(t,n){super(t,"in",n),this.keys=lo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Yh extends Y{constructor(t,n){super(t,"not-in",n),this.keys=lo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function lo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Jh extends Y{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return js(n)&&de(n.arrayValue,this.value)}}class Zh extends Y{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&de(this.value.arrayValue,n)}}class tl extends Y{constructor(t,n){super(t,"not-in",n)}matches(t){if(de(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!de(this.value.arrayValue,n)}}class el extends Y{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!js(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>de(this.value.arrayValue,s))}}class Ze{constructor(t,n){this.position=t,this.inclusive=n}}class te{constructor(t,n="asc"){this.field=t,this.dir=n}}function nl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function xi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Vt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Li(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Tn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function sl(e,t,n,s,i,r,o,a){return new Tn(e,t,n,s,i,r,o,a)}function il(e){return new Tn(e)}function rl(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ol(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function al(e){for(const t of e.filters)if(t.ht())return t.field;return null}function cl(e){return e.collectionGroup!==null}function pe(e){const t=C(e);if(t.lt===null){t.lt=[];const n=al(t),s=ol(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new te(n)),t.lt.push(new te(H.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new te(H.keyField(),r))}}}return t.lt}function tn(e){const t=C(e);if(!t.ft)if(t.limitType==="F")t.ft=Ri(t.path,t.collectionGroup,pe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of pe(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new te(r.field,o))}const s=t.endAt?new Ze(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ze(t.startAt.position,t.startAt.inclusive):null;t.ft=Ri(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.ft}function hl(e,t,n){return new Tn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function uo(e,t){return Ks(tn(e),tn(t))&&e.limitType===t.limitType}function fo(e){return`${Hs(tn(e))}|lt:${e.limitType}`}function Mi(e){return`Query(target=${Wh(tn(e))}; limitType=${e.limitType})`}function po(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=xi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,pe(n),s)||n.endAt&&!function(i,r,o){const a=xi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,pe(n),s))}(e,t)}function ll(e){return(t,n)=>{let s=!1;for(const i of pe(e)){const r=ul(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ul(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Vt(a,c):b()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
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
 */function go(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Je(t)?"-0":t}}function mo(e){return{integerValue:""+e}}function yo(e,t){return qh(t)?mo(t):go(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class In{constructor(){this._=void 0}}function fl(e,t,n){return e instanceof en?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof ge?wo(e,t):e instanceof me?Eo(e,t):function(s,i){const r=vo(s,i),o=Pi(r)+Pi(s._t);return us(r)&&us(s._t)?mo(o):go(s.wt,o)}(e,t)}function dl(e,t,n){return e instanceof ge?wo(e,t):e instanceof me?Eo(e,t):n}function vo(e,t){return e instanceof ye?us(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class en extends In{}class ge extends In{constructor(t){super(),this.elements=t}}function wo(e,t){const n=To(t);for(const s of e.elements)n.some(i=>rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class me extends In{constructor(t){super(),this.elements=t}}function Eo(e,t){let n=To(t);for(const s of e.elements)n=n.filter(i=>!rt(i,s));return{arrayValue:{values:n}}}class ye extends In{constructor(t,n){super(),this.wt=t,this._t=n}}function Pi(e){return V(e.integerValue||e.doubleValue)}function To(e){return js(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class pl{constructor(t,n){this.field=t,this.transform=n}}function gl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ge&&s instanceof ge||n instanceof me&&s instanceof me?Pt(n.elements,s.elements,rt):n instanceof ye&&s instanceof ye?rt(n._t,s._t):n instanceof en&&s instanceof en}(e.transform,t.transform)}class ml{constructor(t,n){this.version=t,this.transformResults=n}}class at{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Be(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class bn{}function Io(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ao(e.key,at.none()):new An(e.key,e.data,at.none());{const n=e.data,s=et.empty();let i=new X(H.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new kt(e.key,s,new it(i.toArray()),at.none())}}function yl(e,t,n){e instanceof An?function(s,i,r){const o=s.value.clone(),a=Vi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof kt?function(s,i,r){if(!Be(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Vi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(bo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ee(e,t,n,s){return e instanceof An?function(i,r,o,a){if(!Be(i.precondition,r))return o;const c=i.value.clone(),h=Bi(i.fieldTransforms,a,r);return c.setAll(h),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof kt?function(i,r,o,a){if(!Be(i.precondition,r))return o;const c=Bi(i.fieldTransforms,a,r),h=r.data;return h.setAll(bo(i)),h.setAll(c),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(i,r,o){return Be(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function vl(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=vo(s.transform,i||null);r!=null&&(n===null&&(n=et.empty()),n.set(s.field,r))}return n||null}function Fi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pt(n,s,(i,r)=>gl(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class An extends bn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kt extends bn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Vi(e,t,n){const s=new Map;x(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,dl(o,a,n[i]))}return s}function Bi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,fl(r,o,t))}return s}class Ao extends bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wl extends bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */var k,I;function El(e){switch(e){default:return b();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Tl(e){if(e===void 0)return Ct("GRPC error has no .code"),f.UNKNOWN;switch(e){case k.OK:return f.OK;case k.CANCELLED:return f.CANCELLED;case k.UNKNOWN:return f.UNKNOWN;case k.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case k.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case k.INTERNAL:return f.INTERNAL;case k.UNAVAILABLE:return f.UNAVAILABLE;case k.UNAUTHENTICATED:return f.UNAUTHENTICATED;case k.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case k.NOT_FOUND:return f.NOT_FOUND;case k.ALREADY_EXISTS:return f.ALREADY_EXISTS;case k.PERMISSION_DENIED:return f.PERMISSION_DENIED;case k.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case k.ABORTED:return f.ABORTED;case k.OUT_OF_RANGE:return f.OUT_OF_RANGE;case k.UNIMPLEMENTED:return f.UNIMPLEMENTED;case k.DATA_LOSS:return f.DATA_LOSS;default:return b()}}(I=k||(k={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Kt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return co(this.inner)}size(){return this.innerSize}}/**
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
 */const Il=new J(E.comparator);function nn(){return Il}const So=new J(E.comparator);function Fe(...e){let t=So;for(const n of e)t=t.insert(n.key,n);return t}function Co(e){let t=So;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function wt(){return ne()}function Do(){return ne()}function ne(){return new qt(e=>e.toString(),(e,t)=>e.isEqual(t))}const bl=new J(E.comparator),Al=new X(E.comparator);function z(...e){let t=Al;for(const n of e)t=t.add(n);return t}const Sl=new X(S);function Cl(){return Sl}class Dl{constructor(t,n){this.databaseId=t,this.dt=n}}function fs(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nl(e,t){return e.dt?t.toBase64():t.toUint8Array()}function kl(e,t){return fs(e,t.toTimestamp())}function Lt(e){return x(!!e),R.fromTimestamp(function(t){const n=Dt(t);return new M(n.seconds,n.nanos)}(e))}function No(e,t){return function(n){return new _(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function _l(e){const t=_.fromString(e);return x(Ul(t)),t}function ds(e,t){return No(e.databaseId,t.path)}function Ol(e){const t=_l(e);return t.length===4?_.emptyPath():xl(t)}function Rl(e){return new _(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xl(e){return x(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ui(e,t,n){return{name:ds(e,t),fields:n.value.mapValue.fields}}function Ll(e,t){let n;if(t instanceof An)n={update:Ui(e,t.key,t.value)};else if(t instanceof Ao)n={delete:ds(e,t.key)};else if(t instanceof kt)n={update:Ui(e,t.key,t.data),updateMask:Bl(t.fieldMask)};else{if(!(t instanceof wl))return b();n={verify:ds(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof en)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ge)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof me)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ye)return{fieldPath:r.field.canonicalString(),increment:o._t};throw b()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kl(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(e,t.precondition)),n}function Ml(e,t){return e&&e.length>0?(x(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?Lt(s.updateTime):Lt(i);return r.isEqual(R.min())&&(r=Lt(i)),new ml(r,s.transformResults||[])}(n,t))):[]}function Pl(e){let t=Ol(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){x(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=ko(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new te(Ot(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,$s(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,p=l.values||[];return new Ze(p,d)}(n.startAt));let h=null;return n.endAt&&(h=function(l){const d=!l.before,p=l.values||[];return new Ze(p,d)}(n.endAt)),sl(t,i,o,r,a,"F",c,h)}function ko(e){return e?e.unaryFilter!==void 0?[Vl(e)]:e.fieldFilter!==void 0?[Fl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>ko(t)).reduce((t,n)=>t.concat(n)):b():[]}function Ot(e){return H.fromServerFormat(e.fieldPath)}function Fl(e){return Y.create(Ot(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}function Vl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ot(e.unaryFilter.field);return Y.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ot(e.unaryFilter.field);return Y.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ot(e.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ot(e.unaryFilter.field);return Y.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function Bl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ul(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class $l{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&yl(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ee(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ee(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Do();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Io(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),z())}isEqual(t){return this.batchId===t.batchId&&Pt(this.mutations,t.mutations,(n,s)=>Fi(n,s))&&Pt(this.baseMutations,t.baseMutations,(n,s)=>Fi(n,s))}}class qs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){x(t.mutations.length===s.length);let i=bl;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new qs(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class jl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Hl{constructor(t){this.ne=t}}function Kl(e){const t=Pl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?hl(t,t.limit,"L"):t}/**
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
 */class ql{constructor(){this.ze=new Gl}addToCollectionParentIndex(t,n){return this.ze.add(n),u.resolve()}getCollectionParents(t,n){return u.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return u.resolve()}deleteFieldIndex(t,n){return u.resolve()}getDocumentsMatchingTarget(t,n){return u.resolve(null)}getIndexType(t,n){return u.resolve(0)}getFieldIndexes(t,n){return u.resolve([])}getNextCollectionGroupToUpdate(t){return u.resolve(null)}getMinOffset(t,n){return u.resolve(ft.min())}getMinOffsetFromCollectionGroup(t,n){return u.resolve(ft.min())}updateCollectionGroup(t,n,s){return u.resolve()}updateIndexEntries(t,n){return u.resolve()}}class Gl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new X(_.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new X(_.comparator)).toArray()}}/**
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
 */class Bt{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Bt(0)}static Rn(){return new Bt(-1)}}/**
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
 */class zl{constructor(){this.changes=new qt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?u.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Wl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Xl{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&ee(s.mutation,i,it.empty(),M.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,z()).next(()=>s))}getLocalViewOfDocuments(t,n,s=z()){const i=wt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Fe();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=wt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,z()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=nn();const o=ne(),a=ne();return n.forEach((c,h)=>{const l=s.get(h.key);i.has(h.key)&&(l===void 0||l.mutation instanceof kt)?r=r.insert(h.key,h):l!==void 0&&(o.set(h.key,l.mutation.getFieldMask()),ee(l.mutation,h,l.mutation.getFieldMask(),M.now()))}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((h,l)=>o.set(h,l)),n.forEach((h,l)=>{var d;return a.set(h,new Wl(l,(d=o.get(h))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ne();let i=new J((o,a)=>o-a),r=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let l=s.get(c)||it.empty();l=a.applyToLocalView(h,l),s.set(c,l);const d=(i.get(a.batchId)||z()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),h=c.key,l=c.value,d=Do();l.forEach(p=>{if(!r.has(p)){const T=Io(n.get(p),s.get(p));T!==null&&d.set(p,T),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,d))}return u.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):cl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):u.resolve(wt());let a=-1,c=r;return o.next(h=>u.forEach(h,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(l)?u.resolve():this.getBaseDocument(t,l,d).next(p=>{c=c.insert(l,p)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,c,h,z())).next(l=>({batchId:a,changes:Co(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let i=Fe();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Fe();return this.indexManager.getCollectionParents(t,i).next(o=>u.forEach(o,a=>{const c=function(h,l){return new Tn(l,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(h=>{h.forEach((l,d)=>{r=r.insert(l,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const h=c.getKey();i.get(h)===null&&(i=i.insert(h,tt.newInvalidDocument(h)))});let o=Fe();return i.forEach((a,c)=>{const h=r.get(a);h!==void 0&&ee(h.mutation,c,it.empty(),M.now()),po(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):u.resolve(tt.newInvalidDocument(n))}}/**
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
 */class Ql{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return u.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Lt(s.createTime)}),u.resolve()}getNamedQuery(t,n){return u.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Kl(s.bundledQuery),readTime:Lt(s.readTime)}}(n)),u.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Yl{constructor(){this.overlays=new J(E.comparator),this.Xn=new Map}getOverlay(t,n){return u.resolve(this.overlays.get(n))}getOverlays(t,n){const s=wt();return u.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ie(t,n,r)}),u.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),u.resolve()}getOverlaysForCollection(t,n,s){const i=wt(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return u.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new J((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let l=r.get(h.largestBatchId);l===null&&(l=wt(),r=r.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=wt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=i)););return u.resolve(a)}ie(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new jl(n,s));let r=this.Xn.get(n);r===void 0&&(r=z(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
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
 */class Gs{constructor(){this.Zn=new X(L.ts),this.es=new X(L.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new L(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new L(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new E(new _([])),s=new L(n,t),i=new L(n,t+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new E(new _([])),s=new L(n,t),i=new L(n,t+1);let r=z();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new L(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class L{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return E.comparator(t.key,n.key)||S(t.ls,n.ls)}static ns(t,n){return S(t.ls,n.ls)||E.comparator(t.key,n.key)}}/**
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
 */class Jl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new X(L.ts)}checkEmpty(t){return u.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $l(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new L(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return u.resolve(o)}lookupMutationBatch(t,n){return u.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return u.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return u.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return u.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new L(n,0),i=new L(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),u.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new X(S);return n.forEach(i=>{const r=new L(i,0),o=new L(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),u.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new L(new E(r),0);let a=new X(S);return this.ds.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(c.ls)),!0)},o),u.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){x(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return u.forEach(n.mutations,i=>{const r=new L(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new L(n,0),i=this.ds.firstAfterOrEqual(s);return u.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,u.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Zl{constructor(t){this.ps=t,this.docs=new J(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return u.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=nn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),u.resolve(s)}getAllFromCollection(t,n,s){let i=nn();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Bh(Vh(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return u.resolve(i)}getAllFromCollectionGroup(t,n,s,i){b()}Is(t,n){return u.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new tu(this)}getSize(t){return u.resolve(this.size)}}class tu extends zl{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(t,i)):this.zn.removeEntry(s)}),u.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
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
 */class eu{constructor(t){this.persistence=t,this.Ts=new qt(n=>Hs(n),Ks),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Es=0,this.As=new Gs,this.targetCount=0,this.Rs=Bt.An()}forEachTarget(t,n){return this.Ts.forEach((s,i)=>n(i)),u.resolve()}getLastRemoteSnapshotVersion(t){return u.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return u.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),u.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),u.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new Bt(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,u.resolve()}updateTargetData(t,n){return this.vn(n),u.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,u.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),u.waitFor(r).next(()=>i)}getTargetCount(t){return u.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return u.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),u.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),u.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),u.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return u.resolve(s)}containsKey(t,n){return u.resolve(this.As.containsKey(n))}}/**
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
 */class nu{constructor(t,n){this.bs={},this.overlays={},this.Ps=new ao(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new eu(this),this.indexManager=new ql,this.remoteDocumentCache=function(s){return new Zl(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Hl(n),this.Ds=new Ql(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Yl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new Jl(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new su(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(t,n){return u.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class su extends $h{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.ks=new Gs,this.Os=null}static Ms(t){return new zs(t)}get Fs(){if(this.Os)return this.Os;throw b()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),u.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),u.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),u.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Os=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return u.forEach(this.Fs,s=>{const i=E.fromPath(s);return this.$s(t,i).next(r=>{r||n.removeEntry(i,R.min())})}).next(()=>(this.Os=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return u.or([()=>u.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
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
 */class Ws{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(t,n){let s=z(),i=z();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ws(t,n.fromCache,s,i)}}/**
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
 */class iu{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ci(t,n).next(r=>r||this.xi(t,n,i,s)).next(r=>r||this.Ni(t,n))}Ci(t,n){return u.resolve(null)}xi(t,n,s,i){return rl(n)||i.isEqual(R.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(t,n):(Di()<=A.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.Mi(t,o,n,Fh(i,-1)))})}ki(t,n){let s=new X(ll(t));return n.forEach((i,r)=>{po(t,r)&&(s=s.add(r))}),s}Oi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(t,n){return Di()<=A.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.Di.getDocumentsMatchingQuery(t,n,ft.min())}Mi(t,n,s,i){return this.Di.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class ru{constructor(t,n,s,i){this.persistence=t,this.Fi=n,this.wt=i,this.$i=new J(S),this.Bi=new qt(r=>Hs(r),Ks),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xl(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function ou(e,t,n,s){return new ru(e,t,n,s)}async function _o(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=z();for(const h of i){o.push(h.batchId);for(const l of h.mutations)c=c.add(l.key)}for(const h of r){a.push(h.batchId);for(const l of h.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(h=>({Ki:h,removedBatchIds:o,addedBatchIds:a}))})})}function au(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,h){const l=c.batch,d=l.keys();let p=u.resolve();return d.forEach(T=>{p=p.next(()=>h.getEntry(a,T)).next(w=>{const N=c.docVersions.get(T);x(N!==null),w.version.compareTo(N)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),h.addEntry(w)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function cu(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function hu(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class $i{constructor(){this.activeTargetIds=Cl()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lu{constructor(){this.Fr=new $i,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new $i,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class uu{Br(t){}shutdown(){}}/**
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
 */class ji{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const fu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class du{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
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
 */class pu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(t,o,a,s).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw Ni("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}ao(t,n,s,i,r,o){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ht,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=fu[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,i){return new Promise((r,o)=>{const a=new Dh;a.listenOnce(Ah.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qn.NO_ERROR:const h=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(h)),r(h);break;case qn.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const l=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const p=function(T){const w=T.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(w)>=0?w:f.UNKNOWN}(d.status);o(new v(p,d.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ih(),o=bh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ch({})),this.uo(a.initMessageHeaders,n,s),ta()||na()||sa()||ia()||ra()||ea()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");m("Connection","Creating WebChannel: "+c,a);const h=r.createWebChannel(c,a);let l=!1,d=!1;const p=new du({jr:w=>{d?m("Connection","Not sending because WebChannel is closed:",w):(l||(m("Connection","Opening WebChannel transport."),h.open(),l=!0),m("Connection","WebChannel sending:",w),h.send(w))},Wr:()=>h.close()}),T=(w,N,j)=>{w.listen(N,st=>{try{j(st)}catch(nt){setTimeout(()=>{throw nt},0)}})};return T(h,Le.EventType.OPEN,()=>{d||m("Connection","WebChannel transport opened.")}),T(h,Le.EventType.CLOSE,()=>{d||(d=!0,m("Connection","WebChannel transport closed"),p.eo())}),T(h,Le.EventType.ERROR,w=>{d||(d=!0,Ni("Connection","WebChannel transport errored:",w),p.eo(new v(f.UNAVAILABLE,"The operation could not be completed")))}),T(h,Le.EventType.MESSAGE,w=>{var N;if(!d){const j=w.data[0];x(!!j);const st=j,nt=st.error||((N=st[0])===null||N===void 0?void 0:N.error);if(nt){m("Connection","WebChannel received error:",nt);const ti=nt.status;let Rn=function(Wo){const ni=k[Wo];if(ni!==void 0)return Tl(ni)}(ti),ei=nt.message;Rn===void 0&&(Rn=f.INTERNAL,ei="Unknown error status: "+ti+" with message "+nt.message),d=!0,p.eo(new v(Rn,ei)),h.close()}else m("Connection","WebChannel received:",j),p.no(j)}}),T(o,Sh.STAT_EVENT,w=>{w.stat===Si.PROXY?m("Connection","Detected buffering proxy"):w.stat===Si.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function Gn(){return typeof document!="undefined"?document:null}/**
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
 */function Sn(e){return new Dl(e,!0)}class Oo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class gu{constructor(t,n,s,i,r,o,a,c){this.js=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Oo(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Ct(n.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new v(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mu extends gu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(x(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=Ml(t.writeResults,t.commitTime),s=Lt(t.commitTime);return this.listener.Jo(s,n)}return x(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Rl(this.wt),this.Mo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Ll(this.wt,s))};this.Mo(n)}}/**
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
 */class yu extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(f.UNKNOWN,i.toString())})}ao(t,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(f.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class vu{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ct(n),this.su=!1):m("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class wu{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{_e(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c.lu.add(4),await ke(c),c._u.set("Unknown"),c.lu.delete(4),await Cn(c)}(this))})}),this._u=new vu(s,i)}}async function Cn(e){if(_e(e))for(const t of e.fu)await t(!0)}async function ke(e){for(const t of e.fu)await t(!1)}function _e(e){return C(e).lu.size===0}async function Ro(e,t,n){if(!En(t))throw t;e.lu.add(1),await ke(e),e._u.set("Offline"),n||(n=()=>cu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Cn(e)})}function xo(e,t){return t().catch(n=>Ro(e,n,t))}async function Dn(e){const t=C(e),n=dt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Eu(t);)try{const i=await hu(t.localStore,s);if(i===null){t.au.length===0&&n.ko();break}s=i.batchId,Tu(t,i)}catch(i){await Ro(t,i)}Lo(t)&&Mo(t)}function Eu(e){return _e(e)&&e.au.length<10}function Tu(e,t){e.au.push(t);const n=dt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Lo(e){return _e(e)&&!dt(e).Do()&&e.au.length>0}function Mo(e){dt(e).start()}async function Iu(e){dt(e).Xo()}async function bu(e){const t=dt(e);for(const n of e.au)t.Ho(n.mutations)}async function Au(e,t,n){const s=e.au.shift(),i=qs.from(s,t,n);await xo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Dn(e)}async function Su(e,t){t&&dt(e).zo&&await async function(n,s){if(i=s.code,El(i)&&i!==f.ABORTED){const r=n.au.shift();dt(n).No(),await xo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Dn(n)}var i}(e,t),Lo(e)&&Mo(e)}async function Hi(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=_e(n);n.lu.add(3),await ke(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Cn(n)}async function Cu(e,t){const n=C(e);t?(n.lu.delete(2),await Cn(n)):t||(n.lu.add(2),await ke(n),n._u.set("Unknown"))}function dt(e){return e.gu||(e.gu=function(t,n,s){const i=C(t);return i.tu(),new mu(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:Iu.bind(null,e),Jr:Su.bind(null,e),Yo:bu.bind(null,e),Jo:Au.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await Dn(e)):(await e.gu.stop(),e.au.length>0&&(m("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
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
 */class Xs{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Xs(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Po(e,t){if(Ct("AsyncQueue",`${t}: ${e}`),En(e))return new v(f.UNAVAILABLE,`${t}: ${e}`);throw e}class Du{constructor(){this.queries=new qt(t=>fo(t),uo),this.onlineState="Unknown",this.Tu=new Set}}function Nu(e){e.Tu.forEach(t=>{t.next()})}class ku{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new qt(a=>fo(a),uo),this.ec=new Map,this.nc=new Set,this.sc=new J(E.comparator),this.ic=new Map,this.rc=new Gs,this.oc={},this.uc=new Map,this.cc=Bt.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function _u(e,t,n){const s=Lu(e);try{const i=await function(r,o){const a=C(r),c=M.now(),h=o.reduce((p,T)=>p.add(T.key),z());let l,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let T=nn(),w=z();return a.Ui.getEntries(p,h).next(N=>{T=N,T.forEach((j,st)=>{st.isValidDocument()||(w=w.add(j))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,T)).next(N=>{l=N;const j=[];for(const st of o){const nt=vl(st,l.get(st.key).overlayedDocument);nt!=null&&j.push(new kt(st.key,nt,ho(nt.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,j,o)}).next(N=>{d=N;const j=N.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(p,N.batchId,j)})}).then(()=>({batchId:d.batchId,changes:Co(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.oc[r.currentUser.toKey()];c||(c=new J(S)),c=c.insert(o,a),r.oc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Nn(s,i.changes),await Dn(s.remoteStore)}catch(i){const r=Po(i,"Failed to persist write");n.reject(r)}}function Ki(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=C(r);a.onlineState=o;let c=!1;a.queries.forEach((h,l)=>{for(const d of l.listeners)d.Eu(o)&&(c=!0)}),c&&Nu(a)}(s.eventManager,t),i.length&&s.Zu.Go(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Ou(e,t){const n=C(e),s=t.batch.batchId;try{const i=await au(n.localStore,t);Vo(n,s,null),Fo(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Nn(n,i)}catch(i){await oo(i)}}async function Ru(e,t,n){const s=C(e);try{const i=await function(r,o){const a=C(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(x(l!==null),h=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>a.localDocuments.getDocuments(c,h))})}(s.localStore,t);Vo(s,t,n),Fo(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Nn(s,i)}catch(i){await oo(i)}}function Fo(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function Vo(e,t,n){const s=C(e);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.oc[s.currentUser.toKey()]=i}}async function Nn(e,t,n){const s=C(e),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,h.fromCache?"not-current":"current"),i.push(h);const l=Ws.Vi(c.targetId,h);r.push(l)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const h=C(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>u.forEach(c,d=>u.forEach(d.Pi,p=>h.persistence.referenceDelegate.addReference(l,d.targetId,p)).next(()=>u.forEach(d.vi,p=>h.persistence.referenceDelegate.removeReference(l,d.targetId,p)))))}catch(l){if(!En(l))throw l;m("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const p=h.$i.get(d),T=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(T);h.$i=h.$i.insert(d,w)}}}(s.localStore,r))}async function xu(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await _o(n.localStore,t);n.currentUser=t,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Nn(n,s.Ki)}}function Lu(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ou.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ru.bind(null,t),t}class Mu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Sn(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return ou(this.persistence,new iu,t.initialUser,this.wt)}_c(t){return new nu(zs.Ms,this.wt)}dc(t){return new lu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pu{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ki(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xu.bind(null,this.syncEngine),await Cu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Du}createDatastore(t){const n=Sn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new pu(i));var i;return function(r,o,a,c){return new yu(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Ki(this.syncEngine,a,0),o=ji.V()?new ji:new uu,new wu(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,h){const l=new ku(s,i,r,o,a,c);return h&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);m("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ke(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class Fu{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Q.UNAUTHENTICATED,this.clientId=ro.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Po(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Vu(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await _o(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Bu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Uu(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Hi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Hi(t.remoteStore,r)),e.onlineComponents=t}async function Uu(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await Vu(e,new Mu)),e.offlineComponents}async function $u(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Bu(e,new Pu)),e.onlineComponents}function ju(e){return $u(e).then(t=>t.syncEngine)}const qi=new Map;/**
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
 */function Hu(e,t,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ku(e,t,n,s){if(t===!0&&s===!0)throw new v(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gi(e){if(!E.isDocumentKey(e))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function zi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qs(e);throw new v(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Wi{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ku("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Bo{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wi({}),this._settingsFrozen=!1,t instanceof fe?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fe(i.options.projectId)}(t))}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wi(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kh;switch(n.type){case"gapi":const s=n.client;return x(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Rh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=qi.get(t);n&&(m("ComponentProvider","Removing Datastore"),qi.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ct{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class Ys{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ys(this.firestore,t,this._query)}}class ve extends Ys{constructor(t,n,s){super(t,n,il(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new E(t))}withConverter(t){return new ve(this.firestore,t,this._path)}}function qu(e,t,...n){if(e=Tt(e),arguments.length===1&&(t=ro.I()),Hu("doc","path",t),e instanceof Bo){const s=_.fromString(t,...n);return Gi(s),new ct(e,null,new E(s))}{if(!(e instanceof ct||e instanceof ve))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return Gi(s),new ct(e.firestore,e instanceof ve?e.converter:null,new E(s))}}/**
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
 */class Gu{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Oo(this,"async_queue_retry"),this.Kc=()=>{const n=Gn();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Gn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Gn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Et;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Mc.push(t),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!En(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Oc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ct("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const i=Xs.createAndSchedule(this,t,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&b()}verifyOperationInProgress(){}async zc(){let t;do t=this.Oc,await t;while(t!==this.Oc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class Uo extends Bo{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Gu,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||$o(this),this._firestoreClient.terminate()}}function zu(e=lc()){return rc(e,"firestore").getImmediate()}function Wu(e){return e._firestoreClient||$o(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $o(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Kh(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Fu(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 *//**
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
 */class Js{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class we{constructor(t){this._byteString=t}static fromBase64String(t){try{return new we(lt.fromBase64String(t))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new we(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class kn{constructor(t){this._methodName=t}}/**
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
 */class jo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return S(this._lat,t._lat)||S(this._long,t._long)}}/**
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
 */const Xu=/^__.*__$/;class Ho{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new kt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ko(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Zs{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Zs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.sa(t),i}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return sn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(Ko(this.Zc)&&Xu.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Qu{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||Sn(t)}aa(t,n,s,i=!1){return new Zs({Zc:t,methodName:n,ca:s,path:H.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Yu(e){const t=e._freezeSettings(),n=Sn(e._databaseId);return new Qu(e._databaseId,!!t.ignoreUndefinedProperties,n)}class _n extends kn{_toFieldTransform(t){if(t.Zc!==2)throw t.Zc===1?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof _n}}class Ju extends kn{constructor(t,n){super(t),this.la=n}_toFieldTransform(t){const n=new ye(t.wt,yo(t.wt,this.la));return new pl(t.path,n)}isEqual(t){return this===t}}function Zu(e,t,n,s){const i=e.aa(1,t,n);Go("Data must be an object, but it was:",i,s);const r=[],o=et.empty();Kt(s,(c,h)=>{const l=zo(t,c,n);h=Tt(h);const d=i.ia(l);if(h instanceof _n)r.push(l);else{const p=On(h,d);p!=null&&(r.push(l),o.set(l,p))}});const a=new it(r);return new Ho(o,a,i.fieldTransforms)}function tf(e,t,n,s,i,r){const o=e.aa(1,t,n),a=[Xi(t,s,n)],c=[i];if(r.length%2!=0)throw new v(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(Xi(t,r[p])),c.push(r[p+1]);const h=[],l=et.empty();for(let p=a.length-1;p>=0;--p)if(!sf(h,a[p])){const T=a[p];let w=c[p];w=Tt(w);const N=o.ia(T);if(w instanceof _n)h.push(T);else{const j=On(w,N);j!=null&&(h.push(T),l.set(T,j))}}const d=new it(h);return new Ho(l,d,o.fieldTransforms)}function On(e,t){if(qo(e=Tt(e)))return Go("Unsupported field value:",t,e),ef(e,t);if(e instanceof kn)return function(n,s){if(!Ko(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=On(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=Tt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yo(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=M.fromDate(n);return{timestampValue:fs(s.wt,i)}}if(n instanceof M){const i=new M(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fs(s.wt,i)}}if(n instanceof jo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof we)return{bytesValue:Nl(s.wt,n._byteString)};if(n instanceof ct){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:No(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Qs(n)}`)}(e,t)}function ef(e,t){const n={};return co(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kt(e,(s,i)=>{const r=On(i,t.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function qo(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof M||e instanceof jo||e instanceof we||e instanceof ct||e instanceof kn)}function Go(e,t,n){if(!qo(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qs(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function Xi(e,t,n){if((t=Tt(t))instanceof Js)return t._internalPath;if(typeof t=="string")return zo(e,t);throw sn("Field path arguments must be of type string or ",e,!1,void 0,n)}const nf=new RegExp("[~\\*/\\[\\]]");function zo(e,t,n){if(t.search(nf)>=0)throw sn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Js(...t.split("."))._internalPath}catch{throw sn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new v(f.INVALID_ARGUMENT,a+e+c)}function sf(e,t){return e.some(n=>n.isEqual(t))}function Gt(e,t,n,...s){e=zi(e,ct);const i=zi(e.firestore,Uo),r=Yu(i);let o;return o=typeof(t=Tt(t))=="string"||t instanceof Js?tf(r,"updateDoc",e._key,t,n,s):Zu(r,"updateDoc",e._key,t),rf(i,[o.toMutation(e._key,at.exists(!0))])}function rf(e,t){return function(n,s){const i=new Et;return n.asyncQueue.enqueueAndForget(async()=>_u(await ju(n),s,i)),i.promise}(Wu(e),t)}function zt(e){return new Ju("increment",e)}(function(e,t=!0){(function(n){Ht=n})(cc),$e(new se("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Uo(i,new _h(n.getProvider("auth-internal")),new Lh(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Rt(Ci,"3.4.12",e),Rt(Ci,"3.4.12","esm2017")})();const of={apiKey:"AIzaSyBCfGA-WnFIcusyoVRGTgePDb94BH2xSWw",authDomain:"kickads-e805c.firebaseapp.com",projectId:"kickads-e805c",storageBucket:"kickads-e805c.appspot.com",messagingSenderId:"243258231653",appId:"1:243258231653:web:01b70d15bd0a3029056f8c"},af=hc(of),cf=zu(af),Wt=qu(cf,"creative-data","id-client/name-creative/DK8uyC4uO1xk356A4i8g");new Date().getTime();document.querySelector("#app").innerHTML=`
  <div class="buttons">
		<button id="clickInteractive-1" class="btn btn--primary">Click de paso 1</button>
		<button id="clickInteractive-2" class="btn btn--primary">Click de paso 2</button>
		<button id="clickInteractive-3" class="btn btn--primary">Click de paso 3</button>
		<button id="clickInteractive-4" class="btn btn--primary">Click de paso 4</button>
		<button id="clickInteractive-5" class="btn btn--primary">Click de paso 5</button>
	</div>
	<div class="buttons--secondary">
	<button id="clickFinal" class="btn btn--secondary">click final</button>
</div>
`;const hf=document.getElementById("clickInteractive-1"),lf=document.getElementById("clickInteractive-2"),uf=document.getElementById("clickInteractive-3"),ff=document.getElementById("clickInteractive-4"),df=document.getElementById("clickInteractive-5"),pf=document.getElementById("clickFinal");hf.addEventListener("click",async()=>{try{await Gt(Wt,{paso1:zt(1)}),console.log("add")}catch(e){console.error("Error adding document: ",e)}});lf.addEventListener("click",async()=>{try{await Gt(Wt,{paso2:zt(1)})}catch(e){console.error("Error adding document: ",e)}});uf.addEventListener("click",async()=>{try{await Gt(Wt,{paso3:zt(1)})}catch(e){console.error("Error adding document: ",e)}});ff.addEventListener("click",async()=>{try{await Gt(Wt,{paso4:zt(1)})}catch(e){console.error("Error adding document: ",e)}});df.addEventListener("click",async()=>{try{await Gt(Wt,{paso5:zt(1)})}catch(e){console.error("Error adding document: ",e)}});pf.addEventListener("click",async()=>{try{await Gt(Wt,{"click-final":zt(1)})}catch(e){console.error("Error adding document: ",e)}});
