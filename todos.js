$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//click on x to delete
$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	 event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
	if(event.which===13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span> X </span>"+todoText+"</li>")
	}
});