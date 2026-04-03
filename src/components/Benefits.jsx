import './Benefits.css';
import { Zap, ShieldCheck, Users, HeadphonesIcon } from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    {
      icon: <Zap size={36} />,
      title: "Sinais em Tempo Real",
      desc: "Análises enviadas segundos após a oportunidade ser identificada pelo nosso algoritmo."
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Estratégia Validada",
      desc: "Não contamos com sorte. Nosso método foi testado exhaustivamente por analistas seniores."
    },
    {
      icon: <Users size={36} />,
      title: "Comunidade Ativa",
      desc: "Troque experiências e ideias com milhares de membros que estão lucrando diariamente."
    },
    {
      icon: <HeadphonesIcon size={36} />,
      title: "Suporte Especializado",
      desc: "Dúvidas? Nossa equipe está pronta para te ajudar a configurar e iniciar as operações."
    }
  ];

  return (
    <section className="section benefits-section">
      <div className="bg-glow benefits-glow"></div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Por que nosso método <span className="text-gradient">funciona?</span></h2>
          <p className="section-subtitle">Diferente de grupos amadores, atuamos de forma profissional com os melhores do mercado.</p>
        </div>

        <div className="benefits-grid">
          {benefitsList.map((item, idx) => (
            <div className="benefit-item" key={idx}>
              <div className="benefit-icon">{item.icon}</div>
              <div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
