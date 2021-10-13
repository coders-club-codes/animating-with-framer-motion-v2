import { ReactNode, useState } from 'react';

const routes: Record<number, ReactNode> = {
  0: null,
  1: null,
  2: null,
};

const App = () => {
  const [route, setRoute] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setRoute(1)}>
        Next
      </button>

      {routes[route]}
    </div>
  );
};

export default App;
