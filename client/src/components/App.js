import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './Menu';
import Play from './Play';
import Settings from './Settings';
import Rules from './Rules';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener('resize', isPortrait);
    return () => window.removeEventListener('resize', isPortrait);
  });

  const isPortrait = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  if (height > width) {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Menu} />
          <Route exact path="/Play" component={Play} />
          <Route exact path="/Rules" component={Rules} />
          <Route exact path="/Settings" component={Settings} />
        </div>
      </BrowserRouter>
    );
  } else {
    return <div>Wut</div>;
  }
}

export default App;

/*render() {
  
      return (
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Menu} />
            <Route exact path="/Play" component={Play} />
            <Route exact path="/Rules" component={Rules} />
            <Route exact path="/Settings" component={Settings} />
          </div>
        </BrowserRouter>
      );
    }
  }
}*/
