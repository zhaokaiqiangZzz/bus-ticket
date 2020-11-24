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
    public static final int ADMIN = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 是否是超级管理员
     */
    private int role = 0;

    /**
     * 密码
     */
    @Column(nullable = false)
    @JsonView(PasswordJsonView.class)
    private String password;

    /**
     * 姓名
     */
    private String name;

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

    /**
     * 校验密码
     *
     * @param password 密码
     * @return
     */
    public boolean verifyPassword(String password) {
        return BeanService.getPasswordEncoder().matches(password, this.password);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdentityId() {
        return identityId;
    }

    public void setIdentityId(String identityId) {
        this.identityId = identityId;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public interface PasswordJsonView {
    }

    public interface DeleteAtJsonView {
    }

    public interface RolesJsonView {

    }

}
