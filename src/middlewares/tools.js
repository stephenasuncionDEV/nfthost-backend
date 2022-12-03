const lz = require("lzutf8");
const dns = require("dns");

module.exports.EncodeWebsiteData = (dataObj) => {
  return lz.encodeBase64(lz.compress(JSON.stringify(dataObj)));
};

module.exports.ParseWebsiteData = (data) => {
  return JSON.parse(lz.decompress(lz.decodeBase64(data)));
};

module.exports.VerifyDns = (domain) => {
  return new Promise((resolve) => {
    try {
      dns.resolveNs(domain, (err, addresses) => {
        if (err || !addresses) {
          return resolve({
            message:
              "Please make sure you are using the right nameservers. Err: 0x1",
            status: false,
          });
        }

        if (!addresses[0].indexOf("vercel-dns.com") === -1)
          return resolve({
            message:
              "Please make sure you are using the right nameservers. Err: 0x2",
            status: false,
          });

        return resolve({ message: "Successfuly verified.", status: true });
      });
    } catch (err) {
      return resolve({ message: err.message, status: false });
    }
  });
};
