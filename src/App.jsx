import { Toaster } from "react-hot-toast";
import Routing from "./Routing";

function App() {
    return (
        <main>
            <Toaster position="bottom-center" toastOptions={{
                duration: 5000,
                style: {
                    border: '1px solid #fff',
                    background: '#060340',
                    color: '#fff',
                },
            }} />
            <Routing />
        </main>
    );
}

export default App;
