package xiaoqiangZzz.busticket.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Station;
import xiaoqiangZzz.busticket.Repository.StationRepository;

import java.util.List;

@Service
public class StationServiceImpl implements StationService {
    @Autowired
    StationRepository stationRepository;

    @Override
    public Station save(Station station) {
        return stationRepository.save(station);
    }

    @Override
    public Page<Station> pageByName(String name, Pageable pageable) {
        return stationRepository.findAllByNameLike("%" + name + "%", pageable);
    }

    @Override
    public Station update(Long id, Station station) {
        Station oldStation = stationRepository.findById(id).get();
        oldStation.setCity(station.getCity());
        oldStation.setName(station.getName());
        return stationRepository.save(oldStation);
    }

    @Override
    public Station getById(Long id) {
        return stationRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        stationRepository.deleteById(id);
    }

    @Override
    public List<Station> findByCity(Long cityId) {
        City city = new City();
        city.setId(cityId);
        return stationRepository.findAllByCity(city);
    }

    @Override
    public List<Station> getAll() {
        return this.stationRepository.findAll();
    }

    @Override
    public boolean nameExist(String name) {
        // 去除前后空格
        String stationName = name.trim();

        // 查询是否存在
        return this.stationRepository.existsByName(stationName);
    }
}
