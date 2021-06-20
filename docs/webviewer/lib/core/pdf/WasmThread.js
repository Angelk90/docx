(function(){var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(c){var b=0;return function(){return b<c.length?{done:!1,value:c[b++]}:{done:!0}}};$jscomp.arrayIterator=function(c){return{next:$jscomp.arrayIteratorImpl(c)}};$jscomp.makeIterator=function(c){var b="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];return b?b.call(c):$jscomp.arrayIterator(c)};
$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,b,m){c!=Array.prototype&&c!=Object.prototype&&(c[b]=m.value)};
$jscomp.polyfill=function(c,b,m,d){if(b){m=$jscomp.global;c=c.split(".");for(d=0;d<c.length-1;d++){var a=c[d];a in m||(m[a]={});m=m[a]}c=c[c.length-1];d=m[c];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(m,c,{configurable:!0,writable:!0,value:b})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(c){function b(){this.batch_=null}function m(l){return l instanceof a?l:new a(function(a,b){a(l)})}if(c&&!$jscomp.FORCE_POLYFILL_PROMISE)return c;b.prototype.asyncExecute=function(l){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(l);return this};b.prototype.asyncExecuteBatch_=function(){var l=this;this.asyncExecuteFunction(function(){l.executeBatch_()})};var d=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(l){d(l,
0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var l=this.batch_;this.batch_=[];for(var a=0;a<l.length;++a){var b=l[a];l[a]=null;try{b()}catch(q){this.asyncThrow_(q)}}}this.batch_=null};b.prototype.asyncThrow_=function(l){this.asyncExecuteFunction(function(){throw l;})};var a=function(l){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var a=this.createResolveAndReject_();try{l(a.resolve,a.reject)}catch(t){a.reject(t)}};a.prototype.createResolveAndReject_=
function(){function a(a){return function(l){e||(e=!0,a.call(b,l))}}var b=this,e=!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};a.prototype.resolveTo_=function(l){if(l===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(l instanceof a)this.settleSameAsPromise_(l);else{a:switch(typeof l){case "object":var b=null!=l;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(l):this.fulfill_(l)}};a.prototype.resolveToNonPromiseObj_=function(a){var b=
void 0;try{b=a.then}catch(t){this.reject_(t);return}"function"==typeof b?this.settleSameAsThenable_(b,a):this.fulfill_(a)};a.prototype.reject_=function(a){this.settle_(2,a)};a.prototype.fulfill_=function(a){this.settle_(1,a)};a.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};a.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=
0;a<this.onSettledCallbacks_.length;++a)e.asyncExecute(this.onSettledCallbacks_[a]);this.onSettledCallbacks_=null}};var e=new b;a.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};a.prototype.settleSameAsThenable_=function(a,b){var e=this.createResolveAndReject_();try{a.call(b,e.resolve,e.reject)}catch(q){e.reject(q)}};a.prototype.then=function(b,e){function d(a,b){return"function"==typeof a?function(b){try{l(a(b))}catch(u){c(u)}}:
b}var l,c,m=new a(function(a,b){l=a;c=b});this.callWhenSettled_(d(b,l),d(e,c));return m};a.prototype.catch=function(a){return this.then(void 0,a)};a.prototype.callWhenSettled_=function(a,b){function d(){switch(l.state_){case 1:a(l.result_);break;case 2:b(l.result_);break;default:throw Error("Unexpected state: "+l.state_);}}var l=this;null==this.onSettledCallbacks_?e.asyncExecute(d):this.onSettledCallbacks_.push(d)};a.resolve=m;a.reject=function(b){return new a(function(a,e){e(b)})};a.race=function(b){return new a(function(a,
e){for(var d=$jscomp.makeIterator(b),l=d.next();!l.done;l=d.next())m(l.value).callWhenSettled_(a,e)})};a.all=function(b){var e=$jscomp.makeIterator(b),d=e.next();return d.done?m([]):new a(function(a,b){function l(b){return function(e){c[b]=e;w--;0==w&&a(c)}}var c=[],w=0;do c.push(void 0),w++,m(d.value).callWhenSettled_(l(c.length-1),b),d=e.next();while(!d.done)})};return a},"es6","es3");
(function(c){function b(d){if(m[d])return m[d].exports;var a=m[d]={i:d,l:!1,exports:{}};c[d].call(a.exports,a,a.exports,b);a.l=!0;return a.exports}var m={};b.m=c;b.c=m;b.d=function(d,a,e){b.o(d,a)||Object.defineProperty(d,a,{enumerable:!0,get:e})};b.r=function(b){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"});Object.defineProperty(b,"__esModule",{value:!0})};b.t=function(d,a){a&1&&(d=b(d));if(a&8||a&4&&"object"===typeof d&&d&&d.__esModule)return d;
var e=Object.create(null);b.r(e);Object.defineProperty(e,"default",{enumerable:!0,value:d});if(a&2&&"string"!=typeof d)for(var l in d)b.d(e,l,function(a){return d[a]}.bind(null,l));return e};b.n=function(d){var a=d&&d.__esModule?function(){return d["default"]}:function(){return d};b.d(a,"a",a);return a};b.o=function(b,a){return Object.prototype.hasOwnProperty.call(b,a)};b.p="/core";return b(b.s=1)})([function(c,b,m){(function(d){m.d(b,"b",function(){return E});m.d(b,"a",function(){return r});m.d(b,
"c",function(){return C});m.d(b,"d",function(){return D});var a=m(4);m.n(a);var e=window,l=function(){return function(a,h){this.fs_q=this.fs_read_counter=0;this.needCallback=!1;this.fs_read_total=a;this.fs_q=h}}();e.AsyncFSHack={readingAsyncFS:0,readingCounter:0,readCalls:{}};var c=e.Module,t=0,q={},x=function(a){e.AsyncFSHack.readingAsyncFS=1;a in e.AsyncFSHack.readCalls||(e.AsyncFSHack.readCalls[a]=new l(e.AsyncFSHack.read_total,e.AsyncFSHack.q))},y=function(a){var h=e.AsyncFSHack.readCalls[a];
++h.fs_read_counter;h.fs_read_counter>=h.fs_read_total&&(h.needCallback?c._finish_do_call_operation(h.fs_q):e.AsyncFSHack.readingAsyncFS=0,delete e.AsyncFSHack.readCalls[a])},B=function(a,h,b,g,n,f){this.lruList=[];this.chunkMap={};this.chunkReader={};this.chunkMap[h]=g;this.length=h;this.cacheDataSize=b;this.url=a;this.customHeaders=n;this.withCredentials=f;this.chunkSize=524288};B.prototype={lruUpdate:function(a){var h=this.lruList.lastIndexOf(a);0<=h&&this.lruList.splice(h,1);this.lruList.push(a)},
downloadChunk:function(a,h){var b=!1;a in this.chunkReader||(this.chunkReader[a]=[],b=!0);h&&this.chunkReader[a].push(h);if(b){h=Math.min(a+this.chunkSize,this.length)-1;var g=new XMLHttpRequest;g.open("GET",this.url,!0);g.responseType="arraybuffer";g.setRequestHeader("Range",["bytes=",a,"-",h].join(""));this.withCredentials&&(g.withCredentials=this.withCredentials);if(this.customHeaders)for(var n in this.customHeaders)g.setRequestHeader(n,this.customHeaders[n]);g.send();var f=this;g.onload=function(b){200===
g.status||206===g.status?(b=new Int8Array(g.response),f.writeChunk(b,a)):(window.parent.parentWarn("Failed to load data from"+f.url),b=new Int8Array(0));for(var h=f.chunkReader[a],n=0;n<h.length;n++)h[n](b);delete f.chunkReader[a]}}},hadChunk:function(a){return a in this.chunkMap},hasChunk:function(a){return this.chunkMap[a]},getCacheData:function(){return this.chunkMap[this.length]},updateCache:function(a){for(var b=0;b<a.length;b++){var k=a[b];this.hadChunk(k)&&(this.hasChunk(k)?this.lruUpdate(k):
this.downloadChunk(k))}},wrapChunkRetrieval:function(a,b,k){this.downloadChunk(a,function(a){k(a,b)})},downloadChunks:function(a,b){for(var h=a.length,g=Array(h),n=0,f=function(a,f){g[f]=a;++n;n===h&&b(g)},e=0;e<h;++e)this.wrapChunkRetrieval(a[e][0],e,f)},readFromCache:function(a,b,k){var g=[],n=0,f=Math.floor(b/this.chunkSize)*this.chunkSize,h=b%this.chunkSize;b=this.chunkSize-h;b=b>k?k:b;this.chunkMap[f]?(h=this.chunkMap[f].subarray(h,h+b),a.set(h),this.lruUpdate(f)):this.hadChunk(f)?g.push([f,
h,b,n]):(h=new Int8Array(b),a.set(h));for(k-=b;0<k;)n+=b,f+=this.chunkSize,b=this.chunkSize>k?k:this.chunkSize,this.chunkMap[f]?(h=this.chunkMap[f].subarray(0,b),a.set(h,n),this.lruUpdate(f)):this.hadChunk(f)?g.push([f,0,b,n]):(h=new Int8Array(b),a.set(h,n)),k-=b;return g},writeChunk:function(a,b,k){k=k||0;var g=this.chunkMap[b],h=a.length,f=this.lruList.length>=c.chunkMax&&!g;h!==this.chunkSize||a.buffer.byteLength!==h?(f?(g=this.lruList.shift(),f=this.chunkMap[g],f.length<this.chunkSize&&(f=new Int8Array(this.chunkSize)),
this.chunkMap[g]=null):f=g?this.chunkMap[b]:new Int8Array(this.chunkSize),f.subarray(k,k+h).set(a),a=f):f&&(g=this.lruList.shift(),this.chunkMap[g]=null);this.lruUpdate(b);this.chunkMap[b]=a}};var z=function(a){this.chunkStorage=a;this.position=0;this.length=this.chunkStorage.length};z.prototype={read:function(a,b,k,g){var h=g+k<=this.length,f=h?k:this.length-g,c=e.AsyncFSHack.readingCounter.toString();if(0<f){x(c);var d=a.subarray(b,b+f);var l=this.chunkStorage.readFromCache(d,g,f);l.length?(e.AsyncFSHack.readCalls[c].needCallback=
!0,this.chunkStorage.downloadChunks(l,function(a){for(var b=0;b<a.length;++b){var g=l[b],h=a[b].subarray(g[1],g[1]+g[2]);d.set(h,g[3])}y(c)})):h&&y(c);g+=f}else f=0;if(!h){x(c);b+=f;if(k-=f){h=this.chunkStorage.getCacheData();k>h.length&&(k=h.length);var A=g-this.length;k-=A;a=a.subarray(b,b+k);b=h.subarray(A,A+k);a.set(b)}l&&l.length||y(c);g+=k;f+=k}this.position=g;return f},write:function(a,b,k,g){var h=g+k<=this.length,f=g+k<=this.length?k:this.length-g;if(0<f){var e=a.subarray(b,b+f),c=g%524288;
this.chunkStorage.writeChunk(e,g-c,c);g+=f}else f=0;if(!h){e=b+f;if(k-=f)b=this.chunkStorage.getCacheData(),k>b.length&&(k=b.length),h=g-this.length,k-=h,e=a.subarray(e,e+k),b.subarray(h,h+k).set(e);g+=k;f+=k}this.position=g;return f},seek:function(a){this.position=a},close:function(){this.chunkStorage=null},getPos:function(){return this.position},getTotalSize:function(){return this.length+this.chunkStorage.cacheDataSize}};var v=function(a){this.file=a;this.filePosition=0;this.fileLength=a.size;this.readerPool=
[]};v.prototype={readFromFile:function(a,b,k){var g=this.readerPool.length?this.readerPool.pop():new FileReader;var h=this;g.onload=function(){var a=new Int8Array(g.result);h.readerPool.push(g);k(a)};g.readAsArrayBuffer(this.file.slice(b,b+a))},read:function(a,b,k,g){k=g+k<=this.fileLength?k:this.fileLength-g;if(0<k){var h=e.AsyncFSHack.readingCounter.toString();x(h);var f=a.subarray(b,b+k);e.AsyncFSHack.readCalls[h].needCallback=!0;this.readFromFile(k,g,function(a){f.set(a);y(h)});this.filePosition=
g+k}return k},seek:function(a){this.filePosition=a},close:function(){this.reader=this.file=null},getPos:function(){return this.filePosition},getTotalSize:function(){return this.fileLength}};var u={open:function(a){var b=a.path.slice(1);a.provider=c.docs[b].chunkStorage?new z(c.docs[b].chunkStorage):new v(c.docs[b])},close:function(a){a.provider.close()},read:function(a,b,k,g,e){return a.provider.read(b,k,g,e)},llseek:function(a,b,k){a=a.provider;1===k?b+=a.getPos():2===k&&(b=a.getTotalSize()+b);if(0>
b)throw new e.FS.ErrnoError(d.ERRNO_CODES.EINVAL);a.seek(b);return b},write:function(a,b,k,g,e){return g?a.provider.write(b,k,g,e):0}},p=function(a){if(!q[a]){var b=e.FS.makedev(3,5);e.FS.registerDevice(b,u);e.FS.mkdev(a,511,b);q[a]=!0}},E=function(a,b,e,g){var k=(++t).toString();p(k);var f=Math.ceil((b+524288-1)/524288/8),h=new Int8Array(new ArrayBuffer(f));a=new B(a,b,f,h,e,g);c.docs[k]={chunkStorage:a};return k},r=function(a){var b=(++t).toString();p(b);c.docs[b]=a;return b},C=function(a){e.FS.unlink(a);
c.docs[a]&&delete c.docs[a]},D=function(a){var b=Object.prototype.toString.call(a);return"object"===typeof a&&null!==a&&("[object File]"===b||"[object Blob]"===b)}}).call(this,m(3))},function(c,b,m){c.exports=m(2)},function(c,b,m){function d(a){"@babel/helpers - typeof";d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return d(a)}m.r(b);var a=
m(0),e=window,l;e.Module.onRuntimeInitialized=function(){w=!0;q||(r.handleMessage({action:"workerLoaded",data:{}}),q=!0);r.sendTestResponse();e.PThread.receiveObjectTransfer=function(){var a=e.Module.GetNextResponseMessage();e.getThreadedWasmWorker().handleMessage(a);e.Module.PopNextResponseMessage()}};e.Module.locateFile=function(a){return l+a};e.Module.INITIAL_MEMORY=100663296;var w=!1,t=!1,q=!1,x=1,y=function g(a){if("object"===d(a)&&null!==a)if("undefined"!==typeof a.byteLength){var b="mainThreadArrayBuffer"+
x;x++;a=new Uint8Array(a);e.FS.writeFile(b,a);a={handle:b,isArrayBufferRef:!0}}else for(b in a)a.hasOwnProperty(b)&&(a[b]=g(a[b]));return a},B=function n(a){if("object"===d(a)&&null!==a)if(a.isArrayBufferRef){var b=e.FS.readFile(a.handle,{encoding:"binary"});e.FS.unlink(a.handle);a=b.buffer}else if(a.constructor===Uint8Array)a=(new Uint8Array(a)).buffer;else for(b in a)a.hasOwnProperty(b)&&(a[b]=n(a[b]));return a},z=0,v={},u={},p={},E=function(b){var g=b.action,f=b.data,c=b.callbackId;if("NewDoc"===
g&&f){var d=f.value;"url"===f.type?(d=Object(a.b)(d.url,d.size,d.customHeaders,d.withCredentials),u[c]=d,f.value.docId=d):Object(a.d)(d)&&(d=Object(a.a)(d),u[c]=d,f.value=d)}else"SaveDoc"!==g&&"SaveDocFromFixedElements"!==g||!f?"GetCanvas"===g&&f&&(c=f.docId,c in p&&(d=p[c],d=e.Module.docs[d],"chunkStorage"in d&&(c=e.Module.GetRequiredChunkOffsetArray(c,f.pageIndex+1),c.length&&d.chunkStorage.updateCache(c)))):(d="docFilePath"+z,v[c]={filePath:d,docId:f.docId,finishedWithDocument:f.finishedWithDocument},
z++,f.filePath=d);e.Module.HandleMessage(y(b));"DeleteDocument"===g&&f&&(c=f.docId,c in p&&(Object(a.c)(p[c]),delete p[c]))},r;e.MainThreadLabel=!0;e.getThreadedWasmWorker=function(){return r};var C=function(a,b){window.parent.loadThreadedBackend(a,{"Wasm.wasm":1E7,"Wasm.js":2E5,"Wasm.js.mem":b?2E6:6E5},window);this.eventListeners=[]};C.prototype={addEventListener:function(a,b){if("message"===a)this.eventListeners.push(b);else throw Error("event type "+a+" is not supported by WasmWorker.");},removeEventListener:function(a,
b){"message"===a&&(this.eventListeners=this.eventListeners.filter(function(a){return a!==b}))},sendTestResponse:function(){w&&t&&(this.handleMessage({action:"test",data:{supportTypedArray:!0,supportTransfers:!0}}),this.postMessage=E)},postMessage:function(a){if("test"===a.action)t=!0,this.sendTestResponse();else throw Error("Need to do handshake first!");},handleMessage:function(b){var c=b.callbackId,f=b.data;if(c in u)f&&f.docId?p[f.docId]=u[c]:Object(a.c)(u[c]),delete u[c];else if(c in v){if(!b.hasOwnProperty("error")){var d=
v[c].filePath,g=e.FS.readFile(d,{encoding:"binary"});f.fileData=g.buffer;f=v[c].docId;f in p&&(Object(a.c)(p[f]),delete p[f]);f&&!v[c].finishedWithDocument?p[f]=d:e.FS.unlink(d)}delete v[c]}b=B(b);window.parent.postMessage(b)},reset:function(){r=null;q=t=w=!1}};var D=function(){var a={},b=new Promise(function(b,c){a.resolve=b;a.reject=c});a.promise=b;return a}(),A=function f(a){"object"===d(a.data)&&"action"in a.data&&"workerLoaded"===a.data.action&&(D.resolve(r),r.removeEventListener("message",f))};
window.addEventListener("message",function(a){a=a.data;if("loadWasmWorker"===a.action){var b=a.isFull;l=b?"full/":"lean/";r=new C(a.wasmSource+"PDFNetThreaded",b);q||r.addEventListener("message",A)}else r.postMessage(a)});e.getWasmWorkerPromise=function(){return D.promise}},function(c,b){b=function(){return this}();try{b=b||(new Function("return this"))()}catch(m){"object"===typeof window&&(b=window)}c.exports=b},function(c,b){window.Module={chunkMax:200,docs:{}}}]);}).call(this || window)