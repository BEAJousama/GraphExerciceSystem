import React from "react";

const GridGraph = ({ data }: any) => {
    const maxX = Math.max(...data.map((item: any) => item.x));
    const maxY = Math.max(...data.map((item: any) => item.y));
  
    const renderGridCell = (x: number, y: number) => {
      const cellData = data.find((item: any) => item.x === x && item.y === y);
      if (cellData) {
        return (
          <div
            key={`${x}-${y}`}
            className={`col-span-1 p-4`}
            style={{
              background: cellData.color,
            }}
          ></div>
        );
      } else {
        return (
          <div
            key={`${x}-${y}`}
            className={`col-span-1 border border-gray-300 p-4`}
          ></div>
        );
      }
    };
  
    return (
      <div className="grid grid-cols-12 grid-rows-12">
        <h1 className="col-span-12 text-center">Grid Graph</h1>
        <div className="col-span-1"></div>
        {Array.from({ length: maxX + 1 }, (_, index) => (
          <div key={`x-${index}`} className="col-span-1 border-b border-gray-300 p-4">
            {index}
          </div>
        ))}
        {Array.from({ length: maxY + 1 }, (_, indexY) => (
          <React.Fragment key={`y-${indexY}`}>
            <div className="col-span-1 border-r border-gray-300 p-4">
              {indexY}
            </div>
            {Array.from({ length: maxX + 1 }, (_, indexX) =>
              renderGridCell(indexX, indexY)
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  export default GridGraph;