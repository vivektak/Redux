import moment from 'moment';
import { INACTIVE, ACTIVE, UNKNOWN_USER } from '../constants';


export const getStatus = (startDate, endDate) => {
    const currentDate = moment();
    if (currentDate < moment(endDate) && currentDate > moment(startDate)) {
        return ACTIVE;
    };
    return INACTIVE;
};

export const getUserName = (userId, users) => {
    const userFound = users.filter(user => {
        if (user.id === userId)
            return user;
    });

    if (userFound.length) {
        return userFound[0].username
    } else {
        return UNKNOWN_USER;
    };

};
