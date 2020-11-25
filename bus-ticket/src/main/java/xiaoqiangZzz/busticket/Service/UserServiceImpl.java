package xiaoqiangZzz.busticket.Service;

import com.mengyunzhi.core.exception.ObjectNotFoundException;
import com.mengyunzhi.core.service.CommonService;
import com.mengyunzhi.core.service.YunzhiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import xiaoqiangZzz.busticket.Entity.User;
import xiaoqiangZzz.busticket.Input.PUser;
import xiaoqiangZzz.busticket.Input.VUser;
import xiaoqiangZzz.busticket.Repository.UserRepository;

import javax.persistence.EntityNotFoundException;
import javax.xml.bind.ValidationException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    public static final String DEFAULT_PASSWORD = "hebut";

    private final UserRepository userRepository;

    private final YunzhiService<User> yunzhiService;

    public UserServiceImpl(UserRepository userRepository, YunzhiService<User> yunzhiService) {
        this.userRepository = userRepository;
        this.yunzhiService = yunzhiService;
    }

    @Override
    public void add(User user) {
        user.setPassword(DEFAULT_PASSWORD);
        this.userRepository.save(user);
    }

    @Override
    public void delete(Long id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public User getOneUnsavedUser() {
        return UserService.getOneUser();
    }

    @Override
    public User getCurrentLoginUser() {
        logger.debug("初始化用户");
        User user = null;

        logger.debug("获取用户认证信息");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        logger.debug("根据认证信息查询用户");
        if (authentication != null && authentication.isAuthenticated()) {
            user = userRepository.findByUsername(authentication.getName());
        }

        return user;
    }

    @Override
    public void saveWithPassword(User user) {
        Assert.notNull(user, "用户信息不能为空");
        Assert.notNull(user.getName(), "用户姓名不能为空");
        Assert.notNull(user.getUsername(), "用户用户名不能为空");
        Assert.notNull(user.getIdentityId(), "用户身份证号不能为空");
        Assert.notNull(user.getPassword(), "对应密码不能为空");
        this.userRepository.save(user);
    }

    public User getOneSavedUser() {
        User user = this.getOneUnsavedUser();
        return this.userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return this.userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("找不到相关角色"));
    }

    @Override
    public List<User> getAll() {
        return (List<User>) this.userRepository.findAll();
    }

    @Override
    public Boolean isUsernameExist(String username) {
        logger.debug("根据新手机号查询用户");
        User user = this.userRepository.findByName(username);

        logger.debug("验证用户是否存在");
        if (user != null) {
            return true;
        } else {
            return user != null;
        }
    }

    @Override
    public Page<User> page(String name, Pageable pageable) {
        User user = new User();
        CommonService.setAllFieldsToNull(user);

        logger.debug("判断是否传入name");
        if (name != null) {
            user.setUsername(name);
        }

        return this.yunzhiService.page(this.userRepository, user, pageable);
    }


    @Override
    public User update(Long id, User user) {
        User oldUser = this.getUserById(id);
        oldUser.setName(user.getName());
        return this.userRepository.save(oldUser);
    }

    @Override
    public boolean checkPasswordIsRight(VUser vUser) {
        logger.debug("获取当前用户");
        User user = this.getCurrentLoginUser();

        logger.debug("比较密码是否正确");
        return user.verifyPassword(vUser.getPassword());
    }

    @Override
    public void updatePassword(VUser vUser) throws ValidationException {
        logger.debug("获取当前用户");
        User currentUser = this.getCurrentLoginUser();

        logger.debug("校验旧密码是否正确");
        if (!this.checkPasswordIsRight(vUser)) {
            throw new ValidationException("旧密码不正确");
        }

        logger.debug("更新密码");
        currentUser.setPassword(vUser.getNewPassword());
        this.userRepository.save(currentUser);
    }

    @Override
    public boolean verifyPassword() {
        logger.debug("获取当前用户");
        User currentUser = this.getCurrentLoginUser();

        logger.debug("验证密码是否是默认密码");
        return currentUser.verifyPassword(DEFAULT_PASSWORD);
    }

    @Override
    public void updatePhone(PUser pUser) throws ValidationException {
        logger.debug("获取当前用户");
        User currentUser = this.getCurrentLoginUser();

//        logger.debug("验证密码是否匹配");
//
//        logger.debug("校验旧密码是否正确");
//        if (!currentUser.verifyPassword(pUser.getPassword())) {
//            throw new ValidationException("旧密码不正确");
//        }

        logger.debug("更新手机号(用户名)");
        currentUser.setUsername(pUser.getNewPhoneNumber());
        this.userRepository.save(currentUser);
    }


    @Override
    public Boolean verifyPhoneNumber(String phoneNumber) {
        logger.debug("获取当前用户");
        User currentUser = this.getCurrentLoginUser();

        logger.debug("验证新老手机号是否一致");
        return currentUser.getUsername().equals(phoneNumber);
    }

    @Override
    public Boolean existByPhone(String phoneNumber) {
        return this.userRepository.findByName(phoneNumber) != null;
    }


    /**
     * 重置密码
     *
     * @param id 用户id
     * @author pj
     */
    @Override
    public void resetPassword(Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException("实体未找到: " + id.toString()));
        user.setPassword(DEFAULT_PASSWORD);
        this.userRepository.save(user);
    }

    /**
     * 将上传的性别转换成Boolean 类型
     *
     * @param sex 上传的性别
     * @return 男 false 女 true
     */
    public Boolean formatSex(String sex) throws ValidationException {
        String man = "男";

        String woman = "女";
        if (man.equals(sex)) {
            return false;
        }
        if (woman.equals(sex)) {
            return true;
        }

        throw new ValidationException("上传的性别格式不正确");
    }
}
