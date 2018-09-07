import MobileMenu from './modules/mobilemenu';
import RelevalOnScroll from './modules/revealonscroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RelevalOnScroll($('.feature-item'), '85%');
new RelevalOnScroll($('.testimonial'), '60%');
