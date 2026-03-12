const { src, dest, series } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};

let validateHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlValidator(undefined));
};

exports.compressHTML = compressHTML;
exports.validateHTML = validateHTML;
exports.validateAndCompressHTML = series(validateHTML, compressHTML);
