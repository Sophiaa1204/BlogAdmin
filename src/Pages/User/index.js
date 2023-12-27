import { useLoaderData } from 'react-router'
import { InfoTable } from '../../Components/InfoTable'
import useInfoTableProps from '../../Hooks/useInfoTableProps'
import request from '../../Utils/request'

export default () => {
  const routeMeta = useLoaderData()
  const onDelete = async({ id }) => {
    await request.delete(`/v1/user/${id}`)
    infoTableProps.onReload()
  }
  const data = {
    'id': 1,
    'email': 'email@email.com',
    'password': 'Dfv/yrfx5EH7V/kiDMEA6JinQ7g+3zmDRN1Bucocw1/fNIKDbxdFI6Dbc91riXHTqOyr3e1R0bRXDCLOqyH7vOShdqqKuF7xv7/xIMIGjepThRLVyresj4lccGL5xpKpqlV0vsh4NQfi29TjUg5kBqL6z8Lh4EF3bGQHT08pk5k=',
    'gender': null,
    'avatar_url': null,
    'description': null,
    'created_at': '2023-12-27T05:11:19.000Z',
    'updated_at': '2024-01-02T04:39:59.000Z',
    'deleted_at': null,
  }

  const infoTableProps = useInfoTableProps({
    title: routeMeta.label,
    path: '/v1/user',
    columns: [
      { label: '#', key: 'id' },
      {
        label: 'Avatar', key: 'avatar_url', type: 'image',
      },
      {
        label: 'Email', key: 'email',
      },
      {
        label: 'Gender', key: 'gender',
      },

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
