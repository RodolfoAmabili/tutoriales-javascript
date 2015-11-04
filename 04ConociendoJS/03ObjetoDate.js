console.clear();

var fecha = new Date()

console.log(
    fecha + '\n',
    //día del mes
    fecha.getDate() + '\n',
    //día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
    fecha.getDay() + '\n',
    //mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
    fecha.getMonth() + '\n',
    //fecha.getYear() + '\n',
    fecha.getFullYear() + '\n',
    new Date(2015, 11, 25),
    '\n\n',
    fecha.getHours() + '\n',
    fecha.getMinutes() + '\n',
    fecha.getSeconds() + '\n',
    fecha.getMilliseconds() + '\n',
    '\n\n',
    fecha.toString() + '\n',
    fecha.toDateString() + '\n',
    fecha.toLocaleString() + '\n',
    fecha.toLocaleDateString() + '\n',
    fecha.toLocaleTimeString() + '\n',
    '\n\n',
    fecha.getTimezoneOffset() + '\n',
    fecha.toUTCString() + '\n',
    fecha.getUTCDate() + '\n',
    fecha.getUTCDay() + '\n',
    fecha.getUTCMonth() + '\n',
    fecha.getUTCFullYear() + '\n',
    fecha.getUTCHours() + '\n',
    fecha.getUTCMinutes() + '\n',
    fecha.getUTCSeconds() + '\n',
    fecha.getUTCMilliseconds() + '\n',
    '\n\n',
    Date.now() + '\n',
    fecha.valueOf()
)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date