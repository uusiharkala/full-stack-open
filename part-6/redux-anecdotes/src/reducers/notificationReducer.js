const initialNotification = null

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'SET_NOTIF':
            return action.notif
        default:
            return state
    }
}

export const notifChange = notif => {
    return {
        type: 'SET_NOTIF',
        notif
    }
}

export default notificationReducer