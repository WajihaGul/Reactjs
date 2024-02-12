import React from 'react'

export default function Alert(props) {
  return (
    <div class={'alert alert-${props.alert.type} alert-dismissible fade show" role="alert'}>
    <strong>{props.alert.type}:</strong>{props.alert.message}
    </div>
  )
}
