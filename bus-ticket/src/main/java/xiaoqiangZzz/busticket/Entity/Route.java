package xiaoqiangZzz.busticket.Entity;


import javax.persistence.*;

@Entity
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Bus bus;

    private Long startTime;

    private Long endTime;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Station startStation;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Station endStation;

    private int buyNumber;

    private float price;

    private float discount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }

    public Long getStartTime() {
        return startTime;
    }

    public void setStartTime(Long startTime) {
        this.startTime = startTime;
    }

    public Long getEndTime() {
        return endTime;
    }

    public void setEndTime(Long endTime) {
        this.endTime = endTime;
    }

    public Station getStartStation() {
        return startStation;
    }

    public void setStartStation(Station startStation) {
        this.startStation = startStation;
    }

    public Station getEndStation() {
        return endStation;
    }

    public void setEndStation(Station endStation) {
        this.endStation = endStation;
    }

    public int getBuyNumber() {
        return buyNumber;
    }

    public void setBuyNumber(int buyNumber) {
        this.buyNumber = buyNumber;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getDiscount() {
        return discount;
    }

    public void setDiscount(float discount) {
        this.discount = discount;
    }
}
