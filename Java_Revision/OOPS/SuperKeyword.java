
class Base{

    // parent class constructor - no parameter (default constructor)

    Base(){
        System.out.println("\n Base class constructor");
    }

    // constructor overload 

    Base(int n){
        System.out.println("\n Overloading base class constructor with value: " + n);
    }
}

class Derived extends Base{
    Derived(){
        System.out.println("\n Derived class constructor");
    }
    Derived(int x, int y){
        super(x) ; // will call the paramterized constructor from parent class with 1 parameter

        System.out.println("\n Derived overloaded constructor with value of y as: " + y);
    }
}

public class SuperKeyword {
    public static void main(String[] args) {
        
    }
}
