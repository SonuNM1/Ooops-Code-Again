package Threads;

public class Naming {
    public static void main(String[] args) {
        
        Thread t1 = new Thread() ; 
        Thread t2 = new Thread() ; 

        System.out.print("\nThread 1 original name: " + t1.getName());
        System.out.print("\nThread 2 original name: " + t2.getName());

        t1.start() ;
        t2.start() ; 

        t1.setName("Sonu NM") ; 
        t2.setName("Garima");

        System.out.print("\n Thread 1 new name: " + t1.getName());
        System.out.print("\n Thread 2 new name: " + t2.getName());
    }
}
