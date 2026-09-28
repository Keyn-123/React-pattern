// императивный стиль
import Reactlogo from './assets/logo.svg?react';
import './App.css';
import React from 'react';
//   конец императивный стиль

export const App = () => {
	// императивный стиль
  const currentDate = new Date().getFullYear();
//   конец императивный стиль

// это и верхний export декларативный стиль
  return React.createElement('div', {className: 'App'},

	React.createElement('header', {className: 'App-header'},

	React.createElement(Reactlogo, {className: 'App-logo', alt: 'logo'}),

	React.createElement(
	  'p',
	  null,
	  'Edit',
	  React.createElement('code', null, 'src/App.jsx'),
	  ' and save to reload.'
	),


	React.createElement(
		'a',
		{
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer'
		},
		'Learn React'
	),
	React.createElement(
		'p',
		{style: {marginTop: '20px', fontWeight: 'bold'} },
		'Сегодня: ',
		currentDate
	  )
	)
  );
};
// конец декларативный стиль
