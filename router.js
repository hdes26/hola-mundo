import Home, { addHomeEvents } from "./pages/home.js";
import About from "./pages/about.js";

const routes = {
    "/": { view: Home, events: addHomeEvents },
    "/about": { view: About, events: null },
};

export function initRouter() {
    const render = () => {
        const path = window.location.pathname;
        const route = routes[path] || routes["/"];
        console.log("Ruta actual:", path);

        document.getElementById("app").innerHTML = route.view();

        if (route.events) {
            route.events();
        }
    };

    window.onpopstate = render;
    document.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, "", e.target.href);
            render();
        }
    });

    render();
}