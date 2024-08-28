

let product ={
   
      name:"iphone x",
      price: 400,
   }
        

    
   

    function addprice(){
      let newiphone=prompt("add new phone:")
      let newprice=+prompt("add new prices:")
      product.name = newiphone
      product.price = newprice

      render()
    }


    
    function updateprice(){
       let add=prompt("update old phone:")
       delete add
      let newprice=prompt("inter new phone:")
      product.name=newprice
      let price=+prompt("update old prices:")
       delete price
      let newvalue=prompt("inter new phone:")
      product.price=newvalue
      
      render()
    }

    function deleteprice(){
      let deliphone=prompt("delete the iphone")
      let price=prompt("delete the prices")
   
      delete product.name
      delete product.price
      render()

    }
    function render(){
     
     
    
      console.log(`
         
         name ${product.name}
         prices ${product.price}$
      
      `)
      
    
   
       
     
     
    }


    render()

    

