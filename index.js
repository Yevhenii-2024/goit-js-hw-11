import{S as p,a as m,i as h}from"./assets/vendor-CZCqCKWq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function g(e){const r=e.map(({webformatURL:i,largeImageURL:a,tags:t,likes:o,views:s,comments:f,downloads:d})=>`
         <li class="card">
              <a href="${a}">
                <img src="${i}" alt="${t}" />
            <ul class="img-info">
               <li class="text"><span class="bold">Likes</span>${o}</li>
               <li class="text"><span class="bold">Views</span>${s}</li>
               <li class="text"><span class="bold">Comments</span>${f}</li>
               <li class="text"><span class="bold">Downloads</span>${d}</li>
            </ul>
            </a>
        </li>
            `).join("");l(r)}function l(e=""){const r=document.querySelector(".gallery");r.innerHTML=e,e&&y()}function y(){new p(".gallery a",{navText:["←","→"],captionsData:"alt",captionDelay:"250"}).refresh()}function c(e){const r=document.querySelector(".loader");r.style.display=e}function b(e){return m.get("https://pixabay.com/api/",{params:{key:"49667356-c9b78f361687dff4f3855c0b0",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>x(r.data.hits)).catch(r=>n(r.message)).finally(()=>c("none"))}function x(e){if(!e.length){n("😕 Sorry, there are no images matching your search query. Please try again!");return}g(e)}function n(e){h.show({title:`${e}`,titleColor:"white",messageColor:"white",backgroundColor:"red",position:"topRight"})}const u=document.querySelector(".form");u.addEventListener("submit",L);function L(e){e.preventDefault();const r=this.elements["search-text"].value.trim();if(!r){u.reset(),n("Enter correct data, please");return}l(),c("block"),b(r)}
//# sourceMappingURL=index.js.map
