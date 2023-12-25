import { useLoaderData } from 'react-router'
import { InfoTable } from '../../Components/InfoTable'
import useInfoTableProps from '../../Hooks/useInfoTableProps'
import request from '../../Utils/request'

export default () => {
  const routeMeta = useLoaderData()
  const onDelete = async({ id }) => {
    await request.delete(`/v1/follower/${id}`)
    infoTableProps.onReload()
  }
  const infoTableProps = useInfoTableProps({
    title: routeMeta.label,
    path: '/v1/follower',
    columns: [
      { label: '#', key: 'id' },
      { label: 'Follower', key: 'fromUserEmail' },
      { label: 'Follower Avatar', key: 'fromUserAvatarUrl', type: 'image' },
      { label: 'Following', key: 'toUserEmail' },
      { label: 'Following Avatar', key: 'toUserAvatarUrl', type: 'image' },
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
