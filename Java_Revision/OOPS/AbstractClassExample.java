
// abstract class

abstract class Shape{

    // abstract method that must be implemented by subclass 

    public abstract double calculateArea() ;

}

// concrete subclass Rectangle extending shape 

class Rectangle extends Shape{
    private double length ; 
    private double width ; 

    // constructor for rectangle class 

    public Rectangle(double width, double length){
        this.width = width ; 
        this.length = length ; 
    }

    // implementing the abstract method calculateArea() 

    @Override

    public double calculateArea(){
        return width * length ; 
    }
}

// concrete subclass Circle extending shape 

class Circle extends Shape{
    private double radius ; 

    // constructor 

    public Circle(double radius){
        this.radius = radius ; 
    }

    // implementing the abstract method calculateArea()

    @Override 

    public double calculateArea(){
        return Math.PI * radius * radius ; 
    }
}

public class AbstractClassExample{
    public static void main(String[] args) {
        
        Rectangle rectangle = new Rectangle(2, 2) ; 
        Circle circle = new Circle(2) ; 

        System.out.println("\n Rectangle area: " + rectangle.calculateArea());

        System.out.println("\n Circle area: " + circle.calculateArea());

    }
}