import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Page from '@/components/Page';

Vue.use(Router);

// 기본적으로 모드를 설정하면 hash 모드
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/:post',
      name: 'Page',
      component: Page,
    },
  ],
});
