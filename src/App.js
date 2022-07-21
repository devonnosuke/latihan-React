import logo from './logo.svg';
import './App.css';

function CekUsia(props) {
  return 2022 - props.tahun;
}

function Sapa(props) {
  return <h1>Hallo {props.nama} - usia saya <CekUsia tahun={props.tahunLahir} /> </h1>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sapa nama='Devon' tahunLahir='2000' />
        <Sapa nama='Aulia' tahunLahir='2005' />
      </header>
    </div>
  );
}

export default App;
