const REMOVER_ITEM_LISTA = (lista, codigo) => {
    if(lista.length > 0){
        lista.forEach((codigoItem, index) => {
          if(codigo == codigoItem){
            return lista.splice(index, 1);
          }
        });
      }

    return lista;
}

export {
    REMOVER_ITEM_LISTA
}