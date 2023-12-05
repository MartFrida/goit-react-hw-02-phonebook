export const FilterUsers = (contactsList) => {
  return (<>
    <ul>
      {contactsList.map(contact => <li key={contact.id}>{contact}</li>)}
    </ul>

  </>)
}