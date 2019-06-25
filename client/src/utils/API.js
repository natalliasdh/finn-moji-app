import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default {
  register: function(userInfo) {
    console.log("userInfo", userInfo);
    return axios.post("/api/signup", userInfo);
  },
  logIn: function(userCred) {
    console.log("userCred", userCred);
    return axios.post("/api/authenticate", userCred).then(function(result) {
      console.log("results!!!", result);
    });
  },
  addExpense: function(data) {
    console.log("userInfo", data);
    return axios.post(
      "/api/add-expense/" + localStorage.getItem("userId"),
      data
    );
  },
  addIncome: function(data) {
    console.log("userInfo", data);
    return axios.post(
      "/api/add-income/" + localStorage.getItem("userId"),
      data
    );
  },

  getIncome: function() {
    
    return axios.get(
      "/api/getIncome/" + localStorage.getItem("userId")
    );
  },

  getExpenses: function() {
    
    return axios.get(
      "/api/getExpenses/" + localStorage.getItem("userId")
    );
  },
  deleteIncome: function(id) {
    
    return axios.delete(
      "/api/deleteIncome/" + id
    );
  },

  deleteExpenses: function(id) {
    
    return axios.delete(
      "/api/deleteExpenses/" + id
    );
  },

  updateIncome: function(id, value) {
    console.log(value);
    console.log(id);
    return axios.put(
      "/api/updateIncome/" + id, value
    );
  },

  updateExpenses: function(id, value) {
    console.log(value);
    console.log(id);
    return axios.put(
      "/api/updateExpenses/" + id, value
    );
  }

};
