import React, { useState } from 'react';

export default function Formulario() {
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const validateForm = () => {
    const { nome, email, mensagem } = formData;

    if (!nome || !email || !mensagem) {
      setValidationMessage('Por favor, preencha todos os campos.');
      return false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      setValidationMessage('Por favor, insira um e-mail válido.');
      return false;
    }

    setValidationMessage('');
    return true;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    }
  };

  
  const handleReset = () => {
    setFormData({ nome: '', email: '', mensagem: '' });
    setSubmitted(false);
    setValidationMessage('');
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Formulário de Contato</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center align-center">
          
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Seu nome completo"
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Seu e-mail"
            />
          </div>

        
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Escreva sua mensagem"
              rows="4"
            ></textarea>
          </div>

          
          {validationMessage && <p className="text-red-500 text-sm">{validationMessage}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </form>
      ) : (
        
        <div className="mt-6 p-4 border border-gray-200 rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold">Dados Enviados:</h3>
          <p><strong>Nome:</strong> {formData.nome}</p>
          <p><strong>E-mail:</strong> {formData.email}</p>
          <p><strong>Mensagem:</strong> {formData.mensagem}</p>

          
          <button
            onClick={handleReset}
            className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Enviar nova mensagem
          </button>
        </div>
      )}
    </section>
  );
}
