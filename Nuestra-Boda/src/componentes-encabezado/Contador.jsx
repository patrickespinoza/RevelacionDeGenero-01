import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FECHA_EVENTO = new Date("2026-10-24T16:00:00-06:00");

const calcularTiempoRestante = () => {
  const diferencia = FECHA_EVENTO.getTime() - Date.now();

  if (diferencia <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
      finalizado: true,
    };
  }

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor(
      (diferencia / (1000 * 60 * 60)) % 24
    ),
    minutos: Math.floor(
      (diferencia / (1000 * 60)) % 60
    ),
    segundos: Math.floor(
      (diferencia / 1000) % 60
    ),
    finalizado: false,
  };
};

const formatearNumero = (numero) => {
  return String(numero).padStart(2, "0");
};

export default function CuentaRegresiva() {
  const [tiempo, setTiempo] = useState(calcularTiempoRestante);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setTiempo(calcularTiempoRestante());
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  const unidades = [
    {
      valor: tiempo.dias,
      etiqueta: "Días",
    },
    {
      valor: tiempo.horas,
      etiqueta: "Horas",
    },
    {
      valor: tiempo.minutos,
      etiqueta: "Min",
    },
    {
      valor: tiempo.segundos,
      etiqueta: "Seg",
    },
  ];

  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[520px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F8F3E9]
        px-4
        py-20

        sm:px-7
        sm:py-24

        md:min-h-[620px]
        md:px-10
        md:py-28
      "
    >
      {/* Textura de fondo */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-40
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 25%,
              rgba(174, 195, 206, 0.16),
              transparent 24%
            ),
            radial-gradient(
              circle at 82% 78%,
              rgba(213, 185, 182, 0.16),
              transparent 25%
            )
          `,
        }}
      />

      {/* Globo decorativo superior */}
      <motion.img
        src="/globo-aerostatico-transparente.png"
        alt=""
        initial={{
          opacity: 0,
          x: -40,
          y: 20,
        }}
        whileInView={{
          opacity: 0.48,
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
          -left-8
          top-4
          -z-10
          w-28

          sm:left-3
          sm:top-8
          sm:w-36

          md:left-[6%]
          md:w-44
        "
      />

      {/* Globo decorativo inferior */}
      <motion.img
        src="/globo-aerostatico-transparente.png"
        alt=""
        initial={{
          opacity: 0,
          x: 40,
          y: 20,
        }}
        whileInView={{
          opacity: 0.3,
          x: 0,
          y: [0, 8, 0],
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
          -bottom-8
          -right-10
          -z-10
          w-32

          sm:-bottom-12
          sm:right-0
          sm:w-40

          md:right-[5%]
          md:w-48
        "
      />

      <div className="mx-auto w-full max-w-5xl">
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
          className="mb-8 text-center sm:mb-10"
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
            Cada vez falta menos
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
            Falta muy poquito
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#D5B9B6]" />

            <span className="text-lg text-[#98A995]">♥</span>

            <span className="h-px w-12 bg-[#AEC3CE]" />
          </div>
        </motion.div>

        {/* Tarjeta del contador */}
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
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-4xl
            rounded-[2.7rem]
            border
            border-[#CBBE9F]
            bg-[#FFFDF8]/95
            px-4
            py-10
            shadow-[0_18px_50px_rgba(91,82,65,0.16)]
            backdrop-blur-sm

            sm:rounded-[3.5rem]
            sm:px-8
            sm:py-12

            md:px-12
            md:py-14
          "
        >
          {/* Borde interior */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[7px]
              rounded-[2.3rem]
              border
              border-[#E0D6BE]

              sm:inset-[9px]
              sm:rounded-[3rem]
            "
          />

          {/* Decoración superior */}
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
                h-12
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-[#CBBE9F]
                bg-[#FFFDF8]
                text-[#7D896E]
                shadow-sm
              "
            >
              <svg
                viewBox="0 0 60 28"
                className="h-7 w-14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M30 24C26 14 17 8 5 7" />
                <path d="M30 24c4-10 13-16 25-17" />
                <path d="M15 11C11 7 12 3 17 2c2 4 1 7-2 9Z" />
                <path d="M45 11c4-4 3-8-2-9-2 4-1 7 2 9Z" />
                <path d="M30 24v-9" />
              </svg>
            </div>
          </div>

          {tiempo.finalizado ? (
            <div className="relative py-5 text-center">
              <p
                className="
                  font-cursiveDancing
                  text-4xl
                  text-[#66705B]

                  sm:text-5xl
                "
              >
                ¡El gran día llegó!
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-[#8D8B79]
                "
              >
                Hoy descubriremos la sorpresa
              </p>
            </div>
          ) : (
            <div
              className="
                relative
                grid
                grid-cols-4
                items-center
              "
            >
              {unidades.map((unidad, index) => (
                <div
                  key={unidad.etiqueta}
                  className="
                    relative
                    flex
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    px-1

                    sm:px-4
                  "
                >
                  {index > 0 && (
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-16
                        w-px
                        -translate-y-1/2
                        bg-[#DDD3BC]

                        sm:h-20
                      "
                    />
                  )}

                  <motion.span
                    key={`${unidad.etiqueta}-${unidad.valor}`}
                    initial={{
                      opacity: 0.5,
                      y: -4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      font-serif
                      text-[28px]
                      font-normal
                      leading-none
                      text-[#4E5146]

                      min-[390px]:text-[34px]
                      sm:text-5xl
                      md:text-6xl
                    "
                  >
                    {formatearNumero(unidad.valor)}
                  </motion.span>

                  <span
                    className="
                      mt-3
                      max-w-full
                      truncate
                      font-serif
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-[#858473]

                      min-[390px]:text-[9px]
                      sm:text-xs
                      sm:tracking-[0.25em]
                    "
                  >
                    {unidad.etiqueta}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Decoraciones inferiores */}
          <div
            className="
              relative
              mt-8
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-12 bg-[#C7B995] sm:w-20" />

            <div className="flex items-center gap-1.5 text-[#7D896E]">
              <span className="text-xs">✦</span>
              <span className="text-sm">♥</span>
              <span className="text-xs">✦</span>
            </div>

            <span className="h-px w-12 bg-[#C7B995] sm:w-20" />
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}