function siempreHambriento(arr) {

    let mensaje=[];

    for(let i=0;i<arr.length;i++){

        if(arr[i]==="comida"){
            mensaje.push("delicioso");
        }
    }

    if(mensaje.length===0){
        console.log("Tengo hambre");
    }
    else{
        console.log(mensaje);
    }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);

siempreHambriento([4, 1, 5, 7, 2]);



