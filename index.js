const contactsService = require("./contacts");
const {program} = require("commander");


const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const contacts = await contactsService.listContacts();
           return console.log(contacts);
            
        case "add": 
        const newContact = await contactsService.addContact(name, email, phone);
        return console.log(newContact);
        
        case "remove":
            const deletedContact = await contactsService.removeContact(id);
            return console.log(deletedContact);
              
            default:
            console.log("Unknown action type!");
    }
}

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

  program.parse();

  const options = program.opts();
invokeAction(options);