function generateMessage(from, text) {
    return { 
        from,
        text,
        createdAt : new Date().getTime() 
    }
}

function generateLocationMessage(from, latitude, longitude) {
    return { 
        from, 
        url : `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt : new Date().getTime()
    };
}

module.exports = {generateMessage, generateLocationMessage};
