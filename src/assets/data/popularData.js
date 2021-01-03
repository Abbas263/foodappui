const popularData = [
    {
        id: '1',
        img: require('../images/pizza1.png'),
        title: 'Primavera Pizza',
        weight: '540 gr',
        rating: '5.0',
        price: 3.99,
        sizeName: 'Medium',
        sizeNumber: '14',
        crust: 'Thin Crust',
        deliveryTime: '30m',
        ingradients: [
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png'),
            },
            {
                id: '2',
                name: 'Tomato',
                image: require('../images/tomato.png'),
            },
            {
                id: '3',
                name: 'Cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '4',
                name: 'Garlic',
                image: require('../images/garlic.png'),
            },
        ]
    },
    {
        id: '2',
        img: require('../images/pizza2.png'),
        title: 'Vegetarian Pizza',
        weight: '450 gr',
        rating: '4.0',
        price: 5.99,
        sizeName: 'small',
        sizeNumber: 10,
        crust: 'Thin Crust',
        deliveryTime: '40m',
        ingradients: [
            {
                id: '1',
                name: 'cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '2',
                name: 'garlic',
                image: require('../images/garlic.png')
            }
        ]
    },
    {
        id: '3',
        img: require('../images/pizza3.png'),
        title: 'Pepperoni Pizza',
        weight: '700 gr',
        rating: '5.0',
        price: 9.99,
        sizeName: 'Large',
        sizeNumber: 18,
        crust: 'Thin Crust',
        deliveryTime: '20m',
        ingradients: [
            {
                id: '1',
                name: 'Tomato',
                image: require('../images/tomato.png'),
            },
            {
                id: '2',
                name: 'Cheese',
                image: require('../images/cheese.png')
            }
        ]
    },
]
export default popularData;