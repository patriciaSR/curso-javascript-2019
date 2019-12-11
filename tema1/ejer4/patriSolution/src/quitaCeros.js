"use strict";

import lodash from 'lodash';

function quitaCeros(arrayCeros) {
    for (var i = 0; i < arrayCeros.length; i++) {
        arrayCeros[i] = lodash.without(arrayCeros[i], 0);
    }
}

export default quitaCeros;
