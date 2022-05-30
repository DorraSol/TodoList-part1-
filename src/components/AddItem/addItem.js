import React ,{Component} from 'react';
import'./addItem.css'

class AddItems extends Component {

state ={
    name: "" ,
    age: ""
}

handleChange =(e)=>{
        this.setState ({
             [e.target.id] : e.target.value
            })
        
}


handleSubmit= (e) => {
    e.preventDefault() ;
      if ((e.target.name.value === '') && (e.target.age.value === '')){
            return false
      } else {
        this.props.addItem (this.state)
        this.setState ({
            name :'',
            age :''
        })
      } 
}

  render() {
    return (

      <div >
          <form >
              <input className='form-name' type="text" placeholder='Enter name..' id='name' onChange={this.handleChange}value ={this.state.name}/>
              <input className='form-age' type="text" placeholder='Enter age..' id='age' onChange={this.handleChange} value ={this.state.age}/>
              <input className='form-submit' type="submit" onClick={this.handleSubmit}/>
          </form>
     
      </div>
    );
  }

}

export default AddItems;
