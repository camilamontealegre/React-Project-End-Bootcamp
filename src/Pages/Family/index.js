import React from 'react';
import DndWrapper from '../../components/DND-Wrapper';
import Image1 from './familia1.jpg';
import Image2 from './familia2.jpg';
import Image3 from './familia3.jpg';
import Image4 from './familia4.jpg';
// // import Image5 from './familia5.jpg';

const items = [
    {
        name: 'Conejos/as',
        size: 'Talla Unica',
        price: '$90 mil',
        state: 'Disponible',
        image: Image1
    },
    {
        name: 'Abejas',
        size: 'Talla Unica',
        price: '$70 mil',
        state: 'Disponible',
        image: Image2
    },
    {
        name: 'Blanca Nieves',
        size: 'Talla Unica',
        price: '$70 mil',
        state: 'Disponible',
        image: Image3
    },
    {
        name: 'Toy Story',
        size: 'Talla Unica',
        price: '$30 mil',
        state: 'Disponible',
        image: Image4
    },
    // {
    //     name: 'Pitufo',
    //     size: '10-1 año',
    //     price: '$28 mil',
    //     state: 'Disponible',
    //     image: Image5
    // },   
]

export default function Family(){
    return(
        
            
            <DndWrapper items={items}/>
        
        
    );
}