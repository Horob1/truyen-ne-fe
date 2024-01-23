import './App.css';

import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
