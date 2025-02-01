
package Threads ; 

class MyThread implements Runnable {
    
    public void run(){
        System.out.println("\n Thread 1");
    }
}

class MyThread2 implements Runnable {

    @Override

    public void run(){
        System.out.println("Thread 2");
    }

}

public class ThreadExample1 {
    public static void main(String[] args) {
        
        MyThread obj1 = new MyThread() ; 
        Thread thread1 = new Thread(obj1) ; 
        thread1.run() ; 

        MyThread2 obj2 = new MyThread2() ;
        Thread thread2 = new Thread(obj2) ;
        thread1.run() ; 
    }
}
