import { useEffect, useState } from 'react'
import request from '../../Utils/request'
import { InnerTable } from './InnerTable'
import { Pagination } from './Pagination'
import { SearchBox } from './SearchBox'

export function InfoTable({
  title,
  columns,
  dataSource,
  pagination,
  onPageNumChange,
  onPageSizeChange,
  onReload,
  onCreate,
}) {

  return <div className="card">
    <div className="card-header">
      <div className="card-actions float-end">
        <div className="position-relative d-flex">
          {onCreate && <div role={'button'} onClick={() => onCreate()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-plus align-middle me-2"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>}
          <div role={'button'} onClick={() => onReload()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-refresh-cw align-middle me-2"
            >
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
          </div>
        </div>
      </div>
      <h5 className="card-title mb-0">{title}</h5>
    </div>
    <div className="card-body">
      <div
        id="datatables-clients_wrapper"
        className="dataTables_wrapper dt-bootstrap5 no-footer"
      >
        <SearchBox onChange={onPageSizeChange} />
        <InnerTable columns={columns} data={dataSource} />
        <Pagination pagination={pagination} onChange={onPageNumChange} />
      </div>
    </div>
  </div>
}
