import { Alphas } from '../../../both/collections/alphas.collection';
import { Alpha} from '../../../both/interfaces/alpha.interface';
import {Prueba} from './test';
export function loadAlphas() {
       console.log(new Prueba().test());
    if (Alphas.find().count() === 0) {
        const alphas: Alpha[] = [
            {
                name: 'Oportunidad',
                area: {
                    name: 'Customer',
                    type:'customer'
                },    
            },
            {
                name: 'Interesado',
                area: {
                    name: 'Customer',
                    type:'customer'
                },
            },
            {
                name: 'Requerimientos',
                area: {
                    name: 'Solucion',
                    type:'solution'
                },
            },
            {
                name: 'Sistema de Software',
                area: {
                    name: 'Solucion',
                    type:'solution'
                },
            },
            {
                name: 'Trabajo',
                area: {
                    name: 'Esfuerzo',
                    type:'endeavor'
                },
            },
            {
                name: 'Forma de trabajo',
                area: {
                    name: 'Esfuerzo',
                    type:'endeavor'
                },
            },
            {
                name: 'Equipo',
                area: {
                    name: 'Esfuerzo',
                    type:'endeavor'
                },
            },

        ];
        alphas.forEach((alpha) => Alphas.insert(alpha));
    }
}
