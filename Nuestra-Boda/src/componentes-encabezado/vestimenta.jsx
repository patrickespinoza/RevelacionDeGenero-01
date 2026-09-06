import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
  return (
    <section
      className="
        relative
        isolate
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F8F3E9]
        px-5
        py-20

        sm:px-8
        sm:py-24

        md:py-28
      "
    >
      {/* Decoraciones suaves del fondo */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-16
          -z-20
          h-72
          w-72
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
          bottom-10
          -z-20
          h-72
          w-72
          rounded-full
          bg-[#D8B8B4]/20
          blur-3xl
        "
      />

      {/* Globo decorativo izquierdo */}
      <motion.img
        src="/globo-aerostatico-transparente.png"
        alt=""
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 0.27,
          x: 0,
          y: [0, -8, 0],
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
          -left-12
          top-16
          -z-10
          w-28

          sm:left-2
          sm:w-36

          md:left-[5%]
          md:w-44
        "
      />

      {/* Globos decorativos derechos */}
      <motion.img
        src="/globos-azul-rosa-mono-tarjeta.png"
        alt=""
        initial={{
          opacity: 0,
          x: 40,
        }}
        whileInView={{
          opacity: 0.23,
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
          -bottom-24
          -right-16
          -z-10
          w-44

          sm:-bottom-28
          sm:right-0
          sm:w-56

          md:right-[4%]
          md:w-64
        "
      />

      <div className="mx-auto w-full max-w-4xl">
        {/* Encabezado */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-9 text-center sm:mb-12"
        >
          <p
            className="
              font-serif
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#8D8B79]

              sm:text-sm
            "
          >
            Para este día especial
          </p>

          <h2
            className="
              mt-2
              font-cursiveDancing
              text-4xl
              font-normal
              text-[#66705B]

              sm:text-5xl
              md:text-6xl
            "
          >
            Código de vestimenta
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#AEC3CE]" />
            <span className="text-base text-[#819078]">♥</span>
            <span className="h-px w-12 bg-[#D8B8B4]" />
          </div>
        </motion.div>

        {/* Tarjeta principal */}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
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
            pb-12
            pt-14
            text-center
            shadow-[0_18px_55px_rgba(89,79,61,0.17)]
            backdrop-blur-sm

            sm:rounded-[4rem]
            sm:px-12
            sm:pb-16
            sm:pt-16

            md:px-16
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
          <div
            className="
              absolute
              left-1/2
              top-0
              flex
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                h-14
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-[#C9B995]
                bg-[#FFFDF8]
                text-[#748068]
                shadow-sm
              "
            >
              <svg
                viewBox="0 0 72 34"
                className="h-8 w-16"
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
              </svg>
            </div>
          </div>

          {/* Título */}
          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.5em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.3em",
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              font-serif
              text-[10px]
              uppercase
              text-[#8D8B79]

              sm:text-xs
            "
          >
            Dress code
          </motion.p>

          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              mt-3
              font-cursiveDancing
              text-[42px]
              font-normal
              leading-tight
              text-[#5F6957]

              sm:text-5xl
              md:text-6xl
            "
          >
            Casual elegante
          </motion.h3>

          <div
            className="
              relative
              mx-auto
              mt-6
              flex
              max-w-xs
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px flex-1 bg-[#AEC3CE]" />
            <span className="text-xs text-[#819078]">✦</span>
            <span className="h-px flex-1 bg-[#D8B8B4]" />
          </div>

          {/* Ilustraciones de vestimenta */}
          <motion.div
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
              mt-9
              flex
              items-start
              justify-center
              gap-7

              sm:gap-12
            "
          >
            {/* Caballero */}
            <div className="flex flex-col items-center">
              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#CAD7DD]
                  bg-[#EDF4F6]
                  text-[#708A96]
                  shadow-[0_8px_24px_rgba(91,116,127,0.12)]

                  sm:h-32
                  sm:w-32
                "
              >
                <svg
                  viewBox="0 0 64 64"
                  className="h-14 w-14 sm:h-20 sm:w-20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M23 10 12 17 6 29l9 5 5-8v28h24V26l5 8 9-5-6-12-11-7" />
                  <path d="M23 10c1 6 4 9 9 9s8-3 9-9" />
                  <path d="M27 17v37" />
                  <path d="M37 17v37" />

                  <circle
                    cx="32"
                    cy="24"
                    r="0.8"
                    fill="currentColor"
                  />

                  <circle
                    cx="32"
                    cy="31"
                    r="0.8"
                    fill="currentColor"
                  />

                  <circle
                    cx="32"
                    cy="38"
                    r="0.8"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <p
                className="
                  mt-4
                  font-serif
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#74766B]

                  sm:text-xs
                "
              >
                Caballero
              </p>

              <p
                className="
                  mt-1
                  font-cursiveDancing
                  text-xl
                  text-[#68735E]

                  sm:text-2xl
                "
              >
                Casual elegante
              </p>
            </div>

            {/* Dama */}
            <div className="flex flex-col items-center">
              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E4CCCA]
                  bg-[#F8ECEA]
                  text-[#A77F7A]
                  shadow-[0_8px_24px_rgba(151,108,103,0.12)]

                  sm:h-32
                  sm:w-32
                "
              >
                <svg
                  viewBox="0 0 64 64"
                  className="h-14 w-14 sm:h-20 sm:w-20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M25 9c0 5 2 9 7 9s7-4 7-9" />
                  <path d="M25 9 18 25l8 5-9 25h30l-9-25 8-5-7-16" />
                  <path d="M26 30h12" />
                  <path d="M32 18v12" />
                  <path d="M23 42c6 3 12 3 18 0" />
                </svg>
              </div>

              <p
                className="
                  mt-4
                  font-serif
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#74766B]

                  sm:text-xs
                "
              >
                Dama
              </p>

              <p
                className="
                  mt-1
                  font-cursiveDancing
                  text-xl
                  text-[#A07A76]

                  sm:text-2xl
                "
              >
                Casual elegante
              </p>
            </div>
          </motion.div>

          {/* Texto explicativo */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              mx-auto
              mt-9
              max-w-lg
              font-serif
              text-sm
              leading-relaxed
              text-[#737266]

              sm:text-base
              sm:leading-loose
            "
          >
            Queremos que disfrutes este momento con comodidad.
            Te invitamos a vestir de manera casual elegante,
            preferentemente en colores claros y suaves.
          </motion.p>

          {/* Paleta sugerida */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
            viewport={{
              once: true,
            }}
            className="relative mt-8"
          >
            <p
              className="
                font-serif
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#939181]

                sm:text-[10px]
              "
            >
              Tonos sugeridos
            </p>

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
              "
            >
              <span
                className="
                  h-8
                  w-8
                  rounded-full
                  border-2
                  border-white
                  bg-[#F5EDDF]
                  shadow-md
                "
                title="Marfil"
              />

              <span
                className="
                  h-8
                  w-8
                  rounded-full
                  border-2
                  border-white
                  bg-[#D9C8AD]
                  shadow-md
                "
                title="Beige"
              />

              <span
                className="
                  h-8
                  w-8
                  rounded-full
                  border-2
                  border-white
                  bg-[#ABB8A1]
                  shadow-md
                "
                title="Verde salvia"
              />

              <span
                className="
                  h-8
                  w-8
                  rounded-full
                  border-2
                  border-white
                  bg-[#B9CFDA]
                  shadow-md
                "
                title="Azul suave"
              />

              <span
                className="
                  h-8
                  w-8
                  rounded-full
                  border-2
                  border-white
                  bg-[#DDBFBB]
                  shadow-md
                "
                title="Rosa suave"
              />
            </div>
          </motion.div>

          {/* Cierre */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.75,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              mt-8
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#AEC3CE] sm:w-12" />

            <p
              className="
                font-cursiveDancing
                text-lg
                text-[#748068]

                sm:text-xl
              "
            >
              Luce lindo y disfruta
            </p>

            <span className="h-px w-8 bg-[#D8B8B4] sm:w-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vestimenta;