module.exports = function check(string, bracketsConfig) {
	let flag = false;

	while(string != '') {
	flag = false;
		for(let conf of bracketsConfig) {
			const brackets = conf.join('');
			if(string.includes(brackets)) {
				string = string.replace(brackets, '');
				flag = true;
			}
		}
		if(!flag) break;
	}

	if (string == '') {return true} 
	return false;
}
