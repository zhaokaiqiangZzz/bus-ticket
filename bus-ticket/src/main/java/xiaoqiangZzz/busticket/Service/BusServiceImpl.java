package xiaoqiangZzz.busticket.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import xiaoqiangZzz.busticket.Entity.Bus;
import xiaoqiangZzz.busticket.Repository.BusRepository;

import java.util.List;

@Service
public class BusServiceImpl implements BusService {
    @Autowired
    BusRepository busRepository;

    @Override
    public Bus save(Bus bus) {
        return busRepository.save(bus);
    }

    @Override
    public Page<Bus> pageByBusNumber(String name, Pageable pageable) {
        return busRepository.findAllByBusNumberLike("%" + name + "%", pageable);
    }

    @Override
    public Bus update(Long id, Bus bus) {
        Bus oldBus = busRepository.findById(id).get();
        oldBus.setBusNumber(bus.getBusNumber());
        oldBus.setSeatNumber(bus.getSeatNumber());
        return busRepository.save(oldBus);
    }

    @Override
    public Bus getById(Long id) {
        return busRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        busRepository.deleteById(id);
    }

    @Override
    public List<Bus> getAll() {
        return this.busRepository.findAll();
    }

    @Override
    public boolean busNumberExist(String busNumber) {
        // 去除前后空格
        String busBusNumber = busNumber.trim();

        // 查询是否存在
        return this.busRepository.existsByBusNumber(busBusNumber);
    }
}
