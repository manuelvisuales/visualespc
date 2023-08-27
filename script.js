const gpt3 = new OpenAI({
    apiKey: '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' // Reemplaza con tu clave de API de OpenAI
  });
  
  async function realizarSuma() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
  
    if (!isNaN(numero1) && !isNaN(numero2)) {
      const respuesta = await gpt3.answer({
        question: `Realiza la suma ${numero1} + ${numero2}.`,
        examplesContext: 'Realiza la siguiente operación matemática:',
        documents: [],
        max_tokens: 30
      });
  
      document.getElementById('resultado').textContent = `La suma es: ${respuesta}`;
    } else {
      document.getElementById('resultado').textContent = 'Ingresa números válidos.';
    }
  }
