import setupMenu from "./Header-menu/Navbar.js"; 
import NavResposive from "./Header-menu/NavbarToggler.js";

// Solo llama a la librería si se usa un entorno que soporte CommonJS
if (typeof require !== 'undefined') {
    require('../node_modules/default-passive-events');
}

document.addEventListener("DOMContentLoaded", async function () {
    setupMenu();
    NavResposive();
    
});