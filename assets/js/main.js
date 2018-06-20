$(function(){
	$('#selectPay,#autoPay,#selectPayWeChat,#selectPayQQ,#selectPayAlipay').hide();
	var ua=navigator.userAgent;
	if(ua.indexOf('MicroMessenger/') != -1){
		$('#selectPay,#autoPay,#selectPayWeChat').show();
		$('#selectPayWeChat').removeClass().addClass('col-xs-12');
	}else if(ua.indexOf('QQ/') != -1){
		$('#selectPay,#autoPay,#selectPayQQ').show();
		$('#selectPayQQ').removeClass().addClass('col-xs-12');
	}else if(ua.indexOf('AlipayClient/') != -1){
		$('#selectPay,#autoPay,#selectPayAlipay').show();
		$('#selectPayAlipay').removeClass().addClass('col-xs-12');
	}else{
		$('#selectPay,#selectPayWeChat,#selectPayQQ,#selectPayAlipay').show();
	}
});