package Threads;

// reference to the currently executing thread 

class CurrentThread extends Thread {
    public void run(){
        System.out.println("\n Executing thread: " + Thread.currentThread().getName());
    }
}

public class CurrentThreadExample {
    public static void main(String[] args) {
        
        CurrentThread thread = new CurrentThread() ;
        thread.start() ; 

        System.out.println("\n Main thread: " + Thread.currentThread().getName());
    }
}
