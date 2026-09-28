// императивный стиль
import Reactlogo from './assets/logo.svg?react';
import './App.css';
//   конец императивный стиль

export const App = () => {
	// императивный стиль
  const currentDate = new Date().getFullYear();
//   конец императивный стиль

// это и верхний export декларативный стиль
  return (
    <div className="App">
      <header className="App-header">
        <Reactlogo className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Сегодня: {currentDate}
        </p>
      </header>
    </div>
  );
};
// конец декларативный стиль
