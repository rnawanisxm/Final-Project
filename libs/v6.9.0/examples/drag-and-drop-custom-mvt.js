"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2004],{21954:function(e,t,n){var r=n(12739),o=n(41376),u=n(54354),c=n(40349),i=n(12174),a=n(8768),f=n(91712),l=n(91118),s=n(70277),p=n(87103),y=n(40985),v=n(79847),d=n(95783),m=n(42010),b=n(41372),g=n(19352);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=document.getElementById("tileCoordZ"),R=document.getElementById("tileCoordX"),I=document.getElementById("tileCoordY"),_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,e);var t,n,o,u=Z(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),u.call(this,{featureClass:r.Z})}return t=c,(n=[{key:"readFeatures",value:function(e,t){return t.extent=(0,g.dl)().getTileCoordExtent([parseInt(P.value),parseInt(R.value),parseInt(I.value)]),E(B(c.prototype),"readFeatures",this).call(this,e,t)}}])&&w(t.prototype,n),o&&w(t,o),c}(a.Z),k=new c.Z({formatConstructors:[_,f.Z,l.Z,s.Z,p.ZP,y.Z]}),x=new o.Z({interactions:(0,i.ce)().extend([k]),layers:[new m.Z({source:new v.Z})],target:"map",view:new u.ZP({center:[0,0],zoom:2})});k.on("addfeatures",(function(e){var t=new d.Z({features:e.features});x.addLayer(new b.Z({source:t})),x.getView().fit(t.getExtent())}));var C=function(e){var t=[];if(x.forEachFeatureAtPixel(e,(function(e){t.push(e)})),t.length>0){var n,r,o=[];for(n=0,r=t.length;n<r;++n){var u=t[n].get("name")||t[n].get("_name")||t[n].get("layer");u&&o.push(u)}document.getElementById("info").innerHTML=o.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};x.on("pointermove",(function(e){if(!e.dragging){var t=x.getEventPixel(e.originalEvent);C(t)}})),x.on("click",(function(e){C(e.pixel)}));var S=document.getElementById("download");document.getElementById("download-mvt").addEventListener("click",(function(){!function(e,t){fetch(e).then((function(e){return e.blob()})).then((function(e){navigator.msSaveBlob?navigator.msSaveBlob(e,t):(S.href=URL.createObjectURL(e),S.download=t,S.click())}))}("https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/"+P.value+"/"+I.value+"/"+R.value+".pbf",P.value+"-"+R.value+"-"+I.value+".mvt")}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(21954)}]);
//# sourceMappingURL=drag-and-drop-custom-mvt.js.map