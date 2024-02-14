import request from "@/utils/http";
import {AxiosPromise} from "axios";
import {LoginData, LoginResult, VerifyCodeResult} from "./types";

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("verifyCode", data.verifyCode || "");
    return request({
        url: "/auth/signin",
        method: "post",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

/**
 * 获取验证码
 */
export function getCaptchaApi(data: LoginData): AxiosPromise<VerifyCodeResult> {
    const requestJsonData = JSON.stringify(data)
    console.log("auth.ts getCaptchaApi requestData:" + requestJsonData)
    return request({
        url: "/auth/getVerifyCode",
        method: "post",
        data: requestJsonData,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
