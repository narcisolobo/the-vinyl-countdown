import './Slate.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Records from './components/Records';
import AllRecords from './pages/AllRecords';
import ShowRecord from './pages/ShowRecord';
import NewRecord from './pages/NewRecord';
import EditRecord from './pages/EditRecord';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path={'/'} element={<Navigate to="/records" />} />
            <Route path={'/records'} element={<Records />}>
              <Route index element={<AllRecords />} />
              <Route path=":id" element={<ShowRecord />} />
              <Route path="new" element={<NewRecord />} />
              <Route path=":id/edit" element={<EditRecord />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
