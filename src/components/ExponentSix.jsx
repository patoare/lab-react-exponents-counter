
const ExponentSix = ({count}) => {
  const result = Math.pow(count, 6);
   return (
   <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}⁶ = {count} * {count} * {count} * {count} * {count} * {count}
      </p>
    <p className="exponent-result">
      
      Result: = <span className="total">{result}</span></p>
  </div>
   )
  }

export default ExponentSix;

