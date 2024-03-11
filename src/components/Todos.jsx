import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center w-full h-screen mt-7 ">
        <ul className="w-full sm:w-1/2 md:w-2/3 ">
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="bg-gray-800 text-white flex justify-between p-4 m-1 rounded shadow-lg ">
                <div className="">{todo.text}</div>
                <div>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 rounded px-3">
                    X
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// export default Todos;
// Todo.jsx
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, updateTodo } from "../features/Todo/todoSlice";

// function Todos() {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   const [updateId, setUpdateId] = useState(null);

//   const handleUpdateClick = (id, text) => {
//     setUpdateId(id);
//     dispatch(updateTodo({ id, text }));
//   };

//   const handleCancelUpdate = () => {
//     setUpdateId(null);
//     dispatch(updateTodo({ id: null, text: "" }));
//   };

//   return (
//     <>
//       <div className="flex justify-center w-full h-screen mt-7 ">
//         <ul className="w-full sm:w-1/2 md:w-2/3 ">
//           {todos.map((todo) => (
//             <li key={todo.id}>
//               <div className="bg-gray-800 text-white flex justify-between p-4 m-1 rounded shadow-lg ">
//                 {updateId === todo.id ? (
//                   <>
//                     <input
//                       type="text"
//                       value={todo.text}
//                       className="bg-transparent"
//                       onChange={(e) =>
//                         dispatch(
//                           updateTodo({ id: todo.id, text: e.target.value })
//                         )
//                       }
//                     />
//                     <button
//                       onClick={() =>
//                         dispatch(updateTodo({ id: todo.id, text: todo.text }))
//                       }
//                       className="text-gray-200 bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded">
//                       Save
//                     </button>
//                     <button
//                       onClick={handleCancelUpdate}
//                       className="text-gray-200 bg-red-500 border-0 py-1 px-3 ml-2 focus:outline-none hover:bg-red-600 rounded">
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <div>{todo.text}</div>
//                     <div>
//                       <button
//                         onClick={() => handleUpdateClick(todo.id, todo.text)}
//                         className="text-gray-200 bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded">
//                         Update
//                       </button>
//                       <button
//                         onClick={() => dispatch(removeTodo(todo.id))}
//                         className="text-gray-200 bg-green-500 border-0 py-1 px-3 ml-2 focus:outline-none hover:bg-green-600 rounded">
//                         X
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Todos;
