import Counter from "./pages/counter"
import RefExample from "./pages/use-ref"
import Users from "./pages/users"


function App() {

  return (
    <div className="container mx-auto">
      <h1>user list</h1>
      <Users />
      <hr className="my-1" />
      <Counter />
      <hr className="my-1" />
      <RefExample />
    </div>
  )
}

export default App
