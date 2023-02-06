
//
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import RoutesList from "./Routes";


function App()
    {
    return(
        <div className="App">
            <Header/>
                <RoutesList />
            <Footer/>
        </div>
    )
    }

    export default App;