const Chat = require('./chat.js');

let chat;
let userPatri;
let userPaco;

beforeEach(() => {
  chat = new Chat('Holiii');

  userPatri = {
    name: "Patri",
    onMessage: jest.fn(), // () => {}
    newUserInChat: jest.fn(),
    userExitedFromChat: jest.fn(),
  };

  userPaco = {
    name: "Paco",
    onMessage: jest.fn(),
    newUserInChat: jest.fn(),
    userExitedFromChat: jest.fn(),
  };
})

test('notifies users when a message is sent with sendMessage()', () => {

  chat.addUser(userPatri);
  chat.addUser(userPaco);

  chat.sendMessage(userPatri, "Hola");

  expect(userPaco.onMessage).toBeCalled();
  expect(userPaco.onMessage).toBeCalledWith(chat.name, userPatri.name, "Hola");
  expect(userPatri.onMessage).not.toBeCalled();


  chat.sendMessage(userPaco, "Adios");

  expect(userPatri.onMessage).toBeCalled();
  expect(userPatri.onMessage).toBeCalledWith(chat.name, userPaco.name, "Adios");
});

test('notifies a new user has added with newUserInChat()', () => {

  chat.addUser(userPatri);
  chat.addUser(userPaco);

  expect(userPatri.newUserInChat).toBeCalled();
  expect(userPatri.newUserInChat).toBeCalledWith(chat.name, userPaco.name);
});

test('notifies a user has removed with userExitedFromChat()', () => {

  chat.addUser(userPatri);
  chat.addUser(userPaco);

  chat.removeUser(userPatri);

  expect(userPaco.userExitedFromChat).toBeCalled();
  expect(userPaco.userExitedFromChat).toBeCalledWith(chat.name, userPatri.name);
});
