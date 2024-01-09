import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Gepel from './pages/Gepel';
import Valaszto from './pages/Valaszto';
import Rendez from './pages/Rendez';
import NoPage from './pages/NoPage';
import Model from './model/Model';

function App()
{
  const MODEL = new Model();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uno lingo</h1>
      </header>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="gepel" element={<Gepel />} />
              <Route path="valaszto" element={<Valaszto model={MODEL} />} />
              <Route path="rendez" element={<Rendez />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      <footer>Keresztes Hunor</footer>
    </div>
  );
}

export default App;
