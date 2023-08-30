import Form from 'Form/Form';
import { Box } from './Box';
import React, { Component } from 'react';
// import ContactList from './Contacts/ContactList';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
 
  };

  componentDidMount() {
    // const contacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contacts);

    // if (parsedContacts) {
    //   this.setState({ contacts: parsedContacts });
    // }
  }

  componentDidUpdate(prevState) {
    // if (this.state.contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // }
  }

  // submitForm = (values, { resetForm }) => {
  //   // const oldContact = this.state.contacts.find(
  //   //   person => person.name.toLowerCase() === values.name.toLowerCase()
  //   // );

  //   // if (oldContact) {
  //   //   alert(` ${values.name} is already in contacts.`);
  //   //   return;
  //   // }

  //   // const person = {
  //   //   id: nanoid(),
  //   //   name: values.name,
  //   //   number: values.number,
  //   // };

  //   // this.setState(prevState => {
  //   //   return {
  //   //     contacts: [person, ...prevState.contacts],
  //   //   };
  //   // });
  //   // resetForm();
  // };

  // onDelete = id => {
  //   // this.setState(prevState => {
  //   //   return {
  //   //     contacts: prevState.contacts.filter(c => c.id !== id),
  //   //   };
  //   // });
  // };

  render() {
    return (
      <Box
        as="div"
        width="30%"
        display="flex"
        alignItems="center"
        justifyContent="left"
        flexDirection="column"
        color="accent"
        mt="3"
        ml="auto"
        mr="auto"
        bg="background"
        borderRadius="normal"
        boxShadow="4px 11px 49px 1px #d7dead"
      >
        {/* <h1>Phonebook</h1>
        <Form submitForm={this.submitForm} />

        {this.state.contacts.length > 0 && (
          <ContactList
            contactsInfo={this.state.contacts}
            deleteContact={this.onDelete}
          />
        )} */}
      </Box>
    );
  }
}

export default App;

{/* ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
  submitForm: PropTypes.func,
}; */}
