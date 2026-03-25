
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
var e={beforeMount(e,t){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value(n)},document.addEventListener(`click`,e.clickOutsideEvent)},unmounted(e){document.removeEventListener(`click`,e.clickOutsideEvent)}};export{e as t};