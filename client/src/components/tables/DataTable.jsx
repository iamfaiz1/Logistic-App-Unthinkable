import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'
import EmptyState from '../common/EmptyState'
import TablePagination from './TablePagination'
import TableToolbar from './TableToolbar'

export default function DataTable({ title, data, columns, actions }) {
  const [globalFilter, setGlobalFilter] = useState('')
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <section className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm shadow-blue-950/5">
      <TableToolbar title={title} search={globalFilter ?? ''} onSearchChange={setGlobalFilter} actions={actions} />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-blue-100 text-left text-sm">
          <thead className="bg-blue-50 text-xs uppercase text-blue-900">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="whitespace-nowrap px-4 py-3 font-bold" key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-blue-50">
            {table.getRowModel().rows.map((row) => (
              <tr className="hover:bg-blue-50/60" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="whitespace-nowrap px-4 py-3 text-slate-700" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!data.length && <div className="p-4"><EmptyState /></div>}
      <TablePagination table={table} />
    </section>
  )
}
