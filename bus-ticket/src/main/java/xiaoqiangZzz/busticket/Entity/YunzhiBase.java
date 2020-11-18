package xiaoqiangZzz.busticket.Entity;

import javax.persistence.*;

/**
 * 抽象实体
 */
@MappedSuperclass
public class YunzhiBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
