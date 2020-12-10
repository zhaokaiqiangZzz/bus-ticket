package xiaoqiangZzz.busticket.startup;

import com.alibaba.fastjson.JSON;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import xiaoqiangZzz.busticket.Entity.City;
import xiaoqiangZzz.busticket.Entity.User;
import xiaoqiangZzz.busticket.Repository.CityRepository;
import xiaoqiangZzz.busticket.Repository.UserRepository;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

/**
 * 初始化测试账户
 * admin / admin
 */
@Component
public class InitTestUser implements ApplicationListener<ContextRefreshedEvent> {

    private static final Logger logger = LoggerFactory.getLogger(InitTestUser.class);

    private final PasswordEncoder encoder;
    private final UserRepository userRepository;
    private final CityRepository cityRepository;

    static String path = "classpath:data/city.json";

    public InitTestUser(PasswordEncoder encoder, UserRepository userRepository, CityRepository cityRepository) {
        this.encoder = encoder;
        this.userRepository = userRepository;
        this.cityRepository = cityRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        if (!userRepository.findAll().iterator().hasNext()) {
            User user = new User();
            user.setUsername("123456");
            user.setName("赵凯强");
            user.setIdentityId("111111");
            user.setPassword("admin");
            user.setRole(User.ADMIN);
            this.userRepository.save(user);
        }
        if (!cityRepository.findAll().iterator().hasNext()) {
            File file = null;
            try {
                file = ResourceUtils.getFile(path);
                String content = new String(Files.readAllBytes(file.toPath()));
                List<City> cityList = JSON.parseArray(content, City.class);
                cityRepository.saveAll(cityList);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
//    User user = new User();
////        user.setUsername("123456");
////                user.setName("赵凯强");
////                user.setIdentityId("111111");
//                user.setPassword("admin");
//                user.setRole(User.ADMIN);
//                users.add(user);
