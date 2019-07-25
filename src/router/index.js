import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/components/Service'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import PortfolioDetail from '@/components/PortfolioDetail'

Vue.use(Router)

export default new Router({

    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'service',
            component: Service
        },
        {
            path: '/services',
            name: 'service',
            component: Service
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
            children: [
                {
                    path: 'portfoliodetail/:slug',
                    name: 'portfolio.portfoliodetail',
                    component: PortfolioDetail
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})
