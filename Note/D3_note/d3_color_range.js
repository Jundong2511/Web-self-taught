/*  https://github.com/d3/d3-scale-chromatic#schemePastel1
use color as a range, first pick color Categorical from web from top,
make a colorScale, range as colors' number
then when fill the color, parseInt the scale result, select the result from colo range.
*/
const colorR = d3.schemeTableau10
const colorScale = d3.scaleLinear()
    .domain(d3.extent(monthlyVariance, x => x.variance))
    .range([0, 8])

const rects = rectsG.selectAll('rect')
    .data(data.monthlyVariance)
    .enter()
    .append('rect')
rects
    .attr('width', 4)
    .attr('height', 50)
    .attr("y", d => yScale(d.month))
    .attr("x", d => xScale(d.year))
    .attr('fill', d => colorR[parseInt(colorScale(d.variance))])



/*  https://github.com/d3/d3-scale-chromatic#schemePastel1
if use Diverging color, just simply set color range to  [0,1]
then pass a float to  d3.interpolateYlGn() then select color
*/
const colorScale = d3.scaleLinear()
    .domain(d3.extent(monthlyVariance, x => x.variance))
    .range([0, 1])

const rects = rectsG.selectAll('rect')
    .data(data.monthlyVariance)
    .enter()
    .append('rect')
rects
    .attr('width', 4)
    .attr('height', 50)
    .attr("y", d => yScale(d.month))
    .attr("x", d => xScale(d.year))
    .attr('fill', d => d3.interpolateYlGn(colorScale(d.variance)))