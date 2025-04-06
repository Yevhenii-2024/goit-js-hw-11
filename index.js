import{S as m,a as d,i as h}from"./assets/vendor-CZCqCKWq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function p(r){const t=r.map(({webformatURL:n,largeImageURL:s,tags:e,likes:o,views:i,comments:u,downloads:f})=>`
         <li class="card">
              <a href="${s}"></a>
                <img src="${n}" alt="${e}" />
            <ul class="img-info">
               <li class="text">Likes</li>${o}
               <li class="text">Views</li>${i}
               <li class="text">Comments</li>${u}
               <li class="text">Downloads</li>${f}
            </ul>
        </li>
            `).join("");g(t)}function g(r=""){const t=document.querySelector(".gallery");t.innerHTML=r,r&&y()}function y(){new m(".gallery a",{navText:["←","→"],captionsData:"alt",captionDelay:"250"}).refresh()}function l(r){const t=document.querySelector(".loader");t.style.display=r}function x(r){d.get("https://pixabay.com/api/",{params:{key:"49667356-c9b78f361687dff4f3855c0b0",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>b(t.data.hits)).catch(t=>a(t.message)).finally(()=>l("none"))}function b(r){if(!r.length){a();return}p(r)}function a(){h.error({title:"Error",titleColor:"white",message:"❌ Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})}const c=document.querySelector(".form");c.addEventListener("submit",L);function L(r){r.preventDefault();const t=this.elements["search-text"].value.trim();if(!t){c.reset(),a();return}l("block"),x(t)}
//# sourceMappingURL=index.js.map
