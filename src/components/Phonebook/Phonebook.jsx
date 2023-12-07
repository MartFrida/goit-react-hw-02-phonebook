import { nanoid } from 'nanoid';
import React from 'react';
import { StyledContactsSection, StyledWrapper } from './Phonebook.styled';
import { FilterUsers } from 'components/FilterUsers/FilterUsers';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

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
    filter: '',
  }
  handleAddUser = ({ name, number }) => {
    const isExist = this.state.contacts.some((item) => item.name === name)
    console.log();
    if (isExist) {
      alert('ALERT')

      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }]
    }
    ))
  }

  handleSetFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  handleDeleteUser = (id) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
  }

  render() {
    const { filter } = this.state;
    console.log(this.getFilteredContacts());

    return (
      <StyledWrapper >
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.handleAddUser} />

        <h2>Contacts</h2>
        <StyledContactsSection>
          <FilterUsers filter={filter} handleChangeInput={this.handleSetFilter} />
          <ContactList filteredContacts={this.getFilteredContacts()} onDeleteUser={this.handleDeleteUser} />
        </StyledContactsSection>

      </StyledWrapper>
    )
  }
}
