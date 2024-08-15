function copiarTexto() {

	var textoParaCopiar = document.getElementById("textoResposta").innerText;

	var inputTemporario = document.createElement("input");
	inputTemporario.value = textoParaCopiar;
	document.body.appendChild(inputTemporario);

	inputTemporario.select();
	inputTemporario.setSelectionRange(0, 99999);

	document.execCommand("copy");

	document.body.removeChild(inputTemporario);

	alert("Texto copiado para a área de transferência!");
}

function arrumaLetras(elemento) {

	const textoSemAcento = elemento.value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z\s]/gi, '')
		.toLowerCase();

	elemento.value = textoSemAcento;
}



function codificaTexto() {
	let textoEntrada = document.getElementById("textoEntrada").value;

	let textoModificado = textoEntrada
		.replace(/e/g, 'enter')
		.replace(/i/g, 'imes')
		.replace(/a/g, 'ai')
		.replace(/o/g, 'ober')
		.replace(/u/g, 'ufat');


	document.getElementById("textoEntrada").value = "";

	var novoTexto = document.createElement("p");
	novoTexto.textContent = textoModificado;
	novoTexto.setAttribute("id", "textoResposta");

	let seila2 = document.getElementById("textoResposta");
	seila2.parentNode.replaceChild(novoTexto, seila2);

	var novoBotao = document.createElement("button");
	novoBotao.textContent = "Copiar Texto";
	novoBotao.setAttribute("onclick", "copiarTexto()");
	novoBotao.setAttribute("id", "botaoCopia");

	let seila = document.getElementById("botaoCopia");
	seila.parentNode.replaceChild(novoBotao, seila);

	var novoBotao1 = document.createElement("button");
	novoBotao1.textContent = "Limpar";
	novoBotao1.setAttribute("onclick", "resetar()");
	novoBotao1.setAttribute("id", "botaoReseta");

	let seila3 = document.getElementById("botaoReseta");
	seila3.parentNode.replaceChild(novoBotao1, seila3);


	document.getElementById("imagemResposta").style.display = "none";

}

function decodificaTexto() {
	let textoEntrada = document.getElementById("textoEntrada").value;

	let textoModificado = textoEntrada
		.replace(/ai/g, 'a')
		.replace(/enter/g, 'e')
		.replace(/imes/g, 'i')
		.replace(/ober/g, 'o')
		.replace(/ufat/g, 'u');

	document.getElementById("textoEntrada").value = "";


	var novoTexto = document.createElement("p");
	novoTexto.textContent = textoModificado;
	novoTexto.setAttribute("id", "textoResposta");

	let seila2 = document.getElementById("textoResposta");
	seila2.parentNode.replaceChild(novoTexto, seila2);

	var novoBotao = document.createElement("button");
	novoBotao.textContent = "Copiar Texto";
	novoBotao.setAttribute("onclick", "copiarTexto()");
	novoBotao.setAttribute("id", "botaoCopia");

	let seila = document.getElementById("botaoCopia");
	seila.parentNode.replaceChild(novoBotao, seila);

	var novoBotao1 = document.createElement("button");
	novoBotao1.textContent = "Limpar";
	novoBotao1.setAttribute("onclick", "resetar()");
	novoBotao1.setAttribute("id", "botaoReseta");

	let seila3 = document.getElementById("botaoReseta");
	seila3.parentNode.replaceChild(novoBotao1, seila3);


	document.getElementById("imagemResposta").style.display = "none";
}

function resetar() {

	document.getElementById("imagemResposta").style.display = "flex";
	document.getElementById("textoResposta").style.display = "none";
	document.getElementById("botaoCopia").style.display = "none";
	document.getElementById("botaoReseta").style.display = "none";

}