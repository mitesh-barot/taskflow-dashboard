import type { User } from "../services/jsonPlaceholderApi";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all p-6 border border-gray-100">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          {user.name[0]}
        </div>
        <div>
          <h3 className="font-bold text-lg">{user.name}</h3>
          <p className="text-gray-600">@{user.username}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">Click for full profile →</p>
    </div>
  );
}
