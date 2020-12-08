package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Entity.Station;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

public interface RouteService {
    Page<Route> search(String startCityName, String endCityName, Date date, Pageable pageable);

    // 保存
    Route save(Route route);

    // 编辑
    Route update(Long id, Route route);

    // 通过id获取
    Route getById(Long id);

    // 删除
    void delete(Long id);

    List<Route> getAll();

    Page<Route> page(Pageable pageable);
}
