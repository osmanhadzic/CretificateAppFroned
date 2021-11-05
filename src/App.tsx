import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar/SideBar';
import React, {FC} from 'react';


const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
    </div>
    
  );
}

export default App;
