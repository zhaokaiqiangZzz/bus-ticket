package xiaoqiangZzz.busticket.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import xiaoqiangZzz.busticket.Entity.Route;
import xiaoqiangZzz.busticket.Entity.Ticket;
import xiaoqiangZzz.busticket.Repository.RouteRepository;
import xiaoqiangZzz.busticket.Repository.TicketRepository;

import javax.persistence.EntityNotFoundException;

@Service
public class TicketServiceImpl implements TicketService {
    private final TicketRepository ticketRepository;
    private final RouteRepository routeRepository;
    private final UserService userService;
    public TicketServiceImpl(TicketRepository ticketRepository, RouteRepository routeRepository, UserService userService) {
        this.ticketRepository = ticketRepository;
        this.routeRepository = routeRepository;
        this.userService = userService;
    }
    @Override
    public Page<Ticket> page(Pageable pageable) {
        return ticketRepository.findAll(pageable);
    }

    @Override
    public void buy(Long id) {
        Route route = routeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("未找到起始城市"));
        Ticket ticket = new Ticket();
        ticket.setPrice(route.getPrice());
        ticket.setRoute(route);
        ticket.setUser(userService.getCurrentLoginUser());
        ticket.setStatus(0);
        this.ticketRepository.save(ticket);
        if (route.getBuyNumber() + 1 <= route.getBus().getSeatNumber()) {
            route.setBuyNumber(route.getBuyNumber() + 1);
        }
        this.routeRepository.save(route);
    }

    @Override
    public Ticket save(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public Ticket update(Long id, Ticket ticket) {
        Ticket oldTicket = ticketRepository.findById(id).get();
//        oldTicket.setBus(ticket.getBus());
//        oldTicket.setStartStation(ticket.getStartStation());
//        oldTicket.setStartTime(ticket.getStartTime());
//        oldTicket.setEndStation(ticket.getEndStation());
//        oldTicket.setEndTime(ticket.getEndTime());
//        oldTicket.setStartCity(ticket.getStartStation().getCity());
//        oldTicket.setEndCity(ticket.getEndStation().getCity());
        return ticketRepository.save(oldTicket);
    }

    @Override
    public Ticket getById(Long id) {
        return ticketRepository.findById(id).get();
    }

    @Override
    public void cancel(Long id) {
        Ticket ticket = ticketRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("未找到起始城市"));
        Route route = routeRepository.findById(ticket.getRoute().getId()).orElseThrow(() -> new EntityNotFoundException("未找到起始城市"));
        ticket.setStatus(1);
        this.ticketRepository.save(ticket);
        if (route.getBuyNumber() - 1 >= 0) {
            route.setBuyNumber(route.getBuyNumber() - 1);
            routeRepository.save(route);
        }
    }

}
