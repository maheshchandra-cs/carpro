import authHeader from "../auth_header";
import axios from "axios";

const ORDER_URL = "http://localhost:8088/admin/order/";
const MECHANICS_URL = "http://localhost:8088/admin/mechanic/findAll"
const COMPLTED_ORDERS_URL = "http://localhost:8030/order/";

class AdminOrders {
  findPlacedOrders() {
    return axios
      .get(ORDER_URL + "findPlacedOrder", { headers: authHeader() })
      .then((res) => {
        console.log(res.data);
        return res.data.orders;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  assignOrder(orderId, mechanicId) {
    return axios
      .patch(
        ORDER_URL + `updateOrder/${orderId}`,
        {
          mechanicId,
        },
        { headers: authHeader() }
      )
      .then((res) => {
        return res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findCompletedOrders() {
    return axios
      .get(COMPLTED_ORDERS_URL + "findCompltedOrders")
      .then((res) => {
        return res.data.orders;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAllMechanics() {
    return axios
      .get(MECHANICS_URL, { headers: authHeader() })
      .then((res) => {
        console.log("The mechanics details are: ")
        //console.log(res.data);
        return res.data.response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new AdminOrders();
