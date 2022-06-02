document.querySelector('.busca').addEventListener('submit', (event)=>{
    event.preventDefault();

    // PEGA A INFORMAÇÃO DIGITADA PELO USUÁRIO.
    let input = document.querySelector('#searchInput').value; 
    
    if(input !== ''){
        showWarning('Carregando...')
    }else{

    }
  
});


//EM OUTSYSTEMS ISSO SERIA UM PARÂMETRO DE ENTRADA. 
function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}