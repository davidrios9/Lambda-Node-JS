let getHeaders = ( token = {} ) => {
    return {
        'Authorization': `${token.token_type} ${token.access_token}`,
        'Content-Type': 'application/json'
    }
}

module.exports = { getHeaders }