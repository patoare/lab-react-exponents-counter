
const ExponentTwo = ({count}) => {
  const result = Math.pow(count, 2);
   return (
   <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}² = {count} * {count}
      </p>
    <p className="exponent-result">
      
      Result: = <span className="total">{result}</span></p>
  </div>
   )
  }

export default ExponentTwo;