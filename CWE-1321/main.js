const merge = (target, source) => {
    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null) {
            if (!target[key]) target[key] = {}
            merge(target[key], source[key])
        } else {
            target[key] = source[key]
        }
    }
    return target
}

const main = (json) => {
    return merge({}, JSON.parse(json))
}
