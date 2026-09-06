import React, { useState } from "react";
import { motion } from "framer-motion";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxaumdoyaNbDgR_mzan0J_W0SspN93vvFfbG9kWRWOf_8KdkFbUJDlRGjl_FGpPoAoAFQ/exec";

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [confirmacion, setConfirmacion] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const seleccionarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setConfirmacion("");
    setTipoMensaje("");

    if (respuesta === "No asistiré") {
      setInvitados("0");
    } else if (invitados === "0") {
      setInvitados("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();

    if (!nombreLimpio) {
      setConfirmacion(
        "Por favor escribe tu nombre y apellido."
      );
      setTipoMensaje("error");
      return;
    }

    if (!asistencia) {
      setConfirmacion(
        "Por favor selecciona si asistirás."
      );
      setTipoMensaje("error");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setConfirmacion(
        "Indica cuántas personas asistirán."
      );
      setTipoMensaje("error");
      return;
    }

    setEnviando(true);
    setConfirmacion("");
    setTipoMensaje("");

    try {
      const parametros = new URLSearchParams();

      /*
        Esta acción hace que el Apps Script
        guarde la información en Confirmaciones.
      */
      parametros.append("accion", "confirmar");
      parametros.append("nombre", nombreLimpio);
      parametros.append("asistencia", asistencia);

      parametros.append(
        "invitados",
        asistencia === "Sí asistiré"
          ? String(Number(invitados))
          : "0"
      );

      parametros.append("mensaje", mensaje.trim());

      const respuesta = await fetch(SCRIPT_URL, {
        method: "POST",
        body: parametros,
      });

      if (!respuesta.ok) {
        throw new Error(
          "No fue posible comunicarse con el servidor."
        );
      }

      const datos = await respuesta.json();

      if (!datos.ok) {
        throw new Error(
          datos.mensaje ||
            "No fue posible guardar la confirmación."
        );
      }

      setConfirmacion(
        datos.actualizado
          ? "Tu confirmación fue actualizada correctamente."
          : "Tu confirmación fue enviada correctamente."
      );

      setTipoMensaje("exito");

      setNombre("");
      setAsistencia("");
      setInvitados("");
      setMensaje("");
    } catch (error) {
      console.error(
        "Error al enviar la confirmación:",
        error
      );

      setConfirmacion(
        "No pudimos enviar tu confirmación. Inténtalo nuevamente."
      );

      setTipoMensaje("error");
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
          opacity: 0.24,
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
          top-14
          -z-10
          w-28

          sm:left-2
          sm:w-36

          md:left-[5%]
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
        }}
        whileInView={{
          opacity: 0.22,
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
            Queremos compartirlo contigo
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
            Confirma tu asistencia
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#AEC3CE]" />
            <span className="text-base text-[#819078]">♥</span>
            <span className="h-px w-12 bg-[#D8B8B4]" />
          </div>
        </motion.div>

        {/* Tarjeta */}
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
            amount: 0.15,
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

          <div className="relative text-center">
            <p
              className="
                font-serif
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-[#8D8B79]

                sm:text-xs
              "
            >
              RSVP
            </p>

            <h3
              className="
                mt-3
                font-cursiveDancing
                text-[36px]
                text-[#5F6957]

                sm:text-5xl
              "
            >
              ¿Podremos contar contigo?
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-lg
                font-serif
                text-sm
                leading-relaxed
                text-[#77766A]

                sm:text-base
              "
            >
              Tu presencia hará que este momento sea todavía
              más especial para nuestra familia.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative mt-9 space-y-6"
          >
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="
                  mb-2
                  block
                  font-serif
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#77766A]
                "
              >
                Nombre y apellido
              </label>

              <div className="relative">
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#86907C]
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
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5 20c.7-4 3.1-6 7-6s6.3 2 7 6" />
                  </svg>
                </span>

                <input
                  id="nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    setConfirmacion("");
                    setTipoMensaje("");
                  }}
                  autoComplete="name"
                  maxLength={100}
                  disabled={enviando}
                  className="
                    min-h-[54px]
                    w-full
                    rounded-2xl
                    border
                    border-[#D8CEB7]
                    bg-[#FAF7F0]
                    py-4
                    pl-12
                    pr-4
                    font-serif
                    text-base
                    text-[#505247]
                    outline-none
                    transition
                    duration-300
                    placeholder:text-[#9A978B]
                    focus:border-[#85917A]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#85917A]/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />
              </div>
            </div>

            {/* Asistencia */}
            <fieldset>
              <legend
                className="
                  mb-3
                  block
                  w-full
                  text-center
                  font-serif
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#77766A]
                "
              >
                Selecciona tu respuesta
              </legend>

              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <motion.button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("Sí asistiré")
                  }
                  disabled={enviando}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className={`
                    relative
                    min-h-[112px]
                    overflow-hidden
                    rounded-[1.7rem]
                    border
                    px-3
                    py-5
                    transition
                    duration-300

                    sm:min-h-[125px]
                    sm:rounded-[2rem]

                    ${
                      asistencia === "Sí asistiré"
                        ? `
                          border-[#8DA183]
                          bg-[#E4ECE0]
                          text-[#596652]
                          shadow-[0_10px_25px_rgba(93,113,84,0.16)]
                        `
                        : `
                          border-[#D5DCCF]
                          bg-[#F1F5EF]
                          text-[#697363]
                          hover:border-[#9CAB94]
                          hover:bg-[#E8EFE4]
                        `
                    }

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  `}
                >
                  <span
                    className="
                      absolute
                      inset-[5px]
                      rounded-[1.4rem]
                      border
                      border-white/80

                      sm:rounded-[1.7rem]
                    "
                  />

                  <span
                    className="
                      relative
                      mx-auto
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/75
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <span
                    className="
                      relative
                      mt-3
                      block
                      font-serif
                      text-sm
                      font-medium

                      sm:text-base
                    "
                  >
                    Sí asistiré
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("No asistiré")
                  }
                  disabled={enviando}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className={`
                    relative
                    min-h-[112px]
                    overflow-hidden
                    rounded-[1.7rem]
                    border
                    px-3
                    py-5
                    transition
                    duration-300

                    sm:min-h-[125px]
                    sm:rounded-[2rem]

                    ${
                      asistencia === "No asistiré"
                        ? `
                          border-[#D0A7A3]
                          bg-[#F4E2E0]
                          text-[#936864]
                          shadow-[0_10px_25px_rgba(155,105,100,0.15)]
                        `
                        : `
                          border-[#E4D1CF]
                          bg-[#FAEFED]
                          text-[#9A7470]
                          hover:border-[#D0A7A3]
                          hover:bg-[#F5E4E2]
                        `
                    }

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  `}
                >
                  <span
                    className="
                      absolute
                      inset-[5px]
                      rounded-[1.4rem]
                      border
                      border-white/80

                      sm:rounded-[1.7rem]
                    "
                  />

                  <span
                    className="
                      relative
                      mx-auto
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/75
                    "
                  >
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
                      <path d="m7 7 10 10" />
                      <path d="M17 7 7 17" />
                    </svg>
                  </span>

                  <span
                    className="
                      relative
                      mt-3
                      block
                      font-serif
                      text-sm
                      font-medium

                      sm:text-base
                    "
                  >
                    No asistiré
                  </span>
                </motion.button>
              </div>
            </fieldset>

            {/* Número de invitados */}
            {asistencia === "Sí asistiré" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <label
                  htmlFor="invitados"
                  className="
                    mb-2
                    block
                    font-serif
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#77766A]
                  "
                >
                  Número de personas que asistirán
                </label>

                <div className="relative">
                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#86907C]
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
                      <circle cx="9" cy="8" r="3" />
                      <circle cx="17" cy="9" r="2.3" />
                      <path d="M3 20c.6-4 2.6-6 6-6s5.4 2 6 6" />
                      <path d="M14 15c3-.5 5.5 1.2 6 4.5" />
                    </svg>
                  </span>

                  <input
                    id="invitados"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="20"
                    placeholder="Ejemplo: 2"
                    value={invitados}
                    onChange={(e) => {
                      setInvitados(e.target.value);
                      setConfirmacion("");
                      setTipoMensaje("");
                    }}
                    disabled={enviando}
                    className="
                      min-h-[54px]
                      w-full
                      rounded-2xl
                      border
                      border-[#D8CEB7]
                      bg-[#FAF7F0]
                      py-4
                      pl-12
                      pr-4
                      font-serif
                      text-base
                      text-[#505247]
                      outline-none
                      transition
                      duration-300
                      placeholder:text-[#9A978B]
                      focus:border-[#85917A]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#85917A]/10
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />
                </div>
              </motion.div>
            )}

            {/* Mensaje */}
            <div>
              <label
                htmlFor="mensaje"
                className="
                  mb-2
                  block
                  font-serif
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#77766A]
                "
              >
                Mensaje para la familia
              </label>

              <textarea
                id="mensaje"
                placeholder="Escribe un mensaje especial..."
                value={mensaje}
                onChange={(e) => {
                  setMensaje(e.target.value);
                  setConfirmacion("");
                  setTipoMensaje("");
                }}
                rows={4}
                maxLength={500}
                disabled={enviando}
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-[#D8CEB7]
                  bg-[#FAF7F0]
                  px-5
                  py-4
                  font-serif
                  text-base
                  leading-relaxed
                  text-[#505247]
                  outline-none
                  transition
                  duration-300
                  placeholder:text-[#9A978B]
                  focus:border-[#85917A]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#85917A]/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              <p
                className="
                  mt-1
                  text-right
                  font-serif
                  text-[10px]
                  text-[#9A978B]
                "
              >
                {mensaje.length}/500
              </p>
            </div>

            {/* Botón de envío */}
            <motion.button
              type="submit"
              disabled={enviando}
              whileHover={
                enviando
                  ? {}
                  : {
                      scale: 1.02,
                    }
              }
              whileTap={
                enviando
                  ? {}
                  : {
                      scale: 0.98,
                    }
              }
              className="
                flex
                min-h-[54px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#65715B]
                bg-[#65715B]
                px-8
                py-4
                font-serif
                text-xs
                uppercase
                tracking-[0.18em]
                text-white
                shadow-[0_10px_25px_rgba(72,83,65,0.22)]
                transition-colors
                duration-300
                hover:bg-[#56614D]
                disabled:cursor-not-allowed
                disabled:opacity-60

                sm:text-sm
              "
            >
              {enviando ? (
                <>
                  <span
                    className="
                      h-5
                      w-5
                      animate-spin
                      rounded-full
                      border-2
                      border-white/30
                      border-t-white
                    "
                  />

                  Enviando...
                </>
              ) : (
                <>
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
                    <path d="M22 2 9 15" />
                    <path d="m22 2-7 20-4-9-9-4Z" />
                  </svg>

                  Enviar confirmación
                </>
              )}
            </motion.button>

            {/* Resultado */}
            {confirmacion && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                role="status"
                aria-live="polite"
                className={`
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-center
                  font-serif
                  text-sm
                  leading-relaxed

                  ${
                    tipoMensaje === "exito"
                      ? `
                        border-[#ADC0A5]
                        bg-[#E8F0E4]
                        text-[#596652]
                      `
                      : `
                        border-[#D7AAA5]
                        bg-[#FAEAE8]
                        text-[#955F5A]
                      `
                  }
                `}
              >
                {confirmacion}
              </motion.div>
            )}
          </form>

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
              Te esperamos
            </p>

            <span className="h-px w-10 bg-[#D8B8B4] sm:w-16" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}