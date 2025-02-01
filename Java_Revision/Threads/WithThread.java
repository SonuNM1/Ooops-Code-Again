package Threads;

class TaskThread extends Thread{

    public void run(){
        for(int i=1 ; i <= 5 ; i++){
            System.out.println("\n" + i + " - " + Thread.currentThread().getName());
    
            try{
                Thread.sleep(1000) ;
            }catch(InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}

public class WithThread {
    public static void main(String[] args) {

        TaskThread thread1 = new TaskThread() ;
        TaskThread thread2 = new TaskThread() ; 

        // starting threads 

        // thread1.run() ;      Calls run() [overriden in child class] like a normal method, doesn't start a new thread
        // thread2.run() ;

        thread1.start() ;
        thread2.start() ;
    }
}

// outputs (runs simultaneously -> faster execution). Both threads run concurrently, completing task in half time. 
