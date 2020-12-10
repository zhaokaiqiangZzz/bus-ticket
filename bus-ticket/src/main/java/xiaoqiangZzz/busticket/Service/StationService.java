package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import xiaoqiangZzz.busticket.Entity.Station;

import java.util.List;

public interface StationService {
    // 保存
    Station save(Station station);

    // 根据名称获取分页信息
    Page<Station> pageByName(String name, Pageable pageable);

    // 编辑
    Station update(Long id, Station station);

    // 通过id获取
    Station getById(Long id);

    // 删除
    void delete(Long id);

    List<Station> findByCity(Long cityId);

    List<Station> getAll();

    boolean nameExist(String name);
}
