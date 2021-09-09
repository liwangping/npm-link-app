import React from 'react';
import LinksForm from './components/LinksForm';
import './NpmLink.less';

function App() {
  return (
    <div className="app-page">
      {/* <TopBar /> */}
      <div className="app-container">
        <div className="npm-link-form-box">
          <LinksForm />
        </div>
      </div>
    </div>
  );
}

export default App;
