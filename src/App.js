import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            let Layout;
            if (!route.hasOwnProperty('layout')) {
              Layout = DefaultLayout;
            }
            else {
              const lay = route.layout;

              if (lay === null) {
                Layout = Fragment;
              }
              else {
                Layout = lay;
              }
            }

            return <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
