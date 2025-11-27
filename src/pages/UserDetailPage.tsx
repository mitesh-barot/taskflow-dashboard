// src/pages/UserDetailPage.tsx
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import type { Todo } from "../services/jsonPlaceholderApi";
import {
  useGetPostsByUserQuery,
  useGetTodosByUserQuery,
  useGetUsersQuery,
  useToggleTodoMutation,
} from "../services/jsonPlaceholderApi";

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: data?.find((u) => u.id === userId),
    }),
  });

  const { data: posts = [] } = useGetPostsByUserQuery(userId);
  const { data: todos = [] } = useGetTodosByUserQuery(userId);
  const [toggleTodo] = useToggleTodoMutation();

  if (!user) return <div>User not found</div>;

  const completed = todos.filter((t: Todo) => t.completed).length;

  return (
    <div className="max-w-5xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-purple-600 hover:underline mb-8"
      >
        <ArrowLeft size={20} /> Back to Users
      </Link>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
            {user.name[0]}
          </div>
          <h1 className="text-4xl font-bold mt-6">{user.name}</h1>
          <p className="text-xl text-gray-600">@{user.username}</p>
          <p className="text-lg text-gray-500 mt-2">{user.email}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Posts ({posts.length})
            </h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {posts.slice(0, 8).map((post: any) => (
                <div key={post.id} className="bg-purple-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-lg">{post.title}</h3>
                  <p className="text-gray-700 mt-2 text-sm">{post.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">Todos</h2>
              <span className="text-xl font-medium text-green-600">
                {completed}/{todos.length} Completed
              </span>
            </div>
            <div className="space-y-3">
              {todos.slice(0, 15).map((todo: Todo) => (
                <div
                  key={todo.id}
                  onClick={() =>
                    toggleTodo({ id: todo.id, completed: !todo.completed })
                  }
                  className={`p-4 rounded-xl cursor-pointer transition ${
                    todo.completed
                      ? "bg-green-100 line-through text-gray-600"
                      : "bg-amber-50"
                  }`}
                >
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      readOnly
                      className="w-6 h-6"
                    />
                    <span className="select-none">{todo.title}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
