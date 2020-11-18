package xiaoqiangZzz.busticket.Entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.mengyunzhi.core.entity.YunzhiEntity;
import xiaoqiangZzz.busticket.service.BeanService;

import javax.persistence.*;

/**
 * 用户
 */
@Entity
public class User extends YunzhiBase implements YunzhiEntity {

    /**
     * 正常的用户状态
     */
    public static final Long UN_DELETED = 0L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 是否是超级管理员
     */
    private Boolean isAdmin = false;

    /**
     * 密码
     */
    @Column(nullable = false)
    @JsonView(PasswordJsonView.class)
    private String password;

    /**
     * 性别
     * false: 男
     * true:  女
     */
    private Boolean sex = false;

    /**
     * 手机号
     */
    private String phone;

    /** 身份证号 */
    private String identityId;
    /**
     * 用户名（手机号）
     */
    @Column(nullable = false)
    private String username;

    public User() {
    }

    public User(Long id) {
        this.id = id;
    }

    @Override
    public Long getId() {
        return this.id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = BeanService.getPasswordEncoder().encode(password);
    }

    public Boolean getSex() {
        return this.sex;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    /**
     * 校验密码
     *
     * @param password 密码
     * @return
     */
    public boolean verifyPassword(String password) {
        return BeanService.getPasswordEncoder().matches(password, this.password);
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getIdentityId() {
        return identityId;
    }

    public void setIdentityId(String identityId) {
        this.identityId = identityId;
    }

    public interface PasswordJsonView {
    }

    public interface DeleteAtJsonView {
    }

    public interface RolesJsonView {

    }

}
