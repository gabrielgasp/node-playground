import * as fs from 'fs/promises';

async function main () {
  const data = JSON.parse(await fs.readFile('getStoreProducts.json', 'utf-8'));

  const formattedProducts = [];

  for (const product of data.Products) {
    formattedProducts.push({
      ...product,
      image: data.Images.filter((i: any) => i.ProductID === product.ProductID),
      menu: data.ProductMenu.filter((m: any) => m.ProductID === product.ProductID),
      menuProduct: data.ProductMenuProduct.filter((p: any) => p.ProductID === product.ProductID)
        .map(),
    })
  }

  // await fs.writeFile('kfc-products.json', JSON.stringify(kfcProducts));
}