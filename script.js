// Usuarios simulados para la validación
const validUsers = [
    { username: "admin", password: "1234" },
    { username: "user", password: "password" }
  ];
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");
  
    const user = validUsers.find(user => user.username === username && user.password === password);
  
    if (user) {
      message.style.color = "green";
      message.textContent = "¡Login exitoso! Redirigiendo...";
      setTimeout(() => {
        window.location.href = "dashboard.html";  // Redirige al dashboard
      }, 1500);
    } else {
      message.textContent = "Usuario o contraseña incorrectos.";
    }
  });
  
  // Redirige al formulario de registro
  document.getElementById("registerBtn").addEventListener("click", function () {
    window.location.href = "register.html";
  });
  