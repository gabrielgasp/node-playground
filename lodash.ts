import _ from "lodash";

const original= {
  "name": "Cuscuz",
  "description": "Gostoso",
  "variants": [
    {
      "add_name": "Médio",
      "is_available": true,
      "price": 1000
    }
  ]
}

const update = {
  "description": "Gostosão",
  "variants": [
    {
      "add_name": "Grande",
      "price": 2000
    }
  ]
}

const result = _.merge(original, update);

console.log(result);