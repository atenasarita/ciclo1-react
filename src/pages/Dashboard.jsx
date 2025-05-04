import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import '../styles/dashboards-styles.css';

const COLORS = ['#38bdf8', '#0ea5e9', '#94a3b8', '#10b981'];

export default function Dashboard() {
  const [records, setRecords] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [containerFilter, setContainerFilter] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('residuoHistorial')) || [];
    setRecords(stored);
    setFiltered(stored);
  }, []);

  useEffect(() => {
    let data = records;
    if (typeFilter) data = data.filter(r => r.type === typeFilter);
    if (containerFilter) data = data.filter(r => r.container === containerFilter);
    setFiltered(data);
  }, [typeFilter, containerFilter, records]);

  const groupedByMonth = filtered.reduce((acc, record) => {
    const month = record.date?.slice(0, 7);
    if (!acc[month]) acc[month] = 0;
    acc[month] += parseFloat(record.amount);
    return acc;
  }, {});

  const monthlyData = Object.entries(groupedByMonth).map(([month, total]) => ({ name: month, total }));

  const typeDistribution = filtered.reduce((acc, r) => {
    acc[r.type] = (acc[r.type] || 0) + parseFloat(r.amount);
    return acc;
  }, {});

  const pieData = Object.entries(typeDistribution).map(([name, value]) => ({ name, value }));

  return (
    <div className="dashboard-wrapper">
      <Link to="/sessionstarted">
        <img
          className='dashboard-go-back'
          src={process.env.PUBLIC_URL + '/assets/go-back.png'}
          alt="Volver"
        />
      </Link>

      <div className="dashboard-sidebar">
        <h3>Filtros</h3>
        <label>Tipo de Residuo</label>
        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value=''>Todos</option>
          <option value='Aceite usado'>Aceite usado</option>
          <option value='Solvente'>Solvente</option>
          <option value='Baterías'>Baterías</option>
          <option value='Lámparas'>Lámparas</option>
        </select>

        <label>Contenedor</label>
        <select value={containerFilter} onChange={e => setContainerFilter(e.target.value)}>
          <option value=''>Todos</option>
          <option value='Tambor'>Tambor</option>
          <option value='Bidón'>Bidón</option>
          <option value='Caja de seguridad'>Caja de seguridad</option>
        </select>
      </div>

      <div className="dashboard-main">
        <div className="graph-card">
          <h3>Residuos por Mes</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#38bdf8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-card">
          <h3>Distribución por Tipo</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                label
              >
                {pieData.map((_, i) => <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}