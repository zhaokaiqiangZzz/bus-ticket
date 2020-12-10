package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import xiaoqiangZzz.busticket.Entity.Ticket;

import java.util.Date;
import java.util.List;

public interface TicketService {
    // 保存
    Ticket save(Ticket ticket);

    // 编辑
    Ticket update(Long id, Ticket ticket);

    // 通过id获取
    Ticket getById(Long id);

    // 删除
    void cancel(Long id);

    Page<Ticket> page(Pageable pageable);

    void buy(Long id);
}
