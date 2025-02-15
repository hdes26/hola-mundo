export default function Home() {
    return `
        <style>
            /* ==== Reset básico ==== */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            html, body {
                height: 100%;
                font-family: Arial, sans-serif;
            }

            /* Fondo de pantalla completa */
            body {
                display: flex;
                align-items: center;
                justify-content: center;
                background: url("https://i.imgur.com/K4ffkXt.jpeg") no-repeat center center / cover;
            }

            .container {
                min-height: 80vh;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                text-align: center;
            }

            .form-wrapper {
                font-size: 18px;
                background: rgba(255, 255, 255, 0.85);
                border-radius: 20px;
                padding: 50px 40px;
                max-width: 700px;
                width: 100%;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }

            .form-wrapper h1 {
                margin-bottom: 20px;
                color: #333;
                font-weight: bold;
            }

            label {
                display: block;
                margin-bottom: 8px;
                font-weight: bold;
                color: #333;
                text-align: left;
            }

            input {
                width: 100%;
                margin-bottom: 16px;
                padding: 14px;
                border-radius: 5px;
                border: 1px solid #ccc;
                font-size: 16px;
            }

            .submit-button {
                background: linear-gradient(45deg, #f70000, #ff0000);
                border: none;
                border-radius: 25px;
                color: #fff;
                cursor: pointer;
                display: block;
                font-size: 18px;
                font-weight: bold;
                margin-top: 10px;
                padding: 15px 30px;
                text-align: center;
                text-decoration: none;
                transition: transform 0.3s, box-shadow 0.3s;
                width: 100%;
            }

            .submit-button:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 20px rgba(142, 68, 173, 0.5);
            }
        </style>

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

        <script>
            document.addEventListener("DOMContentLoaded", function () {
                const form = document.getElementById("couponForm");

                form.onsubmit = function (e) {
                    e.preventDefault(); // Evita que la página se recargue

                    const formData = {
                        nombre: document.getElementById("nombre").value,
                        correo: document.getElementById("correo").value,
                        telefono: document.getElementById("telefono").value,
                    };

                    console.log("Datos enviados:", formData);
                    alert("Cupón solicitado con éxito");

                    // Redirigir a la página de éxito
                    window.location.href = "success.html";
                };
            });
        </script>
    `;
}
