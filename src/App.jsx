// function App() {
//   const nameVar = "John";
//   const ageVar = 25;

//   return (
//     <>
//       <Child name={nameVar} age={ageVar} />
//     </>
//   );
// }
// export default App;

// function Child(props) {
//   console.log(props.age);
//   return (
//     <div>
//       <Grandchild name={props.name} age={props.age} />
//     </div>
//   );
// }

// function Grandchild(props) {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h1>Name: {props.name}</h1>
//       <h1>Age: {props.age}</h1>
//     </div>
//   );
// };

import { useState } from "react";

function App() {
const [currentCount, setCount] = useState(0);
return (
  <>
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex gap-5">
        <button
          className="px-5 py-2 bg-green-100 rounded-2xl"
          onClick={() => setCount(currentCount + 1)}
        >
          Increment
        </button>
        <button
          className="px-5 py-2 bg-blue-100 rounded-2xl"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="px-5 py-2 bg-red-100 rounded-2xl"
          onClick={() => setCount(currentCount - 1)}
        >
          Decrement
        </button>
      </div>
      <div className="text-gray-900 mt-5 text-4xl">{currentCount}</div>
    </div>
  </>
);
}
export default App;