function Message (data) {
let code = data.shift()
let pattern = '/(^[$|%]{1})([A-Z]{1}[a-z]{2,})([$|%]{1})/'
let secPattern = '/([^\$%\]\[\|]+)/'

for(let i = 0 ; i < code; i++){

}