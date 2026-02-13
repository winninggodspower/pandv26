'use client'

import { Trash2 } from 'lucide-react'

export default function ReportTable({ reports, onDeleteReport }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Equipment Tag
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Details
            </th>
            <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-6 py-8 text-center text-slate-500 text-sm">
                No reports found for the selected date.
              </td>
            </tr>
          ) : (
            reports.map((report) => (
              <tr key={report.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {report.equipmentTag || 'N/A'}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {report.createdAt ? new Date(report.createdAt).toLocaleDateString() : 'N/A'}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    report.status === 'working'
                      ? 'bg-emerald-100 text-emerald-700'
                      : report.status === 'faulty'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {report.status || 'Pending'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {report.notes ? report.notes.substring(0, 50) + (report.notes.length > 50 ? '...' : '') : 'No notes'}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this report?')) {
                        onDeleteReport(report.id)
                      }
                    }}
                    className="inline-flex items-center justify-center p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                    title="Delete report"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
