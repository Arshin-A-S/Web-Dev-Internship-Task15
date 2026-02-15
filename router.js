const views = {
    home: `<h1>Home</h1><p>Welcome to the home page of our SPA!</p>`,
    about: `<h1>About</h1><p>This is built with pure Vanilla JavaScript.</p>`,
    contact: `<h1>Contact</h1><p>Reach out to us at dev@example.com</p>`,
    notFound: `<h1>404</h1><p>Page not found.</p>`
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "#/", view: views.home },
        { path: "#/about", view: views.about },
        { path: "#/contact", view: views.contact },
    ];

    const currentPath = location.hash || "#/";
    const currentRoute = routes.find(r => r.path === currentPath) || { view: views.notFound };

    const app = document.getElementById("app");
    const loader = document.getElementById("loading-indicator");
    
    app.innerHTML = "";
    loader.style.display = "block";

    setTimeout(() => {
        loader.style.display = "none";
        app.innerHTML = currentRoute.view;
    }, 400); 
};

window.addEventListener("hashchange", router); 

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches(".nav-link")) {
            e.preventDefault(); 
            navigateTo(e.target.getAttribute("href"));
        }
    });

    router();
});