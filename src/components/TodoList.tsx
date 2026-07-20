import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  status: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Danh sách công việc</h2>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} status={todo.status} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;