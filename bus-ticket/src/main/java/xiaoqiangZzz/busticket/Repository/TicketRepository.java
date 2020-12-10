package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import xiaoqiangZzz.busticket.Entity.Ticket;

public interface TicketRepository extends PagingAndSortingRepository<Ticket, Long>, JpaSpecificationExecutor {
}
