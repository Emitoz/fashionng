import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    categories: [
        { 
            id: 1, 
            name: 'Sneakers', 
            img: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80' 
        },
        { 
            id: 2, 
            name: 'Dress-ups', 
            img: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' 
        },
        { 
            id: 3, 
            name: 'Jackets', 
            img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' 
        }
    ],
    products: [
        {
            id: 1,
            name: 'Rayban deluxe shades',
            price: 20000,
            colors: ['Black', 'Gold', 'Silver', 'teal'],
            category: 'Sunshades',
            images: {
                main: 'https://images.unsplash.com/photo-1512413316925-fd4b93f31521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                ]
            }
        },
        {
            id: 2,
            name: 'D & G Jumpsuits',
            category: 'clothings',
            price: 35000,
            colors: ['Grey'],
            sizes: ['L', 'M', 'XL'],
            images: {
                main: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
        },
        {
            id: 3,
            name: 'Nike Air Sneakers',
            category: 'Sneakers',
            price: 30000,
            colors: ['White', 'Turquiose'],
            sizes: [44, 43, 41, 39],
            images: {
                main: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                    'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
                    'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                ]
            }
        },
        {
            id: 4,
            name: 'Bloomfash Denim Jackets',
            category: 'Jackets',
            price: 25000,
            colors: ['Blue'],
            sizes: ['M', 'L', 'XL'],
            images: {
                main: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1616258734679-57e515f9cdc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
                    'https://images.unsplash.com/photo-1519758340474-40fa8cba6584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                ]
            }
        }
    ]
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.GET_SHOP_COLLECTION:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default shopReducer;