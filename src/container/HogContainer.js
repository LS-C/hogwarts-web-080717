import React from 'react'
import Hogs from '../porkers_data'
import HogList from '../components/HogList'
import SortByAlphaBar from '../components/SortByAlphaBar'
import SortByGreasedBar from '../components/SortByGreasedBar'
import SelectMenuWrapper from '../styledComponents/SelectMenuWrapper'


class HogContainer extends React.Component {
    constructor() {
        super()

        this.state ={
            hogs: Hogs,
            options: "all",
            originalOrder: true,
            sortAsc: false,
            sortDesc: false
        }
    }


    handleSort = selectedOptions => {
        switch(selectedOptions) {
            case 'all':
                this.sortHogsOriginalOrder()
                break;
            case 'sortAsc':
                this.sortHogsAsc()
                break;
            case 'sortDesc':
                this.sortHogsDesc()
                break;
        }

    }

    sortHogsOriginalOrder() {
        this.setState({
            sortAsc: false,
            sortDesc: false,
            originalOrder: true

        })
    }

    sortHogsAsc() {
        this.setState({
            sortAsc: true,
            sortDesc: false,
            originalOrder: false

        })
    }

    sortHogsDesc() {
        this.setState({
            sortAsc: false,
            sortDesc: true,
            originalOrder: false
        })
    }

    render() {
        return (
            <div>
                    <SelectMenuWrapper>
                        <SortByAlphaBar handleSort={this.handleSort}/>
                        <SortByGreasedBar />
                    </SelectMenuWrapper>
                <HogList hogs={this.state.hogs} sortAsc={this.state.sortAsc} sortDesc={this.state.sortDesc} originalOrder={this.state.originalOrder}/>
            </div>
        )
    }
}

export default HogContainer


