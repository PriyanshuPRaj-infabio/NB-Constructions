//When the page has loaded.
jQuery( document ).ready(function(){
	setTimeout(sitecreditload(), 10000);
	function sitecreditload(){
		
		jQuery.ajax({
			url: 'https://play.fabulousmedia.in/sitecredit/sitecredit.php',
			type: 'get',
			success: function(data){				
				jQuery('#sitecredit').html(data);							
			},
			error: function (xhr, ajaxOptions, thrownError) {
				var errorMsg = 'Ajax request failed: ' + xhr.responseText;
				jQuery('#sitecredit').html(errorMsg);
			}
		});
	}
});