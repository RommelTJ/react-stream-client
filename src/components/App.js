import React from 'react';
import { BrowserRouter, HashRouter, MemoryRouter, Route, Link } from "react-router-dom";

// Temp
const PageOne = () => {
    return (
        <div>
            Page One
            <Link to="/pagetwo">Navigate to Page Two</Link>
        </div>
    );
};
const PageTwo = () => {
    return (
        <div>
            Page Two
            <button>Click me!</button>
            <Link to="/">Navigate to Page One</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <MemoryRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </MemoryRouter>

            {/*<HashRouter>*/}
                {/*<div>*/}
                    {/*<Route path="/" exact component={PageOne} />*/}
                    {/*<Route path="/pagetwo" component={PageTwo} />*/}
                {/*</div>*/}
            {/*</HashRouter>*/}

            {/*<BrowserRouter>*/}
                {/*<div>*/}
                    {/*<Route path="/" exact component={PageOne} />*/}
                    {/*<Route path="/pagetwo" component={PageTwo} />*/}
                {/*</div>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
};

export default App;
