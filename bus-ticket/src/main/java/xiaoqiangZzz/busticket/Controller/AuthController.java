package xiaoqiangZzz.busticket.Controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;
import xiaoqiangZzz.busticket.Constant.AuthConst;
import xiaoqiangZzz.busticket.Entity.User;
import xiaoqiangZzz.busticket.Service.CacheService;
import xiaoqiangZzz.busticket.Service.UserService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.UUID;

@RestController
@RequestMapping("auth")
public class AuthController {
    interface getCurrentLoginUser extends User.RolesJsonView{
    }

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final UserService userService;
    private final CacheService<String, String> cacheService;

    public AuthController(UserService userService, CacheService<String, String> cacheService) {
        this.userService = userService;
        this.cacheService = cacheService;
    }

    @GetMapping("login")
    public void login(@AuthenticationPrincipal Principal user, HttpServletResponse response) {
        logger.debug("获取用户名");
        String username = user.getName();

        logger.info("用户: {} 登录系统", username);

        logger.debug("生成 UUID 防止伪造");
        String uuid = UUID.randomUUID().toString();

        logger.debug("认证信息写入缓存");
        this.cacheService.put(username, uuid);

        logger.debug("响应中携带验证码认证 cookie 信息");
        Cookie cookie = new Cookie(AuthConst.AUTH_COOKIE_ID, username + AuthConst.AUTH_COOKIE_SPLIT + uuid);
        cookie.setPath("/");
        response.addCookie(cookie);
    }

    @GetMapping("logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        logger.info("用户注销");
        // 获取用户认证信息
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // 存在认证信息，注销
        if (authentication != null) {
            new SecurityContextLogoutHandler().logout(request, response, authentication);
        }
    }

    @PostMapping("register")
    public void register(@RequestBody User user) {
        logger.debug("保存");
        System.out.println(user.getPassword());
        userService.saveWithPassword(user);
    }

    @GetMapping("user")
    @JsonView(getCurrentLoginUser.class)
    public User getCurrentLoginUser() {
        return this.userService.getCurrentLoginUser();
    }
}
