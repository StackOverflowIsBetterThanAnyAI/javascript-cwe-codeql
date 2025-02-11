const endsWith = (x, y) => {
    return x.lastIndexOf(y) === x.length - y.length
}

endsWith('x', 'xx')
