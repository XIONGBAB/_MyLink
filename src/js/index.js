document.querySelector("#icon-link").href = require("../images/favicon.ico");
import "../css/normalize.css";
import "../css/index.css";
import "../js/flexible.js";

// 判断是否支持HMR功能
if (module.hot) {
    module.hot.accept("../js/index.js");
    module.hot.accept("../js/index.js");
}
// PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(registration => {
                console.log("SW registered: ", registration);
            })
            .catch(registrationError => {
                console.log("SW registration failed: ", registrationError);
            });
    });
}
window.addEventListener("load", () => {});
// navbar scroll style

window.addEventListener("wheel", function (event) {
    const navBar = document.querySelector(".navbar");
    let scrollDirection = event.deltaY;
    if (scrollDirection < 0) {
        navBar.classList.add("animationUp");
        navBar.classList.remove("animationDown");
    } else if (scrollDirection > 0) {
        navBar.classList.add("animationDown");
        navBar.classList.remove("animationUp");
    }
});
