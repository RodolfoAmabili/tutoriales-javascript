console.clear()

var d = document,
    olList = d.querySelector('.tutorials').querySelector('ol'),
    olListChildren = olList.children,
    liFundamentos = d.createElement('li'),
    liH2Fundamentos = d.createElement('h2'),
    liH2AFundamentos = d.createElement('a'),
    aText = d.createTextNode('Métodos para Nodos del DOM')
    //liItem = d.createElement('li'),
    //liText = d.createTextNode('Este es un elemento de mi lista')
    
//console.log(olList)
//console.log(olListChildren[0], olListChildren[5])

// olList.removeChild( olListChildren[0] )

liH2AFundamentos.href = '//www.youtube.com/watch?v=QqLC10iHOlE&index=1&list=PLvq-jIkSeTUaw9krmA6bf5inYcuvUNWI3'
liH2AFundamentos.target = '_blank'

//liItem.appendChild(liText)
//olList.appendChild(liItem)
liH2AFundamentos.appendChild(aText)
liH2Fundamentos.appendChild(liH2AFundamentos)
liFundamentos.appendChild(liH2Fundamentos)
// olList.appendChild(liFundamentos)

//olList.replaceChild(olListChildren[0], olListChildren[5])
//olList.replaceChild(liFundamentos, olListChildren[5])

olList.insertBefore(liFundamentos, olListChildren[7])
