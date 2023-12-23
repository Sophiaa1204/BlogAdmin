import { useLoaderData } from 'react-router'
import { InfoTable } from '../../Components/InfoTable'
import useInfoTableProps from '../../Hooks/useInfoTableProps'
import request from '../../Utils/request'

export default () => {
  const routeMeta = useLoaderData()
  const onDelete = async({ id }) => {
    await request.delete(`/v1/comment/${id}`)
    infoTableProps.onReload()
  }
  const infoTableProps = useInfoTableProps({
    title: routeMeta.label,
    path: '/v1/comment',
    columns: [
      { label: '#', key: 'id' },
      { label: 'Thumbnail', key: 'articleThumbnailUrl', type: 'image' },
      { label: 'Article', key: 'articleTitle' },
      { label: 'Category', key: 'categoryName' },
      { label: 'User', key: 'userEmail' },
      { label: 'Content', key: 'content' },
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
