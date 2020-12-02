package xiaoqiangZzz.busticket.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Entity.User;
import xiaoqiangZzz.busticket.Security.YunzhiSecurityRole;
import xiaoqiangZzz.busticket.Service.RouteService;
import xiaoqiangZzz.busticket.Service.UserService;

import java.sql.Timestamp;
import java.util.Date;

@RestController
@RequestMapping("route")
public class RouteController {
    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }
    @GetMapping("page")
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public Page<Route> page(@RequestParam(required = false) String startCityName,
                            @RequestParam(required = false) String endCityName,
                            @RequestParam(required = false) Date date,
                            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
                                   Pageable pageable) {
        return this.routeService.page(startCityName, endCityName, date, pageable);
    }
}
