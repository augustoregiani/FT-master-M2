var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
if(matchFunc(startEl)) resultSet.push(startEl)  ;//startEl --> Es el elemento que ponemos ocmo parametro (elemento) en las otras funciones.
for (let i = 0; i < startEl.children.length; i++) {
  var resultado= traverseDomAndCollectElements(matchFunc, startEl.children[i])
  // [div] + [span, h1]
  resultSet = [...resultSet, ...resultado];
}

return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) { //'#savebox', '.red', 'div', 'div.red'
  // tu código aquí
  if(selector[0]=== '#'){ return 'id'}
  if(selector[0]=== '.'){ return 'class'}
  for (let i = 0; i < selector.length; i++) {
    if(selector[i] === '.'){ return 'tag.class'}
  }
  return 'tag'
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) { //'#savebox', '.red', 'div.red', 'div', 
  var selectorType = selectorTypeMatcher(selector); // id , class, tag.class , tag
  var matchFunction;// matchfuntion(elemento)---> el.id
  if (selectorType === "id") { 
    matchFunction= function(elemento){       //---> elemento.id = myId 
      return ( '#' + elemento.id === selector )  //---> selector = #myId
    }

  } else if (selectorType === "class") {
    matchFunction= function(elemento){
      for (let i = 0; i < elemento.classList.length; i++) {
       if ( '.' + elemento.classList[i]=== selector)
      return true}return false;
      }
  
  } else if (selectorType === "tag.class") {  //al selector le paso esto --> 'div.red'
    matchFunction= function(elemento){
     let [tag, clas]= selector.split("."); //---> el= ['div' , 'red'] uso destructuring

     return matchFunctionMaker(tag)(elemento) && matchFunctionMaker('.'+ clas)(elemento);
     //hago recursion para volver a usar las funciones, pero importante, tengo que volver a colocar
     //elemento, para poder darle a matchfuntion el elemento que recibe como parametro.
    }
    
  } else if (selectorType === "tag") {
    matchFunction= function(elemento){
    return ( elemento.tagName === selector.toUpperCase() ) }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);//selectorMatch, es la funcion que recibe el elemento HTML y devuelve true o false
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
