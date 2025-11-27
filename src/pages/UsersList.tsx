// src/pages/UsersList.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import UserCard from "../components/UserCard";
import { useGetUsersQuery } from "../services/jsonPlaceholderApi";

export default function UsersList() {
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data: allUsers = [], isLoading } = useGetUsersQuery();

  const users = allUsers.slice(0, page * limit);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-10">Select a User</h2>

      {isLoading && <LoadingSpinner />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user: any) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>

      {users.length < allUsers.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Load More Users
          </button>
        </div>
      )}
    </>
  );
}
