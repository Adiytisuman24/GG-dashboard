import React from 'react';
import { Plus, Calendar, BarChart, Settings } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    {
      icon: Plus,
      label: 'Create Event',
      description: 'Start a new event',
      color: 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30',
    },
    {
      icon: Calendar,
      label: 'Schedule Event',
      description: 'Set event timeline',
      color: 'bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30',
    },
    {
      icon: BarChart,
      label: 'View Analytics',
      description: 'Check performance',
      color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/30',
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'Manage preferences',
      color: 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className={`w-full p-4 rounded-lg border-2 border-transparent transition-all duration-200 ${action.color}`}
            >
              <div className="flex items-center space-x-3">
                <Icon size={20} />
                <div className="flex-1 text-left">
                  <div className="font-medium">{action.label}</div>
                  <div className="text-sm opacity-70">{action.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}