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
