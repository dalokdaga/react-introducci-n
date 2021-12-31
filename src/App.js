// import logo from './logo.svg';
// import './App.css';
import './main.css'
const estilo2 = {
  boxShadow: '0 5px rgba(0,0,0,0.5)'
}

const estilo = (bg='#333') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({children}) =>{
  console.log(children)
  return(
    // <li style={{ ...estilo2, ...estilo() }} className='clase-li'>{children}</li>
    <li className='clase-li'>{children}</li>
  )
} 

const App = () => {
  // const valor = 'Feliz'
  return (
    // <ul style={estilo('#750')} className='clase-css'>
    <ul className='clase-css'>
      <Li estado="feliz">Valor de li</Li>
    </ul>
  );
}

export default App;
