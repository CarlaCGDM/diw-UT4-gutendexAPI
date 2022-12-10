/* DETECTAR EL CAMBIO DE TAMAÑO DE LA PANTALLA PARA VOLVER A LA VISTA DEFAULT*/ /*EXPANDIR MENU BUSQUEDA MOVIL*/ /*COLAPSAR MENU BUSQUEDA MOVIL*/ /*--Mostrar/ocultar menú lateral de navegación--*/ function toggleNavbar() {
    let nav = document.querySelector("nav");
    if (nav.style.right == "0vw") {
        nav.style.right = "-20vw";
        nav.style.opacity = "90%";
    } else {
        nav.style.right = "0vw";
        nav.style.opacity = "100%";
    }
}

//# sourceMappingURL=index.3ce30202.js.map
