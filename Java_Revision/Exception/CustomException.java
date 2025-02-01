package Exception;

// Exception class - is the base class of all the exceptions in java. custom exception can be created 

class UnderAgeException extends Exception {

    // no argument constructor - default constructor 

    UnderAgeException(){
        super("\n You are under age") ; 
    }

    // parametrized constructor (method overloading)

    UnderAgeException(String message){
        super(message) ; 
    }

}

public class CustomException {
    public static void main(String[] args) {
        
        int age = 17 ; 

        try{
            if(age < 18){
                throw new UnderAgeException() ; 
            }
        }catch(UnderAgeException e){
            e.printStackTrace();
        }

    }
}
