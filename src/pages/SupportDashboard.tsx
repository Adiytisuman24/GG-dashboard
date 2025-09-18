import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import MetricCard from '../components/Dashboard/MetricCard';
import SystemStatus from '../components/Support/SystemStatus';
import TicketQueue from '../components/Support/TicketQueue';
import PromoterOverview from '../components/Support/PromoterOverview';
import { Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function SupportDashboard() {
  const metrics = [
    {
      title: 'Active Promoters',
      value: '284',
      change: '+12 new this month',
      trend: 'up' as const,
      icon: Users,
      color: 'blue' as const,
    },
    {
      title: 'Open Tickets',
      value: '23',
      change: '5 critical priority',
      trend: 'neutral' as const,
      icon: AlertTriangle,
      color: 'amber' as const,
    },
    {
      title: 'Resolved Today',
      value: '47',
      change: '+8% from yesterday',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'emerald' as const,
    },
    {
      title: 'Avg. Response',
      value: '2.3h',
      change: 'Under 4h target',
      trend: 'up' as const,
      icon: Clock,
      color: 'purple' as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Support Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor platform health and assist promoters</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TicketQueue />
            <PromoterOverview />
          </div>
          <div>
            <SystemStatus />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}