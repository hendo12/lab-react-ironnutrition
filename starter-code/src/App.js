import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import AddFoods from './AddFoods'

class App extends Component {
  state = {
    foods,
    search: '',
    filteredFoods:foods,
  }

  handleChange = (e) => {
    let search = e.target.value
    let filteredFoods = this.state.foods.filter((food)=>{
      return food.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(filteredFoods)
    this.setState({
      search,
      filteredFoods
    })
  }

  addFood = (newFood) => {
    console.log(newFood)
    const foodCopy = [...this.state.foods];
    foodCopy.push(newFood);
    this.setState({
      foods:foodCopy
    })
  }

  showFoods = () => {
    //console.log(this)
    let list = this.state.filteredFoods.map((food, i) => {
     return (
     <div className="box" key={i}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  //value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
     )
    })
    return list;
  }

  
  render(){
    return (
      <div className="App">
        <form>
          <input placeholder="search" onChange={(e) => this.handleChange(e)} type="text" name="search"/>
        </form>
        <AddFoods addFood={this.addFood} />
        {this.showFoods()}
                
      </div>
    )
  }
}

export default App;
