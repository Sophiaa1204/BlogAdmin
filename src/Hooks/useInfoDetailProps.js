import { useEffect, useState } from 'react'
import request from '../Utils/request'

export default ({
  title,
  defaultForm,
}) => {
  const [display, setDisplay] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const onCreate = () => {
    setDisplay(true)
    setForm(defaultForm)
  }
  const onClose = () => {
    setDisplay(false)
    setForm(defaultForm)
  }

  const onEdit = (record) => {
    setDisplay(true)
    setForm(record)
  }
  return {
    display,
    setDisplay,
    title,
    form,
    setForm,
    onClose,
    onCreate,
    onEdit,
  }
}
