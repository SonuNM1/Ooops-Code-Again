
interface Animal{

    // abstract method 

    void makeSound() ; 
    void eat() ; 

    int maxLifeSpan = 100 ; 
    String habitat = "Jungle" ; 
}

class Lion implements Animal{

    @Override

    public void makeSound(){
        System.out.println("\nRoar");
    }

    @Override

    public void eat(){
        System.out.println("\nLion is eating");
    }

}

public class InterfaceExample{
    public static void main(String[] args) {
        Lion lion = new Lion() ; 

        lion.makeSound(); 
        lion.eat();

        System.out.println("\n Max lifespan: " + Animal.maxLifeSpan);
        System.out.println("\n Habitat: " + Animal.habitat);

    }
}