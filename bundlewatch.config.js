const bundlewatchConfig = {
  files: [
    {
      path: './dist/Cloudinary.umd.js',
      maxSize: '15kb'
    },
    {
      path: './dist/Cloudinary.umd.min.js',
      maxSize: '7kb'
    }
  ],
  defaultCompression: 'gzip',
};

module.exports = bundlewatchConfig;
