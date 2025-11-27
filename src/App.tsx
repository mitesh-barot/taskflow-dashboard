import { Route, Routes } from "react-router-dom";
import UserDetailPage from "./pages/UserDetailPage";
import UsersList from "./pages/UsersList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">TaskFlow Dashboard</h1>
          <p className="mt-3 text-xl opacity-90">
            React 18 • TypeScript • RTK Query • React Router • Tailwind
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </main>

      <footer className="text-center py-8 text-gray-500 border-t">
        Built by <strong>Mitesh Barot</strong> — Senior Fullstack Engineer
      </footer>
    </div>
  );
}

export default App;
