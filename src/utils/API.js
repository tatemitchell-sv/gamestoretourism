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

  createStore: (newStore) => {
    return axios.post("http://localhost:8081/createstore", {
      newStore,
    });
  },

  createEvent: (newEvent, storeID) => {
    return axios.post("http://localhost:8081/createevent", {
      newEvent,
      storeID,
    });
  },

  createProduct: (newProduct, storeID) => {
    return axios.post("http://localhost:8081/createproduct", {
      newProduct,
      storeID,
    });
  },

  createImage: (newImage, storeID) => {
    return axios.post("http://localhost:8081/createimage", {
      newImage,
      storeID,
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

  editProduct: (edittedProduct, storeID) => {
    return axios.put("http://localhost:8081/editproduct", {
      edittedProduct,
      storeID,
    });
  },

  deleteStore: (storeID) => {
    return axios.delete("http://localhost:8081/deletestore", {
      data: { storeID },
    });
  },

  deleteEvent: (eventID, storeID) => {
    return axios.delete("http://localhost:8081/deleteevent", {
      data: { eventID, storeID },
    });
  },

  deleteProduct: (productID, storeID) => {
    return axios.delete("http://localhost:8081/deleteproduct", {
      data: { productID, storeID },
    });
  },

  deleteImage: (imageToDelete, storeID) => {
    return axios.delete("http://localhost:8081/deleteimage", {
      data: { imageToDelete, storeID },
    });
  },
};
