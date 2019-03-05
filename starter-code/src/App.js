import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class App extends Component {
  state = {
    foods:foods
  }

  showFoods = () => {
    let list = this.state.foods.map((food, i) => {
     return <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} />
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
                  value="1"
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
    })
    return list;
  }

  addFood = () => {
    let newFood = [...this.state.foods]
    newFood.push({
      
    })
    this.setState({ //and resets the state to be this newlist with another henry
      food:newFood
    })
  }

  render() {
    return (
      <div className="App">
        {this.showFoods()}
        <button onlick={this.addFood}>Add Food</button>
      </div>
    );
  }
}

export default App;
