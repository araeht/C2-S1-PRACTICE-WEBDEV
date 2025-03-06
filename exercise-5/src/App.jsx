import data from "./data";
import Card from "./components/Card";
import "./index.css"; 

function App() {
  return (
    <div className="container">
      {data.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </div>
  );
}

export default App;
