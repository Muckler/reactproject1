import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap';


class Addtodo extends Component {

    constructor(){
        super();
        this.state = {
            newTodo:{}
        }
    }
    static defaultProps = {
        categories: ['Completed', 'Untouched', 'Working On It']
    }

    handleSubmit(e){
        
        console.log("submitted");
        console.log(this.refs.title.value);
        e.preventDefault();

        //this.setState({}, callback)

        if(this.refs.title.value === ''){
            alert('title is required')
        }else{
            this.setState({newTodo:{
                
                title: this.refs.title.value,
                category: this.refs.category.value
            }},  function(){
                
                this.props.addtodo(this.state.newTodo);
            })
        }

    }

  render() {

    let  categoryOptions = this.props.categories.map(category =>{
            
        return <option key={category} value={category}>{category}</option>

    })
    return (
    <div>
        <h1>Add Items To Do To List:
        </h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
           <div>
               <label>Title</label><br />
               <input type="text" ref="title" maxlength="80" size="80"/>
          </div>

          <div>
               <label>Category</label><br />
               <select ref="category">
                   
                    {categoryOptions}
               </select>
          </div> 
          <ButtonToolbar>
          <Button bsStyle="success" type="submit" value="submit">Submit</Button></ButtonToolbar>
          {/* <input type="submit" value="submit"/> */}
        </form>
     </div>
    );
  }
}

export default Addtodo