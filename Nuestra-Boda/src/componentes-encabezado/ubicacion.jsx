import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  dia = "Sábado",
  fecha = "24",
  mesAnio = "Octubre 2026",
  hora = "4:00 PM",
  lugar = "Jardín Magnolia",
  direccion = "Agrega aquí la dirección completa del evento",
  ubicacion = "https://maps.google.com",
  titulo = "Acompáñanos a descubrirlo",
}) => {
  return (
    <section
      className="
        relative
        isolate
        flex
        w-full
        flex-col
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
      {/* Colores decorativos del fondo */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
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
          y: 25,
        }}
        whileInView={{
          opacity: 0.32,
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
          -left-10
          top-20
          -z-10
          w-28

          sm:left-2
          sm:top-24
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
          opacity: 0.25,
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
          -right-14
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
        {/* Título superior */}
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
              tracking-[0.38em]
              text-[#8D8B79]

              sm:text-sm
            "
          >
            Guarda la fecha
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
            Nuestra celebración
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
            delay: 0.15,
            ease: "easeOut",
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
            px-5
            pb-12
            pt-14
            text-center
            shadow-[0_18px_55px_rgba(89,79,61,0.17)]
            backdrop-blur-sm

            sm:rounded-[4rem]
            sm:px-10
            sm:pb-14
            sm:pt-16

            md:px-16
          "
        >
          {/* Borde interior ornamental */}
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

                <path d="M36 29v-9" />
              </svg>
            </div>
          </div>

          {/* Título de la tarjeta */}
          <motion.h3
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
              mx-auto
              max-w-xl
              font-cursiveDancing
              text-[34px]
              leading-tight
              text-[#5F6957]

              sm:text-5xl
            "
          >
            {titulo}
          </motion.h3>

          <div
            className="
              relative
              mx-auto
              mt-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-12 bg-[#C9B995] sm:w-20" />
            <span className="text-sm text-[#819078]">✦</span>
            <span className="h-px w-12 bg-[#C9B995] sm:w-20" />
          </div>

          {/* Fecha */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.4,
            }}
            viewport={{
              once: true,
            }}
            className="relative mt-8"
          >
            <p
              className="
                font-serif
                text-xs
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#888676]

                sm:text-sm
              "
            >
              {dia}
            </p>

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-4

                sm:gap-7
              "
            >
              <span
                className="
                  h-px
                  w-14
                  bg-gradient-to-r
                  from-transparent
                  to-[#AEC3CE]

                  sm:w-24
                "
              />

              <span
                className="
                  font-serif
                  text-6xl
                  font-normal
                  leading-none
                  text-[#4F5146]

                  sm:text-7xl
                  md:text-8xl
                "
              >
                {fecha}
              </span>

              <span
                className="
                  h-px
                  w-14
                  bg-gradient-to-l
                  from-transparent
                  to-[#D8B8B4]

                  sm:w-24
                "
              />
            </div>

            <p
              className="
                mt-3
                font-serif
                text-lg
                uppercase
                tracking-[0.2em]
                text-[#78816E]

                sm:text-2xl
              "
            >
              {mesAnio}
            </p>
          </motion.div>

          {/* Información del evento */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              mx-auto
              mt-9
              grid
              max-w-xl
              gap-5
              border-y
              border-[#DDD3BC]
              py-7

              sm:grid-cols-2
              sm:gap-0
            "
          >
            {/* Hora */}
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                px-4

                sm:border-r
                sm:border-[#DDD3BC]
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E8EEE4]
                  text-[#65715B]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7.5V12l3 2" />
                </svg>
              </div>

              <p
                className="
                  font-serif
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#929080]
                "
              >
                Hora
              </p>

              <p
                className="
                  mt-1
                  font-serif
                  text-2xl
                  text-[#4F5146]
                "
              >
                {hora}
              </p>
            </div>

            {/* Lugar */}
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                border-t
                border-[#DDD3BC]
                px-4
                pt-5

                sm:border-t-0
                sm:pt-0
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F2E4E2]
                  text-[#A47D79]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <p
                className="
                  font-serif
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#929080]
                "
              >
                Lugar
              </p>

              <p
                className="
                  mt-1
                  font-cursiveDancing
                  text-2xl
                  text-[#4F5146]

                  sm:text-3xl
                "
              >
                {lugar}
              </p>
            </div>
          </motion.div>

          {/* Dirección */}
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
              duration: 0.7,
              delay: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="relative mx-auto mt-7 max-w-lg"
          >
            <p
              className="
                font-serif
                text-sm
                leading-relaxed
                text-[#77766A]

                sm:text-base
              "
            >
              {direccion}
            </p>
          </motion.div>

          {/* Botón de ubicación */}
          <motion.a
            href={ubicacion}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              mt-8
              inline-flex
              min-h-[48px]
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#65715B]
              bg-[#65715B]
              px-8
              py-3
              font-serif
              text-xs
              uppercase
              tracking-[0.18em]
              text-white
              shadow-[0_8px_20px_rgba(72,83,65,0.22)]
              transition-colors
              duration-300
              hover:bg-[#56614D]

              sm:px-10
              sm:text-sm
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>

            Ver ubicación
          </motion.a>

          {/* Mensaje inferior */}
          <p
            className="
              relative
              mt-6
              font-cursiveDancing
              text-xl
              text-[#78816E]

              sm:text-2xl
            "
          >
            Te esperamos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Celebracion;