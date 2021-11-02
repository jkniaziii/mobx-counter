import { types } from "mobx-state-tree";
import items from "./items";


const todoList = types.model('todoList', {
    todoList: types.array(items),
}).actions(self=>({
    addItem(item){
   
    self.todoList.push(item)
        // self.id = Date.now() + Math.random();           
    }
}))





export default todoList;