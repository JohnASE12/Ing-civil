const text = document.getElementById(nombres)
const text = document.getElementById(apellidos)

const database = firebase.database();

btnEnviar.addEventListener( 'click ', (e)) => {
e.preventDefaul();
database.ref('/bdDato).set({
 campo1: nombres.value

    
});

});