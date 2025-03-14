document.addEventListener("DOMContentLoaded", function () {
    function openTab(tabName) {
        let tabs = document.querySelectorAll(".tab");
        let buttons = document.querySelectorAll(".tab-button");

        // Ocultar todas las pestañas y desactivar los botones
        tabs.forEach(tab => tab.classList.remove("active-tab"));
        buttons.forEach(button => button.classList.remove("active"));

        // Mostrar la pestaña seleccionada y activar el botón
        document.getElementById(tabName).classList.add("active-tab");
        document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
    }

    // Agregar eventos a los botones
    let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            let tabName = this.getAttribute("data-tab");
            openTab(tabName);
        });
    });

    // Mostrar la primera pestaña por defecto
    openTab("habilidades-tecnicas");
});
