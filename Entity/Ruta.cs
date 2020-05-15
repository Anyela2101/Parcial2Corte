using System;

namespace Entity
{
    public class Ruta
    {
        public string identificacioncliente{get;set;}
        public string codigoruta {get;set;}
        public string ciudades {get;set;}
        public double valor {get;set;}
        
        public void ValorRuta(){
            if(ciudades=='Valledupar-Bogota'){
                valor=90000;
            }else if(ciudades=='Valledupar-Barranquilla'){
                Valor=35000
            }else if(ciudades=='Valledupar-Santa Marta'){
                valor=40000;
            }else if(ciudades=='Valledupar-Cartagena'){
                valor=60000;
            }
        }

    }
}