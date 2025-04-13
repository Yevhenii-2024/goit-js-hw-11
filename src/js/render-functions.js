import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { massageError } from './js/pixabay-api';

export function createMarkup(array) {
    const markUp = array
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
            return `
         <li class="card">
              <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" />
            <ul class="img-info">
               <li class="text"><span class="bold">Likes</span>${likes}</li>
               <li class="text"><span class="bold">Views</span>${views}</li>
               <li class="text"><span class="bold">Comments</span>${comments}</li>
               <li class="text"><span class="bold">Downloads</span>${downloads}</li>
            </ul>
            </a>
        </li>
            `;
        }).join('');
    renderGallery(markUp);
};

const loadMore = document.querySelector('[data-showMore]');

loadMore.addEventListener('click', showMore);

let page = 1;

async function showMore() {
  page++
    loadMore.disabled = true;
    
    try { 
            

    } catch (error) {
        massageError(error.massage);
    }
}

export function renderGallery(string = '') {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = string;
    if (string) {
        setLightBox();
    }
}

function setLightBox() {
    const lightBox = new SimpleLightbox('.gallery a', {
  navText: ['←','→'],
  captionsData: 'alt',
  captionDelay: '250',
    });
    lightBox.refresh();
}

export function changeLoader(style) {
  const loader = document.querySelector('.loader');
  loader.style.display = style;
}