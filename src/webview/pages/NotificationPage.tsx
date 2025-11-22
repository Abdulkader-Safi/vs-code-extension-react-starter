import React, { useState } from "react";
import { vscode } from "../vscodeApi";

const NotificationPage: React.FC = () => {
  const [message, setMessage] = useState("Hello from React!");

  const handleSendNotification = () => {
    vscode.postMessage({
      type: "showNotification",
      message: message,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Send Notification</h1>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Notification Message
          </label>
          <input
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your message..."
          />
        </div>

        <button
          onClick={handleSendNotification}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Send Notification
        </button>

        <div className="mt-6 p-4 bg-gray-700 rounded-md">
          <h3 className="text-sm font-medium mb-2">How it works:</h3>
          <p className="text-sm text-gray-300">
            This button sends a message to the VSCode extension, which then
            displays a notification using{" "}
            <code className="px-1 py-0.5 bg-gray-600 rounded text-xs">
              vscode.window.showInformationMessage()
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
