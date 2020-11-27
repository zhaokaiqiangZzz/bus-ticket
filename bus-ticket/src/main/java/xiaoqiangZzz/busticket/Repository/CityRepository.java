package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.User;

import javax.transaction.Transactional;
import java.util.Optional;

public interface CityRepository extends CrudRepository<City, Long>, JpaSpecificationExecutor<City> {
    /**
     * 根据名字查询用户
     */
    @Transactional
    Optional<City> findByName(String name);
}
