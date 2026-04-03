import './HowItWorks.css';
import { UserPlus, MessageCircle, TrendingUp, Crown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="step-icon" size={32} />,
      title: '1. Crie uma Conta Nova',
      description: 'Você precisa se cadastrar na plataforma através do nosso link oficial de parceiro abaixo.'
    },
    {
      icon: <MessageCircle className="step-icon" size={32} />,
      title: '2. Envie seus Dados',
      description: 'Preencha o formulário nesta página informando exatamente o e-mail cadastrado e seu WhatsApp/Telegram.'
    },
    {
      icon: <Crown className="step-icon" size={32} />,
      title: '3. Análise da Conta',
      description: 'Contas criadas fora do nosso link não dão acesso. Validaremos sua conta em até 2 horas por e-mail ou celular.'
    },
    {
      icon: <TrendingUp className="step-icon" size={32} />,
      title: '4. Receba os Sinais',
      description: 'Uma vez aprovado no grupo VIP, você receberá os sinais exclusivos de fluxo das rodovias (ex: Campos do Jordão).'
    }
  ];

  return (
    <section className="section how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Como começar a lucrar <span className="text-gradient">hoje</span></h2>
          <p className="section-subtitle">O processo é extremamente simples, rápido e transparente. Em menos de 5 minutos você já estará pronto.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card glass-panel" key={index}>
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
