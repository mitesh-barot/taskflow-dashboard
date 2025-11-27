import type { Todo } from "../services/jsonPlaceholderApi";
import {
  useGetPostsByUserQuery,
  useGetTodosByUserQuery,
  useToggleTodoMutation,
} from "../services/jsonPlaceholderApi";

interface Props {
  userId: number;
}

export default function UserDetail({ userId }: Props) {
  const { data: posts = [] } = useGetPostsByUserQuery(userId);
  const { data: todos = [] } = useGetTodosByUserQuery(userId);
  const [toggleTodo] = useToggleTodoMutation();

  const completed = todos.filter((t: Todo) => t.completed).length;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 -mx-4 md:mx-0">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        User Activity
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">
            Posts ({posts.length})
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {posts.slice(0, 6).map((post: any) => (
              <div key={post.id} className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium capitalize">{post.title}</h4>
                <p className="text-sm text-gray-700 mt-1">{post.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-blue-600">Todos</h3>
            <span className="text-lg font-medium">
              {completed}/{todos.length} done
            </span>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {todos.slice(0, 12).map((todo: Todo) => (
              <div
                key={todo.id}
                onClick={() =>
                  toggleTodo({ id: todo.id, completed: !todo.completed })
                }
                className={`p-3 rounded-lg cursor-pointer transition-all
                  ${
                    todo.completed ? "bg-green-100 line-through" : "bg-amber-50"
                  }`}
              >
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    className="w-5 h-5"
                  />
                  <span className="select-none">{todo.title}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
