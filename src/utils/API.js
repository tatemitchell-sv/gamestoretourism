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

  createStore: (newStore) => {
    return axios.post("http://localhost:8081/createstore", {
      newStore,
    });
  },

  editStore: (edittedStore, storeID) => {
    return axios.put("http://localhost:8081/editstore", {
      edittedStore,
      storeID,
    });
  },

  editEvent: (edittedEvent, storeID) => {
    return axios.put("http://localhost:8081/editevent", {
      edittedEvent,
      storeID,
    });
  },

  deleteEvent: (eventID, storeID) => {
    console.log("event id: ", eventID);
    console.log("store id: ", storeID);
    return axios.delete("http://localhost:8081/deleteevent", {
      data: { eventID, storeID },
    });
  },
};
