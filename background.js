
var now = new Date();
var a = document.createElement('a');
a.setAttribute('id','screen');
a.setAttribute('download',now);
a.href='';

function imageDonwload(el){
    html2canvas(el).then(function(canvas) {
        a.href=canvas.toDataURL("image/png");
        a.click();
    });

}


//var btn = document.querySelectorALL('.k-button');

// var btn = document.getElementById('btnRefund');
//     console.log(btn);

    
    $(document).on('click','.k-button' ,function() {
        imageDonwload(document.body);
    console.log(a);
    });
    
    