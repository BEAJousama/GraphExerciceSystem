

const Xaxis = (props) => {
    const { xScale, innerHeight, tickOffset } = props;
    return xScale.ticks().map((tickValue) => (
        <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
        <line y2={innerHeight} />
        <text
            style={{ textAnchor: 'middle' }}
            dy=".71em"
            y={innerHeight + tickOffset}
        >
            {tickValue}
        </text>
        </g>
    ));
    }
export default Xaxis;