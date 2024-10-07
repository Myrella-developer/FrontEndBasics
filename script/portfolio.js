// API
const apiKey = "b81bsES8bbg7TZiVMqZa9Vfbo3eonwBZtSi2ehQpzxzn2bvlUgFfBbJl";
const searchResult = document.getElementById("result");

let sentinelObserver;
let totalImagesLoaded = 0;
const maxImages = 45;
const initialImageLoad = 9;

const searchQueries = ["nature", "bar", "cats", "animals", "cities", "birds"];

// EVENT LISTENERS
const setupListeners = () => {
  document.addEventListener("DOMContentLoaded", setupImageObserver);
};

// EVENT HANDLERS
const setupImageObserver = () => {
  const imageContainer = document.querySelector(".container-img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        loadInitialImages();
      }
    });
  });

  observer.observe(imageContainer);
};

// Cargar imágenes iniciales cuando el contenedor entra en vista
const loadInitialImages = () => {
  const query = getRandomQuery();
  const apiURL = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&per_page=${initialImageLoad}`;

  fetchImages(apiURL)
    .then((data) => displayResults(data))
    .catch((error) =>
      console.error("Error al cargar imágenes iniciales:", error)
    );
};

const getRandomQuery = () => {
  const randomIndex = Math.floor(Math.random() * searchQueries.length);
  return searchQueries[randomIndex];
};

//RENDER FUNCTION
const displayResults = (data) => {
  removeObserver();

  data.photos.forEach((photo) => {
    if (totalImagesLoaded < maxImages) {
      searchResult.innerHTML += `
      <div class="grid-item">
          <img class="img-api" src="${photo.src.medium}" alt="${photo.alt}">
          <div class="image-content"></div>
      </div>
      `;
      totalImagesLoaded++;
    }
  });

  if (totalImagesLoaded >= maxImages) {
    removeObserver();
    return;
  }
  createObserver(data.next_page);
};

// Spinner functions
const showLoading = () => {
  const div = document.createElement("div");
  div.classList.add("loader");

  document.body.prepend(div);
};

const hideLoading = () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    setTimeout(() => {
      loader.remove();
    }, 300);
  }
};

// Lazy Loading Functions
const createObserver = (nextPageURL) => {
  if (!nextPageURL || totalImagesLoaded >= maxImages) return;

  const sentinel = document.createElement("div");
  sentinel.id = "sentinel";

  document.querySelector(".container-img").appendChild(sentinel);

  sentinelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && totalImagesLoaded < maxImages) {
        loadMoreResults(nextPageURL);
      }
    });
  });

  sentinelObserver.observe(sentinel);
};

const removeObserver = () => {
  const sentinel = document.getElementById("sentinel");
  sentinel && sentinel.remove();

  if (sentinelObserver) {
    sentinelObserver.disconnect();
    sentinelObserver = null;
  }
};

//HELPER FUNCTIONS
const fetchImages = async (apiURL) => {
  try {
    const response = await fetch(apiURL, {
      headers: { Authorization: apiKey },
    });
    if (!response.ok) {
      throw new Error(`HTTP Error! status=${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error", error);
  }
};

const loadMoreResults = (nextPageURL) => {
  showLoading();

  fetchImages(nextPageURL)
    .then((data) => displayResults(data))
    .finally(hideLoading);
};

//INITIALIZE
setupListeners();
