
class Employee{
    int id ; 
    String name ; 

    public void displayDetails(){
        System.out.println("\nID: " + id);
        System.out.println("\nName: " + name);
    }
}

public class ClassExample{
    public static void main(String args[]){
        Employee sonu = new Employee() ; 

        sonu.id = 1 ; 
        sonu.name = "Sonu NM" ; 

        sonu.displayDetails();
    }
}