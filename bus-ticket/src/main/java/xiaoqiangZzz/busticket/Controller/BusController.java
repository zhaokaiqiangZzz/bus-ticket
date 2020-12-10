package xiaoqiangZzz.busticket.Controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;
import xiaoqiangZzz.busticket.Entity.Bus;
import xiaoqiangZzz.busticket.Service.BusService;

import java.util.List;

@RequestMapping("bus")
@RestController
public class BusController {
    private final BusService busService;

    public BusController(BusService busService) {
        this.busService = busService;
    }

    @PostMapping
    public void add(@RequestBody Bus bus) {
        this.busService.save(bus);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.busService.delete(id);
    }

    @GetMapping
//    @JsonView(GegAllJsonView.class)
    public List<Bus> getAll() {
        return this.busService.getAll();
    }

    @GetMapping("{id}")
    public Bus getBusById(@PathVariable Long id) {
        return this.busService.getById(id);
    }

    @GetMapping("page")
    public Page<Bus> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable) {
        return this.busService.pageByBusNumber("", pageable);
    }

    @PutMapping("{id}")
    public Bus update(@PathVariable Long id, @RequestBody Bus bus) {
        return this.busService.update(id, bus);
    }

    @GetMapping("busNumberExist/{busNumber}")
    public boolean busNumberExist(@PathVariable String busNumber) {
        return this.busService.busNumberExist(busNumber);
    }
}
