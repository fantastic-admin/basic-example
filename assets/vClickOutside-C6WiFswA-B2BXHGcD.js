
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const c={beforeMount(e,n){e.clickOutsideEvent=function(t){e===t.target||e.contains(t.target)||n.value(t)},document.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.removeEventListener("click",e.clickOutsideEvent)}};export{c as i};
