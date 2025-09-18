import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import TicketQueue from '../components/Support/TicketQueue';

export default function SupportTickets() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Support Tickets</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage customer support requests</p>
        </div>

        <TicketQueue />
      </div>
    </DashboardLayout>
  );
}