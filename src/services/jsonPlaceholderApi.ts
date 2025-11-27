// src/services/jsonPlaceholderApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({ query: () => "users" }),
    getPostsByUser: builder.query<Post[], number>({
      query: (userId) => `posts?userId=${userId}`,
    }),
    getTodosByUser: builder.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
    }),
    toggleTodo: builder.mutation<Todo, { id: number; completed: boolean }>({
      query: ({ id, completed }) => ({
        url: `todos/${id}`,
        method: "PATCH",
        body: { completed },
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetPostsByUserQuery,
  useGetTodosByUserQuery,
  useToggleTodoMutation,
} = jsonPlaceholderApi;
