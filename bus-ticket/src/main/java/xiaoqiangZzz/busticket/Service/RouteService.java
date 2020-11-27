package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import xiaoqiangZzz.busticket.Entity.Route;

import java.sql.Timestamp;
import java.util.Date;

public interface RouteService {
    Page<Route> page(String startCityName, String endCityName, Date date, Pageable pageable);
}
