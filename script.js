document.addEventListener("DOMContentLoaded", function () {
    // Función para cambiar entre pestañas
    function openTab(tabName) {
        let tabs = document.querySelectorAll(".tab");
        tabs.forEach(tab => tab.classList.remove("active-tab"));
        
        document.getElementById(tabName).classList.add("active-tab");
    }

    // Agregar evento a los botones
    let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            let tabName = this.getAttribute("data-tab");
            openTab(tabName);
        });
    });

    // Validar formulario antes de enviarlo
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            let nombre = document.getElementById("nombre").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensaje = document.getElementById("mensaje").value.trim();

            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nombre === "" || email === "" || mensaje === "") {
                alert("Por favor, completa todos los campos.");
                event.preventDefault();
            } else if (!emailRegex.test(email)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                event.preventDefault();
            }
        });
    }
});
