import moment from 'moment';

export const getStatus = (startDate, endDate) => {
    const currentDate = moment();
    if (currentDate < moment(endDate) && currentDate > moment(startDate)) {
        return 'Active';
    }
    return 'Ínactive';
}

export const getUserName = (userId, users) => {
    const userFound = users.filter(user => {
        if (user.id === userId)
            return user;
    });
    if (userFound.length) {
        return userFound[0].username
    } else {
        return 'Unknown User'
    }

}
