// find function
// find user by username
function findUserByUsername(users, value) {
    return users.find(user => {
        return user['username'] === value;
    });
}

// remove user
function removeUser(users, value) {
    const foundIndex = users.findIndex(user => {
        return user.username === value;
    });
    if (foundIndex === -1) return;

    return users.splice(foundIndex, 1)[0];
}