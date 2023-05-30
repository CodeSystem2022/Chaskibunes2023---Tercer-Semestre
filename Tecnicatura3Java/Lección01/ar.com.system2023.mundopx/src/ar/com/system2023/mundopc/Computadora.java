
package ar.com.system2023.mundopc;

public class Computadora {
    private final int IdComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;
    private int getIdComputadora;
    private static int contadorComputadoras;

    // Constructor vacio
    private Computadora() {
        this.IdComputadora = ++Computadora.contadorComputadoras;
    }

    // Constructor 2
    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton) {
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    //Colocamos los getters and setters
    public int GetIdComputadora(int getIdComputadora) {
        return IdComputadora;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Raton getRaton() {
        return raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }

    @Override
    public String toString(){
        return "Computadora{" + "idComputadora= " + IdComputadora + ", nombre=" + nombre + ", monitor=" + monitor + ", teclado="+ teclado + ", raton=" + raton + "}";
    }
}
