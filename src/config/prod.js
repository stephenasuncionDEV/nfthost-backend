const production = {
  clientUrl: "https://www.nfthost.app",
  serverUrl: "http://localhost:8080",
  stripe: {
    products: {
      generator: {
        productId: "prod_MUTRTKzbIDNx90",
        priceId: "price_1LlUUMHjrZpuqKHtI8T2eCPj",
      },
      website: {
        productId: "prod_MUTS2m2Jw4BUJe",
        priceId: "price_1LlUVaHjrZpuqKHtyWSqAG9Z",
      },
      utils: {
        productId: "prod_MUTSj2PA5iVWHP",
        priceId: "price_1LlUW1HjrZpuqKHtbRc8RIyE",
      },
    },
  },
};

module.exports = production;
