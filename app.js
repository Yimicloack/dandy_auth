// REGISTRAR SERVICE WORKER

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}

// CARGAR DATOS DE LA GORRA

async function cargarGorra() {

    try {

        const params = new URLSearchParams(window.location.search);

        const id = params.get("id");

        if (!id) return;

        const response = await fetch("caps.json");

        const caps = await response.json();

        const gorra = caps[id];

        if (!gorra) {

            console.log("Gorra no encontrada");

            return;
        }

        // VIDEO

        const video = document.getElementById("backgroundVideo");

        video.src = gorra.video;

        video.load();

        video.play().catch(() => {});

        // AUDIO

        const audio = document.getElementById("bgMusic");

        if (audio && gorra.audio) {

            audio.src = gorra.audio;

            audio.load();

            audio.play().catch(() => {});
        }

        // CONTADOR

        const scanCount = document.getElementById("scanCount");

        if (scanCount) {

            scanCount.textContent = gorra.escaneos;
        }

        console.log("Gorra cargada:", gorra.nombre);

    } catch (error) {

        console.error("Error cargando caps.json:", error);
    }
}

cargarGorra();
