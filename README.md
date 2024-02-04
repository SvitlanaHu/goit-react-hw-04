# goit-react-hw-04

Створіть репозиторій з назвою goit-react-hw-04
При здачі домашньої роботи надайте два посилання: одне на вихідні файли та інше на робочу сторінку завдання на Vercel.
Проект повинен бути створений за допомогою Vite.
Під час запуску коду завдання в консолі не повинно бути помилок або попереджень.
Кожен компонент повинен мати власний файл у папці src/components.
JS-код має бути чистим і зрозумілим, використовуйте Prettier.
Стилізація повинна бути виконана за допомогою CSS-модулів.

Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Подивіться демо-відео роботи застосунку.

Сервіс пошуку зображень

В цьому завданні, за допомогою HTTP-запитів, ти будеш отримувати зображення з сервісу зображень Unsplash.

Зареєструй аккаунт розробника, щоб отримати доступ до документації та можливості взаємодіяти з бекендом.
Створи запис про своєму додатку на їхньому сервісі (блок New Application). Це обов'язковий крок. Придумай назву свого додатку, наприклад Image Gallery, Photo Search або щось подібне.
Після створення запису про додаток, на його сторінці отримай в розділі Keys ключ доступу для HTTP-запитів (Access Key).

Для безкоштовної (Demo) версії додатків, кількість HTTP-запитів обмежено до 50 штук на годину, врахуй це і не роби багато непотрібних запитів!

Корисні для тебе розділи документації:

Як скласти URL-запиту
Як додати ключ доступу до запитів
Пошук зображень за ключовим словом

Відповідь від бекенда приходить об'єктом із всією необхідною інформацією. Там ти знайдеш масив зображень та загальну кількість груп для пагінації. Кожне зображення в масиві представлено об'єктом із великою кількістю інформації. В першу чергу тебе цікавлять посилання на різні за розміром версії зображення у властивості urls. Використовуй small версію для карток галереї, та regular версію для модального вікна.

Не обмежуйся завданням, використовуй дані із об'єктів, щоб відобразити більше цікавої інформації в модальному вікні. Наприклад, про автора зображення, кількість лайків, опис і т.д.

Компоненти

У цьому завданні тобі потрібно самостійно виділити наступні компоненти та додати базову стилізацію інтерфейсу на свій смак. Бери за приклад демо-відео роботи застосунку.

Хедер з формою пошуку

Компонент SearchBar приймає один проп onSubmit – функцію для передачі значення інпуту під час сабміту форми. Створює DOM-елемент наступної структури.

<header>
  <form>
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>

Якщо при сабміті форми текстове поле порожнє, покажи користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень. Для сповіщень використовуй бібліотеку React Hot Toast.

Галерея зображень

Компонент ImageGallery – це список карток зображень який створює DOM-елемент наступної структури.

<ul>
	{/* Набір елементів списку із зображеннями */}
	<li>
		<div>
		  <img src="" alt="" />
		</div>
	</li>
</ul>

Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені зображення. Це добра практика не включати елемент li в компонент карточки, а залишити його частиною компонента галереї.

Картка зображення

Компонент ImageCard рендериться в елементі галереї. Створює DOM-елемент наступної структури.

<div>
  <img src="" alt="" />
</div>

Індикатор завантаження

Компонент Loader відображається під галереєю поки відбувається завантаження зображень. Використовуй будь-який готовий компонент, наприклад react-loader-spinner або інший.

Поки йде завантаження зображень, індикатор завантаження не повинен замінювати галерею, а просто рендеритися під нею. Це буде критичним при додаванні зображень до вже завантажених.

Повідомлення про помилку

Компонент ErrorMessage рендериться замість галереї зображень у випадку помилки HTTP-запиту. Достатньо, щоб це було текстове повідомлення.

Кнопка завантаження додаткових зображень

Компонент LoadMoreBtn рендерить кнопку із текстом "Load more". При натисканні на кнопку має завантажуватися наступна порція зображень і рендеритися разом із попередніми.

Кнопка має рендеритися лише тоді, коли є які-небудь завантажені зображення.
Якщо масив зображень порожній, кнопка не рендериться.

Модальне вікно

При кліці на елемент галереї має відкриватися модальне вікно ImageModal із темним оверлеєм і показуватися, принаймні, велика версія зображення. Модальне вікно має закриватися по натисканні клавіші ESC або кліку на оверлеї. Для створення повноцінного модального вікна використовуй бібліотеку React Modal.
