import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: {
            value: ['#00d4ff', '#8b5cf6', '#ec4899'],
          },
          links: {
            color: '#00d4ff',
            distance: 160,
            enable: true,
            opacity: 0.08,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 60,
          },
          opacity: {
            value: 0.2,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.05,
            },
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.4 } },
            push: { quantity: 3 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
