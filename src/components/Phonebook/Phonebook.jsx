import { nanoid } from 'nanoid';
import React from 'react';
import { StyledButton, StyledInput, StyledPhonebook, StyledPhonebookForm, StyledWrapper } from './Phonebook.styled';

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
//   - функцію для зміни поля фільтер
//   - створити функцію для фільтрації
// Крок 4 в окремі компоненти
// Крок 5 Заборони додавати присутні контакти
// Крок 6 Дозволивши видаляти контакти з массиву

export class Phonebook extends React.Component {
  state = {
    contacts: [],
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

  render() {
    const { name, number, contacts } = this.state;

    return (
      <StyledWrapper >
        <h2>Phonebook</h2>
        <StyledPhonebook>
          <StyledInput name="name" value={name} onChange={this.handleChangeInput} placeholder="Enter name" />
          <StyledInput name='number' value={number} onChange={this.handleChangeInput} placeholder="Enter phone number" />
          <StyledButton type='submit' onClick={this.handleSubmitAddUser}>Add contact</StyledButton>
        </StyledPhonebook>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(user => <li key={user.id}> {user.name}:{user.number}</li>)}
        </ul>
      </StyledWrapper>
    )
  }
}
