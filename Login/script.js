// Manejar el olvido de contraseña
document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Crear alerta
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.textContent = 'Solicitud enviada al equipo administrativo';
    document.body.appendChild(alert);

    // Remover alerta después de 3 segundos
    setTimeout(() => {
        alert.classList.add('hide');
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 3000);
});

// Manejar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    const inputs = this.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
});