import "./bootstrap.min.css";


class Producto
{
    constructor(nombre, precio)
        {
            this.nombre=nombre    
            this.precio=precio
        }
}
class UI
{
    addProduct(product)
        {
        const productList= document.getElementById("productList")
        const element = document.createElement("div")
        element.innerHTML=`<div class="card text-center mb-4"><div class="card-body"><strong>Product: </strong> ${product.nombre}<strong>Price: </strong>  ${product.precio} <a href="#" name="delete" class="btn btn-danger">ELIMINAR</a></div></div>`
        productList.appendChild(element)
        this.resetForm()
        }

    resetForm(){
        document.getElementById("productName").reset()
    }
    deleteProduct(element){
        if(element.name==="delete"){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage("Producto eliminado correctamente","warning")
        }
    }
    showMessage(message, cssClass){
        const div = document.createElement("div")
        div.className=`alert alert-${cssClass} mt-3`
        div.appendChild(document.createTextNode(message))
        // show in DOM
       const container= document.querySelector(".container")
       const app= document.querySelector("#app")
       container.insertBefore(div,app)
       setTimeout(function(){
           document.querySelector(".alert").remove()
       },1500)
    }
}

//dom
document.getElementById("productName").addEventListener("submit",(event)=>{
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const product = new Producto(name, price)
    const ui = new UI()
    if(name===""  |  price ===""){
     
        event.preventDefault()
        return ui.showMessage("faltan datos...","danger") ///return evita que se ejecute el resto de la funcion
    } 
        ui.addProduct(product)
        ui.showMessage("agregado con éxito!!","success")
        event.preventDefault()
})
document.getElementById("productList").addEventListener("click",(e)=>{
 const ui =new UI()
 ui.deleteProduct(e.target)
})