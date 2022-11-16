import * as argon2 from "argon2";

const plainPassword = "password";

async function hashPassword() {
  for (let i = 0; i < 3; i++) {
    const hash = await argon2.hash(plainPassword);
    console.log(hash);
  }
}

hashPassword();
