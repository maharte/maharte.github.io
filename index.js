const { streets } = require('./streets.json');

d3.json("temp.json", function(error, data){
    //use data here
})

const createMap = () => {
    const svg = d3.select('#pump_map')
    streets.each((seg) => {
        svg.append('line')
            .style("stroke", "lightgreen")
            .style("stroke-width", 10)
            .attr("x1", seg[0]['x'])
            .attr("y1", seg[0]['y'])
            .attr("x2", seg[1]['x'])
            .attr("y2", seg[1]['y'])
    })
}


