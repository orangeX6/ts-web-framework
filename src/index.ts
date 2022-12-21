import { User } from './models/User';

const user = User.buildUser({ id: 1 });
console.log(user);

user.on('change', () => {
  console.log(user);
});

console.log(user.get('id'));
console.log(user.get('name'));
// user.save();
user.fetch();
