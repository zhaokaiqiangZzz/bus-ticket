package xiaoqiangZzz.busticket.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Station;
import xiaoqiangZzz.busticket.Repository.CityRepository;
import xiaoqiangZzz.busticket.Repository.StationRepository;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {
    @Autowired
    CityRepository cityRepository;

    @Override
    public List<City> getAll() {
        return this.cityRepository.findAll();
    }
}