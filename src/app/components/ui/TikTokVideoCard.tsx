import React, { useState } from "react";
import { Play, RotateCcw, ExternalLink, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface TikTokVideoProps {
  videoId: string;
  account: string;
  title: string;
  stats?: string;
  thumbnailUrl: string;
  tiktokUrl?: string;
  tag?: string;
}

export const TikTokVideoCard: React.FC<TikTokVideoProps> = ({
  videoId,
  account,
  title,
  stats,
  thumbnailUrl,
  tiktokUrl,
  tag,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fallbackTiktokUrl =
    tiktokUrl || `https://www.tiktok.com/@${account.replace("@", "")}/video/${videoId}`;

  return (
    <>
      <div className="relative group w-full max-w-[300px] mx-auto">
        {/* Decorative Tape / Accent */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#F6FFB6]/90 text-[#54100F] font-mono text-[10px] uppercase tracking-wider px-3 py-0.5 rounded shadow-sm border border-[#54100F]/10 transform -rotate-1 pointer-events-none">
          {tag || "TikTok Video"}
        </div>

        {/* Smartphone Shell */}
        <div className="relative rounded-[28px] p-2 bg-[#2a0808] shadow-xl border-2 border-[#54100F]/30 hover:border-[#D93240]/60 transition-all duration-300">
          {/* Phone Screen */}
          <div className="relative w-full aspect-[9/16] rounded-[22px] overflow-hidden bg-black flex flex-col justify-between">
            {/* Top Bar Notch / Info */}
            <div className="absolute top-0 left-0 right-0 z-10 px-3 py-2 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white text-xs">
              <span className="font-mono text-[11px] text-[#F6FFB6] tracking-wide font-medium truncate max-w-[150px]">
                {account}
              </span>
              {stats && (
                <span className="bg-[#D93240] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-sm">
                  {stats}
                </span>
              )}
            </div>

            {isPlaying ? (
              <div className="relative w-full h-full flex flex-col">
                <iframe
                  src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=1&music_info=1&description=1`}
                  title={title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Control bar during inline playback */}
                <div className="absolute bottom-1 left-1 right-1 z-20 flex items-center justify-between gap-1 px-2 py-1 bg-black/85 backdrop-blur-md rounded-xl text-[11px] text-white">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="flex items-center gap-1 px-2 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-white font-mono text-[10px] transition-colors"
                    title="Cerrar reproductor"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reiniciar
                  </button>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-1 px-2 py-1 bg-[#D93240] hover:bg-[#c02835] rounded-lg text-white font-mono text-[10px] transition-colors"
                    title="Ver pantalla completa"
                  >
                    <Maximize2 className="w-3 h-3" />
                    Ampliar
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer group/thumb"
              >
                {/* Thumbnail Image */}
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 group-hover/thumb:from-black/80 transition-opacity" />

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.94 }}
                    className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#D93240] text-white shadow-2xl shadow-[#D93240]/50 border-2 border-[#F6FFB6]"
                  >
                    <div className="absolute inset-0 rounded-full bg-[#D93240] animate-ping opacity-25" />
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </motion.div>
                </div>

                {/* Bottom Content / Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10 text-white">
                  <p className="font-sans font-semibold text-xs leading-tight line-clamp-2 drop-shadow-md text-white mb-2">
                    {title}
                  </p>
                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/20">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#F6FFB6]">
                      <Play className="w-2.5 h-2.5 fill-[#F6FFB6]" />
                      Reproducir en la web
                    </span>
                    <a
                      href={fallbackTiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-white/70 hover:text-white transition-colors"
                      title="Abrir en TikTok"
                    >
                      TikTok
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Video Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-sm max-h-[90vh] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D93240]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 z-30 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors border border-white/20"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=1&music_info=1&description=1`}
                title={title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
