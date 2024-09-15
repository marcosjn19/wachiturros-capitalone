import React from "react";
import eagle_normal from '../assets/Ave_Normal.svg';  
import caOne from '../assets/Capital_One_logo.svg';
import './headerMain.css'
function HeaderMain() {
  const creditLimit = 22000; // Crédito total disponible
  const debtBalance = 7040.48; // Saldo a pagar
  const currentBalance = 437.14; // Saldo actual
  const monthlyBalance = 1118.84; // Saldo a meses

  // Límite disponible = Crédito total - (Saldo a pagar + Saldo actual + Saldo a meses)
  const availableLimit = creditLimit - (debtBalance + currentBalance + monthlyBalance);

  // Calcula el porcentaje del total para cada sección
  const calculateAvailableProgress = () => (availableLimit / creditLimit) * 100;
  const calculateDebtProgress = () => (debtBalance / creditLimit) * 100;
  const calculateCurrentProgress = () => (currentBalance / creditLimit) * 100;
  const calculateMonthlyProgress = () => (monthlyBalance / creditLimit) * 100;

  return (
    <>
      <nav className="nav-container">
        <img src={caOne} alt="Capital One" className="logo" />
      </nav>

      <div className="app-container">
        <div className="card-container">
          <div className="circle-container">
            <div className="eagle-image">
              <img src={eagle_normal} alt="Eagle" className="eagle-icon" />
            </div>
            <div className="balance-card">
              <div className="balance-info">
                <h2>Credito usado</h2>
                <h1 className="balance">${debtBalance.toLocaleString()}</h1>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  {/* Límite disponible */}
                  <div
                    className="progress progress-limit"
                    style={{ width: `${calculateAvailableProgress()}%` }} // Comillas invertidas
                    ></div>
                  {/* Saldo a pagar */}
                  <div
                    className="progress progress-debt"
                    style={{ width: `${calculateDebtProgress()}%` }}
                  ></div>
                  {/* Saldo actual */}
                  <div
                    className="progress progress-current"
                    style={{ width: `${calculateCurrentProgress()}%` }}
                  ></div>
                  {/* Saldo a meses */}
                  <div
                    className="progress progress-months"
                    style={{ width: `${calculateMonthlyProgress()}%` }}
                  ></div>
                </div>
                <div className="limit-info">
                  <span>0</span>
                  <span>${creditLimit.toLocaleString()}</span>
                </div>
              </div>

            
              <div className="legend">
                <div className="legend-item">
                  <span className="color-box limit"></span>
                  <span>Disponible</span>
                </div>
                <div className="legend-item">
                  <span className="color-box debt"></span>
                  <span>A Pagar</span>
                </div>
                <div className="legend-item">
                  <span className="color-box current"></span>
                  <span>Actual</span>
                </div>
                <div className="legend-item">
                  <span className="color-box months"></span>
                  <span>A Meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMain;