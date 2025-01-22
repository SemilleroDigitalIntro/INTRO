document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const password = document.querySelector('#password');
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Login form handling
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            
            try {
                // Simular autenticación (reemplazar con tu lógica real)
                const response = await loginUser(email, password);
                
                if (response.success) {
                    // Guardar datos de sesión
                    localStorage.setItem('userToken', response.token);
                    localStorage.setItem('userName', response.userName);
                    
                    // Redirigir al index
                    window.location.href = 'index.html';
                } else {
                    showError('Credenciales inválidas');
                }
            } catch (error) {
                showError('Error al iniciar sesión');
            }
        });
    }
});

// Función que simula la autenticación
async function loginUser(email, password) {
    // Simular delay de red
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email && password) {
                resolve({
                    success: true,
                    token: 'token-' + Date.now(),
                    userName: email.split('@')[0]
                });
            } else {
                resolve({ success: false });
            }
        }, 1000);
    });
}

// Función para mostrar errores
function showError(message) {
    const errorDiv = document.querySelector('.error-message') || createErrorElement();
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}

// Función para crear el elemento de error
function createErrorElement() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    document.querySelector('.login-form').insertBefore(errorDiv, document.querySelector('.login-button'));
    return errorDiv;
} 