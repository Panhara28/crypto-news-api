module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        endpoint: env("S3_ENDPOINT"),
        s3Options: {
          accessKeyId: env("S3_KEY"),
          secretAccessKey: env("S3_SECRET"),
          region: "sgp1",

          params: {
            ACL: env("AWS_ACL", "public-read"),
            Bucket: env("S3_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
