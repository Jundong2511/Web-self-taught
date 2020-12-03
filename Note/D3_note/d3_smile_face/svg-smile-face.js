
const svg = d3.select('svg')
const width = +svg.attr('width') // + means make str into a number same as parseFloat
const height = +svg.attr('height')
const centerW = width / 2
const centerH = height / 2
const eyeOffX = 130
const eyeOffY = 60
const eyebrowOffX = 150
const eyebrowOffY = 140
const face = svg.append('circle')
    .style('fill', "#9c9c14")
    .attr('r', 300)
    .attr("cx", centerW)
    .attr("cy", centerH)
const eyeG = svg.append("g")
    .attr('transform', `translate(0,${centerH - eyeOffY})`)

const leftEye = eyeG.append('circle')
    .attr('r', 30)
    .attr('cx', centerW - eyeOffX)

const rightEye = eyeG.append('circle')
    .attr('r', 30)
    .attr('cx', centerW + eyeOffX)

const eyebrowG = svg.append('g')
    .attr('transform', `translate(0,${centerH - eyebrowOffY})`)
eyebrowG.transition().duration(1000)
    .attr("transform", `translate (0,${centerH - eyebrowOffY - 30})`)
    .transition().duration(1000)
    .attr("transform", `translate (0,${centerH - eyebrowOffY})`)
const leftEyebrow = eyebrowG.append('rect')
    .attr('width', "100")
    .attr("height", "10")
    .attr("x", centerW - eyebrowOffX)



const rightEyebrow = eyebrowG
    .append('rect')
    .attr('width', "100")
    .attr("height", "10")
    .attr("x", centerW + eyebrowOffX - 40)


const mouth = svg.append('path')
    .attr('d', d3.arc()({
        innerRadius: 130,
        outerRadius: 150,
        startAngle: Math.PI * 0.5,
        endAngle: Math.PI * 1.57
    }))
    .attr('transform', `translate(${centerW},${centerH + 70})`)
