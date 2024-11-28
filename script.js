// Función para manejar el envío del formulario
async function sendMessage(event) {
    event.preventDefault();  // Evita que el formulario se envíe de forma tradicional (recarga de página)
  
    // Recoger los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('text').value;
    
    // Verificar si los campos están vacíos
    if (!name || !email || !message) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
  
    // Crear un objeto con los datos del formulario
    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    try {
      // Enviar los datos al backend usando fetch
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Verificar la respuesta del servidor
      const data = await response.json();
  
      if (response.ok) {
        // Si el servidor responde correctamente, mostramos una alerta de éxito
        alert("¡Mensaje enviado con éxito!");
      } else {
        // Si hay un error en la respuesta del servidor, mostramos una alerta de error
        alert(`Error: ${data.message}`);
      }
  
    } catch (error) {
      // En caso de que haya un error en la solicitud, mostrar una alerta
      alert("Hubo un problema al enviar el mensaje. Intenta nuevamente.");
      console.error("Error al enviar mensaje:", error);
    }
  }
  
  // Asignar la función al evento submit del formulario
  document.getElementById('contactForm').addEventListener('submit', sendMessage);
  