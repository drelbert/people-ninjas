const mongoose = require('mongoose');
//The db connection string.
const dbURI = 'mongodb://localhost/ninja';
mongoose.connect(dbURI, {useNewUrlParser: true});
//Code for monitoring the Mongoose connection events.
mongoose.connection.on('connected', () => {
    console.log(`It's on, Mongoose connected to ${dbURI}`);
  });
  mongoose.connection.on('error', err => {
    console.log('Issues alert, Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
//Code for capturing the process termination events.
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./ninjas');