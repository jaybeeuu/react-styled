import "whatwg-fetch";

const preloader = (...urls) => urls.forEach(url => fetch(url));

export default preloader;