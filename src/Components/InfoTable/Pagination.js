import { useMemo } from 'react'

export function Pagination({ pagination, displayPages = 5, onChange }) {
  const { pageNum, pageSize, total } = pagination
  const totalPage = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize],
  )
  const pages = useMemo(() => {
    const pages = []
    console.log(totalPage, displayPages)
    if (totalPage <= displayPages) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
      }
    } else {
      const left = Math.floor(displayPages / 2)
      const right = displayPages - left
      if (pageNum <= left) {
        for (let i = 1; i <= displayPages; i++) {
          pages.push(i)
        }
      } else if (pageNum > totalPage - right) {
        for (let i = totalPage - displayPages + 1; i <= totalPage; i++) {
          pages.push(i)
        }
      } else {
        for (let i = pageNum - left; i < pageNum + right; i++) {
          pages.push(i)
        }
      }
    }
    return pages
  }, [totalPage, pageNum, displayPages])
  const startPage = useMemo(
    () => (pageNum - 1) * pageSize + 1,
    [pageNum, pageSize],
  )
  const endPage = useMemo(
    () => Math.min(pageNum * pageSize, total),
    [pageNum, pageSize, total],
  )
  return <div className="row">
    <div className="col-sm-12 col-md-5">
      <div
        className="dataTables_info"
        id="datatables-clients_info"
        role="status"
        aria-live="polite"
      >Showing {startPage} to {endPage} of {total} entries
      </div>
    </div>
    <div className="col-sm-12 col-md-7">
      <div
        className="dataTables_paginate paging_simple_numbers"
      >
        <ul className="pagination">
          <li
            className={`paginate_button page-item previous ${pageNum === 1
              ? 'disabled'
              : ''}`}
          >
            <button
              onClick={() => {
                pageNum !== 1 && onChange(pageNum - 1)
              }}
              tabIndex="0"
              className="page-link"
            >
              Previous
            </button>
          </li>
          {pages.map(num => <li
            className={`paginate_button page-item ${num === pageNum
              ? 'active'
              : ''}`}
          >
            <button
              onClick={() => onChange(num)}
              tabIndex="0"
              className="page-link"
            >{num}</button>
          </li>)
          }

          <li
            className={`paginate_button page-item next ${pageNum === totalPage
              ? 'disabled'
              : ''}`}
          >
            <button
              onClick={() => pageNum !== totalPage && onChange(pageNum + 1)}
              tabIndex="0"
              className="page-link"
            >Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
}
