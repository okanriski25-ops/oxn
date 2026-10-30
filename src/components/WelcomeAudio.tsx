import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';

export const WelcomeAudio: React.FC = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasTriggeredRef = useRef(false);

  // Play pleasant architectural chime using Web Audio API
  const playChime = () => {
    try {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Chord frequencies: C5 (523.25), E5 (659.25), G5 (783.99), C6 (1046.50)
      const notes = [523.25, 659.25, 783.99, 1046.5];
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);

        gain.gain.setValueAtTime(0, now + idx * 0.12);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.95);
      });
    } catch {
      // Ignore audio context errors gracefully
    }
  };

  // Play Indonesian welcome speech via Web Speech API
  const speakWelcome = () => {
    if (isMuted) return;

    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop any pending speech

        const utterance = new SpeechSynthesisUtterance('Selamat datang di OXN BUILD.');
        utterance.lang = 'id-ID';
        utterance.rate = 0.95; // Natural clear cadence
        utterance.pitch = 1.05; // Friendly and professional tone

        // Look for Indonesian voice if available
        const voices = window.speechSynthesis.getVoices();
        const indonesianVoice = voices.find(
          (v) => v.lang.includes('id') || v.lang.includes('ID') || v.name.toLowerCase().includes('indonesia')
        );
        if (indonesianVoice) {
          utterance.voice = indonesianVoice;
        }

        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        // Small delay so the introductory chime plays first
        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, 400);
      }
    } catch {
      // Speech synthesis fallback
      setIsPlaying(false);
    }
  };

  const triggerWelcomeSound = () => {
    if (isMuted) return;
    setIsPlaying(true);
    playChime();
    speakWelcome();
    setHasPlayed(true);
    hasTriggeredRef.current = true;
  };

  useEffect(() => {
    // Attempt auto-play on initial load
    const tryAutoplay = () => {
      if (!hasTriggeredRef.current) {
        triggerWelcomeSound();
      }
    };

    // Small delay on mount to allow DOM and audio engine readiness
    const timer = setTimeout(() => {
      tryAutoplay();
    }, 600);

    // Fallback: If browser blocks unprompted autoplay, trigger immediately on first user interaction
    const handleFirstInteraction = () => {
      if (!hasTriggeredRef.current) {
        triggerWelcomeSound();
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      cleanupListeners();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isMuted]);

  return (
    <aside
      aria-label="Kontrol audio sambutan OXN BUILD"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2 bg-[#1E252B]/90 hover:bg-[#1E252B] backdrop-blur-md text-white px-3.5 py-2 rounded-full shadow-lg border border-gray-700/70 transition-all text-xs select-none"
    >
      <button
        type="button"
        onClick={() => {
          if (isMuted) {
            setIsMuted(false);
            triggerWelcomeSound();
          } else {
            triggerWelcomeSound();
          }
        }}
        className="flex items-center gap-2 group focus:outline-none"
        title="Putar ucapan selamat datang"
      >
        <span
          className={`flex h-6 w-6 rounded-full items-center justify-center ${
            isPlaying ? 'bg-[#8DB63F] text-white animate-pulse' : 'bg-gray-700 text-gray-200 group-hover:bg-[#8DB63F]'
          } transition-colors`}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </span>
        <span className="font-semibold text-gray-200 group-hover:text-white hidden sm:inline">
          {isPlaying ? 'Memutar Sambutan...' : 'Selamat Datang di OXN BUILD'}
        </span>
      </button>

      {hasPlayed && !isPlaying && (
        <button
          type="button"
          onClick={() => triggerWelcomeSound()}
          className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/60 transition-colors"
          title="Putar Ulang Suara"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      )}
    </aside>
  );
};
