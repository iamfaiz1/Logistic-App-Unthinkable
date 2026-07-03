import Button from '../common/Button'

export default function TablePagination({ table }) {
  return (
    <div className="flex flex-col gap-3 border-t border-blue-100 p-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <span>
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount() || 1}
      </span>
      <div className="flex gap-2">
        <Button type="button" variant="secondary" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button type="button" variant="secondary" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  )
}
