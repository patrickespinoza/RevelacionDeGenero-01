import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/*
  Reemplaza esta dirección con la URL de implementación
  de tu Google Apps Script.
*/
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxaumdoyaNbDgR_mzan0J_W0SspN93vvFfbG9kWRWOf_8KdkFbUJDlRGjl_FGpPoAoAFQ/exec";

const CLAVE_VOTO_LOCAL = "voto-revelacion-genero-2026";

const calcularPorcentajes = (nino, nina) => {
  const total = nino + nina;

  if (total === 0) {
    return {
      porcentajeNino: 0,
      porcentajeNina: 0,
      total: 0,
    };
  }

  const porcentajeNino = Math.round((nino / total) * 100);
  const porcentajeNina = 100 - porcentajeNino;

  return {
    porcentajeNino,
    porcentajeNina,
    total,
  };
};

const Encuesta = () => {
  const [resultados, setResultados] = useState({
    nino: 0,
    nina: 0,
  });

  const [votoSeleccionado, setVotoSeleccionado] =
    useState("");

  const [votoRegistrado, setVotoRegistrado] =
    useState(false);

  const [cargando, setCargando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const { porcentajeNino, porcentajeNina, total } =
    calcularPorcentajes(
      resultados.nino,
      resultados.nina
    );

  /*
    Consultar los resultados al cargar el componente.
  */
  useEffect(() => {
    const votoGuardado = localStorage.getItem(
      CLAVE_VOTO_LOCAL
    );

    if (votoGuardado === "Niño" || votoGuardado === "Niña") {
      setVotoSeleccionado(votoGuardado);
      setVotoRegistrado(true);
    }

    obtenerResultados();
  }, []);

  const obtenerResultados = async () => {
    setCargando(true);
    setError("");

    try {
      const respuesta = await fetch(
        `${SCRIPT_URL}?accion=resultados&t=${Date.now()}`
      );

      if (!respuesta.ok) {
        throw new Error("No fue posible consultar los resultados.");
      }

      const datos = await respuesta.json();

      if (!datos.ok) {
        throw new Error(
          datos.mensaje ||
            "No fue posible consultar los resultados."
        );
      }

      setResultados({
        nino: Number(datos.nino) || 0,
        nina: Number(datos.nina) || 0,
      });
    } catch (errorConsulta) {
      console.error(errorConsulta);

      setError(
        "No pudimos cargar los resultados. Inténtalo nuevamente."
      );
    } finally {
      setCargando(false);
    }
  };

  const registrarVoto = async (voto) => {
    if (enviando || votoRegistrado) return;

    setEnviando(true);
    setError("");
    setMensaje("");
    setVotoSeleccionado(voto);

    try {
      const parametros = new URLSearchParams();

      parametros.append("accion", "votar");
      parametros.append("voto", voto);

      const respuesta = await fetch(SCRIPT_URL, {
        method: "POST",
        body: parametros,
      });

      if (!respuesta.ok) {
        throw new Error("No fue posible registrar el voto.");
      }

      const datos = await respuesta.json();

      if (!datos.ok) {
        throw new Error(
          datos.mensaje ||
            "No fue posible registrar el voto."
        );
      }

      setResultados({
        nino: Number(datos.nino) || 0,
        nina: Number(datos.nina) || 0,
      });

      setVotoRegistrado(true);

      localStorage.setItem(CLAVE_VOTO_LOCAL, voto);

      setMensaje(
        voto === "Niño"
          ? "¡Tu voto por niño fue registrado!"
          : "¡Tu voto por niña fue registrado!"
      );
    } catch (errorVoto) {
      console.error(errorVoto);

      setVotoSeleccionado("");

      setError(
        "No pudimos registrar tu voto. Inténtalo nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

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
      {/* Decoración azul */}
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

      {/* Decoración rosa */}
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

      {/* Globo verde */}
      <motion.img
        src="/globo-aerostatico-transparente.png"
        alt=""
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 0.25,
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
          top-12
          -z-10
          w-28

          sm:left-2
          sm:w-36

          md:left-[5%]
          md:w-44
        "
      />

      {/* Globos azul y rosa */}
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
            Queremos conocer tu opinión
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
            ¿Cuál es tu corazonada?
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#AEC3CE]" />
            <span className="text-base text-[#819078]">♥</span>
            <span className="h-px w-12 bg-[#D8B8B4]" />
          </div>
        </motion.div>

        {/* Tarjeta de encuesta */}
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
            px-5
            pb-12
            pt-14
            text-center
            shadow-[0_18px_55px_rgba(89,79,61,0.17)]
            backdrop-blur-sm

            sm:rounded-[4rem]
            sm:px-12
            sm:pb-16
            sm:pt-16
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

          <p
            className="
              relative
              font-serif
              text-[10px]
              uppercase
              tracking-[0.32em]
              text-[#8D8B79]

              sm:text-xs
            "
          >
            Elige una opción
          </p>

          <h3
            className="
              relative
              mt-3
              font-cursiveDancing
              text-[38px]
              text-[#5F6957]

              sm:text-5xl
            "
          >
            ¿Será niño o niña?
          </h3>

          {/* Botones */}
          <div
            className="
              relative
              mt-9
              grid
              grid-cols-2
              gap-4

              sm:gap-7
            "
          >
            {/* Niño */}
            <motion.button
              type="button"
              onClick={() => registrarVoto("Niño")}
              disabled={enviando || votoRegistrado}
              whileHover={
                votoRegistrado
                  ? {}
                  : {
                      y: -4,
                      scale: 1.02,
                    }
              }
              whileTap={
                votoRegistrado
                  ? {}
                  : {
                      scale: 0.97,
                    }
              }
              className={`
                relative
                flex
                min-h-[165px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-[2rem]
                border
                px-3
                py-6
                transition
                duration-300

                sm:min-h-[210px]
                sm:rounded-[2.5rem]
                sm:px-6

                ${
                  votoSeleccionado === "Niño"
                    ? `
                      border-[#8FAFC0]
                      bg-[#DCECF3]
                      shadow-[0_12px_30px_rgba(111,151,169,0.22)]
                    `
                    : `
                      border-[#C9D7DE]
                      bg-[#EDF4F6]
                      hover:border-[#8FAFC0]
                      hover:shadow-[0_12px_30px_rgba(111,151,169,0.16)]
                    `
                }

                ${
                  votoRegistrado &&
                  votoSeleccionado !== "Niño"
                    ? "opacity-50"
                    : "opacity-100"
                }

                disabled:cursor-not-allowed
              `}
            >
              <span
                className="
                  absolute
                  inset-[5px]
                  rounded-[1.65rem]
                  border
                  border-white/80

                  sm:rounded-[2.1rem]
                "
              />

              {/* Moño azul */}
              <svg
                viewBox="0 0 88 54"
                className="
                  relative
                  h-12
                  w-20
                  text-[#82A9BB]

                  sm:h-14
                  sm:w-24
                "
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M39 22C29 7 10 4 5 14c-5 10 8 20 32 16Z" />
                <path d="M49 22C59 7 78 4 83 14c5 10-8 20-32 16Z" />
                <circle cx="44" cy="27" r="10" />
                <path d="m39 34-13 17 18-8Z" />
                <path d="m49 34 13 17-18-8Z" />
              </svg>

              <span
                className="
                  relative
                  mt-3
                  font-serif
                  text-2xl
                  text-[#547487]

                  sm:text-3xl
                "
              >
                Niño
              </span>

              <span
                className="
                  relative
                  mt-2
                  font-serif
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#7893A0]

                  sm:text-[10px]
                "
              >
                Votar
              </span>
            </motion.button>

            {/* Niña */}
            <motion.button
              type="button"
              onClick={() => registrarVoto("Niña")}
              disabled={enviando || votoRegistrado}
              whileHover={
                votoRegistrado
                  ? {}
                  : {
                      y: -4,
                      scale: 1.02,
                    }
              }
              whileTap={
                votoRegistrado
                  ? {}
                  : {
                      scale: 0.97,
                    }
              }
              className={`
                relative
                flex
                min-h-[165px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-[2rem]
                border
                px-3
                py-6
                transition
                duration-300

                sm:min-h-[210px]
                sm:rounded-[2.5rem]
                sm:px-6

                ${
                  votoSeleccionado === "Niña"
                    ? `
                      border-[#CDA5A1]
                      bg-[#F3DEDC]
                      shadow-[0_12px_30px_rgba(174,126,121,0.22)]
                    `
                    : `
                      border-[#E2CDCA]
                      bg-[#F8ECEA]
                      hover:border-[#CDA5A1]
                      hover:shadow-[0_12px_30px_rgba(174,126,121,0.16)]
                    `
                }

                ${
                  votoRegistrado &&
                  votoSeleccionado !== "Niña"
                    ? "opacity-50"
                    : "opacity-100"
                }

                disabled:cursor-not-allowed
              `}
            >
              <span
                className="
                  absolute
                  inset-[5px]
                  rounded-[1.65rem]
                  border
                  border-white/80

                  sm:rounded-[2.1rem]
                "
              />

              {/* Moño rosa */}
              <svg
                viewBox="0 0 88 54"
                className="
                  relative
                  h-12
                  w-20
                  text-[#C99591]

                  sm:h-14
                  sm:w-24
                "
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M39 22C29 7 10 4 5 14c-5 10 8 20 32 16Z" />
                <path d="M49 22C59 7 78 4 83 14c5 10-8 20-32 16Z" />
                <circle cx="44" cy="27" r="10" />
                <path d="m39 34-13 17 18-8Z" />
                <path d="m49 34 13 17-18-8Z" />
              </svg>

              <span
                className="
                  relative
                  mt-3
                  font-serif
                  text-2xl
                  text-[#9D6966]

                  sm:text-3xl
                "
              >
                Niña
              </span>

              <span
                className="
                  relative
                  mt-2
                  font-serif
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#AB817D]

                  sm:text-[10px]
                "
              >
                Votar
              </span>
            </motion.button>
          </div>

          {/* Estado de carga */}
          {cargando && (
            <p
              className="
                relative
                mt-7
                font-serif
                text-sm
                text-[#888676]
              "
            >
              Cargando resultados...
            </p>
          )}

          {/* Mensaje de envío */}
          {enviando && (
            <p
              className="
                relative
                mt-7
                font-serif
                text-sm
                text-[#66705B]
              "
            >
              Registrando tu voto...
            </p>
          )}

          {/* Mensaje de éxito */}
          {mensaje && !enviando && (
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                relative
                mt-7
                font-cursiveDancing
                text-2xl
                text-[#66705B]
              "
            >
              {mensaje}
            </motion.p>
          )}

          {/* Aviso para voto existente */}
          {votoRegistrado && !mensaje && (
            <p
              className="
                relative
                mt-7
                font-cursiveDancing
                text-2xl
                text-[#66705B]
              "
            >
              Ya registramos tu corazonada por {votoSeleccionado}.
            </p>
          )}

          {/* Error */}
          {error && (
            <div
              className="
                relative
                mx-auto
                mt-7
                max-w-lg
                rounded-2xl
                border
                border-[#D7AAA5]
                bg-[#FAEAE8]
                px-4
                py-3
                font-serif
                text-sm
                text-[#955F5A]
              "
            >
              {error}

              <button
                type="button"
                onClick={obtenerResultados}
                className="
                  ml-2
                  underline
                  underline-offset-2
                "
              >
                Reintentar
              </button>
            </div>
          )}

          {/* Resultados */}
          {!cargando && !error && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="relative mt-10"
            >
              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                  font-serif
                  text-sm
                "
              >
                <div className="text-left text-[#668594]">
                  <span className="font-semibold">
                    {porcentajeNino}%
                  </span>

                  <span className="ml-2 hidden sm:inline">
                    Niño
                  </span>
                </div>

                <div className="text-right text-[#A5736F]">
                  <span className="mr-2 hidden sm:inline">
                    Niña
                  </span>

                  <span className="font-semibold">
                    {porcentajeNina}%
                  </span>
                </div>
              </div>

              {/* Barra de porcentajes */}
              <div
                className="
                  flex
                  h-6
                  w-full
                  overflow-hidden
                  rounded-full
                  border
                  border-[#DDD3BC]
                  bg-[#EFE9DD]
                  p-1
                  shadow-inner

                  sm:h-7
                "
              >
                {total === 0 ? (
                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E7E1D5]
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-[#918E81]
                      "
                    >
                      Esperando votos
                    </span>
                  </div>
                ) : (
                  <>
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${porcentajeNino}%`,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                      }}
                      className="
                        h-full
                        bg-[#AFC9D6]
                      "
                      style={{
                        borderRadius:
                          porcentajeNina === 0
                            ? "9999px"
                            : "9999px 0 0 9999px",
                      }}
                    />

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${porcentajeNina}%`,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                      }}
                      className="
                        h-full
                        bg-[#DDBDBA]
                      "
                      style={{
                        borderRadius:
                          porcentajeNino === 0
                            ? "9999px"
                            : "0 9999px 9999px 0",
                      }}
                    />
                  </>
                )}
              </div>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  font-serif
                  text-xs
                  text-[#888676]
                "
              >
                <span>{resultados.nino} votos</span>

                <span>
                  {total} {total === 1 ? "voto" : "votos"} en total
                </span>

                <span>{resultados.nina} votos</span>
              </div>
            </motion.div>
          )}

          {/* Cierre */}
          <div
            className="
              relative
              mt-9
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#AEC3CE] sm:w-16" />

            <p
              className="
                font-cursiveDancing
                text-lg
                text-[#748068]

                sm:text-xl
              "
            >
              Dos posibilidades, un mismo amor
            </p>

            <span className="h-px w-10 bg-[#D8B8B4] sm:w-16" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Encuesta;