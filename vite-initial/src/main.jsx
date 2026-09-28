// императивный стиль
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	//   конец императивный стиль
	// декларативный стиль
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	// канец декларативный стиль
);
