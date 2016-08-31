import { Alphas } from '../../../both/collections/alphas.collection';
import { Alpha} from '../../../both/interfaces/alpha.interface';
import {Prueba} from './test';
export function loadAlphas() {

    let element = {
        code: '1',
        icon :'folder',
        name: 'Alphas',
        description : 'Un abstracto capade rendimiento'
    };
        if (Alphas.find().count() === 0) {
        const alphas: Alpha[] = [
            {
                name: 'Oportunidad',
                area: {
                    name: 'Customer',
                    view: 'customer',
                },
                elementKernel:'1',
            },
            {
                name: 'Interesado',
                area: {
                    name: 'Customer',
                    view:'customer'
                },
                 elementKernel:'1',
            },
            {
                name: 'Requerimientos',
                area: {
                    name: 'Solucion',
                    view:'solution'
                },
                 elementKernel:'1',
            },
            {
                name: 'Sistema de Software',
                area: {
                    name: 'Solucion',
                    view:'solution'
                },
                 elementKernel:'1',
            },
            {
                name: 'Trabajo',
                area: {
                    name: 'Esfuerzo',
                    view:'endeavor'
                },
                 elementKernel:'1',
            },
            {
                name: 'Forma de trabajo',
                area: {
                    name: 'Esfuerzo',
                    view:'endeavor'
                },
                 elementKernel:'1',
            },
            {
                name: 'Equipo',
                area: {
                    name: 'Esfuerzo',
                    view:'endeavor'
                },
                 elementKernel:'1',
            },

        ];
        alphas.forEach((alpha) => Alphas.insert(alpha));
    }
}
