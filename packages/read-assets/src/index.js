import fs from 'fs';

const defaultOptions = {
  publicPath: ''
};

const manifest = {
  js: [],
  css: []
};

export default (rootDir, options) => {
  const { publicPath } = { ...defaultOptions, ...options };
  if (fs.existsSync(rootDir)) {
    return fs.readdirSync(rootDir, (err, files) => {
      if (err) {
        throw new Error(err);
      }
      // need validation for non empty array
      if (!files || !Array.isArray(files)) {
        throw new Error('files is not an array');
      }
      return files.reduce((acm, file) => {
        console.log({ file });
        // if (file.includes('.js')) {
        //   acm.js.push(file);
        // }
        // if (file.includes('.css')) {
        //   acm.css.push(file);
        // }
        return acm;
      }, manifest);
    })
  }
  throw new Error(`rootDir: ${rootDir} does not exist`);
}
