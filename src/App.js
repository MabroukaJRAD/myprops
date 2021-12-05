import './App.css';
import Profile  from "./Component/Profile";
import bouka from './bouka.jpg'

function App() {
  const handleName=(name)=>{
    alert('name: ' + name);

  };
  return (
    <div className="App">
      <header className="App-header">
      <Profile fullName= 'MabroukaJrad' bio = 'bio' profession='enginner'image={bouka} handleName={handleName}/>
      </header>
    </div>
  );
}

export default App;


