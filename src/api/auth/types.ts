/**
 * 登录请求参数
 */
export interface LoginData {
    /**
     * 用户名
     */
    username: string;
    /**
     * 密码
     */
    password: string;

    /**
     * 验证码
     */
    verifyCode: string;
}

/**
 * 登录响应
 */
export interface LoginResult {
    /**
     * 访问token
     */
    token?: string;
}

/**
 * 验证码响应
 */
export interface VerifyCodeResult {
    /**
     * 验证码
     */
    verifyCode: string;
}
