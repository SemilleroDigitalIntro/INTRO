document.addEventListener('DOMContentLoaded', function() {
    const recoveryForm = document.getElementById('recoveryForm');
    const emailInput = document.getElementById('email');
    const successMessage = document.querySelector('.status.success');
    const errorMessage = document.querySelector('.status.error');
    
    // Validación de email en tiempo real
    emailInput.addEventListener('input', function() {
        validateEmail(this.value);
    });

    // Función de validación de email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        
        if (isValid) {
            emailInput.style.borderColor = 'var(--success)';
        } else {
            emailInput.style.borderColor = email ? 'var(--error)' : 'var(--border)';
        }
        
        return isValid;
    }

    // Manejo del formulario
    recoveryForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value;
        const button = this.querySelector('.recovery-button');
        
        // Validar email antes de enviar
        if (!validateEmail(email)) {
            showError('Por favor, ingresa un correo electrónico válido');
            return;
        }

        // Iniciar estado de carga
        setLoadingState(true, button);

        try {
            // Simular llamada al servidor
            await simulateServerCall(email);
            
            // Mostrar éxito
            showSuccess('Instrucciones enviadas a tu correo electrónico');
            
            // Redireccionar después de 3 segundos
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);

        } catch (error) {
            showError('Error al enviar las instrucciones. Intenta nuevamente');
        } finally {
            setLoadingState(false, button);
        }
    });

    // Simular llamada al servidor
    function simulateServerCall(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simular éxito 90% del tiempo
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Server error'));
                }
            }, 2000);
        });
    }

    // Funciones de utilidad
    function setLoadingState(isLoading, button) {
        if (isLoading) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        } else {
            button.disabled = false;
            button.innerHTML = '<span>Enviar Instrucciones</span><i class="fas fa-arrow-right"></i>';
        }
    }

    function showSuccess(message) {
        hideMessages();
        successMessage.querySelector('p').textContent = message;
        successMessage.classList.remove('hidden');
        successMessage.style.animation = 'fadeIn 0.5s ease forwards';
    }

    function showError(message) {
        hideMessages();
        errorMessage.querySelector('p').textContent = message;
        errorMessage.classList.remove('hidden');
        errorMessage.style.animation = 'fadeIn 0.5s ease forwards';
        
        // Ocultar mensaje de error después de 3 segundos
        setTimeout(() => {
            errorMessage.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => {
                errorMessage.classList.add('hidden');
            }, 500);
        }, 3000);
    }

    function hideMessages() {
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
    }

    // Animaciones adicionales
    const steps = document.querySelectorAll('.step');
    
    // Animar pasos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateX(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.5 });

    steps.forEach(step => {
        step.style.transform = 'translateX(-20px)';
        step.style.opacity = '0';
        step.style.transition = 'all 0.5s ease';
        observer.observe(step);
    });

    // Efectos hover en los pasos
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });

        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Animación del logo
    const logo = document.querySelector('.logo');
    
    document.addEventListener('mousemove', function(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX - innerWidth / 2) / 50;
        const y = (clientY - innerHeight / 2) / 50;
        
        logo.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    // Efecto de click en el botón
    const recoveryButton = document.querySelector('.recovery-button');
    
    recoveryButton.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });

    recoveryButton.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });

    // Animaciones CSS adicionales
    document.querySelectorAll('.security-list li').forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
        item.style.opacity = '0';
    });
});

// Animaciones CSS
const styles = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;

// Agregar estilos de animación
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet); 