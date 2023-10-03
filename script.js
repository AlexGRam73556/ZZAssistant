function enviarMensajePorWhatsApp() {
    const form = document.getElementById("userForm");
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    
    let selectedUser = null;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedUser = {
                nombre: checkbox.getAttribute("data-nombre"),
                apellido: checkbox.getAttribute("data-apellido"),
                telefono: checkbox.getAttribute("data-telefono"),
            };
        }
    });

    if (selectedUser) {
        const message = `Hola ${selectedUser.nombre} ${selectedUser.apellido}, este es un mensaje de WhatsApp. Mi número de teléfono es ${selectedUser.telefono}.`;
        const whatsappURL = `https://wa.me/${selectedUser.telefono}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert("Por favor, selecciona un usuario antes de enviar el mensaje.");
    }
}

document.getElementById('whatsapp-button').addEventListener('click', enviarMensajePorWhatsApp);
