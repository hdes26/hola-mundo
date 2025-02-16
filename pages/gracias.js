export default function Gracias() {
    // ACTUALIZAR el elemento <title>
    document.title = "¡Gracias por tu Registro!";


    // Agregar Google Tag Manager
    const gtmScript = document.createElement("script");
    gtmScript.textContent = `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WHDXSXST');
    `;
    document.head.appendChild(gtmScript);

    // Agregar Google Analytics
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16854264136";
    document.head.appendChild(gtagScript);

    const gtagConfig = document.createElement("script");
    gtagConfig.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'AW-16854264136');
        gtag('event', 'conversion', { 'send_to': 'AW-16854264136/lcwDCOLe850aEMjS3uQ-' });
    `;
    document.head.appendChild(gtagConfig);

    // Agregar estilos
    const style = document.createElement("style");
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; font-family: Arial, sans-serif; }
        body { display: flex; align-items: center; justify-content: center;
          background: url("https://i.imgur.com/K4ffkXt.jpeg") no-repeat center center / cover; }
        .container { min-height: 80vh; display: flex; flex-direction: column;
          justify-content: center; align-items: center; padding: 20px; text-align: center; }
        .thank-you-wrapper { font-size: 18px; background: rgba(255, 255, 255, 0.85);
          border-radius: 20px; padding: 50px 40px; max-width: 700px; width: 100%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); }
        .thank-you-wrapper h1 { margin-bottom: 20px; color: #333; font-weight: bold; }
        .check-icon { width: 100px; height: 100px; margin-bottom: 20px; }
    `;
    document.head.appendChild(style);

    return `
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHDXSXST"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <div class="container">
            <div class="thank-you-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                     alt="Chulo verde" class="check-icon">
                <h1>¡Gracias por tu Registro!</h1>
                <p style="color: #333;">
                    Hemos enviado tu cupón al correo proporcionado.<br>
                    Pronto te contactaremos con más información.
                </p>
            </div>
        </div>
    `;
}
