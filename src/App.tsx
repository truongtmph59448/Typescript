import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Button from "./components/button";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  text: string;
}

function App() {
  const handleClick = (): void => {
    alert("Click button");
  };

  const [todos] = useState<Todo[]>([
    { id: 1, text: "Học React" },
    { id: 2, text: "Học TypeScript" },
    { id: 3, text: "Làm Todo List" },
  ]);

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB502 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/add">Thêm mới</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto mt-10">
  <h1 className="text-4xl font-bold mb-5">Todo List</h1>

  <div className="flex gap-3 mb-8">
    <Button
      label="Click Me"
      bgColor="bg-red-600"
      onClick={() => alert("Click")}
    />

    <Button
      label="Submit"
      onClick={handleClick}
    />
  </div>

  <TodoList todos={todos} />
</div>
      <Toaster />
    </>
  );
}

export default App;