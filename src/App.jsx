import React from "react";
import ChordRecognition from "./Pages/ChordRecognition"
import ChordListen from "./Pages/ChordListen";
import IntervalRecognition from "./Pages/IntervalRecognition"
import Homepage from "./Pages/Homepage";
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App(props){
    
    return (
        <Router>
            <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/interval-recognition" component={IntervalRecognition} />
                <Route path="/chord-recognition" component={ChordRecognition} />
                <Route path="/chord-listen" component={ChordListen} />
            </Switch>
            </div>
        </Router>    
    );
}

export default App;


