import axios from "axios";

export default {
  getAllStores: () => {
    return axios.get("http://localhost:8081/");
  },

  getStoreById: (id) => {
    return axios.get(`http://localhost:8081/store/${id}`);
  },

  searchStore: (searchString) => {
    return axios.post("http://localhost:8081/simplesearch", {
      searchString: searchString,
    });
  },

  advSearch: (searchCriteria) => {
    return axios.post("http://localhost:8081/advancedsearch", {
      ...searchCriteria,
    });
  },

  createEvent: (newEvent, storeID) => {
    return axios.post("http://localhost:8081/createevent", {
      newEvent,
      storeID,
    });
  },
};
