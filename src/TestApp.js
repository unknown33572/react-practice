import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
    </>
  );
}

const App = () => {

  return (
    <div className="App">
      <h1>Hi</h1>
      <Person name={'Jane'}/>
      <Person name={'Kenny'}/>
    </div>
  );
}

export default App;