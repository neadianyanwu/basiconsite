import './App.css';
import MainSection from './Components/MainSection/MainSection';
import SideBar from './Components/SideBar Section/SideBar';

function App() {
  return (
    <div className='main-container'>
      <MainSection />
      <div className="vertical-line"/>
      <SideBar />
    </div>
  );
}

export default App;
