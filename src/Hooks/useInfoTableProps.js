import { useEffect, useState } from 'react'
import request from '../Utils/request'

export default ({
  title,
  path,
  columns,
  onCreate,
}) => {
  const [dataSource, setDataSource] = useState([])
  const [pagination, setPagination] = useState({
    pageNum: 1,
    pageSize: 10,
    total: 0,
  })
  useEffect(() => {
    getData()
  }, [pagination.pageNum, pagination.pageSize])
  const getData = async() => {
    const resp = await request.get(`${path}/list/get`, {
      params: pagination,
    })
    const { rows, ...rest } = resp.data
    setDataSource(rows)
    setPagination(rest)
  }
  const onPageNumChange = (pageNum) => {
    setPagination({
      ...pagination,
      pageNum,
    })
  }
  const onPageSizeChange = (pageSize) => {
    setPagination({
      ...pagination,
      pageSize,
    })
  }
  return {
    title,
    dataSource,
    columns,
    pagination,
    onPageNumChange,
    onPageSizeChange,
    onReload: getData,
    onCreate,
  }
}
