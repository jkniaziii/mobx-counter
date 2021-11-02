import { observer } from 'mobx-react';
import { useStore } from '../modals/rootStore';
// import { toJS } from 'mobx';
import './App.css';

function App(props) {

 const {Counter} = useStore("");
  return (
    <div className="App">
        <h1>Counter through mobX</h1>
        <button
        onClick={()=>Counter.add()}
        >+</button>
        <h1>Counter: {Counter.count}</h1>
        <button
       onClick={()=>Counter.remove()}
       >-</button>
      <div>
        
        
          <label>
            Name Todo:
            <input type='text'
            
            />
          </label>
          <button type= 'submit'  >Submit</button>
      
      </div>

      <button style={{
            backgroundColor: 'red',
            marginTop: 5,
            marginRight: 5,
            color: 'white',
            borderRadius: 10,
        
      }}
      onClick={()=>Counter.fetchData()}
      >Show Name</button>

      {
        Counter.jsonData.map((item)=>(
          <div style={{
            backgroundColor: 'red',
            color: 'white'
          }}>
            <li
            key={item}
            >{item}</li>

          </div>
        )
        )
      }

<button
      onClick={()=>Counter.fetchPost()}
      >Show Posts</button>

      {
        Counter.postData.map((item)=>(
           <li
           key={item}
           >{item}</li>
        )
        )
      }
     
    </div>
  );
}

export default observer(App);
