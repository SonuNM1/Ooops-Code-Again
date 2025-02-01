package Exception;

public class TryCatchExample {
    public static void main(String[] args) {
        
        int a = 1 ;
        int b = 0 ; 
        // int c = a / b ;

        // System.out.println("\n Result: " + c); Arithmetic exception 

        try{
            int c = a/b ; 
            System.out.println("\n Result: " + c);
        }catch(ArithmeticException e){  
            e.printStackTrace();
        }

    }
}
