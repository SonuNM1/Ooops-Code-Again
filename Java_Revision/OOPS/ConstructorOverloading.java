
class Students{
    private int id ; 
    private String name ; 
    private int age ; 

    // default constructor 

    public Students(){
        this.id = 1; 
        this.name = "Sonu NM";
        this.age = 24 ; 
    }

    // Constructor with parameter 1 

    public Students(int id){
        this.id = id ;
        this.name = "Garima" ;
        this.age = 22 ; 
    }

    // Constructor with parameter 2 

    public Students(int id, String name){
        this.id = id ; 
        this.name = name ; 
        this.age = 21 ;
    }

    // Constructor with parameter 3 

    public Students(int id, String name, int age){
        this.id = id ; 
        this.name = name ; 
        this.age = age ; 
    }

    public void displayInfo(){
        System.out.println("\n ID: " + id + ", Name: " + name + ", Age: " + age);
    }

}

public class ConstructorOverloading {
    public static void main(String[] args) {
        
        // using different constructors 

        Students student1 = new Students() ; 
        Students student2 = new Students(2) ; 
        Students student3 = new Students(3, "Priyanka") ; 
        Students student4 = new Students(4, "Soni", 22) ; 

        // displaying student info 

        student1.displayInfo();
        student2.displayInfo();
        student3.displayInfo();
        student4.displayInfo();

    }
}
