export class Producto{
    constructor(
        private codProducto:String,
        private nomProducto:String,
        private precioProducto:number,
        
      ){}
    public Getprecio(){
        return this.precioProducto;
    }
 
 
  
    
  }
  
  export class ProductoporAlmacen{
    constructor( 
      private producto:Producto,
      private cantidad:number,
      private almacen:Almacen){}
    public GetProducto(){
      return this.producto
    }
    public Getcantidad(){
  
      return this.cantidad;
    }
    public Agregarcantidad(cantidada:number){
      this.cantidad+=cantidada;
    }
    public Quitarcantidad(cantidada:number){
      this.cantidad-=cantidada;
    }
  }
  
    
  
  export class Almacen{
    constructor(
      private codAlmacen:String,
      private direccionAlmacen:String,
      private productos:ProductoporAlmacen[]=[]
      ){}
      public agregarproducto(producto:ProductoporAlmacen){
        this.productos.push(producto);
        
      }
      public buscarProducto(producto:Producto){
        const resultado=this.productos.find(product=>product.GetProducto()==producto);
        if (resultado==null){
          return VacioAl;
        }
        return resultado;
      }
      public getProductos(){
        return this.productos;
      }
  }

    const almacen00:Almacen=new Almacen('Alm000','*****');
  const Vacio:Producto=new Producto('P0000',"No hay producto",0)
  const VacioAl:ProductoporAlmacen=new ProductoporAlmacen(Vacio,0,almacen00)