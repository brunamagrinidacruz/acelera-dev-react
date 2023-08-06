/**
 * Build é uma versão "compilada" de um software ou parte dele que
 * contém um conjunto de recursos que poderão integrar o projeto final
 * O create-react-app já nos dá tudo configurado, basta executar:
 * > npm run build
 * 
 * O Deploy é o ato de disponibilizar um sistema para uso, seja num ambiente
 * de desenvolvimento (para testes) ou em produção
 * Para serviços estáticos, podemos colocar em alguns desses servidores
 * - GitHub Pages
 * - Vercel (antigo Zeit)
 * - Firebase
 * - AWS S3
 * - Netlify
 * 
 *                  CI/CD são formas de produção de projetos
 *      O CI (Continuous Integration): Se baseia em integrar o código e rodar
 * os testes com muita frequência. Neste modelo, o merge das alterações só é feito
 * se o projeto passar em uma série de casos de teste. Dessa forma, você garante
 * que nada foi quebrado. Além disso, se os testes forem 100% confiáveis, 
 * não é necessário alguém visualizar o código para aprovar de ir para produção
 * pois tudo será automático.
 * Plataformas que fazem isso são Jenkis, Travis
 *      O CD (Continous Deployment): o CD é depois que tudo ficou, mandar para o deploy
 * Ou seja, toda vez que for feito merge e der tudo certo, será enviado para produção.
 * Assim temos deploys mais frequentes pois serão automáticos
 *      Podemos usar o CI sem o CD (fazer o deploy manualmente). Ou o CD sem o CI
 * (deploy automatico sem testes). Ou tudo manualmente
 * 
 * ----------------------------------------------------------------------
 * 
 * Qual a vantagem de utilizar a versão build do projeto e não apenas > npm run start?
 * Ao fazer 
 * > npm run build
 * O projeto recebe uma série de otimizações pelo Node para ficar mais rápido e eficiente
 * Além de melhorar funcionalidades de cache e etc
 * Após realizar o comando, é criado uma pasta build. Dentro dela, é o projeto
 * Se olharmos, a pasta /src sumiu. Isso porque tudo foi otimizado e minificado
 * Podemos fazer um teste dele rodando com
 * > npx serve -s build
 * Agora, instalamos o netlify 
 * > sudo npm install netlify-cli -g
 * E executamos
 * > netlify deploy
 * A partir disso, mexa na plataforma do Netlify
 * 
 */