package xiaoqiangZzz.busticket.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Entity.Station;
import xiaoqiangZzz.busticket.Security.YunzhiSecurityRole;
import xiaoqiangZzz.busticket.Service.RouteService;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("route")
public class RouteController {
    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping("search")
    public Page<Route> page(@RequestParam(required = false) Long startCityId,
                            @RequestParam(required = false) Long endCityId,
                            @RequestParam(required = false) Long startTime,
                            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
                                   Pageable pageable) {
        Date date = null;
        if (startTime != null) {
            date = new Date(startTime);
        }
        System.out.println(startCityId);
        System.out.println(endCityId);
        System.out.println(startTime);
        return this.routeService.search(startCityId, endCityId, date, pageable);
    }

    @GetMapping("page")
    public Page<Route> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable) {
        return this.routeService.page(pageable);
    }

    @PostMapping
    public void add(@RequestBody Route route) {
        this.routeService.save(route);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.routeService.delete(id);
    }

    @GetMapping
//    @JsonView(GegAllJsonView.class)
    public List<Route> getAll() {
        return this.routeService.getAll();
    }

    @GetMapping("{id}")
    public Route getRouteById(@PathVariable Long id) {
        return this.routeService.getById(id);
    }

    @PutMapping("{id}")
    public Route update(@PathVariable Long id, @RequestBody Route route) {
        return this.routeService.update(id, route);
    }
}
