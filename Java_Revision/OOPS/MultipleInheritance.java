
interface Animal {
    void makeSound() ; 
    void eat() ; 
}

interface Flyable {
    void fly() ; 
}

class Bird implements Animal, Flyable{

    @Override

    public void makeSound(){
        System.out.println("\nChirp!");
    }

    @Override 

    public void eat(){
        System.out.println("\n Bird is eating");
    }

    @Override

    public void fly(){
        System.out.println("\n Bird flying");
    }

}

public class MultipleInheritance {
    public static void main(String[] args) {
        
        Bird bird = new Bird() ; 
        
        bird.makeSound() ; 
        bird.eat(); 
        bird.fly(); 

    }
}
