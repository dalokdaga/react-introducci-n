import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const X = () => <p>Hola Mundo</p>
// const Li = ({ children, estado, casa, edad }) =>{
//   console.log(casa,edad)
//   return <li> {children} {estado} </li>
// } 
// const X = () => 
//   <ul>
//     <Li 
//       estado={'Feliz'}
//       casa = {false}
//       edad = {24}
//     >
//       Chachito
//     </Li>
//     <Li
//       estado={'Trite'}
//       casa = {true}
//       edad = {24}
//     >Chachito</Li>
//     <li>Felipe</li>
//   </ul>

// ReactDOM.render(
//   <X/>, document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
