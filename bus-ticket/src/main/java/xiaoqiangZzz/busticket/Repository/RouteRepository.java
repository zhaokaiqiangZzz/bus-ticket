package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Entity.User;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.Date;

public interface RouteRepository extends CrudRepository<Route, Long>, JpaSpecificationExecutor<Route> {
    @Transactional
    Iterable<Route> findAllByStartStationCityAndEndStationCityAndStartTimeIsBetween(
            City startCity,
            City endCity,
            Timestamp time1,
            Timestamp time2);

}
