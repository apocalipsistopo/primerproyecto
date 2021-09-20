import { Component } from '@angular/core';
import { Producto,ProductoporAlmacen,Almacen } from './clases';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular1';
}



const almacen01:Almacen=new Almacen('Alm001','Magisterio segunda etapa H-22');
const almacen02:Almacen=new Almacen('Alm002','La florida Y-9');
const almacen03:Almacen=new Almacen('Alm002','Pardo I-99');


const LecheGloria:Producto=new Producto('P0001','Leche gloria',3.5);
const LechePuraVida:Producto=new Producto('P0002','Leche Pura Vida',3);
const GalletasodaV:Producto=new Producto('P0003','Galleta Soda V',0.8);
const Galletasodafield:Producto=new Producto('P0004','Galleta Soda Field',0.6);
const Piqueos:Producto=new Producto('P0005','Piqueos',1.3);
const Doritos:Producto=new Producto('P0006','Doritos',1.3);
const PapitasLays:Producto=new Producto('P0007','Papitas Lays',1);
const Ariel:Producto=new Producto('P0008','Detergente Ariel',1);
const Patito:Producto=new Producto('P0009','Detergente Patito',1);
const Ace:Producto=new Producto('P0010','Detergente Ace',1);
const Ajinomen:Producto=new Producto('P0011','Ajinomen',1.2);
const SalCocina:Producto=new Producto('P0012','Sal de cocina',3.5);
const SalMesa:Producto=new Producto('P0014','Sal de mesa',3.5);
const Ajinomoto:Producto=new Producto('P0015','Ajinomoto',1);


const Almacen01LecheGloria: ProductoporAlmacen=new ProductoporAlmacen(LecheGloria,5,almacen01);
almacen01.agregarproducto(Almacen01LecheGloria);
const Almacen01LechePuraVida: ProductoporAlmacen=new ProductoporAlmacen( LechePuraVida,20,almacen01);
almacen01.agregarproducto(Almacen01LechePuraVida);
const Almacen01GalletasodaV: ProductoporAlmacen=new ProductoporAlmacen( GalletasodaV,10,almacen01 );
almacen01.agregarproducto(Almacen01GalletasodaV);
const Almacen01Galletasodafield: ProductoporAlmacen=new ProductoporAlmacen(Galletasodafield,12,almacen01);
almacen01.agregarproducto(Almacen01Galletasodafield);
const Almacen01Piqueos: ProductoporAlmacen=new ProductoporAlmacen(Piqueos,8,almacen01);
almacen01.agregarproducto(Almacen01Piqueos);
const Almacen01Doritos: ProductoporAlmacen=new ProductoporAlmacen(Doritos,5,almacen01);
almacen01.agregarproducto(Almacen01Doritos);
const Almacen01PapitasLays: ProductoporAlmacen=new ProductoporAlmacen(PapitasLays,20,almacen01);
almacen01.agregarproducto(Almacen01PapitasLays);
const Almacen01Ariel: ProductoporAlmacen=new ProductoporAlmacen(LecheGloria,21,almacen01);
almacen01.agregarproducto(Almacen01Ariel);
const Almacen01Patito: ProductoporAlmacen=new ProductoporAlmacen(Patito,15,almacen01);
almacen01.agregarproducto(Almacen01Patito);
const Almacen01Ace: ProductoporAlmacen=new ProductoporAlmacen(Ace,16,almacen01);
almacen01.agregarproducto(Almacen01Ace);
const Almacen01Ajinomen: ProductoporAlmacen=new ProductoporAlmacen(Ajinomen,17,almacen01);
almacen01.agregarproducto(Almacen01Ajinomen);
const Almacen01SalCocina: ProductoporAlmacen=new ProductoporAlmacen(SalCocina,18,almacen01);
almacen01.agregarproducto(Almacen01SalCocina);
const Almacen01SalMesa: ProductoporAlmacen=new ProductoporAlmacen(SalMesa,12,almacen01);
almacen01.agregarproducto(Almacen01SalMesa);
const Almacen01Ajinomoto: ProductoporAlmacen=new ProductoporAlmacen(Ajinomoto,14,almacen01);
almacen01.agregarproducto(Almacen01Ajinomoto);

const Almacen02LecheGloria: ProductoporAlmacen=new ProductoporAlmacen(LecheGloria,20,almacen02);
almacen02.agregarproducto(Almacen02LecheGloria);
const Almacen02LechePuraVida: ProductoporAlmacen=new ProductoporAlmacen( LechePuraVida,21,almacen02);
almacen02.agregarproducto(Almacen02LechePuraVida);
const Almacen02GalletasodaV: ProductoporAlmacen=new ProductoporAlmacen( GalletasodaV,25,almacen02 );
almacen02.agregarproducto(Almacen02GalletasodaV);
const Almacen0Galletasodafield: ProductoporAlmacen=new ProductoporAlmacen(Galletasodafield,30,almacen02);
almacen02.agregarproducto(Almacen0Galletasodafield);
const Almacen02Piqueos: ProductoporAlmacen=new ProductoporAlmacen(Piqueos,31,almacen02);
almacen02.agregarproducto(Almacen02Piqueos);
const Almacen02Doritos: ProductoporAlmacen=new ProductoporAlmacen(Doritos,50,almacen02);
almacen02.agregarproducto(Almacen02Doritos);
const Almacen02PapitasLays: ProductoporAlmacen=new ProductoporAlmacen(PapitasLays,6,almacen02);
almacen02.agregarproducto(Almacen02PapitasLays);
const Almacen02Ariel: ProductoporAlmacen=new ProductoporAlmacen(LecheGloria,4,almacen02);
almacen02.agregarproducto(Almacen02Ariel);
const Almacen02Patito: ProductoporAlmacen=new ProductoporAlmacen(Patito,25,almacen02);
almacen02.agregarproducto(Almacen02Patito);
const Almacen02Ace: ProductoporAlmacen=new ProductoporAlmacen(Ace,30,almacen02);
almacen02.agregarproducto(Almacen02Ace);
const Almacen02Ajinomen: ProductoporAlmacen=new ProductoporAlmacen(Ajinomen,25,almacen02);
almacen02.agregarproducto(Almacen02Ajinomen);
const Almacen02SalCocina: ProductoporAlmacen=new ProductoporAlmacen(SalCocina,36,almacen02);
almacen02.agregarproducto(Almacen02SalCocina);
const Almacen02SalMesa: ProductoporAlmacen=new ProductoporAlmacen(SalMesa,14,almacen02);
almacen02.agregarproducto(Almacen02SalMesa);
const Almacen02Ajinomoto: ProductoporAlmacen=new ProductoporAlmacen(Ajinomoto,18,almacen02);
almacen02.agregarproducto(Almacen02Ajinomoto);

const Almacen03LecheGloria: ProductoporAlmacen=new ProductoporAlmacen(LecheGloria,19,almacen03);
almacen03.agregarproducto(Almacen03LecheGloria);
const Almacen03LechePuraVida: ProductoporAlmacen=new ProductoporAlmacen( LechePuraVida,40,almacen03);
almacen03.agregarproducto(Almacen03LechePuraVida);
const Almacen03GalletasodaV: ProductoporAlmacen=new ProductoporAlmacen( GalletasodaV,31,almacen03 );
almacen03.agregarproducto(Almacen03GalletasodaV);
const Almacen03Galletasodafield: ProductoporAlmacen=new ProductoporAlmacen(Galletasodafield,14,almacen03);
almacen03.agregarproducto(Almacen03Galletasodafield);
const Almacen03Piqueos: ProductoporAlmacen=new ProductoporAlmacen(Piqueos,55,almacen03);
almacen03.agregarproducto(Almacen03Piqueos);
const Almacen03Doritos: ProductoporAlmacen=new ProductoporAlmacen(Doritos,11,almacen03);
almacen03.agregarproducto(Almacen03Doritos);
const Almacen03PapitasLays: ProductoporAlmacen=new ProductoporAlmacen(PapitasLays,10,almacen03);
almacen03.agregarproducto(Almacen03PapitasLays);
const Almacen03Ariel: ProductoporAlmacen=new ProductoporAlmacen(LecheGloria,8,almacen03);
almacen03.agregarproducto(Almacen03Ariel);
const Almacen03Patito: ProductoporAlmacen=new ProductoporAlmacen(Patito,2,almacen03);
almacen03.agregarproducto(Almacen03Patito);
const Almacen03Ace: ProductoporAlmacen=new ProductoporAlmacen(Ace,4,almacen03);
almacen03.agregarproducto(Almacen03Ace);
const Almacen03Ajinomen: ProductoporAlmacen=new ProductoporAlmacen(Ajinomen,4,almacen03);
almacen03.agregarproducto(Almacen03Ajinomen);
const Almacen03SalCocina: ProductoporAlmacen=new ProductoporAlmacen(SalCocina,6,almacen03);
almacen03.agregarproducto(Almacen03SalCocina);
const Almacen03SalMesa: ProductoporAlmacen=new ProductoporAlmacen(SalMesa,5,almacen03);
almacen03.agregarproducto(Almacen03SalMesa);
const Almacen03Ajinomoto: ProductoporAlmacen=new ProductoporAlmacen(Ajinomoto,8,almacen03);
almacen03.agregarproducto(Almacen03Ajinomoto);


function transferir(proveedor:Almacen,destino:Almacen,producto:Producto,cantidad:number){
  let PporAproveedor:ProductoporAlmacen=proveedor.buscarProducto(producto)
    if(PporAproveedor.Getcantidad()>=cantidad){
        let Ppordestino:ProductoporAlmacen=destino.buscarProducto(producto)
        console.table(PporAproveedor);
        console.table(Ppordestino);
        PporAproveedor.Quitarcantidad(cantidad)
        Ppordestino.Agregarcantidad(cantidad)
        console.log("se concreto la transferencia de ",proveedor ," a ",destino ," de el producto ",producto ," en la cantidad ", cantidad)
        console.table(PporAproveedor);
        console.table(Ppordestino);
    }else{
      console.log("El saldo es insuficiente para relaizar la transferencia")
    }
}
console.log(Almacen01Ajinomen.Getcantidad())
Almacen01Ajinomen.Agregarcantidad(5);
console.log(Almacen01Ajinomen.Getcantidad())
transferir(almacen01,almacen02,LecheGloria,5);