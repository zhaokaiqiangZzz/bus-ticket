package xiaoqiangZzz.busticket.Controller;

import club.yunzhi.questionnaire.Entity.User;
import club.yunzhi.questionnaire.Input.PUser;
import club.yunzhi.questionnaire.Input.VUser;
import club.yunzhi.questionnaire.Security.YunzhiSecurityRole;
import club.yunzhi.questionnaire.Service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.ValidationException;
import java.util.List;

/**
 * 用户
 *
 * @author yz
 */
@RestController
@RequestMapping("user")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public void add(@RequestBody User user) {
        this.userService.add(user);
    }

    @PostMapping("checkPasswordIsRight")
    @Secured(YunzhiSecurityRole.ROLE_PERSONAL)
    public boolean checkPasswordIsRight(@RequestBody VUser vUser) {
        return this.userService.checkPasswordIsRight(vUser);
    }

    @DeleteMapping("{id}")
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public void delete(@PathVariable Long id) {
        this.userService.delete(id);
    }

    @GetMapping("existByPhone/{phoneNumber}")
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public Boolean existByPhone(@PathVariable String phoneNumber) {
        return this.userService.existByPhone(phoneNumber);
    }

    @GetMapping
    @Secured({YunzhiSecurityRole.ROLE_USER})
    public List<User> getAll() {
        return this.userService.getAll();
    }

    @GetMapping("{id}")
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public User getUserById(@PathVariable Long id) {
        return this.userService.getUserById(id);
    }

    @GetMapping("isUsernameExist")
    @Secured(YunzhiSecurityRole.ROLE_PERSONAL)
    public Boolean isUsernameExist(@RequestParam String username) {
        return this.userService.isUsernameExist(username);
    }


    @GetMapping("page")
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public Page<User> page(@RequestParam(required = false) String name,
                           @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
                                   Pageable pageable) {
        return this.userService.page(name, pageable);
    }

    @PatchMapping("resetPassword/{id}")
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public void resetPassword(@PathVariable Long id) {
        this.userService.resetPassword(id);
    }


    @PutMapping("{id}")
    @Secured(YunzhiSecurityRole.ROLE_USER)
    public User update(@PathVariable Long id, @RequestBody User user) {
        return this.userService.update(id, user);
    }

    @PutMapping("updatePassword")
    @Secured(YunzhiSecurityRole.ROLE_PERSONAL)
    public void updatePassword(@RequestBody VUser vUser) throws ValidationException {
        this.userService.updatePassword(vUser);
    }

    @PutMapping("updatePhone")
    @Secured(YunzhiSecurityRole.ROLE_PERSONAL)
    public void updatePhone(@RequestBody PUser pUser) throws ValidationException {
        this.userService.updatePhone(pUser);
    }

    @GetMapping("verifyPassword")
    public boolean verifyPassword() {
        return this.userService.verifyPassword();
    }

    @GetMapping("verifyPhoneNumber")
    @Secured(YunzhiSecurityRole.ROLE_PERSONAL)
    public Boolean verifyPhoneNumber(@RequestParam String phoneNumber) {
        return this.userService.verifyPhoneNumber(phoneNumber);
    }

    /**
     * 心跳方法
     */
    @GetMapping("heartbeat")
    public void heartbeat() {
        logger.info("heartbeat");
    }
}
