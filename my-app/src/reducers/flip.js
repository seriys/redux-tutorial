const flip = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_FLIP':
            return !state
        default:
            return state
    }
}

export default flip
