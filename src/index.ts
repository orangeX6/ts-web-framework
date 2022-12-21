import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Nami', age: 25 });
// Putting ! to let ts know that this element will always be present and never be null
const userForm = new UserForm(document.getElementById('root')!, user);
userForm.render();
//Alternatively
// const root = document.querySelector('root');
// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render()
// } else {
//   throw new Error('Root element not found!');
// }
