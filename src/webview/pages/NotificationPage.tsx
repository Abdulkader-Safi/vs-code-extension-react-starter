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
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-semibold">Send Notification</h1>

      <div className="p-6 border rounded border-vscode-panel">
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Notification Message
          </label>
          <input
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-1.5 text-sm rounded bg-vscode-input-bg text-vscode-input-fg border border-vscode-input-border placeholder:text-vscode-input-placeholder focus:outline-2 focus:outline-vscode-focus focus:outline-offset-0"
            placeholder="Enter your message..."
          />
        </div>

        <button
          onClick={handleSendNotification}
          className="w-full px-4 py-1.5 text-sm font-medium rounded transition-colors bg-vscode-button-bg text-vscode-button-fg hover:bg-vscode-button-hover focus:outline-2 focus:outline-vscode-focus focus:outline-offset-0"
        >
          Send Notification
        </button>

        <div className="p-3 mt-6 rounded bg-vscode-list-inactive-bg">
          <h3 className="mb-2 text-sm font-medium">How it works:</h3>
          <p className="text-sm text-vscode-description">
            This button sends a message to the VSCode extension, which then
            displays a notification using{" "}
            <code className="px-1 py-0.5 text-xs font-mono rounded bg-vscode-code-bg">
              vscode.window.showInformationMessage()
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
