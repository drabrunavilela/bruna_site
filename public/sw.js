// Service Worker Limpo e Funcional para Dra. Bruna Vilela
const CACHE_VERSION = '2.0.0';
const STATIC_CACHE = `static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-v${CACHE_VERSION}`;
const IMAGES_CACHE = `images-v${CACHE_VERSION}`;

// Recursos essenciais para cache
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/images/identidade-visual/logo-dra-bruna-vilela-header.webp',
  '/images/identidade-visual/logo-dra-bruna-vilela-profissional.webp',
  '/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png',
  '/images/bruna/dra-bruna-vilela-atenciosa-05-md.webp',
  '/images/bruna/dra-bruna-vilela-atenciosa-05-sm.webp',
  '/images/bruna/dra-bruna-vilela-acolhedora-10-md.webp'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Cache criado');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch(error => {
        console.error('Erro ao criar cache:', error);
      })
  );
  self.skipWaiting();
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGES_CACHE) {
            console.log('Service Worker: Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições externas
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(response => {
        // Se encontrou no cache, retorna
        if (response) {
          return response;
        }

        // Senão, busca na rede
        return fetch(request)
          .then(fetchResponse => {
            // Verifica se a resposta é válida
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }

            // Clona a resposta para o cache
            const responseToCache = fetchResponse.clone();

            // Determina qual cache usar
            let cacheName = DYNAMIC_CACHE;
            if (request.url.match(/\.(png|jpg|jpeg|webp|svg|gif|ico)$/)) {
              cacheName = IMAGES_CACHE;
            }

            caches.open(cacheName)
              .then(cache => {
                cache.put(request, responseToCache);
              });

            return fetchResponse;
          })
          .catch(() => {
            // Se falhar, tenta retornar página offline ou página inicial
            if (request.mode === 'navigate') {
              return caches.match('/') || new Response('Página não disponível offline');
            }
          });
      })
  );
});

// Background Sync para formulários offline
self.addEventListener('sync', (event) => {
  console.log('Background sync:', event.tag);
  
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }
});

// Função para sincronizar formulários
async function syncContactForms() {
  try {
    console.log('Sincronizando formulários offline...');
    // Implementação futura quando houver backend
  } catch (error) {
    console.error('Erro ao sincronizar formulários:', error);
  }
}

// Push Notifications
self.addEventListener('push', (event) => {
  console.log('Push notification recebida');
  
  const options = {
    body: 'Nova informação da Dra. Bruna Vilela',
    icon: '/images/Icon/icon-192x192.png',
    badge: '/images/Icon/icon-72x72.png',
    tag: 'bruna-vilela-notification'
  };

  event.waitUntil(
    self.registration.showNotification('Dra. Bruna Vilela', options)
  );
});

// Clique em notificações
self.addEventListener('notificationclick', (event) => {
  console.log('Notificação clicada');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
