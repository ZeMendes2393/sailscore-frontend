"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold mb-6">ADMIN DASHBOARD</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin" className="hover:underline">Dashboard</Link>
          <Link href="/admin/manage-regattas" className="hover:underline">Regattas</Link>
          <Link href="/admin/manage-users" className="hover:underline">Users</Link>
          <Link href="/admin/manage-protests" className="hover:underline">Protests</Link>
          <Link href="/admin/settings" className="hover:underline">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Overview</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white shadow rounded p-4 text-center">
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-gray-600">Regattas</p>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p className="text-2xl font-bold">350</p>
            <p className="text-sm text-gray-600">Competitors</p>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p className="text-2xl font-bold">20</p>
            <p className="text-sm text-gray-600">Races</p>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm text-gray-600">Open Protests</p>
          </div>
        </div>

        {/* Regatta Management */}
        <div className="bg-white shadow rounded p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Regatta Management</h2>
            <Link href="/admin/create-regatta">
              <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Add Regatta</button>
            </Link>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Dates</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Spring Regatta</td>
                <td>April 20–22</td>
                <td>Marinu Bay</td>
                <td><span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Upcoming</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2024 Sailing Championship</td>
                <td>March 12–17</td>
                <td>Harborview</td>
                <td><span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">Completed</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Coastal Race</td>
                <td>May 6 – 2024</td>
                <td>Seaside</td>
                <td><span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Scheduled</span></td>
              </tr>
              <tr>
                <td className="py-2">Summer Cup</td>
                <td>June 10–12</td>
                <td>Cape Harbor</td>
                <td><span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Scheduled</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* User Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-lg font-semibold mb-4">User Management</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">John Smith</td>
                  <td>john.smith@example.com</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Emma Wilson</td>
                  <td>emma.wilson@example.com</td>
                </tr>
                <tr>
                  <td className="py-2">Mark Taylor</td>
                  <td>mark.taylor@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Protest Management */}
          <div className="bg-white shadow rounded p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Protests</h2>
              <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Add Protest</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2">ID</th>
                  <th>Regatta</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">1011</td>
                  <td>2024 Sailing Championship</td>
                  <td><span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">Completed</span></td>
                </tr>
                <tr>
                  <td className="py-2">1005</td>
                  <td>2024 Sailing Championship</td>
                  <td><span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}