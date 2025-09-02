import React, { useState } from 'react';
import styles from './AgendamentoForm.module.css';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AgendamentoData {
  date: string;
  time: string;
  patient: {
    name: string;
    email: string;
    phone: string;
    age: string;
    reason: string;
    isFirstTime: boolean;
  };
  timestamp: string;
}

interface AgendamentoFormProps {
  onSubmit?: (data: AgendamentoData) => void;
}

const AgendamentoForm: React.FC<AgendamentoFormProps> = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [patientData, setPatientData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    reason: '',
    isFirstTime: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Horários disponíveis (pode ser integrado com API real)
  const availableSlots: TimeSlot[] = [
    { time: '08:00', available: true },
    { time: '08:30', available: true },
    { time: '09:00', available: false },
    { time: '09:30', available: true },
    { time: '10:00', available: true },
    { time: '10:30', available: false },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: true },
    { time: '16:00', available: true },
    { time: '16:30', available: false }
  ];

  // Gerar próximos 30 dias úteis (excluindo fins de semana)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Começar do próximo dia

    while (dates.length < 30) {
      const dayOfWeek = currentDate.getDay();
      // Pular fins de semana (0 = domingo, 6 = sábado)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (integrar com backend real)
    const agendamentoData = {
      date: selectedDate,
      time: selectedTime,
      patient: patientData,
      timestamp: new Date().toISOString()
    };

    try {
      // Aqui seria a integração com API real
      console.log('Agendamento:', agendamentoData);
      
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setShowSuccess(true);
      onSubmit?.(agendamentoData);

      // Enviar para WhatsApp também
      const whatsappMessage = `Novo agendamento solicitado!\n\n` +
        `👤 Nome: ${patientData.name}\n` +
        `📞 Telefone: ${patientData.phone}\n` +
        `📧 Email: ${patientData.email}\n` +
        `📅 Data: ${new Date(selectedDate).toLocaleDateString('pt-BR')}\n` +
        `⏰ Horário: ${selectedTime}\n` +
        `👶 Idade: ${patientData.age} anos\n` +
        `📋 Motivo: ${patientData.reason}\n` +
        `🆕 Primeira consulta: ${patientData.isFirstTime ? 'Sim' : 'Não'}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      // Não abre automaticamente, mas disponibiliza o link
      console.log(`WhatsApp link: https://wa.me/5531999999999?text=${encodedMessage}`);

    } catch (error) {
      console.error('Erro no agendamento:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successMessage}>
          <h3>✅ Agendamento Solicitado com Sucesso!</h3>
          <p>
            Sua solicitação foi enviada para a Dra. Bruna Vilela. 
            Você receberá uma confirmação por WhatsApp em até 2 horas.
          </p>
          <div className={styles.nextSteps}>
            <h4>Próximos passos:</h4>
            <ul>
              <li>✅ Confirmação será enviada via WhatsApp</li>
              <li>📧 Email de confirmação será enviado</li>
              <li>📋 Orientações pré-consulta serão enviadas</li>
            </ul>
          </div>
          <button 
            className={styles.whatsappButton}
            onClick={() => {
              const message = `Olá! Acabei de solicitar um agendamento para ${new Date(selectedDate).toLocaleDateString('pt-BR')} às ${selectedTime}. Gostaria de confirmar.`;
              window.open(`https://wa.me/5531999999999?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            💬 Falar no WhatsApp
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.agendamentoContainer}>
      <div className={styles.header}>
        <h2>📅 Agende sua Consulta</h2>
        <p>Escolha o melhor dia e horário para sua consulta com a Dra. Bruna Vilela</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Seleção de Data */}
        <div className={styles.section}>
          <h3>📅 Escolha a Data</h3>
          <div className={styles.dateGrid}>
            {availableDates.slice(0, 10).map((date, index) => {
              const dateStr = date.toISOString().split('T')[0];
              const isSelected = selectedDate === dateStr;
              
              return (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dateButton} ${isSelected ? styles.selected : ''}`}
                  onClick={() => setSelectedDate(dateStr)}
                >
                  <span className={styles.dayName}>
                    {date.toLocaleDateString('pt-BR', { weekday: 'short' })}
                  </span>
                  <span className={styles.dayNumber}>
                    {date.getDate()}
                  </span>
                  <span className={styles.monthName}>
                    {date.toLocaleDateString('pt-BR', { month: 'short' })}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Seleção de Horário */}
        {selectedDate && (
          <div className={styles.section}>
            <h3>⏰ Escolha o Horário</h3>
            <div className={styles.timeGrid}>
              {availableSlots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={!slot.available}
                  className={`${styles.timeButton} ${
                    selectedTime === slot.time ? styles.selected : ''
                  } ${!slot.available ? styles.unavailable : ''}`}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                >
                  {slot.time}
                  {!slot.available && <span className={styles.unavailableText}>Ocupado</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dados do Paciente */}
        {selectedDate && selectedTime && (
          <div className={styles.section}>
            <h3>👤 Dados do Paciente</h3>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={patientData.name}
                  onChange={(e) => setPatientData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Nome completo do paciente"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={patientData.email}
                  onChange={(e) => setPatientData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@exemplo.com"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={patientData.phone}
                  onChange={(e) => setPatientData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(31) 99999-9999"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="age">Idade *</label>
                <input
                  type="number"
                  id="age"
                  required
                  min="0"
                  max="18"
                  value={patientData.age}
                  onChange={(e) => setPatientData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="Idade em anos"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="reason">Motivo da Consulta *</label>
                <textarea
                  id="reason"
                  required
                  rows={3}
                  value={patientData.reason}
                  onChange={(e) => setPatientData(prev => ({ ...prev, reason: e.target.value }))}
                  placeholder="Descreva brevemente o motivo da consulta"
                />
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={patientData.isFirstTime}
                    onChange={(e) => setPatientData(prev => ({ ...prev, isFirstTime: e.target.checked }))}
                  />
                  <span>Esta é a primeira consulta com a Dra. Bruna</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Botão de Envio */}
        {selectedDate && selectedTime && patientData.name && patientData.email && patientData.phone && (
          <div className={styles.submitSection}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Enviando Solicitação...
                </>
              ) : (
                '📅 Solicitar Agendamento'
              )}
            </button>
            <p className={styles.disclaimer}>
              * A confirmação será feita pela equipe da Dra. Bruna Vilela via WhatsApp
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AgendamentoForm;
