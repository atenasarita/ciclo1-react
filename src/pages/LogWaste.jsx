import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import '../styles/logwaste-styles.css';

export default function LogWaste() {
  const [formData, setFormData] = useState({
    date: '',
    type: '',
    amount: '',
    unit: 'kg',
    container: '',
    destination: '',
    observations: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const destinosPorTipo = {
    'Aceite usado': 'Proveedora Ecológica del Norte',
    'Solvente': 'Recolectora Ambiental del Noreste',
    'Baterías': 'ReciclaMx',
    'Lámparas': 'LUMEN'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    if (name === 'type' && destinosPorTipo[value]) {
      updatedData.destination = destinosPorTipo[value];
    }

    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(formData);
    saveToLocalStorage(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      date: '',
      type: '',
      amount: '',
      unit: 'kg',
      container: '',
      destination: '',
      observations: ''
    });
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Nota de Recolección de Residuos Peligrosos', 20, 20);
    doc.setFontSize(12);
    doc.text(`Fecha: ${data.date}`, 20, 40);
    doc.text(`Tipo de Residuo: ${data.type}`, 20, 50);
    doc.text(`Cantidad: ${data.amount} ${data.unit}`, 20, 60);
    doc.text(`Contenedor: ${data.container}`, 20, 70);
    doc.text(`Destino: ${data.destination}`, 20, 80);
    doc.text(`Observaciones: ${data.observations || 'N/A'}`, 20, 90);
    doc.save('nota_recoleccion_residuo.pdf');
  };

  const saveToLocalStorage = (data) => {
    const current = JSON.parse(localStorage.getItem('residuoHistorial')) || [];
    localStorage.setItem('residuoHistorial', JSON.stringify([...current, data]));
  };

  return (
    <div className='logwaste-container'>
      <Link to="/sessionstarted">
        <img
          className='logwaste-go-back'
          src={process.env.PUBLIC_URL + '/assets/go-back.png'}
          alt="Volver"
        />
      </Link>

      <div className="logwaste-form-box">
        <h2>Registrar Residuo Peligroso</h2>
        <form className="logwaste-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Fecha</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className="input-wrapper">
            <label>Tipo de Residuo</label>
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Selecciona</option>
              <option value="Aceite usado">Aceite usado</option>
              <option value="Solvente">Solvente</option>
              <option value="Baterías">Baterías</option>
              <option value="Lámparas">Lámparas</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label>Cantidad (kg)</label>
            <input
              type="number"
              step="0.1"
              min="0"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <label>Contenedor</label>
            <select name="container" value={formData.container} onChange={handleChange} required>
              <option value="">Selecciona</option>
              <option value="Tambor">Tambor</option>
              <option value="Bidón">Bidón</option>
              <option value="Caja de seguridad">Caja de seguridad</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label>Destino</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="(Autocompleta si aplica)"
            />
          </div>

          <div className="input-wrapper full">
            <label>Observaciones</label>
            <textarea
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              rows="3"
              placeholder="Notas adicionales..."
            />
          </div>

          <button type="submit" className="logwaste-submit-btn">Generar Nota PDF</button>
          <Link to="/HistoryView" className="logwaste-history-btn">
            📑 Ver Historial de Registros
          </Link>
          {submitted && <div className="logwaste-success-msg">✅ Registro Generado Correctamente</div>}
        </form>
      </div>
    </div>
  );
}