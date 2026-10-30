import React, { useEffect } from 'react';
import { Logo } from './Logo';
import { CONTACT_DATA, getWaUrl } from '../data/landingData';
import {
  X,
  MessageSquare,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  Hammer,
  FileText,
  Star,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Award,
  MapPin,
  Share2
} from 'lucide-react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultationModal: (service?: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenConsultationModal,
}) => {
  // Lock body scroll when drawer is open and support ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const waUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin berkonsultasi melalui layanan CS 24 Jam mengenai proyek hunian saya.'
  );

  const menuSections = [
    {
      title: 'Layanan & Portofolio',
      items: [
        {
          name: 'Layanan Konstruksi & Renovasi',
          href: '#layanan',
          desc: 'Renovasi menyeluruh, bangun baru, interior, dak & pipa',
          icon: Hammer,
        },
        {
          name: 'Inspirasi Desain Arsitektur',
          href: '#portofolio',
          desc: 'Visualisasi 3D, struktur kokoh & galeri konsep modern',
          icon: Compass,
        },
        {
          name: 'Standar Mutu & Alur Kerja SPK',
          href: '#alur-kerja',
          desc: '5 tahapan kerja terstruktur dengan kontrak resmi',
          icon: FileText,
        },
        {
          name: 'Transparansi Garansi Resmi',
          href: '#garansi',
          desc: 'Garansi struktur 12 bulan, bocor 6 bulan & kontrak SPK',
          icon: ShieldCheck,
        },
      ],
    },
    {
      title: 'Kredibilitas & Informasi',
      items: [
        {
          name: 'Cakupan Area Layanan & Survey',
          href: '#area-layanan',
          desc: 'Layanan survey gratis seluruh wilayah Jabodetabek',
          icon: MapPin,
        },
        {
          name: 'Ulasan & Penilaian Klien',
          href: '#testimoni',
          desc: 'Transparansi pengalaman dan rating kepuasan pemilik rumah',
          icon: Star,
        },
        {
          name: 'Tanya Jawab & Biaya (FAQ)',
          href: '#faq',
          desc: 'Informasi sistem termin pembayaran, survey, dan garansi',
          icon: HelpCircle,
        },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Dark Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container (Slide from Right) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-gray-200">
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-gray-100 bg-[#F8F9FA]/80 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Logo variant="compact" showTagline={false} className="scale-95 origin-left" />
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-200/60 transition-colors cursor-pointer"
              aria-label="Tutup menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body Content */}
          <div className="p-5 sm:p-7 space-y-7 flex-1">
            {/* Corporate Status Card */}
            <div className="bg-gradient-to-br from-[#1E252B] to-[#2B353E] rounded-2xl p-4 sm:p-5 text-white shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#8DB63F] bg-[#8DB63F]/20 px-2.5 py-1 rounded-full border border-[#8DB63F]/30">
                  <Award className="w-3 h-3" />
                  Kontraktor Bonafit & Terpercaya
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  CS 24 Jam Aktif
                </span>
              </div>
              <div className="text-base font-bold text-white mt-1">
                Build Better, Live Better
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Kami membangun kepercayaan Anda lewat pengerjaan rapi, biaya transparan, dan garansi resmi tertulis.
              </p>
            </div>

            {/* Menu Links by Section */}
            {menuSections.map((sec, idx) => (
              <div key={idx}>
                <div className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-2.5 px-1">
                  {sec.title}
                </div>
                <div className="space-y-1.5">
                  {sec.items.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F1F5F9] transition-all border border-transparent hover:border-gray-200"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#8DB63F]/15 text-[#8DB63F] flex items-center justify-center shrink-0 group-hover:bg-[#8DB63F] group-hover:text-white transition-colors mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-gray-800 group-hover:text-[#1E252B] flex items-center justify-between">
                            <span>{item.name}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#8DB63F] group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Credibility Highlights (Badges of Trust) */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                Jaminan Kualitas OXN BUILD:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DB63F] shrink-0" />
                  <span>Struktur Kokoh & Presisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8DB63F] shrink-0" />
                  <span>Garansi Resmi Tertulis (SPK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8DB63F] shrink-0" />
                  <span>Layanan CS Siaga 24 Jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8DB63F] shrink-0" />
                  <span>Survey & Konsultasi Gratis</span>
                </div>
              </div>
            </div>

            {/* Official Contact Info Box */}
            <div className="p-4 rounded-2xl border border-gray-200 bg-white space-y-2">
              <div className="text-xs font-bold text-gray-800">
                Layanan Pelanggan WhatsApp 24 Jam:
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Kontak Resmi CS:</span>
                <span className="font-extrabold text-gray-900">{CONTACT_DATA.csPhone}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Cakupan Wilayah:</span>
                <span className="font-semibold text-gray-900">Jabodetabek & Sekitarnya</span>
              </div>
            </div>
          </div>

          {/* Drawer Footer Actions (Always Sticky at Bottom) */}
          <div className="p-5 sm:p-6 border-t border-gray-200 bg-[#F8F9FA] space-y-2.5 sticky bottom-0 z-20">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat CS 24 Jam ({CONTACT_DATA.csPhone})</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenConsultationModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#1E252B] hover:bg-[#151A1F] text-white font-bold text-xs sm:text-sm transition-all active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5 text-[#8DB63F]" />
              <span>Jadwalkan Survey Lokasi Gratis</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
