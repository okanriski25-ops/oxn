import React, { useState } from 'react';
import { Lock, X, KeyRound, AlertCircle, CheckCircle2 } from 'lucide-react';

interface OwnerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const OwnerAuthModal: React.FC<OwnerAuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default Owner PINs: 1234 or oxn2026 or 2026
    if (pin === '1234' || pin === 'oxn2026' || pin === '2026') {
      sessionStorage.setItem('oxn_owner_auth', 'true');
      setError('');
      setPin('');
      onSuccess();
    } else {
      setError('PIN tidak cocok. Silakan gunakan PIN Pemilik (1234).');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#8DB63F]/15 text-[#8DB63F] flex items-center justify-center mb-4 mx-auto">
          <Lock className="w-6 h-6" />
        </div>

        <div className="text-center mb-6">
          <h3 className="text-lg font-extrabold text-[#1E252B]">
            Akses Khusus Pemilik
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Studio Pamflet & Materi Iklan Meta hanya dapat diakses oleh pemilik OXN BUILD.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 text-center">
              Masukkan PIN Pemilik:
            </label>
            <div className="relative">
              <input
                type="password"
                maxLength={8}
                autoFocus
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError('');
                }}
                placeholder="PIN (contoh: 1234)"
                className="w-full text-center tracking-widest text-lg font-mono font-bold py-3 px-4 rounded-xl border border-gray-300 focus:border-[#8DB63F] focus:ring-2 focus:ring-[#8DB63F]/20 outline-none transition-all"
              />
            </div>
            {error && (
              <div className="flex items-center justify-center gap-1.5 text-rose-500 text-xs mt-2 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            Buka Studio Iklan
          </button>

          <div className="text-center text-[11px] text-gray-400 pt-2 border-t border-gray-100">
            PIN Default: <strong className="text-gray-700 font-mono">1234</strong>
          </div>
        </form>
      </div>
    </div>
  );
};
