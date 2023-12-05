import { StyledContactsList } from "components/Phonebook/Phonebook.styled"

export const ContactList = ({ filteredContacts }) => {
  return (
    <StyledContactsList>
      {filteredContacts.map(user => <li key={user.id}> {user.name}:{user.number}</li>)}
    </StyledContactsList>
  )
}