import './Hero.css';
import { Send } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="bg-glow hero-glow-1"></div>
      <div className="bg-glow hero-glow-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <img src={logoImg} alt="RODOVIA TIPS" className="hero-logo" />
          <div className="badge">🚀 Estratégia Validada e Gratuita</div>
          
          <h1 className="hero-title">
            Vença o mercado com <span className="text-gradient">Sinais de Alta Precisão</span> todos os dias
          </h1>
          
          <p className="hero-subtitle">
            Tenha acesso ao nosso grupo VIP gratuito e receba sinais focados em previsão de fluxo em rodovias (como Campos do Jordão, Pindamonhangaba, etc.). Estratégia inovadora e lucrativa.
          </p>
          
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary btn-large">
              Entrar no grupo gratuito <Send size={20} />
            </a>
            <p className="hero-guarantee">✓ Vagas limitadas. 100% Grátis.</p>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-panel trading-mockup">
            <div className="mockup-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <div className="mockup-title">Painel de Lucros ao Vivo</div>
            </div>
            <div className="mockup-body">
              <div className="signal-item success">
                <div className="signal-info">
                  <span className="signal-time">Agora</span>
                  <span className="signal-pair">Campos do Jordão - Alta de Fluxo</span>
                </div>
                <div className="signal-result">+ GREEN</div>
              </div>
              <div className="signal-item success">
                <div className="signal-info">
                  <span className="signal-time">Há 5 min</span>
                  <span className="signal-pair">Pindamonhangaba - Queda</span>
                </div>
                <div className="signal-result">+ GREEN</div>
              </div>
              <div className="signal-item success">
                <div className="signal-info">
                  <span className="signal-time">Há 15 min</span>
                  <span className="signal-pair">Dutra (Trecho SP) - Alta</span>
                </div>
                <div className="signal-result">+ GREEN</div>
              </div>
              <div className="live-pulse">
                <span className="pulse-dot"></span> Analisando rodovias...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
