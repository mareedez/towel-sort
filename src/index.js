
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return []
    }
    let matrixnew = []
    matrix.forEach((element, index) => {
        if (index % 2 === 0) {
            matrixnew.push(element)
        } else {
            matrixnew.push(element.reverse())
        }
    })
    return matrixnew.flat()
}
