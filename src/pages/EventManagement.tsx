import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import EventList from '../components/Dashboard/EventList';

export default function EventManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Event Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage all your events</p>
        </div>

        <EventList />
      </div>
    </DashboardLayout>
  );
}