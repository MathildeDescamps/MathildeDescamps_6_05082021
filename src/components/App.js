import Header from './Header';
import Photographes from './Photographes';
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

  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
        <Route exact path="/">
          <Header />
          <Photographes url={publicUrl} photographers={photographers}/>
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
