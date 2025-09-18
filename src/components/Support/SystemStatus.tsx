import React from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const services = [
  { name: 'API Gateway', status: 'operational', uptime: '99.9%', responseTime: '45ms' },
  { name: 'Payment Processing', status: 'operational', uptime: '99.8%', responseTime: '120ms' },
  { name: 'AI Generator', status: 'degraded', uptime: '98.2%', responseTime: '850ms' },
  { name: 'Email Service', status: 'operational', uptime: '99.9%', responseTime: '200ms' },
  { name: 'Database', status: 'operational', uptime: '99.9%', responseTime: '25ms' },
  { name: 'CDN', status: 'outage', uptime: '97.1%', responseTime: '2.1s' },
];

export default function SystemStatus() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle size={16} className="text-emerald-500" />;
      case 'degraded':
        return <AlertCircle size={16} className="text-amber-500" />;
      case 'outage':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <CheckCircle size={16} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-emerald-600 dark:text-emerald-400';
      case 'degraded':
        return 'text-amber-600 dark:text-amber-400';
      case 'outage':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Status</h3>
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getStatusIcon(service.status)}
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {service.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {service.uptime} uptime • {service.responseTime}
                </div>
              </div>
            </div>
            <div className={`text-sm font-medium capitalize ${getStatusColor(service.status)}`}>
              {service.status}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}