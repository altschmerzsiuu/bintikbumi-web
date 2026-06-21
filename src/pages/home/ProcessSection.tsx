import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import RevealWrapper from '../../components/ui/RevealWrapper';
import { BB_PROCESS } from '../../data/content';
import Step1Scene from './Step1Scene';
import Step2Scene from './Step2Scene';
import Step3Scene from './Step3Scene';

// ── Main ─────────────────────────────────────────────────────
export default function ProcessSection() {
  const { lang, t } = useLanguage();
  const [activeStep, setActiveStep] = React.useState(0);
  const [displayStep, setDisplayStep] = React.useState(0);
  const [sceneVisible, setSceneVisible] = React.useState(true);
  const [ghostVisible, setGhostVisible] = React.useState(true);

  const handleStepChange = (i: number) => {
    if (i === activeStep) return;
    setSceneVisible(false);
    setGhostVisible(false);
    setActiveStep(i);
    setTimeout(() => {
      setDisplayStep(i);
      setSceneVisible(true);
      setGhostVisible(true);
    }, 400);
  };

  return (
    <section className="bb-process-section">
      <div className="bb-process-layout">

        {/* ── LEFT PANEL ── */}
        <div className="bb-process-left">

          <RevealWrapper>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
              {t('How We Work', 'Cara Kami Bekerja')}
            </span>
            <h2 className="bb-process-headline">
              {lang === 'EN'
                ? <><span>FROM WASTE</span><br /><span>TO WORTH.</span></>
                : <><span>DARI LIMBAH</span><br /><span>MENJADI KARYA.</span></>}
            </h2>
          </RevealWrapper>

          {/* Ghost number */}
          <div
            className="bb-process-ghost"
            aria-hidden="true"
            style={{
              opacity: ghostVisible ? 1 : 0,
              transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {BB_PROCESS[activeStep].step}
          </div>

          {/* Step info */}
          <div
            className="bb-process-step-desc"
            style={{
              opacity: sceneVisible ? 1 : 0,
              transform: sceneVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.45s var(--ease-premium), transform 0.45s var(--ease-premium)',
            }}
          >
          </div>

          {/* Tabs */}
          <div className="bb-process-tabs">
            {BB_PROCESS.map((step, i) => (
              <button
                key={i}
                className={`bb-process-tab${activeStep === i ? ' active' : ''}`}
                onClick={() => handleStepChange(i)}
              >
                <span className="bb-process-tab-num">0{step.step}</span>
                <span className="bb-process-tab-title">
                  {lang === 'EN' ? step.title.EN : step.title.ID}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* ── RIGHT PANEL — the diorama ── */}
        <div className="bb-process-right">
          {displayStep === 0 ? (
            <Step1Scene
              visible={sceneVisible}
              onComplete={() => {
                // Future expansion: auto-advance or reveal more UI
              }}
            />
          ) : displayStep === 1 ? (
            <Step2Scene
              visible={sceneVisible}
              onComplete={() => handleStepChange(2)}
            />
          ) : (
            <Step3Scene visible={sceneVisible} />
          )}
        </div>

      </div>
    </section>
  );
}