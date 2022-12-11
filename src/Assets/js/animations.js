
//funcion que muestra u oculta el menu de navegacion lateral
//se llama al pulsar en el avatar del header

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

//muestra la vista de detalle de movil o de desktop
//al hacer clic en un libro que queramos ver en mas detalle

function showDetail() {

    //comprueba si estamos en mobile
    if (window.innerWidth < 740 ) {
        //de ser asi, coge la seccion de resultados
        //y la hace visible
        let detalle = document.querySelector(".detalle-libro");
        detalle.style.display = "block";
    } else {
        let overlay = document.querySelector(".black-overlay");
        let detalle = document.querySelector(".detalle-libro");
        detalle.style.display = "block";
        overlay.style.display ="block";
    }

}

function hideDetail() {

    //comprueba si estamos en mobile
    if (window.innerWidth < 740 ) {
        //de ser asi, coge la seccion de resultados
        //y la hace visible
        let detalle = document.querySelector(".detalle-libro");
        let overlay = document.querySelector(".black-overlay");
        detalle.style.display = "none";
        overlay.style.display = "none";
    } else {
        console.log("hola");
        let overlay = document.querySelector(".black-overlay");
        let detalle = document.querySelector(".detalle-libro");
        detalle.style.display = "none";
    }

}