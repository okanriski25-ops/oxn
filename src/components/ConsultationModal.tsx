import React, { useState } from 'react';
import { CONTACT_DATA, openWhatsApp } from '../data/landingData';
import { X, MessageSquare, Send, CheckCircle2, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState(initialService || 'Renovasi Rumah');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `*FORM SURVEY & KONSULTASI - OXN BUILD*\n\n` +
      `• *Nama*: ${name || '-'}\n` +
      `• *No. HP/WA*: ${phone || '-'}\n` +
      `• *Lokasi Proyek*: ${location || '-'}\n` +
      `• *Jenis Pekerjaan*: ${service}\n` +
      `• *Catatan / Kebutuhan*: ${notes || '-'}\n\n` +
      `Mohon info jadwal survey gratis dan ketersediaan tim OXN BUILD. Terima kasih.`;

    openWhatsApp(formattedMessage);
    onClose();
  };

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        id="consultation-modal"
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-[#1E252B] text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-[#8DB63F] font-bold uppercase tracking-wider">
              Layanan Survey Gratis 100%
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold mt-0.5">
              Jadwalkan Konsultasi & Survey
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Nama Lengkap *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Pak Anton"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DB63F] text-sm text-gray-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                No. WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812xxxxxxx"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DB63F] text-sm text-gray-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Lokasi Proyek *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Contoh: Bintaro / Sentul"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DB63F] text-sm text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Jenis Layanan *
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DB63F] text-sm text-gray-900 bg-white"
            >
              <option value="Renovasi Total Rumah">Renovasi Total Rumah (Penambahan Lantai / Struktur)</option>
              <option value="Renovasi Parsial / Fasad & Atap">Renovasi Parsial / Fasad & Atap Bocor</option>
              <option value="Bangun Rumah Baru dari Nol">Bangun Rumah Baru dari Nol</option>
              <option value="Interior & Kitchen Set Custom">Interior & Kitchen Set Custom</option>
              <option value="Perbaikan Ringan (Pasang Pipa, Pompa Air & Sanitasi)">Perbaikan Ringan (Pasang Pipa Air, Pompa Booster & Sanitasi)</option>
              <option value="Perbaikan Plafon, Waterproofing & Kelistrikan">Perbaikan Plafon Rembes, Waterproofing & Kelistrikan</option>
              <option value="Renovasi Ruko / Kantor / Cafe">Renovasi Ruko / Kantor / Cafe</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Rencana / Catatan Kebutuhan
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ceritakan kebutuhan renovasi, pasang pipa/pompa, atau perbaikan rumah Anda..."
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DB63F] text-sm text-gray-900"
            />
          </div>

          {/* CS Target Information */}
          <div className="pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#8DB63F]/20 flex items-center justify-center text-[#8DB63F]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Tujuan WhatsApp CS:</div>
                  <div className="text-xs font-bold text-gray-900 font-mono">{CONTACT_DATA.csPhone}</div>
                </div>
              </div>
              <span className="text-[11px] text-emerald-600 font-bold bg-emerald-100/70 px-2.5 py-1 rounded-md">
                Online 24 Jam
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Kirim Pengajuan Survey ke WhatsApp CS</span>
              <Send className="w-3.5 h-3.5 opacity-80" />
            </button>
            <div className="text-[11px] text-center text-gray-400 mt-2 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#8DB63F]" />
              <span>Gratis tanpa biaya pendaftaran & survey</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
