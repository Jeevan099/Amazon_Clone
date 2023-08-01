// import React from 'react';
// import './App.css';
// import Header from './Header';
// import Home from './Home';
// import { BrowserRouter as Router, Switch, Route }
// from "react-router-dom"
// import Checkout from './Checkout';

// function App() {
//   return (
//     // BEM
//     <Router>
//       <div className="app">
//       <Header />
//         <Switch>
//           <Route path="/checkout">
//             <Checkout />
//           </Route>
//           <Route path="/">           
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { Suspense } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Lazy load components
const Home = React.lazy(() => import('./Home'));
const Checkout = React.lazy(() => import('./Checkout'));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
