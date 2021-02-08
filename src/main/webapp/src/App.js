import Main from './Main';
import College from './College';
import Questions from './Questions';
import Result from './Result';
import {Route, Switch} from "react-router-dom";


function App() {
    return (
        < Switch >
        < Route
    path = "/"
    component = {Main}
    exact / >
    < Route
    path = "/college"
    component = {College}
    exact / >
    < Route
    path = "/questions"
    component = {Questions}
    />
    < Route
    path = "/result"
    component = {Result}
    />
    < /Switch>
)
    ;
}

export default App;
