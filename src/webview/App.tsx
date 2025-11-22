import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import DirectoryListPage from "./pages/DirectoryListPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="px-4 py-3">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Notification
            </Link>
            <Link
              to="/directory"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Directory
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<NotificationPage />} />
          <Route path="/directory" element={<DirectoryListPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
