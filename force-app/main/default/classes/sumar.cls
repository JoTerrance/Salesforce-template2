public with sharing class sumar {
    public sumar() {

    }
    @AuraEnabled
    public static Integer sumador(Integer a, Integer b) {
        return a + b;
    }
}