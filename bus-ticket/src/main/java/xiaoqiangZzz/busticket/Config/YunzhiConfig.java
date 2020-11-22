package xiaoqiangZzz.busticket.Config;

import com.mengyunzhi.core.service.YunzhiService;
import com.mengyunzhi.core.service.YunzhiServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import xiaoqiangZzz.busticket.Service.CacheService;
import xiaoqiangZzz.busticket.Service.CacheServiceImpl;

@Configuration
public class YunzhiConfig {

    /**
     * 密码加密方式
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public YunzhiService yunzhiService() {
        return new YunzhiServiceImpl();
    }

    @Bean
    public CacheService<String, String> cacheService() {
        return new CacheServiceImpl<>();
    }
}
