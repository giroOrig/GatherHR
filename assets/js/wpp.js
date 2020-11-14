jQuery(function($){ 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function(){
var celular='1155695060';
var final='<style>#whatsappSticky{z-index:99999999999999999999;border-radius:50%;display:none;background-color:#25d366;color:white;-webkit-transition: all 300ms ease-in-out;-moz-transition: all 300ms ease-in-out;-ms-transition: all 300ms ease-in-out;-o-transition: all 300ms ease-in-out;transition: all 300ms ease-in-out;box-sizing:border-box;-webkit-box-shadow: 0 2px 12px 0px rgba(0,0,0,.3);box-shadow: 0 2px 12px px rgba(0,0,0,.3);position:fixed; bottom:65px; right:13px;text-align:center;}#whatsappSticky:after{opacity:0;display:block;position:absolute;z-index:-1;right:calc(100% - 15px);top:calc(50% - 13.5px);font-size:15px;line-height:15px;-webkit-transition: all 300ms ease-in-out;-moz-transition: all 300ms ease-in-out;-ms-transition: all 300ms ease-in-out;-o-transition: all 300ms ease-in-out;transition: all 300ms ease-in-out;display:block;background-color:#25d366;color:white;content:"Enviar Whatsapp";text-align:right;padding: 6px 20px 6px 6px;border-radius:6px;white-space: nowrap;}#whatsappSticky:hover:after{opacity:1;}@media only screen and (max-width:480px){#whatsappSticky{width:48px;height:48px;font-size:28px;line-height:24px;padding:10px;}}@media only screen and (min-width:481px){#whatsappSticky{width:64px;height:64px;font-size:34px;line-height:24px;padding:15px;}}</style>'+'<a href="https://api.whatsapp.com/send?phone=549' + celular +'" id="whatsappSticky"><i class="fa fa-whatsapp"></i></a>';
$('body').append(final);$('#whatsappSticky').fadeIn(1000);
});
});