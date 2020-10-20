import React, { Component } from 'react';

 class App extends Component {
   render(){
     return(
       <React.Fragment>
       <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          Product List
        </main>
        <footer>
          All right is reserve.
        </footer>
       </div>
       </React.Fragment>
     )
   }
 }
export default App;