import{a as m,S as b,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/api";async function y(t,a=1,s=15){try{const l={key:"49503501-671f9af9932bd9ea1fe97a1a7",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:s};return(await m.get("/",{params:l})).data}catch(l){console.error(l.message)}}let g;function f(t,a){t=document.querySelector(".gallery");const s=a.map(({webformatURL:l,largeImageURL:e,tags:r,likes:n,views:p,comments:h,downloads:L})=>`<li class="gallery-item">
	                <a class="gallery-link" href="${e}">
		                <img  
		                class="gallery-image" 
		                src="${l}" 
		                alt="${r}"
		                />
	                </a>
                    <ul class="gallery-list">
                      <li class="gallery-data">
                        Likes
                        <span class="datatext">${n}</span>
                      </li>
                      <li class="gallery-data">
                        Views
                        <span class="datatext">${p}</span>
                      </li>
                      <li class="gallery-data">
                        Comments
                        <span class="datatext">${h}</span>
                      </li>
                      <li class="gallery-data">
                        Downloads
                        <span class="datatext">${L}</span>
                      </li>
                    </ul>
                </li>`).join("");t.insertAdjacentHTML("beforeend",s),g=new b(".gallery-link",{captionsData:"alt",captionDelay:250}),g.refresh()}function M(t){t=document.querySelector(".gallery"),t.innerHTML=""}let d="",i=1,u=15;const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreButton:document.querySelector(".loadmore-button")};o.form.addEventListener("submit",S);o.loadMoreButton.addEventListener("click",q);async function S(t){t.preventDefault(),d=t.currentTarget[0].value.trim();const a=t.currentTarget;if(o.loadMoreButton.classList.add("hidden"),o.loader.classList.remove("hidden"),!d){c.warning({message:"Sorry, there are no keywords. Please enter them.",position:"topRight"});return}M();try{const{hits:s,totalHits:l}=await y(d,i,u);if(s.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",iconUrl:"./img/octagon.svg",position:"topRight",close:!1,buttons:[["<button>✕</button>",function(e,r){e.hide({},r)}]]});return}f(o.gallery,s),o.loadMoreButton.classList.remove("hidden"),i*u>=l&&(o.loadMoreButton.classList.add("hidden"),c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){console.error(s.message)}finally{o.loader.classList.add("hidden")}a.reset()}async function q(){i+=1,o.loader.classList.remove("hidden"),o.loadMoreButton.classList.add("hidden");try{const{hits:t,totalHits:a}=await y(d,i,u);f(o.gallery,t),v(),i*u>=a?(o.loadMoreButton.style.display="none",c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):o.loadMoreButton.classList.remove("hidden")}catch(t){console.error(t.message)}finally{o.loader.classList.add("hidden")}}function v(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
