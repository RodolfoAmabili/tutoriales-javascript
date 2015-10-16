console.clear()
//me devuleve un arreglo con todos los elementos de la etiqueta buscada
document.getElementsByTagName('li')
document.getElementsByTagName('li').length
document.getElementsByTagName('li')[3]

//me devuleve un arreglo con todos los elementos de la clase  buscada
document.getElementsByClassName('menu')
document.getElementsByClassName('menu').length

//me devuleve un elemento  con el id buscado
document.getElementById('subscription')

//me devuleve un arreglo con todos los elementos  con el name buscado
document.getElementsByName('email')
document.getElementsByName('email').length
document.getElementsByName('email')[0]

//me devuelve un arreglo con todos los elementos con el selector  buscado
document.querySelectorAll('.container')
document.querySelectorAll('section')
document.querySelectorAll('[href]')
document.querySelectorAll('#loader')
document.querySelectorAll('#loader').length
document.querySelectorAll('#loader')[0]

//me devuelve un elemento con el selector buscado, si es un id me devuelve el elemento que tenga dicho id. Si busco por clase, etiqueta html o atributo, entonces me devuleve el primer elemento que exista en el documento HTML
document.querySelector('#loader')
//document.querySelector('#loader').length
//document.querySelector('#loader')[0]
document.querySelector('li')