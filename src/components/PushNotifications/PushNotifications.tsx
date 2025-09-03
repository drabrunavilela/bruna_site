// 🚧 COMPONENTE PREPARADO PARA IMPLEMENTAÇÃO FUTURA
// Será ativado após implementação do backend para notificações
// Para ativar: descomente este arquivo

// import { useState, useEffect } from 'react';

// interface NotificationPermission {
//   granted: boolean;
//   denied: boolean;
//   default: boolean;
// }

// interface MedicalNotification {
//   id: string;
//   type: 'appointment' | 'health_tip' | 'emergency' | 'blog_post';
//   title: string;
//   body: string;
//   icon?: string;
//   scheduledTime?: Date;
// }

// Componente stub temporário
const PushNotifications: React.FC = () => {
  return null;
};

export default PushNotifications;

/*
CÓDIGO COMPLETO COMENTADO PARA IMPLEMENTAÇÃO FUTURA:

const PushNotifications: React.FC = () => {<PushNotificationsProps> = ({ onSubscriptionChange }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);

  // VAPID public key (deve ser configurada no servidor)
  const VAPID_PUBLIC_KEY = 'BEl62iUYgUivxIkv69yViEuiBIa40HI80NqIUHI-lzOAOMgp2Q7UlpgBJQMswG2NDI3TpXSNOH4mQe7hPjfWBjM';

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const registration = await navigator.serviceWorker.ready;
        const existingSubscription = await registration.pushManager.getSubscription();
        
        if (existingSubscription) {
          setIsSubscribed(true);
          setSubscription(existingSubscription);
          onSubscriptionChange?.(existingSubscription);
        }
      } catch (error) {
        console.error('Erro ao verificar subscription:', error);
      }
    };

    // Verificar suporte a Service Worker e Push Notifications
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      checkSubscription();
    }
  }, [onSubscriptionChange]);

  const urlBase64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const subscribeUser = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });

      setIsSubscribed(true);
      setSubscription(subscription);
      onSubscriptionChange?.(subscription);

      // Enviar subscription para o servidor
      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscription,
          userAgent: navigator.userAgent,
          timestamp: Date.now()
        })
      });

      console.log('Push notification subscription successful');
    } catch (error) {
      console.error('Erro ao inscrever para push notifications:', error);
    }
  };

  const unsubscribeUser = async () => {
    try {
      if (subscription) {
        await subscription.unsubscribe();
        setIsSubscribed(false);
        setSubscription(null);
        onSubscriptionChange?.(null);

        // Notificar servidor sobre unsubscribe
        await fetch('/api/push/unsubscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            endpoint: subscription.endpoint
          })
        });

        console.log('Push notification unsubscription successful');
      }
    } catch (error) {
      console.error('Erro ao desinscrever push notifications:', error);
    }
  };

  // Não renderizar se não há suporte
  if (!isSupported) {
    return null;
  }

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      zIndex: 1000,
      background: 'white',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      maxWidth: '300px'
    }}>
      <div style={{ marginBottom: '12px' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
          🔔 Notificações Médicas
        </h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Receba lembretes de consultas e dicas de saúde infantil
        </p>
      </div>
      
      {!isSubscribed ? (
        <button
          onClick={subscribeUser}
          style={{
            background: '#C9C1E0',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            width: '100%'
          }}
        >
          ✅ Ativar Notificações
        </button>
      ) : (
        <div>
          <p style={{ 
            margin: '0 0 8px 0', 
            fontSize: '14px', 
            color: '#28a745',
            fontWeight: 'bold'
          }}>
            ✅ Notificações Ativas
          </p>
          <button
            onClick={unsubscribeUser}
            style={{
              background: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            🔕 Desativar
          </button>
*/
