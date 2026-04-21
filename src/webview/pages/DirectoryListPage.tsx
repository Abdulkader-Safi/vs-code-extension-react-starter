import React, { useState, useEffect } from "react";
import { vscode } from "../vscodeApi";

interface DirectoryItem {
  name: string;
  type: "file" | "directory";
}

interface DirectoryData {
  contents?: DirectoryItem[];
  path?: string;
  error?: string;
}

const DirectoryListPage: React.FC = () => {
  const [directoryData, setDirectoryData] = useState<DirectoryData | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleLoadDirectory();
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.type === "directoryContents") {
        setDirectoryData(message.data);
        setLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleLoadDirectory = () => {
    setLoading(true);
    vscode.postMessage({
      type: "getDirectoryContents",
    });
  };

  return (
    <div className="max-w-4xl">
      <h1 className="mb-6 text-2xl font-semibold">Directory Contents</h1>

      <div className="p-6 border rounded border-vscode-panel">
        {loading && !directoryData && (
          <p className="text-sm text-vscode-description">Loading...</p>
        )}

        {directoryData && (
          <div>
            {directoryData.error ? (
              <div className="p-3 border rounded border-vscode-error">
                <p className="text-vscode-error">{directoryData.error}</p>
              </div>
            ) : (
              <>
                {directoryData.path && (
                  <div className="p-3 mb-4 rounded bg-vscode-list-inactive-bg">
                    <p className="text-sm text-vscode-description">
                      <span className="font-medium">Path:</span>{" "}
                      <code className="px-1 py-0.5 text-xs font-mono rounded bg-vscode-code-bg text-vscode-link">
                        {directoryData.path}
                      </code>
                    </p>
                  </div>
                )}

                {directoryData.contents && directoryData.contents.length > 0 ? (
                  <div>
                    <h3 className="mb-3 text-sm font-medium">
                      Items ({directoryData.contents.length})
                    </h3>
                    <div className="overflow-hidden border rounded border-vscode-panel">
                      {directoryData.contents.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center px-3 py-1.5 text-sm transition-colors border-b border-vscode-panel last:border-b-0 hover:bg-vscode-list-hover"
                        >
                          <span className="mr-3 text-base">
                            {item.type === "directory" ? "📁" : "📄"}
                          </span>
                          <span className="flex-1">{item.name}</span>
                          <span className="text-xs uppercase text-vscode-description">
                            {item.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded bg-vscode-list-inactive-bg">
                    <p className="text-vscode-description">
                      Directory is empty
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DirectoryListPage;
