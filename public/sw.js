// Service Worker para cache avançado e performance
const CACHE_NAME = 'bruna-site-v1.1.0';
const STATIC_CACHE = 'static-v1.1';
const DYNAMIC_CACHE = 'dynamic-v1.1';
const IMAGES_CACHE = 'images-v1.1';

// Recursos críticos para cache
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/src/assets/styles/variables.css',
  '/src/assets/images/identidade-visual/logo-dra-bruna-vilela-header.webp',
  '/src/assets/images/identidade-visual/logo-dra-bruna-vilela-profissional.webp',
  '/src/assets/images/identidade-visual/logo-dra-bruna-vilela-principal.webp'
];

// Recursos importantes para cache
const IMPORTANT_ROUTES = [
  '/contato',
  '/servicos',
  '/sobre'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('Service Worker: Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName !== STATIC_CACHE && 
            cacheName !== DYNAMIC_CACHE && 
            cacheName !== IMAGES_CACHE
          ) {
            console.log('Service Worker: Clearing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/offline') || caches.match('/');
        })
    );
    return;
  }

  // Handle images with specific cache strategy
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGES_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            return response;
          }
          
          return fetch(event.request).then(fetchResponse => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          }).catch(() => {
            // Return placeholder for images if offline
            return new Response('', { status: 404 });
          });
        });
      })
    );
    return;
  }

  // Handle other requests
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Fetch and cache new requests
      return fetch(event.request)
        .then((response) => {
          // Don't cache if not successful
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone response for caching
          const responseToCache = response.clone();

          // Cache dynamic content
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/offline') || caches.match('/');
          }
        });
    })
  );
});

// Background Sync - Sistema avançado para formulários offline
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  } else if (event.tag === 'appointment-sync') {
    event.waitUntil(syncAppointments());
  } else if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

// Sincronizar formulários de contato offline
async function syncContactForms() {
  try {
    const db = await openIndexedDB();
    const pendingForms = await getPendingData(db, 'contact-forms');
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.data)
        });
        
        if (response.ok) {
          await removePendingData(db, 'contact-forms', form.id);
          console.log('Formulário de contato sincronizado:', form.id);
          
          // Notificar usuário do sucesso
          self.registration.showNotification('✅ Mensagem Enviada', {
            body: 'Sua mensagem foi enviada com sucesso para a Dra. Bruna!',
            icon: '/images/Icon/icon-192x192.png',
            tag: 'form-success'
          });
        }
      } catch (error) {
        console.error('Erro ao sincronizar formulário:', error);
      }
    }
  } catch (error) {
    console.error('Erro no background sync de formulários:', error);
  }
}

// Sincronizar agendamentos offline
async function syncAppointments() {
  try {
    const db = await openIndexedDB();
    const pendingAppointments = await getPendingData(db, 'appointments');
    
    for (const appointment of pendingAppointments) {
      try {
        const response = await fetch('/api/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(appointment.data)
        });
        
        if (response.ok) {
          await removePendingData(db, 'appointments', appointment.id);
          console.log('Agendamento sincronizado:', appointment.id);
          
          // Notificar usuário
          self.registration.showNotification('📅 Agendamento Confirmado', {
            body: 'Sua solicitação de consulta foi enviada para a Dra. Bruna!',
            icon: '/images/Icon/icon-192x192.png',
            tag: 'appointment-success',
            actions: [
              {
                action: 'view',
                title: 'Ver Detalhes'
              }
            ]
          });
        }
      } catch (error) {
        console.error('Erro ao sincronizar agendamento:', error);
      }
    }
  } catch (error) {
    console.error('Erro no background sync de agendamentos:', error);
  }
}

// Sincronizar dados de analytics offline
async function syncAnalytics() {
  try {
    const db = await openIndexedDB();
    const pendingAnalytics = await getPendingData(db, 'analytics');
    
    for (const event of pendingAnalytics) {
      try {
        // Enviar para Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', event.data.action, {
            event_category: event.data.category,
            event_label: event.data.label,
            value: event.data.value
          });
        }
        
        await removePendingData(db, 'analytics', event.id);
        console.log('Evento de analytics sincronizado:', event.id);
      } catch (error) {
        console.error('Erro ao sincronizar analytics:', error);
      }
    }
  } catch (error) {
    console.error('Erro no background sync de analytics:', error);
  }
}

// Utilitários IndexedDB para Background Sync
function openIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('BrunaVilelaDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Store para formulários de contato
      if (!db.objectStoreNames.contains('contact-forms')) {
        db.createObjectStore('contact-forms', { keyPath: 'id', autoIncrement: true });
      }
      
      // Store para agendamentos
      if (!db.objectStoreNames.contains('appointments')) {
        db.createObjectStore('appointments', { keyPath: 'id', autoIncrement: true });
      }
      
      // Store para analytics
      if (!db.objectStoreNames.contains('analytics')) {
        db.createObjectStore('analytics', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

function getPendingData(db, storeName) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function removePendingData(db, storeName, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

// Push Notifications - Sistema completo de engajamento
self.addEventListener('push', function(event) {
  console.log('Push notification received:', event);
  
  let notificationData = {
    title: 'Dra. Bruna Vilela',
    body: 'Nova informação disponível',
    icon: '/images/Icon/icon-192x192.png',
    badge: '/images/Icon/icon-72x72.png',
    tag: 'medical-update',
    requireInteraction: true,
    vibrate: [200, 100, 200],
    data: {
      url: '/',
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'view',
        title: '👀 Ver Agora',
        icon: '/images/Icon/icon-72x72.png'
      },
      {
        action: 'schedule',
        title: '📅 Agendar',
        icon: '/images/Icon/icon-72x72.png'
      },
      {
        action: 'close',
        title: '❌ Fechar',
        icon: '/images/Icon/icon-72x72.png'
      }
    ]
  };

  // Personalizar notificação baseada nos dados recebidos
  if (event.data) {
    try {
      const payload = event.data.json();
      notificationData = { ...notificationData, ...payload };
    } catch (e) {
      notificationData.body = event.data.text();
    }
  }

  // Tipos de notificação médica
  if (notificationData.type) {
    switch (notificationData.type) {
      case 'appointment':
        notificationData.title = '📅 Lembrete de Consulta';
        notificationData.body = 'Sua consulta com a Dra. Bruna é amanhã!';
        notificationData.tag = 'appointment-reminder';
        break;
      case 'health-tip':
        notificationData.title = '💡 Dica de Saúde Infantil';
        notificationData.tag = 'health-tip';
        break;
      case 'emergency':
        notificationData.title = '🚨 Informação Importante';
        notificationData.requireInteraction = true;
        notificationData.tag = 'emergency';
        break;
    }
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData)
  );
});

// Manipular cliques nas notificações
self.addEventListener('notificationclick', function(event) {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  let targetUrl = '/';
  
  // Ações específicas
  if (event.action === 'view') {
    targetUrl = event.notification.data?.url || '/';
  } else if (event.action === 'schedule') {
    targetUrl = '/contato';
  } else if (event.action === 'close') {
    return; // Apenas fechar
  } else {
    // Clique na notificação (não em ação)
    targetUrl = event.notification.data?.url || '/';
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(clientList) {
        // Verificar se já existe uma janela aberta
        for (let client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.navigate(targetUrl);
            return client.focus();
          }
        }
        
        // Abrir nova janela se necessário
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );
});

// Fechar notificação
self.addEventListener('notificationclose', function(event) {
  console.log('Notification closed:', event.notification.tag);
  
  // Analytics para notificações fechadas
  if (event.notification.data?.trackClose) {
    // Enviar evento de analytics
    fetch('/api/analytics/notification-close', {
      method: 'POST',
      body: JSON.stringify({
        tag: event.notification.tag,
        timestamp: Date.now()
      })
    }).catch(() => {}); // Falha silenciosa
  }
});
