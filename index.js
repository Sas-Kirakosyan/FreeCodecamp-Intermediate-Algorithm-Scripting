function spinalCase(str) {
str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
return str.replace(/\s|_/g, '-');

}

spinalCase("AllThe small Things");// all-the-small-things
