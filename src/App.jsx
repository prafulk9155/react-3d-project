
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './component/Experience'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
