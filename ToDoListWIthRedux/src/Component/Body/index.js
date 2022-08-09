import React from 'react'
import store from "../../redux/store"
import { createDeleteAction, createChangeStatusAction } from '../../redux/ListActionCreator'
import "./index.css"

export default function Body() {

  const initdata = store.getState()

  const changestatus = function (id) {
    store.dispatch(createChangeStatusAction(id))
  }



  const Delete = (id) => {
    store.dispatch(createDeleteAction(id))
  }

  return (
    <div className='body'>
      {
        initdata.map((todoObj) => {
          return (
            <div className='item' key={todoObj.id}>
              <li> <input type="checkbox" checked={todoObj.done} onChange={() => { changestatus(todoObj.id) }}></input>{todoObj.todo}<button className='delete' onClick={() => { Delete(todoObj.id) }}>Delete</button> </li>
            </div>
          )
        })
      }

    </div>
  )
}
