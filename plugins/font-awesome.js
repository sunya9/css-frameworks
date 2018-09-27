import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShareAlt, faAngleDown, faStar, faCodeBranch, faBug } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faGooglePlus  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faShareAlt, faAngleDown, faTwitter, faFacebook, faGooglePlus, faStar, faCodeBranch, faBug)

Vue.component('font-awesome-icon', FontAwesomeIcon)
