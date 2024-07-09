function encriptar() {
    let texto = document.getElementById("texto").value;
    let candado = document.getElementById ("candado");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")    
        if(document.getElementById("texto").value.length !=0) {
        document.getElementById("msj").textContent =textoCifrado;
       
    }
        else{
            candado.src = "encriptar.png";
        alert("Debes ingresar algún texto");
        }

        document.getElementById("texto").value =textoCifrado;
    }
    function desencriptar() { 
        let texto = document.getElementById("msj").textContent;
        document.getElementById("texto").value =texto;
       
        let candado = document.getElementById ("candado");
        
        let textodesCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u")    
            
            if(document.getElementById("texto").value.length !=0) {
            document.getElementById("msj").textContent =textodesCifrado;
        }
            else{
                candado.src = "encriptar.png";
            alert("Debes ingresar algún texto");
            }
    
        document.getElementById("texto").value =textodesCifrado;
        }

        function copiar(){
            let texto = document.getElementById("msj");
            
            let aux = document.createElement("cp");
            aux.setAttribute("value", document.getElementById("msj").innerHTML);
            document.body.appendChild(aux);
            
            Document.execCommand('copy');
            document.body.removeChild(aux);
    
        }
    
    


