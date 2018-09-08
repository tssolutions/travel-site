import MobileMenu from './modules/mobilemenu';
import RelevalOnScroll from './modules/revealonscroll';
import $ from 'jquery';
import StickyHeader from './modules/sticky-header';

var mobileMenu = new MobileMenu();

new RelevalOnScroll($('.feature-item'), '85%');
new RelevalOnScroll($('.testimonial'), '60%');
var stickyHeader = new StickyHeader();
