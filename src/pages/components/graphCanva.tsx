// import React, { useEffect, useRef } from 'react';

// const GraphTest = ({ data }) => {
//   const canvasRef = useRef(null);
//   const allowedValues = ['0', '1a', '1b', '2a', '2b', '3a', '3b', '3c', '3d', '3e', '4a', '4b', '4c', '4d'];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const chartWidth = canvas.width - 40;
//     const chartHeight = canvas.height - 40;
//     const marginLeft = 40;
//     const marginBottom = 40;

//     // Clear canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw x-axis
//     context.beginPath();
//     context.moveTo(marginLeft, canvas.height - marginBottom);
//     context.lineTo(canvas.width, canvas.height - marginBottom);
//     context.stroke();

//     // Draw y-axis
//     context.beginPath();
//     context.moveTo(marginLeft, 0);
//     context.lineTo(marginLeft, canvas.height - marginBottom);
//     context.stroke();

//     // Draw x-axis title
//     context.fillText('Infos', canvas.width / 2, canvas.height - 10);

//     // Draw y-axis title
//     context.fillText('P.M', canvas.height, canvas.height / 2);

//     // Draw x-axis values
//     allowedValues.forEach((item, index) => {
//       const x = marginLeft + index * (chartWidth / allowedValues.length);
//       const y = canvas.height - marginBottom + 15;

//       context.fillText(item, x, y);
//     });

//     // Draw y-axis values
//     allowedValues.forEach((item, index) => {
//       const x = marginLeft - 30;
//       const y = canvas.height - marginBottom - index * (chartHeight / allowedValues.length);

//       context.fillText(item, x, y);
//     });

//     // Draw data points
//     data.forEach(item => {
//       const x = marginLeft + item.x * chartWidth;
//       const y = marginBottom + (1 - item.y) * chartHeight;

//       context.fillRect(x, y, 10, 10);
//     });

//   }, [data]);

//   return <canvas ref={canvasRef} width={800} height={800} />;
// };

// export default GraphTest;

// import React, { useEffect, useRef } from 'react';

// const GraphTest = ({ data }) => {
//   const canvasRef = useRef(null);
//   const allowedValues = ['0', '1a', '1b', '2a', '2b', '3a', '3b', '3c', '3d', '3e', '4a', '4b', '4c', '4d'];
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const chartWidth = canvas.width - 100;
//     const chartHeight = canvas.height - 100;
//     const marginLeft = 60;
//     const marginBottom = 60;
//     const arrowSize = 10;

//     // Clear canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw x-axis arrow
//     context.beginPath();
//     context.moveTo(marginLeft, canvas.height - marginBottom);
//     context.lineTo(canvas.width - arrowSize, canvas.height - marginBottom);
//     context.lineTo(canvas.width - arrowSize * 2, canvas.height - marginBottom + arrowSize);
//     context.lineTo(canvas.width - arrowSize, canvas.height - marginBottom);
//     context.lineTo(canvas.width - arrowSize * 2, canvas.height - marginBottom - arrowSize);
//     context.strokeStyle = 'black';
//     context.lineWidth = 2;
//     context.stroke();

//     // Draw y-axis arrow
//     // Draw y-axis arrow
//     context.beginPath();
//     context.moveTo(marginLeft, marginBottom);
//     context.lineTo(marginLeft, 0);
//     context.lineTo(marginLeft - arrowSize, arrowSize * 2);
//     context.lineTo(marginLeft, 0);
//     context.lineTo(marginLeft + arrowSize, arrowSize * 2);
//     context.strokeStyle = 'black';
//     context.lineWidth = 2;
//     context.stroke();

//     // Draw x-axis title
//     context.font = '14px serif';
//     context.fillStyle = 'blue';
//     context.fillText('Infos', canvas.width - arrowSize * 2, canvas.height - marginBottom - arrowSize);

//     // Draw y-axis title
//     context.font = '14px serif';
//     context.fillStyle = 'blue';
//     context.fillText('P.M', marginLeft - arrowSize - 15, arrowSize);

//     // Draw x-axis values
//     allowedValues.forEach((item, index) => {
//       const x = marginLeft + index * (chartWidth / allowedValues.length);
//       const y = canvas.height - marginBottom + 15;
//       context.font = '12px serif';
//       context.fillStyle = 'black';
//       context.fillText(item, x, y);

//       // Draw dash line
//       context.beginPath();
//       // context.setLineDash([9, 9]); // Set dash pattern
//       context.moveTo(x, 0);
//       context.lineTo(x, canvas.height - marginBottom);
//       context.stroke();
//     });

//     // Draw y-axis values
//     allowedValues.forEach((item, index) => {
//       const x = marginLeft - 30;
//       const y = canvas.height - marginBottom - index * (chartHeight / allowedValues.length);
//       // context.strokeStyle = 'black';
//       // context.lineWidth = 3;
//       context.font = '12px serif';
//       context.fillStyle = 'black';

//       context.fillText(item, x, y);

//       // Draw dash line
//       context.beginPath();
//       // context.setLineDash([5, 5]); // Set dash pattern
//       context.moveTo(marginLeft, y);
//       context.lineTo(canvas.width - arrowSize, y);
//       context.stroke();
//     });

//     data.forEach(item => {
//       const xIndex = allowedValues.indexOf(item.x);
//       const yIndex = allowedValues.indexOf(item.y) + 1;
//       const x = marginLeft + xIndex * (chartWidth / allowedValues.length);
//       const y = marginBottom + (1 - yIndex / allowedValues.length) * chartHeight;
//       const color = item.color;
      
//       context.fillStyle = color;
//       if (item.x  && item.y)
//         context.fillRect(x - 10, y - 15, 20, 20);
//     });

//   }, [data]);

//   return <canvas ref={canvasRef} width={820} height={820} />;
// };

// export default GraphTest;
import React, { useEffect, useRef } from 'react';

const GraphTest = ({ data }) => {
  const canvasRef = useRef(null);
  const allowedValues = ['0', '1a', '1b', '2a', '2b', '3a', '3b', '3c', '3d', '3e', '4a', '4b', '4c', '4d'];
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const chartWidth = canvas.width - 100;
    const chartHeight = canvas.height - 100;
    const marginLeft = 60;
    const marginBottom = 60;
    const arrowSize = 10;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw x-axis arrow
    context.beginPath();
    context.moveTo(marginLeft, canvas.height - marginBottom);
    context.lineTo(canvas.width - arrowSize - 40, canvas.height - marginBottom);
    context.lineTo(canvas.width - arrowSize * 2 - 40, canvas.height - marginBottom + arrowSize);
    context.lineTo(canvas.width - arrowSize - 40, canvas.height - marginBottom);
    context.lineTo(canvas.width - arrowSize * 2 - 40, canvas.height - marginBottom - arrowSize);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke();

    // Draw y-axis arrow
    context.beginPath();
    context.moveTo(marginLeft, marginBottom);
    context.lineTo(marginLeft, 0 + 40);
    context.lineTo(marginLeft - arrowSize, arrowSize * 2 + 40);
    context.lineTo(marginLeft, 0 + 40);
    context.lineTo(marginLeft + arrowSize, arrowSize * 2 + 40);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke();

    // Draw x-axis title
    context.font = '14px serif';
    context.fillStyle = 'black';
    context.fillText('Informtion', canvas.width - arrowSize * 2 - 40, canvas.height - marginBottom - arrowSize);

    // Draw y-axis title
    context.font = '14px serif';
    context.fillStyle = 'black';
    context.fillText('P.M', marginLeft - arrowSize - 15, arrowSize + 15 );

    // Draw x-axis values
    allowedValues.forEach((item, index) => {
      const x = marginLeft + index * (chartWidth / allowedValues.length);
      const y = canvas.height - marginBottom + 15;
      context.font = '12px serif';
      context.fillStyle = 'black';
      context.fillText(item, x, y + 15);

      // Draw dash line
      context.beginPath();
      context.moveTo(x, 0 + 40);
      context.lineTo(x, canvas.height - marginBottom);
      context.stroke();
    });

    // Draw y-axis values
    allowedValues.forEach((item, index) => {
      const x = marginLeft - 30;
      const y = (canvas.height - marginBottom - index * (chartHeight / allowedValues.length));
      context.font = '12px serif';
      context.fillStyle = 'black';

      context.fillText(item, x, y);

      // Draw dash line
      context.beginPath();
      context.moveTo(marginLeft, y);
      context.lineTo(canvas.width - arrowSize - 40, y);
      context.stroke();
    });

    data.forEach(item => {
      const xIndex = allowedValues.indexOf(item.x);
      const yIndex = allowedValues.indexOf(item.y) + 1;
      const x = marginLeft + xIndex * (chartWidth / allowedValues.length);
      const y = marginBottom + (1 - yIndex / allowedValues.length) * chartHeight;
      const color = item.color;
      
      context.fillStyle = color;
      if (item.x  && item.y)
        context.fillRect(x - 10, y + 25, 20, 20);
    });

  }, [data]);

  return <canvas ref={canvasRef} width={860} height={860} />;
};

export default GraphTest;