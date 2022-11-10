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

/*
	<div class="col-md-3">
		<div class="card text-center">
			<div class="card-head	er">
				Order No.: MP202209230005
			</div>
			<div class="card-body">
				<h5 class="card-title">Bill Amount: $52</h5>
				<p class="card-text">Large Pizza - 2 Nos<br>
					Medium Pizza - 3 Nos</p>
				<span class="badge rounded-pill bg-success">Order placed</span>
			</div>
			<div class="card-footer">
				23-09-2022 09:47:36 PM
			</div>
		</div>
	</div>
*/








	// document.getElementById('order-no-display').innerText = `Status for Order No. ${orderId}`
	// document.getElementById('order-no-display').style.display = 'block'

	// document.getElementsByClassName('order-status-block')[0].classList.replace('btn-light', 'btn-success')

	// setTimeout(() => {
	// 	document.getElementsByClassName('order-status-block')[1].classList.replace('btn-light', 'btn-success')
	// 	setTimeout(() => {
	// 		document.getElementsByClassName('order-status-block')[2].classList.replace('btn-light', 'btn-success')
	// 		setTimeout(() => {
	// 			document.getElementsByClassName('order-status-block')[3].classList.replace('btn-light', 'btn-success')
	// 			setTimeout(() => {
	// 				document.getElementsByClassName('order-status-block')[4].classList.replace('btn-light', 'btn-success')
	// 				setTimeout(() => {
	// 					document.getElementsByClassName('order-status-block')[5].classList.replace('btn-light', 'btn-success')
	// 					setTimeout(() => {
	// 						document.getElementsByClassName('order-status-block')[6].classList.replace('btn-light', 'btn-success')
	// 						setTimeout(() => {
	// 							document.getElementsByClassName('order-status-block')[7].classList.replace('btn-light', 'btn-success')
	// 							setTimeout(() => {
	// 								document.getElementsByClassName('order-status-block')[8].classList.replace('btn-light', 'btn-success')
	// 								document.getElementsByClassName('order-status-block')[9].classList.replace('btn-light', 'btn-success')
	// 							}, 2000)
	// 						}, 8000)
	// 					}, 15000)
	// 				}, 5000)
	// 			}, 12000)
	// 		}, 5000)
	// 	}, 10000)
	// }, 2000)

	// document.getElementById('order-id-input').value = ''