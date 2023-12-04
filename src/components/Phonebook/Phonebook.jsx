import React from 'react';


export class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form>
          <input type="text" name="name" required />
          <button>Add contact</button>
        </form>
        <h2>Phonebook</h2>

      </>
    )
  }
}
