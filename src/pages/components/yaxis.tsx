

const Yaxis = (props: any) => {
    const { yScale, innerWidth, tickOffset } = props;
    return yScale.ticks().map((tickValue: any) => (
        <g className="tick" key={tickValue} transform={`translate(0,${yScale(tickValue)})`}>
        <line x2={innerWidth} />
        <text
            style={{ textAnchor: 'end' }}
            x={-tickOffset}
            dy=".32em"
        >
            {tickValue}
        </text>
        </g>
    ));
    }
export default Yaxis;