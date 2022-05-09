import axios from "axios";

const liveAPIUrl = "https://gamestoretourism437647.herokuapp.com";
const localAPIUrl = "http://localhost:8081";

// set baseUrl to one of the above links for testing or live deployment
const baseUrl = liveAPIUrl;

export default {
  getAllStores: () => {
    return axios.get(`${baseUrl}/`);
  },

  getFeaturedStores: () => {
    return axios.get(`${baseUrl}/featuredstores`);
  },

  getStoreById: (id) => {
    return axios.get(`${baseUrl}/store/${id}`);
  },

  searchStore: (searchString) => {
    return axios.post(`${baseUrl}/simplesearch`, {
      searchString: searchString,
    });
  },

  advSearch: (searchCriteria) => {
    return axios.post(`${baseUrl}/advancedsearch`, {
      ...searchCriteria,
    });
  },

  createStore: (newStore) => {
    return axios.post(`${baseUrl}/createstore`, {
      newStore,
    });
  },

  createEvent: (newEvent, storeID) => {
    return axios.post(`${baseUrl}/createevent`, {
      newEvent,
      storeID,
    });
  },

  createProduct: (newProduct, storeID) => {
    return axios.post(`${baseUrl}/createproduct`, {
      newProduct,
      storeID,
    });
  },

  createImage: (newImage, storeID) => {
    return axios.post(`${baseUrl}/createimage`, {
      newImage,
      storeID,
    });
  },

  editStore: (edittedStore, storeID) => {
    return axios.put(`${baseUrl}/editstore`, {
      edittedStore,
      storeID,
    });
  },

  editEvent: (edittedEvent, storeID) => {
    return axios.put(`${baseUrl}/editevent`, {
      edittedEvent,
      storeID,
    });
  },

  editProduct: (edittedProduct, storeID) => {
    return axios.put(`${baseUrl}/editproduct`, {
      edittedProduct,
      storeID,
    });
  },

  deleteStore: (storeID) => {
    return axios.delete(`${baseUrl}/deletestore`, {
      data: { storeID },
    });
  },

  deleteEvent: (eventID, storeID) => {
    return axios.delete(`${baseUrl}/deleteevent`, {
      data: { eventID, storeID },
    });
  },

  deleteProduct: (productID, storeID) => {
    return axios.delete(`${baseUrl}/deleteproduct`, {
      data: { productID, storeID },
    });
  },

  deleteImage: (imageToDelete, storeID) => {
    return axios.delete(`${baseUrl}/deleteimage`, {
      data: { imageToDelete, storeID },
    });
  },
};
