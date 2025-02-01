package Exception;

public class NestedTryCatch {
    public static void main(String[] args) {
        
        try{

            // inner try block 1

            try{
                System.out.println("\n going to divide by 0");
                int b = 3/0 ; 
            }catch(ArithmeticException e){
                System.out.println("\n" + e);
            }

            // inner try block 2

            try{
                int[] a = new int[4] ;
                a[5] = 4 ;      // assigning the value out of array bound 
            }catch(ArrayIndexOutOfBoundsException e){
                System.out.println("\n" + e);
            }

        }catch(Exception e){
            System.out.println("\n handle the outer exception");
            e.printStackTrace();
        }

    }
}
