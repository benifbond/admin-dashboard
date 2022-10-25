
import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts"

interface Props {
  currentColor: string
  id: "line-sparkline"
  type: "Line"
  height: string
  width: string
  color: string
  data: { x: number; yval: number }[]
}
const SparkLine = ({ id, height, width, color, currentColor, type, data }: Props) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName='y'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x}: data ${y}',
        trackLineSettings: {
          visible: true,
        }
      }}

    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine