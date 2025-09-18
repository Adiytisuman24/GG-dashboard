import React from 'react';
import { AlertTriangle, Clock, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const tickets = [
  {
    id: 1,
    title: 'Payment gateway integration issue',
    promoter: 'John Smith - Event Masters',
    priority: 'high',
    status: 'open',
    created: new Date(Date.now() - 1000 * 60 * 60 * 2),
    category: 'Technical',
  },
  {
    id: 2,
    title: 'Custom domain setup assistance',
    promoter: 'Sarah Johnson - Party Planners',
    priority: 'medium',
    status: 'in-progress',
    created: new Date(Date.now() - 1000 * 60 * 60 * 4),
    category: 'Account',
  },
  {
    id: 3,
    title: 'Bulk ticket export feature request',
    promoter: 'Mike Davis - Concert Organizers',
    priority: 'low',
    status: 'open',
    created: new Date(Date.now() - 1000 * 60 * 60 * 8),
    category: 'Feature Request',
  },
];

export default function TicketQueue() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'in-progress':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'resolved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Support Ticket Queue</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">Manage customer support requests</p>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {ticket.title}
                </h3>
                <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <User size={16} />
                  <span>{ticket.promoter}</span>
                </div>
                <div className="flex items-center space-x-4 mt-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority} priority
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(ticket.status)}`}>
                    {ticket.status.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {ticket.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock size={16} />
                <span>{formatDistanceToNow(ticket.created)} ago</span>
              </div>
            </div>
            
            <div className="flex justify-end mt-4 space-x-2">
              <button className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                View
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Assign
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}