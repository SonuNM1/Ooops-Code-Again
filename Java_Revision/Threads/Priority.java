package Threads;

class ThreadPriority extends Thread {
    public void run(){
        System.out.println("\n Thread is running");
    }
}

public class Priority {
    public static void main(String[] args) {
        
        ThreadPriority thread = new ThreadPriority() ; 

        System.out.println("\n Original priority: " + thread.getPriority());

        thread.setPriority(4) ; 

        System.out.println("\n New priority: " + thread.getPriority());
    }
}
