import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import SystemStatus from '../components/Support/SystemStatus';

export default function SystemHealth() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">System Health</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor platform performance and uptime</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SystemStatus />
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Incidents</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Payment Gateway Timeout</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Resolved 2 hours ago</div>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">CDN Performance Issues</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Investigating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}