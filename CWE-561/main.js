const main = (user) => {
    if (user.token) return 'access granted'
    else if (user.token && user.isBanned) return 'access denied'
    else return 'login required'
}
