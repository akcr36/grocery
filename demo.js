window.onload = function() {
    var deleteItems = document.getElementsByClassName("btn btn-delete")
    var filterButton = document.getElementsByClassName("col-lg-4")[0]
    var addText = document.getElementById("add-item")
    if(deleteItems!=null)
    {
        console.log(deleteItems)
        for(var i=0;i<deleteItems.length;i++)
        {
            var button = deleteItems[i];
            button.addEventListener('click',removeElement)
        }
    }
    if(filterButton!=null)
    {
        initializeData()
        filterButton.addEventListener('click',function(event){
            // var name="paneer",quantity="3 kg",status="NOT AVAILABLE"
            // addData(name,quantity,status)
            // addCard(name,quantity,status)
            var dateItem = document.getElementById("item-date")
            var date = dateItem.value
            //console.log(dateItem.value.length)
            localStorage.setItem('filter-date',date)
            localStorage.setItem('filter-state',"1")
            location.replace("index.html")
        })
    }
    if(addText!=null)
    {
        addText.addEventListener('click',function(event){
            window.location.href = "add.html";
        })
    }
    //now for add grocery list
    var addButton = document.getElementById("add-button")
    if(addButton!=null)
    {
        addButton.addEventListener('click',function(event)
        {
            var nameItem = document.getElementById("item-name")
            var name = nameItem.value
            var quantityItem = document.getElementById("item-quantity")
            var quantity = quantityItem.value
            var statusItem = document.getElementById("item-status")
            var statust = statusItem.value
            var dateItem = document.getElementById("item-date")
            var date = dateItem.value
            //console.log("click")
            // console.log(name)
            // console.log(quantity)
            // console.log(statust)
            var status = "NOT AVAILABLE"
            if(statust=="0")
            {
                status = "PENDING"
            }
            else{
                if(statust=="1")
                {
                    status = "BOUGHT"
                }
            }
            addData(name,quantity,status,date)
            window.location.href = "index.html"
            //addCard(name,quantity,status)
        })
    }

    //now for update :)
    var updateItems = document.getElementsByClassName("btn btn-update")
    if(updateItems!=null)
    {
        for(var i=0;i<updateItems.length;i++)
        {
            var updateButton = updateItems[i]
            updateButton.addEventListener('click',updateElement)
        }
    }
    initializeUpdate()

    var updatePage = document.getElementById("update-page")
    if(updatePage!=null)
    {
        updatePage.addEventListener('click',updatePageF)
    }
}
function initializeData()
{
    var filterDate = localStorage.getItem('filter-date')
    var filterState = localStorage.getItem('filter-state')
    if(filterState==null)
    {
        filterDate = ""
        localStorage.setItem('filter-date',"")
    }
    else
    {
        if(filterState=="0")
        {
            filterDate = ""
            localStorage.setItem('filter-date',"")
        }
    }
    var filterBox = document.getElementById("item-date")
    filterBox.value = filterDate
    localStorage.setItem('filter-state','0')
    var nameList = [];
    var quantityList=[];
    var statusList=[];
    var dateList=[];
   nameList = JSON.parse(localStorage.getItem('name1'))
   quantityList = JSON.parse(localStorage.getItem('quantity1'))
   statusList = JSON.parse(localStorage.getItem('status1'))
   dateList = JSON.parse(localStorage.getItem('date1'))

   //temp
   //end
   if(nameList!=null)
   {
       for(var i=0;i<nameList.length;i++)
       {
           if(filterDate==dateList[i]||filterDate.length==0)
           {
            addCard(nameList[i],quantityList[i],statusList[i])
           }
       }
   }
}
function addData(name,quantity,status,date)
{
    var nameList = [];
    var quantityList=[];
    var statusList=[];
    var dateList = [];
    if(JSON.parse(localStorage.getItem('name1'))!=null){
    nameList = JSON.parse(localStorage.getItem('name1'))}
    if(JSON.parse(localStorage.getItem('quantity1'))!=null){
    quantityList = JSON.parse(localStorage.getItem('quantity1'))}
    if(JSON.parse(localStorage.getItem('status1'))!=null){
    statusList = JSON.parse(localStorage.getItem('status1'))}
    if(JSON.parse(localStorage.getItem('date1'))!=null){
    dateList = JSON.parse(localStorage.getItem('date1'))}
    if(name!=null){
    nameList.push(name)}
    if(quantity!=null){
    quantityList.push(quantity)}
    if(status!=null){
    statusList.push(status)}
    dateList.push(date)
    localStorage.setItem('name1',JSON.stringify(nameList))
    localStorage.setItem('quantity1',JSON.stringify(quantityList))
    localStorage.setItem('status1',JSON.stringify(statusList))
    localStorage.setItem('date1',JSON.stringify(dateList))
}
function removeData(p)
{
    var nameList = [];
    var quantityList=[];
    var statusList=[];
    var dateList = [];
    if(localStorage.getItem('name1')!=null){
    nameList = JSON.parse(localStorage.getItem('name1'))}
    if(localStorage.getItem('quantity1')!=null){
    quantityList = JSON.parse(localStorage.getItem('quantity1'))}
    if(localStorage.getItem('status1')!=null){
    statusList = JSON.parse(localStorage.getItem('status1'))}
    if(localStorage.getItem('date1')!=null){
    dateList = JSON.parse(localStorage.getItem('date1'))}
    nameList.splice(p,1)
    quantityList.splice(p,1)
    statusList.splice(p,1)
    dateList.splice(p,1)
    localStorage.setItem('name1',JSON.stringify(nameList))
    localStorage.setItem('quantity1',JSON.stringify(quantityList))
    localStorage.setItem('status1',JSON.stringify(statusList))
    localStorage.setItem('date1',JSON.stringify(dateList))
}
function initializeUpdate()
{
    var nameItem = document.getElementById("item-name")
    var quantityItem = document.getElementById("item-quantity")
    var statusItem = document.getElementById("item-status")
    var dateItem = document.getElementById("item-date")
    if(document.getElementById("update-flag")==null)
    return

    var nameList = [];
    var quantityList=[];
    var statusList=[];
    var dateList = [];
    if(localStorage.getItem('name1')!=null){
    nameList = JSON.parse(localStorage.getItem('name1'))}
    if(localStorage.getItem('quantity1')!=null){
    quantityList = JSON.parse(localStorage.getItem('quantity1'))}
    if(localStorage.getItem('status1')!=null){
    statusList = JSON.parse(localStorage.getItem('status1'))}
    if(localStorage.getItem('date1')!=null){
    dateList = JSON.parse(localStorage.getItem('date1'))}

    var i = localStorage.getItem('location')
    console.log(i)
    nameItem.value = nameList[i]
    quantityItem.value = quantityList[i]
    dateItem.value = dateList[i]
    if(statusList[i]=="BOUGHT")
    {
        statusItem.value = "1"
    }
    else
    {
        if(statusList[i]=="PENDING")
        {
            statusItem.value = "0"
        }
        else
        {
            statusItem.value = "2"
        }
    }
}
function updatePageF(event)
{
    button = event.target
    var nameItem = document.getElementById("item-name")
    var quantityItem = document.getElementById("item-quantity")
    var statusItem = document.getElementById("item-status")
    var dateItem = document.getElementById("item-date")

    if(document.getElementById("update-flag")==null)
    return

    var nameList = [];
    var quantityList=[];
    var statusList=[];
    var dateList = [];
    if(localStorage.getItem('name1')!=null){
    nameList = JSON.parse(localStorage.getItem('name1'))}
    if(localStorage.getItem('quantity1')!=null){
    quantityList = JSON.parse(localStorage.getItem('quantity1'))}
    if(localStorage.getItem('status1')!=null){
    statusList = JSON.parse(localStorage.getItem('status1'))}
    if(localStorage.getItem('date1')!=null){
    dateList = JSON.parse(localStorage.getItem('date1'))}

    var i = localStorage.getItem('location')

    nameList[i]=nameItem.value
    quantityList[i]=quantityItem.value
    dateList[i]=dateItem.value
    if(statusItem.value=="1")
    {
        statusList[i]="BOUGHT"
    }
    else
    {
        if(statusItem.value=="0")
        {
            statusList[i]="PENDING"
        }
        else
        {
            statusList[i]="NOT AVAILABLE"
        }
    }
    console.log(statusList[i])
    localStorage.setItem('name1',JSON.stringify(nameList))
    localStorage.setItem('quantity1',JSON.stringify(quantityList))
    localStorage.setItem('status1',JSON.stringify(statusList))
    localStorage.setItem('date1',JSON.stringify(dateList))
    window.location.href = "index.html"

}
function updateElement(event)       //finding update button
{
    var filterDate = localStorage.getItem('filter-date')
    var button = event.target
    var updateItems = document.getElementsByClassName("btn btn-update")
    var cnt = 0
    for(var i=0;i<updateItems.length;i++)
    {
        if(button==updateItems[i])
        {
            cnt = i
            break
            // localStorage.setItem('location',i)
            // window.location.href = "update.html"
        }
    }
    var dateList = []
    if(JSON.parse(localStorage.getItem('date1'))!=null){
    dateList = JSON.parse(localStorage.getItem('date1'))}

    for(var i=0;i<dateList.length;i++)
    {
        if(dateList[i]==filterDate||filterDate.length==0)
        {
            if(cnt==0)
            {
                localStorage.setItem('location',i)
                //console.log(i)
                if(filterDate.length!=0)
                {
                    localStorage.setItem('filter-state',"1")
                }
                window.location.href = "update.html"
            }
            cnt--
        }
    }
}
function removeElement(event)     //finding delete button
{
    var filterDate = localStorage.getItem('filter-date')
    var buttonClicked = event.target
    //console.log('clicked')
    var deleteItems = document.getElementsByClassName("btn btn-delete")
    var cnt = 0
    for(var i=0;i<deleteItems.length;i++)
    {
        if(deleteItems[i]==buttonClicked)
        {
            //console.log(i)
            //removeData(i)
            cnt = i
            break
        }
    }
    var dateList = []
    if(JSON.parse(localStorage.getItem('date1'))!=null){
    dateList = JSON.parse(localStorage.getItem('date1'))}

    for(var i=0;i<dateList.length;i++)
    {
        if(dateList[i]==filterDate||filterDate.length==0)
        {
            if(cnt==0)
            {
                removeData(i)
                break
            }
            cnt--
        }
    }
    buttonClicked.parentElement.parentElement.remove()
    //now we will delete it from data storage
    //console.log(deleteItems.length)
    if(filterDate.length!=0)
    {
        localStorage.setItem('filter-state',"1")
    }
    location.replace("index.html")
}
function addCard(name,quantity,status)
{
    var rowN = document.createElement('div')
    var parentI = document.getElementsByClassName("row mt-4")[0]
    rowN.classList.add("col-lg-4")
    var clr = "text-info"
    if(status=="BOUGHT")
    {
        clr = "text-success"
    }
    else
    {
        if(status == "NOT AVAILABLE")
        {
            clr = "text-danger"
        }
    }
    var cardElement = `
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${quantity}</h6>
        <p class=${clr}>${status}</p>
        <button class="btn btn-update" type="button">Update</button>
        <button class="btn btn-delete" type="button">Delete</button>
        </div>
    </div>`
    rowN.innerHTML = cardElement
    parentI.append(rowN)
    var button = rowN.getElementsByClassName("btn btn-delete")[0]
    button.addEventListener('click',removeElement)
    updateButton = rowN.getElementsByClassName("btn btn-update")[0]
    updateButton.addEventListener('click',updateElement)
}