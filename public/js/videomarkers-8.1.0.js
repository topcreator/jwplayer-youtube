// Video Markers Plugin v8.1.0 Fri Aug 21 2020 05:46:06 GMT+0300 (Eastern European Summer Time)
!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function e(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(i){return function(){var e,t,r,n=o(i);if(function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}}()){var a=o(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return t=this,!(r=e)||"object"!=typeof r&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):r}}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e){if(e){if("string"==typeof e)return a(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(){function e(){s(this,e)}return t(e,null,[{key:"parse",value:function(e){var t=/^(([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/;function r(e){var t=e.split(":");return 2==t.length&&t.unshift(0),60*t[0]*60+60*t[1]+parseFloat(t[2].replace(",","."))}for(var n,a,i,s=[],o={},u=0,c=e.split("\n"),l=c.length,h={};u<l;u+=1)if(a=t.exec(c[u])){for(n=c[u-1],i=c[++u];"string"==typeof c[++u]&&c[u].trim()&&u<c.length;)i+=c[u];-1<i.indexOf("{")&&(i=(o=JSON.parse(i)).text),h={title:n,startTime:r(a[1]),endTime:r(a[3]),text:i},o&&(h.data=o),s.push(h)}return s}}]),e}(),l=new WeakMap,h=function(){function e(){s(this,e),l.set(this,{})}return t(e,[{key:"on",value:function(e,t){var r=l.get(this);return r[e]||(r[e]=[]),r[e].push(t),this}},{key:"once",value:function(t,r){var n=this;return this.on(t,function e(){n.off(t,e),r.apply(void 0,arguments)}),this}},{key:"off",value:function(e,t){var r=l.get(this)[e];return r&&(null===t?r.length=0:r.splice(r.indexOf(t),1)),this}},{key:"listeners",value:function(e){try{return l.get(this)[e]}catch(e){return null}}},{key:"emit",value:function(t){for(var r=this,e=arguments.length,n=new Array(1<e?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var i=l.get(this)[t];return i&&i.length?(i.forEach(function(e){e.apply(void 0,[{type:t,target:r}].concat(n))}),!0):this}},{key:"emitAsync",value:function(t){for(var r=this,e=arguments.length,n=new Array(1<e?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var i=l.get(this)[t],s=[];return i&&i.length&&i.forEach(function(e){s.push(e.apply(void 0,[{type:t,target:r}].concat(n)))}),Promise.all(s)}}]),e}(),f=window.VTTCue||window.TextTrackCue,d=function(){e(n,h);var r=u(n);function n(e){var t;return s(this,n),(t=r.call(this)).videoTag=e.getElementsByTagName("video")[0]||t.createVideo(e),t.addTextTrack(),t}return t(n,[{key:"createVideo",value:function(e){var t=e.querySelector(".jw-media"),r=document.createElement("video");return t.insertBefore(r,t.children[0]),r}},{key:"addTextTrack",value:function(){var t=this;if(!this.track){var e=this.videoTag,r=(this.player,this._track=e.addTextTrack("chapters","Markers","en"));return r.mode="hidden",r.default=!0,this.onVttCueChangeRef=function(e){return t.onVttCueChange(e)},r.addEventListener("cuechange",this.onVttCueChangeRef),r}}},{key:"addTextCues",value:function(e){var t=this;this.hasTextTrackCues&&this.removeAllTextCues(),e.forEach(function(e){t.addTextCue(e)}),this.hideTextTrack()}},{key:"removeAllTextCues",value:function(){for(var e=this.track,t=e.cues.length-1;0<=t;t--)this.removeTextCue(e.cues[t])}},{key:"addTextCue",value:function(e){var t=new f(e.startTime,e.endTime?e.endTime:e.startTime,e.text);e.data&&(t.metadata=e.data),t.id=e.id||this.track.cues.length,t.index=this.track.cues.length,this.track.addCue(t)}},{key:"removeTextCues",value:function(e,t){this.tracks[e].cues.length;for(var r=0;r<t.length;r++)this.removeTextCue(t[r])}},{key:"removeTextCue",value:function(e){this.track.removeCue(e)}},{key:"hideTextTrack",value:function(){this.track.mode="hidden"}},{key:"disableTextTrack",value:function(){this.track.mode="disabled"}},{key:"showTextTrack",value:function(){this.track.mode="showing"}},{key:"onVttCueChange",value:function(e){var t=e.target.activeCues;if(t.length&&t[0]){var r={time:t[0].startTime,index:Number(t[0].id)};r[this.track.kind]=t[0],this.emit("cuechange",r)}}},{key:"track",get:function(){return this._track}},{key:"cues",set:function(e){this.addTextCues(e)}},{key:"hasTextTrackCues",get:function(){return this.track.cues.length}}]),n}(),k=function(){function e(){s(this,e)}return t(e,null,[{key:"buildMarkersList",value:function(r,n,a){var i=this;n.forEach(function(e,t){r.insertAdjacentHTML("beforeend",i.markersToHtml(n[t],t,a))})}},{key:"markersToHtml",value:function(e,t,r){var n=e.startTime||e.start;return r.replace("{index}",t).replace("{timecode}",e.timecode?e.timecode:this.toHHMMSS(n)).replace("{start}",n).replace("{caption}",e.text)}},{key:"toHHMMSS",value:function(e){var t=Math.floor(e/3600),r=Math.floor(e/60)%60,n=Math.floor(e)%60;return(t?(t<10?"0":"")+t+":":"")+(r<10&&t?"0":"")+r+":"+(n<10?"0":"")+n}},{key:"_secondsToHRTime",value:function(e){if("number"==typeof e&&0<=e){var t=Math.floor(e%60),r=Math.floor(e/60),n=0;return 59<r&&(n=Math.floor(e/3600),r=Math.floor(e/3600%1*60),t=Math.floor(e%60)),t<10&&(t="0"+t),r<10&&(r="0"+r),0<n?n+=":":0===n&&(n=""),n+r+":"+t+".000"}return""}},{key:"generateVTT",value:function(e){var i=this,s="WEBVTT FILE\r\n";return e.forEach(function(e,t){var r=e.data?JSON.stringify(e.data):e.text,n=i._secondsToHRTime(e.startTime),a=e.endTime?i._secondsToHRTime(e.endTime):n;s+="".concat(t,"\r\n").concat(n," --\x3e ").concat(a,"\r\n").concat(r,"\r\n")}),s}},{key:"markersToCues",value:function(e){return e.map(function(e){return{begin:e.startTime,end:e.endTime,text:e.text}})}},{key:"cuePos",value:function(e,t){return e.style.left.substring(0,e.style.left.length-1)/100*t+e.offsetWidth}},{key:"addMarkerBar",value:function(e,t,r){if(e.nextSibling){var n=this.cuePos(e,r),a=(this.cuePos(e.nextSibling,r)-n)/r*100+"%",i=document.createElement("div");i.className="jw-reset jw-cue-bar jw-cue-bar-"+t,i.style.width=a,i.style.left=n/r*100+"%",e.parentNode.insertBefore(i,e.nextSibling)}}},{key:"clearMarkerBars",value:function(e){e.querySelectorAll(".jw-cue-bar").forEach(function(e){return e.parentNode.removeChild(e)})}},{key:"resetMarkerBars",value:function(e,r){var n=this;e.forEach(function(e,t){n.addMarkerBar(e,t,r)})}},{key:"createStyle",value:function(){var e=document.createElement("style");return e.id="cue-editor",e.appendChild(document.createTextNode("")),document.head.appendChild(e),e}}]),e}(),m=function(){e(a,h);var n=u(a);function a(e,t){var r;return s(this,a),(r=n.call(this)).player=e,r.isEditor=t,r.root=e.getContainer(),r.markersCues=new d(r.root),r.markersCues.on("cuechange",function(e,t){return r.onCueChange(t)}),t&&(r.style=k.createStyle(),r.sheet=r.style.sheet),r}return t(a,[{key:"configure",value:function(e){var r=this;e.chaptersurl?this.player.utils.ajax(e.chaptersurl,function(e){var t=e.responseText;r.markers=/WEBVTT/.test(t)?c.parse(t):JSON.parse(t)},function(e){}):e.markers&&setTimeout(function(){r.markers=e.markers},500)}},{key:"addLastMarker",value:function(e){if(0!==e.length){var t=e[e.length-1].endTime||this.player.getDuration();t&&e.push({startTime:t,text:""})}}},{key:"setupEditorElements",value:function(r,n,a,o,u){var c=this,e=this._markers[n],l=a.getBoundingClientRect().width;k.addMarkerBar(r,n,l);var t=e.data?e.data.color:e.color;t&&this.addRule(n,t);var h=this.player.getDuration();r.addEventListener("mousedown",function(e){if(0!=n&&n!=c._markers.length-1){c.selectedEl=r,c.currentMarkerIndex=n;var t=c.selectedEl.style.left;parseInt(t.substring(0,t.length-1)),c.player.pause(),c.player.utils.toggleClass(u,"editor-drag",!0),k.clearMarkerBars(a),c.emit("selectedmarker",c.selectedMarker,n);var i=!1,s=function(e){e.preventDefault(),e.stopPropagation(),i=!0;var t=(u.style.left.substring(0,u.style.left.length-1)/100*l-r.offsetWidth)/l*100;c.selectedEl.style.left=t+"%"};o.addEventListener("mousemove",s,{passive:!1}),o.addEventListener("mouseup",function e(t){if(t.preventDefault(),t.stopPropagation(),o.removeEventListener("mousemove",s),o.removeEventListener("mouseup",e),c.nextSelectedMarker&&c.currentPosition>=c.nextSelectedMarker.startTime){i=!1,c._markers[c.currentMarkerIndex].startTime=c.nextSelectedMarker.startTime-h/100,c.cues=c._markers;var r=c._markers[c.currentMarkerIndex];c.sortMarkers(),c.markers=c._markers.slice(0,c._markers.length-1),c.emit("markersupdated",c._markers,r)}else if(c.prevSelectedMarker&&c.currentPosition<=c.prevSelectedMarker.startTime){i=!1,c._markers[c.currentMarkerIndex].startTime=c.prevSelectedMarker.startTime+h/100,c.cues=c._markers;var n=c._markers[c.currentMarkerIndex];c.sortMarkers(),c.markers=c._markers.slice(0,c._markers.length-1),c.emit("markersupdated",c._markers,n),i=!1}else if(i){i=!1,c.player.utils.removeClass(u,"editor-drag"),c._markers[c.currentMarkerIndex].startTime=+c.currentPosition,c.cues=c._markers;var a=c._markers[c.currentMarkerIndex];c.sortMarkers(),c.markers=c._markers.slice(0,c._markers.length-1),c.emit("markersupdated",c._markers,a)}k.resetMarkerBars(c.cueEls,l)},{passive:!1})}},{passive:!0})}},{key:"setupElements",value:function(){var t,a,i,s=this,o=this.hasThumbnail;this.style&&this.style.cssRules&&this.removeRules(),this.isEditor&&(t=this.root.getElementsByClassName("jw-slider-time")[0],a=t.getElementsByClassName("jw-slider-container")[0],i=t.getElementsByClassName("jw-knob")[0],k.clearMarkerBars(a)),this.cueEls.forEach(function(e,r){if(e.setAttribute("data-index",r),e.className+=" jw-marker jw-cue-"+r,s.isEditor&&s.setupEditorElements(e,r,a,t,i),o){var n=s.root.querySelector(".jw-time-thumb");e.addEventListener("mouseover",function(e){if(s._markers[r].data){var t=s._markers[r].data.thumbnail;s.loadThumbnail(t,n)}}),e.addEventListener("mouseout",function(e){n.removeAttribute("style")})}})}},{key:"addRule",value:function(e,t){var r;this.sheet.cssRules.length,r=0==e?".jw-cue.jw-cue-".concat(e,":before { color:").concat(t," !important; }"):".jw-cue.jw-cue-".concat(e,":after { color:").concat(t," !important; }");var n="\n.jw-cue-bar.jw-cue-bar-".concat(e," { background-color:").concat(t," !important; }"),a=".jw-cue.jw-cue-".concat(e+1,":before { color:").concat(t," !important; }");this.sheet.insertRule(r),this.sheet.insertRule(n),this.sheet.insertRule(a)}},{key:"removeRules",value:function(){for(var e=this.sheet.cssRules.length-1;0<=e;--e)this.sheet.deleteRule(e)}},{key:"loadThumbnail",value:function(e,t){var r=new Image;r.onload=function(){t.style.backgroundImage='url("'+e+'")',t.style.width=r.width+"px",t.style.height=r.height+"px",t.style.margin="0 auto",t.style.backgroundPosition="0 0"},r.src=e}},{key:"onCueChange",value:function(e){this.player.trigger("cuepoint",e)}},{key:"addMarker",value:function(e){e.startTime||(e.startTime=this.currentPosition),e.endTime||(e.endTime=e.startTime+30),this.addMarkers([e])}},{key:"updateMarker",value:function(e){this.selectedMarker&&(this.selectedMarker.text=e.text,this.selectedMarker.data=Object.assign(this.selectedMarker.data||{},e),this.markers=this._markers)}},{key:"addMarkers",value:function(e){this._markers.pop(),this._markers=[].concat(i(this._markers),i(e)),this.sortMarkers(),this.player.setCues([]),this.markers=this._markers}},{key:"sortMarkers",value:function(){var r=this;this._markers.sort(function(e,t){return e.startTime-t.startTime}),this._markers.forEach(function(e,t){r._markers[t+1]&&(e.endTime=r._markers[t+1].startTime)})}},{key:"removeMarker",value:function(e){this.removeMarkers([e])}},{key:"removeAllMarkers",value:function(){this.markersCues.removeAllTextCues(),this.player.setCues([]);var e=this.root.getElementsByClassName("jw-slider-container")[0];k.clearMarkerBars(e),this._markers=[]}},{key:"removeMarkers",value:function(t){this.markers=this._markers.filter(function(e){return t.indexOf(e.startTime)<0})}},{key:"nextMarker",value:function(){var e=this.timeForNextMarker();this.seekMarker(e)}},{key:"prevMarker",value:function(){var e=this.timeForPrevMarker();this.seekMarker(e)}},{key:"seekMarker",value:function(e){this.emit("selectedmarker",this.selectedMarker,this.currentMarkerIndex),this.player.seek(e)}},{key:"getPrevMarker",value:function(e,t){for(var r=null,n=e.length-1;0<=n;n--){var a=e[n];if(a.startTime<=t&&n!==this.currentMarkerIndex){r=a,this.currentMarkerIndex=n;break}}return r}},{key:"getNextMarker",value:function(e,t){for(var r,n=0;n<e.length;n++){var a=e[n];if(a.startTime>=t){r=a,this.currentMarkerIndex=n;break}}return r}},{key:"timeForPrevMarker",value:function(){var e=this.currentPosition;return this.getPrevMarker(this._markers,e).startTime}},{key:"timeForNextMarker",value:function(){var e=this.currentPosition;return this.getNextMarker(this._markers,e).startTime}},{key:"hasThumbnail",get:function(){return 0!==this._markers.length&&this._markers[0].data&&this._markers[0].data.thumbnail}},{key:"markers",get:function(){var e=i(this._markers);return e.pop(),e},set:function(e){var t=this;this.addLastMarker(e);var r=k.markersToCues(e);this.player.setCues(r),this._markers=e,setTimeout(function(){t.setupElements(),t.cues=e,t.emit("markers")},1e3)}},{key:"cueEls",get:function(){return this.root.querySelectorAll(".jw-cue")}},{key:"selectedMarker",get:function(){return this._markers[this.currentMarkerIndex]}},{key:"nextSelectedMarker",get:function(){return this._markers[this.currentMarkerIndex+1]}},{key:"prevSelectedMarker",get:function(){return this._markers[this.currentMarkerIndex-1]}},{key:"currentPosition",get:function(){return this.player.getPosition()}},{key:"cues",set:function(e){this.markersCues.cues=e}}]),a}(),v=function(){e(i,h);var a=u(i);function i(e,t,r){var n;return s(this,i),(n=a.call(this)).addButton(e,t,r),n}return t(i,[{key:"addButton",value:function(e,t,r){var n=this;this.localization=e.getConfig().localization,this.conf=r,e.addButton(this.svgFace(),this.tooltipOff,function(e){return n.onClick(e)},r.name,r.className),this.button=t.querySelector("."+r.className),this.tooltipText=this.button.querySelector(".jw-text")}},{key:"onClick",value:function(e){this.emit("click",e.currentTarget)}},{key:"tooltipOff",get:function(){return this.localization[this.conf.name]||this.conf.titleOff}}]),i}(),y=function(){e(n,v);var r=u(n);function n(e,t){return s(this,n),r.call(this,e,t,{name:"prev",titleOff:"Prev Marker",className:"jw-icon-prev"})}return t(n,[{key:"svgFace",value:function(){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px" class="jw-svg-icon jw-svg-icon-prev"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'}}]),n}(),p=function(){e(n,v);var r=u(n);function n(e,t){return s(this,n),r.call(this,e,t,{name:"next",titleOff:"Next Marker",className:"jw-icon-next"})}return t(n,[{key:"svgFace",value:function(){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px" class="jw-svg-icon jw-svg-icon-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'}}]),n}();jwplayer().registerPlugin("videomarkers","8.0",function(a,e){var i={navigation:!1,editor:!1,timecodecss:".timecode-marker",container:null,listTemplate:'<dt>{timecode}</dt><dd><a href="#" data-time="{start}" data-index="{index}" class="timecode-marker">{caption}</a></dd>',htmlTemplate:'<a href="#" data-time="{time}" class="timecode-marker">{timecode}</a>'},n=a.utils,t=a._,s=null,o=null,r=!1;function u(){r=!0;var e=a.getPlaylistItem();e.markers&&(i.markers=e.markers),e.chaptersurl&&(i.chaptersurl=e.chaptersurl),s.configure(i)}function c(e){i.container&&function(e){var t=document.querySelector(i.container),r=document.createElement("dl");if(k.buildMarkersList(r,e,i.listTemplate),t.innerHTML="",t.appendChild(r),o=t.querySelectorAll(i.timecodecss))for(var n=0;n<o.length;n++)o[n].onclick=function(e){e.preventDefault(),"playing"==a.getState()&&a.seek(this.getAttribute("data-time"));var t=this.getAttribute("data-index");this.classList.add("active");for(var r=0;r<this.parentNode.childNodes.length;r++)t!==r&&this.parentNode.childNodes[r].classList.remove("active")}}(s.markers),a.trigger("markers",s.markers)}t.extend(i,e),a.on("ready",function(e){var t,r;n.toggleClass(a.getContainer(),"cue-editor",i.editor),(s=new m(a,i.editor)).on("markers",c),s.on("selectedmarker",function(e,t,r){a.trigger(e.type,{marker:t,index:r})}).on("markersupdated",function(e,t,r){a.trigger(e.type,{markers:t,marker:r})}),i.navigation&&(t=a.getContainer(),r=new p(a,t),new y(a,t).on("click",function(){s.prevMarker()}),r.on("click",function(){s.nextMarker()}))}).on("playlistitem playlist",function(e){i.editor?a.once("beforePlay",u):a.once("meta",u)}).on("complete",function(e){a.once("meta",u)}).on("cuepoint",function(e){if(o)for(var t=0;t<o.length;t++)e.index==t?o[t].classList.add("active"):o[t].classList.remove("active")}),a.addMarker=function(e){s.addMarker(e)},a.updateMarker=function(e){s.updateMarker(e)},a.addMarkers=function(e){s.addMarkers(e)},a.setMarkers=function(e){r?s.markers=e:i.markers=e},a.removeMarker=function(e){s.removeMarker(e)},a.removeMarkers=function(e){s.removeMarkers(e)},a.removeAllMarkers=function(){s.removeAllMarkers()},a.getMarkers=function(){return s.markers},a.nextMarker=function(){s.nextMarker()},a.prevMarker=function(){s.prevMarker()},a.getMarkersVTT=function(){return k.generateVTT(s.markers)},this.resize=function(e,t){}})});