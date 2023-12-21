import { useLoaderData } from 'react-router'
import { InfoTable } from '../../Components/InfoTable'
import useInfoTableProps from '../../Hooks/useInfoTableProps'
import request from '../../Utils/request'

export default () => {
  const routeMeta = useLoaderData()
  const onDelete = async({ id }) => {
    await request.delete(`/v1/article/${id}`)
    infoTableProps.onReload()
  }
  const infoTableProps = useInfoTableProps({
    title: routeMeta.label,
    path: '/v1/article',
    columns: [
      { label: '#', key: 'id' },
      { label: 'Thumbnail', key: 'thumbnailUrl', type: 'image' },
      { label: 'Title', key: 'title' },
      { label: 'Author', key: 'userEmail' },
      { label: 'Category', key: 'categoryName' },
      {
        label: 'isPublish',
        key: 'isPublish',
        type: 'status',
        options: [
          { label: 'Published', value: true },
          { label: 'Unpublished', value: false },
        ],
      },
      { label: `Created At`, key: 'created_at', type: 'datetime' },
      { label: 'Updated At', key: 'updated_at', type: 'datetime' },
      {
        label: 'Action',
        type: 'action',
        buttons: [
          { label: 'Delete', onClick: (row) => {onDelete(row)} },
        ],
      },
    ],
  })

  return <div className="container-fluid p-0">
    <h1 className="h3 mb-3">{routeMeta.label}</h1>
    <div className="row">
      <div className={'col-12'}>
        <InfoTable {...infoTableProps} />
      </div>
    </div>
  </div>
}
