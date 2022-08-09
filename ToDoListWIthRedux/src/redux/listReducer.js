import { ADD, DELETE, CHANGESTATUS, CHANGEALL, DELETEALLDONE } from './constant'

let list = []
export default function (prestate = list, action) {
    const { type, data } = action
    switch (type) {

        case ADD:
            list.unshift(data)
            return list;

        case DELETE:
            let newlist = list.filter((todoObj) => {
                if (todoObj.id !== data) {
                    return todoObj
                }
            })
            list = newlist
            return list;

        case CHANGESTATUS:
            list.map((todoObj) => {
                if (todoObj.id === data) {
                    todoObj.done = !todoObj.done
                    return todoObj
                }
                return todoObj
            })
            return list;

        case CHANGEALL:
            list.map((todoObj) => {
                todoObj.done = data;
                return todoObj
            })
            return list

        case DELETEALLDONE:
            const undone = list.filter((todoObj) => {
                if (todoObj.done) {
                    return
                }
                return todoObj
            })
            list = undone
            return list

        default:
            return prestate;
    }
}