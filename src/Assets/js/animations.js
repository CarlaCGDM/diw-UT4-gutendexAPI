/* DETECTAR EL CAMBIO DE TAMAÑO DE LA PANTALLA PARA VOLVER A LA VISTA DEFAULT*/

/*EXPANDIR MENU BUSQUEDA MOVIL*/

/*COLAPSAR MENU BUSQUEDA MOVIL*/

/*--Mostrar/ocultar menú lateral de navegación--*/

function toggleNavbar() {
    let nav = document.querySelector("nav");

    //if its desktop version

    
    if (window.innerWidth > 740 ) {
    
        if (nav.style.right == '0vw') {
            nav.style.right = '-20vw';
            nav.style.opacity = '90%';
        } else {
            nav.style.right = '0vw';
            
            nav.style.opacity = '100%';
        }
    
    } else {
        //if its mobile version
        if (nav.style.right == '0vw') {
            nav.style.right = '-90vw';
            nav.style.opacity = '90%';
        } else {
            nav.style.right = '0vw';
            
            nav.style.opacity = '100%';
        }
    }

    

    
}


//funcion que muestra los resultados de una busqueda
//en el maquetado lo unico que hace es mostrar la pag de resultados
//si estas en la version movil

function showResults() {

    //comprueba si estas en la version movil
    if (window.innerWidth < 740 ) {
        //de ser asi, coge la seccion de resultados
        //y la hace visible
        let results = document.getElementById("sección-resultados");
        results.style.display = "block";
    }

}

function hideResults() {

    //comprueba si estas en la version movil
    if (window.innerWidth < 740 ) {
        //de ser asi, coge la seccion de resultados
        //y la hace visible
        let results = document.getElementById("sección-resultados");
        results.style.display = "none";
    }

}