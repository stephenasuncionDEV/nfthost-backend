const development = {
  clientUrl: "http://localhost:3000",
  serverUrl: "http://localhost:8080",
  stripe: {
    products: {
      generator: {
        productId: "prod_MUjIgHsydbMGLu",
        priceId: "price_1LljpQHjrZpuqKHtmIxLJf2C",
      },
      website: {
        productId: "prod_MUjJIzvXHI56gw",
        priceId: "price_1LljrGHjrZpuqKHtqH9yBZCP",
      },
      utils: {
        productId: "prod_MUjKZNifbdGKgI",
        priceId: "price_1LljrcHjrZpuqKHt1x9LRWiT",
      },
    },
  },
};

module.exports = development;
