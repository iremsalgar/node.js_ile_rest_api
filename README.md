# Node.js ile basit api yapımı

npm iniy --y

npm install --save express body-parser

npm install --save-dev nodemon

npm run start

REST (Representational State Transfer) API, bir web servisinin veri ve işlevlerine erişmek için kullanılan bir protokoldür. REST API'leri, HTTP isteklerini kullanarak bir sunucudan veri veya bir işlevin çalıştırılmasını istemek için kullanılır. Bu istekler genelde HTTP metotları olarak adlandırılır ve en yaygın olarak GET, POST, PUT ve DELETE metotlarıdır. REST API'leri, web uygulamalarının birbirleriyle ve diğer sistemlerle etkileşim kurmasını sağlar. Örneğin, bir mobil uygulama veya bir masaüstü uygulaması, bir web servisinin veri ve işlevlerine erişmek için REST API'lerini kullanabilir.

##bu klasör heroku-kablosuzkedi videosu baz alınarak yapılmıştır

* Nodemon, kaynak kodundaki değişiklikleri algıladığında Node.js uygulamanızı otomatik olarak yeniden başlatan bir araçtır. Kodunuzu test etmeyi ve hata ayıklamayı kolaylaştırmak için geliştirme sırasında yaygın olarak kullanılır.

* bodyParser kullanım nedeni gelen form yani json bilgilerini alabilmek
* veri.json dosyası kablosuzkediden alınmıştır.


400 hatası, HTTP (Hypertext Transfer Protocol) istemcilerinin (örneğin web tarayıcılarınız) sunuculara yaptıkları isteklerin yanlış yapılmış olma durumunu gösterir. Bu hatanın oluştuğu zaman, sunucu tarafında bir sorun olmadığı halde, istek yapısının doğru formatta olmadığı için işlem gerçekleştirilememiştir.

404 hatası, HTTP (Hypertext Transfer Protocol) istemcilerinin (örneğin web tarayıcılarınız) sunucularda aradıkları bir kaynak bulunamadığını gösterir. Bu hatanın oluştuğu zaman, sunucu tarafında aranan kaynak bulunamamıştır ve istek yerine getirilememiştir.

## localhost:3000

Localhost, bir bilgisayarın kendi içinde bulunan uygulamaların test edilmesi için kullanılan bir adrestir. Bu adres, bilgisayarın kendi içinde çalışan bir sunucuya (örneğin Apache veya Node.js gibi) bağlanır ve bu sunucunun barındırdığı uygulamaların test edilmesine olanak sağlar.

Genellikle, localhost adresine bağlanırken bir port numarası da belirtilir. Bu port numarası, sunucunun çalıştığı özel bir "bağlantı noktası" olarak düşünülebilir. Örneğin, "localhost:3000" adresine bağlanıldığında, bilgisayarınızdaki bir sunucu üzerinde çalışan ve 3000 numaralı bağlantı noktasını dinleyen bir uygulama aranır.

## postman kullanımı
[postman](https://www.postman.com/downloads/)

buradan indirebiliriz

Ardından get, delete, post gibi eklediğimiz komutları buradan deneyebiliriz.


![Screenshot from 2022-12-31 17-45-51](https://user-images.githubusercontent.com/74204825/210148567-66a0cad4-c24f-4a74-9cd7-5c65521478ed.png)


![Screenshot from 2022-12-31 17-48-51](https://user-images.githubusercontent.com/74204825/210148571-9199a3f7-add0-4952-8e08-326299627e56.png)




