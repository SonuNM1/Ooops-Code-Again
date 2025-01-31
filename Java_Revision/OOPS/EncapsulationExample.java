
class Person {
    private String name ; 
    private int age ; 

    public String getName(){
        return name ; 
    } 
    public void setName(String name){
        this.name = name ; 
    }

    public int getAge(){
        return age ; 
    }
    public void setAge(int age){
        if(age >= 0){
            this.age = age ; 
        }
        else {
            System.out.println("\n Invalid age");
        }
    }

}

public class EncapsulationExample {
    public static void main(String[] args) {
        
        Person p = new Person() ; 

        p.setName("Sonu NM");
        p.getName() ; 

        p.setAge(24);
        p.getAge() ; 

    }
}
