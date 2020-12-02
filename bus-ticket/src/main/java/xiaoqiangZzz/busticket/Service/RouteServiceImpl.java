package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Repository.CityRepository;
import xiaoqiangZzz.busticket.Repository.RouteRepository;

import javax.persistence.EntityNotFoundException;
import java.sql.Date;
import java.sql.Timestamp;

@Service
public class RouteServiceImpl implements RouteService {
    private final CityRepository cityRepository;
    private final RouteRepository routeRepository;
    public RouteServiceImpl(CityRepository cityRepository, RouteRepository routeRepository) {
        this.cityRepository = cityRepository;
        this.routeRepository = routeRepository;
    }
    @Override
    public Page<Route> page(String startCityName, String endCityName, Date date, Pageable pageable) {
        City startCity= null;
        City endCity= null;
        if (startCityName != null) {
            startCity = cityRepository.findByName(startCityName).orElseThrow(() -> new EntityNotFoundException("未找到起始城市"));
        }
        if (endCityName != null) {
            endCity = cityRepository.findByName(endCityName).orElseThrow(() -> new EntityNotFoundException("未找到终点城市"));
        }
        return routeRepository.findAllByStartStationCityAndEndStationCityAndStartTimeIsBetween(startCity, endCity, );

    }
}
