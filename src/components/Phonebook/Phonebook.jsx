import { nanoid } from 'nanoid';
import React from 'react';
import { StyledButton, StyledContactsList, StyledContactsSection, StyledContactsText, StyledInput, StyledPhonebook, StyledPhonebookForm, StyledWrapper } from './Phonebook.styled';

// додавання імені контакту та відображення списку контактів
//   - створити компонент класу Phonebook
//   - створити функцію, яка отримує name із інпуту handleChangeInput 
//   - створити функцію, яка додає обьект нового юзера (name та id) в массив контактів в стейт handleSubmitAddUser
//   - вивести масив контактів в Contacts 
// Крок 2 додавати номери телефонів
//   - додати в стейт змінну number
//   - розширити функцію handleChangeInput для number
// Крок 3 фільтрація списку контактів за ім'ям
//   - filter в стейті для проміжкового значення
//   - функцію для зміни поля фільтер, розширити функцію handleChangeInput для filter
//   - створити функцію для фільтрації
// Крок 4 в окремі компоненти
// Крок 5 Заборони додавати присутні контакти
// Крок 6 Дозволивши видаляти контакти з массиву

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  }

  handleSubmitAddUser = (e) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: prevState.name, number: prevState.number },],
      name: '',
      number: '',
    }))
  }

  handleChangeInput = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  render() {
    const { name, number, filter, contacts } = this.state;
    console.log(this.getFilteredContacts());
    const filteredContacts = this.getFilteredContacts();
    return (
      <StyledWrapper >
        <h2>Phonebook</h2>
        <StyledPhonebook>
          <StyledInput name="name" value={name} onChange={this.handleChangeInput} placeholder="Enter name" />
          <StyledInput name='number' value={number} onChange={this.handleChangeInput} placeholder="Enter phone number" />
          <StyledButton type='submit' onClick={this.handleSubmitAddUser}>Add contact</StyledButton>
        </StyledPhonebook>

        <h2>Contacts</h2>
        <StyledContactsSection>
          <StyledContactsText>Find contacts by name</StyledContactsText>
          <StyledInput name='filter' value={filter} onChange={this.handleChangeInput} placeholder='Enter user name'></StyledInput>
          <StyledContactsList>
            {filteredContacts.map(user => <li key={user.id}> {user.name}:{user.number}</li>)}
          </StyledContactsList>
        </StyledContactsSection>

      </StyledWrapper>
    )
  }
}
