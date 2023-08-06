/**
 *  O PWA é uma aplicação híbrida entre web e mobile
 *  Ao acessar uma página ele pede para ser instalada no seu celular
 *  Após instalado você tem a mesma experiência porém como app
 *  A PWA não é um aplicativo, ela é uma página web que roda em cima
 * do navegador no celular mas parece um aplicativo
 *  As vatanges são:
 * - Poucas alterações no código do site para que ele vire PWA
 * - Utilização de HTML/CSS/Javascript
 * - Acesso á API's nativas como geolocalização, câmera, microfone, etc
 * - Envio de notificações push
 * - Aplicação muito leve (menos de 1MB geralmente)
 * - Suporte à utilização offline pois podemos manter as informações em cache
 * - Icone costumizado do app
 *  As desvatangens são:
 * - Suporte cross-browser (existem muitos navegadores)
 * - Sem acesso à vibração, sensores, comunicação com outros app, etc
 * - Não é possível adicioná-los às lojas de aplicativos
 * - Interface web pode perder perfomance em aplicações mais pesadas
 * - Pode não passar a legitima de uma aplicação mobile
 * 
 * O que é necessário?
 * - Service Worker: é um arquivo mais importante de uma PWA. Ele é responsável
 * pelo cache do seu website e dos seus assets. Ele é só um arquivo Javascript
 * que vai ser responsável por todo o trabalho pesado para você. Será uma
 * aplicação intermediária.
 * - manifest.json: é um arquivo que informa ao navegador informações sobre a aplicação,
 * ou seja, qual a imagem do ícone e do splash, a cor da barra de notificações, etc.
 * Basicamente, toda a configuração visual do seu PWA neste arquivo
 */