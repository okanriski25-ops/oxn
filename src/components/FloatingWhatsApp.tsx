import React from 'react';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin berkonsultasi mengenai rencana renovasi / bangun hunian.'
  );

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Live Badge Status */}
      <div className="mb-2 hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-lg border border-gray-200">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>CS 24 Jam: <strong className="text-gray-900 font-bold">{CONTACT_DATA.csPhone}</strong> (Online)</span>
      </div>

      {/* Direct WhatsApp Action Link */}
      <a
        id="floating-wa-btn"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#8DB63F] hover:bg-[#7CA233] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 active:scale-95"
        aria-label={`Chat WhatsApp Customer Service 24 Jam ${CONTACT_DATA.csPhone}`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-6 h-6 shrink-0 fill-current text-white" />
        <span className="hidden sm:inline-block font-extrabold text-sm tracking-tight">
          CS 24 Jam WhatsApp
        </span>
      </a>
    </div>
  );
};
