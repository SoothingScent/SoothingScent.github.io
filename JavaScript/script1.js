function check(xx){
    var oid = xx.id.value;
    var opwd = xx.pwd.value;
    var omail = xx.mail.value;
    var ojuminx = xx.juminx.value;
    var ojuminy = xx.juminy.value;

    if(oid=="") {
    alert("아이디를 입력하세요");
    xx.id.focus();
    return false;
    }   
    if(oid.length < 6){
        alert("아이디가 6글자 미만입니다");
        xx.id.select();
        return false;
    }
    for(var i=0; i<oid.length; i++){
        var oid = oid.toUpperCase();
        if(!(('0'<=oid.charAt(i) && oid.charAt(i)<='9') || ('A' <=oid.charAt(i) && oid.charAt(i)<='Z'))){
            alert("영문이거나 숫자여야 합니다");
            xx.id.focus();
            return false;
        }
    }
    if(opwd==""){
        alert("비밀번호를 입력하세요");
        xx.pwd.focus();
        return false;
    }
    if(omail==""){
        alert("이메일을 입력하세요");
        xx.mail.focus();
        return false;
    }
    var gol = omail.indexOf("@"); //@가 포함된 위치값을 전달
    var jum = omail.indexOf(".");
    if(gol<=0 && jum<=0){
        alert("메일 형식에 맞지 않습니다");
        xx.mail.select();
        return false;
    }
    if(ojuminx.length!=6 || ojuminy.length!=7){
        alert("주민등록번호 형식에 맞지 않습니다.")
        xx.juminx.select();
        return false;
    }
    var hap = 0;
    for(var i=0; i<6; i++){
        hap = hap+(ojuminx.charAt(i)*(i+2));
    }
    var n1 = ojuminy.charAt(0);
    var n2 = ojuminy.charAt(1);
    var n3 = ojuminy.charAt(2);
    var n4 = ojuminy.charAt(3);
    var n5 = ojuminy.charAt(4);
    var n6 = ojuminy.charAt(5);
    var n7 = ojuminy.charAt(6);

    hap = hap+(n1*8+n2*9+n3*2+n4*3+n5*4+n6*5);
    hap=(11-(hap%11))%10;
    if(hap!=n7){
        alert("올바른 주민번호가 아닙니다.");
        return false;
    }
    
    return true
}