// Array para almacenar los datos de los usuarios
const usuarios = [
    { nombre: "Alejandro", apellido: "Ramirez", telefono: "524776296253" },
    { nombre: "Maria", apellido: "Perez", telefono: "524771234567" },
    { nombre: "Alejandra", apellido: "Lopez", telefono: "524777654321" },
    { nombre: "Pepe", apellido: "Hernandez", telefono: "524772467531" },
    { nombre: "Ivanna", apellido: "Zuniga", telefono: "524771357642" },
];

// Array para almacenar los checkboxes
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

// Manejar el cambio de selección de los checkboxes
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Desseleccionar todos los checkboxes excepto el seleccionado
        checkboxes.forEach((cb, i) => {
            if (i !== index) {
                cb.checked = false;
            }
        });
    });
});

// Función para mostrar el usuario seleccionado
function mostrarUsuarioSeleccionado() {
    const selectedCheckbox = checkboxes.find((checkbox) => checkbox.checked);

    if (selectedCheckbox) {
        const selectedIndex = checkboxes.indexOf(selectedCheckbox);
        const selectedUser = usuarios[selectedIndex];
        console.log("Datos del usuario seleccionado:");
        console.log(`Nombre: ${selectedUser.nombre}`);
        console.log(`Apellido: ${selectedUser.apellido}`);
        console.log(`Teléfono: ${selectedUser.telefono}`);
    } else {
        console.log("Ningún usuario seleccionado.");
    }
}