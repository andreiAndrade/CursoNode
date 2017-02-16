module.exports = function(){
    return {
        par : function(a) {
            return a % 2 == 0;
        },
        impar : function(a) {
            return a % 2 != 0
        },
        primo : function(a) {
            var max = (a - (a % 2)) / 2;
            console.log('max value divisivel: ' + max);
            for(i = 2; i < max; i++) {
                if (a % i == 0)
                    return false;
            }

            return true;
        }
    }
}();