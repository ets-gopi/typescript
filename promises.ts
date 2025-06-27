import { resolve } from 'path';

// user Register flow
type User = { email: string; password: string };
type UserResponse = { status: string; error?: string; success?: string } | null;

// function registerUser(data: User, callback: (response: UserResponse) => void) {
//   validate(data, (err, data) => {
//     if (err) {
//       return callback(err);
//     }
//     checkEmail(data, (err, data) => {
//       if (err) {
//         return callback(err);
//       }
//       console.log(data);
//     });
//   });
// }

// function responseHandler(response: UserResponse) {
//   console.log(response);
// }

// function validate(data: User, callback: (err?: UserResponse, data?: any) => void) {
//   const { email, password } = data;
//   if (email.length !== 0 && password.length !== 0) {
//     callback(null, { email: email, password: password });
//   } else {
//     callback({ status: 'fail', error: 'Invalid Data' });
//   }
// }

// function checkEmail(data: User, callback: (err?: UserResponse, data?: any) => void) {
//   const isEmailExist = true;
//   const { email } = data;
//   if (isEmailExist) {
//     callback({ status: 'fail', error: `${email} is already registed.` });
//   } else {
//     callback(null, data);
//   }
// }
// registerUser({ email: 'www', password: 'hyu' }, responseHandler);

function validate(data: User): Promise<User> {
  return new Promise((res, rej) => {
    const { email, password } = data;
    if (email.length !== 0 && password.length !== 0) {
      res({ email: email, password: password });
    } else {
      rej({ status: 'fail', error: 'Invalid Data' });
    }
  });
}
function checkEmail(data: User) {
  return new Promise((res, rej) => {
    const { email } = data;
    const isExist = false;
    if (!isExist) {
      res(data);
    } else {
      rej({ status: 'fail', error: `${email} is already exist` });
    }
  });
}
const res = validate({ email: 'ss', password: 'ss' });

res
  .then(checkEmail)
  .then((rf) => {
    console.log(rf);
  })
  .catch((err) => {
    console.log(err);
  });
