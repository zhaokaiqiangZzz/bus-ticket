package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Route;

import java.util.Date;
import java.util.List;

public interface RouteRepository extends PagingAndSortingRepository<Route, Long>, JpaSpecificationExecutor {

    Page<Route> findAllByStartStationCityAndEndStationCityAndStartTimeIsBetween(
            City startCity,
            City endCity,
            Date time1,
            Date time2,
            Pageable pageable);

    List<Route> findAll();
}
