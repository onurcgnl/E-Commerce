
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import { Routers } from './routes/Routers';
import PageContainer from './containers/PageContainer';
import { useSelector } from 'react-redux';
import { Card } from './components/Card';

function App() {
  const { drawer } = useSelector(state => state.drawer)

  return (
    <div className="App">
      <PageContainer>
      <BrowserRouter>
        <Navbar/>
          <Routers/>
          {drawer && <Card/>}
        <Footer/>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
