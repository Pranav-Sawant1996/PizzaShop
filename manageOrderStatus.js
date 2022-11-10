
const manageOrderStatus=async (orderId)=>{
  
    const chefReceivedOrder = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("Chef received the order and started preparing");
            document.getElementById(orderId).innerText="Chef started preparing"
            resolve()
          }, 2000);
        });
      };

      const PizzaSauceadded = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("Pizza Sauce added");
            document.getElementById(orderId).innerText="Pizza Sauce added"
            resolve()
          }, 10000);
        });
      };

      const FirstLayerOfCheezeAdded = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("First layer of cheeze added");
             document.getElementById(orderId).innerText="First layer of cheeze added"
             resolve()
          }, 5000);
        });
      };

      const ToppingsAdded = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("Toppings added");
             document.getElementById(orderId).innerText="Toppings added"
             resolve()
          }, 12000);
        });
      };

      const SecondLayerOfheezeAdded = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("Second layer of cheeze added");
            document.getElementById(orderId).innerText="Second layer of cheeze added"
            resolve()
          }, 5000);
        });
      };

      const PizzaBaked = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("Pizza baked!");
            document.getElementById(orderId).innerText="Pizza baked!"
          document.getElementById(orderId).setAttribute('cancel',true)
            resolve()
          }, 15000);
          
        });
      };

      const OreganoAddedAndPacked = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("Oregano added and packed");
            document.getElementById(orderId).innerText="Oregano added and packed"
            resolve()
          }, 8000);
        });
      };

      const PackageReceivedAtCounter = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // console.log("Package received at counter");
            document.getElementById(orderId).innerText="Package received at counter"
           resolve()
        }, 2000);
        });
      };
      const orderReady= () =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              // console.log("Package received at counter");
              document.getElementById(orderId).innerText="The order is ready"
             resolve()
            //  setTimeout(()=>{
            //   console.log('cancel')
            //   document.getElementById('mainCard').style.display='none'
            // },2000)
          }, 2000);
          });
      }
      const orderCardFade= () =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              // console.log("Package received at counter");
              console.log('cancel')
              document.getElementById(`mainCard${orderId}`).style.display='none'
             resolve()
             
          }, 5000);
          });
      }


        try{

        //   console.log('Order Placed')
          await chefReceivedOrder()
          await PizzaSauceadded()
          await FirstLayerOfCheezeAdded()
          await ToppingsAdded()
         
          await SecondLayerOfheezeAdded()
          await PizzaBaked()
          await OreganoAddedAndPacked()
          await PackageReceivedAtCounter()
          await orderReady()
          await orderCardFade()

        }
     
      catch(err){ console.log(err)}
     
    
   
}