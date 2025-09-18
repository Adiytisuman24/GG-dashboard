import React from 'react';
import { Clock, Ticket, DollarSign, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const activities = [
  {
    id: 1,
    type: 'ticket_sale',
    message: '125 tickets sold for Summer Festival',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    icon: Ticket,
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    id: 2,
    type: 'revenue',
    message: '$2,500 revenue generated',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    icon: DollarSign,
    color: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 3,
    type: 'attendance',
    message: 'Tech Conference reached 90% capacity',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    icon: Users,
    color: 'text-purple-600 dark:text-purple-400',
  },
  {
    id: 4,
    type: 'ticket_sale',
    message: '50 VIP tickets sold',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    icon: Ticket,
    color: 'text-amber-600 dark:text-amber-400',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-700 ${activity.color}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white">{activity.message}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <Clock size={12} />
                  <span>{formatDistanceToNow(activity.timestamp)} ago</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}