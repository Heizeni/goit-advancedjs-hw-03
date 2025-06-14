import{S as m,i}from"./assets/vendor-Cau1Iyua.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="23587423-82924c7bf0de5f5bd871046c4",y="https://pixabay.com/api/";async function g(n){const o=`${y}?key=${h}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(o);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){throw console.error("❌ Fetch error:",t),t}}function b(n){n.innerHTML=""}function w(n,o){const t=n.map(({webformatURL:a,largeImageURL:e,tags:r,likes:s,views:d,comments:p,downloads:f})=>`
      <li class="photo-card">
        <a href="${e}">
          <img src="${a}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${s}</p>
          <p><b>Views:</b> ${d}</p>
          <p><b>Comments:</b> ${p}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",t)}const u=document.querySelector(".loader-wrapper");function L(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const $=document.querySelector("#search-form"),l=document.querySelector(".gallery"),P=new m(".gallery a",{captionsData:"alt",captionDelay:250});$.addEventListener("submit",async n=>{n.preventDefault();const o=n.currentTarget.elements.searchQuery.value.trim();if(!o){i.warning({message:"Please enter a search term",position:"topRight"});return}b(l),L();try{const t=await g(o);if(t.hits.length===0){i.info({message:"Sorry, there are no images matching your search request.",position:"topRight"}),c();return}w(t.hits,l);const a=l.querySelectorAll("img"),e=Array.from(a).map(r=>new Promise(s=>{r.complete?s():(r.onload=()=>s(),r.onerror=()=>s())}));await Promise.all(e),c(),P.refresh()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),c()}});
//# sourceMappingURL=index.js.map
