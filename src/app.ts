import { app } from './server';

app.listen(process.env.PORT, () => {
  console.log(`server listening at port ${process.env.PORT}`);
});
