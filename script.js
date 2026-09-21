/* =========================================================
   🌻 FLORES AMARILLAS
   SCRIPT COMPLETO
========================================================= */


/* =========================================================
   PERSONALIZACIÓN
   PARA CADA CLIENTE CAMBIA SOLO ESTAS DOS LÍNEAS
========================================================= */

const NOMBRE = "Para ti";

const DE_PARTE_DE = "De alguien que quiso alegrar tu día 💛";


/* =========================================================
   DEDICATORIA
========================================================= */

const MENSAJE = `Hoy no es un día cualquiera.

Hoy alguien quiso detenerse por un momento y preparar algo diferente para ti. 💛

Tal vez no sea un ramo que puedas sostener entre tus manos, pero este pequeño jardín fue creado con la intención de regalarte un momento bonito y recordarte algo que muchas veces olvidamos:

Hay personas que hacen nuestros días un poquito mejores simplemente por estar presentes.

Y quizá tú seas una de ellas. 🌻

Las flores amarillas suelen representar alegría, energía, cariño y buenos deseos. Por eso, cada una de las flores que aparecen en este jardín tiene un pequeño significado.

Una representa todos esos momentos que todavía te quedan por disfrutar.

Otra representa las metas que algún día vas a cumplir.

Otra guarda todas esas sonrisas que todavía no sabes que vas a tener.

Y algunas simplemente están aquí para recordarte que incluso los detalles más pequeños pueden convertirse en recuerdos muy bonitos.

Porque no siempre hace falta esperar una fecha importante para hacer sentir especial a alguien.

A veces basta con una canción.

Un mensaje inesperado.

Una conversación que llega justo cuando la necesitábamos.

Una flor.

O un pequeño detalle como este. 💛

Quizá hoy hayas tenido un día increíble.

Quizá haya sido un día completamente normal.

O quizá no haya sido uno de tus mejores días.

Sea como sea, espero que por unos minutos puedas olvidarte de todo lo demás y simplemente disfrutar de este pequeño jardín que llegó hasta tu pantalla.

Cada flor amarilla que ves aquí representa un deseo bonito para ti. 🌼

Que tengas muchos motivos para sonreír.

Que las cosas por las que estás esforzándote poco a poco comiencen a dar resultados.

Que encuentres personas sinceras en tu camino.

Que puedas disfrutar mucho más de los pequeños momentos.

Que nunca te falten sueños por cumplir.

Que tengas la valentía de comenzar nuevamente cuando algo no salga como esperabas.

Y, sobre todo, que nunca olvides todo lo bueno que todavía puede llegar a tu vida.

Habrá días increíbles y también días complicados.

Momentos donde todo parezca estar saliendo bien y otros donde quizá las cosas no tengan demasiado sentido.

Pero incluso después de los días más grises siempre existe la posibilidad de que vuelva a aparecer algo bonito.

Después de todo, hasta las flores necesitan pasar por días de lluvia antes de volver a florecer. 🌻

Así que si alguna vez tienes uno de esos días donde necesitas un pequeño recordatorio, recuerda este jardín.

Recuerda estas flores.

Y recuerda que siempre existe una nueva oportunidad para comenzar, aprender, sonreír y seguir adelante.

Tal vez dentro de algún tiempo este detalle sea solamente una página que viste una vez.

O quizá recuerdes la canción que estaba sonando mientras aparecían las flores.

Tal vez recuerdes alguna frase.

O simplemente recuerdes que un día alguien decidió regalarte flores amarillas de una manera un poquito diferente.

Y con eso será suficiente. 💛

Porque al final los mejores detalles no siempre son los más grandes ni los más costosos.

Muchas veces son aquellos que aparecen inesperadamente y consiguen regalarnos una sonrisa.

Por eso hoy no necesitas hacer absolutamente nada.

Solo mira las flores.

Escucha la música.

Disfruta este pequeño momento.

Y guarda todos los buenos deseos que vienen junto con este jardín. ✨

Que tengas días llenos de tranquilidad.

Momentos llenos de risas.

Personas que sepan valorar tu presencia.

Sueños que te emocionen.

Historias bonitas que algún día puedas contar.

Y muchísimas razones para seguir creciendo y floreciendo.

Porque todavía quedan muchos lugares por conocer, personas por encontrar, canciones por escuchar, momentos por vivir y recuerdos por crear.

Y quién sabe...

Quizá algunos de los mejores días de tu vida todavía ni siquiera han ocurrido. 💛

Así que sigue adelante.

Sigue soñando.

Sigue aprendiendo.

Sigue disfrutando de esas pequeñas cosas que hacen diferente cada día.

Y nunca pierdas esa parte de ti que hace que alguien haya pensado:

"Hoy quiero tener un detalle bonito con esta persona."

Este pequeño jardín llegó hasta ti por una razón.

Hoy todas estas flores son para ti. 🌻🌼

No necesitan agua.

No se van a marchitar.

Y podrás volver a ellas cada vez que quieras recordar este momento.

Así que disfruta tu canción, mira cómo florece este pequeño jardín y quédate por un instante con todo lo bonito que representa.

Que la vida te regale muchas razones para sonreír.

Que tus próximos capítulos estén llenos de buenos momentos.

Y que, sin importar dónde estés o lo que estés viviendo ahora mismo, siempre encuentres una razón para volver a florecer.

Feliz día de las flores amarillas. 💛🌻

Este pequeño jardín es para ti.

Disfrútalo. ✨`;


/* =========================================================
   ELEMENTOS DEL HTML
========================================================= */

const inicio = document.getElementById("inicio");
const btnAbrir = document.getElementById("btnAbrir");

const carta = document.getElementById("carta");
const nombrePersona = document.getElementById("nombrePersona");
const textoCarta = document.getElementById("textoCarta");
const firma = document.getElementById("firma");

const jardin = document.getElementById("jardin");
const campoFlores = document.getElementById("campoFlores");

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
const btnRepetir = document.getElementById("btnRepetir");

const perrito = document.getElementById("perrito");
const mensajeInferior = document.getElementById("mensajeInferior");

const estrellas = document.getElementById("estrellas");
const nubes = document.getElementById("nubes");
const luciernagas = document.getElementById("luciernagas");
const mariposas = document.getElementById("mariposas");
const petalos = document.getElementById("petalos");


/* =========================================================
   NOMBRE Y FIRMA
========================================================= */

nombrePersona.textContent = `${NOMBRE} 🌻`;

firma.innerHTML = `
    Feliz día de las flores amarillas 🌼✨
    <br><br>

    Espero que este pequeño detalle
    haya conseguido sacarte una sonrisa.

    <br><br>

    Con mucho cariño,
    <br>

    <strong>${DE_PARTE_DE}</strong>

    <br><br>

    🌻 💛 🌻
`;


/* =========================================================
   VARIABLES
========================================================= */

let regaloAbierto = false;
let escribiendo = false;
let intervaloParticulas = null;
let intervaloBrillos = null;


/* =========================================================
   FUNCIÓN ALEATORIA
========================================================= */

function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}


/* =========================================================
   ⭐ ESTRELLAS
========================================================= */

function crearEstrellas() {

    estrellas.innerHTML = "";

    for (let i = 0; i < 150; i++) {

        const estrella = document.createElement("div");

        estrella.className = "estrella";

        estrella.style.left = aleatorio(0, 100) + "%";
        estrella.style.top = aleatorio(0, 78) + "%";

        const tamano = aleatorio(1, 4);

        estrella.style.width = tamano + "px";
        estrella.style.height = tamano + "px";

        estrella.style.animationDelay =
            aleatorio(0, 4) + "s";

        estrella.style.animationDuration =
            aleatorio(1.5, 4) + "s";

        estrellas.appendChild(estrella);
    }
}


/* =========================================================
   ☁️ NUBES
========================================================= */

function crearNubes() {

    nubes.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        const nube = document.createElement("div");

        nube.className = "nube";

        nube.style.top = aleatorio(8, 55) + "%";
        nube.style.left = aleatorio(-40, 20) + "%";

        nube.style.opacity = aleatorio(0.25, 0.7);

        nube.style.scale = aleatorio(0.6, 1.5);

        nube.style.animationDuration =
            aleatorio(35, 70) + "s";

        nube.style.animationDelay =
            "-" + aleatorio(0, 50) + "s";

        nubes.appendChild(nube);
    }
}


/* =========================================================
   🌱 CREAR TALLO
========================================================= */

function crearTallo(x, altura, escala, retraso) {

    const tallo = document.createElement("div");

    tallo.className = "tallo";

    tallo.style.left = x + "%";

    tallo.style.setProperty(
        "--altura",
        altura + "px"
    );

    tallo.style.transform =
        `scale(${escala})`;

    tallo.style.animationDelay =
        retraso + "s";


    /* HOJA IZQUIERDA */

    const hojaIzquierda =
        document.createElement("div");

    hojaIzquierda.className =
        "hoja izq";

    hojaIzquierda.style.bottom =
        aleatorio(30, 45) + "%";

    hojaIzquierda.style.animationDelay =
        (retraso + 1.5) + "s";


    /* HOJA DERECHA */

    const hojaDerecha =
        document.createElement("div");

    hojaDerecha.className =
        "hoja der";

    hojaDerecha.style.bottom =
        aleatorio(52, 68) + "%";

    hojaDerecha.style.animationDelay =
        (retraso + 1.8) + "s";


    tallo.appendChild(hojaIzquierda);
    tallo.appendChild(hojaDerecha);

    jardin.appendChild(tallo);

    return tallo;
}


/* =========================================================
   PREPARAR FLOR
========================================================= */

function prepararFlor(flor, retraso) {

    flor.style.animationDelay =
        (retraso + 2.35) + "s";

    flor.style.animationDuration =
        aleatorio(1, 1.5) + "s";
}


/* =========================================================
   🌻 GIRASOL
========================================================= */

function crearGirasol(x, altura, escala, retraso) {

    const tallo =
        crearTallo(x, altura, escala, retraso);

    const flor =
        document.createElement("div");

    flor.className = "girasol";

    prepararFlor(flor, retraso);


    for (let i = 0; i < 18; i++) {

        const petalo =
            document.createElement("div");

        petalo.className =
            "petalo-girasol";

        petalo.style.transform =
            `rotate(${i * 20}deg) translateY(-4px)`;

        flor.appendChild(petalo);
    }


    const centro =
        document.createElement("div");

    centro.className =
        "centro-girasol";

    flor.appendChild(centro);

    tallo.appendChild(flor);
}


/* =========================================================
   🌼 MARGARITA
========================================================= */

function crearMargarita(x, altura, escala, retraso) {

    const tallo =
        crearTallo(x, altura, escala, retraso);

    const flor =
        document.createElement("div");

    flor.className = "margarita";

    prepararFlor(flor, retraso);


    for (let i = 0; i < 14; i++) {

        const petalo =
            document.createElement("div");

        petalo.className =
            "petalo-margarita";

        petalo.style.transform =
            `rotate(${i * (360 / 14)}deg)`;

        flor.appendChild(petalo);
    }


    const centro =
        document.createElement("div");

    centro.className =
        "centro-margarita";

    flor.appendChild(centro);

    tallo.appendChild(flor);
}


/* =========================================================
   🌷 TULIPÁN
========================================================= */

function crearTulipan(x, altura, escala, retraso) {

    const tallo =
        crearTallo(x, altura, escala, retraso);

    const flor =
        document.createElement("div");

    flor.className = "tulipan";

    prepararFlor(flor, retraso);


    for (let i = 0; i < 3; i++) {

        const petalo =
            document.createElement("span");

        flor.appendChild(petalo);
    }


    tallo.appendChild(flor);
}


/* =========================================================
   🌹 ROSA AMARILLA
========================================================= */

function crearRosa(x, altura, escala, retraso) {

    const tallo =
        crearTallo(x, altura, escala, retraso);

    const flor =
        document.createElement("div");

    flor.className = "rosa";

    prepararFlor(flor, retraso);


    for (let i = 0; i < 5; i++) {

        const petalo =
            document.createElement("span");

        flor.appendChild(petalo);
    }


    tallo.appendChild(flor);
}


/* =========================================================
   🌼 LIRIO
========================================================= */

function crearLirio(x, altura, escala, retraso) {

    const tallo =
        crearTallo(x, altura, escala, retraso);

    const flor =
        document.createElement("div");

    flor.className = "lirio";

    prepararFlor(flor, retraso);


    for (let i = 0; i < 6; i++) {

        const petalo =
            document.createElement("div");

        petalo.className =
            "petalo-lirio";

        petalo.style.transform =
            `rotate(${i * 60}deg)`;

        flor.appendChild(petalo);
    }


    const centro =
        document.createElement("div");

    centro.className =
        "centro-lirio";

    flor.appendChild(centro);

    tallo.appendChild(flor);
}


/* =========================================================
   🌼 FLOR SILVESTRE
========================================================= */

function crearSilvestre(x, altura, escala, retraso) {

    const tallo =
        crearTallo(x, altura, escala, retraso);

    const flor =
        document.createElement("div");

    flor.className = "silvestre";

    prepararFlor(flor, retraso);


    for (let i = 0; i < 10; i++) {

        const petalo =
            document.createElement("div");

        petalo.className =
            "petalo-silvestre";

        petalo.style.transform =
            `rotate(${i * 36}deg)`;

        flor.appendChild(petalo);
    }


    const centro =
        document.createElement("div");

    centro.className =
        "centro-silvestre";

    flor.appendChild(centro);

    tallo.appendChild(flor);
}


/* =========================================================
   🌻 JARDÍN COMPLETO
========================================================= */

function crearJardin() {

    jardin.innerHTML = "";
    campoFlores.innerHTML = "";


    /* IZQUIERDA */

    crearMargarita(2, 135, 0.50, 0.10);
    crearLirio(5, 170, 0.60, 0.20);
    crearGirasol(8, 230, 0.70, 0.30);
    crearRosa(11, 175, 0.65, 0.40);
    crearSilvestre(14, 150, 0.60, 0.50);
    crearTulipan(17, 210, 0.70, 0.60);

    crearMargarita(20, 185, 0.70, 0.70);
    crearLirio(23, 220, 0.75, 0.80);
    crearGirasol(26, 295, 0.88, 0.90);
    crearRosa(29, 220, 0.78, 1.00);
    crearSilvestre(32, 190, 0.72, 1.10);
    crearTulipan(35, 255, 0.82, 1.20);


    /* CENTRO */

    crearMargarita(38, 205, 0.78, 1.30);
    crearLirio(41, 245, 0.82, 1.40);
    crearGirasol(44, 330, 0.98, 1.50);
    crearRosa(47, 265, 0.88, 1.60);

    crearMargarita(50, 230, 0.80, 1.70);
    crearGirasol(53, 370, 1.08, 1.80);
    crearLirio(56, 275, 0.88, 1.90);
    crearTulipan(59, 245, 0.84, 2.00);


    /* DERECHA */

    crearSilvestre(62, 205, 0.75, 1.90);
    crearMargarita(65, 220, 0.80, 1.80);
    crearRosa(68, 260, 0.85, 1.70);
    crearLirio(71, 225, 0.80, 1.60);

    crearGirasol(74, 315, 0.90, 1.50);
    crearTulipan(77, 225, 0.78, 1.40);
    crearSilvestre(80, 180, 0.70, 1.30);
    crearMargarita(83, 190, 0.70, 1.20);
    crearRosa(86, 205, 0.70, 1.10);
    crearLirio(89, 180, 0.64, 1.00);
    crearGirasol(92, 260, 0.73, 0.90);
    crearMargarita(95, 155, 0.58, 0.80);
    crearTulipan(98, 200, 0.62, 0.70);


    /* FLORES PEQUEÑAS */

    for (let i = 0; i < 110; i++) {

        const miniFlor =
            document.createElement("div");

        miniFlor.className =
            "mini-flor";

        miniFlor.style.left =
            aleatorio(0, 100) + "%";

        miniFlor.style.bottom =
            aleatorio(5, 125) + "px";

        miniFlor.style.scale =
            aleatorio(0.35, 1);

        miniFlor.style.animationDelay =
            aleatorio(2.5, 6) + "s";

        campoFlores.appendChild(miniFlor);
    }
}


/* =========================================================
   ✨ LUCIÉRNAGAS
========================================================= */

function crearLuciernagas() {

    luciernagas.innerHTML = "";

    for (let i = 0; i < 38; i++) {

        const luz =
            document.createElement("div");

        luz.className =
            "luciernaga";

        luz.style.left =
            aleatorio(0, 100) + "%";

        luz.style.bottom =
            aleatorio(5, 58) + "%";

        luz.style.animationDelay =
            aleatorio(0, 5) + "s";

        luz.style.animationDuration =
            aleatorio(3, 7) + "s";

        luciernagas.appendChild(luz);
    }
}


/* =========================================================
   🦋 MARIPOSAS
========================================================= */

function crearMariposas() {

    mariposas.innerHTML = "";

    for (let i = 0; i < 8; i++) {

        const mariposa =
            document.createElement("div");

        mariposa.className =
            "mariposa";

        mariposa.textContent =
            "🦋";

        mariposa.style.left =
            aleatorio(0, 82) + "%";

        mariposa.style.bottom =
            aleatorio(100, 340) + "px";

        mariposa.style.fontSize =
            aleatorio(15, 27) + "px";

        mariposa.style.animationDelay =
            aleatorio(0, 5) + "s";

        mariposa.style.animationDuration =
            aleatorio(6, 11) + "s";

        mariposas.appendChild(mariposa);
    }
}


/* =========================================================
   🌼 PÉTALOS CAYENDO
========================================================= */

function crearPetalos() {

    petalos.innerHTML = "";

    for (let i = 0; i < 48; i++) {

        const petalo =
            document.createElement("div");

        petalo.className =
            "petalo-caida";

        petalo.style.left =
            aleatorio(0, 100) + "%";

        petalo.style.animationDuration =
            aleatorio(7, 14) + "s";

        petalo.style.animationDelay =
            aleatorio(0, 12) + "s";

        petalo.style.scale =
            aleatorio(0.5, 1.2);

        petalos.appendChild(petalo);
    }
}


/* =========================================================
   💛 PARTÍCULAS FLOTANTES
========================================================= */

function iniciarParticulasEspeciales() {

    const opciones = [
        "💛",
        "✨",
        "🌻",
        "🌼"
    ];

    intervaloParticulas = setInterval(() => {

        const elemento =
            document.createElement("div");

        elemento.textContent =
            opciones[
                Math.floor(
                    Math.random() *
                    opciones.length
                )
            ];

        elemento.style.position =
            "fixed";

        elemento.style.left =
            aleatorio(5, 95) + "%";

        elemento.style.bottom =
            "-40px";

        elemento.style.zIndex =
            "70";

        elemento.style.pointerEvents =
            "none";

        elemento.style.fontSize =
            aleatorio(13, 24) + "px";

        const duracion =
            aleatorio(5500, 8500);

        document.body.appendChild(elemento);


        elemento.animate(
            [
                {
                    opacity: 0,
                    transform:
                        "translateY(0) scale(.5)"
                },

                {
                    opacity: 0.9,
                    offset: 0.15
                },

                {
                    opacity: 0.7,
                    offset: 0.75
                },

                {
                    opacity: 0,
                    transform:
                        `translateY(-110vh)
                         translateX(${aleatorio(-80, 80)}px)
                         rotate(${aleatorio(-40, 40)}deg)
                         scale(1.4)`
                }
            ],
            {
                duration: duracion,
                easing: "linear"
            }
        );


        setTimeout(() => {
            elemento.remove();
        }, duracion);

    }, 700);
}


/* =========================================================
   ✨ DESTELLOS
========================================================= */

function iniciarDestellos() {

    intervaloBrillos =
        setInterval(() => {

            const brillo =
                document.createElement("div");

            brillo.textContent = "✦";

            brillo.style.position =
                "fixed";

            brillo.style.left =
                aleatorio(5, 95) + "%";

            brillo.style.top =
                aleatorio(10, 80) + "%";

            brillo.style.zIndex =
                "60";

            brillo.style.pointerEvents =
                "none";

            brillo.style.color =
                "#fff5a0";

            brillo.style.fontSize =
                aleatorio(10, 22) + "px";

            brillo.style.textShadow =
                "0 0 12px #ffd900";

            document.body.appendChild(brillo);


            brillo.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "scale(0) rotate(0deg)"
                    },

                    {
                        opacity: 1,
                        transform:
                            "scale(1.5) rotate(90deg)"
                    },

                    {
                        opacity: 0,
                        transform:
                            "scale(0) rotate(180deg)"
                    }
                ],
                {
                    duration: 1800,
                    easing: "ease-in-out"
                }
            );


            setTimeout(() => {
                brillo.remove();
            }, 1800);

        }, 900);
}


/* =========================================================
   ✍️ ESCRIBIR CARTA
========================================================= */

function escribirCarta() {

    if (escribiendo) {
        return;
    }

    escribiendo = true;

    let posicion = 0;

    textoCarta.innerHTML = "";

    firma.classList.remove("visible");


    function escribir() {

        if (posicion < MENSAJE.length) {

            const caracter =
                MENSAJE.charAt(posicion);


            if (caracter === "\n") {

                textoCarta.innerHTML += "<br>";

            } else {

                textoCarta.append(caracter);
            }


            posicion++;


            /*
               VELOCIDAD DEL TEXTO

               8 = rápido
               15 = normal
               30 = lento
            */

            setTimeout(escribir, 8);

        } else {

            escribiendo = false;

            firma.classList.add("visible");
        }
    }


    escribir();
}


/* =========================================================
   🎵 MÚSICA
========================================================= */

function reproducirMusica() {

    musica.volume = 0.40;

    musica.play()
        .then(() => {

            btnMusica.textContent =
                "🔊";

        })
        .catch((error) => {

            console.log(
                "El navegador bloqueó el audio:",
                error
            );

            btnMusica.textContent =
                "🔇";
        });
}


/* =========================================================
   🌻 ABRIR REGALO
========================================================= */

function abrirRegalo() {

    if (regaloAbierto) {
        return;
    }

    regaloAbierto = true;


    /* OCULTAR PORTADA */

    inicio.classList.add("oculto");


    /* CREAR ESCENA */

    crearJardin();
    crearLuciernagas();
    crearMariposas();
    crearPetalos();


    /* MÚSICA */

    reproducirMusica();


    /* BOTONES */

    btnMusica.style.display = "block";
    btnRepetir.style.display = "block";


    /* PERRITO */

    setTimeout(() => {

        perrito.classList.add("mostrar");

    }, 2200);


    /* CARTA */

    setTimeout(() => {

        carta.classList.add("mostrar");

    }, 1800);


    /* DEDICATORIA */

    setTimeout(() => {

        escribirCarta();

    }, 2600);


    /* MENSAJE DE ABAJO */

    setTimeout(() => {

        mensajeInferior.classList.add(
            "mostrar"
        );

    }, 4000);


    /* EFECTOS */

    setTimeout(() => {

        iniciarParticulasEspeciales();
        iniciarDestellos();

    }, 2800);
}


/* =========================================================
   BOTÓN ABRIR
========================================================= */

btnAbrir.addEventListener(
    "click",
    abrirRegalo
);


/* =========================================================
   🔊 BOTÓN DE MÚSICA
========================================================= */

btnMusica.addEventListener(
    "click",
    () => {

        if (musica.paused) {

            musica.play();

            btnMusica.textContent =
                "🔊";

        } else {

            musica.pause();

            btnMusica.textContent =
                "🔇";
        }
    }
);


/* =========================================================
   ↻ REPETIR
========================================================= */

btnRepetir.addEventListener(
    "click",
    () => {

        window.location.reload();

    }
);


/* =========================================================
   ✨ EFECTO DEL MOUSE
========================================================= */

document.addEventListener(
    "mousemove",
    (evento) => {

        if (!regaloAbierto) {
            return;
        }


        if (Math.random() > 0.94) {

            const brillo =
                document.createElement("span");

            brillo.textContent =
                Math.random() > 0.5
                    ? "✨"
                    : "💛";

            brillo.style.position =
                "fixed";

            brillo.style.left =
                evento.clientX + "px";

            brillo.style.top =
                evento.clientY + "px";

            brillo.style.zIndex =
                "1000";

            brillo.style.pointerEvents =
                "none";

            brillo.style.fontSize =
                aleatorio(8, 15) + "px";

            document.body.appendChild(brillo);


            brillo.animate(
                [
                    {
                        opacity: 0.8,
                        transform:
                            "translate(-50%, -50%) scale(.5)"
                    },

                    {
                        opacity: 0,
                        transform:
                            "translate(-50%, -35px) scale(1.3)"
                    }
                ],
                {
                    duration: 1000
                }
            );


            setTimeout(() => {
                brillo.remove();
            }, 1000);
        }
    }
);


/* =========================================================
   🌌 INICIAR CIELO
========================================================= */

crearEstrellas();
crearNubes();