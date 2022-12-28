import Counter from "./pages/counter"
import ImperativeExanple from "./pages/use-imperative"
import RefExample from "./pages/use-ref"
import Users from "./pages/users"
import ContextExample from "./pages/context"


function App() {

  return (
    <div className="container mx-auto">
      <h1>user list</h1>
      <Users />
      <hr className="my-1" />
      <Counter />
      <hr className="my-1" />
      <RefExample />
      <hr className="my-1" />
      <ImperativeExanple />
      <hr className="my-1" />
      <ContextExample />
    </div>
  )
}

export default App
