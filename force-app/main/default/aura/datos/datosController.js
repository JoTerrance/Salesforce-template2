({
    myAction : function(component, event, helper) {

    },
    sumar : function(component, event, helper) {
        var num1 = component.get("v.num1");
        console.log(num1);
        var num2 = component.get("v.num2");
        console.log(num2);
        var sumador = component.get("c.sumador");
        sumador.setCallback(function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                resultado = response.getReturnValue();
                component.set("v.resultado", resultado);
            }
        });
        sumador.setParams({a : num1, b : num2});
        $A.enqueueAction(sumador);
        //var resultado = num1 + num2;
        //component.set("v.resultado", resultado);
    },
    saveNum1 : function(component, event, helper) 
    {   
        var l_input =component.find("input0").get("v.value");
        console.log(l_input);
        var num1 = component.find("input1").getElement().value;
        component.set("v.num1", num1);
        console.log(num1);
    },
    saveNum2 : function(component, event, helper) {
        var num2 = component.find("input2").getElement().value;
        component.set("v.num2", num2);
        console.log(num2);
    }
})
