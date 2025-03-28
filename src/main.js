import { requestData } from "./js/pixabay-api";
import { renderMarkup, clearGallery } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let request = "";
let page = 1;
let perPage = 15;

const refs = {
  form: document.querySelector(".form"),
  gallery: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
  loadMoreButton: document.querySelector(".loadmore-button"),
};

refs.loadMoreButton.classList.add("hidden");

refs.form.addEventListener("submit", onSumbit);
refs.loadMoreButton.addEventListener("click", loadMorePictures);

async function onSumbit(event) {
  event.preventDefault();
  request = event.currentTarget[0].value.trim();
  const form = event.currentTarget;

  if (!request) {
    iziToast.warning({
      message: "Sorry, there are no keywords. Please enter them.",
      position: "topRight",
    });
    return;
  }

  clearGallery();

  try {
    const { hits, totalHits } = await requestData(request, page, perPage);

    if (hits.length === 0) {
      iziToast.show({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        messageColor: "#FAFAFB",
        backgroundColor: "#EF4040",
        iconColor: "#FAFAFB",
        iconUrl: "./img/octagon.svg",
        position: "topRight",
        close: false,
        buttons: [
          [
            "<button>✕</button>",
            function (instance, toast) {
              instance.hide({}, toast);
            },
          ],
        ],
      });
      return;
    }
    renderMarkup(refs.gallery, hits);
    refs.loadMoreButton.classList.remove("hidden");

    if (page * perPage >= totalHits) {
      refs.loadMoreButton.classList.add("hidden");
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        icon: "",
        position: "topRight",
      });
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    refs.loader.classList.add("hidden");
  }
  form.reset();
}

async function loadMorePictures() {
  page += 1;
  refs.loader.classList.remove("hidden");
  refs.loadMoreButton.classList.add("hidden");

  try {
    const { hits, totalHits } = await requestData(request, page, perPage);

    renderMarkup(refs.gallery, hits);
    scrollPage();

    if (page * perPage >= totalHits) {
      refs.loadMoreButton.style.display = "none";
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    } else {
      refs.loadMoreButton.classList.remove("hidden");
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    refs.loader.classList.add("hidden");
  }
}
function scrollPage() {
  const cardHeigth = document
    .querySelector(".gallery-item")
    .getBoundingClientRect().height;
  scrollBy({
    top: cardHeigth * 2,
    behavior: "smooth",
  });
}
