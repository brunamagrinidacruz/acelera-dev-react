import React from 'react';

import Topbar from './components/Topbar.jsx'
import Filters from './components/Filters.jsx'
import Contacts from './components/Contacts.jsx'
import './App.scss';

const URL = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      originalContacts: [],
      filters: {
        name: [],
        country: [],
        company: [],
        department: [],
        admissionDate: [],
      }
    }
  }

  async componentDidMount() {
    const response = await fetch(URL)
      .then(resp => resp.json())
      .then(data => data)

      let name = response.map((contact) => {
        return contact.name
      })

      let country = response.map((contact) => {
        return contact.country
      })

      let company = response.map((contact) => {
        return contact.company
      })

      let department = response.map((contact) => {
        return contact.department
      })

      let admissionDate = response.map((contact) => {
        return contact.admissionDate
      })

      this.setState({
        contacts: response,
        originalContacts: response,
        filters: {
          name,
          country,
          company,
          department,
          admissionDate,
        }
      })
  }

  updateContacts(contacts) {
    this.setState({
      contacts: contacts
    })
  }

  render() {
    return (
      <div data-testid="app" className="app">
          <Topbar/>
          <Filters contacts={this.state.originalContacts} updateContacts={this.updateContacts.bind(this)} filters={this.state.filters} />
          <Contacts data={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
