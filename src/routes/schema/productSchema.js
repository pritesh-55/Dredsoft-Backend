exports.addProductSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 2
    },
    price: {
      type: 'number',
      minimum: 0,
    },
    description: {
      type: "string",
      minLength: 2,
      maxLength: 300
    },
    category: {
      type: "string",
      minLength: 2
    },
    image: {
      type: "string",
      format: "uri",
      description: "An optional URL to an image of the product."
    },
    rating: {
      type: "object",
      properties: {
        rate: { type: "number", minimum: 0 },
        count: { type: "number", minimum: 0 },
      },
      required: ["rate", "count"],
      additionalProperties: false
    },
  },
  required: ["title", "price", "category"],
  additionalProperties: false
};