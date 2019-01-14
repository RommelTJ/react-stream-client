import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

// Temp
const PageOne = () => {
    return (
        <div>
            Page One
            <a href="/pagetwo">Navigate to Page Two</a>
        </div>
    );
};
const PageTwo = () => {
    return (
        <div>
            Page Two
            <button>Click me!</button>
            <a href="/">Navigate to Page One</a>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
