

const ExponentFive = ({count}) => {
  const result = Math.pow(count, 5);
   return (
   <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}⁵ = {count} * {count} * {count} * {count} * {count}
      </p>
    <p className="exponent-result">
      
      Result: = <span className="total">{result}</span></p>
  </div>
   )
  }

export default ExponentFive;