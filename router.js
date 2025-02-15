const Home = require("./pages/home.js");
const About = require("./pages/about.js");

const routes = {
    "/": Home,
    "/about": About,
};

export function initRouter() {
    const render = () => {
        const path = window.location.pathname;
        const page = routes[path] || Home;
        document.getElementById("app").innerHTML = page();
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
