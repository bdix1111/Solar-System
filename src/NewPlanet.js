import React from 'react';

class NewPlanet extends React.Component {

  state={
    name: "",
    image: "",
    yearLength: "",
    moons: ""
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    e.target.reset()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h3>New Planet Form!</h3>
          <input  onChange={this.onChange} name="name" type="text" placeholder="Enter planet's name.." value={this.state.name}/>
          <input onChange={this.onChange} name="image" type="text" placeholder="Enter planet's image url.." value={this.state.image}/>
          <input onChange={this.onChange} name="yearLength" type="text" placeholder="Enter planet's year-length.." value={this.state.yearLength}/>
          <input onChange={this.onChange} name="moons" type="number" placeholder="Enter planet's number of moons.." value={this.state.moons}/>
          <button>Add this planet!</button>
        </form>
      </div>
    )
  }


}

export default NewPlanet;
