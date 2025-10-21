import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiHouse, FaChartBar, MdDashboardTwotone, CoUser, BiShopWindow, CoSend, GiBoomerangSun, BiChatFill, CoMoon, CoSun, BiSearch, BiChat, BiBell, CoWallet, BiArrowRight, MdArrowdropdownOutlined, BiX, BiList } from 'oh-vue-icons/icons';

addIcons(BiHouse, FaChartBar, MdDashboardTwotone, CoUser, BiShopWindow, CoSend, GiBoomerangSun, BiChatFill, CoMoon, CoSun, BiSearch, BiChat, BiBell, CoWallet, BiArrowRight, MdArrowdropdownOutlined, BiX, BiList);

const app = createApp(App);

app.component('v-icon', OhVueIcon);

app.mount('#app');
