const CACHE_NAME = "cache_Portafolio_FlorZamorano";

urlsToCache = [
    './',
    './imagenes/7063891.jpg',
    './imagenes/cazle.jpg',
    './imagenes/cmotoko.jpg',
    './imagenes/cnegociacion.jpg',
    './imagenes/ctecnolochicas.jpg',
    './imagenes/icono.png',
    './imagenes/icono2.png',
    './imagenes/logo.png',
    './imagenes/proyecto1_0.jpg',
    './imagenes/proyecto1_1.jpg',
    './imagenes/proyecto1_2.jpg',
    './imagenes/proyecto1_3.jpg',
    './imagenes/proyecto2_1.jpg',
    './imagenes/proyecto2_2.jpg',
    './imagenes/proyecto2_3.jpg',
    './imagenes/proyecto2_4.jpg',
    './imagenes/proyecto4_1.jpg',
    './imagenes/proyecto4_2.jpg',
    './imagenes/proyecto4_3.jpg',
    './imagenes/proyecto5_1.jpg',
    './imagenes/proyecto5_2.jpg',
    './imagenes/proyecto6_1.jpg',
    './imagenes/proyecto6_2.jpg',
    './imagenes/proyecto6_3.jpg',
    './imagenes/proyecto7_0.jpg',
    './imagenes/proyecto7_1.jpg',
    './imagenes/proyecto7_2.jpg',
    './imagenes/proyecto7_3.jpg',
    './imagenes/proyecto8_1.jpg',
    './imagenes/proyecto8_2.jpg',
    './imagenes/proyecto8_3.jpg',
    './imagenes/proyecto9_1.jpg',
    './imagenes/proyecto9_2.jpg',
    './imagenes/proyecto9_3.jpg',
    './imagenes/proyecto11_0.jpg',
    './imagenes/proyecto11_1.jpg',
    './imagenes/proyecto11_2.jpg',
    './imagenes/proyecto11_3.jpg',
    './imagenes/proyecto12_1.jpg',
    './imagenes/proyecto12_2.jpg',
    './imagenes/proyecto12_3.jpg',
    './imagenes/proyecto12_4.jpg',
    './imagenes/proyecto13_0.jpg',
    './imagenes/proyecto13_1.jpg',
    './imagenes/proyecto13_2.jpg',
    './imagenes/proyecto13_3.jpg',
    './imagenes/proyecto15_0.jpg',
    './imagenes/proyecto15_1.jpg',
    './imagenes/proyecto15_2.jpg',
    './imagenes/proyecto15_3.jpg',
    './imagenes/proyecto16_0.jpg',
    './imagenes/proyecto16_1.jpg',
    './imagenes/proyecto16_2.jpg',
    './imagenes/proyecto16_3.jpg',
    './imagenes/proyecto16_4.jpg',
    './imagenes/proyecto17_1.jpg',
    './imagenes/proyecto17_2.jpg',
    './imagenes/proyecto17_3.jpg',
    './imagenes/proyecto17_4.jpg',
    './style.css'
];

//Funcion de instalacion
//almacena el nombre y los archivos que van a ir guardados en cache

self.addEventListener('install', e =>{
    e.waitUntil( //le decimos que detenga el evento hasta que se ejecute lo siguiente
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting)
        })

    )
})

self.addEventListener('activate', e =>{
    const listaBlancaCache = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(nombresCache => {
            return Promise.all(
                nombresCache.map(nombresCache =>{
                    if(listaBlancaCache.indexOf(nombresCache) === -1){
                        return caches.delete(nombresCache)
                    }
                })
            )
        })
        //activamos la cache actualizada
        .then(()=> self.clients.claim())
    )

})


self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res)
            {
                return res
            }
            return fetch(e.request)
        })
    )
})