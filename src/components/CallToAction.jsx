import { useState, useEffect } from 'react';
import './CallToAction.css';
import { Rocket, CheckCircle, Gift, AlertTriangle } from 'lucide-react';

const CallToAction = () => {
  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;
    if (step === 2 && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (step === 2 && countdown === 0) {
      setStep(3);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  const handleLinkClick = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <section id="cta" className="section cta-section">
      <div className="container">
        <div className="cta-box glass-panel">
          <div className="cta-content">
            <h2 className="cta-title">
              Pronto para transformar seu celular em uma <span className="text-gradient">máquina de lucros?</span>
            </h2>
            
            <div className="steps-wrapper">
              {/* Passo 1 - Link */}
              <div className={`step-box`}>
                <p className="step-title">PASSO 1: OBRIGATÓRIO</p>
                <a 
                  href="https://app.vesperamarket.com?ref=7639" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary btn-block btn-pulse-action"
                  onClick={handleLinkClick}
                >
                  <span className="moving-arrows">👉👉</span>
                  CLIQUE AQUI PARA CRIAR CONTA PELO LINK
                  <span className="moving-arrows">👈👈</span>
                </a>
                <p className="warning-text">⚠️ Precisa ser conta nova, criada única e exclusivamente por este link!</p>
              </div>

              {/* Passo 2 - Formulário (Bloqueado/Timer/Liberado) */}
              <div className={`step-box ${(step === 1 || step === 2) ? 'locked' : ''}`}>
                <p className="step-title">PASSO 2: SOLICITE SEU ACESSO</p>
                
                {step === 1 && (
                  <div className="locked-msg">
                    <AlertTriangle size={20} /> Clique no link acima e crie sua conta para liberar o formulário.
                  </div>
                )}

                {step === 2 && (
                  <div className="locked-msg waiting">
                    ⏱️ Aguardando você criar a conta... Liberando formulário em {countdown} segundos.
                  </div>
                )}

                <form className={`cta-form ${(step === 1 || step === 2) ? 'disabled-form' : ''}`} onSubmit={handleFormSubmit}>
                  <div className="input-group">
                    <input type="email" placeholder="O e-mail da conta que você acabou de criar" required disabled={step !== 3} />
                  </div>
                  <div className="input-group">
                    <input type="text" placeholder="Seu número do Telegram / Celular" required disabled={step !== 3} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-large btn-block cta-btn" disabled={step !== 3}>
                    Enviar dados e aguardar 2h <Rocket size={20} />
                  </button>
                </form>
              </div>
            </div>

            <p className="security-text" style={{marginTop: '25px', lineHeight: '1.5'}}>
              🔒 Atenção: O sistema bloqueará e-mails de contas que não foram criadas via link oficial.<br/>
              A validação é feita pelas próximas 2 horas. Você receberá o acesso definitivo em seguida!
            </p>
          </div>
        </div>
      </div>

      {/* MODAL DE CONFIRMAÇÃO E BÔNUS */}
      {step === 4 && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <CheckCircle className="success-icon" size={60} />
            <h2 className="modal-title">Dados Enviados com Sucesso!</h2>
            <p className="modal-desc">
              Recebemos seu e-mail e número. Nossa equipe fará a validação confirmando se sua conta foi criada pelo link oficial.
              <br/><br/><strong>Tempo de análise: Até 2 horas. Aguarde nosso contato.</strong>
            </p>

            <div className="bonus-box">
              <div className="bonus-header">
                <Gift className="bonus-icon" size={32} />
                <h3>BÔNUS VIP EXCLUSIVO LIBERADO!</h3>
              </div>
              <p className="bonus-text">
                Quer lucrar também no grupo exclusivo <strong>"Rua (Quantas Passagens?)"</strong>? <br/>
                Para ganhar esse acesso extra Imediato:
              </p>
              <ol className="bonus-list">
                <li>Faça um depósito inicial mínimo de <strong>R$ 20,00</strong> na conta Vespera que você acabou de criar.</li>
                <li>Envie o comprovante de depósito no atendimento abaixo.</li>
              </ol>
              <a href="https://t.me/suprodoviatips" target="_blank" rel="noreferrer" className="btn btn-action btn-block">
                ENVIAR COMPROVANTE (Acesso Mercado Ruas)
              </a>
            </div>
            
            <button className="close-modal-btn" onClick={() => setStep(3)}>Fechar e aguardar</button>
          </div>
        </div>
      )}
      
      <footer className="footer">
        <div className="container">
          <p>Este site não é afiliado a nenhuma plataforma de apostas específica. Aposte com responsabilidade.</p>
          <p>© {new Date().getFullYear()} RODOVIATIPS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </section>
  );
};

export default CallToAction;
