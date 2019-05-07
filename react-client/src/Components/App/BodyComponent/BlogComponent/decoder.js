
/* Decodes escaped characters received from Wordpress API */
/* dec is the first p1 matched, match returns the fully matched string */
function decodeWPUnicode(str, expr='default'){
  let newString = ""

  switch(expr){
    case 'excerpt':
      /* Strip HTML tags from WP API return and convert unicode to char*/
      /* ONLY use for Wordpress API return due to consistently known outputs*/
      /* Does NOT work for edge cases; do not use this case other than above instance*/

      /* Replace <p> tag and inner &nbsp tags */
      /* Split starting at the <a href tag, return only the excerpt */
      /* which is the first part of the array */
      let cleanExcerpt = str.replace(/<p>|&nbsp\s?;?|^<a.+?/g, "")
        .split("<a")[0]

      newString = decodeWPUnicode(cleanExcerpt, expr='default');

     break;

    default:

      newString = str.replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(dec)
      });

  }

  return newString;

}

export default decodeWPUnicode;
