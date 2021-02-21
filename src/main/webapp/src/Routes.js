import React from 'react';
import Main from './components/Main/Main';
import College from './components/College/College';
import Questions from './components/Questions/Questions';
import ISTJ from './components/Result/ISTJ';
import ENTJ from './components/Result/ENTJ';
import ENTP from './components/Result/ENTP';
import INTJ from './components/Result/INTJ';
import INTP from './components/Result/INTP';
import ESTJ from './components/Result/ESTJ';
import ISFJ from './components/Result/ISFJ';
import ENFJ from './components/Result/ENFJ';
import ENFP from './components/Result/ENFP';
import INFJ from './components/Result/INFJ';
import INFP from './components/Result/INFP';
import ESTP from './components/Result/ESTP';
import ESFP from './components/Result/ESFP';
import ISTP from './components/Result/ISTP';
import ISFP from './components/Result/ISFP';



import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";

function App() {
  return (
      <Switch >
        <Route path="/" component={Main} exact/>
        <Route path="/college" component={College} />
        <Route path="/questions" component={Questions} />
        <Route path="/result/0000" component={INFP} exact/>
        <Route path="/result/0001" component={INFJ} exact/>
        <Route path="/result/0010" component={INTP} exact/>
        <Route path="/result/0011" component={INTJ} exact/>
        <Route path="/result/0100" component={ISFP} exact/>
        <Route path="/result/0101" component={ISFJ} exact/>
        <Route path="/result/0110" component={ISTP} exact/>
        <Route path="/result/0111" component={ISTJ} exact/>
        <Route path="/result/1000" component={ENFP} exact/>
        <Route path="/result/1001" component={ENFJ} exact/>
        <Route path="/result/1010" component={ENTP} exact/>
        <Route path="/result/1011" component={ENTJ} exact/>
        <Route path="/result/1100" component={ESFP} exact/>
        {/* ESFJ */}
        <Route path="/result/1101" component={College} exact/>
        <Route path="/result/1110" component={ESTP} exact/>
        <Route path="/result/1111" component={ESTJ} exact/>


      </Switch>
  );
}

export default App;
