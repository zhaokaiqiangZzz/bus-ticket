package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Repository.CityRepository;
import xiaoqiangZzz.busticket.Repository.RouteRepository;

import javax.persistence.EntityNotFoundException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class RouteServiceImpl implements RouteService {
    private final CityRepository cityRepository;
    private final RouteRepository routeRepository;
    public RouteServiceImpl(CityRepository cityRepository, RouteRepository routeRepository) {
        this.cityRepository = cityRepository;
        this.routeRepository = routeRepository;
    }

    private java.util.Date getStartTime(java.util.Date date) {
        if (date == null) {
            date = new Date(2000, 01, 01);
        }
        Calendar todayStart = Calendar.getInstance();
        todayStart.setTime(date);
        todayStart.set(Calendar.HOUR_OF_DAY, 0);
        todayStart.set(Calendar.MINUTE, 0);
        todayStart.set(Calendar.SECOND, 0);
        todayStart.set(Calendar.MILLISECOND, 0);
        return todayStart.getTime();
    }

    private java.util.Date getEndTime(java.util.Date date) {
        if (date == null) {
            date = new Date(2030, 01, 01);
        }
        Calendar todayEnd = Calendar.getInstance();
        todayEnd.setTime(date);
        todayEnd.set(Calendar.HOUR_OF_DAY, 23);
        todayEnd.set(Calendar.MINUTE, 59);
        todayEnd.set(Calendar.SECOND, 59);
        return todayEnd.getTime();
    }


    @Override
    public Page<Route> search(String startCityName, String endCityName, Date date, Pageable pageable) {
        City startCity= null;
        City endCity= null;
        if (startCityName != null) {
            startCity = cityRepository.findByName(startCityName).orElseThrow(() -> new EntityNotFoundException("未找到起始城市"));
        }
        if (endCityName != null) {
            endCity = cityRepository.findByName(endCityName).orElseThrow(() -> new EntityNotFoundException("未找到终点城市"));
        }

        Date todayStartDate = getStartTime(date);
        Date todayEndDate = getEndTime(date);
        return routeRepository.findAllByStartStationCityAndEndStationCityAndStartTimeIsBetween(
                startCity, endCity, todayStartDate, todayEndDate, pageable);

    }

    @Override
    public Page<Route> page(Pageable pageable) {
        return routeRepository.findAll(pageable);
    }

    @Override
    public Route save(Route route) {
        route.setStartCity(route.getStartStation().getCity());
        route.setEndCity(route.getEndStation().getCity());
        return routeRepository.save(route);
    }

    @Override
    public Route update(Long id, Route route) {
        Route oldRoute = routeRepository.findById(id).get();
        oldRoute.setBus(route.getBus());
        oldRoute.setStartStation(route.getStartStation());
        oldRoute.setStartTime(route.getStartTime());
        oldRoute.setEndStation(route.getEndStation());
        oldRoute.setEndTime(route.getEndTime());
        oldRoute.setStartCity(route.getStartStation().getCity());
        oldRoute.setEndCity(route.getEndStation().getCity());
        return routeRepository.save(oldRoute);
    }

    @Override
    public Route getById(Long id) {
        return routeRepository.findById(id).get();
    }

    @Override
    public void delete(Long id) {
        routeRepository.deleteById(id);
    }

    @Override
    public List<Route> getAll() {
        return this.routeRepository.findAll();
    }
}
