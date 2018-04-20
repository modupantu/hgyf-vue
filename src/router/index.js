import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Brand from '@/components/Brand'
import Join from '@/components/Join'
import News from '@/components/News'
import Company from '@/components/template/company/Company'
import BrandMerit from '@/components/template/company/BrandMerit'
import BrandStpry from '@/components/template/company/BrandStpry'
import CompanyContact from '@/components/template/company/CompanyContact'
import Product from '@/components/template/product/Product'
import Shop from '@/components/template/product/Shop'
import JoinAdvantage from '@/components/template/join/JoinAdvantage'
import JoinFlow from '@/components/template/join/JoinFlow'
import NewList from '@/components/template/NewList'
import NewShow from '@/components/template/NewShow'
import NewShowA from '@/components/template/NewShowA'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/brand',
    component: Brand,
    children: [{
      path: '/',
      name: 'Company',
      component: Company
    }, {
      path: '/companycontact',
      name: 'CompanyContact',
      component: CompanyContact
    }, {
      path: '/brandmerit',
      name: 'BrandMerit',
      component: BrandMerit
    }, {
      path: '/brandstpry',
      name: 'BrandStpry',
      component: BrandStpry
    }]
  }, {
    path: '/about',
    component: About,
    children: [{
      path: '/',
      name: 'Product',
      component: Product
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }]
  }, {
    path: '/join',
    component: Join,
    children: [{
      path: '/',
      name: 'JoinFlow',
      component: JoinFlow
    }, {
      path: '/joinadvantage',
      name: 'JoinAdvantage',
      component: JoinAdvantage
    }]
  }, {
    path: '/news',
    component: News,
    children: [{
      path: '/',
      name: 'NewList',
      component: NewList
    }, {
      path: '/newshow',
      name: NewShow,
      component: NewShow
      }, {
        path: '/newshowa',
        name: NewShowA,
        component: NewShowA
      }]
  }]
})
