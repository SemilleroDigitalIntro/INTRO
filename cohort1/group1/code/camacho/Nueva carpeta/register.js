// Configuración de EmailJS
const EMAILJS_CONFIG = {
    serviceID: 'service_2rlzwzg',
    templateID: 'template_pcbxg9r',
    publicKey: 'tsyCAtC2Ec_wmJ0Lp'
};

async function sendVerificationEmail(userData) {
    try {
        const verificationCode = Math.floor(100000 + Math.random() * 900000);
        
        // Verificar que todos los datos necesarios estén presentes
        if (!userData.fullName || !userData.email) {
            throw new Error('Faltan datos del usuario necesarios');
        }

        const templateParams = {
            to_name: userData.fullName,
            to_email: userData.email,
            verification_code: verificationCode.toString(),
            message: `Tu código de verificación es: ${verificationCode}`,
            reply_to: userData.email
        };

        console.log('Intentando enviar email con:', {
            serviceID: EMAILJS_CONFIG.serviceID,
            templateID: EMAILJS_CONFIG.templateID,
            params: templateParams
        });

        // Verificar que EmailJS esté inicializado
        if (!window.emailjs) {
            throw new Error('EmailJS no está inicializado correctamente');
        }

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            templateParams,
            EMAILJS_CONFIG.publicKey
        ).catch(error => {
            console.error('Error en emailjs.send:', error);
            throw error;
        });

        console.log('Respuesta de EmailJS:', response);

        if (response.status === 200) {
            console.log('Email enviado exitosamente');
            return verificationCode;
        } else {
            throw new Error(`Error en el envío: Status ${response.status}`);
        }

    } catch (error) {
        // Manejo detallado de errores
        let errorMessage = 'Error al enviar el email de verificación';

        if (error.text) {
            errorMessage += `: ${error.text}`;
        } else if (error.message) {
            errorMessage += `: ${error.message}`;
        }

        console.error('Error detallado:', {
            message: errorMessage,
            originalError: error,
            status: error.status,
            text: error.text,
            stack: error.stack
        });

        // Mostrar mensaje de error en la UI
        const errorElement = document.querySelector('.status.error p');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.parentElement.classList.remove('hidden');
        }

        throw new Error(errorMessage);
    }
}

// Función auxiliar para validar email
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Función para manejar el registro
async function handleRegistration(e) {
    e.preventDefault();
    
    const submitButton = document.querySelector('.register-button');
    const originalButtonText = submitButton.innerHTML;
    
    try {
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;

        const userData = {
            fullName: document.getElementById('fullName').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };

        // Validaciones mejoradas
        if (!userData.fullName) {
            throw new Error('Por favor, ingresa tu nombre completo');
        }
        if (!userData.email || !isValidEmail(userData.email)) {
            throw new Error('Por favor, ingresa un email válido');
        }
        if (!userData.password) {
            throw new Error('Por favor, ingresa una contraseña');
        }
        if (userData.password !== userData.confirmPassword) {
            throw new Error('Las contraseñas no coinciden');
        }

        const verificationCode = await sendVerificationEmail(userData);
        
        // Mostrar éxito
        const successMessage = document.querySelector('.status.success');
        successMessage.classList.remove('hidden');
        
        // Guardar datos
        sessionStorage.setItem('verificationCode', verificationCode);
        sessionStorage.setItem('userEmail', userData.email);

        // Redirigir
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 3000);

    } catch (error) {
        console.error('Error en el proceso de registro:', error);
        
        // Mostrar error
        const errorMessage = document.querySelector('.status.error');
        const errorText = errorMessage.querySelector('p');
        errorText.textContent = error.message || 'Error en el registro. Por favor, intenta nuevamente.';
        errorMessage.classList.remove('hidden');
    } finally {
        // Restaurar botón
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);
    
    const form = document.getElementById('registerForm');
    if (form) {
        form.addEventListener('submit', handleRegistration);
    }
}); 