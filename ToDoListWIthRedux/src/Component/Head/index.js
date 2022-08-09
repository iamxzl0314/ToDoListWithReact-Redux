import React from 'react'
import store from '../../redux/store'
import { createAddAction } from '../../redux/ListActionCreator'
import "./index.css"
export default function Head() {
  const refs = React.useRef()
  const Add = () => {
    if (refs.current.value == "") {
      alert("Please input Your Todolist")
    } else {
      store.dispatch(createAddAction({ id: new Date().getTime(), todo: refs.current.value, done: false }))
      refs.current.value = ""
    }
  }
  const keyDownAdd = (e) => {
    if (e.keyCode === 13) {
      if (refs.current.value == "") {
        alert("Please input Your Todolist")
      } else {
        store.dispatch(createAddAction({ id: new Date().getTime(), todo: refs.current.value, done: false }))
        e.target.value = ""
      }
    }
  }
  return (
    <div className='header'>
      <input placeholder='Please Input Your Todolist,And Click Enter' name='todo' className='head-ipt' ref={refs} onKeyUp={keyDownAdd} /> <button onClick={Add}>Add</button>
    </div>
  )
}
