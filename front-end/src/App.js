import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens';
import { Header } from './components';

function App() {
  return (
    <Router>
      <Header />
      {/* <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </main> */}
    </Router>
  );
}

export default App;
