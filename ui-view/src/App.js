import Navbar from "./components/navbar/Navbar";
import Employee from "./components/router/employee/Employee";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="mt-15">
          <Employee/>
        </div>
    </div>
  );
}

export default App;
