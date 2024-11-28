
async function sendMessage(event) {
    event.preventDefault(); 
  

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('text').value;
    

    if (!name || !email || !message) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
  

    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    try {

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  

      const data = await response.json();
  
      if (response.ok) {

        alert("¡Mensaje enviado con éxito!");
      } else {

        alert(`Error: ${data.message}`);
      }
  
    } catch (error) {

      alert("Hubo un problema al enviar el mensaje. Intenta nuevamente.");
      console.error("Error al enviar mensaje:", error);
    }
  }
  

  document.getElementById('contactForm').addEventListener('submit', sendMessage);
  