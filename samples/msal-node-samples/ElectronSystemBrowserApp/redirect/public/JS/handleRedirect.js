"use static";

import auth from "../config/authConfig.json" assert { type: "json" };

window.addEventListener("DOMContentLoaded", function () {
    let redirectUri = `${auth.customURLScheme}`;

    if (window.location.search) {
        redirectUri += window.location.search;
        window.history.pushState({}, document.title, "/");
    }

    document.getElementById("SignIn").onclick = function () {
        window.location.href = redirectUri;
    };
});

