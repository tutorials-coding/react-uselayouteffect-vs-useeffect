import React from 'react'
import './RecursiveRectangle.css'

export const RecursiveRectangle = ({
  children,
  colorMap,
  sizePx = 200,
  stepPx = 7,
  index = 0,
}) => {
  return (
    <div
      className="rect-base-class"
      style={{
        backgroundColor: colorMap[index],
        width: `${sizePx}px`,
        height: `${sizePx}px`,
        borderRadius: '5px',
      }}
    >
      {index === colorMap.length - 1 ? (
        children
      ) : (
        <RecursiveRectangle
          colorMap={colorMap}
          index={index + 1}
          sizePx={sizePx - stepPx}
          stepPx={stepPx}
          children={children}
        />
      )}
    </div>
  )
}
