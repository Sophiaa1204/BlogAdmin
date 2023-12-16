import React from 'react'

export function InfoDetail({
  children,
  title,
  ...props
}) {
  const ChildrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props)
    }
  })
  return <div className="card">
    <div className="card-header">
      <div className="card-actions float-end">
        <div className="dropdown position-relative">
          <div role={'button'} onClick={props.onClose}>
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
              className="feather feather-x align-middle"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>

        </div>
      </div>
      <h5 className="card-title mb-0">{
        props.form.id ? 'Edit' : 'Create'
      } {title}</h5>
    </div>
    <div className="card-body">
      {ChildrenWithProps}
    </div>
  </div>
}
