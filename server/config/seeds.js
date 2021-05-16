const db = require('./connection');
//const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Fruit' },
    { name: 'Vegetable' },
    { name: 'Herb' },
    { name: 'Flower' },
    { name: 'Shrub' },
    { name: 'Climber' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Okra',
      description: 'bla bla bla',
      image: 'okra.jpg',
      category: categories[0]._id,
      season: Summer,
      maintenance: average,
      waterneeds: average,
    },
    {
      name: 'Thyme',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'thyme.jpg',
      category: categories[2]._id,
      season: Spring,
      maintenance: low,
      waterneeds: low,
    },
    {
      name: 'Kiwi',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'kiwi.jpg',
      season: Spring,
      maintenance: average,
      waterneeds: average,
    },
    {
      name: 'Clematis',
      category: categories[5]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'clematis.jpg',
      season: Fall,
      maintenance: low,
      waterneeds: average,
    },
    {
      name: 'Quinces',
      category: categories[4]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'quinces.jpg',
      season: winter,
      maintenance: low,
      waterneeds: average,
    },
    {
      name: 'Dianthus',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'dianthus.jpg',
      season: winter,
      maintenance: average,
      waterneeds: average,
    },
    {
      name: 'carrots',
      category: categories[1]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'carrots.jpg',
      season: Spring,
      maintenance: average,
      waterneeds: average,
    },
  ]);

  console.log('products seeded');

//   await User.deleteMany();

//   await User.create({
//     firstName: 'Pamela',
//     lastName: 'Washington',
//     email: 'pamela@testmail.com',
//     password: 'password12345',
//     orders: [
//       {
//         products: [products[0]._id, products[0]._id, products[1]._id],
//       },
//     ],
//   });

//   await User.create({
//     firstName: 'Elijah',
//     lastName: 'Holt',
//     email: 'eholt@testmail.com',
//     password: 'password12345',
//   });

//   console.log('users seeded');

//   process.exit();
// });
