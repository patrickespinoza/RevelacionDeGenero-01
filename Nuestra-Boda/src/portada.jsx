import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Portada() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error al reproducir el audio:", error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const nuevoEstado = !isMuted;

    audioRef.current.muted = nuevoEstado;
    setIsMuted(nuevoEstado);
  };

  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        w-full
        items-end
        justify-center
        overflow-hidden
        bg-[#F8F3E9]
        px-4
        pb-8
        pt-20

        sm:px-6
        sm:pb-12

        md:min-h-screen
        md:px-10
        md:pb-14
      "
    >
      {/* Música */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* Imagen principal */}
      <motion.img
        src="/portada2.png"
        alt="Invitación para revelación de género"
        initial={{
          opacity: 0,
          scale: 1.06,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          -z-20
          h-full
          w-full
          object-cover
          object-[center_30%]
        "
      />

      {/* Capa suave para mejorar la lectura */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#F8F3E9]/60
        "
      />

      {/* Botones de música */}
      <div
        className="
          absolute
          right-4
          top-5
          z-30
          flex
          items-center
          gap-2

          sm:right-6
          sm:top-6
        "
      >
        <button
          type="button"
          onClick={handlePlayMusic}
          aria-label={
            isPlaying ? "Pausar música" : "Reproducir música"
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#A8A98E]
            bg-[#FFFDF8]/90
            text-[#66705B]
            shadow-[0_5px_18px_rgba(72,72,58,0.18)]
            backdrop-blur-sm
            transition
            duration-300
            hover:scale-105
            hover:bg-white

            sm:h-12
            sm:w-12
          "
        >
          {isPlaying ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l10-6.5-10-6.5Z" />
            </svg>
          )}
        </button>

        {isPlaying && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={
              isMuted ? "Activar sonido" : "Silenciar música"
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#A8A98E]
              bg-[#FFFDF8]/90
              text-[#66705B]
              shadow-[0_5px_18px_rgba(72,72,58,0.18)]
              backdrop-blur-sm
              transition
              duration-300
              hover:scale-105
              hover:bg-white

              sm:h-12
              sm:w-12
            "
          >
            {isMuted ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                <path d="m17 9 4 4" />
                <path d="m21 9-4 4" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M18.5 5.5a9 9 0 0 1 0 13" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Tarjeta principal */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.55,
          ease: "easeOut",
        }}
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[540px]
          rounded-[2.8rem]
          border
          border-[#C7B995]
          bg-transparent
          px-6
          py-7
          text-center
          text-[#4F5146]
          shadow-[0_15px_45px_rgba(91,82,65,0.22)]
          backdrop-blur-[2px]

          sm:rounded-[3.5rem]
          sm:px-10
          sm:py-9

          md:max-w-[650px]
          md:px-14
          md:py-10
        "
      >
        {/* Borde interior ornamental */}
        <div
          className="
            pointer-events-none
            absolute
            inset-[7px]
            rounded-[2.4rem]
            border
            border-[#DDD2B8]

            sm:inset-[9px]
            sm:rounded-[3rem]
          "
        />

        {/* Detalle superior */}
        <div className="relative mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#A8A98E]" />

          <svg
            viewBox="0 0 50 24"
            className="h-6 w-12 text-[#7D896E]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M25 21C22 12 14 7 4 6" />
            <path d="M25 21c3-9 11-14 21-15" />
            <path d="M13 9c-1-4 1-7 5-8 1 4-1 7-5 8Z" />
            <path d="M37 9c1-4-1-7-5-8-1 4 1 7 5 8Z" />
          </svg>

          <span className="h-px w-10 bg-[#A8A98E]" />
        </div>

        <p
          className="
            relative
            mb-1
            font-serif
            text-xs
            uppercase
            tracking-[0.32em]
            text-[#4B4C42]

            sm:text-sm
          "
        >
          Nuestra dulce espera
        </p>

        <h1
          className="
            relative
            font-serif
            text-[36px]
            font-medium
            leading-tight
            tracking-[0.04em]
            text-[#4B4C42]

            sm:text-5xl
            md:text-6xl
          "
        >
          ¿Niño o Niña?
        </h1>

        <div
          className="
            relative
            my-4
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-[#D5B9B6]" />

          <span
            className="
              text-lg
              text-[#98A995]
            "
            aria-hidden="true"
          >
            ♥
          </span>

          <span className="h-px w-12 bg-[#AEC3CE]" />
        </div>

        <p
          className="
            relative
            font-serif
            text-lg
            tracking-[0.22em]
            text-[#606255]

            sm:text-xl
            md:text-2xl
          "
        >
          24 · 10 · 2026
        </p>

        <p
          className="
            relative
            mt-3
            font-cursiveDancing
            text-xl
            text-[#4B4C42]

            sm:text-2xl
          "
        >
          Acompáñanos a descubrirlo
        </p>
      </motion.div>

      {/* Indicador para continuar */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: [0, 7, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 1.4,
          },
          y: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          bottom-2
          left-1/2
          z-30
          -translate-x-1/2
          text-[#7D896E]

          sm:bottom-4
        "
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}