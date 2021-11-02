import axios from "axios";
import { cast, flow, types, } from "mobx-state-tree";



export const Counter = types.model('counter', {
    count: types.number,
    todoList: types.array(types.number),
    jsonData: types.array(types.string),
    postData: types.array(types.string),
}).actions(self=>{
   const add =()=>{
        console.log(" self.count + 1" ,self.count + 1)
      return self.count =  self.count + 1;
    }
   const remove= ()=>{
        if(self.count > 0){
        return self.count =  self.count - 1;
        }
    }
    const fetchData = flow(function* fetchData(){
        const responce = yield axios.get('https://jsonplaceholder.typicode.com/users');
       self.jsonData  =(responce.data.map(item =>item.name))
       return self.jsonData
    })

    const fetchPost = flow(function* fetchPost(){
         const postResponce = yield axios.get('https://jsonplaceholder.typicode.com/posts')
         self.postData = postResponce.data.map(item=>item.body);
         return self.postData;
    })

    return {add,remove, fetchData, fetchPost}

})





export function initCounter(){
    return Counter.create({
        count: 0,
        todoList: [],
        jsonData:[],
        postData:[]
    })
} ;