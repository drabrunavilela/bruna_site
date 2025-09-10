// import React, { useState, useEffect } from 'react';
// import { useConversionTracking } from '../../hooks/useConversionTracking';
// import styles from './LeadCapture.module.css';

// interface LeadCaptureProps {
//   trigger?: 'scroll' | 'time' | 'exit' | 'manual';
//   delay?: number; // em millisegundos para trigger 'time'
//   scrollPercentage?: number; // percentual para trigger 'scroll'
//   title?: string;
//   subtitle?: string;
//   buttonText?: string;
//   incentive?: string;
//   formFields?: ('nome' | 'email' | 'telefone' | 'interesse')[];
//   onClose?: () => void;
//   isVisible?: boolean;
// }

// interface FormData {
//   nome: string;
//   email: string;
//   telefone: string;
//   interesse: string;
//   aceitePolitica: boolean;
// }

// const LeadCapture: React.FC<LeadCaptureProps> = ({
//   trigger = 'manual',
//   delay = 30000, // 30 segundos
//   scrollPercentage = 70, // 70% da página
//   title = "🎯 Quer uma Avaliação Especializada?",
//   subtitle = "Receba orientações personalizadas da Dra. Bruna Vilela sobre o desenvolvimento do seu filho",
//   buttonText = "Quero uma Consulta",
//   incentive = "✅ Primeira consulta com desconto especial\n✅ Atendimento humanizado e acolhedor\n✅ Mais de 10 anos de experiência",
//   formFields = ['nome', 'email', 'telefone', 'interesse'],
//   onClose,
//   isVisible: controlledVisible
// }) => {
//   const [isVisible, setIsVisible] = useState(controlledVisible || false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     nome: '',
//     email: '',
//     telefone: '',
//     interesse: '',
//     aceitePolitica: false
//   });

//   const { trackFormSubmit, trackLeadCapture } = useConversionTracking();

//   // Efeito para triggers automáticos
//   useEffect(() => {
//     if (controlledVisible !== undefined) return; // Se controlado externamente, não usar triggers

//     let timeoutId: NodeJS.Timeout;
//     let scrollHandler: () => void;

//     switch (trigger) {
//       case 'time': {
//         timeoutId = setTimeout(() => {
//           setIsVisible(true);
//           trackLeadCapture('time_trigger', window.location.pathname);
//         }, delay);
//         break;
//       }

//       case 'scroll': {
//         scrollHandler = () => {
//           const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//           if (scrolled >= scrollPercentage) {
//             setIsVisible(true);
//             trackLeadCapture('scroll_trigger', window.location.pathname);
//             window.removeEventListener('scroll', scrollHandler);
//           }
//         };
//         window.addEventListener('scroll', scrollHandler);
//         break;
//       }

//       case 'exit': {
//         const exitHandler = (e: MouseEvent) => {
//           if (e.clientY <= 0) {
//             setIsVisible(true);
//             trackLeadCapture('exit_intent', window.location.pathname);
//             document.removeEventListener('mouseleave', exitHandler);
//           }
//         };
//         document.addEventListener('mouseleave', exitHandler);
//         break;
//       }
//     }

//     return () => {
//       if (timeoutId) clearTimeout(timeoutId);
//       if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
//     };
//   }, [trigger, delay, scrollPercentage, controlledVisible, trackLeadCapture]);

//   const handleClose = () => {
//     setIsVisible(false);
//     onClose?.();
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!formData.aceitePolitica) {
//       alert('Por favor, aceite a Política de Privacidade.');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Criar mensagem personalizada baseada no interesse
//       const interesses = {
//         'primeira-consulta': 'primeira consulta de avaliação',
//         'tdah': 'avaliação para TDAH',
//         'tea': 'avaliação para TEA (Autismo)',
//         'atraso-desenvolvimento': 'avaliação de atraso no desenvolvimento',
//         'cefaleia': 'consulta para dores de cabeça',
//         'epilepsia': 'consulta para epilepsia',
//         'segunda-opiniao': 'segunda opinião médica',
//         'outro': 'consulta especializada'
//       };

//       const interesseTexto = interesses[formData.interesse as keyof typeof interesses] || formData.interesse;

//       const mensagem = `🎯 *LEAD CAPTURADO - INTERESSE ALTO*

// 👤 *Nome:* ${formData.nome}
// 📧 *Email:* ${formData.email}
// 📱 *Telefone:* ${formData.telefone || 'Não informado'}
// 🎯 *Interesse:* ${interesseTexto}

// 📋 *Origem:* ${title}
// 🌐 *Página:* ${window.location.pathname}
// 📅 *Data:* ${new Date().toLocaleDateString('pt-BR')}
// ⏰ *Hora:* ${new Date().toLocaleTimeString('pt-BR')}

// 💡 *Lead prioritário - responder rapidamente!*`;

//       const mensagemCodificada = encodeURIComponent(mensagem);
//       const numeroWhatsApp = '5531973178377';
//       const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

//       // Analytics
//       trackFormSubmit('lead_capture', window.location.pathname);
//       trackLeadCapture('form_submit', window.location.pathname, {
//         interesse: formData.interesse,
//         source: trigger
//       });

//       // Abrir WhatsApp
//       window.open(linkWhatsApp, '_blank');
      
//       setIsSuccess(true);
      
//       // Fechar após sucesso
//       setTimeout(() => {
//         handleClose();
//         setIsSuccess(false);
//       }, 3000);

//     } catch (error) {
//       console.error('Erro ao enviar lead:', error);
//       alert('Erro ao enviar. Tente novamente.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormData, value: string | boolean) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   if (!isVisible) return null;

//   return (
//     <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && handleClose()}>
//       <div className={styles.modal}>
//         <button 
//           className={styles.closeButton} 
//           onClick={handleClose}
//           aria-label="Fechar"
//         >
//           ×
//         </button>

//         {isSuccess ? (
//           <div className={styles.successContent}>
//             <div className={styles.successIcon}>✅</div>
//             <h3 className={styles.successTitle}>Solicitação Enviada!</h3>
//             <p className={styles.successText}>
//               Obrigado pelo interesse! Estamos abrindo o WhatsApp para você conversar diretamente conosco.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className={styles.form}>
//             <div className={styles.header}>
//               <h2 className={styles.title}>{title}</h2>
//               <p className={styles.subtitle}>{subtitle}</p>
//             </div>

//             <div className={styles.incentives}>
//               {incentive.split('\n').map((line, index) => (
//                 <div key={index} className={styles.incentive}>
//                   {line}
//                 </div>
//               ))}
//             </div>

//             <div className={styles.fields}>
//               {formFields.includes('nome') && (
//                 <input
//                   type="text"
//                   placeholder="Nome completo"
//                   value={formData.nome}
//                   onChange={(e) => handleInputChange('nome', e.target.value)}
//                   className={styles.input}
//                   required
//                 />
//               )}

//               {formFields.includes('email') && (
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange('email', e.target.value)}
//                   className={styles.input}
//                   required
//                 />
//               )}

//               {formFields.includes('telefone') && (
//                 <input
//                   type="tel"
//                   placeholder="Telefone (opcional)"
//                   value={formData.telefone}
//                   onChange={(e) => handleInputChange('telefone', e.target.value)}
//                   className={styles.input}
//                 />
//               )}

//               {formFields.includes('interesse') && (
//                 <select
//                   value={formData.interesse}
//                   onChange={(e) => handleInputChange('interesse', e.target.value)}
//                   className={styles.select}
//                   required
//                 >
//                   <option value="">Selecione seu interesse principal</option>
//                   <option value="primeira-consulta">Primeira consulta de avaliação</option>
//                   <option value="tdah">Avaliação para TDAH</option>
//                   <option value="tea">Avaliação para TEA (Autismo)</option>
//                   <option value="atraso-desenvolvimento">Atraso no desenvolvimento</option>
//                   <option value="cefaleia">Dores de cabeça</option>
//                   <option value="epilepsia">Epilepsia</option>
//                   <option value="segunda-opiniao">Segunda opinião médica</option>
//                   <option value="outro">Outro assunto</option>
//                 </select>
//               )}

//               <div className={styles.checkbox}>
//                 <input
//                   type="checkbox"
//                   id="lead-privacy"
//                   checked={formData.aceitePolitica}
//                   onChange={(e) => handleInputChange('aceitePolitica', e.target.checked)}
//                   required
//                 />
//                 <label htmlFor="lead-privacy" className={styles.checkboxLabel}>
//                   Aceito a <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>
//                 </label>
//               </div>
//             </div>

//             <button 
//               type="submit" 
//               className={styles.submitButton}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Enviando...' : buttonText}
//             </button>

//             <div className={styles.trust}>
//               <span className={styles.trustIcon}>🔒</span>
//               <span className={styles.trustText}>Seus dados estão seguros conosco</span>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LeadCapture;
