package xiaoqiangZzz.busticket.Controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;
import xiaoqiangZzz.busticket.Entity.Ticket;
import xiaoqiangZzz.busticket.Service.TicketService;

import java.util.List;

@RequestMapping("ticket")
@RestController
public class TicketController {
    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("page")
    public Page<Ticket> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable) {
        return this.ticketService.page(pageable);
    }

//    @PostMapping
//    public void add(@RequestBody Ticket ticket) {
//        this.ticketService.save(ticket);
//    }

    @PutMapping("cancel/{id}")
    public void cancel(@PathVariable Long id) {
        this.ticketService.cancel(id);
    }

//    @GetMapping
//    public List<Ticket> getAll() {
//        return this.ticketService.getAll();
//    }

    @GetMapping("{id}")
    public Ticket getTicketById(@PathVariable Long id) {
        return this.ticketService.getById(id);
    }

    @PutMapping("{id}")
    public Ticket update(@PathVariable Long id, @RequestBody Ticket ticket) {
        return this.ticketService.update(id, ticket);
    }

    @PostMapping("{id}")
    public void buy(@PathVariable Long id) {
        this.ticketService.buy(id);
    }
}
