function validaEmail(email){
  if(email == null || email.indexOf('@') == -1 || email.indexOf('.') == -1 ){
    return false;
  }
  return true;
}
function validaNome(nome){
  if (nome < 7 || nome == null) {
    return false;
  }
  return true;
}
function validaMensagem(mensagem){
  if (messageValue == 0) {
    return false;
  }
  return true;
}
function validaEnvio(nome, email, mensagem){
  var nome = validaNome(nome);
  var email = validaEmail(email);
  var mensagem = validaMensagem(mensagem);

    if (!nome == true) {
      nameInput.focus();
      document.getElementById('nameSpan').innerHTML = "Preencha o Nome + Sobrenome";
    }
    if (!email == true) {
      emailInput.focus();
      document.getElementById('emailSpan').innerHTML = "Insira um e-mail válido";
    }
    if (!mensagem == true) {
      messageInput.focus();
      document.getElementById('mensagemSpan').innerHTML = "Escreva uma mensagem";
    }
    console.log(nome);
    console.log(email);
    console.log(mensagem);

    if (nome == true && email == true && mensagem == true) {
      return true;
    }
    return false;

}


  var btnForm = document.getElementById('btnSend');

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  var nameValue;
  var emailValue;
  var messageValue;

  btnForm.addEventListener('click', function() {
    document.getElementById('nameSpan').innerHTML = "";
    document.getElementById('emailSpan').innerHTML = "";
    document.getElementById('mensagemSpan').innerHTML = "";
    nameValue = nameInput.value;
    emailValue = emailInput.value;
    messageValue = messageInput.value;

    if(validaEnvio(nameValue.length, emailValue, messageValue.length)){
      window.alert(`Muito obrigado! ${nameValue}`);
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
    }

  });
