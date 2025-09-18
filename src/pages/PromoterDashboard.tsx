import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import MetricCard from '../components/Dashboard/MetricCard';
import EventList from '../components/Dashboard/EventList';
import RecentActivity from '../components/Dashboard/RecentActivity';
import QuickActions from '../components/Dashboard/QuickActions';
import { Calendar, Ticket, DollarSign, Users } from 'lucide-react';

export default function PromoterDashboard() {
  const metrics = [
    {
      title: 'Active Events',
      value: '12',
      change: '+2 from last month',
      trend: 'up' as const,
      icon: Calendar,
      color: 'blue' as const,
    },
    {
      title: 'Tickets Sold',
      value: '2,847',
      change: '+18% from last week',
      trend: 'up' as const,
      icon: Ticket,
      color: 'emerald' as const,
    },
    {
      title: 'Total Revenue',
      value: '$124,890',
      change: '+23% from last month',
      trend: 'up' as const,
      icon: DollarSign,
      color: 'purple' as const,
    },
    {
      title: 'Attendees',
      value: '5,432',
      change: '+12% from last month',
      trend: 'up' as const,
      icon: Users,
      color: 'amber' as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome to your event management dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EventList />
          </div>
          <div className="space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}