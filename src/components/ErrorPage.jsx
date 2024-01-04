export default function ErrorPage({ children, setError }) {

  const handleReturn = () => {
    setError(null);
  }

  return(
    <div className="error">
      <h2>{children}</h2>
      <button onClick={handleReturn}>Return</button>
    </div>
    
  )
}