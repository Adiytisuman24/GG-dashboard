import React from 'react';
import { Building, Calendar, DollarSign } from 'lucide-react';

const promoters = [
  {
    id: 1,
    name: 'Event Masters Inc.',
    contact: 'John Smith',
    plan: 'Pro',
    events: 12,
    revenue: 124890,
    status: 'active',
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    name: 'Party Planners Ltd.',
    contact: 'Sarah Johnson',
    plan: 'Enterprise',
    events: 28,
    revenue: 289450,
    status: 'active',
    lastActivity: '1 day ago',
  },
  {
    id: 3,
    name: 'Concert Organizers',
    contact: 'Mike Davis',
    plan: 'Starter',
    events: 5,
    revenue: 12450,
    status: 'trial',
    lastActivity: '3 days ago',
  },
];

export default function PromoterOverview() {
  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Enterprise':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Pro':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Starter':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'trial':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Promoters</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">Monitor high-value promoter accounts</p>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {promoters.map((promoter) => (
          <div key={promoter.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {promoter.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {promoter.contact}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPlanColor(promoter.plan)}`}>
                  {promoter.plan}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(promoter.status)}`}>
                  {promoter.status}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>Events</span>
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                  {promoter.events}
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                  <DollarSign size={16} />
                  <span>Revenue</span>
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                  ${promoter.revenue.toLocaleString()}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400">Last Active</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                  {promoter.lastActivity}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}