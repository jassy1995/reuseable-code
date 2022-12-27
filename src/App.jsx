import Counter from "./pages/counter"
import Users from "./pages/users"


function App() {

  return (
    <div className="container mx-auto">
      <h1>user list</h1>
      <Users />
      <hr className="my-1" />
      <Counter />
    </div>
  )
}

export default App
