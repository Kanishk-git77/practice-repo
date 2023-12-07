import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const userInput = req.body;  
    const userID = uuidv4();
    const userWithId = { ...userInput, id: userID};
    users.push(userWithId);

    res.send(`User with First Name ${userInput.firstName} is stored into Database.`);
    console.log(userWithId);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundID = users.find((user) => user.id == id);
    
    res.send(foundID);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with ID ${id} has been deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const getUpdateId = users.find((user) => user.id == id);
    const { firstName, lastName, age } = req.body;

    if(firstName) {
        getUpdateId.firstName = firstName;
    }

    if(lastName) {
        getUpdateId.lastName = lastName;
    }

    if(age) {
        getUpdateId.age = age;
    }

    res.send(`User with the ${id} has been updated.`)
}