import readline from 'readline';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const storeId = await new Promise<string>(resolve => {
    rl.question('\nWhat is the store _id? ', resolve);
  });

  if (!ObjectId.isValid(storeId)) {
    console.error('\nInvalid store id. Please try again.\n');
    process.exit(1);
  }

  const discount = await new Promise<string>(resolve => {
    rl.question('\nWhat is the discount in %? ', resolve);
  });

  const discountAsNum = parseFloat(discount);

  if (isNaN(discountAsNum) || discountAsNum < 0 || discountAsNum > 100) {
    console.error(`\nDiscount must be a number between 0 and 100. \
Please try again.\n`);
    process.exit(1);
  }

  const finalCheck = await new Promise<string>(resolve => {
    rl.question(`\nYou are about to reduce by ${discountAsNum}% the values of \
variants' fields "price" and "iva" of all products of store ${storeId}.\n
Do you wish to continue [y/N]? `, resolve);
  });

  if (finalCheck.toLowerCase() !== 'y') {
    console.log('\nAborting.\n');
    process.exit(0);
  }

  const discountAsPercentage = discountAsNum / 100;
  const multiplyingFactor = 1 - discountAsPercentage;

  console.log(`\nApplying discount, please wait...\n`);
  // TODO: Apply discount to products
  console.log('Done.\n');
  rl.close();
}

main();




// Lógica pra restaurar o desconto:

/*
db.products.updateMany({
  store: <ID DA LOJA>
}, [{
  $set: {
    variants: {
      $map: {
        input: "$variants",
        as: "v",
        in: {
          $mergeObjects: [
            "$$v",
            {
              price: {
                $multiply: [
                  { 
                    $divide: [
                      "$$v.price",
                      <PORCENTAGEM RESTANTE DO VALOR ORIGINAL (Ex: Se o desconto foi de 10%, coloca 90)
                    ]
                },
                  100
                ]
              },
              iva: {
                $multiply: [
                  {
                    $divide: [
                      "$$v.iva",
                      <PORCENTAGEM RESTANTE DO VALOR ORIGINAL (Ex: Se o desconto foi de 10%, coloca 90)
                    ]
                  },
                  100
                ]
              }
            }
          ]
        }
      }
    }
  }
}])
*/