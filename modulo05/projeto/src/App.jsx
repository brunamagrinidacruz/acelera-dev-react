import React from 'react';

import Topbar from './components/Topbar.jsx'
import Filters from './components/Filters.jsx'
import Contacts from './components/Contacts.jsx'

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Filters/>
        <Contacts/>
      </React.Fragment>
    )
  }
}

export default App;
