export default () => defineStore ('pages', {

  state: () => ({

    contact: {
      isAddressInAside: false
    }

  }),


  actions: {

    patchContactIsAddressInAside (is = true) {
      this.contact.isAddressInAside = is
    }

  }

})