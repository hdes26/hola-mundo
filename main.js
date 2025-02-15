const { initRouter } = require("./router.js");

(() => {
    // Crear la estructura base del HTML
    document.body.innerHTML = `
        <div id="app"></div>
    `;



    // Iniciar el enrutador
    initRouter()
})();
