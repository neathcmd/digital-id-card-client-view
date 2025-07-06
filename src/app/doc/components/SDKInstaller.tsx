import React from "react";
import { Copy, Check } from "lucide-react";
import { SDKInstallerProps } from "@/types/doc-types";

const SDKInstaller: React.FC<SDKInstallerProps> = ({ copied, onCopy }) => (
  <div className="mt-8 bg-white rounded-lg border p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation</h3>
    <div className="space-y-4">
      {[
        { label: "npm", command: "npm install @digitalid/sdk" },
        { label: "yarn", command: "yarn add @digitalid/sdk" },
      ].map(({ label, command }) => (
        <div key={label}>
          <h4 className="font-medium text-gray-900 mb-2">{label}</h4>
          <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
            <code className="text-sm text-gray-800">{command}</code>
            <button
              onClick={() => onCopy(command, label.toLowerCase())}
              className="text-gray-500 hover:text-gray-700"
            >
              {copied === label.toLowerCase() ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SDKInstaller;
