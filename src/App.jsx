import Counter from "./pages/counter"
import ImperativeExanple from "./pages/use-imperative"
import RefExample from "./pages/use-ref"
import Users from "./pages/users"
import ContextExample from "./pages/context"
import MemoExample from "./pages/use-memo"
import UseCallBackExample from "./pages/use-callback"


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
      <hr className="my-1" />
      <MemoExample />
      <hr className="my-1" />
      <UseCallBackExample />
    </div>
  )
}

export default App
