import React from 'react'

class SortByAlphaBar extends React.Component {
    constructor() {
        super()

        this.state = {
            input: ""
        }

    }


    handleChange = e => {
        const input = e.target.value
        this.setState({
            input
             })
        this.props.handleSort(e.target.value)
    }

    render() {
        return (
            <div>
                <select className="ui dropdown" name="type" id="type" value={this.state.input} onChange={this.handleChange}>
                  <option value="all">ALL</option>
                  <option value='sortAsc'>A-Z</option>
                  <option value="sortDesc">Z-A</option>
                </select>
            </div>
        )
    }
}

export default SortByAlphaBar
