package Threads;

/*
A thread in Java is a lightweight subprocess that allows concurrent execution of tasks. It enables multitasking and improve application performance by efficiently utilizing CPU resources. 

Without threads, a program executes sequentially, meaning one task must complete before the next starts. 
With threads, multiple tasks can run simultaneously, improving responsiveness and efficiency. 
*/

class Task{
    void printNumbers(){
        for(int i=1 ; i <= 5 ; i++){
            System.out.print("\n" + i + " - " + Thread.currentThread().getName());

            try{
                Thread.sleep(1000) ; 
            }catch(InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}

public class WithoutThread {
    public static void main(String[] args) {
        Task task = new Task() ; 

        // executing sequentially 

        task.printNumbers();
        task.printNumbers();
    }
}

// output (takes longer -> runs one by one). Each execution waits for the previous one to finish before starting 