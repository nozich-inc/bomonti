const cron = require('node-cron');

// Test every 30 minutes
cron.schedule('0 */30 * * * *', () => {
  console.log('Cron job running every 30 minutes');
});

// Shrink database every day at 23:30 and 11:30
cron.schedule('30 23,11 * * *', () => {
  // Your logic for shrinking the database
});

// Full backup of database and files (with pg_dump and zip) every day at 00:00 and 12:00
cron.schedule('0 0,12 * * *', () => {
  // Your logic for creating full backups
});

// Delete 1 month old backups, every week at 00:00
cron.schedule('0 0 * * 0', () => {
  // Your logic for deleting 1-month-old backups
});

// Delete 1 year old backups, every month at 00:00
cron.schedule('0 0 1 * *', () => {
  // Your logic for deleting 1-year-old backups
});
