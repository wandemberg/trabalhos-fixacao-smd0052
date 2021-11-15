/**
 * 
 */

function validarCampos() {
	var elemento = document.getElementById('entrada');
	var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
	if (elemento == null) {
		message.style.color = badColor;
        message.innerHTML = " O elemento de busca não existe";
		//alert("O elemento de busca não existe");
		return false;
	}
	
	if (elemento.value == null || elemento.value.length == 0) {
		message.style.color = badColor;
        message.innerHTML = " Preencha o elemento de busca";
		//alert("Preencha o elemento de busca");
		return false;
	}
	
    message.style.color = goodColor;
    message.innerHTML = " ";
	return true;
}

function validarCamposMinMax() {
	var elemento = document.getElementById('entrada');
	var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
	if (elemento == null) {
		message.style.color = badColor;
        message.innerHTML = " O elemento de busca não existe";
		return false;
	}
	
	if (elemento.value == null || elemento.value.length == 0) {
		message.style.color = badColor;
        message.innerHTML = " Preencha o elemento de busca";
		return false;
	}
	
	if(elemento.value.length < 1 || elemento.value.length > 10){
		message.style.color = badColor;
        message.innerHTML = " Digite pelo menos 1 caracter e no máximo 10 caracteres!";
		return false;
    }
	
    message.style.color = goodColor;
    message.innerHTML = " ";
	return true;
}

function validarCampoInteiroPositivo() {
	var elemento = document.getElementById('entrada');
	var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
	if (elemento == null) {
		message.style.color = badColor;
        message.innerHTML = " O elemento de busca não existe";
		return false;
	}
	
	if (elemento.value == null || elemento.value.length == 0) {
		message.style.color = badColor;
        message.innerHTML = " Preencha o elemento de busca";
		return false;
	}
	
	if ( !(!isNaN(elemento.value) && Number.isInteger(Number(elemento.value)) && elemento.value > 0 )){
		message.style.color = badColor;
        message.innerHTML = " Digite um inteiro positivo válido!";
		return false;
    }
	
    message.style.color = goodColor;
    message.innerHTML = " ";
	return true;
}


function validarCombo() {
	var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
	var indice = document.getElementById('combo').selectedIndex;
	if (indice == null || indice <= 0) {
		message.style.color = badColor;
        message.innerHTML = " Selecione uma opção válida!";
		return false;
	}
	
    message.style.color = goodColor;
    message.innerHTML = " ";
	return true;
}

function validarCheck() {
	var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
	var elemento = document.getElementById('condicao');
	
	if (!elemento.checked) {
		message.style.color = badColor;
	    message.innerHTML = "É obrigatório selecionar o checkbox!!";
		return false;
	}
	
    message.style.color = goodColor;
    message.innerHTML = " ";
	return true;
}

function validarCheckContagem() {
	var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
		
	var elementos = document.getElementsByName('cor');
	
	if (elementos == null || elementos.length == 0) {
		message.style.color = badColor;
	    message.innerHTML = "Não existem elementos selecionados.";
		return false;
	}
	
	elementos = document.getElementsByName('cor');
	
	var selecionado = 0;
	
	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].checked) {
			selecionado++;
		}
	}
	
    message.style.color = goodColor;
    message.innerHTML = "  " ;
	alert("Total de itens selecionados: " + selecionado);
	return true;
}

function validarRadioSelecionado() {
	var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
		
	var elementos = document.getElementsByName('cor');
	
	if (elementos == null || elementos.length == 0) {
		message.style.color = badColor;
	    message.innerHTML = "Não existem elementos selecionados.";
		return false;
	}
	
	elementos = document.getElementsByName('cor');
	
	var selecionado = 0;
	var indiceCor = 0;
	
	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].checked) {
			selecionado++;
			indiceCor = i;
			break;
		}
	}
	
	if (selecionado > 0){
		message.style.color = goodColor;
	    message.innerHTML = "  " ;
		alert("Você selecionou a cor: " + elementos[indiceCor].value);
		return true;	
	} else {
		message.style.color = badColor;
	    message.innerHTML = "Selecione uma cor!";
		alert('Selecione uma cor!');
		return false;
	}
}

function checkPass()
{
    var pass1 = document.getElementById('psw');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
	//console.log(pass1.value.length);
	//alert(pass1.value.length);
	
    if(pass1.value.length > 3){
	
		/* testa se o valor é vazio ou formado por apenas espaços em branco */
		if (pass1.value == null || pass1.value.length == 0 || (/^\s+$/.test(pass1.value))) {
			return false;
		}
		
		/*
Comentários sobre a Expressão Regular utilizada acima
/ -> Delimitador de padrão de uma expressão literal
^ -> Corresponde ao início do texto
\s -> Corresponde a um único caractere de espaço, tabulação, quebra de linha etc.
+ -> O que o precede repete 1 ou mais vezes
$ -> Corresponde ao final do texto
*/
	        //pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        //message.hidden = "true";
        message.innerHTML = " ";
		return true;
    }
    else{
        //pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        //message.hidden = "false";
        message.innerHTML = "Senha fraca. Digite pelo menos 4 caracteres!";
		return false;
    }
}  

function senhaValida(){
    var pass1 = document.getElementById('psw').value;
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	

 var retorno = false;

 var letrasMaiusculas = /[A-Z]/;

 var letrasMinusculas = /[a-z]/; 

 var numeros = /[0-9]/;

 var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

 if(pass1.length < 4){
	message.style.color = badColor;        
	message.innerHTML = "Senha fraca. Digite pelo menos 4 caracteres!";
 	return retorno;
 }

 var auxMaiuscula = 0;
 var auxMinuscula = 0;
// var auxNumero = 0;
 var auxEspecial = 0;

 for(var i=0; i<pass1.length; i++){
	 if(letrasMaiusculas.test(pass1[i]))	
		 auxMaiuscula++;	
	 else if(letrasMinusculas.test(pass1[i]))	
	 	auxMinuscula++;	
	 else if(numeros.test(pass1[i]))	
	 	auxNumero++;	
	 else if(caracteresEspeciais.test(pass1[i]))	
	 	auxEspecial++;
 }

 if (auxMaiuscula > 0){	
	if (auxMinuscula > 0){	
		if (auxEspecial > 0) {	
				message.style.color = goodColor;        
				message.innerHTML = " ";
			 	retorno = true;	
			 } else {
				message.style.color = badColor;        
				message.innerHTML = "Senha fraca. Deve conter pelo menos um caracter especial!";
		}		 	
	 } else {
		message.style.color = badColor;        
		message.innerHTML = "Senha fraca. Deve conter pelo menos um caracter minúsculo!";
	}
 } else {
	message.style.color = badColor;        
	message.innerHTML = "Senha fraca. Deve conter pelo menos um caracter maiúsculo!";
}
 return retorno;

}
