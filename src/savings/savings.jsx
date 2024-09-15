import React, { useState, useEffect, useCallback } from 'react';
import './savings.css';

import carIcon from '../assets/Car.svg'; 
import phoneIcon from '../assets/Phone.svg';
import computerIcon from '../assets/Computer.svg';

function Savings() {
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Máximo de items a mostrar por página

  const fetchAPI = useCallback(() => {
    setArray([
      { title: "Car", percentage: 0, color: "#ccc" },
      { title: "Phone", percentage: 10, color: "#ccc" },
      { title: "Computer", percentage: 70, color: "#ccc" },
      { title: "Tablet", percentage: 40, color: "#ccc" },
      { title: "Watch", percentage: 50, color: "#ccc" }
    ]);
  }, []);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  // Función para agregar un nuevo "egg"
  const addEgg = () => {
    const newEgg = {
      title: "New Egg",
      percentage: 0,
      color: "#ccc"
    };
    setArray(prevArray => [...prevArray, newEgg]);
  };

  // Calcula el índice del primer y último huevo a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const handleNextPage = () => {
    if (currentPage < Math.ceil(array.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h1>Huevitos</h1>
      <div className="savings-app">
        <h2 className="savings-title">Savings</h2>
        <div className="savings-container">
          {currentItems.map((item, index) => (
            <SavingsEgg
              key={index}
              title={item.title}
              percentage={item.percentage}
              color={item.color}
            />
          ))}
        </div>

        {/* Botones de paginación */}
        <div className="pagination-buttons">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(array.length / itemsPerPage)}
          >
            Next
          </button>
        </div>

        <button className="add-egg-button" onClick={addEgg}>
          Add an egg
        </button>
      </div>
    </>
  );
}

// Mapeo de íconos basados en el título
const iconMap = {
  Car: carIcon,
  Phone: phoneIcon,
  Computer: computerIcon,
  // Agrega más títulos y sus íconos si es necesario
};

// Componente que representa cada "huevo" de ahorro
const SavingsEgg = ({ title, percentage, color }) => {
  const iconSrc = iconMap[title] || null; // Buscar el ícono basado en el título

  return (
    <div className="egg-container">
      {iconSrc ? (
        <img src={iconSrc} alt={title} className="egg-icon" />
      ) : (
        <div className="egg-placeholder">{title.charAt(0)}</div> // Letra si no hay ícono
      )}
      <h3>{title}</h3>
      <div className="progress-bar" style={{ backgroundColor: color }}>
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
      <span>{percentage}%</span>
    </div>
  );
};

export default Savings;
