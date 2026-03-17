import React, { useState } from 'react';

const FuelCalculator = () => {
  const [distance, setDistance] = useState('');
  const [fuel, setFuel] = useState('');
  const [consumption, setConsumption] = useState(null);
  const [error, setError] = useState('');

  const calculateConsumption = () => {
    setError('');
    setConsumption(null);

    const distanceNum = parseFloat(distance);
    const fuelNum = parseFloat(fuel);

    if (isNaN(distanceNum) || isNaN(fuelNum)) {
      setError('Please enter valid numbers.');
      return;
    }

    if (fuelNum <= 0) {
      setError('Fuel used must be greater than zero.');
      return;
    }

    const result = distanceNum / fuelNum;
    setConsumption(result.toFixed(2));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateConsumption();
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fuel Consumption Calculator</h2>
      
      <div style={styles.inputGroup}>
        <label style={styles.label}>Distance (km):</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
          placeholder="Enter distance in kilometers"
          min="0"
          step="any"
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Fuel used (litres):</label>
        <input
          type="number"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
          placeholder="Enter fuel used in litres"
          min="0"
          step="any"
        />
      </div>

      <button onClick={calculateConsumption} style={styles.button}>
        Calculate
      </button>

      {error && (
        <div style={styles.error}>
          {error}
        </div>
      )}

      {consumption !== null && (
        <div style={styles.result}>
          Fuel consumption: {consumption} km/l
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  error: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    border: '1px solid #f5c6cb',
    borderRadius: '4px',
  },
  result: {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default FuelCalculator;
