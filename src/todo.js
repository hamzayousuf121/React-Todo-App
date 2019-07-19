import React, {Component} from 'react';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state ={
            item : "",
            todoItems : []
        }
    }
    handlerChange = (e)=>{
        var inputVal = e.target.value;
         this.setState({
            item: inputVal
         })
    }
       addData = () => {
        var inputVal = this.state.item;
        var itemInstense = this.state.todoItems;
        itemInstense.push(inputVal);
        this.setState({
            todoItems : itemInstense,
            item: ""
        })
    }
    delete = (e)=>{
    var id = e.target.id; 
    var itemInstense = this.state.todoItems;
    itemInstense.splice(id,1);
    this.setState({
        todoItems : itemInstense
    }) 
    }
render(){
    var itemList = this.state.todoItems.map((e ,i) =>
       <li key={i}>{e}<span onClick={this.delete} id={i}>X</span></li>
    )
    return(
        <div>
        <div className="header">React JS TODO APP</div>
        <div className="body">
        <ul>{itemList}</ul>
        </div>
        <div className="footer">
        <input type="text" value={this.state.item} onChange={this.handlerChange} />
        <button onClick={this.addData}> +</button>
        
        </div>

        </div>
    )
}
}
export default Todo;
