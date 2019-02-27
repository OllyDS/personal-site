import * as d3 from 'd3'
// import jsonData from '../playgroundComponents/donutData'

let fetchedData = []

const githubDataP1 = () => fetch("https://api.github.com/user/repos?per_page=100", {
  headers: {
    Authorization: "token 74769b86ebcce2cb704b4be6666c88dba993656d"
  }
}).then(resp => resp.json())

const githubDataP2 = () => fetch("https://api.github.com/user/repos?per_page=100&page=2", {
  headers: {
    Authorization: "token 74769b86ebcce2cb704b4be6666c88dba993656d"
  }
}).then(resp => resp.json())

const githubDataP3 = () => fetch("https://api.github.com/user/repos?per_page=100&page=3", {
  headers: {
    Authorization: "token 74769b86ebcce2cb704b4be6666c88dba993656d"
  }
}).then(resp => resp.json())

const dataFetch = () => {
    githubDataP1().then(data => data.map(repo => fetchedData.push(repo.language)))
    githubDataP2().then(data => data.map(repo => fetchedData.push(repo.language)))
    githubDataP3().then(data => data.map(repo => fetchedData.push(repo.language)))
}

dataFetch()
console.log("fetchedData:", fetchedData)

const drawDonut = async () => {

    // The below works when done in the console (copy&paste all code) but doesn't here, indicating it's firing too quickly!
    const data = await [
        { name: "JavaScript", count: 90 },
        { name: "TypeScript", count: fetchedData.filter(lang => lang === "TypeScript").length },
        { name: "Ruby", count: fetchedData.filter(lang => lang === "Ruby").length },
        { name: "HTML", count: fetchedData.filter(lang => lang === "HTML").length },
        { name: "CSS", count: fetchedData.filter(lang => lang === "CSS").length }
    ]

    await console.log(data)

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
        .value(data => data.count)
    
    // Now that we have the start/end angles from .pie() we can draw them out:
    const arcPath = d3.arc()
        .outerRadius(dimensions.radius)
        .innerRadius(dimensions.radius / 2)

    // THE BELOW IS A DYNAMIC WAY OF COLOURING THE DONUT, BUT I PREFERRED SPECIFIC COLOURS FOR THIS.
    
    // calls on d3 to supply an array of colors using 'ordinal scale'.
    const color = d3.scaleOrdinal(d3['schemeSet3'])
    
    // grab the static data:    
    color.domain(data.map(el => el.color))


    // assign the graph path elements to paths variable.
    const paths = graph.selectAll('path')
        .data(pie(data))
        
    const arcTweenEnter = d => {
        let i = d3.interpolate(d.endAngle, d.startAngle)
        return function(t) {
            d.startAngle = i(t)
            return arcPath(d)
        }
    }

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        // .attr('d', arcPath)
        .attr('stroke', '#000')
        .attr('stroke-width', 2)
        .attr('fill', color)
        .transition().duration(1000)
            .attrTween("d", arcTweenEnter)
 
}
export default drawDonut

// GET REPO DATA FROM GITHUB.
// COUNT REPOS FROM EACH LANG.
// CREATE DONUT CHART BASED ON THESE NUMBERS.