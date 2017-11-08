import React from 'react'

class SortByGreasedBar extends React.Component {
  constructor () {
    super()

    this.state = {
      input: 'all'
    }
  }

  handleInputChange = e => {
    const input = e.target.value
    this.setState({
      input
    })
  }

  render() {
    return (
      <div>
        <div>
            <select className="ui dropdown" name="type" id="type" value={this.state.input} onChange={this.handleInputChange}>
                  <option value="all">ALL</option>
                  <option value='weightAsc'>Weight Ascending</option>
                  <option value='weightDesc'>Weight Descending</option>
                  <option value='over2lbs'>>2lbs</option>
            </select>
        </div>
      </div>
      )
  }
}


export default SortByGreasedBar
