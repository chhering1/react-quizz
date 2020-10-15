import React from 'react';
import { render } from "react-dom";
import Main from "./Components/Main";



const App = () => {
    return (
        <>
         <Main>
          </Main>
          </>
    );
};
render(<App />, document.querySelector("#root"));
