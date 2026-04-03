import './SocialProof.css';
import { MessageCircle } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="section social-proof-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resultados de quem já está <span className="text-gradient">lucrando</span></h2>
          <p className="section-subtitle">Pessoas comuns estão transformando seus celulares em máquinas de fazer dinheiro.</p>
        </div>

        <div className="proof-grid">
          {/* Estatísticas de Credibilidade */}
          <div className="stats-panel glass-panel">
            <div className="stat-item">
              <span className="stat-value text-gradient">89.4%</span>
              <span className="stat-label">Taxa de Acerto Média</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value text-gradient">+5.200</span>
              <span className="stat-label">Membros Ativos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value text-gradient">24/7</span>
              <span className="stat-label">Monitoramento do Fluxo</span>
            </div>
          </div>

          {/* Chat estilo depoimentos */}
          <div className="chat-testimonials">
            <div className="chat-bubble left glass-panel">
              <div className="chat-avatar">M</div>
              <div className="chat-content">
                <p className="chat-name">Marcos T.</p>
                <p className="chat-text">Irmão, peguei aquele sinal do fluxo de Campos do Jordão agora pouco. Bateu exato!! Já fiz R$ 450 hoje valeuuu 🚀🚀</p>
                <span className="chat-time">14:23</span>
              </div>
            </div>

            <div className="chat-bubble right glass-panel">
              <div className="chat-content">
                <p className="chat-text">Boa! Foca na gestão e bora pra cima. Final de semana o trânsito lá aumenta bastante, tem mais sinais.</p>
                <span className="chat-time">14:25</span>
              </div>
            </div>

            <div className="chat-bubble left glass-panel">
              <div className="chat-avatar">R</div>
              <div className="chat-content">
                <p className="chat-name">Rafael Costa</p>
                <p className="chat-text">Acessei pelo link ontem, comecei com banca baixa de R$ 50 e já dobrei seguindo as medições exatas da Dutra. Surreal o suporte lá dentro.</p>
                <span className="chat-time">18:40</span>
              </div>
            </div>
            
            <div className="chat-floating-badge">
              <MessageCircle size={16} /> Mais de 5.000 membros lucrando
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
