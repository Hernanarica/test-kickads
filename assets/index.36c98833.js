const cu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};cu();/**
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
 */const Eo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},uu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[h],n[l],n[d],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Eo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):uu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||l==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const v=u<<6&192|l;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},lu=function(e){const t=Eo(e);return hu.encodeByteArray(t,!0)},To=function(e){return lu(e).replace(/\./g,"")};/**
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
 */class du{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Rn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rn())}function Io(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function pu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gu(){return Rn().indexOf("Electron/")>=0}function mu(){const e=Rn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function yu(){return Rn().indexOf("MSAppHost/")>=0}function bo(){return typeof indexedDB=="object"}function So(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function vu(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const wu="FirebaseError";class ie extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=wu,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Eu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ie(i,a,s)}}function Eu(e,t){return e.replace(Tu,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Tu=/\{\$([^}]+)}/g;function ln(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(cr(r)&&cr(o)){if(!ln(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function cr(e){return e!==null&&typeof e=="object"}/**
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
 */const Iu=1e3,bu=2,Su=4*60*60*1e3,Cu=.5;function ur(e,t=Iu,n=bu){const s=t*Math.pow(n,e),i=Math.round(Cu*s*(Math.random()-.5)*2);return Math.min(Su,s+i)}/**
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
 */function ht(e){return e&&e._delegate?e._delegate:e}class gt{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Au{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new du;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ku(t))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=At){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=At){return this.instances.has(t)}getOptions(t=At){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Du(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=At){return this.component?this.component.multipleInstances?t:At:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Du(e){return e===At?void 0:e}function ku(e){return e.instantiationMode==="EAGER"}/**
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
 */class _u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Au(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const Nu={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Ru=_.INFO,Ou={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},xu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Ou[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class si{constructor(t){this.name=t,this._logLevel=Ru,this._logHandler=xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}const Mu=(e,t)=>t.some(n=>e instanceof n);let hr,lr;function Lu(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fu(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Co=new WeakMap,_s=new WeakMap,Ao=new WeakMap,ls=new WeakMap,ii=new WeakMap;function Pu(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(vt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Co.set(n,e)}).catch(()=>{}),ii.set(t,e),t}function Vu(e){if(_s.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});_s.set(e,t)}let Ns={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _s.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ao.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bu(e){Ns=e(Ns)}function Uu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ds(this),t,...n);return Ao.set(s,t.sort?t.sort():[t]),vt(s)}:Fu().includes(e)?function(...t){return e.apply(ds(this),t),vt(Co.get(this))}:function(...t){return vt(e.apply(ds(this),t))}}function $u(e){return typeof e=="function"?Uu(e):(e instanceof IDBTransaction&&Vu(e),Mu(e,Lu())?new Proxy(e,Ns):e)}function vt(e){if(e instanceof IDBRequest)return Pu(e);if(ls.has(e))return ls.get(e);const t=$u(e);return t!==e&&(ls.set(e,t),ii.set(t,e)),t}const ds=e=>ii.get(e);function Do(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=vt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vt(o.result),c.oldVersion,c.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ju=["get","getKey","getAll","getAllKeys","count"],qu=["put","add","delete","clear"],fs=new Map;function dr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fs.get(t))return fs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=qu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ju.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return fs.set(t,r),r}Bu(e=>({...e,get:(t,n,s)=>dr(t,n)||e.get(t,n,s),has:(t,n)=>!!dr(t,n)||e.has(t,n)}));/**
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
 */class Ku{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rs="@firebase/app",fr="0.7.28";/**
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
 */const ri=new si("@firebase/app"),Hu="@firebase/app-compat",Gu="@firebase/analytics-compat",Wu="@firebase/analytics",Qu="@firebase/app-check-compat",Xu="@firebase/app-check",Yu="@firebase/auth",Ju="@firebase/auth-compat",Zu="@firebase/database",th="@firebase/database-compat",eh="@firebase/functions",nh="@firebase/functions-compat",sh="@firebase/installations",ih="@firebase/installations-compat",rh="@firebase/messaging",oh="@firebase/messaging-compat",ah="@firebase/performance",ch="@firebase/performance-compat",uh="@firebase/remote-config",hh="@firebase/remote-config-compat",lh="@firebase/storage",dh="@firebase/storage-compat",fh="@firebase/firestore",ph="@firebase/firestore-compat",gh="firebase",mh="9.9.0";/**
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
 */const ko="[DEFAULT]",yh={[Rs]:"fire-core",[Hu]:"fire-core-compat",[Wu]:"fire-analytics",[Gu]:"fire-analytics-compat",[Xu]:"fire-app-check",[Qu]:"fire-app-check-compat",[Yu]:"fire-auth",[Ju]:"fire-auth-compat",[Zu]:"fire-rtdb",[th]:"fire-rtdb-compat",[eh]:"fire-fn",[nh]:"fire-fn-compat",[sh]:"fire-iid",[ih]:"fire-iid-compat",[rh]:"fire-fcm",[oh]:"fire-fcm-compat",[ah]:"fire-perf",[ch]:"fire-perf-compat",[uh]:"fire-rc",[hh]:"fire-rc-compat",[lh]:"fire-gcs",[dh]:"fire-gcs-compat",[fh]:"fire-fst",[ph]:"fire-fst-compat","fire-js":"fire-js",[gh]:"fire-js-all"};/**
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
 */const dn=new Map,Os=new Map;function vh(e,t){try{e.container.addComponent(t)}catch(n){ri.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wt(e){const t=e.name;if(Os.has(t))return ri.debug(`There were multiple attempts to register component ${t}.`),!1;Os.set(t,e);for(const n of dn.values())vh(n,e);return!0}function Be(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const wh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},xt=new On("app","Firebase",wh);/**
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
 */class Eh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Th=mh;function Ih(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:ko,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});const i=dn.get(s);if(i){if(ln(e,i.options)&&ln(n,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const r=new _u(s);for(const a of Os.values())r.addComponent(a);const o=new Eh(e,n,r);return dn.set(s,o),o}function _o(e=ko){const t=dn.get(e);if(!t)throw xt.create("no-app",{appName:e});return t}function ct(e,t,n){var s;let i=(s=yh[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ri.warn(a.join(" "));return}wt(new gt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const bh="firebase-heartbeat-database",Sh=1,Ce="firebase-heartbeat-store";let ps=null;function No(){return ps||(ps=Do(bh,Sh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch(e=>{throw xt.create("storage-open",{originalErrorMessage:e.message})})),ps}async function Ch(e){var t;try{return(await No()).transaction(Ce).objectStore(Ce).get(Ro(e))}catch(n){throw xt.create("storage-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}async function pr(e,t){var n;try{const i=(await No()).transaction(Ce,"readwrite");return await i.objectStore(Ce).put(t,Ro(e)),i.done}catch(s){throw xt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Ro(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ah=1024,Dh=30*24*60*60*1e3;class kh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Dh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gr(),{heartbeatsToSend:n,unsentEntries:s}=_h(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gr(){return new Date().toISOString().substring(0,10)}function _h(e,t=Ah){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),mr(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bo()?So().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ch(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function mr(e){return To(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Rh(e){wt(new gt("platform-logger",t=>new Ku(t),"PRIVATE")),wt(new gt("heartbeat",t=>new kh(t),"PRIVATE")),ct(Rs,fr,e),ct(Rs,fr,"esm2017"),ct("fire-js","")}Rh("");var Oh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,oi=oi||{},T=Oh||self;function fn(){}function xs(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ue(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function xh(e){return Object.prototype.hasOwnProperty.call(e,gs)&&e[gs]||(e[gs]=++Mh)}var gs="closure_uid_"+(1e9*Math.random()>>>0),Mh=0;function Lh(e,t,n){return e.call.apply(e.bind,arguments)}function Fh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function K(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=Lh:K=Fh,K.apply(null,arguments)}function tn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function G(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function St(){this.s=this.s,this.o=this.o}var Ph=0;St.prototype.s=!1;St.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ph!=0)&&xh(this)};St.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},xo=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Vh(e){t:{var t=_l;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function yr(e){return Array.prototype.concat.apply([],arguments)}function ai(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function pn(e){return/^[\s\xa0]*$/.test(e)}var vr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Y(e,t){return e.indexOf(t)!=-1}function ms(e,t){return e<t?-1:e>t?1:0}var J;t:{var wr=T.navigator;if(wr){var Er=wr.userAgent;if(Er){J=Er;break t}}J=""}function ci(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Mo(e){const t={};for(const n in e)t[n]=e[n];return t}var Tr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lo(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Tr.length;r++)n=Tr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ui(e){return ui[" "](e),e}ui[" "]=fn;function Bh(e){var t=jh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Uh=Y(J,"Opera"),Xt=Y(J,"Trident")||Y(J,"MSIE"),Fo=Y(J,"Edge"),Ms=Fo||Xt,Po=Y(J,"Gecko")&&!(Y(J.toLowerCase(),"webkit")&&!Y(J,"Edge"))&&!(Y(J,"Trident")||Y(J,"MSIE"))&&!Y(J,"Edge"),$h=Y(J.toLowerCase(),"webkit")&&!Y(J,"Edge");function Vo(){var e=T.document;return e?e.documentMode:void 0}var gn;t:{var ys="",vs=function(){var e=J;if(Po)return/rv:([^\);]+)(\)|;)/.exec(e);if(Fo)return/Edge\/([\d\.]+)/.exec(e);if(Xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if($h)return/WebKit\/(\S+)/.exec(e);if(Uh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(vs&&(ys=vs?vs[1]:""),Xt){var ws=Vo();if(ws!=null&&ws>parseFloat(ys)){gn=String(ws);break t}}gn=ys}var jh={};function qh(){return Bh(function(){let e=0;const t=vr(String(gn)).split("."),n=vr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=ms(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ms(i[2].length==0,r[2].length==0)||ms(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Ls;if(T.document&&Xt){var Ir=Vo();Ls=Ir||parseInt(gn,10)||void 0}else Ls=void 0;var Kh=Ls,zh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",fn,t),T.removeEventListener("test",fn,t)}catch{}return e}();function Q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};function Ae(e,t){if(Q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Po){t:{try{ui(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Hh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ae.Z.h.call(this)}}G(Ae,Q);var Hh={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $e="closure_listenable_"+(1e6*Math.random()|0),Gh=0;function Wh(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Gh,this.ca=this.fa=!1}function xn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Mn(e){this.src=e,this.g={},this.h=0}Mn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Ps(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Wh(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Fs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Oo(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(xn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ps(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var hi="closure_lm_"+(1e6*Math.random()|0),Es={};function Bo(e,t,n,s,i){if(s&&s.once)return $o(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Bo(e,t[r],n,s,i);return null}return n=fi(n),e&&e[$e]?e.N(t,n,Ue(s)?!!s.capture:!!s,i):Uo(e,t,n,!1,s,i)}function Uo(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Ue(i)?!!i.capture:!!i,a=di(e);if(a||(e[hi]=a=new Mn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Qh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)zh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(qo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qh(){function e(n){return t.call(e.src,e.listener,n)}var t=Xh;return e}function $o(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)$o(e,t[r],n,s,i);return null}return n=fi(n),e&&e[$e]?e.O(t,n,Ue(s)?!!s.capture:!!s,i):Uo(e,t,n,!0,s,i)}function jo(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)jo(e,t[r],n,s,i);else s=Ue(s)?!!s.capture:!!s,n=fi(n),e&&e[$e]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Ps(r,n,s,i),-1<n&&(xn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=di(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ps(t,n,s,i)),(n=-1<e?t[e]:null)&&li(n))}function li(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[$e])Fs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(qo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=di(t))?(Fs(n,e),n.h==0&&(n.src=null,t[hi]=null)):xn(e)}}}function qo(e){return e in Es?Es[e]:Es[e]="on"+e}function Xh(e,t){if(e.ca)e=!0;else{t=new Ae(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&li(e),e=n.call(s,t)}return e}function di(e){return e=e[hi],e instanceof Mn?e:null}var Ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function fi(e){return typeof e=="function"?e:(e[Ts]||(e[Ts]=function(t){return e.handleEvent(t)}),e[Ts])}function $(){St.call(this),this.i=new Mn(this),this.P=this,this.I=null}G($,St);$.prototype[$e]=!0;$.prototype.removeEventListener=function(e,t,n,s){jo(this,e,t,n,s)};function z(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Q(t,e);else if(t instanceof Q)t.target=t.target||e;else{var i=t;t=new Q(s,e),Lo(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=en(o,s,!0,t)&&i}if(o=t.g=e,i=en(o,s,!0,t)&&i,i=en(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=en(o,s,!1,t)&&i}$.prototype.M=function(){if($.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)xn(n[s]);delete e.g[t],e.h--}}this.I=null};$.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};$.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function en(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Fs(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var pi=T.JSON.stringify;function Yh(){var e=zo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Jh{constructor(){this.h=this.g=null}add(t,n){const s=Ko.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ko=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Zh,e=>e.reset());class Zh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tl(e){T.setTimeout(()=>{throw e},0)}function gi(e,t){Vs||el(),Bs||(Vs(),Bs=!0),zo.add(e,t)}var Vs;function el(){var e=T.Promise.resolve(void 0);Vs=function(){e.then(nl)}}var Bs=!1,zo=new Jh;function nl(){for(var e;e=Yh();){try{e.h.call(e.g)}catch(n){tl(n)}var t=Ko;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Bs=!1}function Ln(e,t){$.call(this),this.h=e||1,this.g=t||T,this.j=K(this.kb,this),this.l=Date.now()}G(Ln,$);m=Ln.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),z(this,"tick"),this.da&&(mi(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mi(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}m.M=function(){Ln.Z.M.call(this),mi(this),delete this.g};function yi(e,t,n){if(typeof e=="function")n&&(e=K(e,n));else if(e&&typeof e.handleEvent=="function")e=K(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Ho(e){e.g=yi(()=>{e.g=null,e.i&&(e.i=!1,Ho(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class sl extends St{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ho(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(e){St.call(this),this.h=e,this.g={}}G(De,St);var br=[];function Go(e,t,n,s){Array.isArray(n)||(n&&(br[0]=n.toString()),n=br);for(var i=0;i<n.length;i++){var r=Bo(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Wo(e){ci(e.g,function(t,n){this.g.hasOwnProperty(n)&&li(t)},e),e.g={}}De.prototype.M=function(){De.Z.M.call(this),Wo(this)};De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fn(){this.g=!0}Fn.prototype.Aa=function(){this.g=!1};function il(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function rl(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Ht(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+al(e,n)+(s?" "+s:"")})}function ol(e,t){e.info(function(){return"TIMEOUT: "+t})}Fn.prototype.info=function(){};function al(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pi(n)}catch{return t}}var $t={},Sr=null;function Pn(){return Sr=Sr||new $}$t.Ma="serverreachability";function Qo(e){Q.call(this,$t.Ma,e)}G(Qo,Q);function ke(e){const t=Pn();z(t,new Qo(t))}$t.STAT_EVENT="statevent";function Xo(e,t){Q.call(this,$t.STAT_EVENT,e),this.stat=t}G(Xo,Q);function Z(e){const t=Pn();z(t,new Xo(t,e))}$t.Na="timingevent";function Yo(e,t){Q.call(this,$t.Na,e),this.size=t}G(Yo,Q);function je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Vn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Jo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vi(){}vi.prototype.h=null;function Cr(e){return e.h||(e.h=e.i())}function Zo(){}var qe={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function wi(){Q.call(this,"d")}G(wi,Q);function Ei(){Q.call(this,"c")}G(Ei,Q);var Us;function Bn(){}G(Bn,vi);Bn.prototype.g=function(){return new XMLHttpRequest};Bn.prototype.i=function(){return{}};Us=new Bn;function Ke(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new De(this),this.P=cl,e=Ms?125:void 0,this.W=new Ln(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ta}function ta(){this.i=null,this.g="",this.h=!1}var cl=45e3,$s={},mn={};m=Ke.prototype;m.setTimeout=function(e){this.P=e};function js(e,t,n){e.K=1,e.v=$n(mt(t)),e.s=n,e.U=!0,ea(e,null)}function ea(e,t){e.F=Date.now(),ze(e),e.A=mt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),ca(n.h,"t",s),e.C=0,n=e.l.H,e.h=new ta,e.g=ka(e.l,n?t:null,!e.s),0<e.O&&(e.L=new sl(K(e.Ia,e,e.g),e.O)),Go(e.V,e.g,"readystatechange",e.gb),t=e.H?Mo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ke(),il(e.j,e.u,e.A,e.m,e.X,e.s)}m.gb=function(e){e=e.target;const t=this.L;t&&dt(e)==3?t.l():this.Ia(e)};m.Ia=function(e){try{if(e==this.g)t:{const h=dt(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||Ms||this.g&&(this.h.h||this.g.ga()||_r(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?ke(3):ke(2)),Un(this);var n=this.g.ba();this.N=n;e:if(na(this)){var s=_r(this.g);e="";var i=s.length,r=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Dt(this),ye(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,rl(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pn(a)){var u=a;break e}}u=null}if(n=u)Ht(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qs(this,n);else{this.i=!1,this.o=3,Z(12),Dt(this),ye(this);break t}}this.U?(sa(this,h,o),Ms&&this.i&&h==3&&(Go(this.V,this.W,"tick",this.fb),this.W.start())):(Ht(this.j,this.m,o,null),qs(this,o)),h==4&&Dt(this),this.i&&!this.I&&(h==4?Sa(this.l,this):(this.i=!1,ze(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Dt(this),ye(this)}}}catch{}finally{}};function na(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function sa(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=ul(e,n),i==mn){t==4&&(e.o=4,Z(14),s=!1),Ht(e.j,e.m,null,"[Incomplete Response]");break}else if(i==$s){e.o=4,Z(15),Ht(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ht(e.j,e.m,i,null),qs(e,i);na(e)&&i!=mn&&i!=$s&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),_i(t),t.L=!0,Z(11))):(Ht(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),ye(e))}m.fb=function(){if(this.g){var e=dt(this.g),t=this.g.ga();this.C<t.length&&(Un(this),sa(this,e,t),this.i&&e!=4&&ze(this))}};function ul(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?mn:(n=Number(t.substring(n,s)),isNaN(n)?$s:(s+=1,s+n>t.length?mn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Dt(this)};function ze(e){e.Y=Date.now()+e.P,ia(e,e.P)}function ia(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=je(K(e.eb,e),t)}function Un(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ol(this.j,this.A),this.K!=2&&(ke(),Z(17)),Dt(this),this.o=2,ye(this)):ia(this,this.Y-e)};function ye(e){e.l.G==0||e.I||Sa(e.l,e)}function Dt(e){Un(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,mi(e.W),Wo(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function qs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ks(n.i,e))){if(n.I=e.N,!e.J&&Ks(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)En(n),Kn(n);else break t;ki(n),Z(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=je(K(n.ab,n),6e3));if(1>=la(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else kt(n,11)}else if((e.J||n.g==e)&&En(n),!pn(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(Y(v,"spdy")||Y(v,"quic")||Y(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(bi(r,r.h),r.h=null))}if(s.D){const D=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.sa=D,O(s.F,s.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Da(s,s.H?s.la:null,s.W),o.J){da(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Un(a),ze(a)),s.g=o}else Ia(s);0<n.l.length&&zn(n)}else u[0]!="stop"&&u[0]!="close"||kt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kt(n,7):Di(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}ke(4)}catch{}}function hl(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(xs(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ti(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(xs(e)||typeof e=="string")xo(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(xs(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=hl(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function re(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof re)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}m=re.prototype;m.R=function(){Ii(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};m.T=function(){return Ii(this),this.g.concat()};function Ii(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Mt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Mt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}m.get=function(e,t){return Mt(this.h,e)?this.h[e]:t};m.set=function(e,t){Mt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};m.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Mt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var ra=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ll(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Lt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Lt){this.g=t!==void 0?t:e.g,yn(this,e.j),this.s=e.s,vn(this,e.i),wn(this,e.m),this.l=e.l,t=e.h;var n=new _e;n.i=t.i,t.g&&(n.g=new re(t.g),n.h=t.h),Ar(this,n),this.o=e.o}else e&&(n=String(e).match(ra))?(this.g=!!t,yn(this,n[1]||"",!0),this.s=ve(n[2]||""),vn(this,n[3]||"",!0),wn(this,n[4]),this.l=ve(n[5]||"",!0),Ar(this,n[6]||"",!0),this.o=ve(n[7]||"")):(this.g=!!t,this.h=new _e(null,this.g))}Lt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(pe(t,Dr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(pe(t,Dr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(pe(n,n.charAt(0)=="/"?ml:gl,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",pe(n,vl)),e.join("")};function mt(e){return new Lt(e)}function yn(e,t,n){e.j=n?ve(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function vn(e,t,n){e.i=n?ve(t,!0):t}function wn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ar(e,t,n){t instanceof _e?(e.h=t,wl(e.h,e.g)):(n||(t=pe(t,yl)),e.h=new _e(t,e.g))}function O(e,t,n){e.h.set(t,n)}function $n(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function dl(e){return e instanceof Lt?mt(e):new Lt(e,void 0)}function fl(e,t,n,s){var i=new Lt(null,void 0);return e&&yn(i,e),t&&vn(i,t),n&&wn(i,n),s&&(i.l=s),i}function ve(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function pe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,pl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function pl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Dr=/[#\/\?@]/g,gl=/[#\?:]/g,ml=/[#\?]/g,yl=/[#\?@]/g,vl=/#/g;function _e(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ct(e){e.g||(e.g=new re,e.h=0,e.i&&ll(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=_e.prototype;m.add=function(e,t){Ct(this),this.i=null,e=oe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function oa(e,t){Ct(e),t=oe(e,t),Mt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Mt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ii(e)))}function aa(e,t){return Ct(e),t=oe(e,t),Mt(e.g.h,t)}m.forEach=function(e,t){Ct(this),this.g.forEach(function(n,s){xo(n,function(i){e.call(t,i,s,this)},this)},this)};m.T=function(){Ct(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};m.R=function(e){Ct(this);var t=[];if(typeof e=="string")aa(this,e)&&(t=yr(t,this.g.get(oe(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=yr(t,e[n])}return t};m.set=function(e,t){return Ct(this),this.i=null,e=oe(this,e),aa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ca(e,t,n){oa(e,t),0<n.length&&(e.i=null,e.g.set(oe(e,t),ai(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function oe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wl(e,t){t&&!e.j&&(Ct(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(oa(this,s),ca(this,i,n))},e)),e.j=t}var El=class{constructor(e,t){this.h=e,this.g=t}};function ua(e){this.l=e||Tl,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tl=10;function ha(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function la(e){return e.h?1:e.g?e.g.size:0}function Ks(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function bi(e,t){e.g?e.g.add(t):e.h=t}function da(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ua.prototype.cancel=function(){if(this.i=fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function fa(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ai(e.i)}function Si(){}Si.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Si.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Il(){this.g=new Si}function bl(e,t,n){const s=n||"";try{Ti(e,function(i,r){let o=i;Ue(i)&&(o=pi(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Sl(e,t){const n=new Fn;if(T.Image){const s=new Image;s.onload=tn(nn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=tn(nn,n,s,"TestLoadImage: error",!1,t),s.onabort=tn(nn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=tn(nn,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function nn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function He(e){this.l=e.$b||null,this.j=e.ib||!1}G(He,vi);He.prototype.g=function(){return new jn(this.l,this.j)};He.prototype.i=function(e){return function(){return e}}({});function jn(e,t){$.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ci,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(jn,$);var Ci=0;m=jn.prototype;m.open=function(e,t){if(this.readyState!=Ci)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ne(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ge(this)),this.readyState=Ci};m.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ne(this)),this.g&&(this.readyState=3,Ne(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pa(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function pa(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}m.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ge(this):Ne(this),this.readyState==3&&pa(this)}};m.Ua=function(e){this.g&&(this.response=this.responseText=e,Ge(this))};m.Ta=function(e){this.g&&(this.response=e,Ge(this))};m.ha=function(){this.g&&Ge(this)};function Ge(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ne(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ne(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Cl=T.JSON.parse;function F(e){$.call(this),this.headers=new re,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ga,this.K=this.L=!1}G(F,$);var ga="",Al=/^https?$/i,Dl=["POST","PUT"];m=F.prototype;m.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Us.g(),this.C=this.u?Cr(this.u):Cr(Us),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){kr(this,r);return}e=n||"";const i=new re(this.headers);s&&Ti(s,function(r,o){i.set(o,r)}),s=Vh(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=Oo(Dl,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{va(this),0<this.B&&((this.K=kl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=yi(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){kr(this,r)}};function kl(e){return Xt&&qh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function _l(e){return e.toLowerCase()=="content-type"}m.pa=function(){typeof oi!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function kr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ma(e),qn(e)}function ma(e){e.D||(e.D=!0,z(e,"complete"),z(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),qn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qn(this,!0)),F.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?ya(this):this.cb())};m.cb=function(){ya(this)};function ya(e){if(e.h&&typeof oi!="undefined"&&(!e.C[1]||dt(e)!=4||e.ba()!=2)){if(e.v&&dt(e)==4)yi(e.Fa,0,e);else if(z(e,"readystatechange"),dt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(ra)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Al.test(i?i.toLowerCase():"")}n=s}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var o=2<dt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",ma(e)}}finally{qn(e)}}}}function qn(e,t){if(e.g){va(e);const n=e.g,s=e.C[0]?fn:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=s}catch{}}}function va(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function dt(e){return e.g?e.g.readyState:0}m.ba=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Cl(t)}};function _r(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ga:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nl(e){let t="";return ci(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ai(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Nl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function fe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function wa(e){this.za=0,this.l=[],this.h=new Fn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=fe("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=fe("baseRetryDelayMs",5e3,e),this.$a=fe("retryDelaySeedMs",1e4,e),this.Ya=fe("forwardChannelMaxRetries",2,e),this.ra=fe("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ua(e&&e.concurrentRequestLimit),this.Ca=new Il,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}m=wa.prototype;m.ma=8;m.G=1;function Di(e){if(Ea(e),e.G==3){var t=e.V++,n=mt(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),We(e,n),t=new Ke(e,e.h,t,void 0),t.K=2,t.v=$n(mt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=ka(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}Aa(e)}m.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Kn(e){e.g&&(_i(e),e.g.cancel(),e.g=null)}function Ea(e){Kn(e),e.u&&(T.clearTimeout(e.u),e.u=null),En(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Is(e,t){e.l.push(new El(e.Za++,t)),e.G==3&&zn(e)}function zn(e){ha(e.i)||e.m||(e.m=!0,gi(e.Ha,e),e.C=0)}function Rl(e,t){return la(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=je(K(e.Ha,e,t),Ca(e,e.C)),e.C++,!0)}m.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ke(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=Mo(r),Lo(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ta(this,i,t),n=mt(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),We(this,n),this.o&&r&&Ai(n,this.o,r),bi(this.i,i),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),i.$=!0,js(i,n,null)):js(i,n,t),this.G=2}}else this.G==3&&(e?Nr(this,e):this.l.length==0||ha(this.i)||Nr(this))};function Nr(e,t){var n;t?n=t.m:n=e.V++;const s=mt(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),We(e,s),e.o&&e.s&&Ai(s,e.o,e.s),n=new Ke(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Ta(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),bi(e.i,n),js(n,s,t)}function We(e,t){e.j&&Ti({},function(n,s){O(t,s,n)})}function Ta(e,t,n){n=Math.min(e.l.length,n);var s=e.j?K(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const h=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{bl(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Ia(e){e.g||e.u||(e.Y=1,gi(e.Ga,e),e.A=0)}function ki(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=je(K(e.Ga,e),Ca(e,e.A)),e.A++,!0)}m.Ga=function(){if(this.u=null,ba(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=je(K(this.bb,this),e)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Z(10),Kn(this),ba(this))};function _i(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function ba(e){e.g=new Ke(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=mt(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),We(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&Ai(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=$n(mt(t)),n.s=null,n.U=!0,ea(n,e)}m.ab=function(){this.v!=null&&(this.v=null,Kn(this),ki(this),Z(19))};function En(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Sa(e,t){var n=null;if(e.g==t){En(e),_i(e),e.g=null;var s=2}else if(Ks(e.i,t))n=t.D,da(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Pn(),z(s,new Yo(s,n)),zn(e)}else Ia(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Rl(e,t)||s==2&&ki(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:kt(e,5);break;case 4:kt(e,10);break;case 3:kt(e,6);break;default:kt(e,2)}}}function Ca(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function kt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=K(e.jb,e);n||(n=new Lt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||yn(n,"https"),$n(n)),Sl(n.toString(),s)}else Z(2);e.G=0,e.j&&e.j.va(t),Aa(e),Ea(e)}m.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Z(2)):(this.h.info("Failed to ping google.com"),Z(1))};function Aa(e){e.G=0,e.I=-1,e.j&&((fa(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ai(e.l),e.l.length=0),e.j.ua())}function Da(e,t,n){let s=dl(n);if(s.i!="")t&&vn(s,t+"."+s.i),wn(s,s.m);else{const i=T.location;s=fl(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&ci(e.aa,function(i,r){O(s,r,i)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),We(e,s),s}function ka(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new F(new He({ib:!0})):new F(e.qa),t.L=e.H,t}function _a(){}m=_a.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function Tn(){if(Xt&&!(10<=Number(Kh)))throw Error("Environmental error: no available transport.")}Tn.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){$.call(this),this.g=new wa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!pn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ae(this)}G(rt,$);rt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),gi(K(e.hb,e,t))),Z(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Da(e,null,e.W),zn(e)};rt.prototype.close=function(){Di(this.g)};rt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Is(this.g,t)}else this.v?(t={},t.__data__=pi(e),Is(this.g,t)):Is(this.g,e)};rt.prototype.M=function(){this.g.j=null,delete this.j,Di(this.g),delete this.g,rt.Z.M.call(this)};function Na(e){wi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(Na,wi);function Ra(){Ei.call(this),this.status=1}G(Ra,Ei);function ae(e){this.g=e}G(ae,_a);ae.prototype.xa=function(){z(this.g,"a")};ae.prototype.wa=function(e){z(this.g,new Na(e))};ae.prototype.va=function(e){z(this.g,new Ra)};ae.prototype.ua=function(){z(this.g,"b")};Tn.prototype.createWebChannel=Tn.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Vn.NO_ERROR=0;Vn.TIMEOUT=8;Vn.HTTP_ERROR=6;Jo.COMPLETE="complete";Zo.EventType=qe;qe.OPEN="a";qe.CLOSE="b";qe.ERROR="c";qe.MESSAGE="d";$.prototype.listen=$.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var Ol=function(){return new Tn},xl=function(){return Pn()},bs=Vn,Ml=Jo,Ll=$t,Rr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fl=He,sn=Zo,Pl=F;const Or="@firebase/firestore";/**
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
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let ce="9.9.0";/**
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
 */const Ft=new si("@firebase/firestore");function xr(){return Ft.logLevel}function y(e,...t){if(Ft.logLevel<=_.DEBUG){const n=t.map(Ni);Ft.debug(`Firestore (${ce}): ${e}`,...n)}}function Et(e,...t){if(Ft.logLevel<=_.ERROR){const n=t.map(Ni);Ft.error(`Firestore (${ce}): ${e}`,...n)}}function Mr(e,...t){if(Ft.logLevel<=_.WARN){const n=t.map(Ni);Ft.warn(`Firestore (${ce}): ${e}`,...n)}}function Ni(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ce}) INTERNAL ASSERTION FAILED: `+e;throw Et(t),new Error(t)}function R(e,t){e||I()}function b(e,t){return e}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ie{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Vl{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Ul{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Rt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Rt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Vl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new tt(t)}}class $l{constructor(t,n,s){this.type="FirstParty",this.user=tt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class jl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new $l(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ql{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kl{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.p=n.token,new ql(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zl(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Oa{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=zl(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function Yt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new P(0,0))}static max(){return new S(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Re{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Re.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Re?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Re{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const Hl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Re{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return Hl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new E(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new E(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(x.fromString(t))}static fromName(t){return new w(x.fromString(t).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new x(t.slice()))}}function Gl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new Tt(i,w.empty(),t)}function Wl(e){return new Tt(e.readTime,e.key,-1)}class Tt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(S.min(),w.empty(),-1)}static max(){return new Tt(S.max(),w.empty(),-1)}}function Ql(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
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
 */const Xl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Qe(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Xl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new f((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new f((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Xe(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ri{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
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
 */function Lr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function jt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */Ri.ot=-1;class B{constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rn(this.root,t,this.comparator,!1)}getReverseIterator(){return new rn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rn(this.root,t,this.comparator,!0)}}class rn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:j.RED,this.left=i!=null?i:j.EMPTY,this.right=r!=null?r:j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new j(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return j.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class V{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fr(this.data.getIterator())}getIteratorFrom(t){return new Fr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof V)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new V(this.comparator);return n.data=t,n}}class Fr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ut([])}unionWith(t){let n=new V(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Yt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class H{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new H(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new H(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}H.EMPTY_BYTE_STRING=new H("");const Jl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(e){if(R(!!e),typeof e=="string"){let t=0;const n=Jl.exec(e);if(R(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Jt(e){return typeof e=="string"?H.fromBase64String(e):H.fromUint8Array(e)}/**
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
 */function Ma(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function La(e){const t=e.mapValue.fields.__previous_value__;return Ma(t)?La(t):t}function Oe(e){const t=It(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */class Zl{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Zt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Zt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Zt&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function Hn(e){return e==null}function In(e){return e===0&&1/e==-1/0}function td(e){return typeof e=="number"&&Number.isInteger(e)&&!In(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const on={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ma(e)?4:ed(e)?9007199254740991:10:I()}function lt(e,t){if(e===t)return!0;const n=Pt(e);if(n!==Pt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Oe(e).isEqual(Oe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=It(s.timestampValue),o=It(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return L(s.geoPointValue.latitude)===L(i.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return L(s.integerValue)===L(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=L(s.doubleValue),o=L(i.doubleValue);return r===o?In(r)===In(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Yt(e.arrayValue.values||[],t.arrayValue.values||[],lt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Lr(r)!==Lr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!lt(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function xe(e,t){return(e.values||[]).find(n=>lt(n,t))!==void 0}function te(e,t){if(e===t)return 0;const n=Pt(e),s=Pt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=L(i.integerValue||i.doubleValue),a=L(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Pr(e.timestampValue,t.timestampValue);case 4:return Pr(Oe(e),Oe(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Jt(i),a=Jt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=N(L(i.latitude),L(r.latitude));return o!==0?o:N(L(i.longitude),L(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=te(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===on.mapValue&&r===on.mapValue)return 0;if(i===on.mapValue)return 1;if(r===on.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const d=te(o[a[h]],c[u[h]]);if(d!==0)return d}return N(a.length,u.length)}(e.mapValue,t.mapValue);default:throw I()}}function Pr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=It(e),s=It(t),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function Wt(e){return zs(e)}function zs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=It(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Jt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=zs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Hs(e){return!!e&&"integerValue"in e}function Oi(e){return!!e&&"arrayValue"in e}function Vr(e){return!!e&&"nullValue"in e}function Br(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function an(e){return!!e&&"mapValue"in e}function we(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return jt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=we(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=we(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ed(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!an(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=we(n)}setAll(t){let n=W.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=we(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());an(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return lt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];an(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){jt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new st(we(this.value))}}function Fa(e){const t=[];return jt(e.fields,(n,s)=>{const i=new W([n]);if(an(s)){const r=Fa(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ut(t)}/**
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
 */class q{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new q(t,0,S.min(),S.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new q(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new q(t,2,n,S.min(),st.empty(),0)}static newUnknownDocument(t,n){return new q(t,3,n,S.min(),st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new q(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nd{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Ur(e,t=null,n=[],s=[],i=null,r=null,o=null){return new nd(e,t,n,s,i,r,o)}function xi(e){const t=b(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Wt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Hn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Wt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Wt(s)).join(",")),t.ut=n}return t.ut}function sd(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Wt(s.value)}`;var s}).join(", ")}]`),Hn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Wt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Wt(n)).join(",")),`Target(${t})`}function Mi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ld(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!lt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!jr(e.startAt,t.startAt)&&jr(e.endAt,t.endAt)}function Gs(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class et extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new id(t,n,s):n==="array-contains"?new ad(t,s):n==="in"?new cd(t,s):n==="not-in"?new ud(t,s):n==="array-contains-any"?new hd(t,s):new et(t,n,s)}static ct(t,n,s){return n==="in"?new rd(t,s):new od(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(te(n,this.value)):n!==null&&Pt(this.value)===Pt(n)&&this.at(te(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class id extends et{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.at(n)}}class rd extends et{constructor(t,n){super(t,"in",n),this.keys=Pa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class od extends et{constructor(t,n){super(t,"not-in",n),this.keys=Pa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Pa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class ad extends et{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Oi(n)&&xe(n.arrayValue,this.value)}}class cd extends et{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xe(this.value.arrayValue,n)}}class ud extends et{constructor(t,n){super(t,"not-in",n)}matches(t){if(xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xe(this.value.arrayValue,n)}}class hd extends et{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Oi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xe(this.value.arrayValue,s))}}class bn{constructor(t,n){this.position=t,this.inclusive=n}}class Ee{constructor(t,n="asc"){this.field=t,this.dir=n}}function ld(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function $r(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=te(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function jr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!lt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Gn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function dd(e,t,n,s,i,r,o,a){return new Gn(e,t,n,s,i,r,o,a)}function Li(e){return new Gn(e)}function fd(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function pd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function gd(e){for(const t of e.filters)if(t.ht())return t.field;return null}function md(e){return e.collectionGroup!==null}function Me(e){const t=b(e);if(t.lt===null){t.lt=[];const n=gd(t),s=pd(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new Ee(n)),t.lt.push(new Ee(W.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Ee(W.keyField(),r))}}}return t.lt}function Vt(e){const t=b(e);if(!t.ft)if(t.limitType==="F")t.ft=Ur(t.path,t.collectionGroup,Me(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Me(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ee(r.field,o))}const s=t.endAt?new bn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new bn(t.startAt.position,t.startAt.inclusive):null;t.ft=Ur(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.ft}function yd(e,t,n){return new Gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Wn(e,t){return Mi(Vt(e),Vt(t))&&e.limitType===t.limitType}function Va(e){return`${xi(Vt(e))}|lt:${e.limitType}`}function Ws(e){return`Query(target=${sd(Vt(e))}; limitType=${e.limitType})`}function Fi(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):w.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=$r(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Me(n),s)||n.endAt&&!function(i,r,o){const a=$r(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Me(n),s))}(e,t)}function vd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ba(e){return(t,n)=>{let s=!1;for(const i of Me(e)){const r=wd(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function wd(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?te(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function Ua(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:In(t)?"-0":t}}function $a(e){return{integerValue:""+e}}function ja(e,t){return td(t)?$a(t):Ua(e,t)}/**
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
 */class Qn{constructor(){this._=void 0}}function Ed(e,t,n){return e instanceof Sn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Le?Ka(e,t):e instanceof Fe?za(e,t):function(s,i){const r=qa(s,i),o=qr(r)+qr(s._t);return Hs(r)&&Hs(s._t)?$a(o):Ua(s.wt,o)}(e,t)}function Td(e,t,n){return e instanceof Le?Ka(e,t):e instanceof Fe?za(e,t):n}function qa(e,t){return e instanceof Pe?Hs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Sn extends Qn{}class Le extends Qn{constructor(t){super(),this.elements=t}}function Ka(e,t){const n=Ha(t);for(const s of e.elements)n.some(i=>lt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Fe extends Qn{constructor(t){super(),this.elements=t}}function za(e,t){let n=Ha(t);for(const s of e.elements)n=n.filter(i=>!lt(i,s));return{arrayValue:{values:n}}}class Pe extends Qn{constructor(t,n){super(),this.wt=t,this._t=n}}function qr(e){return L(e.integerValue||e.doubleValue)}function Ha(e){return Oi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class Id{constructor(t,n){this.field=t,this.transform=n}}function bd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Le&&s instanceof Le||n instanceof Fe&&s instanceof Fe?Yt(n.elements,s.elements,lt):n instanceof Pe&&s instanceof Pe?lt(n._t,s._t):n instanceof Sn&&s instanceof Sn}(e.transform,t.transform)}class Sd{constructor(t,n){this.version=t,this.transformResults=n}}class ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ft}static exists(t){return new ft(void 0,t)}static updateTime(t){return new ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Xn{}function Ga(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Qa(e.key,ft.none()):new Yn(e.key,e.data,ft.none());{const n=e.data,s=st.empty();let i=new V(W.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new qt(e.key,s,new ut(i.toArray()),ft.none())}}function Cd(e,t,n){e instanceof Yn?function(s,i,r){const o=s.value.clone(),a=zr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof qt?function(s,i,r){if(!cn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=zr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Wa(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Te(e,t,n,s){return e instanceof Yn?function(i,r,o,a){if(!cn(i.precondition,r))return o;const c=i.value.clone(),u=Hr(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof qt?function(i,r,o,a){if(!cn(i.precondition,r))return o;const c=Hr(i.fieldTransforms,a,r),u=r.data;return u.setAll(Wa(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return cn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Ad(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=qa(s.transform,i||null);r!=null&&(n===null&&(n=st.empty()),n.set(s.field,r))}return n||null}function Kr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Yt(n,s,(i,r)=>bd(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Yn extends Xn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qt extends Xn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Wa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function zr(e,t,n){const s=new Map;R(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Td(o,a,n[i]))}return s}function Hr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ed(r,o,t))}return s}class Qa extends Xn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dd extends Xn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kd{constructor(t){this.count=t}}/**
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
 */var M,A;function _d(e){switch(e){default:return I();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Xa(e){if(e===void 0)return Et("GRPC error has no .code"),p.UNKNOWN;switch(e){case M.OK:return p.OK;case M.CANCELLED:return p.CANCELLED;case M.UNKNOWN:return p.UNKNOWN;case M.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case M.INTERNAL:return p.INTERNAL;case M.UNAVAILABLE:return p.UNAVAILABLE;case M.UNAUTHENTICATED:return p.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case M.NOT_FOUND:return p.NOT_FOUND;case M.ALREADY_EXISTS:return p.ALREADY_EXISTS;case M.PERMISSION_DENIED:return p.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case M.ABORTED:return p.ABORTED;case M.OUT_OF_RANGE:return p.OUT_OF_RANGE;case M.UNIMPLEMENTED:return p.UNIMPLEMENTED;case M.DATA_LOSS:return p.DATA_LOSS;default:return I()}}(A=M||(M={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ue{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){jt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return xa(this.inner)}size(){return this.innerSize}}/**
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
 */const Nd=new B(w.comparator);function yt(){return Nd}const Ya=new B(w.comparator);function ge(...e){let t=Ya;for(const n of e)t=t.insert(n.key,n);return t}function Ja(e){let t=Ya;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function _t(){return Ie()}function Za(){return Ie()}function Ie(){return new ue(e=>e.toString(),(e,t)=>e.isEqual(t))}const Rd=new B(w.comparator),Od=new V(w.comparator);function C(...e){let t=Od;for(const n of e)t=t.add(n);return t}const xd=new V(N);function tc(){return xd}/**
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
 */class Jn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ye.createSynthesizedTargetChangeForCurrentChange(t,n)),new Jn(S.min(),s,tc(),yt(),C())}}class Ye{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ye(H.EMPTY_BYTE_STRING,n,C(),C(),C())}}/**
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
 */class un{constructor(t,n,s,i){this.gt=t,this.removedTargetIds=n,this.key=s,this.yt=i}}class ec{constructor(t,n){this.targetId=t,this.It=n}}class nc{constructor(t,n,s=H.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Gr{constructor(){this.Tt=0,this.Et=Qr(),this.At=H.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=C(),n=C(),s=C();return this.Et.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Ye(this.At,this.Rt,t,n,s)}Dt(){this.bt=!1,this.Et=Qr()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Md{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=yt(),this.Bt=Wr(),this.Lt=new V(N)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const s=this.Qt(n);switch(t.state){case 0:this.jt(n)&&s.Vt(t.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(t.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(t){const n=t.targetId,s=t.It.count,i=this.Ht(n);if(i){const r=i.target;if(Gs(r))if(s===0){const o=new w(r.path);this.Kt(n,o,q.newNoDocument(o,S.min()))}else R(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&Gs(a.target)){const c=new w(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,q.newNoDocument(c,t))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=C();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(t));const i=new Jn(t,n,this.Lt,this.$t,s);return this.$t=yt(),this.Bt=Wr(),this.Lt=new V(N),i}qt(t,n){if(!this.jt(t))return;const s=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,s){if(!this.jt(t))return;const i=this.Qt(t);this.Xt(t,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new Gr,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new V(N),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Gr),this.Mt.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Mt.getRemoteKeysForTarget(t).has(n)}}function Wr(){return new B(w.comparator)}function Qr(){return new B(w.comparator)}/**
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
 */const Ld=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Fd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Pd{constructor(t,n){this.databaseId=t,this.dt=n}}function Cn(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sc(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Vd(e,t){return Cn(e,t.toTimestamp())}function pt(e){return R(!!e),S.fromTimestamp(function(t){const n=It(t);return new P(n.seconds,n.nanos)}(e))}function Pi(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ic(e){const t=x.fromString(e);return R(ac(t)),t}function Qs(e,t){return Pi(e.databaseId,t.path)}function Ss(e,t){const n=ic(t);if(n.get(1)!==e.databaseId.projectId)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(rc(n))}function Xs(e,t){return Pi(e.databaseId,t)}function Bd(e){const t=ic(e);return t.length===4?x.emptyPath():rc(t)}function Ys(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rc(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Xr(e,t,n){return{name:Qs(e,t),fields:n.value.mapValue.fields}}function Ud(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.dt?(R(u===void 0||typeof u=="string"),H.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),H.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:Xa(c.code);return new E(u,c.message||"")}(o);n=new nc(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ss(e,s.document.name),r=pt(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=q.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new un(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Ss(e,s.document),r=s.readTime?pt(s.readTime):S.min(),o=q.newNoDocument(i,r),a=s.removedTargetIds||[];n=new un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Ss(e,s.document),r=s.removedTargetIds||[];n=new un([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new kd(i),o=s.targetId;n=new ec(o,r)}}return n}function $d(e,t){let n;if(t instanceof Yn)n={update:Xr(e,t.key,t.value)};else if(t instanceof Qa)n={delete:Qs(e,t.key)};else if(t instanceof qt)n={update:Xr(e,t.key,t.data),updateMask:Yd(t.fieldMask)};else{if(!(t instanceof Dd))return I();n={verify:Qs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Sn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Le)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fe)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pe)return{fieldPath:r.field.canonicalString(),increment:o._t};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Vd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function jd(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?pt(s.updateTime):pt(i);return r.isEqual(S.min())&&(r=pt(i)),new Sd(r,s.transformResults||[])}(n,t))):[]}function qd(e,t){return{documents:[Xs(e,t.path)]}}function Kd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Xs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(Br(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NAN"}};if(Vr(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Br(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NOT_NAN"}};if(Vr(l.value))return{unaryFilter:{field:zt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(l.field),op:Wd(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:zt(h.field),direction:Gd(h.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.dt||Hn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function zd(e){let t=Bd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=oc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Ee(Gt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Hn(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new bn(d,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new bn(d,l)}(n.endAt)),dd(t,i,o,r,a,"F",c,u)}function Hd(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function oc(e){return e?e.unaryFilter!==void 0?[Xd(e)]:e.fieldFilter!==void 0?[Qd(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>oc(t)).reduce((t,n)=>t.concat(n)):I():[]}function Gd(e){return Ld[e]}function Wd(e){return Fd[e]}function zt(e){return{fieldPath:e.canonicalString()}}function Gt(e){return W.fromServerFormat(e.fieldPath)}function Qd(e){return et.create(Gt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Xd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Gt(e.unaryFilter.field);return et.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Gt(e.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gt(e.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gt(e.unaryFilter.field);return et.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Yd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ac(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Jd{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Cd(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Te(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Te(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Za();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Ga(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),C())}isEqual(t){return this.batchId===t.batchId&&Yt(this.mutations,t.mutations,(n,s)=>Kr(n,s))&&Yt(this.baseMutations,t.baseMutations,(n,s)=>Kr(n,s))}}class Vi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){R(t.mutations.length===s.length);let i=Rd;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Vi(t,n,s,i)}}/**
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
 */class Zd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ot{constructor(t,n,s,i,r=S.min(),o=S.min(),a=H.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Ot(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class tf{constructor(t){this.ne=t}}function ef(e){const t=zd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?yd(t,t.limit,"L"):t}/**
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
 */class nf{constructor(){this.ze=new sf}addToCollectionParentIndex(t,n){return this.ze.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Tt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Tt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class sf{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new V(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new V(x.comparator)).toArray()}}/**
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
 */class ee{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new ee(0)}static Rn(){return new ee(-1)}}/**
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
 */class rf{constructor(){this.changes=new ue(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class of{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class af{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&Te(s.mutation,i,ut.empty(),P.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,C()).next(()=>s))}getLocalViewOfDocuments(t,n,s=C()){const i=_t();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=ge();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=_t();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,C()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=yt();const o=Ie(),a=Ie();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof qt)?r=r.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),Te(h.mutation,u,h.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new of(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ie();let i=new B((o,a)=>o-a),r=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||ut.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(i.get(a.batchId)||C()).add(c);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=Za();h.forEach(d=>{if(!r.has(d)){const g=Ga(n.get(d),s.get(d));g!==null&&l.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):md(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):f.resolve(_t());let a=-1,c=r;return o.next(u=>f.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?f.resolve():this.getBaseDocument(t,h,l).next(d=>{c=c.insert(h,d)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,C())).next(h=>({batchId:a,changes:Ja(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let i=ge();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=ge();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const c=function(u,h){return new Gn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,q.newInvalidDocument(u)))});let o=ge();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Te(u.mutation,c,ut.empty(),P.now()),Fi(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):f.resolve(q.newInvalidDocument(n))}}/**
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
 */class cf{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return f.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:pt(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:ef(s.bundledQuery),readTime:pt(s.readTime)}}(n)),f.resolve()}}/**
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
 */class uf{constructor(){this.overlays=new B(w.comparator),this.Xn=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=_t();return f.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ie(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=_t(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new B((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=_t(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=_t(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return f.resolve(a)}ie(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Zd(n,s));let r=this.Xn.get(n);r===void 0&&(r=C(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
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
 */class Bi{constructor(){this.Zn=new V(U.ts),this.es=new V(U.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new U(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new U(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new w(new x([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new w(new x([])),s=new U(n,t),i=new U(n,t+1);let r=C();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return w.comparator(t.key,n.key)||N(t.ls,n.ls)}static ns(t,n){return N(t.ls,n.ls)||w.comparator(t.key,n.key)}}/**
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
 */class hf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new V(U.ts)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jd(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new V(N);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),f.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new U(new w(r),0);let a=new V(N);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),f.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){R(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return f.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new U(n,0),i=this.ds.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lf{constructor(t){this.ps=t,this.docs=new B(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():q.newInvalidDocument(n))}getEntries(t,n){let s=yt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():q.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(t,n,s){let i=yt();const r=new w(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ql(Wl(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Is(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new df(this)}getSize(t){return f.resolve(this.size)}}class df extends rf{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(t,i)):this.zn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
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
 */class ff{constructor(t){this.persistence=t,this.Ts=new ue(n=>xi(n),Mi),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Es=0,this.As=new Bi,this.targetCount=0,this.Rs=ee.An()}forEachTarget(t,n){return this.Ts.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),f.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new ee(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.vn(n),f.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.As.containsKey(n))}}/**
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
 */class pf{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Ri(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new ff(this),this.indexManager=new nf,this.remoteDocumentCache=function(s){return new lf(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new tf(n),this.Ds=new cf(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new uf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new hf(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new gf(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(t,n){return f.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class gf extends Yl{constructor(t){super(),this.currentSequenceNumber=t}}class Ui{constructor(t){this.persistence=t,this.ks=new Bi,this.Os=null}static Ms(t){return new Ui(t)}get Fs(){if(this.Os)return this.Os;throw I()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),f.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Os=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Fs,s=>{const i=w.fromPath(s);return this.$s(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.Os=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return f.or([()=>f.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
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
 */class $i{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(t,n){let s=C(),i=C();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new $i(t,n.fromCache,s,i)}}/**
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
 */class mf{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ci(t,n).next(r=>r||this.xi(t,n,i,s)).next(r=>r||this.Ni(t,n))}Ci(t,n){return f.resolve(null)}xi(t,n,s,i){return fd(n)||i.isEqual(S.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(t,n):(xr()<=_.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ws(n)),this.Mi(t,o,n,Gl(i,-1)))})}ki(t,n){let s=new V(Ba(t));return n.forEach((i,r)=>{Fi(t,r)&&(s=s.add(r))}),s}Oi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(t,n){return xr()<=_.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Di.getDocumentsMatchingQuery(t,n,Tt.min())}Mi(t,n,s,i){return this.Di.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class yf{constructor(t,n,s,i){this.persistence=t,this.Fi=n,this.wt=i,this.$i=new B(N),this.Bi=new ue(r=>xi(r),Mi),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new af(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function vf(e,t,n,s){return new yf(e,t,n,s)}async function cc(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=C();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function wf(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=f.resolve();return l.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const D=c.docVersions.get(g);R(D!==null),v.version.compareTo(D)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=C();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function uc(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function Ef(e,t){const n=b(e),s=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];t.targetChanges.forEach((h,l)=>{const d=i.get(l);if(!d)return;a.push(n.Vs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Vs.addMatchingKeys(r,h.addedDocuments,l)));let g=d.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?g=g.withResumeToken(H.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(l,g),function(v,D,k){return v.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,h)&&a.push(n.Vs.updateTargetData(r,g))});let c=yt(),u=C();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Tf(r,o,t.documentUpdates).next(h=>{c=h.Gi,u=h.Qi})),!s.isEqual(S.min())){const h=n.Vs.getLastRemoteSnapshotVersion(r).next(l=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.$i=i,r))}function Tf(e,t,n){let s=C(),i=C();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=yt();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function If(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function bf(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new Ot(t,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(t,s.targetId)),s})}async function Js(e,t,n){const s=b(e),i=s.$i.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xe(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.$i=s.$i.remove(t),s.Bi.delete(i.target)}function Yr(e,t,n){const s=b(e);let i=S.min(),r=C();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=b(a),l=h.Bi.get(u);return l!==void 0?f.resolve(h.$i.get(l)):h.Vs.getTargetData(c,u)}(s,o,Vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,t,n?i:S.min(),n?r:C())).next(a=>(Sf(s,vd(t),a),{documents:a,ji:r})))}function Sf(e,t,n){let s=S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Li.set(t,s)}class Jr{constructor(){this.activeTargetIds=tc()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cf{constructor(){this.Fr=new Jr,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Jr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Af{Br(t){}shutdown(){}}/**
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
 */class Zr{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Df={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class kf{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
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
 */class _f extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Mr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}ao(t,n,s,i,r,o){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ce,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=Df[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,i){return new Promise((r,o)=>{const a=new Pl;a.listenOnce(Ml.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case bs.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),r(u);break;case bs.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new E(p.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const h=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(v)>=0?v:p.UNKNOWN}(l.status);o(new E(d,l.message))}else o(new E(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(p.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ol(),o=xl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Fl({})),this.uo(a.initMessageHeaders,n,s),fu()||pu()||gu()||mu()||yu()||Io()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");y("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let h=!1,l=!1;const d=new kf({jr:v=>{l?y("Connection","Not sending because WebChannel is closed:",v):(h||(y("Connection","Opening WebChannel transport."),u.open(),h=!0),y("Connection","WebChannel sending:",v),u.send(v))},Wr:()=>u.close()}),g=(v,D,k)=>{v.listen(D,X=>{try{k(X)}catch(nt){setTimeout(()=>{throw nt},0)}})};return g(u,sn.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),g(u,sn.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),d.eo())}),g(u,sn.EventType.ERROR,v=>{l||(l=!0,Mr("Connection","WebChannel transport errored:",v),d.eo(new E(p.UNAVAILABLE,"The operation could not be completed")))}),g(u,sn.EventType.MESSAGE,v=>{var D;if(!l){const k=v.data[0];R(!!k);const X=k,nt=X.error||((D=X[0])===null||D===void 0?void 0:D.error);if(nt){y("Connection","WebChannel received error:",nt);const le=nt.status;let de=function(au){const ar=M[au];if(ar!==void 0)return Xa(ar)}(le),or=nt.message;de===void 0&&(de=p.INTERNAL,or="Unknown error status: "+le+" with message "+nt.message),l=!0,d.eo(new E(de,or)),u.close()}else y("Connection","WebChannel received:",k),d.no(k)}}),g(o,Ll.STAT_EVENT,v=>{v.stat===Rr.PROXY?y("Connection","Detected buffering proxy"):v.stat===Rr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Cs(){return typeof document!="undefined"?document:null}/**
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
 */function Zn(e){return new Pd(e,!0)}class hc{constructor(t,n,s=1e3,i=1.5,r=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class lc{constructor(t,n,s,i,r,o,a,c){this.js=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new hc(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new E(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nf extends lc{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Ud(this.wt,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?pt(r.readTime):S.min()}(t);return this.listener.Go(n,s)}Qo(t){const n={};n.database=Ys(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=Gs(a)?{documents:qd(i,a)}:{query:Kd(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=sc(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Cn(i,r.snapshotVersion.toTimestamp())),o}(this.wt,t);const s=Hd(this.wt,t);s&&(n.labels=s),this.Mo(n)}jo(t){const n={};n.database=Ys(this.wt),n.removeTarget=t,this.Mo(n)}}class Rf extends lc{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=jd(t.writeResults,t.commitTime),s=pt(t.commitTime);return this.listener.Jo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Ys(this.wt),this.Mo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>$d(this.wt,s))};this.Mo(n)}}/**
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
 */class Of extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(p.UNKNOWN,i.toString())})}ao(t,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(p.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class xf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Et(n),this.su=!1):y("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class Mf{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{Kt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.lu.add(4),await Je(c),c._u.set("Unknown"),c.lu.delete(4),await ts(c)}(this))})}),this._u=new xf(s,i)}}async function ts(e){if(Kt(e))for(const t of e.fu)await t(!0)}async function Je(e){for(const t of e.fu)await t(!1)}function dc(e,t){const n=b(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Ki(n)?qi(n):he(n).Co()&&ji(n,t))}function fc(e,t){const n=b(e),s=he(n);n.hu.delete(t),s.Co()&&pc(n,t),n.hu.size===0&&(s.Co()?s.ko():Kt(n)&&n._u.set("Unknown"))}function ji(e,t){e.wu.Nt(t.targetId),he(e).Qo(t)}function pc(e,t){e.wu.Nt(t),he(e).jo(t)}function qi(e){e.wu=new Md({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),he(e).start(),e._u.iu()}function Ki(e){return Kt(e)&&!he(e).Do()&&e.hu.size>0}function Kt(e){return b(e).lu.size===0}function gc(e){e.wu=void 0}async function Lf(e){e.hu.forEach((t,n)=>{ji(e,t)})}async function Ff(e,t){gc(e),Ki(e)?(e._u.uu(t),qi(e)):e._u.set("Unknown")}async function Pf(e,t,n){if(e._u.set("Online"),t instanceof nc&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await An(e,s)}else if(t instanceof un?e.wu.Ut(t):t instanceof ec?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(S.min()))try{const s=await uc(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(c);u&&i.hu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(H.EMPTY_BYTE_STRING,c.snapshotVersion)),pc(i,a);const u=new Ot(c.target,a,1,c.sequenceNumber);ji(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await An(e,s)}}async function An(e,t,n){if(!Xe(t))throw t;e.lu.add(1),await Je(e),e._u.set("Offline"),n||(n=()=>uc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await ts(e)})}function mc(e,t){return t().catch(n=>An(e,n,t))}async function es(e){const t=b(e),n=bt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Vf(t);)try{const i=await If(t.localStore,s);if(i===null){t.au.length===0&&n.ko();break}s=i.batchId,Bf(t,i)}catch(i){await An(t,i)}yc(t)&&vc(t)}function Vf(e){return Kt(e)&&e.au.length<10}function Bf(e,t){e.au.push(t);const n=bt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function yc(e){return Kt(e)&&!bt(e).Do()&&e.au.length>0}function vc(e){bt(e).start()}async function Uf(e){bt(e).Xo()}async function $f(e){const t=bt(e);for(const n of e.au)t.Ho(n.mutations)}async function jf(e,t,n){const s=e.au.shift(),i=Vi.from(s,t,n);await mc(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await es(e)}async function qf(e,t){t&&bt(e).zo&&await async function(n,s){if(i=s.code,_d(i)&&i!==p.ABORTED){const r=n.au.shift();bt(n).No(),await mc(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await es(n)}var i}(e,t),yc(e)&&vc(e)}async function to(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Kt(n);n.lu.add(3),await Je(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await ts(n)}async function Kf(e,t){const n=b(e);t?(n.lu.delete(2),await ts(n)):t||(n.lu.add(2),await Je(n),n._u.set("Unknown"))}function he(e){return e.mu||(e.mu=function(t,n,s){const i=b(t);return i.tu(),new Nf(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:Lf.bind(null,e),Jr:Ff.bind(null,e),Go:Pf.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),Ki(e)?qi(e):e._u.set("Unknown")):(await e.mu.stop(),gc(e))})),e.mu}function bt(e){return e.gu||(e.gu=function(t,n,s){const i=b(t);return i.tu(),new Rf(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:Uf.bind(null,e),Jr:qf.bind(null,e),Yo:$f.bind(null,e),Jo:jf.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await es(e)):(await e.gu.stop(),e.au.length>0&&(y("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
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
 */class zi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new zi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hi(e,t){if(Et("AsyncQueue",`${t}: ${e}`),Xe(e))return new E(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Qt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=ge(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new Qt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class eo{constructor(){this.yu=new B(w.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ne{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new ne(t,n,Qt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class zf{constructor(){this.Iu=void 0,this.listeners=[]}}class Hf{constructor(){this.queries=new ue(t=>Va(t),Wn),this.onlineState="Unknown",this.Tu=new Set}}async function Gf(e,t){const n=b(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new zf),i)try{r.Iu=await n.onListen(s)}catch(o){const a=Hi(o,`Initialization of query '${Ws(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Eu(n.onlineState),r.Iu&&t.Au(r.Iu)&&Gi(n)}async function Wf(e,t){const n=b(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Qf(e,t){const n=b(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Gi(n)}function Xf(e,t,n){const s=b(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Gi(e){e.Tu.forEach(t=>{t.next()})}class Yf{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new ne(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=ne.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
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
 */class wc{constructor(t){this.key=t}}class Ec{constructor(t){this.key=t}}class Jf{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=C(),this.mutatedKeys=C(),this.Lu=Ba(t),this.Uu=new Qt(this.Lu)}get qu(){return this.Fu}Ku(t,n){const s=n?n.Gu:new eo,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const d=i.get(h),g=Fi(this.query,l)?l:null,v=!!d&&this.mutatedKeys.has(d.key),D=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?v!==D&&(s.track({type:3,doc:g}),k=!0):this.Qu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Lu(g,c)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),r=D?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort((u,h)=>function(l,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return g(l)-g(d)}(u.type,h.type)||this.Lu(u.doc,h.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new ne(this.query,t.Uu,i,r,t.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new eo,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=C(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new Ec(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new wc(s))}),n}Ju(t){this.Fu=t.ji,this.Bu=C();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return ne.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Zf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class tp{constructor(t){this.key=t,this.Xu=!1}}class ep{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new ue(a=>Va(a),Wn),this.ec=new Map,this.nc=new Set,this.sc=new B(w.comparator),this.ic=new Map,this.rc=new Bi,this.oc={},this.uc=new Map,this.cc=ee.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function np(e,t){const n=dp(e);let s,i;const r=n.tc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await bf(n.localStore,Vt(t));n.isPrimaryClient&&dc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await sp(n,t,s,a==="current")}return i}async function sp(e,t,n,s){e.hc=(h,l,d)=>async function(g,v,D,k){let X=v.view.Ku(D);X.Oi&&(X=await Yr(g.localStore,v.query,!1).then(({documents:de})=>v.view.Ku(de,X)));const nt=k&&k.targetChanges.get(v.targetId),le=v.view.applyChanges(X,g.isPrimaryClient,nt);return so(g,v.targetId,le.zu),le.snapshot}(e,h,l,d);const i=await Yr(e.localStore,t,!0),r=new Jf(t,i.ji),o=r.Ku(i.documents),a=Ye.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);so(e,n,c.zu);const u=new Zf(t,n,r);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function ip(e,t){const n=b(e),s=n.tc.get(t),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!Wn(r,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Js(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),fc(n.remoteStore,s.targetId),Zs(n,s.targetId)}).catch(Qe)):(Zs(n,s.targetId),await Js(n.localStore,s.targetId,!0))}async function rp(e,t,n){const s=fp(e);try{const i=await function(r,o){const a=b(r),c=P.now(),u=o.reduce((d,g)=>d.add(g.key),C());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=yt(),v=C();return a.Ui.getEntries(d,u).next(D=>{g=D,g.forEach((k,X)=>{X.isValidDocument()||(v=v.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(D=>{h=D;const k=[];for(const X of o){const nt=Ad(X,h.get(X.key).overlayedDocument);nt!=null&&k.push(new qt(X.key,nt,Fa(nt.value.mapValue),ft.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(D=>{l=D;const k=D.applyToLocalDocumentSet(h,v);return a.documentOverlayCache.saveOverlays(d,D.batchId,k)})}).then(()=>({batchId:l.batchId,changes:Ja(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.oc[r.currentUser.toKey()];c||(c=new B(N)),c=c.insert(o,a),r.oc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ze(s,i.changes),await es(s.remoteStore)}catch(i){const r=Hi(i,"Failed to persist write");n.reject(r)}}async function Tc(e,t){const n=b(e);try{const s=await Ef(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?R(o.Xu):i.removedDocuments.size>0&&(R(o.Xu),o.Xu=!1))}),await Ze(n,s,t)}catch(s){await Qe(s)}}function no(e,t,n){const s=b(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=b(r);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Eu(o)&&(c=!0)}),c&&Gi(a)}(s.eventManager,t),i.length&&s.Zu.Go(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function op(e,t,n){const s=b(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ic.get(t),r=i&&i.key;if(r){let o=new B(w.comparator);o=o.insert(r,q.newNoDocument(r,S.min()));const a=C().add(r),c=new Jn(S.min(),new Map,new V(N),o,a);await Tc(s,c),s.sc=s.sc.remove(r),s.ic.delete(t),Wi(s)}else await Js(s.localStore,t,!1).then(()=>Zs(s,t,n)).catch(Qe)}async function ap(e,t){const n=b(e),s=t.batch.batchId;try{const i=await wf(n.localStore,t);bc(n,s,null),Ic(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ze(n,i)}catch(i){await Qe(i)}}async function cp(e,t,n){const s=b(e);try{const i=await function(r,o){const a=b(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);bc(s,t,n),Ic(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ze(s,i)}catch(i){await Qe(i)}}function Ic(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function bc(e,t,n){const s=b(e);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.oc[s.currentUser.toKey()]=i}}function Zs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(s=>{e.rc.containsKey(s)||Sc(e,s)})}function Sc(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(fc(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),Wi(e))}function so(e,t,n){for(const s of n)s instanceof wc?(e.rc.addReference(s.key,t),up(e,s)):s instanceof Ec?(y("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||Sc(e,s.key)):I()}function up(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.nc.add(s),Wi(e))}function Wi(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new w(x.fromString(t)),s=e.cc.next();e.ic.set(s,new tp(n)),e.sc=e.sc.insert(n,s),dc(e.remoteStore,new Ot(Vt(Li(n.path)),s,2,Ri.ot))}}async function Ze(e,t,n){const s=b(e),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const h=$i.Vi(c.targetId,u);r.push(h)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,l=>f.forEach(l.Pi,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>f.forEach(l.vi,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Xe(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.$i.get(l),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(l,v)}}}(s.localStore,r))}async function hp(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await cc(n.localStore,t);n.currentUser=t,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new E(p.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ze(n,s.Ki)}}function lp(e,t){const n=b(e),s=n.ic.get(t);if(s&&s.Xu)return C().add(s.key);{let i=C();const r=n.ec.get(t);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function dp(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Tc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=op.bind(null,t),t.Zu.Go=Qf.bind(null,t.eventManager),t.Zu.lc=Xf.bind(null,t.eventManager),t}function fp(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ap.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cp.bind(null,t),t}class pp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Zn(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return vf(this.persistence,new mf,t.initialUser,this.wt)}_c(t){return new pf(Ui.Ms,this.wt)}dc(t){return new Cf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>no(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hp.bind(null,this.syncEngine),await Kf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Hf}createDatastore(t){const n=Zn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new _f(i));var i;return function(r,o,a,c){return new Of(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>no(this.syncEngine,a,0),o=Zr.V()?new Zr:new Af,new Mf(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const h=new ep(s,i,r,o,a,c);return u&&(h.ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=b(t);y("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Je(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class mp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class yp{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=Oa.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Hi(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function vp(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await cc(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function wp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ep(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>to(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>to(t.remoteStore,r)),e.onlineComponents=t}async function Ep(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await vp(e,new pp)),e.offlineComponents}async function Cc(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await wp(e,new gp)),e.onlineComponents}function Tp(e){return Cc(e).then(t=>t.syncEngine)}async function io(e){const t=await Cc(e),n=t.eventManager;return n.onListen=np.bind(null,t.syncEngine),n.onUnlisten=ip.bind(null,t.syncEngine),n}const ro=new Map;/**
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
 */function Ip(e,t,n){if(!n)throw new E(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bp(e,t,n,s){if(t===!0&&s===!0)throw new E(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function oo(e){if(!w.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function be(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qi(e);throw new E(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class ao{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,bp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Ac{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ao({}),this._settingsFrozen=!1,t instanceof Zt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new E(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zt(i.options.projectId)}(t))}get app(){if(!this._app)throw new E(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ao(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bl;switch(n.type){case"gapi":const s=n.client;return R(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new jl(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ro.get(t);n&&(y("ComponentProvider","Removing Datastore"),ro.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ot{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class ns{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ns(this.firestore,t,this._query)}}class Ve extends ns{constructor(t,n,s){super(t,n,Li(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new w(t))}withConverter(t){return new Ve(this.firestore,t,this._path)}}function ss(e,t,...n){if(e=ht(e),arguments.length===1&&(t=Oa.I()),Ip("doc","path",t),e instanceof Ac){const s=x.fromString(t,...n);return oo(s),new ot(e,null,new w(s))}{if(!(e instanceof ot||e instanceof Ve))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return oo(s),new ot(e.firestore,e instanceof Ve?e.converter:null,new w(s))}}/**
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
 */class Sp{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new hc(this,"async_queue_retry"),this.Kc=()=>{const n=Cs();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Cs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Cs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Rt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Mc.push(t),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!Xe(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Oc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Et("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const i=zi.createAndSchedule(this,t,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&I()}verifyOperationInProgress(){}async zc(){let t;do t=this.Oc,await t;while(t!==this.Oc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function co(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Dn extends Ac{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Sp,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||kc(this),this._firestoreClient.terminate()}}function Cp(e=_o()){return Be(e,"firestore").getImmediate()}function Dc(e){return e._firestoreClient||kc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function kc(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Zl(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new yp(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class is{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new se(H.fromBase64String(t))}catch(n){throw new E(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new se(H.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class rs{constructor(t){this._methodName=t}}/**
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
 */class Xi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
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
 */const Ap=/^__.*__$/;class _c{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new qt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Nc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Yi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.sa(t),i}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return kn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(Nc(this.Zc)&&Ap.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Dp{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||Zn(t)}aa(t,n,s,i=!1){return new Yi({Zc:t,methodName:n,ca:s,path:W.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function kp(e){const t=e._freezeSettings(),n=Zn(e._databaseId);return new Dp(e._databaseId,!!t.ignoreUndefinedProperties,n)}class os extends rs{_toFieldTransform(t){if(t.Zc!==2)throw t.Zc===1?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof os}}class _p extends rs{constructor(t,n){super(t),this.la=n}_toFieldTransform(t){const n=new Pe(t.wt,ja(t.wt,this.la));return new Id(t.path,n)}isEqual(t){return this===t}}function Np(e,t,n,s){const i=e.aa(1,t,n);Oc("Data must be an object, but it was:",i,s);const r=[],o=st.empty();jt(s,(c,u)=>{const h=Ji(t,c,n);u=ht(u);const l=i.ia(h);if(u instanceof os)r.push(h);else{const d=as(u,l);d!=null&&(r.push(h),o.set(h,d))}});const a=new ut(r);return new _c(o,a,i.fieldTransforms)}function Rp(e,t,n,s,i,r){const o=e.aa(1,t,n),a=[uo(t,s,n)],c=[i];if(r.length%2!=0)throw new E(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(uo(t,r[d])),c.push(r[d+1]);const u=[],h=st.empty();for(let d=a.length-1;d>=0;--d)if(!Mp(u,a[d])){const g=a[d];let v=c[d];v=ht(v);const D=o.ia(g);if(v instanceof os)u.push(g);else{const k=as(v,D);k!=null&&(u.push(g),h.set(g,k))}}const l=new ut(u);return new _c(h,l,o.fieldTransforms)}function as(e,t){if(Rc(e=ht(e)))return Oc("Unsupported field value:",t,e),Op(e,t);if(e instanceof rs)return function(n,s){if(!Nc(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=as(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ja(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=P.fromDate(n);return{timestampValue:Cn(s.wt,i)}}if(n instanceof P){const i=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cn(s.wt,i)}}if(n instanceof Xi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof se)return{bytesValue:sc(s.wt,n._byteString)};if(n instanceof ot){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Qi(n)}`)}(e,t)}function Op(e,t){const n={};return xa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jt(e,(s,i)=>{const r=as(i,t.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Rc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof Xi||e instanceof se||e instanceof ot||e instanceof rs)}function Oc(e,t,n){if(!Rc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qi(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function uo(e,t,n){if((t=ht(t))instanceof is)return t._internalPath;if(typeof t=="string")return Ji(e,t);throw kn("Field path arguments must be of type string or ",e,!1,void 0,n)}const xp=new RegExp("[~\\*/\\[\\]]");function Ji(e,t,n){if(t.search(xp)>=0)throw kn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new is(...t.split("."))._internalPath}catch{throw kn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function kn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new E(p.INVALID_ARGUMENT,a+e+c)}function Mp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class xc{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Mc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lp extends xc{data(){return super.data()}}function Mc(e,t){return typeof t=="string"?Ji(e,t):t instanceof is?t._internalPath:t._delegate._internalPath}/**
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
 */class me{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Lc extends xc{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Mc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class hn extends Lc{data(t={}){return super.data(t)}}class Fp{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new me(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new hn(this._firestore,this._userDataWriter,s.key,s,new me(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new me(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new me(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Pp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Pp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function Vp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new E(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Bp{convertValue(t,n="none"){switch(Pt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return jt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Xi(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=La(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Oe(t));default:return null}}convertTimestamp(t){const n=It(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);R(ac(s));const i=new Zt(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(n)||Et(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class Fc extends Bp{constructor(t){super(),this.firestore=t}convertBytes(t){return new se(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Zi(e,t,n,...s){e=be(e,ot);const i=be(e.firestore,Dn),r=kp(i);let o;return o=typeof(t=ht(t))=="string"||t instanceof is?Rp(r,"updateDoc",e._key,t,n,s):Np(r,"updateDoc",e._key,t),$p(i,[o.toMutation(e._key,ft.exists(!0))])}function Up(e,...t){var n,s,i;e=ht(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||co(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(co(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,u,h;if(e instanceof ot)u=be(e.firestore,Dn),h=Li(e._key.path),c={next:l=>{t[o]&&t[o](jp(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=be(e,ns);u=be(l.firestore,Dn),h=l._query;const d=new Fc(u);c={next:g=>{t[o]&&t[o](new Fp(u,d,l,g))},error:t[o+1],complete:t[o+2]},Vp(e._query)}return function(l,d,g,v){const D=new mp(v),k=new Yf(d,D,g);return l.asyncQueue.enqueueAndForget(async()=>Gf(await io(l),k)),()=>{D.Tc(),l.asyncQueue.enqueueAndForget(async()=>Wf(await io(l),k))}}(Dc(u),h,a,c)}function $p(e,t){return function(n,s){const i=new Rt;return n.asyncQueue.enqueueAndForget(async()=>rp(await Tp(n),s,i)),i.promise}(Dc(e),t)}function jp(e,t,n){const s=n.docs.get(t._key),i=new Fc(e);return new Lc(e,i,t._key,s,new me(n.hasPendingWrites,n.fromCache),t.converter)}function tr(e){return new _p("increment",e)}(function(e,t=!0){(function(n){ce=n})(Th),wt(new gt("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Dn(i,new Ul(n.getProvider("auth-internal")),new Kl(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),ct(Or,"3.4.12",e),ct(Or,"3.4.12","esm2017")})();var qp="firebase",Kp="9.9.0";/**
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
 */ct(qp,Kp,"app");const Pc="@firebase/installations",er="0.5.12";/**
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
 */const Vc=1e4,Bc=`w:${er}`,Uc="FIS_v2",zp="https://firebaseinstallations.googleapis.com/v1",Hp=60*60*1e3,Gp="installations",Wp="Installations";/**
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
 */const Qp={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Bt=new On(Gp,Wp,Qp);function $c(e){return e instanceof ie&&e.code.includes("request-failed")}/**
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
 */function jc({projectId:e}){return`${zp}/projects/${e}/installations`}function qc(e){return{token:e.token,requestStatus:2,expiresIn:Yp(e.expiresIn),creationTime:Date.now()}}async function Kc(e,t){const s=(await t.json()).error;return Bt.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function zc({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Xp(e,{refreshToken:t}){const n=zc(e);return n.append("Authorization",Jp(t)),n}async function Hc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Yp(e){return Number(e.replace("s","000"))}function Jp(e){return`${Uc} ${e}`}/**
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
 */async function Zp({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=jc(e),i=zc(e),r=t.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Uc,appId:e.appId,sdkVersion:Bc},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Hc(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:qc(u.authToken)}}else throw await Kc("Create Installation",c)}/**
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
 */function Gc(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tg(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eg=/^[cdef][\w-]{21}$/,ti="";function ng(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=sg(e);return eg.test(n)?n:ti}catch{return ti}}function sg(e){return tg(e).substr(0,22)}/**
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
 */function cs(e){return`${e.appName}!${e.appId}`}/**
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
 */const Wc=new Map;function Qc(e,t){const n=cs(e);Xc(n,t),ig(n,t)}function Xc(e,t){const n=Wc.get(e);if(!!n)for(const s of n)s(t)}function ig(e,t){const n=rg();n&&n.postMessage({key:e,fid:t}),og()}let Nt=null;function rg(){return!Nt&&"BroadcastChannel"in self&&(Nt=new BroadcastChannel("[Firebase] FID Change"),Nt.onmessage=e=>{Xc(e.data.key,e.data.fid)}),Nt}function og(){Wc.size===0&&Nt&&(Nt.close(),Nt=null)}/**
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
 */const ag="firebase-installations-database",cg=1,Ut="firebase-installations-store";let As=null;function nr(){return As||(As=Do(ag,cg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ut)}}})),As}async function _n(e,t){const n=cs(e),i=(await nr()).transaction(Ut,"readwrite"),r=i.objectStore(Ut),o=await r.get(n);return await r.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Qc(e,t.fid),t}async function Yc(e){const t=cs(e),s=(await nr()).transaction(Ut,"readwrite");await s.objectStore(Ut).delete(t),await s.done}async function us(e,t){const n=cs(e),i=(await nr()).transaction(Ut,"readwrite"),r=i.objectStore(Ut),o=await r.get(n),a=t(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Qc(e,a.fid),a}/**
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
 */async function sr(e){let t;const n=await us(e.appConfig,s=>{const i=ug(s),r=hg(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===ti?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ug(e){const t=e||{fid:ng(),registrationStatus:0};return Jc(t)}function hg(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Bt.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=lg(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:dg(e)}:{installationEntry:t}}async function lg(e,t){try{const n=await Zp(e,t);return _n(e.appConfig,n)}catch(n){throw $c(n)&&n.customData.serverCode===409?await Yc(e.appConfig):await _n(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function dg(e){let t=await ho(e.appConfig);for(;t.registrationStatus===1;)await Gc(100),t=await ho(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await sr(e);return s||n}return t}function ho(e){return us(e,t=>{if(!t)throw Bt.create("installation-not-found");return Jc(t)})}function Jc(e){return fg(e)?{fid:e.fid,registrationStatus:0}:e}function fg(e){return e.registrationStatus===1&&e.registrationTime+Vc<Date.now()}/**
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
 */async function pg({appConfig:e,heartbeatServiceProvider:t},n){const s=gg(e,n),i=Xp(e,n),r=t.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Bc,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Hc(()=>fetch(s,a));if(c.ok){const u=await c.json();return qc(u)}else throw await Kc("Generate Auth Token",c)}function gg(e,{fid:t}){return`${jc(e)}/${t}/authTokens:generate`}/**
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
 */async function ir(e,t=!1){let n;const s=await us(e.appConfig,r=>{if(!Zc(r))throw Bt.create("not-registered");const o=r.authToken;if(!t&&vg(o))return r;if(o.requestStatus===1)return n=mg(e,t),r;{if(!navigator.onLine)throw Bt.create("app-offline");const a=Eg(r);return n=yg(e,a),a}});return n?await n:s.authToken}async function mg(e,t){let n=await lo(e.appConfig);for(;n.authToken.requestStatus===1;)await Gc(100),n=await lo(e.appConfig);const s=n.authToken;return s.requestStatus===0?ir(e,t):s}function lo(e){return us(e,t=>{if(!Zc(t))throw Bt.create("not-registered");const n=t.authToken;return Tg(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function yg(e,t){try{const n=await pg(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await _n(e.appConfig,s),n}catch(n){if($c(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yc(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _n(e.appConfig,s)}throw n}}function Zc(e){return e!==void 0&&e.registrationStatus===2}function vg(e){return e.requestStatus===2&&!wg(e)}function wg(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Hp}function Eg(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Tg(e){return e.requestStatus===1&&e.requestTime+Vc<Date.now()}/**
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
 */async function Ig(e){const t=e,{installationEntry:n,registrationPromise:s}=await sr(t);return s?s.catch(console.error):ir(t).catch(console.error),n.fid}/**
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
 */async function bg(e,t=!1){const n=e;return await Sg(n),(await ir(n,t)).token}async function Sg(e){const{registrationPromise:t}=await sr(e);t&&await t}/**
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
 */function Cg(e){if(!e||!e.options)throw Ds("App Configuration");if(!e.name)throw Ds("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ds(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ds(e){return Bt.create("missing-app-config-values",{valueName:e})}/**
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
 */const tu="installations",Ag="installations-internal",Dg=e=>{const t=e.getProvider("app").getImmediate(),n=Cg(t),s=Be(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},kg=e=>{const t=e.getProvider("app").getImmediate(),n=Be(t,tu).getImmediate();return{getId:()=>Ig(n),getToken:i=>bg(n,i)}};function _g(){wt(new gt(tu,Dg,"PUBLIC")),wt(new gt(Ag,kg,"PRIVATE"))}_g();ct(Pc,er);ct(Pc,er,"esm2017");/**
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
 */const Nn="analytics",Ng="firebase_id",Rg="origin",Og=60*1e3,xg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",eu="https://www.googletagmanager.com/gtag/js";/**
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
 */const it=new si("@firebase/analytics");/**
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
 */function nu(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Mg(e,t){const n=document.createElement("script");n.src=`${eu}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Lg(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fg(e,t,n,s,i,r){const o=s[i];try{if(o)await t[o];else{const c=(await nu(n)).find(u=>u.measurementId===i);c&&await t[c.appId]}}catch(a){it.error(a)}e("config",i,r)}async function Pg(e,t,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await nu(n);for(const c of o){const u=a.find(l=>l.measurementId===c),h=u&&t[u.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",s,i||{})}catch(r){it.error(r)}}function Vg(e,t,n,s){async function i(r,o,a){try{r==="event"?await Pg(e,t,n,o,a):r==="config"?await Fg(e,t,n,s,o,a):r==="consent"?e("consent","update",a):e("set",o)}catch(c){it.error(c)}}return i}function Bg(e,t,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Vg(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function Ug(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(eu))return t;return null}/**
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
 */const $g={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},at=new On("analytics","Analytics",$g);/**
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
 */const jg=30,qg=1e3;class Kg{constructor(t={},n=qg){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const su=new Kg;function zg(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Hg(e){var t;const{appId:n,apiKey:s}=e,i={method:"GET",headers:zg(s)},r=xg.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw at.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Gg(e,t=su,n){const{appId:s,apiKey:i,measurementId:r}=e.options;if(!s)throw at.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw at.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xg;return setTimeout(async()=>{a.abort()},n!==void 0?n:Og),iu({appId:s,apiKey:i,measurementId:r},o,a,t)}async function iu(e,{throttleEndTimeMillis:t,backoffCount:n},s,i=su){var r,o;const{appId:a,measurementId:c}=e;try{await Wg(s,t)}catch(u){if(c)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(r=u)===null||r===void 0?void 0:r.message}]`),{appId:a,measurementId:c};throw u}try{const u=await Hg(e);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!Qg(h)){if(i.deleteThrottleMetadata(a),c)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw u}const l=Number((o=h==null?void 0:h.customData)===null||o===void 0?void 0:o.httpStatus)===503?ur(n,i.intervalMillis,jg):ur(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,d),it.debug(`Calling attemptFetch again in ${l} millis`),iu(e,d,s,i)}}function Wg(e,t){return new Promise((n,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),s(at.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Qg(e){if(!(e instanceof ie)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Xg{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Yg(e,t,n,s,i){if(i&&i.global){e("event",n,s);return}else{const r=await t,o=Object.assign(Object.assign({},s),{send_to:r});e("event",n,o)}}/**
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
 */async function Jg(){var e;if(bo())try{await So()}catch(t){return it.warn(at.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return it.warn(at.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zg(e,t,n,s,i,r,o){var a;const c=Gg(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>it.error(g)),t.push(c);const u=Jg().then(g=>{if(g)return s.getId()}),[h,l]=await Promise.all([c,u]);Ug()||Mg(r,h.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Rg]="firebase",d.update=!0,l!=null&&(d[Ng]=l),i("config",h.measurementId,d),h.measurementId}/**
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
 */class tm{constructor(t){this.app=t}_delete(){return delete Se[this.app.options.appId],Promise.resolve()}}let Se={},fo=[];const po={};let ks="dataLayer",em="gtag",go,ru,mo=!1;function nm(){const e=[];if(Io()&&e.push("This is a browser extension environment."),vu()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=at.create("invalid-analytics-context",{errorInfo:t});it.warn(n.message)}}function sm(e,t,n){nm();const s=e.options.appId;if(!s)throw at.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw at.create("no-api-key");if(Se[s]!=null)throw at.create("already-exists",{id:s});if(!mo){Lg(ks);const{wrappedGtag:r,gtagCore:o}=Bg(Se,fo,po,ks,em);ru=r,go=o,mo=!0}return Se[s]=Zg(e,fo,po,t,go,ks,n),new tm(e)}function im(e=_o()){e=ht(e);const t=Be(e,Nn);return t.isInitialized()?t.getImmediate():rm(e)}function rm(e,t={}){const n=Be(e,Nn);if(n.isInitialized()){const i=n.getImmediate();if(ln(t,n.getOptions()))return i;throw at.create("already-initialized")}return n.initialize({options:t})}function om(e,t,n,s){e=ht(e),Yg(ru,Se[e.app.options.appId],t,n,s).catch(i=>it.error(i))}const yo="@firebase/analytics",vo="0.8.0";function am(){wt(new gt(Nn,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return sm(s,i,n)},"PUBLIC")),wt(new gt("analytics-internal",e,"PRIVATE")),ct(yo,vo),ct(yo,vo,"esm2017");function e(t){try{const n=t.getProvider(Nn).getImmediate();return{logEvent:(s,i,r)=>om(n,s,i,r)}}catch(n){throw at.create("interop-component-reg-failed",{reason:n})}}}am();const cm={apiKey:"AIzaSyCinDymN3uSScau-FesSP9rCoLZZmtKL94",authDomain:"kickads-metrics.firebaseapp.com",projectId:"kickads-metrics",storageBucket:"kickads-metrics.appspot.com",messagingSenderId:"473663126662",appId:"1:473663126662:web:f2160f1318bcffc861a507",measurementId:"G-VFS6PT3LT8"},ou=Ih(cm),hs=Cp(ou);im(ou);ss(hs,"creative-data","id-client/name-creative-posta/xsnW6SHQWtBekqbtDRJW");ss(hs,"creative-data","id-client/name-creative-posta/rRBXupfvuNZAiNtuAkwy");const rr=ss(hs,"creativos","sernova");window.addEventListener("DOMContentLoaded",async()=>{});document.querySelector("#app").innerHTML=`
  <div class="buttons">
		<button id="clickInteractive-1" class="btn btn--primary">Click Apple</button>
		<button id="clickInteractive-2" class="btn btn--primary">Click Tropical</button>
	</div>
	<div class="buttons--secondary">
	<button id="clickFinal" class="btn btn--secondary">click final</button>
	<div>
		<div id="chart-interactions"></div>
		<div id="chart-clicks"></div>
	</div>
</div>
`;const um=document.getElementById("clickInteractive-1"),hm=document.getElementById("clickInteractive-2"),lm=document.getElementById("clickFinal");um.addEventListener("click",async()=>{try{await Zi(rr,{"interactions.apple":tr(1)})}catch(e){console.error("Error adding document: ",e)}});hm.addEventListener("click",async()=>{try{await Zi(rr,{"interactions.tropical":tr(1)})}catch(e){console.error("Error adding document: ",e)}});lm.addEventListener("click",async()=>{try{await Zi(rr,{"clicks.voto":tr(1)})}catch(e){console.error("Error adding document: ",e)}});var dm={series:[{data:[0]}],chart:{type:"bar",height:350},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},xaxis:{categories:[]}},fm={series:[{data:[]}],chart:{type:"bar",height:350},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},xaxis:{categories:[]}},ei=new ApexCharts(document.querySelector("#chart-interactions"),fm);ei.render();var ni=new ApexCharts(document.querySelector("#chart-clicks"),dm);ni.render();Up(ss(hs,"creativos","sernova"),e=>{const{interactions:t,clicks:n}=e.data(),s=[],i=[];Object.entries(n).forEach(([r,o])=>{s.push({name:r,counter:o})}),Object.entries(t).forEach(([r,o])=>{i.push({name:r,counter:o})}),ni.updateOptions({xaxis:{categories:["hola"]}}),ei.updateOptions({xaxis:{categories:i.sort(wo).map(r=>r.name)}}),ni.updateSeries([{name:"Clicks",data:s.map(r=>r.counter)}]),ei.updateSeries([{name:"Clicks",data:i.sort(wo).map(r=>r.counter)}])});function wo(e,t){return e.name.localeCompare(t.name)}
