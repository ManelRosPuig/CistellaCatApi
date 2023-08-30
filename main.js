import app from './app/app.js';
import con from './config/config.js';

app.listen(con.PORT, () => {
  console.log(`The api is listening on port ${con.PORT}`);
});