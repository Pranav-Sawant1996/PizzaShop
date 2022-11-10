
const createOrderCard = (orderId,totalCost,size) => {


	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let orderIdSpan = document.createElement('span')
	let cancelButtonI = document.createElement('i')
	let cardBodyDiv = document.createElement('div')
	let cardTable = document.createElement('table')
	let cardTableBody=document.createElement('tbody')

	let cardTableBodyRow1= document.createElement('tr')
	let cardTableBodyRow1Data1= document.createElement('th')
	let cardTableBodyRow1Data2= document.createElement('td')
	let cardTableBodyRow1Data3= document.createElement('td')

	
	

	let cardTableBodyRow3= document.createElement('tr')
	let cardTableBodyRow3Data1= document.createElement('th')
	let cardTableBodyRow3Data2=document.createElement('td')
	
	

	
	let orderStatusSpan = document.createElement('span')
	let cardFooterDiv = document.createElement('div')

	colDiv.classList = 'col-md-3'
	cardDiv.classList = 'card text-center'
	cancelButtonI.classList = 'fa-solid fa-xmark cancel-btn'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardTable.classList = 'table'

	orderStatusSpan.classList = 'badge rounded-pill bg-success'
	cardFooterDiv.classList = 'card-footer'

	orderIdSpan.innerHTML = `Order No.: <b>${orderId}</b>`
	

	cardTableBodyRow1Data1.innerText='1'
	
	cardTableBodyRow3Data1.innerText='Total(Including taxes)'
	cardTableBodyRow1Data2.innerText=`${size} Pizza`
	

	cardTableBodyRow3Data1.colSpan='2'
	
	cardTableBodyRow3Data2.innerText=`$${Math.round(totalCost*1.18)}`
	cardTableBodyRow1Data3.innerText=`$${totalCost}`


	orderStatusSpan.innerText = 'Order placed'
	orderStatusSpan.id = orderId
	colDiv.id="mainCard"+orderId
	
cardFooterDiv.innerText = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
  });

	cancelButtonI.addEventListener('click', () => {
		let cancel=document.getElementById(orderId).getAttribute('cancel')
			if(!cancel){

				colDiv.style.display = 'none'
				document.getElementById('order-alert').style.display = 'block'
		
				setTimeout(() => {
					document.getElementById('order-alert').style.display = 'none'
				}, 5000)
			}
			else{
				document.getElementById('order-alert-cancel').style.display = 'block'
		
				setTimeout(() => {
					document.getElementById('order-alert-cancel').style.display = 'none'
				}, 5000)
			}
		
	})



	cardTableBodyRow3.append(cardTableBodyRow3Data1, cardTableBodyRow3Data2)

	
	cardTableBodyRow1.append(cardTableBodyRow1Data1, cardTableBodyRow1Data2, cardTableBodyRow1Data3)
	cardTableBody.append(cardTableBodyRow1, cardTableBodyRow3)

	cardTable.appendChild(cardTableBody)
	cardBodyDiv.appendChild(cardTable)
	cardBodyDiv.appendChild(orderStatusSpan)
	cardHeaderDiv.appendChild(orderIdSpan)
	cardHeaderDiv.appendChild(cancelButtonI)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	colDiv.appendChild(cardDiv)
	document.getElementById('order-cards-wrapper').appendChild(colDiv)
}


