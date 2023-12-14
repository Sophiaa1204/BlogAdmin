export function SearchBox({ onChange }) {
  return <div className="row">
    <div className="col-sm-12 col-md-6">
      <div
        className="dataTables_length"
        id="datatables-clients_length"
      ><label>Show <select
        name="datatables-clients_length"
        aria-controls="datatables-clients"
        className="form-select form-select-sm"
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select> entries</label></div>
    </div>
    <div className="col-sm-12 col-md-6">
      <div
        id="datatables-clients_filter"
        className="dataTables_filter"
      ><label>Search:<input
        type="search"
        className="form-control form-control-sm"
        placeholder=""
        aria-controls="datatables-clients"
      /></label></div>
    </div>
  </div>
}
