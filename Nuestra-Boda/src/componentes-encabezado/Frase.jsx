import React from "react";
import { motion } from "framer-motion";

export default function FraseEspecial() {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[480px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F8F3E9]
        px-5
        py-20

        sm:min-h-[550px]
        sm:px-8
        sm:py-24

        md:min-h-[620px]
        md:py-28
      "
    >
      {/* Fondos de color muy suaves */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          -z-20
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-[#AEC3CE]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          -z-20
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-[#D8B8B4]/20
          blur-3xl
        "
      />

      {/* Globo decorativo */}
      <motion.img
        src="/globo-aerostatico-transparente.png"
        alt=""
        initial={{
          opacity: 0,
          x: -40,
          y: 25,
        }}
        whileInView={{
          opacity: 0.32,
          x: 0,
          y: [0, -9, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
          },
          x: {
            duration: 1,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          pointer-events-none
          absolute
          -left-10
          top-5
          -z-10
          w-28

          sm:left-2
          sm:top-8
          sm:w-36

          md:left-[6%]
          md:w-44
        "
      />

      {/* Globos rosa y azul */}
      <motion.img
        src="/globos-azul-rosa-mono-tarjeta.png"
        alt=""
        initial={{
          opacity: 0,
          x: 40,
          y: 25,
        }}
        whileInView={{
          opacity: 0.27,
          x: 0,
          y: [0, 9, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
          },
          x: {
            duration: 1,
          },
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-14
          -z-10
          w-40

          sm:-bottom-24
          sm:right-0
          sm:w-52

          md:right-[4%]
          md:w-60
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.95,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-3xl
          rounded-[3rem]
          border
          border-[#C9B995]
          bg-[#FFFDF8]/95
          px-6
          py-14
          text-center
          shadow-[0_18px_55px_rgba(89,79,61,0.16)]
          backdrop-blur-sm

          sm:rounded-[4rem]
          sm:px-12
          sm:py-16

          md:px-16
          md:py-20
        "
      >
        {/* Borde interior */}
        <div
          className="
            pointer-events-none
            absolute
            inset-[7px]
            rounded-[2.55rem]
            border
            border-[#E1D7C0]

            sm:inset-[9px]
            sm:rounded-[3.45rem]
          "
        />

        {/* Ornamento superior */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            mb-7
            flex
            items-center
            justify-center
            gap-3

            sm:mb-9
          "
        >
          <span
            className="
              h-px
              w-12
              bg-gradient-to-r
              from-transparent
              to-[#99A28A]

              sm:w-20
            "
          />

          <svg
            viewBox="0 0 72 34"
            className="h-8 w-16 text-[#748068] sm:h-9 sm:w-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M36 29C31 17 20 10 5 9" />
            <path d="M36 29c5-12 16-19 31-20" />

            <path d="M17 13C11 9 11 4 18 2c3 5 2 9-1 11Z" />
            <path d="M27 20c-6-1-9-5-7-10 6 1 9 5 7 10Z" />

            <path d="M55 13c6-4 6-9-1-11-3 5-2 9 1 11Z" />
            <path d="M45 20c6-1 9-5 7-10-6 1-9 5-7 10Z" />

            <path d="M36 29v-9" />
          </svg>

          <span
            className="
              h-px
              w-12
              bg-gradient-to-l
              from-transparent
              to-[#99A28A]

              sm:w-20
            "
          />
        </motion.div>

        {/* Texto pequeño */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            font-serif
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[#8B8878]

            sm:text-xs
          "
        >
          Un pequeño secreto
        </motion.p>

        {/* Frase principal */}
        <motion.blockquote
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.85,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            mx-auto
            mt-5
            max-w-2xl
            font-cursiveDancing
            text-[34px]
            font-normal
            leading-[1.35]
            text-[#5F6957]

            sm:mt-6
            sm:text-5xl
            sm:leading-[1.35]

            md:text-[56px]
          "
        >
          “La espera más dulce está a punto de revelar su secreto”
        </motion.blockquote>

        {/* Corazón central */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            type: "spring",
            stiffness: 160,
          }}
          viewport={{
            once: true,
          }}
          className="relative mt-7 sm:mt-9"
        >
          <span
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#D8CEB7]
              bg-[#F8F3E9]
              text-sm
              text-[#7B866E]
              shadow-sm
            "
          >
            ♥
          </span>
        </motion.div>

        {/* Adorno inferior */}
        <div
          className="
            relative
            mt-6
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-10 bg-[#AEC3CE] sm:w-16" />

          <span
            className="
              font-serif
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#8B8878]

              sm:text-[10px]
            "
          >
            Niño o niña
          </span>

          <span className="h-px w-10 bg-[#D8B8B4] sm:w-16" />
        </div>
      </motion.div>
    </section>
  );
}