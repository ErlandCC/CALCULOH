function calcularx(){
    var x = parseInt(document.getElementById('x').value);
    var d= x/3;
    var d=Math.round(d)+0
    var aux = d/2
    var aux =Math.round(aux)-1
    var aux2 = d/2
    var aux2 =Math.round(aux2)-2
    var n1 =aux;
    var n2 =aux2-1;
    var n3 = aux;
    var to1=n1+n2+n3;
    var s1 =aux2;
    var s2 =aux;
    var s3 =aux2;
    var to2=s1+s2+s3;
    var e1 =aux2;
    var e2 =aux;
    var e3 =aux2;
    var to3=e1+e2+e3;
    document.getElementById('ARABE1').innerHTML = ('EL PRIMER ARABE OBTUVO ' +n1+ ' VASOS LLENOS Y   ' +n2+ ' VASOS MEDIO LLENOS Y '+n3+' VASOS VACIO  TOTAL = '+to1+'');
    document.getElementById('ARABE2').innerHTML = ('EL PRIMER ARABE OBTUVO ' +s1+ ' VASOS LLENOS Y   ' +s2+ ' VASOS MEDIO LLENOS Y '+s3+' VASOS VACIO  TOTAL = '+to2+'');
    document.getElementById('ARABE3').innerHTML = ('EL PRIMER ARABE OBTUVO ' +e1+ ' VASOS LLENOS Y   ' +e2+ ' VASOS MEDIO LLENOS Y  '+e3+' VASOS VACIO  TOTAL = '+to3+'');
}
