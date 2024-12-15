
const ExponentFour = ({count}) => {
  const result = Math.pow(count, 4);
   return (
   <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}⁴ = {count} * {count} * {count} * {count}
      </p>
    <p className="exponent-result">
      
      Result: = <span className="total">{result}</span></p>
  </div>
   )
  }

export default ExponentFour;