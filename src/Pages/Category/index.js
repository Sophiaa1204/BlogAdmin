import { useState } from 'react'
import { useLoaderData } from 'react-router'
import { InfoDetail } from '../../Components/infoDetail'
import { InfoTable } from '../../Components/InfoTable'
import UseInfoDetailProps from '../../Hooks/useInfoDetailProps'
import useInfoTableProps from '../../Hooks/useInfoTableProps'
import request from '../../Utils/request'

const CategoryForm = ({
  onReload,
  form,
  setForm,
  onClose,
}) => {
  const handleSubmit = async(e) => {
    e.preventDefault()
    form.id
      ? await request.put(`/v1/category/${form.id}`, form)
      : await request.post('/v1/category', form)
    onClose()
    onReload()
  }
  return <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label className="form-label">Category Name</label>
      <input
        required className="form-control" placeholder="Category Name" value={
        form.name
      } onChange={(e) => setForm({
        ...form,
        name: e.target.value,
      })}
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Sort</label>
      <input
        required
        type={'number'}
        className="form-control"
        placeholder="Sort"
        value={form.sort}
        onChange={(e) => setForm({
          ...form,
          sort: e.target.value,
        })}
      />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}
export default () => {
  const routeMeta = useLoaderData()
  const {
    onCreate,
    onEdit,
    ...infoDetailProps
  } = UseInfoDetailProps({
    title: 'category',
    defaultForm: {
      name: '',
      sort: '',
    },
  })
  const onDelete = async({ id }) => {
    await request.delete(`/v1/category/${id}`)
    infoTableProps.onReload()
  }
  const infoTableProps = useInfoTableProps({
    onCreate,
    title: routeMeta.label,
    path: '/v1/category',
    columns: [
      { label: '#', key: 'id' },
      { label: 'Category Name', key: 'name' },
      { label: 'Sort', key: 'sort' },
      { label: `Created At`, key: 'created_at', type: 'datetime' },
      { label: 'Updated At', key: 'updated_at', type: 'datetime' },
      {
        label: 'Action',
        type: 'action',
        buttons: [
          {
            label: 'Edit', onClick: (row) => {
              onEdit(row)
            },
          },
          { label: 'Delete', onClick: (row) => {onDelete(row)} },
        ],
      },
    ],
  })

  return <div className="container-fluid p-0">
    <h1 className="h3 mb-3">{routeMeta.label}</h1>
    <div className="row">
      <div className={infoDetailProps.display ? `col-xl-8` : 'col-12'}>
        <InfoTable {...infoTableProps} />
      </div>
      {infoDetailProps.display && <div className="col-xl-4">
        <InfoDetail {...infoDetailProps} onReload={infoTableProps.onReload}>
          <CategoryForm />
        </InfoDetail>
      </div>}
    </div>
  </div>
}
