import React from 'react'
import store from '../../redux/store'
import { craeteChangeAllAtion, createDeleteAllDoneAction } from "../../redux/ListActionCreator"
import "./index.css"

export default function Buttom() {

  const [initall, setInitAll] = React.useState(false)

  const data = store.getState()
  let done = 0
  data.map((listObj) => {
    if (listObj.done) {
      done++
    }
  })

  React.useEffect(() => {
    if (done == data.length && done !== 0) {
      setInitAll(true)
    } else (
      setInitAll(false)
    )
  })

  const changeAll = (e) => {
    store.dispatch(craeteChangeAllAtion(e.target.checked))

  }

  const deleteAllDone = () => {
    store.dispatch(createDeleteAllDoneAction(true))
  }

  return (
    <div className='buttom'>
      <input type="checkbox" onChange={changeAll} checked={initall}></input>Done{done}/All{data.length} <button className='deleteAllDone' onClick={deleteAllDone}>DeleteAllDone</button>
    </div>
  )
}
