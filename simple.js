function lables(tagname,attrname,attrvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    let ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}
function linebreak(tagname){
    let br=document.createElement(tagname);
    return br;
}
function createbutton(tagname,content){
    let ele1=document.createElement(tagname);
    ele1.innerHTML=content;
}


var br=linebreak("br");
var br1=linebreak("br");
var br2=linebreak("br");
var br3=linebreak("br");
var br4=linebreak("br");
var br5=linebreak("br");
var br6=linebreak("br");
var br7=linebreak("br");
var br8=linebreak("br");
var br9=linebreak("br");
var br10=linebreak("br");
var br11=linebreak("br");
var br12=linebreak("br");
var firstname=lables("lable","for","fname","First Name");
var input=inputs("input","type","text","name","fname","id","fname",);
var middlename=lables("lable","for","mname","Middle Name");
var input1=inputs("input","type","text","name","mname","id","mname",);
var lastname=lables("lable","for","lname","Last Name");
var input2=inputs("input","type","text","name","lname","id","lname",);
var email=lables("lable","for","email","Email");
var input3=inputs("input","type","email","name","email","id","email",);
var password=lables("lable","for","password","Password");
var input4=inputs("input","type","password","name","password","id","password",);
var state=lables("lable","for","state","State");
var input5=inputs("input","type","text","name","state","id","state",);
var butt=inputs("input","type","button","value","Submit","class","btn-primary",);

document.body.append(firstname,br,input,br1,middlename,br2,input1,br3,lastname,br4,input2,br5,email,br6,input3,br7,password,br8,input4,br9,state,br10,input5,br11,br12,butt);

// console.log(input,br,input);