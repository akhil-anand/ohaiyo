import React from 'react'

const Timer = (num) => {
    if (num >= 3) {
        return 0;
    } else {
        return num + 1;
    }
}

export default Timer