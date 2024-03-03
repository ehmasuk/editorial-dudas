import { Toaster } from 'react-hot-toast';
import Routing from './Routing';


function App() {
  return (
    <main>
        <Toaster position='bottom-right' />
        <Routing/>
    </main>
  )
}

export default App