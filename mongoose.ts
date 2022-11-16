import mongoose from 'mongoose';

const URI = "mongodb://localhost:27017/test";

const run = async () => {
  try {
    const conn = await mongoose.connect(URI);

    const Person = mongoose.model('Person', new mongoose.Schema({ name: String }));

    Person.watch().
      on('change', data => console.log(data));

    Person.create({ name: 'John' });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();

