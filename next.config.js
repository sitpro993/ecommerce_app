module.exports = {
  reactStrictMode: true,
  cssModules: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    BASE_URL:
      "http://localhost:3000" || "https://ecommerce-app-lake.vercel.app",
    MONGODB_URL:
      "mongodb+srv://web:12345@cluster0.amsca.mongodb.net/beeyou?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET: "}Jr%Sn:Np8^{$X~c?*Wb/8_)>]&L{JH[V?w}dZ.zHhyd9f8b!",
    REFRESH_TOKEN_SECRET:
      "N]%!,^!LR?xYg&??e@BpB5[jyFVD8xW;@T;JLf,5g#'etF%;}ptf]nzn.MG9vuD%J%%a{^*mw}%D]~'",
  },

  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },
};
