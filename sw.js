const staticAssets = [
  "./",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./sw.js"

];


self.addEventListener("install", async event=>{
  console.log("installed");
  const cache = await caches.open("calc-cache");
  cache.addAll(staticAssets);
});
self.addEventListener("fetch", event=>{
  console.log("fetch");
  const req = event.request;
  event.respondWith(cacheFirst(req))
});

async function cacheFirst(req){
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
  ///////////////////////////////
}
