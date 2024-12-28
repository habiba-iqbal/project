var con_rel = {
    POUND : {POUND:1 , DOLLAR:1.26,EURO:1.20},
    DOLLAR :{dollar:1,POUND:0.79,EURO:0.95},
    EURO:{EURO:1,dollar:1.05,EURO:0.84}
}
function converter()
{
    var input1=document.getElementById("inn1").value;
    var input2=document.getElementById("inn2").value;

    var box_1=document.getElementById("box_1");
    var box_2=document.getElementById("box_2");

    var rel_1=document.getElementById("p1");
    var rel_1=document.getElementById("p2");

    var converted = con_rel[in1][in2]*box_1.value;box_2.value =converted

    rel_1.innerText=`${box_1.value}${input1}=`
    rel_2.innerText=`${box_2.value}${input2}`
}