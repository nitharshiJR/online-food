import { Food } from "./app/shared/models/food";


export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza Margherita',
    price: 12,
    tags: ['Italian', 'FastFood', 'Vegetarian'],
    favourite: true,
    stars: 4.5,
    imageUrl: './assets/pizza-margherita.jpg',
    orgins: ['Italy'],
    cookTime: '30-40 min'
  },
  {
    id: '2',
    name: 'Chicken Biryani',
    price: 10,
    tags: ['Indian', 'Rice', 'Spicy'],
    favourite: false,
    stars: 4.8,
    imageUrl: './assets/chicken-biryani.jpg',
    orgins: ['India'],
    cookTime: '45-50 min'
  },
  {
    id: '3',
    name: 'Sushi Platter',
    price: 18,
    tags: ['Japanese', 'Seafood', 'Healthy'],
    favourite: true,
    stars: 4.6,
    imageUrl: './assets/sushi-platter.jpg',
    orgins: ['Japan'],
    cookTime: '20-30 min'
  },
  {
    id: '4',
    name: 'Pasta Carbonara',
    price: 14,
    tags: ['Italian', 'Pasta'],
    favourite: true,
    stars: 4.7,
    imageUrl: './assets/pasta-carbonara.jpg',
    orgins: ['Italy'],
    cookTime: '25-30 min'
  },

  {
    id: '5',
    name: 'Chocolate Lava Cake',
    price: 7,
    tags: ['Dessert', 'Sweet', 'Chocolate'],
    favourite: true,
    stars: 4.9,
    imageUrl: './assets/chocolate-lava-cake.jpg',
    orgins: ['France'],
    cookTime: '20-25 min'
  }
];

