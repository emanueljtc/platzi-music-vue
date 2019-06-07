import { assertFunctionParent } from "babel-types";

/* Este filtro nos va a permitir convertir la duracion de las canciones
que estan el Milisegundos a minutos. */

const msToMm = {}

function convertMsToMm(ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 6000 / 1000).toFixed(0))

  return `${min}:${(sec < 10) ? '0' + sec : sec}`;
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    /*  Esta funcion va a recibir el valor real y
     va a devolver el valor de la funcion sin afectar el valor real */
    return convertMsToMm(val)
  })

}

export default msToMm;