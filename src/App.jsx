import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="">
        <h1 className="text-center bg-indigo-200 p-4 text-gray-600 text-2xl sm:text-4xl selection:bg-gray-800 selection:text-gray-100">
          Learning Redux-toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
