export default function Navbar({ children }) {
  return(
    <nav>
      <h1>{ children }</h1>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
    </nav>
  )
}