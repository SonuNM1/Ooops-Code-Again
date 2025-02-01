package Exception;

import java.util.Scanner;

class UnderAgeException extends Exception {

    // default constructor 

    UnderAgeException(){
        super("\n You are under age") ; 
    }

    // parametrized constructor - constructor overloading

    UnderAgeException(String message){
        super(message) ; 
    }
}

public class ThrowExample {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in) ; 

        System.out.println("\n Enter your age");
        int age = sc.nextInt() ; 

        try{
            if(age < 18){
                throw new UnderAgeException() ; 
            }
        }catch(Exception e){
            e.printStackTrace(); 
        }

    }
}
