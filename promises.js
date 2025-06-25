function registerUser(data, callback) {
    validate(data, function (err, data) {
        if (err) {
            return callback(err);
        }
        console.log(data);
    });
}
function responseHandler(response) {
    console.log(response);
}
function validate(data, callback) {
    var email = data.email, password = data.password;
    if (email.length !== 0 && password.length !== 0) {
        callback(null, { email: email, password: password });
    }
    else {
        callback({ status: 'fail', error: 'Invalid Data' });
    }
}
registerUser({ email: '', password: 'hyu' }, responseHandler);
console.log('testing');
