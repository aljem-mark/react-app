import React, { memo } from 'react'

function Button ({className = '', children, ...rest}) {
  return (
    <button
      className={`bg-blue-300 rounded py-1 px-3 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default memo(Button)