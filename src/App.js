import Navbar from "./components/Navbar";
import Card from "./components/Card";
import newData from "./components/Data";


function App() {
  const entries = newData.map(entry =>{
    return <Card
    key={entry.id}
    entry={entry}
     />
  } )
  return (
    <div className="container">
      <Navbar />
      <section className="main">
          {entries}
          </section>
    </div>
  );
}

export default App;
