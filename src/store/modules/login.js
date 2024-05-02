import { defineStore } from "pinia";
import axios from "axios";

export const loginStore = defineStore("useLoginStore", {
  state: () => ({
    loadings: false,
    userDetails: "",
  }),
  getters: {
    loading: (state) => state.loadings,
    userDetail: (state) => state.userDetails,
  },
  actions: {
    // for sign up page //
    // //first step
    sendUserNumber(data) {
      console.log(data);
      const sentData = {
        method: "post",
        url: process.env.VUE_APP_BASE_API_URL + `/send-otp`,
        body: {
          "phone-number": data.phone,
        },
      };
      return new Promise((resolve, reject) => {
        this.loadings = true;
        axios(sentData)
          .then((res) => {
            localStorage.setItem("phone-number", res.phone);
            localStorage.setItem("firstname", res.firstname);
            localStorage.setItem("lastname", res.lastname);
            localStorage.setItem("country", res.country);
            this.loadings = false;
            resolve(res);
          })
          .catch((error) => {
            this.loadings = false;
            reject(error);
          });
      });
    },
    // //secend step
    sendUserCode(data) {
      const sentData = {
        method: "post",
        url: process.env.VUE_APP_BASE_API_URL + `/verify-otp`,
        data: {
          "phone-number": localStorage.getItem("phone-number"),
          activation_code: data,
        },
      };
      return new Promise((resolve, reject) => {
        this.loadings = true;
        axios(sentData)
          .then((res) => {
            this.loadings = false;
            resolve(res);
          })
          .catch((error) => {
            this.loadings = false;
            reject(error);
          });
      });
    },
    // //third step
    sendUserPassword(data) {
      const sentData = {
        method: "post",
        url: process.env.VUE_APP_BASE_API_URL + `/signup`,
        data: {
          phone_number: localStorage.getItem("phone-number"),
          country: localStorage.getItem("country"),
          username: data.username,
          password: data.password,
          first_name: localStorage.getItem("firstname"),
          last_name: localStorage.getItem("lastname"),
        },
      };
      return new Promise((resolve, reject) => {
        this.loadings = true;
        axios(sentData)
          .then((res) => {
            this.loadings = false;
            resolve(res);
          })
          .catch((error) => {
            this.loadings = false;
            reject(error);
          });
      });
    },

    // for Login page //
    sendLoginUserDetails(data) {
      const sentData = {
        method: "post",
        url: process.env.VUE_APP_BASE_API_URL + `/login`,
        data: {
          username: data.username,
          password: data.password,
        },
      };
      return new Promise((resolve, reject) => {
        this.loadings = true;
        axios(sentData)
          .then((res) => {
            localStorage.setItem("token", res.token);
            this.loadings = false;
            resolve(res);
          })
          .catch((error) => {
            this.loadings = false;
            reject(error);
          });
      });
    },

    // for LogOut link //
    logoutUser() {
      const sentData = {
        method: "post",
        url: process.env.VUE_APP_BASE_API_URL + `/logout`,
        data: {
          token: localStorage.getItem("token")
        },
      };
      return new Promise((resolve, reject) => {
        this.loadings = true;
        axios(sentData)
          .then((res) => {
            localStorage.clear();
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
