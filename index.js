class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  function arbolesSonIdenticos(arbolA, arbolB) {
    if (!arbolA && !arbolB) {
      return true; // Ambos árboles están vacíos, son iguales
    }
    if (!arbolA || !arbolB) {
      return false; // Uno de los árboles es nulo, no son iguales
    }
    return (
      arbolA.valor === arbolB.valor &&
      arbolesSonIdenticos(arbolA.izquierda, arbolB.izquierda) &&
      arbolesSonIdenticos(arbolA.derecha, arbolB.derecha)
    );
  }
  
  const arbolA = new Nodo(1);
  arbolA.izquierda = new Nodo(2);
  arbolA.derecha = new Nodo(3);
  
  const arbolB = new Nodo(1);
  arbolB.izquierda = new Nodo(2);
  arbolB.derecha = new Nodo(3);
  
  console.log(arbolesSonIdenticos(arbolA, arbolB)); // Debe devolver true

  function copiarArbol(arbol) {
    if (!arbol) {
      return null; // Árbol vacío
    }
    const nuevoArbol = new Nodo(arbol.valor);
    nuevoArbol.izquierda = copiarArbol(arbol.izquierda);
    nuevoArbol.derecha = copiarArbol(arbol.derecha);
    return nuevoArbol;
  }
  
  const arbolOriginal = new Nodo(1);
  arbolOriginal.izquierda = new Nodo(2);
  arbolOriginal.derecha = new Nodo(3);
  
  const arbolCopia = copiarArbol(arbolOriginal);
  console.log(arbolesSonIdenticos(arbolOriginal, arbolCopia)); // Debe devolver true

  function nodosEnNivel(arbol, nivel) {
    if (!arbol) {
      return [];
    }
    if (nivel === 0) {
      return [arbol.valor];
    }
    const izquierda = nodosEnNivel(arbol.izquierda, nivel - 1);
    const derecha = nodosEnNivel(arbol.derecha, nivel - 1);
    return [...izquierda, ...derecha];
  }
  
  const arbol = new Nodo(1);
  arbol.izquierda = new Nodo(2);
  arbol.derecha = new Nodo(3);
  arbol.izquierda.izquierda = new Nodo(4);
  arbol.izquierda.derecha = new Nodo(5);
  
  const nivel = 2;
  console.log(nodosEnNivel(arbol, nivel)); // Debe mostrar [4, 5]

  function numeroDeHojas(arbol) {
    if (!arbol) {
      return 0;
    }
    if (!arbol.izquierda && !arbol.derecha) {
      return 1; // Es una hoja
    }
    const hojasIzquierda = numeroDeHojas(arbol.izquierda);
    const hojasDerecha = numeroDeHojas(arbol.derecha);
    return hojasIzquierda + hojasDerecha;
  }
  
  const arbol = new Nodo(1);
  arbol.izquierda = new Nodo(2);
  arbol.derecha = new Nodo(3);
  arbol.izquierda.izquierda = new Nodo(4);
  arbol.izquierda.derecha = new Nodo(5);
  arbol.derecha.izquierda = new Nodo(6);
  
  console.log(numeroDeHojas(arbol)); // Debe devolver 3
  