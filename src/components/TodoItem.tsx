interface TodoItemProps {
  text: string;
  status: boolean;
}

function TodoItem({ text }: TodoItemProps) {
  return (
    <li className="bg-white shadow rounded-lg p-4 border flex justify-between items-center">
      <span>{text}</span>

      <span className="text-green-600 font-semibold">
        Hoàn thành
      </span>
    </li>
  );
}

export default TodoItem;