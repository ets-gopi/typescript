// user Register flow
type User = { email: string; password: string };
type UserResponse = { status: string; error?: string; success?: string } | null;

function registerUser(data: User, callback: (response: UserResponse) => void) {
  validate(data, (err, data) => {
    if (err) {
      return callback(err);
    }
    console.log(data);
  });
 
}

function responseHandler(response: UserResponse) {
  console.log(response);
}

function validate(data: User, callback: (err?: UserResponse, data?: any) => void) {
  const { email, password } = data;
  if (email.length !== 0 && password.length !== 0) {
    callback(null, { email: email, password: password });
  } else {
    callback({ status: 'fail', error: 'Invalid Data' });
  }
}

registerUser({ email: '', password: 'hyu' }, responseHandler);
console.log('testing');
  