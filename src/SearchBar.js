import React from 'react';

class Search extends React.Component {

  state={
    value: "nopref"
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchHandler(this.state)
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <label>
          How many moons are you looking for?
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="nopref">No preference</option>
            <option value="zero">No moons please...</option>
            <option value="ten">1-10 moons</option>
            <option value="hundred">10-100 mooons</option>
          </select>
        </label>
        <input type="submit" value="Browse" />
      </form>
    )
  }

}

export default Search;
