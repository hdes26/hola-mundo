export default function Home() {
    return `
        <div class="container">
            <div class="form-wrapper">
                <h1>Completa tus datos para obtener tu cupón</h1>
                <form id="couponForm">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />

                    <label for="correo">Correo electrónico</label>
                    <input type="email" id="correo" name="correo" required />

                    <label for="telefono">Número de teléfono</label>
                    <input type="tel" id="telefono" name="telefono" required />

                    <button type="submit" class="submit-button">Recibir mi cupón</button>
                </form>
            </div>
        </div>
    `;
}

// Eventos del formulario
export function homeEvents() {
    document.getElementById("couponForm")?.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            nombre: document.getElementById("nombre").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
        };

        console.log("Datos enviados:", formData);
        alert("Cupón solicitado con éxito");
    });
}

function loadCSS(url) {
    console.log("test");
    
    if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    }
}

// Cargar estilos globales
loadCSS("../styles/home.css");

