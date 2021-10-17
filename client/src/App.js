import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import DownloadPage from './pages/DownloadPage';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/downloads/:uuid" exact component={DownloadPage} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
