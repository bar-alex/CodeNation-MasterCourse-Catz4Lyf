
const apiKey = '05ef2b3f-374a-4feb-b725-7a3de7a33440'

const apiHeaders = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data 
};

const apiUrls = {
    search_10: 'https://api.thecatapi.com/v1/images/search?limit=10',
    search_30: 'https://api.thecatapi.com/v1/images/search?limit=30',
    search_custom: 'https://api.thecatapi.com/v1/images/search?limit=',
}

export { 
  apiUrls,
  apiHeaders,
}