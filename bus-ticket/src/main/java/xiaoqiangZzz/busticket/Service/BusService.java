package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import xiaoqiangZzz.busticket.Entity.Bus;

import java.util.List;

public interface BusService {
    // 保存
    Bus save(Bus station);

    // 根据名称获取分页信息
    Page<Bus> pageByBusNumber(String busNumber, Pageable pageable);

    // 编辑
    Bus update(Long id, Bus station);

    // 通过id获取
    Bus getById(Long id);

    // 删除
    void delete(Long id);

    List<Bus> getAll();

    boolean busNumberExist(String busNumber);
}
