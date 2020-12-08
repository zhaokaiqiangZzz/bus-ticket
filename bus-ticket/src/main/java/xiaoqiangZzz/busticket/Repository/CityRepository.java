package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.Station;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface CityRepository extends PagingAndSortingRepository<City, Long>, JpaSpecificationExecutor {
    /**
     * 根据名字查询用户
     */
    @Transactional
    Optional<City> findByName(String name);

    List<City> findAll();
}
