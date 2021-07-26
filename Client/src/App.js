import './App.css';
import Table from '../src/table/table'
import { AllPiecesProvider } from "./Providers/AllPieces"

function App() {
  return (
    <div className="App">
      <AllPiecesProvider key={"PieceProvider"}>
      <Table />
      </AllPiecesProvider>
    </div>
  );
}

export default App;
