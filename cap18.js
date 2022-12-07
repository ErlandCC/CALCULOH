function calcularn(){
    var n = parseInt(document.getElementById('n').value);
    var n1 =(56*n)/100;
    var n2 =(34*n)/100;
    var n3 = (12*n)/100;
    var s1 =Math.round(n1)-1;
    var s2 =Math.round(n2)-2;
    var s3 =Math.round(n3)-3;
    var e1 =s1/7;
    var e2 =s2/7;
    var e3 =s3/7;
    var sum =Math.round(e1)+3;
    var sum2 =Math.round(e2)+6;
    var sum3 =Math.round(e3)+9;
    document.getElementById('Fatima').innerHTML = ('FATIMA VENDIO  ' +s1+ ' Y  OBTUVO  ' +sum+ '  MONEDAS');
    document.getElementById('Cunda').innerHTML = ('CUNDA VENDIO  ' +s2+ ' Y  OBTUVO  ' +sum2+ '  MONEDAS');
    document.getElementById('Siha').innerHTML = ('SIHA VENDIO  ' +s3+ '   Y OBTUVO  ' +sum3+ ' MONEDAS');
}
