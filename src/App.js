import './App.css';
import Map from "./Components/Map"
import { useJsApiLoader } from "@react-google-maps/api"
import { myoption } from './Components/MapComponent';


function App() {
  const { isLoaded } = useJsApiLoader({
    id: myoption.googleMapApiKey,
    googleMapsApiKey: myoption.googleMapApiKey
  })

  return (
    <div className="App">
      <Map isLoaded={isLoaded}/>
    </div>
  );
}

export default App;
