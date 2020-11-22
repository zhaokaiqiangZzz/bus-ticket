package xiaoqiangZzz.busticket.Repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import xiaoqiangZzz.busticket.Entity.User;

import javax.transaction.Transactional;
import java.util.Optional;

/**
 * 用户仓库
 */
public interface UserRepository extends CrudRepository<User, Long>, JpaSpecificationExecutor<User> {
    long count();

    /**
     * 根据用户名查询用户
     */
    @Transactional
    User findByUsername(String username);

    @Transactional
    Optional<User> findById(Long id);

    @Transactional
    default boolean existsById(Long id) {
        return this.findById(id).isPresent();
    }

    @Transactional
    Iterable<User> findAll();

    @Transactional
    Iterable<User> findAllById(Iterable<Long> ids);
}