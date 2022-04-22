import Home from './Home';
import Banner from './Banner';
import Photograph from './Photograph';
import data from '../data/data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const photographers = data.photographers;
  const medias = data.media;
  let publicUrl =  process.env.PUBLIC_URL;
  console.log(publicUrl);

  return (
    <Router basename='/'>
      <div className="App">
      </div>
      <Switch>
        <Route exact path="/">
          <Home url={publicUrl} photographers={photographers}/>
        </Route>
        <Route path='/profile/:profileId'>
          <Banner />
          <Photograph url={publicUrl} photographers={photographers} medias={medias}/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
