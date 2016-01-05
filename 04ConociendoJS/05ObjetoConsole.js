console.clear()

console.log('Hola Mundo desde la Consola :)')
var nombre = 'Jonathan'
console.log('Hola Mundo desde la Consola :) te saluda %s', nombre)
var anio = 2016
console.log('Hola Mundo desde la Consola :) te saluda %s, que tengas un excelente año %d', nombre, anio)

console.error('Error Configurado por el usuario')

var cursos = document.querySelector('.course-list')
console.log(cursos)
console.dir(cursos)

console.clear()

console.log(window)
console.dir(window)

console.clear()

console.log(Date())
console.dir(Date())

console.clear()

console.group('Cursos Bextlán')
console.log('Node.js')
console.log('jQuery')
console.log('WordPress')
console.log('Responsive Design')
console.log('Diseño y Programación Web')
console.groupEnd()

console.groupCollapsed('Tutoriales Bextlán')
console.log('JavaScript')
console.log('HTML5')
console.log('PHP')
console.log('AS3')
console.log('Vlog de MirCha')
console.groupEnd()

console.clear()

var bextlan = {
    "Cursos":['Node.js','jQuery','WordPress','Responsive Design','Diseño y Programacion Web'],
    "Tutoriales":['JavaScript','HTML5','PHP','AS3','Vlog de MirCha']
}
console.table(bextlan)

function Cursos(nombre, url, tipo){
    this.nombre = nombre
    this.url = url
    this.tipo = tipo
}

var node = new Cursos('Node.js', 'http://bextlan.com/cursos/nodejs','curso')
var js = new Cursos('JavaScript', 'http://bextlan.com/tutoriales/javascript','tutorial')
console.table(node)
console.table(js)

console.clear()

console.time('Cuanto tiempo tarda mi código')
var arreglo = new Array(1000000)
for(var i = arreglo.length - 1; i >= 0; i--)
{
    arreglo[i] = new Object()
}
console.timeEnd('Cuanto tiempo tarda mi código')