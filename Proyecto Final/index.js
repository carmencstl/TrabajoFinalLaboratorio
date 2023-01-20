const campos = document.querySelectorAll('.campos');
const imgError = document.querySelectorAll('.imgerror');
const imgSuccess = document.querySelectorAll('.imgsuccess');
const texterror = document.querySelectorAll('.errortext');
const expresiones = { correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,} 
const label = document.querySelectorAll('label');
const button = document.querySelector('.button');
const title = document.querySelector('h1');
const p = document.querySelectorAll('p');

function send(){
    event.preventDefault()
    
    for(let i = 0; i < campos.length; i++){
        if(campos[i].value == ''){
            imgError[i].style.display = 'block';
            texterror[i].style.visibility = 'visible';
            campos[i].style.border = '2.5px solid #D95555';
        } 

        else if(i == 0){
            imgSuccess[i].style.display = 'block';
            imgError[i].style.display = 'none';
            campos[i].style.border = '2.5px solid #00ff00';
            p[i].style.visibility = 'hidden';
        } 

        else if(i == 1){
            if(!expresiones.correo.test(campos[i].value)){
                imgError[i].style.display = 'block';
                texterror[i].style.visibility = 'visible';
                texterror[i].innerHTML = 'El correo no es válido';
                campos[i].style.border = '2.5px solid #D95555';
                let erroremail = `Incluye un signo en la dirección de correo electrónico. La dirección de correo ${campos[i].value} no incluye el signo @.`;
                imgError[i].setAttribute('title', erroremail);
            } 
                
            else{
                imgSuccess[i].style.display = 'block';
                imgError[i].style.display = 'none';
                campos[i].style.border = '2.5px solid #00ff00';
                p[i].style.visibility = 'hidden';
            }
        }

        else if(i == 2){ 
            if(campos[i].value.length > 8){
                imgError[i].style.display = 'block';
                texterror[i].style.visibility = 'visible';
                texterror[i].innerHTML = 'No debe tener más de 8 caracteres';
                campos[i].style.border = '2.5px solid #D95555';
            } 

            else{
                imgSuccess[i].style.display = 'block';
                imgError[i].style.display = 'none';
                campos[i].style.border = '2.5px solid #00ff00';
                p[i].style.visibility = 'hidden';
            }    
        }
        
        else if(i == 3){
            if(campos[i].value != campos[2].value){
                imgError[i].style.display = 'block';
                texterror[i].style.visibility = 'visible';
                texterror[i].innerHTML = 'Las contraseñas no coinciden';
                campos[i].style.border = '2.5px solid #D95555';

            } 
        
            else {
                imgSuccess[i].style.display = 'block';
                imgError[i].style.display = 'none';
                campos[i].style.border = '2.5px solid #00ff00';
                p[i].style.visibility = 'hidden';

            }
        }      
              
    }   
        for(let i = 0; i < campos.length; i++){
        label[i].style.marginTop = '0px';
        campos[i].style.marginBottom = '0px';
        p[i].style.marginTop = '-15px';
    }

} 

