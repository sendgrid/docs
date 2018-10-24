SendGrid Belgeleri

Bu bir Gatsby sitesi.

Geliştirme dalı sürekli olarak bir önizleme sitesine dağıtılmıştır. Dev siteyi görüntüle

Geliştirme şubesi haftalık olarak üretime birleştirilir (bundan daha erken bir sürüm yapmamız gerekmedikçe).

Ana şube sürekli olarak üretime dağıtılmaktadır.

Lütfen, SendGrid Belgesini daha iyi hale getireceğini düşündüğünüz katkılardan çekinmeyin.
Tüm çekme isteklerini geliştirme dalına gönder

Çekme isteğiniz geliştirme dalına birleştirilmeden önce, tamamlanmış bir CLA göndermeniz gerekir.

İçindekiler
CLA'lar ve CCLA'lar
Yerel Kurulum
Hakkında
Lisans

CLA'lar ve CCLA'lar
Başlamadan önce SendGrid, SendGrid açık kaynaklı bir projeye her bir katılımcı tarafından bir SendGrid Katılımcı Lisans Sözleşmesi (CLA) doldurulmasını gerektirir.

CLA ile hedefimiz, katkıda bulunanlarımızın haklarını açıklığa kavuşturmak ve uygunsuz katkılardan kaynaklanan diğer riskleri azaltmaktır. CLA ayrıca her bir katkıda SendGrid'in sahip olduğu haklara açıklık getirmekte ve katkıda bulunan her bir hakemin SendGrid'e katkıda bulunduğunda hangi hakların verilmesi gerektiğini yanlış anlamaları engellemeye yardımcı olmaktadır. Bu şekilde CLA, açık kaynak topluluğumuzun geniş katılımını teşvik eder ve herhangi bir katkının haklarını saklı tutan veya iptal eden herhangi bir bireysel katkıdan arınmış güçlü açık kaynaklı projeler oluşturmamıza yardımcı olur.

SendGrid, bir SendGrid açık kaynak projesine yönelik bir çekme isteğini, bu istek isteği imzalanmış bir CLA ile ilişkilendirilene kadar birleştirmez. CLA'nın kopyaları burada mevcuttur.


Yerel Kurulum

Bağımlılıklar
Gereklidir:
Git
RVM
Homebrew
npm
yarn
Gatsby

Kurulum Adımları
Git'i yükleyin:

Mac
Windows
Linux
RVM yükle

$ \curl -sSL https://get.rvm.io | bash -s stable --ruby

Homebrew'ı yükle (if you don't have it)

$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

npm yükle

$ brew install npm

Not: İstenildiği gibi çalışmak için komuttan önce 'sudo' kullanmanız gerekebilir.

Node versiyonunuzu ayarlayın

$ npm install -g n

$ n 8.4.0

 yarn indirin

$ brew install yarn

Repo'yu klonlayın

$ git clone https://github.com/sendgrid/docs.git

Dokümanlar dizininize gidin

$ cd docs

Değişiklik yapmak için şube geliştirmek için geçiş yapın

$ git checkout develop

 Gatsby CLI kurun

$ npm install -g gatsby-cli

Npm paket bağımlılıklarını yükle

$ yarn install

Yerel siteyi oluştur

$ gatsby develop Gatsby starts a hot-reloading development environment accessible at localhost:8000


Hakkında
SendGrid, SendGrid Geliştirici Deneyimi Ekibi tarafından yönlendirilir ve desteklenir. SendGrid, Inc. tarafından saklanır ve finanse edilir. İsimler ve logolar SendGrid, Inc.'in ticari markalarıdır.


Lisans
MIT Lisansı (MIT)
