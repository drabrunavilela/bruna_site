// Content configuration
export const CONTENT_CONFIG = {
  // Page metadata
  METADATA: {
    BASE_URL: "https://drabrunavilela.com.br",
    DEFAULT_KEYWORDS: "neuropediatra, pediatra, belo horizonte",
    DEFAULT_OG_TYPE: "website",
    DEFAULT_TWITTER_CARD: "summary_large_image"
  },
  
  // Informações de contato
  CONTACT: {
    PHONE: "+5531973178377",
    PHONE_DISPLAY: "(31) 97317-8377",
    WHATSAPP: "5531973178377",
    EMAIL: "brunavilela.neuroped@gmail.com",
    ADDRESS: {
      STREET: "Avenida Raja Gabaglia 2000, Torre 1, Sala 313",
      CITY: "Belo Horizonte",
      STATE: "MG",
      ZIP: "30000-000",
      COUNTRY: "BR"
    },
    COORDINATES: {
      LATITUDE: -19.9167,
      LONGITUDE: -43.9345
    }
  },
  
  // Horários de atendimento
  SCHEDULE: {
    WEEKDAYS: "Segunda a Sexta: 08:00 - 18:00",
    WEEKEND: "Sábado: 08:00 - 12:00",
    SUNDAY: "Domingo: Fechado"
  },
  
  // Credenciais médicas
  CREDENTIALS: {
    CRM: "CRMMG 80690",
    RQE: "RQE 66867",
    SPECIALTIES: ["Neuropediatria", "Pediatria"]
  },
  
  // Services configuration
  SERVICES: {
    TDAH: {
      NAME: "TDAH",
      TITLE: "Transtorno do Déficit de Atenção e Hiperatividade",
      DESCRIPTION: "Diagnóstico e tratamento do TDAH"
    },
    TEA: {
      NAME: "TEA",
      TITLE: "Transtorno do Espectro Autista",
      DESCRIPTION: "Diagnóstico precoce e intervenção em TEA"
    },
    EPILEPSIA: {
      NAME: "Epilepsia",
      TITLE: "Epilepsia Infantil",
      DESCRIPTION: "Diagnóstico e tratamento de epilepsia"
    },
    ATRASOS: {
      NAME: "Atrasos",
      TITLE: "Atrasos no Desenvolvimento",
      DESCRIPTION: "Avaliação de atrasos no desenvolvimento"
    },
    CEFALEIAS: {
      NAME: "Cefaleias",
      TITLE: "Cefaleias Infantis",
      DESCRIPTION: "Tratamento de dores de cabeça"
    },
    SEGUNDA_OPINIAO: {
      NAME: "Segunda Opinião",
      TITLE: "Segunda Opinião em Neuropediatria",
      DESCRIPTION: "Análise especializada de diagnósticos"
    }
  },
  
  // Analytics configuration
  ANALYTICS: {
    GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-Z4J4QM1ZJ1',
    GTM_ID: import.meta.env.VITE_GTM_ID || 'GTM-TWW4RQFJ'
  }
};

// Helper functions
export const getServiceConfig = (serviceName: string) => {
  return CONTENT_CONFIG.SERVICES[serviceName as keyof typeof CONTENT_CONFIG.SERVICES];
};

export const getContactInfo = () => {
  return CONTENT_CONFIG.CONTACT;
};

export const getMetadataConfig = () => {
  return CONTENT_CONFIG.METADATA;
}; 