// need to capitilize first letter 
export function captializeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // checkimg the email format 
  export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // capitalize the first letter & remove hyphen
 export function removeHyphensAndCapitalize(string) { 
     return string.replace(/-/g, ' ').replace(/(^\w|s\w)/g, m => m.toUpperCase())
 }
  