
import React, { useEffect, useRef } from 'react';

interface GraphDataItem {
  x: string;
  y: string;
  color: string;
}

interface GraphTestProps {
  data: GraphDataItem[];
}

const GraphTest: React.FC<GraphTestProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const allowedValues: string[] = ['0', '1a', '1b', '2a', '2b', '3a', '3b', '3c', '3d', '3e', '4a', '4b', '4c', '4d'];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drawCanvas = () => {
      const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
      canvas.width = ref.current?.offsetWidth as number;
      canvas.height = ref.current?.offsetHeight as number;
      const context = canvas.getContext('2d');

      if (!context) return;

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
    context.fillText('Information', canvas.width - arrowSize * 2 - 40, canvas.height - marginBottom - arrowSize);

    // Draw y-axis title
    context.font = '14px serif';
    context.fillStyle = 'black';
    context.fillText('P.M', marginLeft - arrowSize - 15, arrowSize + 15);

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
      const y = canvas.height - marginBottom - index * (chartHeight / allowedValues.length);
      context.font = '12px serif';
      context.fillStyle = 'black';

      context.fillText(item, x, y);

      // Draw dash line
      context.beginPath();
      context.moveTo(marginLeft, y);
      context.lineTo(canvas.width - arrowSize - 40, y);
      context.stroke();
    });

    data.forEach((item) => {
      const xIndex = allowedValues.indexOf(item.x);
      const yIndex = allowedValues.indexOf(item.y) + 1;
      const x = marginLeft + (xIndex * chartWidth) / allowedValues.length;
      const y = marginBottom + (1 - yIndex / allowedValues.length) * chartHeight;
      const color = item.color;

      context.fillStyle = color;
      if (item.x && item.y) {
        context.fillRect(x - 10, y + 30, 20, 20);
      }
    });
  };
  drawCanvas();
    const handleResize = () => {
      drawCanvas();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  // resise event listener

  return (
    <div className='w-10/12 h-full min-h-screen' ref={ref}>
      <canvas ref={canvasRef} width={ref.current?.offsetWidth} height={ref.current?.offsetHeight} />
    </div>
  );
};

export default GraphTest;