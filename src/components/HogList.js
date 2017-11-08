import React from 'react'
import Hog from './Hog'
import _ from 'lodash'


class HogList extends React.Component {
    constructor() {
        super()

        this.state = {
            sortedHogsAsc: [],
            sortedHogsDesc: []

        }
    }

    // sortAsc(a, b) {
    //   // Use toUpperCase() to ignore character casing
    //   const nameA = a.name.toUpperCase();
    //   const nameB = b.name.toUpperCase();

    //   let comparison = 0;
    //   if (nameA > nameB) {
    //     comparison = 1;
    //   } else if (nameA < nameB) {
    //     comparison = -1;
    //   }
    //   return comparison;
    // }

    render() {
        const sortedHogsAsc = [...this.props.hogs].sort(this.sortAsc);
        const sortedHogsDesc = [...this.props.hogs].sort(this.sortAsc).reverse()

        const a =_.sortBy([...this.props.hogs], 'weight').reverse()
        console.log(a)


        const aToZHogs = sortedHogsAsc.map(prettyHog => {
           return (
                <Hog hog={prettyHog} />
            )
        })
        const zToAHogs = sortedHogsDesc.map(prettyHog => {
           return (
                <Hog hog={prettyHog} />
            )
        })

        const prettyHogs = this.props.hogs.map( prettyHog => {
            return (
                <Hog hog={prettyHog} />
            )
        })

        return (
            <div>
                {this.props.originalOrder ? prettyHogs : null }
                {this.props.sortAsc ? aToZHogs : null }
                {this.props.sortDesc ? zToAHogs : null }


            </div>
        )
    }
}






export default HogList
