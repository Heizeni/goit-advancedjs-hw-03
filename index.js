import{S as p,i}from"./assets/vendor-Cau1Iyua.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="23587423-82924c7bf0de5f5bd871046c4",m="https://pixabay.com/api/";async function h(s){const o=`${m}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(o);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){throw console.error("❌ Fetch error:",t),t}}function g(s){s.innerHTML=""}function y(s,o){const t=s.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:l,comments:u,downloads:f})=>`
      <li class="photo-card">
        <a href="${e}">
          <img src="${n}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${a}</p>
          <p><b>Views:</b> ${l}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",t)}const b=document.querySelector("#search-form"),c=document.querySelector(".gallery"),w=new p(".gallery a",{captionsData:"alt",captionDelay:250});b.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements.searchQuery.value.trim();if(!o){i.warning({message:"Please enter a search term",position:"topRight"});return}g(c);try{const t=await h(o);t.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(y(t.hits,c),w.refresh())}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
