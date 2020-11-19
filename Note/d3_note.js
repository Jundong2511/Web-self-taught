// SVG stands for Scalable Vector Graphics.


d3.select("body")// select a element1
    .append("h2")// add a new element2 with text into selected element1
    .text("Learning D3");

d3.selectAll("li")// select all li elements and change the text to "list item"
    .text("list item");

d3.select("body").selectAll("h2") // can selectall the node that not exist yet
    .data(dataset) // select data array
    .enter() // eneter data arr
    .append("h2") // append xtime h2 if dataset has x elements
    .text("Work with Data"); // with text

d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((x) => x) // now the text in h2 is going to be the element in dataset
    .style("font-famliy", "verdana") // add css style() format is (" attribute "," value ")
    .style("color", (x) => { // can use callback function inside of style, give style depend onthe dataset
        return d < 20 ? "green" : "red"
    })
    .attr("class", "bar") // attr() can add attribute to the select element, like class or id or anything. 
    //("attribute","attribute")
    .style("height", (x) => (10 * x + "px")); // make div 10 times height of it original



const w = 500;
const h = 100;
const svg = d3.select("body")
    .append("svg")
    .style("width", w)
    .attr("height", h)
    .attr("x", 0) // positive number move svg to right, negative move to left
    .attr("y", 0)   // positive number move svg to DOWN, negative move to UP
//Note
//When using attr() width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.


const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500;
const h = 100;
const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30)// d is data point value, i is index of th data point in the array
    .attr("y", (d, i) => h - 3 * d)// this ganna place the bars right-side-up, use(y=h-m*d), make sure (m*d) is equal to "height"
    .attr("width", 25)
    .attr("height", (d, i) => d * 3)
    .attr("fill", "navy")// change the shape color 
    .attr("class", "bar") // add a bar class to rect, then at css style part, use .bar:hover{fill:brown} to change bar's color when hover 
    .append("title")// add title element to the bars
    .text(d => d); // title's text is elements in dataset, when hover on bar, show text
svg.selectAll("text") // add text on top of the bars
    .data(dataset)
    .enter()
    .append("text") // add text element
    .attr("x", (d, i) => i * 30) // push text to right
    .attr("y", (d, i) => h - 3 * d - 3) // -3 make sure the text display on top of the bars
    .text(d => d) // use elements in dataset as text
    .style("font-size", "25px")// change text font-size to 25px
    .attr("fill", "red");// change text color to red


// SVG circles

const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123]
];
// set up the circle's size
const w = 500;
const h = 500;
// set up circle's box
const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
// make all elements in dataset into single circle
svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    // cx and cy are the coordinates, r is circle's radius
    .attr("cx", (d, i) => d[0])// use first element in arr as cx
    .attr("cy", (d, i) => h - d[1]) // use second element in arr as cy, h-d[1] make right-side-up
    .attr("r", 5); // make all circles' radius 5
// add text to all circles
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("x", d => d[0] + 5) // text's x locate 5 rigth to circle
    .attr("y", d => h - d[1]) // text's y is same as circle's y
    .text(d => d[0] + ", " + d[1]); //text


//Linear Scale, domain and range with d3
// Set a domain
// The domain covers the set of input values
scale.domain([50, 480]);
// Set a range
// The range covers the set of output values
scale.range([10, 500]);
scale(50) // Returns 10
scale(480) // Returns 500
scale(325) // Returns 323.37
scale(750) // Returns 807.67
d3.scaleLinear()



// find the biggest and smallest on from array use d3
const positionData = [[1, 7, -4], [6, 3, 8], [2, 9, 3]]
const min3 = d3.min(positionData, d => d[0])
const max3 = d3.max(positionData, d => d[2])
const output = max3;
d3.select("body")
    .append("h2")
    .text(output);


//combined scaleLinear, domian, range, and min/max 

const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[0])]) // x domain is [0, biggest one on d[0] which is 420], means 0 is at left at padding position at x30, most rightside one is 420 at position x470 
    .range([padding, w - padding]); // x range is [30, 500-30]
const yScale = d3.scaleLinear()
    .domain([0, d3.max([dataset, d => d[1]])]) // y domain is [0, biggest one on d[1] which is 411] means 0 is at bottom at padding postion, y30, top one the 411 at top at padding position at y470
    .range([h - padding, padding]); // y range, higher number at [0] lower number at [1] to make sure right-side-up
const output = yScale(411); // returns 30
d3.select("body")
    .append("h2")
    .text(output)
