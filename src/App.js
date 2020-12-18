import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar/";
import Dashboard from "./components/reports/DashboardView";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;

