import React, { useState, useEffect } from 'react';
import { TestimonialItem } from '../types';
import { getWaUrl, CONTACT_DATA } from '../data/landingData';
import { Star, MessageSquare, Plus, CheckCircle2, User, Send, X, ThumbsUp } from 'lucide-react';

const STORAGE_KEY = 'oxn_client_reviews';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('Renovasi Rumah');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setReviews(parsed);
        }
      }
    } catch {
      // Fallback gracefully if storage is restricted
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !reviewText.trim()) return;

    const dateFormatted = new Intl.DateTimeFormat('id-ID', {
      month: 'long',
      year: 'numeric',
    }).format(new Date());

    const newReview: TestimonialItem = {
      id: `rev_${Date.now()}`,
      clientName: clientName.trim(),
      roleOrProfession: 'Klien',
      location: location.trim() || 'Indonesia',
      projectType,
      rating,
      highlightText:
        reviewText.length > 50 ? `${reviewText.slice(0, 48)}...` : reviewText,
      review: reviewText.trim(),
      avatar: '',
      date: dateFormatted,
      verified: true,
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
    } catch {
      // Ignore localStorage errors
    }

    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      setIsFormOpen(false);
      setClientName('');
      setLocation('');
      setReviewText('');
      setRating(5);
    }, 2000);
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  const getRatingLabel = (stars: number) => {
    switch (stars) {
      case 5:
        return 'Sangat Puas (5/5)';
      case 4:
        return 'Puas & Rapi (4/5)';
      case 3:
        return 'Cukup Baik (3/5)';
      case 2:
        return 'Kurang Puas (2/5)';
      case 1:
        return 'Tidak Puas (1/5)';
      default:
        return '';
    }
  };

  const handleSendWaReview = () => {
    const waText = `Halo CS OXN BUILD, saya ingin memberikan ulasan klien:\nNama: ${clientName || 'Klien'}\nLayanan: ${projectType}\nRating: ${rating}/5 Bintang\nUlasan: ${reviewText}`;
    const url = getWaUrl(waText);
    window.open(url, '_blank');
  };

  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8DB63F]/15 border border-[#8DB63F]/30 text-xs font-bold text-[#6D8F2A] uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Kepuasan & Suara Pelanggan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E252B] tracking-tight">
            Penilaian & Ulasan Pelanggan OXN BUILD
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Setiap pengerjaan renovasi, bangun baru, dan interior kami jalankan dengan standar mutu tinggi, ketepatan waktu, dan kerapian maksimal demi kepuasan Anda.
          </p>

          {/* Action to Toggle Form */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
            >
              {isFormOpen ? (
                <>
                  <X className="w-4 h-4" />
                  <span>Tutup Formulir</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Beri Ulasan / Rating Bintang</span>
                </>
              )}
            </button>

            <a
              href={getWaUrl(
                'Halo CS OXN BUILD, saya ingin mengirimkan ulasan / testimoni hasil pengerjaan proyek saya.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs sm:text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#8DB63F]" />
              <span>Kirim Testimoni via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Real Metrics Bar - Only Shown If Real Reviews Exist */}
        {reviews.length > 0 && (
          <div className="mb-10 bg-[#1E252B] text-white rounded-2xl p-4 sm:p-6 max-w-xl mx-auto flex items-center justify-around border border-gray-800 shadow-md text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 flex items-center justify-center gap-1.5">
                <span>★</span>
                <span>{calculateAverageRating()}</span>
                <span className="text-sm text-gray-400 font-normal">/ 5.0</span>
              </div>
              <div className="text-xs text-gray-300 mt-0.5">Rata-rata Rating Klien</div>
            </div>
            <div className="h-8 w-px bg-gray-700" />
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8DB63F]">
                {reviews.length}
              </div>
              <div className="text-xs text-gray-300 mt-0.5">Total Ulasan Masuk</div>
            </div>
          </div>
        )}

        {/* Client Review Submission Form */}
        {isFormOpen && (
          <div className="mb-12 max-w-2xl mx-auto bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-bold text-[#1E252B]">
                  Tulis Ulasan & Rating Anda
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Bagikan pengalaman nyata Anda bersama tim OXN BUILD
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Tutup form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {successMessage ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900">
                  Terima Kasih! Ulasan Anda Berhasil Disimpan
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Ulasan Anda kini tampil langsung di daftar ulasan klien.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Nama Lengkap Anda <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8DB63F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Kota / Lokasi
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jakarta / Tangerang / Bekasi"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8DB63F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Jenis Layanan yang Dikerjakan
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8DB63F]"
                  >
                    <option value="Renovasi Rumah">Renovasi Rumah</option>
                    <option value="Bangun Baru">Bangun Baru (Konstruksi)</option>
                    <option value="Interior & Kitchen Set">Interior & Kitchen Set</option>
                    <option value="Perbaikan Ringan (Pasang Pipa / Kelistrikan)">
                      Perbaikan Ringan (Pasang Pipa, Pompa Air & Sanitasi)
                    </option>
                    <option value="Waterproofing & Perbaikan Atap">
                      Waterproofing & Perbaikan Atap Bocor
                    </option>
                  </select>
                </div>

                {/* Star Rating Interactive Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Beri Bintang Penilaian Anda <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-gray-300">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 focus:outline-none transition-transform hover:scale-110"
                          title={`Beri ${star} Bintang`}
                        >
                          <Star
                            className={`w-6 h-6 ${
                              (hoverRating || rating) >= star
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-gray-300'
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-600">
                      {getRatingLabel(hoverRating || rating)}
                    </span>
                  </div>
                </div>

                {/* Review Textarea */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Komentar & Pengalaman Anda <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Ceritakan pengalaman Anda mengenai komunikasi, ketepatan waktu, transparansi RAB, dan kerapian pengerjaan tim OXN BUILD..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8DB63F]"
                  />
                </div>

                {/* Submit & Secondary WA Options */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Publikasikan Ulasan</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-4 py-2.5 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xs transition-all"
                    >
                      Batal
                    </button>
                  </div>

                  {reviewText.trim() && (
                    <button
                      type="button"
                      onClick={handleSendWaReview}
                      className="text-xs text-[#6B8D2A] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Kirim juga langsung ke WhatsApp CS</span>
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        )}

        {/* State when waiting for first client reviews */}
        {reviews.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#F8F9FA] to-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 text-center shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-[#8DB63F]/15 text-[#8DB63F] flex items-center justify-center mx-auto mb-4 ring-8 ring-[#8DB63F]/5">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E252B] mb-2">
              Ruang Penilaian & Pengalaman Pelanggan
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg mx-auto mb-6">
              Kepuasan pelanggan adalah prioritas utama OXN BUILD — Build Better, Live Better. Kami berkomitmen memberikan pengerjaan yang presisi, material bermutu pilihan, dan estimasi biaya transparan tanpa markup siluman. Bagikan pengalaman Anda bersama kami atau konsultasikan rencana hunian Anda sekarang.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Tulis Ulasan & Beri Rating Bintang</span>
              </button>
              <a
                href={getWaUrl(
                  'Halo CS OXN BUILD, saya ingin berkonsultasi mengenai rencana renovasi/bangun rumah saya dan menanyakan promo survey gratis.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#222930] hover:bg-[#151A1F] text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#8DB63F]" />
                <span>Konsultasi CS ({CONTACT_DATA.csPhone})</span>
              </a>
            </div>
          </div>
        ) : (
          /* Real Client Reviews Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {reviews.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Header: Project type & Stars */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-bold text-[#6B8D2A] bg-[#8DB63F]/15 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.projectType}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Body Review */}
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                {/* Client Info Footer */}
                <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8DB63F]/20 text-[#6B8D2A] font-bold flex items-center justify-center text-sm">
                      {item.clientName ? item.clientName.charAt(0).toUpperCase() : <User className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                        <span>{item.clientName}</span>
                        <span title="Ulasan Klien" className="text-[#8DB63F]">
                          <CheckCircle2 className="w-4 h-4 fill-current text-white bg-[#8DB63F] rounded-full" />
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-gray-400">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Trust Action Box */}
        <div className="mt-14 text-center bg-[#F1F5F9]/70 rounded-2xl p-6 sm:p-8 border border-gray-200 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm sm:text-base font-bold text-gray-900">
              Ingin Wujudkan Rumah Impian yang Rapi, Kokoh, dan Bergaransi?
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Dapatkan estimasi biaya transparan dan jadwal survey lokasi gratis langsung bersama tim kami.
            </div>
          </div>
          <a
            href={getWaUrl(
              'Halo CS OXN BUILD, saya tertarik untuk mendiskusikan rencana pembangunan/renovasi rumah saya.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8DB63F] hover:bg-[#7CA233] text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat CS via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
