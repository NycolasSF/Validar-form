let campos =  new Array();
function inputs_name_validar(...names){
	names.forEach(function(inputs){
		if(document.forms['form'][inputs].value == false){
			for (var i = 0; i < inputs.length; i++) {
				inputs = inputs.replace("_", " ");
				if(inputs.indexOf('saida') <= -1){
					inputs = inputs.replace("id", " ");
				}
			}
			campos.push({'Campos':inputs, msg:'Preencha o campo '+inputs+ ' !!!' });
			return;
		}
	});
	if (campos.length > 0) {
		campos.forEach(function(validar){
			let paragrafo  =  document.createTextNode(validar.msg);
			let p = document.createElement('p');
			p.appendChild(paragrafo);
			document.querySelector('#msg').appendChild(p);
		});
		campos = new Array(0);
	}else{
		document.forms["form"].submit();

	}
	let intervalo = window.setInterval(function(){
		document.querySelector('#msg').innerHTML = null ;
	},4000);
};