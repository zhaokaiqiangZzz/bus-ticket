package xiaoqiangZzz.busticket.Config;

import club.yunzhi.questionnaire.Entity.User;
import club.yunzhi.questionnaire.Service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.method.HandlerTypePredicate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
import java.util.Optional;

/**
 * WEB配置
 * @author yz
 */
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    public static String ADMIN_PREFIX = "admin";
    /**
     * 配置JsonView
     * @param converters
     */
    @Override
    public void configureMessageConverters(final List<HttpMessageConverter<?>> converters) {
        final ObjectMapper mapper = Jackson2ObjectMapperBuilder.json().defaultViewInclusion(true).build();
        converters.add(new MappingJackson2HttpMessageConverter(mapper));
    }


    /**
     * URL忽略大小写
     * 为admin包设置访问前缀
     *
     * @param configurer 配置信息
     */
    @Override
    public void configurePathMatch(final PathMatchConfigurer configurer) {
        final AntPathMatcher pathMatcher = new AntPathMatcher();
        pathMatcher.setCaseSensitive(false);
        configurer.setPathMatcher(pathMatcher);
        configurer.addPathPrefix(ADMIN_PREFIX, HandlerTypePredicate.forBasePackage("club.yunzhi.exam.controller.admin"));
    }

    @Bean
    public SpringSecurityAuditorAware auditorProvider() {
        return new SpringSecurityAuditorAware();
    }

    /**
     * 审计 获取当前登录用户实现
     */
    private class SpringSecurityAuditorAware implements AuditorAware<User> {

        @Autowired
        private UserService userService;

        @Override
        public Optional<User> getCurrentAuditor() {
            User user = this.userService.getCurrentLoginUser();
            if (user == null) {
                throw new RuntimeException("未获取到当前登录用户");
            }

            return Optional.of(user);
        }
    }
}
