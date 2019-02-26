import React from 'react'
import drawDonut from './drawDonut'

export default class DonutChart extends React.Component {
    
    componentDidMount() {
        drawDonut(this.props)
    }    
    
    render() {
        return(
            <div className="donut-chart" />
        )
    }
}