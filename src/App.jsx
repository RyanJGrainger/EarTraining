import React from "react";
import ChordRecognition from "./Pages/ChordRecognition"
import ChordListen from "./Pages/ChordListen";
import IntervalRecognition from "./Pages/IntervalRecognition"
import Homepage from "./Pages/Homepage";
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";



function App(props){
    
    return (
        <Router>
            <div>
            <Header/>
            <Switch>
                <Route path="/" component={ChordListen} />
                <Route path="/homepage" exact component={Homepage} />
                <Route path="/interval-recognition" component={IntervalRecognition} />
                <Route path="/chord-recognition" component={ChordRecognition} />
            </Switch>
            <Footer/>
            </div>
        </Router>    
    );
}

export default App;


