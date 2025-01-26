
class Student {
    private int id; 
    private String name ; 

    public void setName(String name){
        this.name = name ; 
    }
    public void setID(int id){
        this.id = id ; 
    }

    public String getName(){
        return name ; 
    }
    public int getId(){
        return id ; 
    }

    // Constructor 

    public Student(){
        id = 1 ; 
        name = "Sonu NM" ; 
    }

}

public class ConstructorExample {
    public static void main(String[] args) {
        Student sonu = new Student() ; // object creation 

        System.out.println(sonu.getId());
        System.out.println(sonu.getName());
    }
}
