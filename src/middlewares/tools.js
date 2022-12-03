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
      dns.resolveAny(domain, (err, records) => {
        if (err || !records)
          return resolve({
            message: "Cannot find domain's DNS records.",
            status: false,
          });

        const aliases = records.filter((record) => record.type === "A");
        if (!aliases)
          return resolve({
            message:
              "Please ask staff to verify your custom domain on Discord.",
            status: false,
          });

        if (!aliases[0].address.startsWith("76.76.21."))
          return resolve({
            message:
              "Please ask staff to verify your custom domain on Discord.",
            status: false,
          });

        return resolve({ message: "Successfuly verified.", status: true });
      });
    } catch (err) {
      return resolve({ message: err.message, status: false });
    }
  });
};
