import dayjs from 'dayjs'

const InnerContent = ({ type, value, row, column }) => {

  switch (type) {
    case 'datetime':
      return dayjs(value).format('MMM DD, YY HH:mm')
    case 'custom':
      return column.render(row)
    case 'status':
      return value ?
        <span className="badge bg-success">{column.options[0].label}</span> :
        <span className="badge bg-warning">{column.options[1].label}</span>
    case 'image':
      return value ? <img
        src={`http://localhost:8000${value}`}
        alt={value}
        width={60}
        height={60}
      /> : 'N/A'
    case 'action':
      return column.buttons.map(button =>
        <button
          key={button.label}
          className={'btn btn-link p-0 ms-2'}
          onClick={() => button.onClick(row)}
        >{button.label}</button>)
    default:
      return value
  }
}

export function InnerTable({ columns, data }) {
  return <div className="row dt-row">
    <div className="col-sm-12">
      <table
        id="datatables-clients"
        className="table table-striped dataTable no-footer dtr-inline"
        style={{ width: '100%' }}
        aria-describedby="datatables-clients_info"
      >
        <thead>
        <tr>
          {
            columns.map(column => <th
              key={column.label}
              tabIndex="0"
              rowSpan="1"
              colSpan="1"
              className={column.type === 'action' ? 'text-end' : ''}
            >{column.label}
            </th>)
          }
        </tr>
        </thead>
        <tbody>

        {
          data.map((row, idx) =>
            <tr key={row.id} className={idx % 2 === 0 ? 'even' : 'odd'}>
              {columns.map(column => <td
                className={
                  column.type === 'action' ? 'text-end' : ''
                } key={`${row.id}-${column.key}`}
              >
                <InnerContent
                  type={column.type}
                  value={row[column.key]}
                  column={column}
                  row={row}
                />
              </td>)}
              {/*<td><span className="badge bg-success">Active</span></td>*/}
            </tr>)
        }
        </tbody>
      </table>
    </div>
  </div>
}
