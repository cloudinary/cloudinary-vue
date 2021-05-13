const bundlewatchConfig = {
  files: [
    {
      path: './dist/Cloudinary.umd.js',
      maxSize: '150kb'
    },
    {
      path: './dist/Cloudinary.umd.min.js',
      maxSize: '70kb'
    }
  ],
  defaultCompression: 'gzip',
};

module.exports = bundlewatchConfig;
