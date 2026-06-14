/* =========================
   CONTADOR DE ESCANEOS
========================= */

let scans = localStorage.getItem("scanCount");

if (!scans) {
    scans = 0;
}

scans++;

localStorage.setItem(
    "scanCount",
    scans
);

document.getElementById(
    "scanCount"
).textContent = scans;


/* =========================
   AUDIO
========================= */

window.addEventListener("load", () => {

    const audio =
        document.getElementById(
            "bgMusic"
        );

    if (audio) {

        audio.volume = 1;

        audio.play()

            .then(() => {

                console.log(
                    "Audio iniciado"
                );

            })

            .catch(error => {

                console.log(
                    "Autoplay bloqueado:",
                    error
                );

            });

    }

});


/* =========================
   PWA
========================= */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker

                .register("./sw.js")

                .then(() => {

                    console.log(
                        "PWA lista"
                    );

                })

                .catch(error => {

                    console.log(
                        "Error SW:",
                        error
                    );

                });

        }

    );

}