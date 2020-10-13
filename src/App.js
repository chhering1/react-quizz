import React from "react";
import { render } from "react-dom";
import { Router} from "@reach/router";
import Main from "./Components/Main";
import Question from "./Components/Questions";

const App = () => {
    return (
        <>
         <Main>
                 <Router>
                    <Question path="/:name/*"/>
                </Router>

          </Main>
          </>
    );
};
render(<App />, document.querySelector("#root"));
