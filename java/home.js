let muda_img = function(id,img){
    document.getElementById(id).src = img;
}

let confirma = 0;
let conta_img = 0;

let nav = function(){
    let cont = 0;
    let lista_id = ['gato','cachorro','ra','pato','calopsita','cagado','chinchila','coelho','coruja','furao','galinha','gerbo','hamster','jabuti','lagarto','marreco','ourico','palhaco','betta','porco_india','rato','serpente'];
    let lista_nome = ['Gato','Cachorro','Rã','Pato','Calopsita','Cágado','Chinchila','Coelho','Coruja','Furão','Galinha','Gerbo','Hamster','Jabuti','Lagarto','Marreco','Ouriço','Peixe-Palhaço','Peixe-Betta','Porquinho da Índia','Rato','Serpente'];

    if(confirma==0){
        
        while (cont<lista_id.length){
            document.getElementById(lista_id[cont]).innerHTML = lista_nome[cont];
            document.getElementById(lista_id[cont]).style.paddingBottom = '5px';
            document.getElementById(lista_id[cont]).style.paddingTop = '5px';
            document.getElementById(lista_id[cont]).className = 'main-6 col-4';
            cont+=1;
        }
        confirma = 1;

    }else{

        while (cont<lista_id.length){
            document.getElementById(lista_id[cont]).innerHTML = '';
            document.getElementById(lista_id[cont]).style.paddingBottom = '0px';
            document.getElementById(lista_id[cont]).style.paddingTop = '0px';
            cont+=1;
        }
        confirma = 0;
    }

}

let muda_img_p = function(lista_img,id){
    conta_img += 1;

    if(conta_img==lista_img.length){
        conta_img = 0;
    }

    document.getElementById(id).src = lista_img[conta_img];
    
    
}

let muda_img_a = function(lista_img,id){
    conta_img -= 1;

    if(conta_img<0){
        conta_img = lista_img.length-1;
    }

    document.getElementById(id).src = lista_img[conta_img];
    
}