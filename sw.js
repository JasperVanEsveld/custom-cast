// Change this to your repository name
var PATH = "/custom-cast";

// Choose a different app prefix name
var APP_PREFIX = "cc_";

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…).
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = "version_00";

// The files to make available for offline use. make sure to add
// others to this list
var URLS = [
  `${PATH}/`,
  `${PATH}/index.html`,
  `${PATH}/dist/mod.js``${PATH}/dist/search-input-1e5c7650.js``${PATH}/dist/video-list-919898de.js`,
];
