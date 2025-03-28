import{a as f,S as b,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();f.defaults.baseURL="https://pixabay.com/api";async function m(r,a=1,s=15){try{const l={key:"49503501-671f9af9932bd9ea1fe97a1a7",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:s};return(await f.get("/",{params:l})).data}catch(l){console.error(l.message)}}const y=document.querySelector(".gallery");let g;M();function h(r){const a=r.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:i,comments:p,downloads:L})=>`<li class="gallery-item">
	                <a class="gallery-link" href="${l}">
		                <img  
		                class="gallery-image" 
		                src="${s}" 
		                alt="${e}"
		                />
	                </a>
                    <ul class="gallery-list">
                      <li class="gallery-data">
                        Likes
                        <span class="datatext">${t}</span>
                      </li>
                      <li class="gallery-data">
                        Views
                        <span class="datatext">${i}</span>
                      </li>
                      <li class="gallery-data">
                        Comments
                        <span class="datatext">${p}</span>
                      </li>
                      <li class="gallery-data">
                        Downloads
                        <span class="datatext">${L}</span>
                      </li>
                    </ul>
                </li>`).join("");y.insertAdjacentHTML("beforeend",a)}function M(){g=new b(".gallery-link",{captionsData:"alt",captionDelay:250}),g.refresh()}function v(){y.innerHTML=""}let d="",n=1,u=15;const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreButton:document.querySelector(".loadmore-button")};o.form.addEventListener("submit",w);o.loadMoreButton.addEventListener("click",B);async function w(r){r.preventDefault(),d=r.currentTarget[0].value.trim(),n=1;const a=r.currentTarget;if(o.loadMoreButton.classList.add("hidden"),o.loader.classList.remove("hidden"),!d){o.loader.classList.add("hidden"),c.warning({message:"Sorry, there are no keywords. Please enter them.",position:"topRight"});return}v();try{const{hits:s,totalHits:l}=await m(d,n,u);if(s.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",iconUrl:"./img/octagon.svg",position:"topRight",close:!1,buttons:[["<button>✕</button>",function(e,t){e.hide({},t)}]]});return}h(s),o.loadMoreButton.classList.remove("hidden"),n*u>=l&&(o.loadMoreButton.classList.add("hidden"),c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){console.error(s.message)}finally{o.loader.classList.add("hidden")}a.reset()}async function B(){n+=1,o.loader.classList.remove("hidden"),o.loadMoreButton.classList.add("hidden");try{const{hits:r,totalHits:a}=await m(d,n,u);h(r),S(),n*u>=a?(o.loadMoreButton.style.display="none",c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):o.loadMoreButton.classList.remove("hidden")}catch(r){console.error(r.message)}finally{o.loader.classList.add("hidden")}}function S(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
