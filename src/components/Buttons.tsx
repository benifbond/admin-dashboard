import React from 'react'
interface Button {
  color: string,
  bgColor: string,
  text: string
  borderRadius: string,
  size: string
}
const Buttons = ({ bgColor, color, size, text, borderRadius }: Button) => {
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