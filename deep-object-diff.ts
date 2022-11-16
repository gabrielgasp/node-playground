// import { diff } from "deep-object-diff"
import { diffString } from 'json-diff';

const obj1 = {  "_id": {    "$oid": "5e372edb95a6de12d49fe333"  },  "rating": 5,  "isElasticsearchSynced": false,  "isFavorite": false,  "orders_finished_with_this_product": 0,  "variants": [    {      "is_available": true,      "price": 390000,      "add_meta_keywords": [],      "_id": {        "$oid": "5e372edb95a6de12d49fe334"      },      "add_name": "Brusqueta de Salmão",      "promo_price": 0,      "properties": [],      "image_urls": [        {          "_id": {            "$oid": "5e372ee895a6de12d49fe358"          },          "original": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=daVFFbWcnwS8eljccIasDRPTX9mzTAMKxNNCC%2F6OFheTy7t73KoVSkGG3EPrcXaga%2FwXRqI0omvkOyvu2ZmXvkfuvexUUwNWG6Ch504%2BADoRG0EnGwENXvdye188haARFqUpgDoWiXENeAPJ3ngSL7Oc2QA1qmLHvhik6YE09OzBA1SCnTKIS7gDnkDI8i5patpcPPh%2BdZ%2ByyRiL4kXiGdjwy9mBdf%2Bm7xDvNQBnNmLZ%2FgX49Jf4qaiI9ZFu918bsKYnynK8RJZo%2BwNWEXRMB%2FEhfPzfJuG4TjHlAJGq%2BLATdyfPlXW5l%2BK7tY0dSb0NjHXV6IhowubvwE2Bed%2B8KA%3D%3D",          "mini": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350-x100?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=w4SS944Xw3eucOle6HgLiRrEnXNHKg%2FmQM7aHvldF1oDpU04QTMJ%2Fdf5bCe90cAzqeYyd%2BTHrz4D4bBKtzaJCKmPAq70%2Bpa6MfiUWKVbxzcfbvKTSU2r8m5dDc%2F4QU6RetZs1H0n6LUEBZmYbk3ZaSsyk4I4GdhXtDsHN1HBN0w2R%2BRqlcnszPct0sjsmw6b1%2B4uIFLakS3wKbkNsSeII%2B0UgMuU8sAbaj2A69fX3zzuZg%2BzD2cNu%2BQpsTXw9MJ19ExO4wdYyiJfVqHKC%2Fb1YgpkiDbpqS5dXLxT6zV89inLIPFJe2VwguSAtI3aHLQwA0Z4XTdaEvzplgOa2eUnqg%3D%3D",          "small": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350-x256?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=m9YY5QUnn0dIh1mArkZct1Jp6ZOC7bo3bgkYckrhF1OZYJ6r5f2Hg5uM0gxE54KPxn0zElfCYXbAj4vOZvcXlPSzJcqZp1UlhbmADGMe0h0X37D0CGd9zP2sOIPN8I4e6Ewij8BdzFYBvQBZlcj82iORNusbZE8v3vkctQ3aB4wW7QZv7H1D5pTwsr3chTJ13naOjoWTWXrANGPg%2BDAwEOheNlX0gGQEwtS9we09UIWijvRA%2BdIyAkUzj0KkIvdAw0IOxjHx4h0yFXsbac8bii%2F90b9RhTAyQ%2BRe2ZcsE%2FK1aXqlIwO7yaSRmO39CgS6Mif3tdGHR8FKlwFBBVDrqw%3D%3D",          "large": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350-x600?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=hniglY0b008yPgbSy8nYxvJQP6skWvO2jV%2Bldn1JfU9SJMaiKBFSv%2F%2FBiM2CAFKcViItFmpatllZtJrdn5nMp7ekRnM%2F3JPTHf18nT1uDcDfMTO55BjGW1isJ5tFOK%2FvkF8d%2BV7zlVerT9rTi0q%2FUrswxva8yPp1ycsxTqfIM5upAfV4kx01V%2BUl6q%2BosNEsofyVFm%2BLrZjraccxEcJnDr2gKnaOPhJ7l92%2BYmsAoscMvYJJQ10J82NAAJvJfZqbiBdXSJOYkPT90MBrjEzRAm5PWq5gT4uy8b8p%2FzfHCk422GNRJ9rLYsQHia8yQGTCcG%2Fm6QNq16i2EpOOJ8AEjA%3D%3D"        }      ],      "reviews": [],      "iva": 0    }  ],  "description": "Torrada integral com lâminas de salmão cru regado com azeite de alcaparras, lascas de queijo com seleção de folhas",  "meta_description": "Torrada integral com lâminas de salmão cru regado com azeite de alcaparras, lascas de queijo com seleção de folhas",  "store_product_category": {    "order": 1,    "_id": {      "$oid": "5e336216f695344a0871d42c"    },    "name": "Saladas e Entradas"  },  "variant_aggregator_name": "",  "meta_product": {    "dimension": [      0,      0,      0    ],    "meta_keywords": [],    "_id": {      "$oid": "5e372edb95a6de12d49fe336"    },    "categories": [      {        "priority": 1,        "_id": {          "$oid": "5e2209bb17407f568b93ff52"        },        "image_url": {          "original": "/public/images/stores/5e2209bb17407f568b93ff52/bf66bd0c6052c5fd81091b028cc9e5a6",          "mini": "https://storage.googleapis.com/mamboo.appspot.com/category%2F5e2209bb17407f568b93ff52%2F%2Fbf66bd0c6052c5fd81091b028cc9e5a6-x100?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=rQaABi1B1HNhA%2FtvbwJDMFHWq3cvysmRFS7iRqvR2m2HvGeJj7hpP1TqvY7taJVVxkIwOsuoH4eRKRXimY7a%2BHNx8eR79iV65U2wMMLA1wBsH5t1pc4wkYSG%2BDgBgtF1IHyjzLnozWnePpxN6Lv0Nv819pctAanP8ORGCw%2B37ftgHD%2Fr%2FidPr3r9WQgVRaW2ct6DqSOGWt0Ib1LoAMQU%2BoQaFQD4HwQ2WIlyR%2FDI3nBvgh%2BrZ6tTXPf3OYizuWL%2BIQW33DMxYINB0PvV84f4nV85WbQggDbfKcC7EoaPHa09%2FhL%2BqfDwbQSV1qPV242wHzFkJAlGdGxQwb6mXLnd7g%3D%3D",          "small": "https://storage.googleapis.com/mamboo.appspot.com/category%2F5e2209bb17407f568b93ff52%2F%2Fbf66bd0c6052c5fd81091b028cc9e5a6-x256?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=dBtv4TGMT3cTl2o07lCKiK9LrEQoJ3ff5rf1QWFcPg3Br6E2YAOdB8qCmppHzomz2MP3zOF8SbG2EtTSM2fyF6yYgxrI918gCuk9usTCdAPouwSrzvT6zgjFs0P7k2XHQUsIAjgapkqwsVMmQH2YCvMSUyHO4BKASCkvVHWUPmLBDnF64Oorh2B1ptEy8lpabwnlgJvlESrOIOt%2BnfLM%2FNSHDvHHthhpDoRuGEZp7C01%2BCJELc3VguUg4tvkP5SDHaq3KudSxZqTKUOvUb2ilQVuv%2ByBPVlvdJLl%2Flj%2BBXPFOVJ%2BH4ZzhPXpDCzHA1dJMg7bi3X%2Bgq%2FyuM7cLe5FTw%3D%3D",          "large": "https://storage.googleapis.com/mamboo.appspot.com/category%2F5e2209bb17407f568b93ff52%2F%2Fbf66bd0c6052c5fd81091b028cc9e5a6-x600?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=TO8yR%2ByVrkucuuGVD%2BodtwsJm8oV2iX%2F1oOr7olAo6LbdQUwHPb7zWmUp3yH6Z5dj6fKimKDU5jsnQr6Kpo3tPJRDIhAubXfLEHgUZ%2FdRP%2F9l%2BhztFlMTLeacF7BPULHKk7xxWP9lp3lBI98RRrO6%2BzNGu8YYcPDlRJwYKRZhXewSfpZQPKLLMj%2Fz37jX77YNWvChClU%2BG%2Fm3cv%2FGiuzqE7DPrcg0Q9W5PBZ%2BNbJL%2FuRidJapkfrxXRDyc4pnicCwAq8rlkIaThBJp5CumwXJHaJtyYnkfkdJP%2FhIo7ahA7d7C832Uupgx%2FJSHaCaT9ZP289cfN%2BjgGkHzuZ8nXYNA%3D%3D"        },        "name": "Alimentação",        "fullName": "Alimentação"      }    ],    "meta_description": "Torrada integral com lâminas de salmão cru regado com azeite de alcaparras, lascas de queijo com seleção de folhas",    "name": "Brusqueta de Salmão",    "weight": 0,    "image_urls": []  },  "store": {    "$oid": "5e3342acf695344a0871cd29"  },  "created_at": {    "$date": {      "$numberLong": "1580674779423"    }  },  "updated_at": {    "$date": {      "$numberLong": "1580674779423"    }  },  "store_name": "Terra Bistrô",  "store_location": {    "coordinates": [      -8.93787750720483,      13.16945316508184    ],    "_id": {      "$oid": "5e90dfb6ea83de5d640a0a23"    },    "type": "Point"  },  "__v": 2,  "deleted_at": {    "$date": {      "$numberLong": "1652882821579"    }  },  "position": 999}

const obj2 = {  "_id": {    "$oid": "5e372edb95a6de12d49fe333"  },  "rating": 5,  "isElasticsearchSynced": false,  "isFavorite": false,  "orders_finished_with_this_product": 0,  "variants": [    {      "is_available": true,      "price": 39000,      "add_meta_keywords": [],      "_id": {        "$oid": "5e372edb95a6de12d49fe334"      },      "add_name": "Brusqueta de Salmão",      "promo_price": 0,      "properties": [],      "image_urls": [        {          "_id": {            "$oid": "5e372ee895a6de12d49fe358"          },          "original": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=daVFFbWcnwS8eljccIasDRPTX9mzTAMKxNNCC%2F6OFheTy7t73KoVSkGG3EPrcXaga%2FwXRqI0omvkOyvu2ZmXvkfuvexUUwNWG6Ch504%2BADoRG0EnGwENXvdye188haARFqUpgDoWiXENeAPJ3ngSL7Oc2QA1qmLHvhik6YE09OzBA1SCnTKIS7gDnkDI8i5patpcPPh%2BdZ%2ByyRiL4kXiGdjwy9mBdf%2Bm7xDvNQBnNmLZ%2FgX49Jf4qaiI9ZFu918bsKYnynK8RJZo%2BwNWEXRMB%2FEhfPzfJuG4TjHlAJGq%2BLATdyfPlXW5l%2BK7tY0dSb0NjHXV6IhowubvwE2Bed%2B8KA%3D%3D",          "mini": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350-x100?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=w4SS944Xw3eucOle6HgLiRrEnXNHKg%2FmQM7aHvldF1oDpU04QTMJ%2Fdf5bCe90cAzqeYyd%2BTHrz4D4bBKtzaJCKmPAq70%2Bpa6MfiUWKVbxzcfbvKTSU2r8m5dDc%2F4QU6RetZs1H0n6LUEBZmYbk3ZaSsyk4I4GdhXtDsHN1HBN0w2R%2BRqlcnszPct0sjsmw6b1%2B4uIFLakS3wKbkNsSeII%2B0UgMuU8sAbaj2A69fX3zzuZg%2BzD2cNu%2BQpsTXw9MJ19ExO4wdYyiJfVqHKC%2Fb1YgpkiDbpqS5dXLxT6zV89inLIPFJe2VwguSAtI3aHLQwA0Z4XTdaEvzplgOa2eUnqg%3D%3D",          "small": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350-x256?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=m9YY5QUnn0dIh1mArkZct1Jp6ZOC7bo3bgkYckrhF1OZYJ6r5f2Hg5uM0gxE54KPxn0zElfCYXbAj4vOZvcXlPSzJcqZp1UlhbmADGMe0h0X37D0CGd9zP2sOIPN8I4e6Ewij8BdzFYBvQBZlcj82iORNusbZE8v3vkctQ3aB4wW7QZv7H1D5pTwsr3chTJ13naOjoWTWXrANGPg%2BDAwEOheNlX0gGQEwtS9we09UIWijvRA%2BdIyAkUzj0KkIvdAw0IOxjHx4h0yFXsbac8bii%2F90b9RhTAyQ%2BRe2ZcsE%2FK1aXqlIwO7yaSRmO39CgS6Mif3tdGHR8FKlwFBBVDrqw%3D%3D",          "large": "https://storage.googleapis.com/mamboo.appspot.com/variants%2F5e372edb95a6de12d49fe334%2F%2F8b213e02ddacad6a82f8385a6e1ea350-x600?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=hniglY0b008yPgbSy8nYxvJQP6skWvO2jV%2Bldn1JfU9SJMaiKBFSv%2F%2FBiM2CAFKcViItFmpatllZtJrdn5nMp7ekRnM%2F3JPTHf18nT1uDcDfMTO55BjGW1isJ5tFOK%2FvkF8d%2BV7zlVerT9rTi0q%2FUrswxva8yPp1ycsxTqfIM5upAfV4kx01V%2BUl6q%2BosNEsofyVFm%2BLrZjraccxEcJnDr2gKnaOPhJ7l92%2BYmsAoscMvYJJQ10J82NAAJvJfZqbiBdXSJOYkPT90MBrjEzRAm5PWq5gT4uy8b8p%2FzfHCk422GNRJ9rLYsQHia8yQGTCcG%2Fm6QNq16i2EpOOJ8AEjA%3D%3D"        }      ],      "reviews": [],      "iva": 0    }  ],  "description": "Torrada integral com lâminas de salmão cru regado com azeite de alcaparras, lascas de queijo com seleção de folhas",  "meta_description": "Torrada integral com lâminas de salmão cru regado com azeite de alcaparras, lascas de queijo com seleção de folhas",  "store_product_category": {    "order": 1,    "_id": {      "$oid": "5e336216f695344a0871d42c"    },    "name": "Saladas e Entradas"  },  "variant_aggregator_name": "",  "meta_product": {    "dimension": [      0,      0,      0    ],    "meta_keywords": [],    "_id": {      "$oid": "5e372edb95a6de12d49fe336"    },    "categories": [      {        "priority": 1,        "_id": {          "$oid": "5e2209bb17407f568b93ff52"        },        "image_url": {          "original": "/public/images/stores/5e2209bb17407f568b93ff52/bf66bd0c6052c5fd81091b028cc9e5a6",          "mini": "https://storage.googleapis.com/mamboo.appspot.com/category%2F5e2209bb17407f568b93ff52%2F%2Fbf66bd0c6052c5fd81091b028cc9e5a6-x100?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=rQaABi1B1HNhA%2FtvbwJDMFHWq3cvysmRFS7iRqvR2m2HvGeJj7hpP1TqvY7taJVVxkIwOsuoH4eRKRXimY7a%2BHNx8eR79iV65U2wMMLA1wBsH5t1pc4wkYSG%2BDgBgtF1IHyjzLnozWnePpxN6Lv0Nv819pctAanP8ORGCw%2B37ftgHD%2Fr%2FidPr3r9WQgVRaW2ct6DqSOGWt0Ib1LoAMQU%2BoQaFQD4HwQ2WIlyR%2FDI3nBvgh%2BrZ6tTXPf3OYizuWL%2BIQW33DMxYINB0PvV84f4nV85WbQggDbfKcC7EoaPHa09%2FhL%2BqfDwbQSV1qPV242wHzFkJAlGdGxQwb6mXLnd7g%3D%3D",          "small": "https://storage.googleapis.com/mamboo.appspot.com/category%2F5e2209bb17407f568b93ff52%2F%2Fbf66bd0c6052c5fd81091b028cc9e5a6-x256?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=dBtv4TGMT3cTl2o07lCKiK9LrEQoJ3ff5rf1QWFcPg3Br6E2YAOdB8qCmppHzomz2MP3zOF8SbG2EtTSM2fyF6yYgxrI918gCuk9usTCdAPouwSrzvT6zgjFs0P7k2XHQUsIAjgapkqwsVMmQH2YCvMSUyHO4BKASCkvVHWUPmLBDnF64Oorh2B1ptEy8lpabwnlgJvlESrOIOt%2BnfLM%2FNSHDvHHthhpDoRuGEZp7C01%2BCJELc3VguUg4tvkP5SDHaq3KudSxZqTKUOvUb2ilQVuv%2ByBPVlvdJLl%2Flj%2BBXPFOVJ%2BH4ZzhPXpDCzHA1dJMg7bi3X%2Bgq%2FyuM7cLe5FTw%3D%3D",          "large": "https://storage.googleapis.com/mamboo.appspot.com/category%2F5e2209bb17407f568b93ff52%2F%2Fbf66bd0c6052c5fd81091b028cc9e5a6-x600?GoogleAccessId=firebase-adminsdk-hlmyi%40mamboo.iam.gserviceaccount.com&Expires=7535977200&Signature=TO8yR%2ByVrkucuuGVD%2BodtwsJm8oV2iX%2F1oOr7olAo6LbdQUwHPb7zWmUp3yH6Z5dj6fKimKDU5jsnQr6Kpo3tPJRDIhAubXfLEHgUZ%2FdRP%2F9l%2BhztFlMTLeacF7BPULHKk7xxWP9lp3lBI98RRrO6%2BzNGu8YYcPDlRJwYKRZhXewSfpZQPKLLMj%2Fz37jX77YNWvChClU%2BG%2Fm3cv%2FGiuzqE7DPrcg0Q9W5PBZ%2BNbJL%2FuRidJapkfrxXRDyc4pnicCwAq8rlkIaThBJp5CumwXJHaJtyYnkfkdJP%2FhIo7ahA7d7C832Uupgx%2FJSHaCaT9ZP289cfN%2BjgGkHzuZ8nXYNA%3D%3D"        },        "name": "Alimentação",        "fullName": "Alimentação"      }    ],    "meta_description": "Torrada integral com lâminas de salmão cru regado com azeite de alcaparras, lascas de queijo com seleção de folhas",    "name": "Brusqueta de Salmão",    "weight": 0,    "image_urls": []  },  "store": {    "$oid": "5e3342acf695344a0871cd29"  },  "created_at": {    "$date": {      "$numberLong": "1580674779423"    }  },  "updated_at": {    "$date": {      "$numberLong": "1580674779423"    }  },  "store_name": "Terra Bistrô",  "store_location": {    "coordinates": [      -8.93787750720483,      13.16945316508184    ],    "_id": {      "$oid": "5e90dfb6ea83de5d640a0a23"    },    "type": "Point"  },  "__v": 2,  "deleted_at": {    "$date": {      "$numberLong": "1652882821579"    }  },  "position": 999}

const JSON1 = JSON.stringify(obj1)
const JSON2 = JSON.stringify(obj2)

// console.log(JSON.stringify({
//   before: diff.(JSON2, obj1),
//   after: diff(obj1, JSON2)
// }, null, 2))

const diff = diffString(JSON1, JSON2)
console.log(JSON.parse(diff))

// const a = {
//   x: 'y'
// }

// const y = { ...a }

// a.x = 'z'

// console.log(y)