import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="39057867-f9b54f51581e5f2d5762c62b3",m="https://pixabay.com/api/?";function p(r){const o=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${o}`).then(n=>{if(!n.ok)throw new Error("Failed to fetch");return n.json()})}console.log(window);const h=document.querySelector(".search-form"),c=document.querySelector(".card-list"),g=document.querySelector(".loader");h.addEventListener("submit",L);const y=new u(".card-item a",{captionsData:"alt",captionDelay:250});function L(r){r.preventDefault();const o=r.currentTarget.elements.search.value;r.currentTarget.elements.search.value="",c.innerHTML="",a(),p(o).then(n=>{S(n),a()})}function S({hits:r}){if(!r.length)return d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const o=b(r);c.insertAdjacentHTML("beforeend",o),y.refresh()}function b(r){return r.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:l})=>`<li class="card-item">
  <a href=${n}
    ><img src=${o} alt="${s}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${e}</p>
      </li>
      <li>
        Views
        <p>${t}</p>
      </li>
      <li>
        Comments
        <p>${i}</p>
      </li>
      <li>
        Downloads
        <p>${l}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function a(){g.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
