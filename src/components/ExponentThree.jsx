const ExponentThree = ({count}) => {
  const result = Math.pow(count, 3);
   return (
   <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}³ = {count} * {count} * {count}
      </p>
    <p className="exponent-result">
      
      Result: = <span className="total">{result}</span></p>
  </div>
   )
  }

export default ExponentThree;