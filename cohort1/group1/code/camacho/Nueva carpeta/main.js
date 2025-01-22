document.addEventListener('DOMContentLoaded', function() {
    // Toggle de contraseña
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });

    // Validación y manejo del formulario de login
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const loginButton = this.querySelector('.login-button');
            
            // Validaciones básicas
            if (!validateEmail(email)) {
                showError('Por favor, ingresa un email válido');
                return;
            }

            if (!password) {
                showError('Por favor, ingresa tu contraseña');
                return;
            }

            // Añadir estado de carga
            loginButton.classList.add('loading');
            loginButton.disabled = true;

            try {
                // Simular llamada al servidor
                const response = await loginUser(email, password);
                
                if (response.success) {
                    // Guardar datos de sesión
                    localStorage.setItem('userToken', response.token);
                    localStorage.setItem('userName', response.userName);
                    
                    // Mostrar mensaje de éxito
                    showSuccess('¡Inicio de sesión exitoso!');
                    
                    // Redirigir al index en lugar de store
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1000);
                } else {
                    showError('Credenciales inválidas');
                    loginButton.classList.remove('loading');
                    loginButton.disabled = false;
                }
            } catch (error) {
                showError('Error al iniciar sesión. Por favor, intenta de nuevo.');
                loginButton.classList.remove('loading');
                loginButton.disabled = false;
            }
        });
    }

    // Función para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Función para mostrar errores
    function showError(message) {
        const errorDiv = document.querySelector('.error-message') || createMessageElement('error');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';

        // Ocultar después de 3 segundos
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 3000);
    }

    // Función para mostrar mensajes de éxito
    function showSuccess(message) {
        const successDiv = document.querySelector('.success-message') || createMessageElement('success');
        successDiv.textContent = message;
        successDiv.style.display = 'block';

        // Ocultar después de 3 segundos
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 3000);
    }

    // Función para crear elementos de mensaje
    function createMessageElement(type) {
        const div = document.createElement('div');
        div.className = `${type}-message message`;
        document.querySelector('.login-form').insertBefore(div, document.querySelector('.login-button'));
        return div;
    }

    // Función que simula la autenticación
    async function loginUser(email, password) {
        // Simular delay de red
        return new Promise((resolve) => {
            setTimeout(() => {
                // Aquí irían tus validaciones reales con el backend
                if (email && password) {
                    resolve({
                        success: true,
                        token: 'ejemplo-token-' + Date.now(),
                        userName: email.split('@')[0]
                    });
                } else {
                    resolve({ success: false });
                }
            }, 1000);
        });
    }

    // Verificar si el usuario ya está autenticado
    function checkAuthStatus() {
        const token = localStorage.getItem('userToken');
        if (token && window.location.pathname.includes('login.html')) {
            // Redirigir al index si ya está autenticado
            window.location.href = 'index.html';
        }
    }

    // Verificar estado de autenticación al cargar
    checkAuthStatus();

    // Efectos de hover para beneficios
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    benefitItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Copiar código promocional
    const promoCode = document.querySelector('.promo-code');
    
    if (promoCode) {
        promoCode.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent)
                .then(() => {
                    // Feedback visual
                    const originalText = this.textContent;
                    this.textContent = '¡Copiado!';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 1500);
                })
                .catch(err => console.error('Error al copiar:', err));
        });
    }

    // Slider de características (si hay múltiples slides)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.feature-slide');
    
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // Animaciones adicionales para el logo
    const logoWrapper = document.querySelector('.logo-wrapper');
    
    // Efecto de rotación 3D al mover el mouse
    document.addEventListener('mousemove', function(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX - innerWidth / 2) / 50;
        const y = (clientY - innerHeight / 2) / 50;
        
        logoWrapper.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    
    // Resetear la rotación cuando el mouse sale
    document.addEventListener('mouseleave', function() {
        logoWrapper.style.transform = 'rotateY(0) rotateX(0)';
    });
    
    // Efecto de click
    logoWrapper.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    // Efectos adicionales para el logo
    const logo = document.querySelector('.logo');
    
    // Efecto de rotación 3D al mover el mouse
    document.addEventListener('mousemove', function(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX - innerWidth / 2) / 100;
        const y = (clientY - innerHeight / 2) / 100;
        
        logo.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    
    // Resetear rotación
    document.addEventListener('mouseleave', function() {
        logo.style.transform = 'rotateY(0) rotateX(0)';
    });
    
    // Efecto de click
    logo.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    // Añadir clase para la animación de entrada
    document.body.classList.add('page-enter');

    // Manejar los enlaces para animación de salida
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes('login.html') || this.href.includes('forgot-password.html')) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 500);
            }
        });
    });
}); 