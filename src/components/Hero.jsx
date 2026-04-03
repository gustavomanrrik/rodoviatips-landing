import { useState, useEffect } from 'react';
import './Hero.css';
import { Send } from 'lucide-react';

import logoImg from '../assets/logo.png';

const INITIAL_SIGNALS = [
  { id: 1, time: 'Há 5 min', pair: 'Campos do Jordão - Alta de Fluxo', result: '+ GREEN' },
  { id: 2, time: 'Há 15 min', pair: 'Pindamonhangaba - Queda', result: '+ GREEN' },
  { id: 3, time: 'Há 30 min', pair: 'Dutra (Trecho SP) - Alta', result: '+ GREEN' },
];

const RODOVIAS = [
  'Campos do Jordão - Alta de Fluxo',
  'Pindamonhangaba - Queda',
  'Dutra (Trecho SP) - Alta',
  'Caraguatatuba - Alta de Fluxo',
  'Campos do Jordão - Queda',
  'Caraguatatuba - Queda'
];

const Hero = () => {
  const [signals, setSignals] = useState(INITIAL_SIGNALS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignals(prev => {
        const newRodovia = RODOVIAS[Math.floor(Math.random() * RODOVIAS.length)];
        const newSignal = {
          id: Date.now(),
          time: 'Agora',
          pair: newRodovia,
          result: '+ GREEN'
        };
        
        // Atualiza o tempo dos anteriores falsamente para dar efeito de rolagem
        const updatedPrev = prev.map((sig, idx) => {
          if (idx === 0) return { ...sig, time: 'Há 1 min' };
          if (idx === 1) return { ...sig, time: 'Há 5 min' };
          return sig;
        });

        // Mantém apenas os 3 mais recentes
        return [newSignal, ...updatedPrev].slice(0, 3);
      });
    }, 4500); // 4.5 segundos
    
    return () => clearInterval(interval);
  }, []);

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
              {signals.map((signal) => (
                <div key={signal.id} className="signal-item success">
                  <div className="signal-info">
                    <span className="signal-time">{signal.time}</span>
                    <span className="signal-pair">{signal.pair}</span>
                  </div>
                  <div className="signal-result">{signal.result}</div>
                </div>
              ))}
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
