import DataForm from "./components/DataIForm/DataForm";
import './App.css';
import RenderData from "./components/RenderData/RenderData";

const data = [
    {
        date : '23 Dec 2017',
        item: 'Food',
        price: 23
    },
    {
        date : '19 Aug 2017',
        item: 'Mobile',
        price: 27
    },
    {
        date : '23 Dec 2017',
        item: 'Laptop',
        price: 31
    },
]
function App() {


    return (
    <div className="app">
        <DataForm/>
    </div>
  );
}

export default App;
