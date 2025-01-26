
class Records{
    int salary = 50000 ; 
}

class Programmer extends Records{
    int bonus = 8000 ; 
}

public class InheritanceExample {
    public static void main(String[] args) {
        Programmer sonu = new Programmer() ; 

        System.out.println("\nSalary: " + sonu.salary);
        System.out.println("\nBonus: " + sonu.bonus);
    }
}
