package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import xiaoqiangZzz.busticket.Entity.Bus;

import java.util.List;

public interface BusRepository extends PagingAndSortingRepository<Bus, Long>, JpaSpecificationExecutor {
    Page<Bus> findAllByBusNumberLike(String busNumber, Pageable pageable);

    List<Bus> findAll();
}
