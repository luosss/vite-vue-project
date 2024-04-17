import {defineStore} from "pinia"

export const useSidebarStore = defineStore({
  id:'sidebar',
  state:() => {
    return {
      collapse:false
    }
  },
  actions: {
		handleCollapse() {
			this.collapse = !this.collapse;
		}
	}
})