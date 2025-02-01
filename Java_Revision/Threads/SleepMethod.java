package Threads;

class SleepExample extends Thread {
    public void run(){
        for(int i=1; i <= 5 ; i++){
            System.out.print("\n" + i + " - " + Thread.currentThread().getName());

            try{
                Thread.sleep(1000) ; 
            }catch(InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}

public class SleepMethod {
    public static void main(String[] args) {
        
        SleepExample sleep = new SleepExample() ; 
        SleepExample sleep2 = new SleepExample() ; 

        sleep.start() ; 
        sleep2.start() ; 
    }
}
