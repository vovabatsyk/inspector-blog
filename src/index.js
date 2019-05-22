import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {FavoriteComponent} from './components/favorite.component'
import {PostsComponent} from './components/posts.component'
import {CreateComponent} from './components/create.component'
import {LoaderComponent} from './components/loader.component'
import {AboutComponent} from './components/about.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const loader = new LoaderComponent('loader')

const create = new CreateComponent('create')

const posts = new PostsComponent('posts', {loader})

const favorite = new FavoriteComponent('favorite', {loader})

const about = new AboutComponent('about')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite},
    {name: 'about', component: about}

])
