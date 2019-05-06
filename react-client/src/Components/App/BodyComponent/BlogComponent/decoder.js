
/* Decodes escaped characters received from Wordpress API */
/* dec is the first p1 matched, match returns the fully matched string */
function decodeWPUnicode(str){
  let newString = str.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec)
  });

  return newString;

}

export default decodeWPUnicode;
