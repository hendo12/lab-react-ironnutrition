import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class AddFoods extends Component {
  state = { 
      name: '',
      calories: '',
      image: '',
    }


  handleChange = (event) => {
    let { name, value } = event.target;

    console.log(name, value)
    this.setState({ [name]: value });
  }

  // addFoods = (theFood) => {
  //   const foodCopy = [...this.state.foods];
  //   foodCopy.push(theFood);
  //   this.setState({
  //     foods:foodCopy
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addFood(this.state)

    //this.addFoods(this.state)
    //Post this right here 
    ///axios.post('save movie url', {this.state }, ()=>{
      //this.addMovieHandler()
    //})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) =>this.handleChange(e)}/>

          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) =>this.handleChange(e)}/>

          <label>Image:</label>
          <button>Add Food</button>

        </form>
      </div>
    );
  }
}

export default AddFoods;