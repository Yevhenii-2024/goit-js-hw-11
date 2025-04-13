import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup, changeLoader } from './render-functions';


export async function getRequest(searchData) {
    return await axios.get(`https://pixabay.com/api/`, {
  params: {
    key: '49667356-c9b78f361687dff4f3855c0b0',
    q: `${searchData}`,
    image_type: 'photo',
    orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
    page
  }
})
        .then(res => checkData(res.data.hits))
        .catch(error => massageError(error.message))
        .finally(() => changeLoader('none'));
}

function checkData(data) {
    if (!data.length) {
        massageError('😕 Sorry, there are no images matching your search query. Please try again!');
        return;
    }
    createMarkup(data);
}

export function massageError(message) {
    iziToast.show({
        title: `${message}`,
        titleColor: 'white',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight'
});
}