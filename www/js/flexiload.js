var  url ="";
var  weburl ="http://bmrs24.com/omobile/";

function checkAuth()
	{
	if (localStorage.getItem("token") === null || localStorage.getItem("token") == "") {
	 window.location.replace("index.html"); 

	}
}


function getBalance()
				{


						$.ajax({url: weburl+'action.php',
                        data: {action : 'getbalance', token:localStorage.getItem("token")},
                        type: 'post',                   
                        success: function (result) { 
						$("#serverbalance").text(""+result);
                        }    
						});
                      

				}




    function makeFlexiload () {  
		 checkAuth();
         var phone      = $("#phone").val();
         var amount     = $("#amount").val();
         var load_type  = $("#load_type").val();
         message    	= "";     
            
			
				
			
      
            

               

                    $.ajax({url: weburl+'action.php',
                        data: {action : 'makeflexiload', phone: phone,amount:amount,load_type:load_type,token:localStorage.getItem("token")},
                        type: 'post',                   
                       
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                           
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                           
                        },
                        success: function (result) { 
                            if(result=="success") {
                               alert("Succesfully Flexiload Request Accepted.");                    
							    window.location.replace("report2.html");
                            } else {
                                alert(result); 
                            }
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action                
                            alert('Network error has occurred please try again!');
                        }
                    });  
				}					
                


    function makeBkash () {  
		checkAuth();
		
         var phone      = $("#phone").val();
         var amount     = $("#amount").val();
		 var load_type    =  $("#Id").val();
         message    = "";     
                
      
              

               

                    $.ajax({url: weburl+'action.php',
                        data: {action : 'makebkash',phone: phone,amount:amount,load_type:load_type,token:localStorage.getItem("token")},
                        type: 'post',                   
                       
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                           // This will show ajax spinner
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                             // This will hide ajax spinner
                        },
                        success: function (result) { 
                            if(result=="success") {
                               alert("Successfully Completed.");                    
							   window.location.replace("report.html"); 

                            } else {
                                alert(result); 
                            }
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action                
                            alert('Network error has occurred please try again!');
                        }
                    });                   
            }          
     

       
function logout(){
  
   $.ajax({url: weburl+'action.php',
                        data: {action : 'logout',token:localStorage.getItem("token")},
                        type: 'post',                   
                       
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                            
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                            
                        },
                        success: function (result) { 
                            if(result=="success") {
								localStorage.setItem("token","");
								localStorage.clear();
								 window.location.replace("index.html"); 
                            
                            } else {
								localStorage.setItem("token","");
								localStorage.clear();
								 window.location.replace("index.html"); 
                            }
                        },
                        error: function (request,error) {
							localStorage.setItem("token","");
							localStorage.clear();
							 window.location.replace("index.html"); 
								 
                            // This callback function will trigger on unsuccessful action                
                        
                        }
                    });

}


function getFlexiloadListing(){  
checkAuth();
// ignore this first line (its fidle mock) and it will return what ever you pass as json:... parameter... consider to change it to your ajax call
$.ajax({
    url: weburl+'action.php',
    type: "post",
    dataType: "json",
   data: {action : 'getFlexiHistory',token:localStorage.getItem("token")},
   success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
        drawFlexiTable(data);
    }
})
}

function getBkashListing(){  
checkAuth();
// ignore this first line (its fidle mock) and it will return what ever you pass as json:... parameter... consider to change it to your ajax call
$.ajax({
    url: 'action.php',
    type: "post",
    dataType: "json",
   data: {action : 'getBkashHistory',token:localStorage.getItem("token")},
   success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
        drawBkashTable(data);
    }
})
}



function drawFlexiRow(rowData) {
    var row = $("<tr />")
    $("#personDataTableFlexiload").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.phone+ "</td>"));
    row.append($("<td>" + rowData.balance + "</td>"));
    row.append($("<td>" + rowData.s_date+ "</td>"));
    row.append($("<td>" + rowData.status+ "</td>"));
    
}


function drawBkashTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawBkashRow(data[i]);
    }
}

function drawBkashRow(rowData) {
    var row = $("<tr />")
    $("#personDataTableBkash").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.phone+ "</td>"));
    row.append($("<td>" + rowData.balance + "</td>"));
    row.append($("<td>" + rowData.s_date+ "</td>"));
    row.append($("<td>" + rowData.status+ "</td>"));
    row.append($("<td>" + rowData.load_type+ "</td>"));
}



function drawFlexiTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawFlexiRow(data[i]);
    }
}
