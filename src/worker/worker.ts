// tslint:disable-next-line:max-line-length
export const worker = `!function(){"use strict";var a=new Map,b=new Map,c=function a(b,c,d,e){var f="performance"in self?performance.now():Date.now();f>d?postMessage({id:c,type:e}):b.set(c,setTimeout(a,d-f,b,c,d,e))};addEventListener("message",function(d){var e=d.data,f=e.action,g=e.delay,h=e.id,i=e.now,j=e.type;if("clear"===f){var k=void 0;"interval"===j?void 0!==(k=a.get(h))&&(clearTimeout(k),a.delete(h)):"timeout"===j&&void 0!==(k=b.get(h))&&(clearTimeout(k),b.delete(h))}else if("set"===f){var l=void 0;if("performance"in self){var m=performance.now(),n=Math.max(0,m-i);g-=n,l=m}else l=Date.now();var o=l+g;"interval"===j?a.set(h,setTimeout(c,g,a,h,o,j)):"timeout"===j&&b.set(h,setTimeout(c,g,b,h,o,j))}})}();`;
