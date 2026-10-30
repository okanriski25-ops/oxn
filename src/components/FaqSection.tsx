import React, { useState } from 'react';
import { FAQS_DATA, getWaUrl } from '../data/landingData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const askWaUrl = getWaUrl(
    'Halo CS OXN BUILD, saya ingin bertanya lebih lanjut mengenai sistem pengerjaan dan ketentuan garansi.'
  );

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DB63F]/10 border border-[#8DB63F]/20 text-xs font-bold text-[#6D8F2A] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E252B] tracking-tight">
            Transparansi Informasi Sebelum Anda Memulai
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Hal-hal mendasar seputar proses survey, metode pembayaran termin, dan jaminan garansi resmi OXN BUILD.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1E252B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#8DB63F]/20 text-[#8DB63F]' : 'text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-gray-600">
          <span>Punya pertanyaan spesifik tentang denah atau renovasi rumah Anda?</span>
          <a
            href={askWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#6D8F2A] hover:underline flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanyakan langsung ke CS via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
