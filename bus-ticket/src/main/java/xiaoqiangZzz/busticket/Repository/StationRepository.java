package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Station;

import java.util.List;

public interface StationRepository extends PagingAndSortingRepository<Station, Long>, JpaSpecificationExecutor {
    Page<Station> findAllByNameLike(String name, Pageable pageable);

    List<Station> findAllByCity(City city);

    List<Station> findAll();

    boolean existsByName(String stationName);
}
