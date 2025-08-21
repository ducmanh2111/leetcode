/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var left = 0
    var right = x
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (mid * mid < x) {
            left = mid + 1
        } else if (mid * mid > x) {
            right = mid - 1 
        } else {
            right = mid
            break
        }
    }

    return right
};

console.log(mySqrt(8))
