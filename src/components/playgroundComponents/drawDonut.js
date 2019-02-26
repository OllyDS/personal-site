import * as d3 from 'd3'
// import jsonData from '../playgroundComponents/donutData'

const data = [
    {
        name: "JavaScript",
        time: 42,
        color: "yellow"
    },
    {
        name: "Ruby",
        time: 28,
        color: "red"
    },
    {
        name: "SQL",
        time: 10,
        color: "orange"
    },
    {
        name: "NoSQL",
        time: 5,
        color: "green"
    },
    {
        name: "HTML/CSS",
        time: 15,
        color: "blue"
    }
]

const drawDonut = () => {

    const dimensions = { height: 400, width: 400, radius: 200 }
    const center = { x: (dimensions.width / 2 + 5), y: (dimensions.height / 2 + 5) }
    
    const svg = d3.select('.donut-chart')
        .append('svg')
        .attr('width', dimensions.width + 10)
        .attr('height', dimensions.height + 10)
    
    const graph = svg.append('g')
        .attr('transform', `translate(${center.x}, ${center.y})`)
    
    const pie = d3.pie()
        .sort(null)
        .value(data => data.time)
    
    // Now that we have the start/end angles from .pie() we can draw them out:
    const arcPath = d3.arc()
        .outerRadius(dimensions.radius)
        .innerRadius(dimensions.radius / 2)

    /* THE BELOW IS A DYNAMIC WAY OF COLOURING THE DONUT, BUT I PREFERRED SPECIFIC COLOURS FOR THIS.
    
    // calls on d3 to supply an array of colors using 'ordinal scale'.
    // const color = d3.scaleOrdinal(d3['schemeSet3'])
    
    // grab the static data:    
    // color.domain(data.map(el => el.color))

    END */

    // assign the graph path elements to paths variable.
    const paths = graph.selectAll('path')
        .data(pie(data))

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('d', arcPath)
        .attr('stroke', '#000')
        .attr('stroke-width', 2)
        .attr('fill', el => el.data.color)
 
}
export default drawDonut

// GET REPO DATA FROM GITHUB.
// COUNT REPOS FROM EACH LANG.
// CREATE DONUT CHART BASED ON THESE NUMBERS.