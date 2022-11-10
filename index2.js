let numberOfOrders=0

const manageOrder = () => {
	let size=document.getElementById('pizza-size').value
	
	if(size!='None'){
		let breadPrice=0
		if(size==='Large') breadPrice=20
		else breadPrice=15
		
		let topping1=document.getElementById('blackOlives').checked
		let topping1Cost=0
		if(topping1) topping1Cost=4
		let topping2=document.getElementById('jalapeño').checked
		let topping2Cost=0
		if(topping2) topping2Cost=3
		let topping3=document.getElementById('mushrooms').checked
		let topping3Cost=0
		if(topping3) topping3Cost=5
		let toppingsPrice=topping1Cost+topping2Cost+topping3Cost
		let totalCost=breadPrice+toppingsPrice
		
		numberOfOrders++
		let todaysDate=new Date()
		let orderId = `TPS${todaysDate.getFullYear()}${todaysDate.getMonth()}${todaysDate.getDate()}${todaysDate.getHours()}${numberOfOrders}`
		createOrderCard(orderId,totalCost,size)
		manageOrderStatus(orderId)
	}
	else{
		alert('Please choose the size of pizza')
	}
}

