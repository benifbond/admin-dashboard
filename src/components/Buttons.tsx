import React from 'react'
interface ButtonProps {
  color: string,
  bgColor?: string,
  text?: string
  borderRadius: string,
  size?: string
  width?: string
  icon?: React.ReactElement,
  bgHoverColor?: string
}
const Buttons = ({ bgColor, color, size, text, borderRadius }: ButtonProps) => {
  return (
    <button type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Buttons