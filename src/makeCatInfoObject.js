// intially something like: 
//     "breeds": [],
//     "categories": [],
//     "id": "MTc5MTY4MA",
//     "url": "https://cdn2.thecatapi.com/images/MTc5MTY4MA.jpg",
//     "width": 612,
//     "height": 612

// we need to turn it into somehitng like
//     id: 
//     urlImage: 
//     name: 
//     breed: 
//     age: 
//     description: 

import { faker } from '@faker-js/faker';

// returns an object with the cat information we want using the some of the cat info
// received through the thecatapi.com api
const makeCatInfoObject = (catApiInfo) => {
    
    const newCatInfo = {
        id: catApiInfo.id,
        url: catApiInfo.url,
        breed: faker.animal.cat(),
        name: faker.name.firstName(),
        age: Math.ceil(Math.random()*12+1),
        description: faker.lorem.sentences(1),

        price: Math.ceil(Math.random()*200+10), // at least 10 and max will be 210
    }

    return {...newCatInfo};
}

export default makeCatInfoObject
