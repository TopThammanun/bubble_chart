import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

interface DataItem {
  ticker: string
  price: number
  changeAmount: number
  changePercentage: number
  volume: number
  x?: number
  y?: number
  vx?: number
  vy?: number
  fx?: number | null
  fy?: number | null
}

interface BubbleChartProps {
  data: DataItem[]
}

const ChartContainer = styled.div`
  width: 100vw; // ปรับขนาดให้เต็มจอ
  height: 100vh; // ปรับขนาดให้เต็มจอ
  position: relative;
`

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Set dimensions ให้ขนาดเท่ากับหน้าจอ
    const width = window.innerWidth
    const height = window.innerHeight

    // Create SVG ที่ขนาดเต็มหน้าจอ
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`) // ตั้งค่าขนาด viewbox ให้เต็มจอ

    // Validate and sanitize data
    const sanitizedData = data.map(d => ({
      ...d,
      volume: isNaN(d.volume) || d.volume <= 0 ? 1 : d.volume
    }))

    // Define scales
    const minVolume = d3.min(sanitizedData, d => d.volume) || 1
    const maxVolume = d3.max(sanitizedData, d => d.volume) || 100

    // Handle case where min and max are equal
    const volumeDomain = minVolume === maxVolume ? [minVolume * 0.9, maxVolume * 1.1] : [minVolume, maxVolume]

    const sizeScale = d3.scaleSqrt().domain(volumeDomain).range([30, 120]) // เพิ่ม range ให้ใหญ่ขึ้นตามขนาดหน้าจอ

    // ใช้โทนสีมาตรฐานกราฟหุ้น สีแดงและสีเขียว
    const colorScale = d3.scaleLinear<string>().domain([-100, 0, 100]).range(['#FF4D4D', '#ffffff', '#4DFF4D']) // สีแดงสำหรับลดลง และ สีเขียวสำหรับเพิ่มขึ้น

    // Create defs for gradients and shadows
    const defs = svg.append('defs')

    // Create a drop shadow filter
    const filter = defs.append('filter').attr('id', 'drop-shadow').attr('height', '130%')

    filter.append('feGaussianBlur').attr('in', 'SourceAlpha').attr('stdDeviation', 3).attr('result', 'blur')

    filter.append('feOffset').attr('in', 'blur').attr('dx', 2).attr('dy', 2).attr('result', 'offsetBlur')

    const feMerge = filter.append('feMerge')

    feMerge.append('feMergeNode').attr('in', 'offsetBlur')
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic')

    // Create gradients for each bubble
    sanitizedData.forEach((d, i) => {
      const gradient = defs
        .append('radialGradient')
        .attr('id', `gradient-${i}`)
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('r', '50%')

      const bubbleColor = d3.color(colorScale(d.changePercentage)) || d3.color('#ffffff')

      if (bubbleColor) {
        gradient
          .append('stop')
          .attr('offset', '0%')
          .attr('stop-color', bubbleColor.brighter(0.5).toString()) // ใช้สีที่สดใสขึ้นเล็กน้อย
          .attr('stop-opacity', 0.8) // เพิ่มความทึบขึ้นเล็กน้อย

        gradient
          .append('stop')
          .attr('offset', '100%')
          .attr('stop-color', bubbleColor.darker(0.5).toString()) // ทำให้ขอบเข้มขึ้นเล็กน้อย
          .attr('stop-opacity', 0.6) // ความทึบที่ขอบ
      }
    })

    // Create nodes
    const node = svg
      .selectAll<SVGGElement, DataItem>('g')
      .data(sanitizedData)
      .enter()
      .append('g')
      .attr('class', 'node')
      .on('click', (_event, d) => {
        window.open(`https://www.example.com/stocks/${d.ticker}`, '_blank')
      })

    node
      .append('circle')
      .attr('r', d => sizeScale(d.volume))
      .attr('fill', (_d, i) => `url(#gradient-${i})`)
      .attr('stroke', '#ddd') // ใช้เส้นขอบสีเทาอ่อน
      .attr('stroke-width', 0.5)
      .attr('opacity', 0.9) // ให้บับเบิ้ลดูมีความทึบมากขึ้นเล็กน้อย
      .attr('filter', 'url(#drop-shadow)')

    node
      .append('text')
      .attr('dy', '.3em')
      .attr('text-anchor', 'middle')
      .style('pointer-events', 'none')
      .style('fill', '#000') // ข้อความสีดำเพื่อให้ดูชัดเจน
      .selectAll('tspan')
      .data(d => [d.ticker, `${d.changePercentage.toFixed(2)}%`])
      .enter()
      .append('tspan')
      .attr('x', 0)
      .attr('dy', (_d, i) => (i === 0 ? '0' : '1.2em'))
      .style('font-size', (_d, i) => (i === 0 ? '14px' : '12px'))
      .text(d => d)

    // Tooltip
    const tooltip = d3
      .select(tooltipRef.current)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.7)')
      .style('color', '#fff')
      .style('padding', '5px 10px')
      .style('border-radius', '4px')
      .style('pointer-events', 'none')
      .style('opacity', 0)

    node
      .on('mouseover', function (event, d) {
        d3.select(this).select('circle').attr('stroke-width', 2).attr('stroke', '#555') // ใช้เส้นขอบเข้มขึ้นเมื่อ hover

        tooltip
          .style('opacity', 1)
          .html(
            `<strong>${d.ticker}</strong><br>Price: $${d.price}<br>Change: ${d.changePercentage.toFixed(
              2
            )}%<br>Volume: ${d.volume.toLocaleString()}`
          )
      })
      .on('mousemove', event => {
        tooltip.style('left', event.pageX + 10 + 'px').style('top', event.pageY - 28 + 'px')
      })
      .on('mouseout', function () {
        d3.select(this).select('circle').attr('stroke-width', 0.5).attr('stroke', '#ddd')

        tooltip.style('opacity', 0)
      })

    // Create simulation with closer spacing
    const simulation = d3
      .forceSimulation<DataItem>(sanitizedData)
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force(
        'collision',
        d3.forceCollide().radius((d: any) => sizeScale(d.volume) + 5) // ให้บับเบิ้ลอยู่ใกล้กันขึ้น
      )
      .force('charge', d3.forceManyBody().strength(-50))
      .force('x', d3.forceX(width / 2).strength(0.02))
      .force('y', d3.forceY(height / 2).strength(0.02))
      .alphaDecay(0) // ให้การเคลื่อนไหวเป็นไปอย่างต่อเนื่อง
      .on('tick', ticked)

    function oscillationForce() {
      return function (alpha: number) {
        const k = 0.005 // เคลื่อนไหวช้าลงเล็กน้อยเพื่อความ smooth
        const t = Date.now() / 1000
        sanitizedData.forEach((d: any, i) => {
          const sizeFactor = sizeScale(d.volume) / 80
          d.vx += k * sizeFactor * Math.sin(t + i) * alpha
          d.vy += k * sizeFactor * Math.cos(t + i) * alpha
        })
      }
    }

    simulation.force('oscillation', oscillationForce())

    function ticked() {
      node.attr('transform', d => {
        const x = d.x !== undefined ? d.x : width / 2
        const y = d.y !== undefined ? d.y : height / 2
        return `translate(${x},${y})`
      })
    }

    return () => {
      simulation.stop()
      svg.remove()
    }
  }, [])

  return (
    <ChartContainer ref={chartRef}>
      <div ref={tooltipRef}></div>
    </ChartContainer>
  )
}

export default BubbleChart
