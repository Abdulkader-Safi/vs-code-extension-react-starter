import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import DirectoryListPage from "./pages/DirectoryListPage";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-4 py-1.5 text-sm transition-colors ${
    isActive
      ? "bg-vscode-list-active-bg text-vscode-list-active-fg"
      : "text-vscode-sidebar-fg hover:bg-vscode-list-hover"
  }`;

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-vscode-editor-bg text-vscode-fg">
      <aside className="flex flex-col w-56 border-r border-vscode-sidebar bg-vscode-sidebar-bg">
        <div className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-vscode-section-bg text-vscode-section-fg">
          React Starter
        </div>
        <nav className="flex-1 py-1">
          <NavLink to="/" end className={navLinkClass}>
            Notification
          </NavLink>
          <NavLink to="/directory" className={navLinkClass}>
            Directory
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 px-6 py-6 overflow-auto">
        <Routes>
          <Route path="/" element={<NotificationPage />} />
          <Route path="/directory" element={<DirectoryListPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
