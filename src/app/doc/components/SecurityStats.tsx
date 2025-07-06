import React from "react";

const SecurityStats = () => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg border p-6 text-center">
      <div className="text-3xl font-bold text-blue-600 mb-2">256-bit</div>
      <div className="text-gray-600">Quantum Encryption</div>
    </div>
    <div className="bg-white rounded-lg border p-6 text-center">
      <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
      <div className="text-gray-600">Uptime SLA</div>
    </div>
    <div className="bg-white rounded-lg border p-6 text-center">
      <div className="text-3xl font-bold text-purple-600 mb-2">SOC 2</div>
      <div className="text-gray-600">Type II Certified</div>
    </div>
  </div>
);

export default SecurityStats;
