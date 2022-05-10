interface ElementHTML{
    value : string 
}

interface HTMLStyleElement{
      display: any
} 

interface City {
    id : number ;
    name : string ;
}

interface Comune {
    id : number ;
    name : string ;
    city : number ;
}

const comunes : Array<Comune> = [
    {
        id : 1 ,
        name : "La Florida",
        city : 1
    },
    {
        id : 2 ,
        name : "Lo Prado",
        city : 1,
    },
    {
        id : 3 ,
        name : "Renca",
        city : 1,
    },
    {
        id : 4 ,
        name : "Conce 1",
        city : 2,
    },
    {
        id : 5 ,
        name : "Conce 2",
        city : 2,
    },
    {
        id : 6 ,
        name : "Conce 3",
        city : 2,
    },
    {
        id : 7 ,
        name : "Talca 1",
        city : 3,
    },
    {
        id : 8 ,
        name : "Talca 2",
        city : 3,
    },
    {
        id : 9 ,
        name : "Talca 3",
        city : 3,
    },
] ;

const comunaDestino  = document.querySelector('#optionComuna') ;

// Mostrar valores Segun la ciudad seleccionada
function changeValue( element : ElementHTML  ) : void {

    const valueSelected : number = parseInt( element.value )  ;
    
    if( valueSelected == 0 ) return ;
    let options : string = "" ;

    comunes.forEach( comune => {
    
        if( comune.city == valueSelected ){
            options += `<li class="option" onclick="hiddenSelect()" value="${comune.id}"> ${comune.name}</li>`;
        }
    });

    comunaDestino.innerHTML = options ;
    

};
    
function detectedSelect (event) : void {
    
    switch ( event.target.className ){
    
        case "option": selectedValue( event.target ); break ;
    
        case "select shadow": showValue(event.srcElement.nextElementSibling ); break ;
    
        default : hiddenSelect() ;
    }  
};
     
//Mostrar elementos de .options-container

function showValue ( el : any) : void  {

    switch ( el.style.display ){
        case "" : el.style.display = "block" ; break ;

        case "block" : el.style.display = "none" ; break ;

        default : el.style.display = "block" ;
    }

}
     
// Mostrar valor seleccionado por .my-select

function selectedValue (element) :void {

    const text : string= element.innerHTML ;
    const elementInput = element.parentNode.previousSibling.previousElementSibling ;
    elementInput.value =  text.trim() ;

    selectedCheck( element );
}
     
// Ocultar Select
function hiddenSelect() :void {
    let options : HTMLStyleElement['display']= document.querySelectorAll('.options-container')
    options.forEach( elem => elem.style.display = "none" ) ;
}

//Cuando carga el DOM, se carga función
( function (): void{
    document.onclick = detectedSelect ;
}());

//Destacar el valor seleccionado
function selectedCheck (elementSelected) :void {

    const option = document.querySelectorAll('.option');
    option.forEach( el => el.classList.remove("selected") ) ;
    elementSelected.classList.add("selected");
};

let nombre : any = document.querySelector('#iptText') ;
const cantidad : any = document.querySelector('#iptCantidad') ;
const ciudadDestino : any= document.querySelector('#iptCiudadDestino') ;

const iptOrigen : any= document.querySelector('#iptOrigen') ;

function validar(event : any):any{
    event.preventDefault();
    
    if( nombre.value == "" ){
        alert("Debe agregar un nombre");
        nombre.focus();
        return false ;
    }

    if( cantidad.value == "" || cantidad.value == "0" ){
        alert("Debe agregar una cantidad");
        cantidad.focus();
        return false ;
    }

    if( iptOrigen.value == "" ){
        alert("Debe agregar una ciudad de origen");
        iptOrigen.focus();
        return false ;
    }

    const formTickets : any = document.querySelector('#formTickets') ;

    console.log("formTickets" , formTickets);
    formTickets.submit() ;
}  



