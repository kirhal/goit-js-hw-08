!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(h,t),s?b(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?b(e):(i=r=void 0,u)}function S(){var e=p(),n=T(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},S.flush=function(){return void 0===f?u:w(p())},S}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form"),T="feedback-form-state",h=localStorage.getItem(T),w={email:"",message:""},S=JSON.parse(h);h&&(O.elements.email.value=S.email,O.elements.message.value=S.message),O.addEventListener("input",e(t)((function(e){"INPUT"===e.target.nodeName?w.email=e.target.value:w.message=e.target.value;localStorage.setItem(T,JSON.stringify(w))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),O.elements.email.value="",O.elements.message.value="",localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.f8ebea2f.js.map
