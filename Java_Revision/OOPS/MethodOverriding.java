
class Vehicle{
    void run(){
        System.out.println("\n Vehicle is running");
    }
}

class Bike extends Vehicle{

    // method overriding 

    void run(){
        System.out.println("\n Bike is running");
    }
}

public class MethodOverriding {
    public static void main(String[] args) {
        Bike obj = new Bike() ; 
        obj.run() ; 
    }
}
