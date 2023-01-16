({
    myAction : function(component, event, helper) {

    },
    sumar : function(component, event, helper) {
        var num1 = component.get("v.num1");
        console.log(num1);
        var num2 = component.get("v.num2");
        console.log(num2);
        var resultado = num1 + num2;
        component.set("v.resultado", resultado);
    },
    saveNum1 : function(component, event, helper) {
        var num1 = component.find("input1").get("v.value");
        component.set("v.num1", num1);
        console.log(num1);
    },
    saveNum2 : function(component, event, helper) {
        var num2 = component.find("input2").get("v.value");
        component.set("v.num2", num2);
        console.log(num2);
    }
})
