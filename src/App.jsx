function App() {
  const nameVar = "John";
  const ageVar = 25;

  return (
    <>
      <Child name={nameVar} age={ageVar} />
    </>
  );
}
export default App;

function Child(props) {
  console.log(props.age);
  return (
    <div>
      <Grandchild name={props.name} age={props.age} />
    </div>
  );
}

function Grandchild(props) {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
};