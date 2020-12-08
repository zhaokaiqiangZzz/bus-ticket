package xiaoqiangZzz.busticket.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import xiaoqiangZzz.busticket.Entity.Station;
import xiaoqiangZzz.busticket.Service.StationService;

import java.util.List;

@RequestMapping("station")
@RestController
public class StationController {
    private final StationService stationService;

    public StationController(StationService stationService) {
        this.stationService = stationService;
    }

    @PostMapping
    public void add(@RequestBody Station station) {
        this.stationService.save(station);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.stationService.delete(id);
    }

    @GetMapping
//    @JsonView(GegAllJsonView.class)
    public List<Station> getAll() {
        return this.stationService.getAll();
    }

    @GetMapping("{id}")
    public Station getStationById(@PathVariable Long id) {
        return this.stationService.getById(id);
    }

    @GetMapping("page")
    public Page<Station> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable) {
        return this.stationService.pageByName("", pageable);
    }

    @PutMapping("{id}")
    public Station update(@PathVariable Long id, @RequestBody Station station) {
        return this.stationService.update(id, station);
    }

    interface GegAllJsonView {
    }
}
