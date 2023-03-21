


export const checkPhone = (value:any) => { 
  return value.replace(/\D/g,'').length < 10
}
export const checkInput = (value:any) => {
  if (value === null || value === undefined) { return true; }
  return (value.trim() === '' || value.trim().length === 0)  
}
export const checkLength = (value:any) => {
  let length = value.length;
  if (!length) { return true }
	return false
}
export const checkEmail = (value:string) => {
	const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return !expression.test(String(value).toLowerCase());
}
export const checkEspecial = (value:string) => {
	//const expression = /(`|_|\+|-|\.|,|\?|\!|@|#|\$|%|\^|&|\*|\(|\)|;|\\|\/|\||<|>|\"|\'|U2019)/g;
	const expression = /(`|,|\?|\!|#|%|\^|\*|;|\\|\/|\"|\'|U2019)/g;
  return expression.test(String(value).toLowerCase());
}
export const checkRFC = (value:any,tipo:any) => {
  
  // 1 fisca moral
  let expression = /[A-Z]{3}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[0-9A-Z]{3}/i;
  let long = 12
  if (tipo === 'Persona física') {
    expression = /[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[0-9A-Z]{3}/i;
    long = 13 
  }
  if (value.length !== long) {return true}
  return !expression.test(String(value));
}
export const checkCURP = (value:any) => { 
  let expression = /[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}/i;
  return expression.test(value);
}
export const checkURL = (value:any) => {
  // eslint-disable-next-line
  let pattern = /^(https)\a-z0-9\.-]+\.[a-z]{2,4}/gi;
	return true
}
export const checkDate = (value:any) => { 
  return true
}
export const checkFile = (value:any) => {
  return true
}