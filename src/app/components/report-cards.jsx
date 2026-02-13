'use client'

import { Trash2 } from 'lucide-react'

export default function ReportCards({ reports, onDeleteReport }) {
  if (reports.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 text-lg">No reports found for the selected date.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reports.map((report) => (
        <div
          key={report.id}
          className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {report.equipmentTag || 'Unknown Equipment'}
              </h3>
              <p className="text-sm text-slate-500">
                {report.createdAt ? new Date(report.createdAt).toLocaleDateString() : 'No date'}
              </p>
            </div>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this report?')) {
                  onDeleteReport(report.id)
                }
              }}
              className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              title="Delete report"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-4">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
              report.status === 'working'
                ? 'bg-emerald-100 text-emerald-700'
                : report.status === 'faulty'
                ? 'bg-red-100 text-red-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {report.status || 'Pending'}
            </span>
          </div>

          {report.notes && (
            <div>
              <p className="text-xs font-medium text-slate-600 uppercase tracking-wider mb-2">
                Notes
              </p>
              <p className="text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
                {report.notes}
              </p>
            </div>
          )}

          {report.submittedBy && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                Submitted by: <span className="font-medium text-slate-700">{report.submittedBy}</span>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
