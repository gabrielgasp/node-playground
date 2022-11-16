import * as v from 'class-validator';

interface IPerson {
  name: string;
  // age: number;
  // email: string;
}

class Person implements IPerson {
  @v.IsString({ message: 'Name must be a string' })
  @v.IsNotEmpty({ message: 'Name is required' })
  @v.MinLength(3, { message: 'Name must be at least 3 characters long' })
  @v.MaxLength(30, { message: 'Name must be at most 50 characters long' })
  name!: string;

  @v.IsInt({ message: 'Age must be an integer' })
  @v.Min(18, { message: 'You must be at least 18 years old' })
  @v.Max(100, { message: 'You must be at most 100 years old' })
  age!: number;

  @v.IsEmail()
  email!: string;

  constructor(props: unknown) {
    Object.assign(this, props);
  }
}

const person = new Person({
  name: 'John',
  age: 30,
  email: 'email@mail.com'
});

async function main() {
  const errors = await v.validate(person, { whitelist: true });
  console.log(errors.length ? errors : person);
  person.email = 'banana';
  console.log(person);
}

main()
