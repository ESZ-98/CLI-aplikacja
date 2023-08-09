const fs = require('node:fs').promises;
const path = require('node:path');
const contactsPath = path.join(__dirname, 'db', 'contacts.json');
const { nanoid } = require('nanoid');

async function getContactsJSON() {
  let contacts = [];
  await fs
    .readFile(contactsPath, 'utf8')
    .then(response => {
      contacts = JSON.parse(response);
    })
    .catch(error => console.log(error.message));
  return contacts;
}

async function listContacts() {
  const list = await getContactsJSON();
  console.log('Lista kontaktów:');
  console.table(list);
}

async function getContactById(contactId) {
  const contacts = await getContactsJSON();
  const matchingContact = contacts.filter(contact => contact.id === contactId);
  console.log('Otrzymany kontakt:');
  console.table(matchingContact);
}

async function removeContact(contactId) {
  const contacts = await getContactsJSON();
  const deletedContact = contacts.filter(contact => contact.id === contactId);
  const remainingContacts = contacts.filter(contact => contact.id !== contactId);
  console.log('Usunięto kontakt:');
  console.table(deletedContact);
  fs.writeFile(contactsPath, JSON.stringify(remainingContacts, null, 2));
  console.log('Lista kontaktów została zaktualizowana:');
  console.table(remainingContacts);
}

async function addContact(name, email, phone) {
  const contacts = await getContactsJSON();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts));
  console.log(`Dodano ${name} do listy kontaktów.`);
  console.log('Lista kontaktów została zaktualizowana:');
  console.table(contacts);
}

module.exports = { listContacts, getContactById, removeContact, addContact };
