import * as argon2 from "argon2";

const plainPassword = "password123";

const hashes: string[] = []

async function hashPassword() {
  for (let i = 0; i < 3; i++) {
    console.time("argon2");
    const hash = await argon2.hash(plainPassword);
    console.timeEnd("argon2");
    console.log(hash);
    hashes.push(hash);
  }

  // for (const hash of hashes) {
  //   console.time("verify");
  //   await argon2.verify(hash, plainPassword);
  //   console.timeEnd("verify");
  // }
}

void hashPassword();
