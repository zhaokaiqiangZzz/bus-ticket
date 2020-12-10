package xiaoqiangZzz.busticket.Entity;


import javax.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Route route;

//    @ManyToOne
//    @JoinColumn(nullable = false)
//    private Orders orders;

    @ManyToOne
    @JoinColumn(nullable = false)
    private User user;

    private float price;

    private int status;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }

//    public Orders getOrders() {
//        return orders;
//    }
//
//    public void setOrders(Orders orders) {
//        this.orders = orders;
//    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
