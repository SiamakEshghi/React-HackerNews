import axios from 'axios';


const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const topStoriesUrl = 'topstories.json'
const itemUrl = 'item';

export const getTopStoryIDS = () => {
    return new Promise((resolve, reject) => {
        axios({
            baseURL: BASE_URL,
            url: topStoriesUrl,
            params: {
                print: 'pretty'
            }
        }).then((result) => resolve(result.data))
        .catch((err) => reject(err));
    });
}

export const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        axios({
            baseURL: BASE_URL,
            url: `${itemUrl}/${itemId}.json`,
            params: {
                print: 'pretty'
            }
        }).then((result) => resolve(result.data))
        .catch((err) => reject(err))
    })
}
