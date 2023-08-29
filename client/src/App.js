import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  window.onbeforeunload = function (e) {
    localStorage.clear();
  };
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
