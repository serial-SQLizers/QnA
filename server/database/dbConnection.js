const { Pool } = require('pg');

const pool = new Pool({
  host: 'ec2-13-59-6-200.us-east-2.compute.amazonaws.com',
  user: 'postgres',
  port: 5432,
  password: 'password',
  database: 'postgres',
  max: 20,
});

pool.connect()
  .then(() => console.log('connected to a database'))
  .catch((err) => console.log(err));

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release();
//     if (err) {
//       return console.error('Error executing query', err.stack);
//     }
//     console.log(result.rows);
//   });
// });

module.exports = pool;
