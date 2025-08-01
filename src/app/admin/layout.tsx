import { Metadata } from 'next'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Bella Garcia Platform',
  description: 'Administrative dashboard for managing bookings, services, and customer relationships',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Demo mode - no authentication required
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Notice */}
      <div className="bg-amber-100 border-b border-amber-200 px-4 py-2 text-center">
        <p className="text-amber-800 text-sm">
          🎭 <strong>Demo Mode</strong> - Bella Garcia Platform Admin Dashboard
        </p>
      </div>

      {/* Admin Header */}
      <AdminHeader />

      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
