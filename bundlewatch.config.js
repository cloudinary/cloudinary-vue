const bundlewatchConfig = {
  files: [
    {
      path: './dist/Cloudinary.umd.js',
      maxSize: '12kb'
    },
    {
      path: './dist/Cloudinary.umd.min.js',
      maxSize: '6kb'
    }
  ],
  defaultCompression: 'gzip',
};

module.exports = bundlewatchConfig;
